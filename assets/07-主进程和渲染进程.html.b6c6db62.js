import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as u,b as i,w as a,e as k,a as n,r,d as s}from"./app.e13026ea.js";var d="/assets/\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B.e7b25771.jpg",m="/assets/\u6848\u4F8B01.4c7b6ffa.jpg";const v={},b=k('<p><code>package.json</code> \u4E2D\u5B9A\u4E49\u7684\u5165\u53E3\u6587\u4EF6\u5C31\u662F\u4E3B\u8FDB\u7A0B,\u4E00\u4E2A <code>Electron</code> \u4E2D\u53EA\u6709\u4E00\u4E2A\u4E3B\u8FDB\u7A0B</p><p>\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u4E00\u4E2A\u4E3B\u8FDB\u7A0B\u6253\u5F00\u591A\u4E2A\u5B50\u8FDB\u7A0B</p><p><code>web</code>\u9875\u9762\u8FD0\u884C\u5728\u81EA\u5DF1\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E2D</p><p>\u4E00\u4E2A\u4E3B\u8FDB\u7A0B\u53EF\u4EE5\u63A7\u5236\u591A\u4E2A\u6E32\u67D3\u8FDB\u7A0B</p><p><img src="'+d+'" alt=""></p><blockquote><p>\u4E00\u4E2A\u5C0F\u6848\u4F8B,\u5E2E\u52A9\u7406\u89E3\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B<br> \u5B8C\u6574\u4EE3\u7801</p></blockquote>',6),g=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u4E3B\u8FDB\u7A0B"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" app"),n("span",{class:"token punctuation"},","),s(" BrowserWindow "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'electron'"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"createWindow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" mainWindow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"BrowserWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"800"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u63A7\u5236\u6253\u5F00\u7A97\u53E3\u7684\u5BBD\u9AD8"),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"600"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"webPreferences"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"nodeIntegration"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// \u6E32\u67D3\u8FDB\u7A0B\u652F\u6301node"),s(`
      `),n("span",{class:"token literal-property property"},"contextIsolation"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token comment"},"// \u5173\u95ED\u4E0A\u4E0B\u6587\u9694\u79BB \u9ED8\u8BA4\u4E3Atrue"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  mainWindow`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"loadFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'index.html'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// \u8BFB\u53D6\u6E32\u67D3\u8FDB\u7A0B"),s(`
  mainWindow`),n("span",{class:"token punctuation"},"."),s("webContents"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"openDevTools"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"whenReady"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Electron \u521D\u59CB\u5316\u5B8C\u6210\u8C03\u7528createWindow()"),s(`
  `),n("span",{class:"token function"},"createWindow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-html ext-html line-numbers-mode"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"html"),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("html")]),s(),n("span",{class:"token attr-name"},"lang"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("en"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"charset"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("UTF-8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"http-equiv"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("X-UA-Compatible"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("IE=edge"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("meta")]),s(),n("span",{class:"token attr-name"},"name"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("viewport"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"content"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("title")]),n("span",{class:"token punctuation"},">")]),s("demo1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("title")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("head")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token comment"},"<!-- \u6E32\u67D3\u8FDB\u7A0B -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"id"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u70B9\u51FB\u5F15\u5165"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"id"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("E-learning"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("body")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),s(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s(),n("span",{class:"token punctuation"},'"'),s("render.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("html")]),n("span",{class:"token punctuation"},">")]),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" fs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fs'"),n("span",{class:"token punctuation"},")"),s(`

window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" btn "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'btn'"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" Elearning "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'E-learning'"),n("span",{class:"token punctuation"},")"),s(`
  btn`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    fs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Electron.text'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("error"),n("span",{class:"token punctuation"},","),s(" data")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      Elearning`),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(` data
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("p",null,[n("img",{src:m,alt:""})],-1);function w(y,q){const c=r("CodeTabs");return p(),u("div",null,[b,i(c,{data:[{title:"main.js\u4E3B\u8FDB\u7A0B"},{title:"index.html\u6E32\u67D3\u8FDB\u7A0B"},{title:"render.js"}],"tab-id":"shell"},{tab0:a(({title:t,value:e,isActive:o})=>[g]),tab1:a(({title:t,value:e,isActive:o})=>[_]),tab2:a(({title:t,value:e,isActive:o})=>[h]),_:1},8,["data"]),f])}var x=l(v,[["render",w],["__file","07-\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B.html.vue"]]);export{x as default};
