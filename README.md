# 宸一工作室 | ChenYi Studio

赛博朋克风格的个人主页，展示"宸一"IP形象。

## 项目简介

宸一 - 班味缅因猫·北漂普通程序员个人IP

- **视觉形象**：灰色虎斑长毛缅因猫，自带轻微黑眼圈，固定穿搭灰色格子衬衫、黑色双肩包
- **核心Slogan**：代码改不改世界我不知道，但先让我准时下班。
- **项目定位**：长期真实成长纪实型IP，副业属性、去流量快餐化、无收割、无剧本

## 技术栈

- HTML5
- CSS3 (动画、渐变、霓虹效果)
- JavaScript (Canvas粒子背景)

## 部署到 Gitee Pages

### 1. 创建Gitee仓库

1. 登录 [Gitee](https://gitee.com/)
2. 创建新仓库，名称为 `chen-yi-Liu`（与用户名相同）
3. 选择公开仓库

### 2. 推送代码

```bash
# 进入项目目录
cd chenyi-homepage

# 初始化Git仓库
git init

# 添加远程仓库
git remote add origin https://gitee.com/chen-yi-Liu/chen-yi-Liu.git

# 添加所有文件
git add .

# 提交
git commit -m "初始化宸一工作室主页"

# 推送到Gitee
git push -u origin master
```

### 3. 开启Gitee Pages

1. 进入仓库页面
2. 点击「服务」→「Gitee Pages」
3. 选择部署分支（通常是 `master`）
4. 点击「启动」
5. 等待部署完成，访问 `https://chen-yi-Liu.gitee.io`

## 本地预览

直接在浏览器中打开 `index.html` 文件即可预览。

## 文件结构

```
chenyi-homepage/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
└── README.md           # 项目说明
```

## 自定义修改

### 修改内容

- 编辑 `index.html` 中的文本来更新个人信息
- 修改 `style.css` 中的颜色变量来调整配色方案
- 在 `script.js` 中可以修改粒子效果参数

### 添加猫猫头像

将生成的猫猫头像图片命名为 `avatar.png`，放在项目根目录，然后修改 `index.html` 中的头像部分：

```html
<div class="avatar-frame">
    <img src="avatar.png" alt="宸一" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 许可证

MIT License

---

**宸一工作室** | 真实记录，长期主义