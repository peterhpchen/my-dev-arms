export default {
  title: '工具指南',
  description: '軟體開發工具的使用及配置說明',
  lang: 'zh-Hant',
  base: '/my-dev-arms/',
  cleanUrls: 'without-subfolders',
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    sidebar: [
      { text: '介紹', link: '/guide/introduction' },
      { text: '速查表', link: '/guide/cheatsheet' },
      {
        text: '桌面',
        items: [
          { text: 'Rectangle', link: '/rectangle/' },
          { text: 'Kitty', link: '/kitty/' },
        ],
      },
      {
        text: '終端',
        items: [
          { text: 'BAT', link: '/bat/' },
          { text: 'curl', link: '/curl/' },
          { text: 'docker', link: '/docker/' },
          { text: 'exa', link: '/exa/' },
          { text: 'Homebrew', link: '/homebrew/' },
          { text: 'im-select', link: '/im-select/' },
          { text: 'man', link: '/man/' },
          { text: 'mas-cli', link: '/mas-cli/' },
          { text: 'neofetch', link: '/neofetch/' },
          { text: 'nvm', link: '/nvm/' },
        ],
      },
      {
        text: '終端 | tmux',
        items: [
          { text: 'tmux', link: '/tmux/' },
          { text: 'tmuxinator', link: '/tmux/tmuxinator/' },
          { text: 'TPM', link: '/tmux/tpm/' },
        ],
      },
      {
        text: '終端 | Zsh',
        items: [
          { text: 'Zsh', link: '/zsh/' },
          { text: 'Powerlevel10k', link: '/zsh/powerlevel10k/' },
          { text: 'zsh-autosuggestions', link: '/zsh/zsh-autosuggestions/' },
          { text: 'zsh-completions', link: '/zsh/zsh-completions/' },
          { text: 'zsh-history-substring-search', link: '/zsh/zsh-history-substring-search/' },
          { text: 'zsh-syntax-highlighting', link: '/zsh/zsh-syntax-highlighting/' },
        ],
      },
      {
        text: '編輯器 | Neovim',
        items: [
          { text: 'Neovim', link: '/nvim/' },
          { text: 'fidget.nvim', link: '/nvim/fidget.nvim/' },
          { text: 'im-select.nvim', link: '/nvim/im-select.nvim/' },
          { text: 'packer.nvim', link: '/nvim/packer.nvim/' },
        ],
      },
      { text: '候選者', link: '/guide/candidates' },
      { text: '貢獻', link: '/guide/contributing' },
    ],
  },
};
