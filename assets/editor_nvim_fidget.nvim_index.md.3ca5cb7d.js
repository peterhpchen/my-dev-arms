import{_ as l,c as t,a as n,b as s,d as e,e as i,o,r as p}from"./app.10524c09.js";const m=JSON.parse('{"title":"fidget.nvim","description":"","frontmatter":{},"headers":[{"level":2,"title":"相依","slug":"相依","link":"#相依","children":[]},{"level":2,"title":"安裝","slug":"安裝","link":"#安裝","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"relativePath":"editor/nvim/fidget.nvim/index.md"}'),c={name:"editor/nvim/fidget.nvim/index.md"},r={id:"fidget-nvim",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#fidget-nvim","aria-hidden":"true"},"#",-1),h=i(`<p>顯示當前 nvim-lsp 的進度。</p><h2 id="相依" tabindex="-1">相依 <a class="header-anchor" href="#相依" aria-hidden="true">#</a></h2><ul><li>僅可安裝於 Neovim 。</li><li>使用 packer.nvim 管理。</li></ul><h2 id="安裝" tabindex="-1">安裝 <a class="header-anchor" href="#安裝" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-b_Dhg" id="tab-hgkgm2y" checked="checked"><label for="tab-hgkgm2y">lua/plugins/init.lua</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">({</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">j-hui/fidget.nvim</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugins.configs.fidget</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">end</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-B8Ckb" id="tab-U1dh_QC" checked="checked"><label for="tab-U1dh_QC">lua/plugins/configs/fidget.lua</label></div><div class="blocks"><div class="language-lua active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fidget.</span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div></div></div>`,7);function u(g,v,y,C,A,D){const a=p("Badge");return o(),t("div",null,[n("h1",r,[s("fidget.nvim "),e(a,{type:"danger",text:"Neovim"}),s(),e(a,{type:"warning",text:"packer.nvim"}),s(),d]),h])}const f=l(c,[["render",u]]);export{m as __pageData,f as default};
