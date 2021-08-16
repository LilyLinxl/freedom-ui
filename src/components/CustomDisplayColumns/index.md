---
title: 自定义显示列
group:
  title: 组件
  path: /components
  order: 1
---

# CustomDisplayColumns

自定义显示列

作用: 1.设置大小 2.设置图标 3.显示总数 4.展示列 5.总数据 6.设置一行显示多少个 7.设置宽度 8.点击确定会设置展示列
分块:操作按钮，列表（多个列表项组成）

```javascript
<CustomDisplayColumns
  size="small"
  icon={<Icon type="prompt" />}
  showTotal
  displayColumns={displayColumns}
  dataSource={checkDataSource}
  lineShowCount={6}
  width={600}
  onOk={(checkList: any) => {
    setDisplayColumns(checkList);
  }}
/>
```

## 代码演示

### 操作、时间、链接

<code src="./demos/Demo1.tsx">
