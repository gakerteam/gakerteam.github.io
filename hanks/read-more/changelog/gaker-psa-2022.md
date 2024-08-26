# 集客云 PSA 2022

### `v4.19.5` 2022.12.08

**应用数据保有量**

在很多业务场景，需要对指定用户的数据保有量进行限制，比如每个销售的客户保有量是50个客户。你可以在管理后台的应用设置中进行设置，其中：

* 可设置所有成员均需要遵守的“通用规则”
* 支持对用户或部门添加多条“特殊规则”
* 当某个部门或用户设置了特殊规则，则遵循特殊规则；如果某个用户同时在单个用户规则和部门规则中被包含，那么遵循个人用户的规则，也即“公司、部门、个人”，以更小粒度的规则为准；

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-001.png)

**公海自动回收限制**

主动领取分配规则，被公海自动回收的数据，可限制原归属人多长时间内不允许再次领取，如下图所示，在主动领取型选项下增加“自动回收后原归属人领取时间限制”勾选项即可

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-002.png)

**其他用户体验优化**

* 数据详情页子表单最多展示10条数据，增加分页选项，并恢复子表单的放大缩小按钮
* 优化看板卡片字体、间距、头像、状态字段等的样式
* 优化表格顶部按钮过多时的样式

### `v4.19.0` 2022.12.01

**特别更新：看板模式**

应用数据列表支持看板模式，你可以在数据列表顶部从列表模式切换到看板模式，也可以在此设置看板的分组字段，如下图所示。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-003.png)

系统管理员还可以在管理后台为所有用户统一配置列表的查看模式，如下图所示。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-004.png)

### `v4.18.12` 2022.11.22

**修复子表单计算字段问题**

这个版本主要修复了与子表单相关的计算问题，主要包含：

* 修复子表单字段修改数据时，计算字段不计算的问题
* 子表单关联应用A，且A应用中包含汇总子表单的字段，当在子表单中解除关联关系时，A应用中的汇总字段未更新，这个版本修复了这个问题
* 子表单关联应用A，且A应用中包含汇总子表单的字段，当在子表单中删除数据时，A应用中的汇总字段未更新，这个版本修复了这个问题

### `v4.18.10` 2022.11.17

**子表单优化**

* 子表单支持快捷编辑
* 子表单右侧增加复制、删除操作
* 子表单快捷编辑时，之前“关联应用、地址、日期、日期时间”类型字段选中后需要点击确认，这个版本中，去掉确认按钮，改为和新建页一样，选中即确认
* 子表单字段关联其他应用，现已支持在其他应用中创建关联该子表单的计算/汇总字段，统计更方便
* 更多用户体验上的优化，欢迎体验

**应用管理优化**

* 标题字段支持变更字段类型，目前仅支持文本和自增编号的互换
* 同步新建关联从应用时，支持关联已有数据，点击下图中的关联数据按钮，可选择未被关联的数据

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-005.png)

**字段相关优化**

* 归属人、参与人支持修改字段名称
* 对默认值进行了优化，比如标题字段支持设置默认值、数字默认小数位数设置为0、百分比默认1位小数、计算字段默认返回金额类型、最大文件数量默认为5、子表单默认3行数据等等

### `v4.18.0` 2022.11.02

**“应用管理”全新改版**

**自定义应用**，一直是SalesWork的核心能力，但过去的交互体验繁琐冗长，想要完成应用表单的自定义往往需要花费大量的时间精力，本次的系统功能升级我们把重心放在了「应用配置流程」这一重要环节的使用体验上，希望通过本次的能力提升，真正帮助企业减少操作负担，使用更高效。更具体的功能更新介绍，请参考：[“应用管理”全新改版 - 化繁为简，让表单配置时间减少50%](https://tyk4y933ai.feishu.cn/docx/P7Yyd89BLoEyajxRMrfczYEAn6b)

**其他值得关注的优化**

* 多行文本字段展示以及默认值优化
* 配置端首页直接展示所有应用
* 审批流程分支条件中用户类字段支持角色、部门
* 业务流程回显、批量操作、safari浏览器兼容等体验优化

### `v4.17.17` 2022.10.19

**特别更新：上传文件安全性增强**

之前有部分客户对上传到阿里云OSS的文件安全性有疑虑，为此，我们对客户上传至云端的文件的访问权限做了优化，采用的方案与目前主流的云笔记产品一致：

* 用户上传图片或其他文件后，不再返回永久的访问链接，而是**临时访问链接**
* 临时访问链接的有效期目前在5-10分钟，也就是最多10分钟后，再次访问此链接将返回403(无权限)
* 临时链接过期后，用户在小程序或PC端刷新页面即可重新获取新的临时链接

经过优化后，你可以放心把文件上传到SalesWork，这样可以最大限度的保障重要文件不外泄，当然也可以利用我们精确到字段级别的权限来保障信息的安全。需要注意的是，导出数据时，Excel中也是临时链接，后期我们会根据客户需求开发相应的工具来解密或延长临时链接的有效期，在保证安全的同时也方便客户导出数据。

### `v4.17.15` 2022.10.17

**汇总字段优化**

目前汇总字段支持MAX和MIN函数，但不支持返回日期和日期时间类型，目前有一些日期类汇总计算场景需要增加对“日期“、”日期时间”类型字段的支持。例如客户“签约时间”，通常取关联合同中开始日期最早的时间作为客户签约日期，客户“到期时间”，通常是取关联合同中结束日期最晚的时间作为客户到期时间。我们在这个版本中，增加了MAX和MIN函数对日期和日期时间类型字段的支持。

**下载模板优化**

* 在下载模板编辑器中“插入表格变量”，目前不支持表格字体大小设置，改为支持表格字体大小设置
* 表格变量的列字段设置目前不支持隐藏标题字段，这个版本中取消了这个限制，标题字段也能隐藏

**公海池优化**

公海池中的数据，如果归属人有值，那么只能在应用列表页查看，公海池中将保持不可见。同时从应用列表放入公海池或者自动回收公海池的数据，将清空归属人。

**其他值得关注的优化**

* 目前审批相关消息只发送了飞书提醒，没有在系统消息中提醒，这个版本修复了这个问题
* 新增了“父子数据”字段类型，且应用将不再内置“父子数据”字段
* 管理后台中详情页布局设置进行了视觉体验的升级，我们对字段类型进行了分类；对布局宽度的自适应效果做了调整；在页面顶部增加了“访问应用”按钮，可直达对应的应用数据列表

### `v4.17.14` 2022.10.12

**通用漏斗图优化**

之前漏斗图不支持“选项显隐和排序”和转化率统计，导致无法满足销售漏斗等常见的漏斗图的使用场景需求。在新版中，我们做了如下优化：

* 如下图，在图表右侧，选项名称上点击进行选项显隐操作
* 支持拖拽选项顺序
* 支持相邻两个选项间的转化率统计和显示，按照上述配置完成后界面上可见的选项，统计相邻两个选项值的比值，上方选项为分母，下方选项为分子，转化率数据展示在如图占比数据下方，转化率仅在勾选了”每层累计当前与所有下层指标值”时展示

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-006.png)

**审批详情页优化**

之前审批详情提取的是新建页表单，而实际业务中多数信息都是在新建之后补充的，审批时查看不到，同时合同订单等常见需要审批的表单，都有关联的明细单需要一起参与审批，目前在审批页面也查看不了。在新版中，审批人可以看到完整的数据详情，包含关联应用的数据，同时也无需为当前审批人设置任何权限。也就是说，即使审批人没有某些应用的数据查看权限，在审批中他也可以看到对应应用的数据。

**值得你关注的优化**

* 管理后台删除字段更便捷，新版中删除字段时仅提示该字段是否被其他字段或布局引用，确认后可直接删除，字段删除后，会自动从对应的布局中移除，无需想之前那样，还需要手动从布局后移出后才能删除
* 应用列表页的排序字段已经缓存到浏览器，你下次进入该应用时，仍会使用上次的排序字段进行查询
* 修复工作流发送的通知消息中包含日期和国家城市字段时，发出的通知内容为空的问题
* 工作流发送的通知消息中支持自增编号字段
* 日程管理接口升级，使用飞书开放平台的最新接口

### `v4.17.10` 2022.09.27

**关联应用优化**

新增应用数据时，可以设置要求从应用必填，即新增时主从应用必须都有值，你可以在「管理后台」从应用的「关联应用」字段中进行配置：

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-007.png)

**值得你关注的优化**

* 时间筛选控件增加了“本年”、“去年”的预设条件
* 优化多选字段“任意等于”、“全部不等于”、“不属于”等条件下的查询问题
* 记录用户分页配置到浏览器，用户访问数据时直接使用上次访问的分页配置
* 修复导入数字或金额字段时数据不能为负数的问题

本次更新还修复了客户提出的BUG以及部分体验优化，主要包含：

* 优化在某些情况下新增引用字段后不自动刷新引用字段值的问题
* 修复新增视图后需要手动刷新页面后才能看到新增视图的问题
* 修复父子数据不能清空的问题
* 优化父子数据编辑删除的逻辑
* 修复新建角色未配置角色模板时创建的角色不能使用的问题
* 修复独立版本中点击成员详情时在某些情况下空白的问题

### `v4.17.8` 2022.09.23

**数据导出功能增强**

支持在每个应用下直接导出关联的动态/跟进记录，导出数据时，可以从“关联从应用”中选择“动态”应用后，再选择需要导出的字段后，即可导出主应用和其动态

**仪表盘优化**

之前仪表盘中的个人报表数据仅限私有数据，而实际使用中会遇到希望将共享数据也参与统计的情况，我们在这个版本中做了优化，个人图表也支持统计共享的数据

**其他优化**

* “关联应用数据过滤”和“共享数据过滤”控件支持“或”条件配置
* 公海池字段设置设置默认值
* 合计中的数字使用主题色加以区分，视觉效果更佳
* 修复数据筛选器遮挡分页控件的问题
* 修复仪表盘“另存为”、“复制现有图表”操作未受到图表创建权限的控制
* 修复审批分支条件在某些情况下不回显的问题

### `v4.17.7` 2022.09.16

**OpenAPI接口升级**

我们对OpenAPI做了全新升级，新的API更易用，且开放了更多的数据，比如：应用、字段、用户、区号、行政区划等。除此之外，还启用了全新的API域名：`https://openapi.saleswork.cn`。

**工作流通知内容编辑器优化**

之前，我们收到很多关于工作流通知内容的编辑器的吐槽，编辑内容的时候会出现各种莫名其妙的问题。现在我们对这个编辑器进行了重构，修复了之前的很多问题，欢迎体验。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-008.png)

**应用数据列表支持金额类字段合计**

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-009.png)

如上图所示，**我们在应用列表页增加了合计项**，合计支持数字字段、金额字段、计算字段、汇总字段以及引用字段(引用的是数字和金额)，你可以在管理后台->字段属性中进行配置：

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-010.png)

除此之外，我们还对**列表页的流程状态字段的样式**进行了升级，采用单独的背景的背景填充样式，与其它选项背景填充样式进行区分，同时能让用户从视觉上个更容易区分“初始、结束、中间”不同状态类型，具体的展示效果如上图中的“业务流程”字段所示。

**计算字段增强**

在计算字段中，我们增加了两个全新的函数：`IFS`、`OPTIONCONTAINIFIFS`函数检查是否满足一个或多个条件，且返回符合第一个 true 条件的值。 IFS 可以取代多个嵌套 IF 语句，当有有多个条件时，使用IFS比使用IF更方便，也更容易阅读，比如：以通过 IFS 函数来计算成绩的等级：  `IFS(成绩<60,"不及格",成绩<=79,"及格",成绩<=89,"良好",成绩>=90,"优秀")`

* 当成绩=85时，将返回“良好”
* 当成绩=95时，将返回“优秀”

特别注意：**如果字段的值满足多个条件时，从左到右，返回符合第一个条件的值。**`OPTIONCONTAINIF`用来判断单选或多选字段的值是否等于指定值，并返回指定的值，比如：  `OPTIONCONTAINIF(状态,'A',50,100)`

* 当状态=A(单选字段)或状态包含A(多选字段)时，返回50，否则返回100

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-011.png)

**数据详情页布局优化**

我们对数据详情页的视觉效果进行了全新升级，升级后的页面布局更合理，空间利用率更高，主要调整内容有：

* 取消了数据摘要区域，这部分区域使用的人少，却占用了页面顶部的大部分空间，这个区域内的字段，我们将移动到第一个分栏中，如果你觉得不合适，可以调整一下布局的字段顺序
* 流程状态，在电脑端改为单行展示，且样式进行了升级

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-012.png)

* 详情页中子表单/关联对象等数据的表格进行了优化，采用更为紧凑的布局，根据字段值的长度自动调整表格列的宽度

更多细节的优化，欢迎体验。

**其他缺陷修复**

* 修复动态/跟进记录导出时没有“关联应用&数据”字段
* 修复日期计算函数精度损失问题
* 汇总字段支持手机号字段
* 重新上线子表单字段

### `v4.17.5` 2022.09.07

**数据导出全新升级**

数据导出先已经支持直接主对象与子表单和从对象一起导出，比如，你可以在导出客户的同时，选择将客户关联的订单一起导出，且导出Excel格式会自动合并单元格，数据展示更友好，下面是一个简单的示例：

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-013.png)

**业务流程优化**

* 管理后台修改业务流程配置时，支持在配置页面直接删除业务流程选项
* 业务流程刷新后到“初始状态”后 ，对符合自动流转条件的“后续流程状态”，会同步自动执行流转

**其他优化**

* 优化动态内容以及最近跟进内容字段的展示样式，阅读体验更好
* 修复公海池非公开字段在某些情况下不能加密隐藏的问题

### `v4.17.4` 2022.09.02

**数据批量编辑优化**

* 批量编辑支持批量修改数据公海池

**应用布局和字段优化**

* 动态定位字段展示优化，之前定位字段直接展示位置的文本，现变成链接，点击会弹出地图

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-014.png)

* 修复前端代码编译问题导致的偶现系统的icon缺失问题
* 修复在电脑端端编辑动态/跟进记录时导致默认定位丢失的问题
* 修复映射规则中单选字段下拉与单选字段平铺、多选字段下拉与多选字段平铺不能映射的问题
* 优化PC端拖拽体验，有拖拽的地方体验更流畅

**其他优化**

SalesWork CRM迁移到全新域名：crm.saleswork.cn，OpenAPI域名迁移至：openapi.saleswork.cn，老的域名会继续使用，如果你日常在飞书工作台中使用，对你没有任何影响；如果你日常在浏览器中使用，建议使用新域名访问，并修改浏览器中原有的书签；如果你正在使用OpenAPI，建议在下次更新代码时，切换到新的域名，给你造成的不便，敬请谅解。

### `v4.17.0` 2022.08.26

**新建应用字段预设优化**

* 布局中预设的系统信息仅保留：创建人、创建时间、最近修改人、最近修改时间4个字段
* 布局中动态栏去掉“类型”和“数据内容”两个字段
* 电脑端表格的表头字段默认获取规则(租户未主动配置时)修改为：取详情页中配置的字段顺序（从上到下，从左到右）在列表中按从左到右的顺序展示；如果应用配置并启用了业务流程字段，则将“业务流程”字段在列表中展示在“摘要信息最后一个字段”和“详情信息第一个字段”中间
* 手机端列表页预设规则修改为：
  * 放开显示字段数量为1-6个
  * 标题字段，置顶显示
  * 归属人字段，显示在第二个
  * 按详情页字段顺序取前3个字段按顺序显示在归属人字段和创建时间字段中间
  * 创建时间字段，如有，则显示在最后一个
  * 标签字段，如果应用配置并启用了业务流程，则展示业务流程字段，如果没配置则预设为空
* 关联应用字段配置优化为：
  * 关联应用字段配置中，去除“关联应用详情页标题属性配置”，直接展示原名称即可
  * 去除“从应用”的字段配置功能，直接按原应用列表展示规则展示，保留页面右侧“导航管理”功能，“从应用”tab仅展示，除“动态”之外，其余tab均不可点击
  * 关联应用默认显示
  * 关联应用列表弹窗的点击热区扩展至整个列表，和列表页保持一致
* 金额字段常用属性预设规则修改为：
  * 预设金额字段属性：金额单位 - CNY，小数位数 - 2，显示千分符 - 勾选、显示货币单位 - 勾选
  * 计算字段、汇总字段中返回的金额属性与上述保持一致
  * 引用字段和原表单属性保持一致
* 主属性字段名称修改为“标题字段”

**流程相关用户**

* 业务流程、工作流程、审批流程的触发条件中，如果包含用户字段，则用户可配置成员、角色、部门

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-015.png")

* 工作流提醒中，用的比较多的情况是流程状态变更时提醒相关人员，但目前如果流程状态是自动流转的情况，则不会触发工作流提醒，这一版本中对此做了优化，流程状态是自动流转时也会触发提醒
* 工作流程配置中，修改数据节点，当更新字段时用户字段时，弹窗的选人空间支持搜索

**仪表盘优化**

* 图表类型增加漏斗图

**其他优化**

* 引用字段中的金额、数字、百分比以及计算字段、汇总字段中返回的金额、数值、百分比类型，现已支持排序，
* 详情页按钮顺序按照优先级进行统一排练，且电脑端、移动端均最多展示5个按钮，其余用更多图标收纳起来

### `v4.16.0` 2022.08.15

**表格列宽自适应**

目前大多数表格的宽度几乎都是根据屏幕的宽度，然后按列数平均分配，这样的话，有些短的列就很空，而比较长的列内容又显示不完整，基于客户的实际场景，我们预设了一套列宽自适应规则，根据不同字段类型以及实际内容宽度，让你无需做任何设置就达到最好的显示效果，比如：

* 第一列勾选框固定80px
* 自增编号、文本、手机、邮箱、用户等字段，宽度自适应同列最长内容，如果最长内容超过288px，则截取并用省略号提示
* 多行文本、地址、跟进记录等超长文本内容，支持显示两行，同时根据最长内容进行自适应
* 数字、金额、百分比等比较短的字段，必须全部可见
* 时间、日期、计算字段等比较短的字段，仍然保持全部可见

更多的与表格内容相关的优化内容，欢迎实际体验。

**缺陷修复**

* 修复仪表盘中跟进记录相关图表在某些情况下无数据的问题
* 修复公海池分配时选择归属人为无时，不能分配成功
* OpenAPI新增了部分与对象相关的接口
* 修复当未授权用户登录时提示的错误信息不明确的问题
* 修复当租户有空角色存在时新增对象失败的问题

### `v4.15.17` 2022.08.04

**计算字段优化**

* 计算字段中日期计算增加`YEARS`和`MONTHS`两个函数，由于计算两个日期间隔的年份数和月份数
* 修复`DAYS`函数在某些情况下计算日期间隔天数不准确的问题

**公海池优化**

* 只有设置了主动领取规则的公海池，成员才能在公海池查看公开字段，进行领取操作，其它所有编辑权限一律禁止
* 字段映射的转换操作按钮权限，对管理员和成员均需屏蔽，即公海池中不应该有转换的操作权限
* 修复公海池中非公开字段仍然可以编辑的问题
* 公海池中视图屏蔽部分无用的系统默认视图
* 优化公海池中的部分文案

### `v4.15.16` 2022.08.01

**功能优化**

1. 电脑端列表页无数据时，表头字段名称也需要展示出来
2. 管理后台入口，对非管理员用户隐藏
3. 指标图为数据时，显示为0
4. 仪表盘条形图排序电脑端和移动端反了，改为数字从大到小从上到下排序
5. 删除线索中的“无效”按钮，去掉“打电话”权限
6. 数字、金额等数字类型字段在列表中右对齐，且金额类字段增加对应的货币符号
7. 移动端导航根据电脑端用户自定义的规则进行自动适配，取消移动端用户自定义导航功能
8. 移动端新的审批没有提醒，和电脑端不同步，在页面底部审批菜单右上角增加新审批提醒，样式同消息提醒
9. 去掉详情页的“展开”、“收起”按钮
10. 下载模板右上角添加审批流程按钮去掉
11. 角色权限中“选择模板”改为非必填项
12. 其他用户体验优化

**缺陷修复**

1. 在应用中勾选了数据时，切换顶部导航会导致页面始终处于加载中
2. 新增引用字段后，字段的值未立即更新
3. 修复计算字段为查找关联字段值时，计算结果不正确的问题
4. 映射规则中包含已删除字段的错误提示更明确

### `v4.15.10` 2022.07.29

全新默认模板上线，新开通租户能够体验到我们精心设置的新模板，新的CRM模板相较于旧的模板做了如下优化：

1. 精简应用列表，仅保留最常用的8个应用，且每个应用的字段都经过业务锤炼
2. 每个应用均根据CRM最佳实践配置业务流程、审批流程、工作流程，方便你开箱即用
3. CRM中的角色和权限均根据最佳实践做了删减

除此之外，与新模板配套的相关优化，正逐步上线中，敬请期待。

### `v4.15.8` 2022.07.27

**关联字段优化**

* 为简化配置，降低用户使用门槛，目前底层的无代码平台，已将查找关联、子表单、主从字段三种字段类型合并为“关联应用”，则在“关联应用”的配置中增加了多个控制项，且在批量变更归属人、删除等操作的时候，增加了关联应用的级联控制，方便用户在操作主对象时，可以一并修改从对象
* 删除布尔、时间、父子数据等不常用字段类型

**登录提示优化**

当登录时出现以下情况时，提示的错误信息更加明确

1. 未授权用户登录
2. 已移除用户登录
3. 登录时租户已被禁用

### `v4.15.5` 2022.07.21

**数据共享过滤等场景支持引用字段配置**

* 数据过滤条件配置支持引用字段，同样地，业务流程触发条件和流转条件配置也做了相应的更新

**多行文本以及图片展示优化**

* 支持“多行文本、多选、最新跟进记录”三个字段，在列表页和详情页最多显示两行，一行不够显示换第二行，第二行不够显示加省略号“...”，考虑到页面对齐效果，两行仍然不够显示的情况下，只能用鼠标hover或者点击编辑模式来查看
* 图片尺寸超出容器时按最大高度等比例压缩图片尺寸，确保图片不会变形
* 列表页和详情页，图片最大高度按两行文本高度

**字段优化**

* 手机、邮箱、网址三个文本类字段支持设置为搜索条件

**工作流优化**

* 工作流修改数据节点，支持设置当前日期

### `v4.15.4` 2022.07.14

**业务流程相关优化**

* 放开超级管理员对锁定数据的删除权限，即不管数据当前处于任何状态，超级管理员均可以删除
* 业务流程管理员配置即时生效，即当修改业务流程的管理员后，所有处在当前业务流程下的数据的流程管理员将实时更新
* 手动处理业务流程历史数据时，把三个单选优化为三个多选范围，针对所有历史数据不重不漏，选择时更灵活更容易理解

**地址字段优化**

* 搜索体验优化：支持用户在输入框搜索任意范围的地址关键词搜索，而不受当前所在地址范围的限制，搜索结果显示范围从大到小的整条地址信息列表，选中后直接快速定制到用户需要的地址，实现地址信息的新增和替换
* 地址控件里，间隔符号出现了四种“斜杠、逗号、右箭头、横杠”，显得杂乱，全部统一成“斜杠”，例如：北京市/朝阳区
* 数据导入时，地址兼容多种分隔符，比如

斜杠：“/”，如：中国/广东/中山横杠：“-”，如：中国-广东-中山逗号：“，”“,“，包括“中文逗号”和“英文逗号”，如：中国，广东,中山空格：“ ”，“ ”，3个字符以内的空格”，如：中国 广东 中山

* 数据导入时兼容在加行政名称后缀的情况，例如“上海”兼容“上海市”，“黄埔”兼容“黄浦区”，“四川”“兼容”“四川省”，“成都”兼容“成都市”，“武侯”兼容“武侯区”，相反“上海市”也能兼容“上海”
* 地址字段支持工作流、业务流程、审批流程等模块的条件配置

**特殊字段优化**

* 布局字段优化：只有一个布局时，布局字段全局不可见，有多个布局时，布局字段可见
* 最新跟进记录ID字段优化：全局不可见
* 公海池字段优化：配置了公海池的应用可见，未配置公海池的应用全局不可见
* 业务流程/审批流程字段优化：布局新建页配置不可见，其他地方可见
* 父子数据字段优化：启用父子数据后，父数据字段可见，否则不可见

### `v4.15.1` 2022.07.05

**数据导出功能优化**

* 数据导出功能由「管理后台」迁移到「应用端」，你可以在权限管理中，为每个角色配置指定应用的导出权限，然后进入应用的数据列表，即可导出当前用户权限范围内的数据。

**缺陷修复**

* 当仪表盘的创建人已离职或已被删除时，查询其分享的仪表盘会出现“未查询到对应ID的数据”的错误提示
* 查看数据详情时，如果当前数据正处于某个业务流程的审批中时，展示的审批流程不完整，这个版本修复了这个问题

### `v4.15.0` 2022.07.03

**审批流程增加分支节点**

我们在审批流程中增加了分支节点功能，你现在可以配置更加复杂的审批流程以应对复杂的审批业务。比如，你可以点击“新增分支”增加多条审批路径，然后为每条审批路径配置不同的条件，满足相应条件即进入相应的审批流程，如果数据满足多条审批路径，则根据优先级判断，进入优先级高的审批流程。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-016.png)

### `v4.14.0` 2022.06.11

**审批详情优化**

* 审批详情支持展示完整的审批流程，其中已审批记录用实线串联，未审批节点用虚线串联，如下图所示。
* 审批支持催办了，如果你是审批的发起人，那么在审批详情顶部会展示“催办”按钮，你可以点击催办，给指定审批人发送飞书消息和系统通知

**其他优化**

* 优化审批“发起人”确认逻辑：
  * 数据的归属人作为审批的发起人
  * 如果数据无归属人，则数据的创建人为审批发起人
  * 如果数据无创建人，则数据的最后修改人为审批发起人
  * 如果数据无最后修改人，则“系统”用户为审批发起人
* 优化审批列表中“待审批”数量与导航栏审批数量标签显示不一致的问题
* 导航栏支持将仪表盘、审批、业绩、动态等特殊应用设置为首页
* 仪表盘日期控件优化，目前选择时间范围更方便
* 公海池中的数据详情也支持查看日志了

### `v4.13.9` 2022.06.02

**审批流程支持会签功能**

当审批节点中包含多个审批人时，支持设置多种审批方式：

* 一名审批人通过或否决即可
* 需所有审批人通过，否决只需要1人
* 只需一名审批人通过，否决需全员否决
* 按比例投票通过

与此同时，**我们对审批人的选择范围也做了相应的扩充**。我们在之前成员、角色、部门、部门负责人、上一审批节点的执行人、审批对象的参与人｜归属人｜创建人的基础上，增加了当前应用和其关联应用下的参与人｜归属人｜创建人变量。应用场景举例：合同下包含订单，每笔订单又包含相应的产品，在审批订单时，除了销售、财务等角色参与审批外，还需要产品负责人来审批。这种情况下，审批人就应该是：

* 角色：财务
* 当前应用变量：合同的归属人
* 关联应用变量：合同下的订单下的产品的归属人

具体的配置如下图所示，其中“合同←订单”表示订单关联合同，“订单→产品”表示订单关联产品。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-017.png)

除此之外，如果配置的审批人没有找到，比如上述示例中的产品没有归属人，那么整个审批节点都没有审批人，这时候我们会自动通过。即**审批节点的审批人为空时，自动通过，**具体情况会在审批详情展示

### `v4.13.8` 2022.05.31

**数据共享增加筛选过滤条件**

数据贡献时，支持设置筛选条件了，你可以把符合条件的数据共享给其他人，而不是像之前那样，只能把自己权限范围内的所有数据共享给其他人。你可以在「管理后台」->「权限管理」->「数据共享」中进行配置：

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-018.png)

### `v4.13.5` 2022.05.27

**多层级关联应用中的计算字段和汇总字段支持实时计算**

比如「合同」中包含「订单」，「订单」中有多条「订单明细」，每条「订单明细」的金额由「产品」的单价和数量计算得来，当改变产品单价时，订单明细中的金额、订单中的金额、合同中的金额将实时变更为最新的计算结果，当然更复杂的关联关系也是支持的基于上述能力，我们又做了如下优化：

* 审批流程、业务流程、工作流程的触发或过滤条件均支持计算字段和汇总字段
* 应用数据的筛选视图的过滤条件配置也支持了计算字段和汇总字段

**其他优化**

* 优化子表单的编辑体验，现在编辑子表单跟编辑普通关联对象一样方便快捷
* 富文本字段支持在列表页面快捷编辑

### `v4.13.0` 2022.05.17

**业务流程状态流转后的数据锁定功能**

使用业务流程功能的客户，希望状态流转到某个阶段后，数据能被锁定，在现实业务中，某些状态的流转通常需要经过严格的审核或层层审批，但如果审批后数据仍然可被编辑，就无法达到流程控制的目的。因此需要支持状态流程后的数据锁定功能。功能要点如下：

* 支持设置流程任意状态之间流转的数据锁定，锁定后的数据为只读状态，不能被编辑
* 支持设置部分用户拥有特定字段的编辑权限
* 支持设置整个流程的管理员，流程管理员可对数据进行“编辑”、“回退至初始状态”

你可以在 管理后台 > 应用管理 > 业务流程 > 进入某条流程配置 > 状态定义->数据锁定 中进行配置

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-019.png)

点击锁定配置，你可以看到如下配置界面，处于该状态下的数据，仅支持指定用户编辑指定字段，配置完成后，你可以在应用端体验相关功能。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-020.png)

**其他优化**

* 数据查重结果之前最多仅能展示20条数据，此版本中，对查重结果进行分页展示，并显示准确的重复数据数量
* 目前“应用视图”和“工作流修改数据”两个地方的涉及人员选项的字段“归属人、参与人、创建人、最后修改人、最后跟进人”只支持在列表中选择，不支持搜索，在用户有几百人的时候，找到一个用户成本相当高，此版本对此进行优化，在选择用户时可根据用户名称进行过滤
* 应用布局设置中，电脑端配置页面的字段列表留白太大，导致字段名称展示不完整，此版本对此进行了优化
* 应用外链支持文件和图片类型的字段

**缺陷修复**

* 修复数据导出时地址字段空白的问题
* 字段的默认值为计算公式时，系统每隔一段时间会按照计算公式重新计算新值，覆盖掉用户填写的值，这个版本修复了这个问题

### `v4.12.8` 2022.05.09

**小优化**

* 数据导入支持`动态`/`跟进记录`的导入
* 修复偶现添加查找关联字段时搜索无效的问题

### `v4.12.6` 2022.05.07

**小优化**

* 业绩的统计周期是季度、半年、年时，当刷新完成值时，会清空设置的目标值，此版本更新修复了这个问题
* 修复公海池视图查询数据时受到用户权限控制的问题
* 批量编辑的数量限制放开到200条，现在您可以同时编辑200条数据
* SalesWork CRM操作视频陆续制作中，目前已更新部分视频到对应功能的说明链接处，您可以点击查看

### `v4.12.5` 2022.05.06

**小优化**

* 当引用字段引用的是查找关联字段时，修复在数据详情页不能展示该引用字段的值的问题
* 在主应用的详情页面增加从应用数据，如果从应用字段的默认值设置为计算公式，那么在修改该字段的数据后，系统仍然会按照默认值的计算公式来计算，此版本更新修复了这个问题

### `v4.12.2` 2022.04.29

**小优化**

* 导入日期时间类型的数据时，兼容多种格式的数据导入
* 更新地址字段的行政区划到2021年底的最新版本

### `v4.12.1` 2022.04.28

**小优化**

* 快捷搜索时支持查找关联、主从关联、自增编号、引用字段等类型的字段
* 数字字段支持设置千分符
* 最新跟进记录支持在列表页面快捷编辑
* 详情页关联表单展示数量由3条修改为7条
* 应用端业绩模型名称超长时的显示优化
* 数据详情页编辑页面查找关联字段下拉选项内容过多时的展示优化
* 导入子表单、关联表单等数据时分批导入，并优化导入报告的显示
* 创建应用时可以直接主属性字段是文本还是自增编号

### `v4.12.0` 2022.04.21

**审批节点优化**

审批流程的审批人支持角色、部门、部门负责人、直属上级、归属人、创建人等变量，你可以在管理后台进行配置

### `v4.11.3` 2022.04.16

**业绩模块优化**

业绩目标支持设置成员，业绩考核指标的数量限制增加到5个

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-021.png)

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-022.png)

**工作流发送用户优化**

工作流消息通知支持配置用户相关变量，比如数据归属人的直属上级、归属人的部门负责人等

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-023.png)

**其他优化**

* 在添加主从数据时，如果添加的从数据正在审批时，之前无法添加主数据，目前已经放开限制
* 业务流程审批后无法自动触发下一个流程的审批
* 取消分页自定义设置页码的功能

**缺陷修复**

* 修复应用自定义视图可以越权查询数据的问题
* 修复管理后台用户列表无法根据角色进行筛选的问题
* 修复管理后台无法保存空审批的问题

### `v4.11.1` 2022.04.06

**布局优化**

新增电脑端列表页布局设置，用于对应用端数据表头进行统一设置，你可以在管理后台的应用布局页进行设置

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-024.png)

导航设置可以强制推送给所有用户，你可以在管理后台的「页面管理」-「导航设置」中进行设置、

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-025.png)

### `v4.10.1` 2022.03.31

**数据转换后支持删除原数据**

新增数据转换后删除原数据功能，可在管理后台的「映射规则」扩展服务中进行设置

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-026.png)

**其他优化**

* 工作台支持非创建人进行编辑和删除

### `v4.9.3` 2022.03.17

* 业绩目标值和完成值支持以“万”为单位进行展示，可以在管理后台的「业绩目标」扩展服务中进行设置
* 管理后台账户首页中用户容量、到期时间、使用量等显示更准确
* 优化应用端快捷编辑偶现不能编辑的问题

### `v4.9.2` 2022.03.14

仪表盘图表的指标展示支持以“万”为单位，可以通过下图所示来进行设置

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-027.png)

### `v4.9.0` 2022.03.11

**数据批量编辑功能增强**

* 数据增加批量编辑和批量变更参与人，其中变更参与人同时支持增加/减少指定用户。在数据列表选中多条数据后，会出现对应的功能按钮。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-028.png)

**其他优化**

* 定位字段可定位范围增加100m和200m两个选项，移动端定位更精确

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-029.png)

**缺陷修复**

* 修复数据操作日志的操作人已离职或已删除时，查询日志会报错

### `v4.8.1` 2022.03.01

**缺陷修复与优化**

* 配置按时间触发流程时，开始执行时间未支持"月"和"周"

### `v4.8.0` 2022.02.28

**数据回收站**

* 应用字段与数据的回收站功能，回收站中保存了用户最近15内删除的数据和字段信息，企业的超级管理员可以从「扩展服务」中进入并管理回收站中的数据。更具体的操作指引请参考：[SalesWork CRM 管理后台帮助文档](https://leanwork.feishu.cn/docs/doccnVOrVZqkkTVZCG2WOol8ssh)

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-030.png)

**其他优化**

* 正常状态下的数据详情不展示数据状态标签，之前是显示一个空的标签
* 仪表盘筛选组件不展示已经删除的下拉选项，考虑到可能有数据关联到已删除的选项，所以之前各种筛选组件都会保留已删除的下拉选项
* 自动清理「已删除的业务流程和工作流程」关联的触发规则信息

**缺陷修复**

* 修复点击链接的方式进入数据转换页面时页面白屏的问题
* 修复配置主从、查找关联字段时，当弹出选择应用的下拉框后，反复滚动出现应用名称重复的问题

### `v4.7.13` 2022.02.25

**缺陷修复**

* 修复审批通过时在某些特定的情况下报系统异常的问题

### `v4.7.12` 2022.02.24

**缺陷修复**

* 修复审批流的触发条件中包含汇总字段时审批流未触发的问题
* 修复自定义应用在高级搜索时，如果检索字段是关联查询字段时，不能按指定关键字进行搜索的问题

### `v4.7.11` 2022.02.23

应用数据列表的表头的所有字段均支持隐藏，之前一些特殊的系统字段 (比如：自增类型的主属性)是不支持隐藏的。你可以从下图中的入口进入设置

仪表盘中的「条形图」的展示样式优化：当指标的排序方式设置为降序时，指标数据越大的维度，展示在图表最上方，同样地，排序方式设置为升序时，指标数据越小的维度，展示在图表最上方。之前的展示方式，正好相反。

### `v4.7.10` 2022.02.21

* 业绩目标中目标值与完成值的数字展示修改为千分位形式
* 用户列表字段在设置默认值时，在计算公式中可以同时选择成员和变量
*   如果应用的字段中包含多个关联查询字段，新建数据时，系统会主动解析多个关联字段间的关联关系并自动回填

    比如，下面的示例中，「订单」查找关联「客户」，「收款」查找关联「客户」和「订单」，那么「收款」中就会同时包含「关联客户」和「关联订单」两个字段，当用户在选择「关联订单」后，系统会自动带出所选订单的关联客户信息，并回填到「收款」应用的「关联客户」字段上

### `v4.7.9` 2022.02.19

* 修复大数据量情况下，点击翻页且页码比较大时报系统错误的问题
* 修复使用某些字段进行排序时未生效的问题
* 计算字段增加“MULTIUSER”等多个内部函数以支持应用的部分新功能

### `v4.7.7` 2022.02.17

* 创建仪表盘图标时，如果增加的筛选条件是选项字段，之前还能选择已经删除的字段，现已优化
* 子表单新增查找关联数据时增加更多维度的过滤，具体的使用场景如下：

比如，下面的示例中，在子表单「联系人列表」中的联系人来自客户应用下的联系人

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-031.png)

在不选择「关联客户」的情况下，在选择「联系人」时，将展示所有联系人(如下图左所示)，而当选择关联客户后，将只展示关联了客户A的联系人(如下图右所示)。想要启用此功能，只需要在配置「联系人列表」的字段时增加字段过滤条件即可。

![](//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2021-032.png)

### `v4.7.6` 2022.02.11

**缺陷修复**

* 修复计算字段在某些情况下的精度损失问题
* 修复工作流节点为数据处理且修改字段为布尔类型字段时，可以同时选择两个选项的问题
* 优化企业微信组织架构同步流程

### `v4.7.5` 2022.02.10

**缺陷修复与优化**

* 修复配置端工作台编辑时没有重名工作台时仍然提示“模板名称已存在”的问题
* 修复工作流的触发条件中包含计算字段时工作流未触发的问题
* 修复企业微信小程序不能上传图片的问题
* 企业微信小程序可以跳转「意见反馈页面」
* 优化企业微信小程序「新建日程」参与人的展示样式以及部分文案

### `v4.7.4` 2022.02.09

**缺陷修复与优化**

* 修复飞书日程创建后无法修改参与人的问题
* 优化企业微信日程不能创建在他人创建的日历上的问题

### `v4.7.3` 2022.02.08

**缺陷修复与优化**

* 优化审批、动态等消息在企业微信中的样式和文案
* 企业微信版本的配置端的组织架构模块中增加「部门与成员」页面，用于设置部门负责人、成员直属上级等（备注：第三方应用无法获取完整的企业微信通讯录）
* 配置端应用字段设置「是否参与搜索」后立即生效，之前因为服务端缓存原因，导致某些情况下设置后未立即生效，导致搜索结果不准确

### `v4.7.0` 2022.01.25

* 企业微信版小程序正式上线内测

**缺陷修复与优化**

* 批量变更归属人时，在「同时变更关联对象归属人」时不显示已经隐藏的应用
* 数据详情中包含子表单时，子表单下面的数据显示未对齐
* 修复当子表单中包含查找关联字段时，偶现搜索关联对象报错的问题

### `v4.6.16` 2022.01.20

**缺陷修复与优化**

* 工作流触发条件暂不支持汇总字段，所以在配置触发条件时屏蔽汇总字段
* 修复当引用的字段是单选或多选字段时，在改变源字段样式后，无法隐藏的问题

### `v4.6.15` 2022.01.19

**缺陷修复与优化**

* 数据导出时，查找关联、主从关联等字段展示的值由主属性修改为配置的「字段标题」
* 跟进记录/动态列表中，点击该条数据可直接查看跟进记录或动态关联的数据的详细信息
* 优化数据详情中某些数据状态的标签样式失效的问题

### `v4.6.14` 2022.01.17

**缺陷修复与优化**

* 仪表盘日期筛选组件按周筛选时，周起始日期由星期天改为星期一
* 修复小程序数据列表页面在某些情况下筛选数据不正确的问题

### `v4.6.13` 2022.01.14

**缺陷修复与优化**

* 计算字段支持单选字段，单选字段需要配合新增的函数OPTIONVALUE一起使用，其中OPTIONVALUE函数返回单选字段的值，比如：OPTIONVALUE(审批状态字段)='已审批'，返回的值可参与IF等条件判断，支持更多的业务场景。
* 修复数据导入时当字段为小数时，在某些情况下无法导入的问题

### `v4.6.12` 2022.01.11

**缺陷修复与优化**

* 数据详情增加「退回公海池」功能，仅当对应应用存在公海池，且当前登录用户为公海池成员或管理员时，才会展示相应的按钮
* 之前审批人可在审批详情中查看数据的所有字段，现修改为只能查看审批人权限范围内的字段

### `v4.6.11` 2022.01.10

**缺陷修复与优化**

* 修复某些审批流程在「已发起」列表中的审批状态显示不正确的问题
* 修复独立用户版本中部门负责人在查看数据时权限范围扩大的问题
* 修复独立用户版本在某些情况下不能删除部门的问题

### `v4.6.9` 2022.01.06

**字段支持搜索**

* 文本字段增加配置「是否参与搜索」，设置后，当在Web或小程序顶部的搜索框中输入关键字进行搜索时，会根据此字段的值进行匹配，筛选出结果。当前，每个应用总共可设置三个可参与搜索的字段

**缺陷修复与优化**

* 自定义应用在未配置可参与搜索的字段时，默认使用最先创建的单行文本字段进行搜索，代替之前使用无意义的自增编号主属性字段进行搜索
* 优化微信小程序的登录流程

### `v4.6.8` 2022.01.04

**缺陷修复与优化**

* 驳回或撤回的数据修改为手动重新发起审批( 支持Web、飞书小程序、微信小程序 )
* Web端顶部以及小程序个人中心增加「意见反馈」和「最新进展」两个入口
* 根据国家相关法规要求，暂时关闭短信注册邀请通道