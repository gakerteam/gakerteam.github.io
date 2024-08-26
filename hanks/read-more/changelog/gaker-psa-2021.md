# 集客云 PSA 2021

### `v4.6.5` 2021.12.29

**缺陷修复**

* 修复商机阶段配置点击下一步时页面卡死的问题
* 修复计算字段在某些情况下的精度损失问题
* 修复新增数据时在某些情况下会出现流程状态丢失的问题
* 修复仪表盘图表点击数据详情时无数据展示
* 修复数据导出耗时过长的问题

### `v4.6.4` 2021.12.27

**缺陷修复**

* 修复新增角色时偶现未增加角色字段权限数据的问题
* 外链表单页面底部声明样式优化
* 服务端k8s集群证书已过期，需要替换新证书
* 修复每日汇率没有获取澳元AUD汇率的问题

### `v4.6.0` 2021.12.24

**新特性**

* 审批流支持多人或签(多个审批人审批时，只需要一个人审批即可)
* 当前审批人可将审批移交给其它人处理

**缺陷修复**

* 修复手机号登录时，如果手机号未注册提示“请求参数错误”

### `v4.5.6` 2021.12.15

**缺陷修复**

* 修复仪表盘点击筛选器组件时页面变成空白
* 修复仪表盘创建图表时饼图的icon加载不出来问题
* 修复子表单中手机字段默认区号设置未生效的问题
* 修复子表单查找关联字段显示不正确的问题

### `v4.5.2` 2021.12.10

**优化**

* 根据用户反馈去掉私有应用数据灰色样式
* 刷新页面后立即点击消息盒子时无响应
* 公海池数据分配后参与人和归属人在详情页显示编辑按钮

### `v4.5.0` 2021.12.07

**新特性**

* 重写仪表盘漏斗图的生成逻辑，更符合企业的业务流程

### `v4.4.2` 2021.12.03

**缺陷修复**

* 修复审批详情中审批时间显示不正确的问题
* 修复Web端公海池中当子表单为非公开字段时，子表单未隐藏的问题
* 修复飞书小程序和微信小程序公海池中当子表单为非公开字段时，子表单未隐藏的问题
* 修复微信小程序查重工具显示不正确的问题

### `v4.4.0` 2021.11.26

**新特性**

* 所有业务流程数据支持一键处理历史数据

**优化**

* 新增数据时修改日志未记录流程状态变更信息
* 文件上传支持ppt和pptx

**缺陷修复**

* 修复查询部门用户时，如果部门不存在返回了公司所有用户
* 修复当修改归属人为空时报“系统异常”的问题

### `v4.3.0` 2021.11.19

**优化**

* 飞书组织架构同步时使用飞书最新版本接口，企业组织架构信息更安全
* 优化系统部分错误提示

### `v4.2.2` 2021.11.18

**优化**

* 金额、数字字段修改时可以编辑小数位数啦

**缺陷修复**

* 修复仪表盘图表维度为主从关联字段时该字段显示为空

### `v4.2.1` 2021.11.16

**缺陷修复**

* 修复数据修改后的值为空时未记录修改日志
* 修复工作流修改数据配置为增加/减少时，日志记录的新值是空
* 工作流触发的数据修改日志中操作人修改为「系统」

### `v4.2.0` 2021.11.15

**新特性**

* 数据详情中增加日志功能

**优化**

* 工作流配置中消息通知增加功能文本字段的变量

**缺陷修复**

* 修复计算、汇总字段单位控制未生效的问题

### `v4.1.0` 2021.11.05

**新特性**

* 新增应用外链扩展服务

**缺陷修复**

* 修复租户数据总量计算错误的问题
* 修复管理员在某些情况下无布局字段权限的问题
* 修复新建查找关联字段时页面空白的问题
* 移动端访问登录页面注册时跳转微信小程序

### `v4.0.17` 2021.10.28

**缺陷修复**

* 修复跟进记录导入失败的问题
* 修复仪表盘图表不能修改标题的问题
* 修复工作流的触发条件为最新跟进时间等动态相关字段时，新增动态不能触发工作流的问题

### `v4.0.16` 2021.10.26

**缺陷修复**

* 修复业务流程字段条件配置包含关联对象或子表单时未触发的问题

### `v4.0.14` 2021.10.25

**优化**

* 应用市场付费订阅逻辑优化，租户的订阅用户数统计更准确

### `v4.0.13` 2021.10.20

**缺陷修复**

* 修复定位字段必填检验失败的问题
* 修复查重工具不能查看公海池数据详情的问题

### `v4.0.10` 2021.10.11

**缺陷修复**

* 计算字段的单位新增澳元AUD
* 修复下载模版中计算字段没有展示货币单位的问题
* 修复已结束审批流没有删除按钮的问题

### `v4.0.8` 2021.10.08

**缺陷修复**

* 修复配置端导入数据空白页的问题
* 修复导入数据时偶现空白页的问题
* 修复计算、汇总字段返回值配置中没有澳元的问题
* 修复企业微信同步成员时未获取到直接汇报人时报错导致同步失败

### `v4.0.6` 2021.9.28

**优化**

* 放开富文本插入变量中的计算字段限制
* 配置端金额字段增加AUD（澳元）选项
* 优化某些租户触发审批时偶现不推送飞书消息的问题

### `v4.0.4` 2021.9.26

缺陷修复

* 修复查看公海池数据时如果归属人为空会报系统异常的错误
* 修复导入公海池数据时归属人字段为Null

### `v4.0.0` 2021.9.22

**新特性**

* SalesWork Web端支持企业微信

### `v3.20.3` 2021.9.9

**优化**

* 数据导入重复数据可覆盖和跳过
* 优化仪表盘指标图的展示样式

### `v3.20.0` 2021.9.3

**新特性**

* 数据导入支持子表单数据导入

### `v3.19.6` 2021.8.31

**缺陷修复**

* 修复讯飞OCR接口变更导致扫名片出现“系统异常”

**优化**

* 仪表盘图表错误提示优化
* 仪表盘提示文案优化

### `v3.19.5` 2021.8.30

**缺陷修复**

* 修复仪表盘普通表格在某些情况下不显示的问题

### `v3.19.4` 2021.8.26

**缺陷修复**

* 修复工作流时间设置Cron表达式错误导致工作流在某些情况下不执行的问题

### `v3.19.2` 2021.8.18

**新特性**

* 仪表盘图表支持使用关联字段作为维度来进行统计

优化

* 仪表盘图表支持隐藏已删除选项作为维度的数据

### `v3.19.1` 2021.8.17

**缺陷修复**

* 修复删除审批流程定义后查看审批流程报错的问题
* 修复小程序在pad上样式错位的问题

### `v3.19.0` 2021.8.12

**新特性**

* 审批流在审批过程中支持显示全部审批流程节点
* 审批详情中支持删除当前审批流程，删除后审批流直下驳回操作，审批终结，并删除流程所有数据

**优化**

* 仪表盘图表占位图显示优化
* 数据详情标题栏在pad下的展示优化
* 飞书小程序中开通应用的等待时增加产品介绍

### `v3.18.11` 2021.8.11

缺陷修复

* 修复仪表盘过滤器的默认值包含"."时保存图表报系统异常
* 修复服务端后台某些服务日志过大的问题

### `v3.18.9` 2021.7.28

新特性

* 工作流程事件触发支持新增数据

**优化**

* 用户筛选控件增加对已离职人员的标记

### `v3.18.8` 2021.7.23

**优化**

* 文件下载时使用该文件上传时的原名
* 每日汇率优化

### `v3.18.6` 2021.7.16

**优化**

* 租户开通应用后立即同步BI数据

### `v3.18.4` 2021.7.14

**缺陷修复**

* 修复数据查重规则设置关联应用不能选择已配置规则的应用
* 修复数据查重展示重复数据时不能显示公海池名称

### `v3.18.3` 2021.7.13

**缺陷修复**

* 修复业绩目标刷新报“系统异常”的问题

### `v3.18.2` 2021.7.12

**优化**

* 优化日期组件选择日期的逻辑

缺陷修复

* 修复仪表盘数据预览详情时报“系统异常”
* 修复数据详情页点击查重偶现“系统异常”

### `v3.18.0` 2021.7.9

**新特性**

* 数据查重独立为扩展服务

优化

* 优化编辑、删除的弹窗文案
* 优化前端页面访问速度
* 优化仪表盘图表访问速度