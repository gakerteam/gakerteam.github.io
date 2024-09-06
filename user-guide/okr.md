# 目标管理及业绩核算

## 定义指标模型
在管理后台找到“应用管理”页面找到【业绩指标】入口，点击进入业绩指标列表页。

在列表右上角点击【新建】按钮。

在新建表单中以下指标定义字段，提交并完成新建，只要是系统内产生的数据，都可以进行指标建模
- 指标名称：输入文本，为指标命名
- 选择应用：选择指标所在应用
- 统计字段：以哪个字段的数据来计算业绩，如果统计方式是计数，一般选择编号字段，如果统计方式是求和，一般选择金额和数字字段
- 统计方式：目前支持“计数、汇总”两种方式
- 统计时间：以哪个时间来统计业绩，取考核指标所选应用的日期以及日期时间字段，例如以收款的创建日期为起点开始统计数据
- 考核维度：以哪个字段确认考核人的数据归属，比如要考核销售人员的合同金额业绩，那么可以选择合同的归属人作为考核人员字段
- 考核对象：限定特定范围用户创建目标时可选的指标范围，范围可以多选“用户、角色、部门”
- 指标权限：“仅自己”，仅统计自己名下数据。“自己和所有下级”，按照组织架构中的上下级关系，统计范围包含自己和所有下级名下的数据
- 备注：描述指标含义
- 过滤条件：通过组合条件筛选过滤数据统计范围

> 示例：创建“回款金额”业绩指标，用于考核销售团队，可通过以下设置，完成指标建模
> 指标名称：输入“回款金额”
> 选择应用：选择“收款单”
> 统计字段：选择“实际收款金额”
> 统计方式：选择“汇总”
> 统计时间：选择“实际收款时间”
> 考核维度：选择“归属人”
> 考核对象：选择“销售”角色
> 指标权限：选择“仅自己”
> 过滤条件：流程状态等于“已收款”

在业绩指标列表页点击【更多】按钮，可编辑或删除业绩指标

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-154.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-155.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-156.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-157.png)

## 新建OKR目标
在首页找到【我的目标】

选择考核周期“月度、季度或年度”以及对应的“月份、季度或年份”，每个周期的目标，需要分别创建。

点击【添加 Objective】，按以下步骤完成对应周期下的 OKR 新建
- 输入文本，描述目标
- 点击【添加 Key Result】添加关键结果指标，支持“定性指标”和“量化指标”两种添加方式
- 添加定性指标：输入文本描述关键结果，选择截止日（定性指标的完成率数据，需要手动更新）
- 添加量化指标：点击输入框右侧【选择指标】，输入目标值（量化指标的完成额和完成率数据，系统自动更新）
- 设置指标权重：为不同 Key Result 设置权重，最后一个 Key Result 的权重由系统自动填写
- 点击【确认】，完成 OKR 创建

点击目标右上角【更多】图标，可编辑或删除目标

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-158.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-159.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-160.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-161.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-162.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-163.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-164.png)

## 添加执行计划
点击目标下方【计划】图标，填写并提交执行计划，添加成功后，执行计划图标会高亮显示

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-165.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-166.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-167.png)

## 添加目标对齐
点击目标顶部【添加对齐】按钮，弹出组织其它成员同周期下目标选项，选择需要对齐的用户目标，完成目标对齐

对齐完成后，在目标顶部可查看【我对齐的】上级头像，在目标底部可查看【与我对齐】的下级头像，鼠标hover至头像可查看上下级的目标详情

对齐完成后，点击【对齐视图】图标，打开对齐视图，上下级目标链清晰明了

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-168.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-169.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-170.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-171.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-172.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-173.png)

## 过程进展汇报
点击目标底部【进展】图标，弹出进展内容编辑窗口

添加进展内容，支持调整排版、添加图片以及@其它成员，可以@汇报对象，被@的成员会自动收到消息提醒

添加成功后，【进展】图标会高亮显示，提示目标下已经创建了进展记录以及创建的条数

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-174.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-175.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-176.png)

## 量化指标进度自动更新
量化指标，查看目标下每个 Key Result 右侧完成值和进度条，系统会自动统计指标完成值和完成率

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-177.png)

## 定性指标进度手动更新
定性指标，系统会自动统计当前离截止日的剩余时间，点击进度图标弹出进度更新输入框，支持手动输入百分比参数更新完成率

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-178.png)

## 查看下级指标统计
量化指标如果在模型中定义了统计范围为“自己和所有下级”，点击指标右侧完成值数字会弹出完成明细窗口，查看下级完成明细

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-179.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-180.png)