import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,b as u,w as a,e as r,r as k,a as n,d as s}from"./app.e13026ea.js";var d="/assets/08.8c53fda7.jpg",v="/assets/09.95d2e7cd.jpg";const m={},b=r(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u867D\u7136\u4F60\u73B0\u5728\u53EF\u4EE5\u6253\u5F00\u4E00\u4E2A\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u4F46\u4F60\u8FD8\u9700\u8981\u4E00\u4E9B\u989D\u5916\u7684\u6A21\u677F\u4EE3\u7801\u4F7F\u5176\u770B\u8D77\u6765\u66F4\u50CF\u662F\u5404\u5E73\u53F0\u539F\u751F\u7684\u3002 \u5E94\u7528\u7A0B\u5E8F\u7A97\u53E3\u5728\u6BCF\u4E2AOS\u4E0B\u6709\u4E0D\u540C\u7684\u884C\u4E3A\uFF0C<code>Electron</code> \u5C06\u5728 <code>app</code> \u4E2D\u5B9E\u73B0\u8FD9\u4E9B\u7EA6\u5B9A\u7684\u8D23\u4EFB\u4EA4\u7ED9\u5F00\u53D1\u8005\u4EEC\u3002 \u4E00\u822C\u800C\u8A00\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>\u8FDB\u7A0B</code> \u5168\u5C40\u7684 <code>platform</code> \u5C5E\u6027\u6765\u4E13\u95E8\u4E3A\u67D0\u4E9B\u64CD\u4F5C\u7CFB\u7EDF\u8FD0\u884C\u4EE3\u7801\u3002</p></div><h4 id="\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528-windows-linux" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528-windows-linux" aria-hidden="true">#</a> \u5173\u95ED\u6240\u6709\u7A97\u53E3\u65F6\u9000\u51FA\u5E94\u7528 (Windows &amp; Linux)</h4><p>\u5728<code>Windows</code> \u548C <code>Linux</code> \u4E0A,\u5173\u95ED\u7A97\u53E3\u4F1A\u5B8C\u5168\u9000\u51FA\u4E00\u4E2A\u7A0B\u5E8F</p><p>\u5B9E\u73B0\u9700\u8981 <code>app</code> \u6A21\u5757\u7684 <code>window-all-closd</code> \u4E8B\u4EF6,\u5982\u679C\u7528\u6237\u4E0D\u662F\u5728 <code>macOS(darwin)</code> \u4E0A\u8FD0\u884C\u7A0B\u5E8F,\u5219\u9700\u8981\u8C03\u7528 <code>app.quit()</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   app<span class="token punctuation">.</span><span class="token function">on</span> <span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token comment">// Darwin\u662F\u7531\u82F9\u679C\u7535\u8111\u4E8E2000\u5E74\u5F00\u53D1\u7684\u4E00\u4E2A\u5F00\u653E\u539F\u59CB\u7801\u64CD\u4F5C\u7CFB\u7EDF</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span> process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span> <span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">quit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3-macos" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3-macos" aria-hidden="true">#</a> \u5982\u679C\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u5219\u6253\u5F00\u4E00\u4E2A\u7A97\u53E3 (macOS)</h4><blockquote><p>\u5F53 <code>Linux</code> \u548C <code>Windows</code> \u5E94\u7528\u5728\u6CA1\u6709\u7A97\u53E3\u6253\u5F00\u65F6\u9000\u51FA\u4E86\uFF0C<code>macOS</code> \u5E94\u7528\u901A\u5E38\u5373\u4F7F\u5728\u6CA1\u6709\u6253\u5F00\u4EFB\u4F55\u7A97\u53E3\u7684\u60C5\u51B5\u4E0B\u4E5F\u7EE7\u7EED\u8FD0\u884C\uFF0C\u5E76\u4E14\u5728\u6CA1\u6709\u7A97\u53E3\u53EF\u7528\u7684\u60C5\u51B5\u4E0B\u6FC0\u6D3B\u5E94\u7528\u65F6\u4F1A\u6253\u5F00\u65B0\u7684\u7A97\u53E3\u3002</p></blockquote><blockquote><p>\u5B9E\u73B0\u8FD9\u4E00\u7279\u6027,\u76D1\u542C <code>app</code> \u6A21\u5757\u7684 <code>active</code>\u4E8B\u4EF6, \u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u6D4F\u89C8\u5668\u7A97\u53E3\u6253\u5F00,\u5219\u8C03\u7528 <code>createWindow()</code> \u65B9\u6CD5</p></blockquote><blockquote><p>\u7A97\u53E3\u65E0\u6CD5\u5728 <code>ready</code> \u4E8B\u4EF6\u524D\u521B\u5EFA, \u5E94\u5F53\u5728\u5E94\u7528\u521D\u59CB\u5316\u540E \u4EC5\u76D1\u542C <code>active</code>\u4E8B\u4EF6, \u901A\u8FC7\u73B0\u6709\u7684 <code>whenReady()</code> \u56DE\u8C03\u4E2D \u4E8B\u4EF6\u76D1\u542C\u5668\u6765\u5B8C\u6210\u8FD9\u4E2A\u64CD\u4F5C.</p></blockquote><p><img src="`+d+`" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  app<span class="token punctuation">.</span><span class="token function">whenReady</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">createWindow</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">on</span> <span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span> <span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">quit</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/**
     *process.platform\u53D8\u91CF\u53EF\u4EE5\u5E2E\u52A9\u60A8\u5728\u67D0\u4E9B\u5E73\u53F0\u4E0A\u6709\u6761\u4EF6\u5730\u8FD0\u884C\u4EE3\u7801
     */</span>
    app<span class="token punctuation">.</span><span class="token function">on</span> <span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> BrowserWindow<span class="token punctuation">.</span><span class="token function">getAllWindows</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token function">createWindow</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token doc-comment comment">/**
     * BrowserWindow.getAllWindows()
     * \u8FD4\u56DE BrowserWindow[] - \u6240\u6709\u6253\u5F00\u7684\u7A97\u53E3\u7684\u6570\u7EC4
     */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u901A\u8FC7\u9884\u52A0\u8F7D\u811A\u672C\u4ECE\u6E32\u67D3\u5668\u8BBF\u95EEnode-js\u3002" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u9884\u52A0\u8F7D\u811A\u672C\u4ECE\u6E32\u67D3\u5668\u8BBF\u95EEnode-js\u3002" aria-hidden="true">#</a> \u901A\u8FC7\u9884\u52A0\u8F7D\u811A\u672C\u4ECE\u6E32\u67D3\u5668\u8BBF\u95EENode.js\u3002</h4><h4 id="\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\u811A\u672C" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u9884\u52A0\u8F7D\u811A\u672C?</h4><blockquote><p><code>Electron</code> \u7684\u4E3B\u8FDB\u7A0B\u662F\u4E00\u4E2A\u5177\u6709\u5B8C\u5168\u64CD\u4F5C\u7CFB\u7EDF\u8BBF\u95EE\u6743\u9650\u7684 <code>Node.js</code> \u73AF\u5883\u3002\u5728 <code>Electron</code> \u6A21\u5757\u4E4B\u4E0A\uFF0C\u53EF\u4EE5\u8BBF\u95EE<code>Node.js</code> \u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u901A\u8FC7 <code>npm</code> \u5B89\u88C5\u7684\u4EFB\u4F55\u5305\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u6E32\u67D3\u5668\u8FDB\u7A0B\u8FD0\u884C\u7F51\u9875\u5E76\u4E14\u51FA\u4E8E\u5B89\u5168\u539F\u56E0\u9ED8\u8BA4\u4E0D\u8FD0\u884C <code>Node.js</code>\u3002</p></blockquote><h4 id="\u4F7F\u7528\u9884\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u9884\u52A0\u8F7D" aria-hidden="true">#</a> \u4F7F\u7528\u9884\u52A0\u8F7D</h4><blockquote><p><code>BrowserWindow</code> \u7684\u9884\u52A0\u8F7D\u811A\u672C\u5728\u53EF\u4EE5\u8BBF\u95EE <code>HTML</code> <code>DOM</code> \u548C <code>Node.js</code> \u73AF\u5883\u7684\u4E0A\u4E0B\u6587\u4E2D\u8FD0\u884C\u3002\u9884\u52A0\u8F7D\u811A\u672C\u662F\u5728\u7F51\u9875\u52A0\u8F7D\u5230\u6E32\u67D3\u5668\u4E4B\u524D\u6CE8\u5165\u7684\uFF0C\u7C7B\u4F3C\u4E8E <code>Chrome</code> \u6269\u5C55\u7684\u5185\u5BB9\u811A\u672C\u3002\u8981\u5C06\u9700\u8981\u7279\u6743\u8BBF\u95EE\u7684\u529F\u80FD\u6DFB\u52A0\u5230\u6E32\u67D3\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>contextBridge</code> API\u5B9A\u4E49\u5168\u5C40\u5BF9\u8C61</p></blockquote><blockquote><p>\u6848\u4F8B: \u521B\u5EFA\u4E00\u4E2A <code>preload.js</code> \u811A\u672C,\u5C06 <code>Electron</code> \u5BF9\u8C61\u7684\u9009\u5B9A\u5C5E\u6027\u516C\u5F00\u7ED9\u5168\u5C40\u53D8\u91CF <code>process.versions</code> \u4E2D\u7684\u6E32\u67D3\u5668\u8FDB\u7A0B <code>versions</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> preload<span class="token punctuation">.</span>js

<span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span> <span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>
contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span> <span class="token punctuation">(</span><span class="token string">&#39;versions&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
 <span class="token function-variable function">node</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>node<span class="token punctuation">,</span>
 <span class="token function-variable function">chrome</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>chrome<span class="token punctuation">,</span>
 <span class="token function-variable function">electron</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>electron<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5C06\u6B64\u811A\u672C\u9644\u52A0\u5230\u4E3B\u8FDB\u7A0B,\u5C06\u8DEF\u5F84\u4F20\u9012\u7ED9 <code>webPreferences.preload</code> BrowserWindow \u6784\u9020\u51FD\u6570\u4E2D\u7684\u9009\u9879</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    main<span class="token punctuation">.</span>js
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span> <span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * width electron\u7A97\u53E3 \u5BBD\u5EA6
         * height electron\u7A97\u53E3 \u9AD8\u5EA6
         */</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span> <span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;preload.js&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">openDevTools</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span><span class="token function">loadFile</span> <span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u52A0\u8F7D\u7F51\u9875</span>
<span class="token punctuation">}</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E24\u4E2A Node.js \u6982\u5FF5\uFF1A</p><ul><li>__dirname\u5B57\u7B26\u4E32\u6307\u5411\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u811A\u672C\u7684\u8DEF\u5F84\uFF08\u5728\u672C\u4F8B\u4E2D\u4E3A\u60A8\u9879\u76EE\u7684\u6839\u6587\u4EF6\u5939\uFF09\u3002</li><li>path.join\u591A\u4E2A\u8DEF\u5F84\u6BB5\u8FDE\u63A5\u5728\u4E00\u8D77\uFF0C\u521B\u5EFA\u4E00\u4E2A\u9002\u7528\u4E8E\u6240\u6709\u5E73\u53F0\u7684\u7EC4\u5408\u8DEF\u5F84\u5B57\u7B26\u4E32\u3002</li></ul></div><blockquote><p>\u521B\u5EFA <code>render.js</code> \u4EE3\u7801\u5982\u4E0B:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> information <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span> <span class="token punctuation">(</span><span class="token string">&#39;info&#39;</span><span class="token punctuation">)</span>
information<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This app is using Chrome (v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> versions<span class="token punctuation">.</span><span class="token function">chrome</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">), Node.js (v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> versions<span class="token punctuation">.</span><span class="token function">node</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">), and Electron (v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> versions<span class="token punctuation">.</span><span class="token function">electron</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt=""></p><p><strong>\u6210\u529F\u663E\u793A!</strong></p><blockquote><p>\u5B8C\u6574\u4EE3\u7801:</p></blockquote>',26),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'electron'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'path'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createWindow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" win "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"BrowserWindow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token doc-comment comment"},`/**
         * width electron\u7A97\u53E3 \u5BBD\u5EA6
         * height electron\u7A97\u53E3 \u9AD8\u5EA6
         */`),s(`
        `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"400"),n("span",{class:"token punctuation"},","),s(`
        
        `),n("span",{class:"token literal-property property"},"webPreferences"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"preload"),n("span",{class:"token operator"},":"),s(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),s(),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'preload.js'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"nodeIntegration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    win`),n("span",{class:"token punctuation"},"."),s("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openDevTools"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    win`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadFile"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// \u52A0\u8F7D\u7F51\u9875"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"whenReady"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"createWindow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'window-all-closed'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" process"),n("span",{class:"token punctuation"},"."),s("platform "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'darwin'"),s(),n("span",{class:"token punctuation"},")"),s(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"quit"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    
    app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'activate'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(" BrowserWindow"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAllWindows"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"createWindow"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token doc-comment comment"},`/**
     * BrowserWindow.getAllWindows()
     * \u8FD4\u56DE BrowserWindow[] - \u6240\u6709\u6253\u5F00\u7684\u7A97\u53E3\u7684\u6570\u7EC4
     */`),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" contextBridge "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'electron'"),n("span",{class:"token punctuation"},")"),s(`
contextBridge`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exposeInMainWorld"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'versions'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"node"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" process"),n("span",{class:"token punctuation"},"."),s("versions"),n("span",{class:"token punctuation"},"."),s("node"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"chrome"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" process"),n("span",{class:"token punctuation"},"."),s("versions"),n("span",{class:"token punctuation"},"."),s("chrome"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function-variable function"},"electron"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" process"),n("span",{class:"token punctuation"},"."),s("versions"),n("span",{class:"token punctuation"},"."),s(`electron
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"lang"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("en"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"charset"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("UTF-8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"http-equiv"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("X-UA-Compatible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("IE=edge"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"name"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("viewport"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("Electron"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("Hello from Electron renderer!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s("\u{1F44B}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),s(),n("span",{class:"token attr-name"},"id"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("render.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" information "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},")"),s(`
information`),n("span",{class:"token punctuation"},"."),s("innerText "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"This app is using Chrome (v"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s(" versions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chrome"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"), Node.js (v"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s(" versions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"node"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"), and Electron (v"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s(" versions"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"electron"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},")"),n("span",{class:"token template-punctuation string"},"`")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(y,_){const p=k("CodeTabs");return l(),i("div",null,[b,u(p,{data:[{title:"main.js"},{title:"preload.js"},{title:"index.html"},{title:"render.js"}],"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[g]),tab1:a(({title:t,value:e,isActive:o})=>[h]),tab2:a(({title:t,value:e,isActive:o})=>[w]),tab3:a(({title:t,value:e,isActive:o})=>[f]),_:1},8,["data"])])}var W=c(m,[["render",j],["__file","02-\u5FEB\u901F\u5165\u95E8(2).html.vue"]]);export{W as default};
