import{_ as l,D as t,o,c as i,z as n,a,G as s,O as c}from"./chunks/framework.51afb0c9.js";const _=JSON.parse('{"title":"im-select.nvim","description":"","frontmatter":{},"headers":[],"relativePath":"nvim/im-select.nvim/index.md","filePath":"nvim/im-select.nvim/index.md"}'),p={name:"nvim/im-select.nvim/index.md"},r={id:"im-select-nvim",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#im-select-nvim","aria-label":'Permalink to "im-select.nvim <Badge type="danger" text="Neovim" /> <Badge type="danger" text="im-select" /> <Badge type="warning" text="packer.nvim" />"'},"​",-1),m=c(`<p>轉換模式時自動切換輸入法。</p><h2 id="相依" tabindex="-1">相依 <a class="header-anchor" href="#相依" aria-label="Permalink to &quot;相依&quot;">​</a></h2><ul><li>僅可安裝於 Neovim 。</li><li>需安裝 <a href="/my-dev-arms/im-select/">im-select</a> 。</li><li>使用 packer.nvim 管理。</li></ul><h2 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-label="Permalink to &quot;安裝&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-vmWSa" id="tab-nE3Ix7O" checked="checked"><label for="tab-nE3Ix7O">lua/plugins/init.lua</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">({</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keaising/im-select.nvim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugins.configs.im-select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-fbbtu" id="tab-0h1wbpg" checked="checked"><label for="tab-0h1wbpg">lua/plugins/configs/im-select.lua</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">im_select.</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">()</span></span></code></pre></div></div></div><h2 id="慣用方式" tabindex="-1">慣用方式 <a class="header-anchor" href="#慣用方式" aria-label="Permalink to &quot;慣用方式&quot;">​</a></h2><p>在寫文章時，會在進入 insert 模式時，將輸入法設為中文。這樣一來在回到 normal 模式時會自動切換回英文輸入法。</p>`,9);function h(u,v,y,A,C,D){const e=t("Badge");return o(),i("div",null,[n("h1",r,[a("im-select.nvim "),s(e,{type:"danger",text:"Neovim"}),a(),s(e,{type:"danger",text:"im-select"}),a(),s(e,{type:"warning",text:"packer.nvim"}),a(),d]),m])}const b=l(p,[["render",h]]);export{_ as __pageData,b as default};
