import{_ as s,c as e,o as t,V as a}from"./chunks/framework.ZP3QiZ4B.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"tmux/sheet.md","filePath":"tmux/sheet.md"}'),n={name:"tmux/sheet.md"},i=a(`<details class="details custom-block"><summary>Configs</summary><details class="details custom-block"><summary>tmux.conf</summary><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># List of plugins</span></span>
<span class="line"><span>set -g @plugin &#39;tmux-plugins/tpm&#39;</span></span>
<span class="line"><span>set -g @plugin &quot;arcticicestudio/nord-tmux&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>set -g mode-keys vi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)</span></span>
<span class="line"><span>run &#39;~/.config/tmux/plugins/tpm/tpm&#39;</span></span></code></pre></div></details></details><ul><li><code>tmux ls</code> ：列出所有 server 中的 sessions 。</li><li><code>tmux attach -t &lt;target-session&gt;</code> ：進入指定的 session 中。</li><li><code>tmux kill-server</code> ：結束 server 並刪除所有 sessions 。</li></ul><div class="tip custom-block"><p class="custom-block-title">提示</p><p>下列指令作用於 tmux 內。</p></div><ul><li><code>&lt;prefix&gt; c</code> ：新增 window 。</li><li><code>&lt;prefix&gt; n</code> ：移動至下一個 window 。</li><li><code>&lt;prefix&gt; p</code> ：移動至上一個 window 。</li><li><code>&lt;prefix&gt; s</code> ：開啟 sessions 選擇功能。</li><li><code>&lt;prefix&gt; d</code> ： detach 目前的 client 。</li><li><code>&lt;prefix&gt; [</code> ：進入 copy 模式，藉以複製字串或觀看歷史紀錄。</li><li><code>&lt;prefix&gt; %</code> ：將此 pane 切割為兩個 panes ，左跟右。</li><li><code>&lt;prefix&gt; &quot;</code> ：將此 pane 切割為兩個 panes ，上跟下。</li></ul>`,4),l=[i];function o(c,p,d,r,u,m){return t(),e("div",null,l)}const f=s(n,[["render",o]]);export{_ as __pageData,f as default};
