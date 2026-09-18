# 熊启懿 · 个人作品集

React + Vite 单页网站。内容根据用户提供的简历编写，PC 版心最大 1700px，并包含窄屏布局。

## Netlify 部署（2026-09-13）

- 公开地址：https://profound-torrone-507c6b.netlify.app/
- 管理页面：https://app.netlify.com/projects/profound-torrone-507c6b
- 本次发布保留当前浅色风格，使用 Netlify Drop 上传 `dist` 构建产物，已设置 Public。
- 后续更新：运行 `npm run build`，在上述项目的 Production deploys 上传新的 `dist` 文件夹。不要另建项目，以保持网址不变。
- `netlify.toml` 为将来 CLI / Git 构建指定 `npm run build` 和 `dist`；当前采用手动上传，没有连接 Git 自动部署。
- 当前未配置自定义域名。下文“仅本地预览”是历史素材记录，部署状态以本节为准。

## 运行

```sh
npm install
npm run dev
```

打开终端显示的本地地址。生产构建：`npm run build`；构建预览：`npm run preview`。

## 修改内容

- `src/main.jsx`：个人信息、教育背景、5 项研究经历、能力和作品内容。
- `src/style.css`：视觉设计、版心和响应式布局。
- `public/media/portrait.jpeg`：从用户简历提取的头像。
- `public/media/orbit.png`：为本站生成的 AI 概念图。
- `public/media/orbit.mp4`：上述图片制作的 12 秒无音轨循环镜头动效，H.264 / yuv420p / faststart。

AI 图像及视频均为本站演示素材，不代表用户已完成的个人作品。两个作品卡分别呈现同一素材的动态实验和静态原作。后续替换真实视频时，建议采用 H.264 MP4，将对应文件路径、标题、说明和封面一起更新。视频可以通过原生控件播放、暂停、拖动进度及全屏；背景有独立暂停按钮，支持减少动态效果偏好。

## 素材来源

简历来自用户提供的 `简历.docx`；未将完整简历放入网站公共目录。头像、姓名、手机号和邮箱依用户请求用于个人介绍与联系模块。当前仅本地预览，未发布到公网。

AI 图像由内置 imagegen 生成。最终提示词：

> Cinematic monumental luminous thin white orbital ring standing vertically above black volcanic mountains; fog, graphite and cold silver palette; photorealistic science-fiction cinema; ring and mountain landscape on right half, left half nearly black negative space; no text, UI, logos or watermarks; widescreen.

视频制作工具为 FFmpeg，围绕同一图像做缓慢往返缩放，不是原生文生视频。图片和视频随站点分发，无外部媒体链接。

## 浅色首屏更新

`src/hero.css` 单独管理头部风格。`public/media/studio-sculpture.png` 是内置 imagegen 新生成的浅灰摄影棚概念视觉，`studio-sculpture.mp4` 是该图的 12 秒微缩放动态版本。原来的轨道作品仍用于作品区。

生成提示词：Photorealistic 3D industrial design hero on a light neutral gray seamless studio background. Centered floating assemblage of lime-green glossy organic torus, vivid orange curved tube, inflated mirror-chrome form, lavender ribbed sphere and pale porous stone, wrapped by a thin metallic orbital wire. Refined editorial lighting, realistic reflections, subtle film grain. Landscape composition with generous gray side margins. No text, logos, watermark or UI.

## 作品区与联系方式

`src/works.js` 集中维护四个视频与五个图片位置。视频类别为两支广告、一部游戏 CG、一部 AI 短剧。用户正在整理实际素材，因此当前四个视频及三个图片位置为明确标注的待补充内容，另外两张为本站演示图。接入时填写 cover、src、标题、简介，并将 status 改为 published；不要把演示素材标为真实案例。

`WorkGallery` 提供原生可访问详情弹窗、Esc 关闭、焦点恢复与视频播放。联系方式包含邮箱、电话和可复制微信号。ShinyText 按用户提供的 React Bits 源码集成，使用 motion，尊重减少动画偏好。

## 2026-09-13：真实作品已接入

桌面“机器人”文件夹中的 4 个视频与 5 张图片已复制到 `public/media/works/`，取代此前的全部作品占位。原文件未改动。视频转换为 H.264/yuv420p + AAC（源文件有音轨时）并启用 faststart；各视频第 1 秒画面用作封面。图片保留原 PNG。视频按原文件名称展示；图片标题与简介根据画面内容拟定，未声称实际品牌合作。

图片对应关系（按原始文件名排序）：
1. 2026年9月11日 23_52_02 → 城市的另一面
2. 2026年9月11日 23_56_41 → 静默的时尚
3. 2026年9月11日 23_59_42 → 脑海中的世界
4. 2026年9月12日 00_02_04 → 云端的家
5. 2026年9月13日 01_03_14 → 云海日出

`AccordionGallery` 按用户提供的 React Bits 源码接入 GSAP，增加详情回调、键盘焦点导航、移动端纵向布局与动态减少动画偏好。折叠状态保留原色。图片展开后点击或按 Enter 查看完整大图。
