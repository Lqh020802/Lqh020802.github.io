import{_ as n}from"./\u5FEB\u6377\u952E.b8b7cf92.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as t,e}from"./app.e13026ea.js";const p={},o=e(`<ol><li>\u53F3\u952E\u83DC\u5355\u662F\u5728\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u6253\u5F00</li></ol><p>\u9996\u5148\u662F\u9700\u8981\u5236\u4F5C\u53F3\u952E\u83DC\u5355\u6A21\u677F\u548C\u9876\u90E8\u83DC\u5355\u680F\u7C7B\u4F3C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> rigthTemplate <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u7C98\u8D34&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accelerator</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+v&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FEB\u6377\u952E</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;\u590D\u5236&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accelerator</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+c&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5236\u4F5C\u597D\u53F3\u952E\u83DC\u5355\u6A21\u677F\u540E,\u6211\u4EEC\u9700\u8981\u5C06\u83DC\u5355\u6A21\u677F\u8FDB\u884C\u4F7F\u7528</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9996\u5148\u9700\u8981\u5F15\u5165 Menu \u6A21\u5757</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@electron/remote&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F15\u5165\u6A21\u5757\u540E,\u5C06\u5199\u597D\u7684\u83DC\u5355\u6A21\u677F\u4F7F\u7528 Menu.buildFromTemplate() \u65B9\u6CD5\u5BFC\u5165</span>

<span class="token keyword">let</span> m <span class="token operator">=</span> Menu<span class="token punctuation">.</span><span class="token function">buildFromTemplate</span><span class="token punctuation">(</span>rigthTemplate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u6700\u540E\u4F7F\u7528 \u53F3\u952E\u4E8B\u4EF6</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;contextmenu&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6</span>
  m<span class="token punctuation">.</span><span class="token function">popup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u76F4\u63A5\u8C03\u7528\u65B9\u6CD5</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+'" alt=""></p>',8),c=[o];function l(i,u){return a(),t("div",null,c)}var v=s(p,[["render",l],["__file","10-\u53F3\u952E\u83DC\u5355.html.vue"]]);export{v as default};
