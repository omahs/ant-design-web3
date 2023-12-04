---
nav: 组件
group: 展示
---

# BrowerLink

快速使用 etherscan 的地址.

## 基本使用

<code src="./demos/basic.tsx"></code>

## 复杂场景

<code src="./demos/complex.tsx"></code>

## 自定义显示内容

<code src="./demos/customName.tsx"></code>

## API

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| `icon` | 可选。图标属性，可以是布尔值或自定义 React 节点。 | `boolean \| React.ReactNode` | - | - |
| `iconOnly` | 可选。是否只显示图标。 | `boolean` | `false` | - |
| `ellipsis` | 可选。是否启用省略号来显示以太坊地址。 | `boolean` | - | - |
| `address` | 必需。要生成链接的以太坊地址。 | `string` | - | - |
| `href` | 可选。自定义链接目标。如果提供，将覆盖生成的链接。 | `string` | - | - |
| `type` | 可选。链接类型，是 'address'（默认）还是 'transaction'。 | `address \| transaction` | `address` | - |
| `chain` | 可选。以太坊链标识符。默认为主网。 | `ChainIds` | `ChainIds.Mainnet` | - |
| `name` | 可选。自定义显示名称。不传默认显示 `address` | `string` | - | - |