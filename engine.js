(function(root){
  'use strict';
  const finite=v=>v!==null&&v!==undefined&&String(v).trim()!==''&&Number.isFinite(Number(v));
  const round=n=>Math.round((n+Number.EPSILON)*100)/100;
  function calculate({sugar,basis='100',serving=100,volume}){
    if(basis==='unknown')return {ok:false,code:'unknown',message:'没有单独标出的糖含量，不能用碳水化合物代替。'};
    if(!['100','serving'].includes(basis))return {ok:false,code:'basis',message:'请选择每100 mL或每份的标示方式。'};
    if(!finite(sugar)||!finite(volume)||(basis==='serving'&&!finite(serving)))return {ok:false,code:'empty',message:'请填全糖含量、对应份量和实际饮用量。'};
    const s=Number(sugar),v=Number(volume),base=basis==='100'?100:Number(serving);
    if(s<0||s>100||v<0||v>2000||base<=0||base>2000)return {ok:false,code:'range',message:'本工具支持糖含量0—100 g、饮用量0—2000 mL、每份容量大于0且不超过2000 mL。'};
    return {ok:true,grams:round(s*v/base),concentration:round(s/base*100),base,sugar:s,volume:v,formula:`${s} × ${v} ÷ ${base}`};
  }
  function compare(a,b){const x=calculate(a),y=calculate(b);if(!x.ok||!y.ok)return {ok:false,message:'信息不足，暂不能比较糖总量。',a:x,b:y};const diff=round(Math.abs(x.grams-y.grams));return {ok:true,a:x,b:y,diff,lower:diff===0?'equal':x.grams<y.grams?'a':'b'};}
  function markAttempt(previous,selected,correct){return {first:previous?previous.first:selected,selected,correct,attempts:(previous?.attempts||0)+1};}
  function summarize(records,ids){const answered=ids.filter(id=>records[id]);return {answered:answered.length,total:ids.length,firstCorrect:answered.filter(id=>records[id].first===records[id].correct).length,currentCorrect:answered.filter(id=>records[id].selected===records[id].correct).length};}
  const api={calculate,compare,markAttempt,summarize,round};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.SugarCore=api;
})(globalThis);
