# DiggoComponent 组件库

## 目录结构

```
DiggoComponent/
├── diggo-component/          # 组件源码目录（每个组件一个文件夹）
│   └── d-breadcrumb/
│       ├── index.html        # 组件 HTML 源文件
│       ├── index.css         # 组件 CSS 源文件
│       └── test.html         # 组件测试文件
├── diggo-component-html/     # 统一存放所有组件 html 文件（已重命名）
├── diggo-component-css/      # 统一存放所有组件 css 文件（已重命名）
├── build.js                  # 组件批量处理脚本
└── init.js                   # 新建组件模板脚本
└── README.md                 # Readme 文档
```

## 组件开发流程

1. 使用 `init.js` 快速生成新组件目录和基础文件：
   ```bash
   node init.js <组件名>
   # 例如 node init.js d-button
   ```
2. 在 `diggo-component/<组件名>/` 目录下开发组件的 `index.html` 和 `index.css`。

## 批量处理脚本 build.js

### 功能

- 遍历 `diggo-component` 目录下所有组件文件夹。
- 将每个组件的 `index.html` 重命名为 `<组件名>.html`，复制到 `diggo-component-html/`。
- 将每个组件的 `index.css` 重命名为 `<组件名>.css`，复制到 `diggo-component-css/`。

### 使用方法

```bash
node build.js
```

执行后，所有组件的 html/css 文件会被统一整理到 `diggo-component-html` 和 `diggo-component-css` 目录下，便于统一管理和打包。

## 其他说明

- 组件文件夹命名建议以 `d-` 开头，如 `d-button`、`d-card`。
- `test.html` 可用于本地开发调试，不会被 build.js 处理。

如有更多需求，欢迎补充！
