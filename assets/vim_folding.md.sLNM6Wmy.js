import{_ as i,c as s,o as a,V as e}from"./chunks/framework.ZP3QiZ4B.js";const _=JSON.parse('{"title":"折疊","description":"","frontmatter":{},"headers":[],"relativePath":"vim/folding.md","filePath":"vim/folding.md"}'),t={name:"vim/folding.md"},l=e(`<h1 id="折疊" tabindex="-1">折疊 <a class="header-anchor" href="#折疊" aria-label="Permalink to &quot;折疊&quot;">​</a></h1><p>將指定的區塊以單行顯示。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><a href="https://github.com/nvim-treesitter/nvim-treesitter#folding" target="_blank" rel="noreferrer">Tree-sitter based folding.</a></p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foldmethod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;expr&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foldexpr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;nvim_treesitter#foldexpr()&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vim.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">opt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foldenable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> -- Disable folding at startup.</span></span></code></pre></div><h2 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h2><ul><li><code>za</code> ：切換目前光標所在位置的折疊狀態。</li></ul><h2 id="延伸閱讀" tabindex="-1">延伸閱讀 <a class="header-anchor" href="#延伸閱讀" aria-label="Permalink to &quot;延伸閱讀&quot;">​</a></h2><ul><li><a href="https://neovim.io/doc/user/usr_28.html" target="_blank" rel="noreferrer">Usr_28 - Neovim docs</a></li><li><a href="https://neovim.io/doc/user/fold.html" target="_blank" rel="noreferrer">Fold - Neovim docs</a></li></ul>`,9),n=[l];function h(r,o,p,d,k,c){return a(),s("div",null,n)}const m=i(t,[["render",h]]);export{_ as __pageData,m as default};
