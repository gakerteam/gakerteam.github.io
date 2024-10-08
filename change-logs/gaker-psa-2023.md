# 集客云 PSA 2023

### `v4.26.0` 2023.12.12

**全新PSA模版上线**

我们面向**专业服务**领域推出**全新的“业务、财务、绩效”一体化解决方案**，SalesWork CRM品牌将逐步升级到**集客云PSA**品牌。

作为品牌升级的第一步，我们推出了全新的PSA模板，并基于此开发了全新的绩效管理模块，欢迎体验试用，详情请阅读：[集客云PSA全新上线](https://mp.weixin.qq.com/s/-GHlpFL5bPr5NxsA6kAVRQ)。

也欢迎大家关注我们的全新公众号与我们互动交流！

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-01.png" alt=""><figcaption></figcaption></figure>

**全新PC端工作台上线**

如下图所示，全新的PC端工作台包含5个部分：我的待办、我的目标、数据看板、最新动态和关注事项。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-02.png" alt=""><figcaption></figcaption></figure>

**我的待办**

我的待办包含任务、审批、日程三个模块，任务系统的首个版本功能比较简单，需要大家关注的就是可以为他人创建任务，且任务的完成需要创建人来确认。比较适合需要与他们协作的场景，你可以给同事创建任务，同事可以为任务上传附件、添加评论，然后勾选完成，最后由你来确认任务是否真的完成。

除此之外，我们对审批也做了优化，之前有客户提到在审批列表想看到更多的字段，但由于每条审批关联不同的应用的不同数据，在列表上不是很好展示。为此，我们增加了审批卡片视图，后续我们将为卡片带来更多快捷操作。

**我的目标**

我的目标是基于OKR思想设计的全新绩效管理模块，可以更加方便和直观的展示自己和下级的业绩完成情况，业绩指标由客户自定义，灵活方便，适应不同业务场景。

**最新动态**

与移动端一致，将自己和下级的跟进记录收纳到一起，更直观更方便。

**数据看板**

将仪表盘中的图表收纳到首页，后续我们将根据客户的反馈继续优化。

**关注事项**

将你关注的多个应用视图收纳到一起，你可以在一个页面查看你关注的多个应用的数据。

### `v4.25.0` 2023.09.15

**门户端首个版本上线**

经过一段时间的紧张开发，我们于近期发布了门户端产品的首个测试版本。门户端前期主要聚焦B2B企业数字化交易旅程，让B端客户也能获得C端电商购物版极致交易体验，实现企业内部员工与外部“客户、代理商”在线一站式协同。门户端产品具有如下特征：

1. 内外协同：将门户端“DXP”与企业端“CRM、ERP”系统融为一体，以“打破信息孤岛、提升客户体验”为宗旨，致力于为ToB企业实现“企业内部全流程数字化 + 数字化客户交易旅程”的一站式解决方案；
2. 及时反馈：用户在门户端任意触点的访问行为和需求反馈均能实时、精准传递至企业决策层和执行层，避免信息层层传递的延迟和损耗，帮助企业捕捉最佳时机、快速做出决策和行动反馈。同时系统支持将企业内部各部门对用户需求的响应和处理进度实时自动同步给客户，有效提升客户体验；
3. 个性定制：借助“灵活的无代码平台，专业的轻咨询服务、贴心的定制化实施”，快速交付个性化的B端交易系统；
4. 全域触达：可用于搭建“官网门户、公众号门户”，后期还将覆盖微信小程序、飞书小程序等，以便覆盖私域&公域核心触客渠道；
5. 一云多端：全站页面采用响应式布局，用户通过“电脑端、平板端、手机端”等不同尺寸设备均有良好的访问体验，同一套数据结构支持企业端和门户端不同角色访问。

门户端产品仅包含在旗舰版中，目前仅供部分客户尝鲜试用，接下来将根据客户的反馈，逐步完善。如果您也想尝鲜体验，[欢迎联系我们的客户经理](https://applink.feishu.cn/Td5Qjh6v)。

### `v4.24.20` 2023.07.31

**数据和字段相关功能优化**

* 点击数据详情页的“审批状态”标签，可以直接跳转到审批详情页面，操作更便捷
* 自增编号字段支持周期重复啦，比如可以设置每个月的编号从1开始重新编号
* 数据批量操作新增了批量“重置流程”和“重新计算”功能，如果用户修改了业务流程的配置，又想指定某些数据使用新的流程，那么管理员可以选择合适的数据，批量重置流程，让数据从起始状态从新开始流转
* 计算字段又增加了不少新的函数，比如支持获取用户的部门名称和角色名称，比如计算两个日期之间的月份数、天数、小时数等
* 引用字段支持引用最近跟进记录等富文本内容

**流程相关功能优化**

* 审批评论支持修改和删除，不少用户在填写审批意见时，提交了评论才发现有错误信息，现在就不用担心这个问题啦
* 支持在审批列表批量删除审批
* 工作流程中新增数据时，支持同步源数据的跟进记录到新建数据

**其他功能优化**

* 用户控件支持按照用户角色、部门名称等快捷搜索
* 仪表盘图表支持公海池、布局等字段作为维度和筛选条件
* 仪表盘筛选器中的用户控件对已离职用户增加了标记

### `v4.24.0` 2023.06.06

**批量新增功能**

不少业务场景都需要批量新增数据，比如：当您创建订单明细时，通常需要关联产品。您可以设置为从产品字段添加明细，这样可以直接选择多个产品，并为每个产品添加一行订单明细。为满足类似的业务场景，这个版本中增加了批量新增的功能，你可以在管理后台对应应用的应用设置中开启，如下图所示。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-03.png" alt=""><figcaption></figcaption></figure>

选项开启后，在PC端，新建按钮将变成批量新建按钮，如下图所示。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-04.png" alt=""><figcaption></figcaption></figure>

数据详情页的快捷编辑，也会同步替换成批量新增。批量新增目前有如下限制：

* 仅支持电脑上使用，不支持在小程序使用；
* 使用批量新增从应用数据时，将忽略从应用的数据查重规则，直接创建新的数据；
* 使用批量新增从应用数据时，从应用将无法再同时添加它的从应用数据；
* 使用批量新增从应用数据时，如果保存速度较慢，请酌情减少同时新增的数据条数。

### `v4.23.5` 2023.05.18

**跟进记录支持“点赞、评论”功能**

跟进记录增加评论和点赞功能啦：

* 当你点击点赞按钮时，会弹出表情选项，点击后将点赞信息展示在跟进内容下方，再次点击可删除点赞信息，目前我们提供8个常用表情选项：👍 点赞，🎉 祝贺，🙏 感谢，💪 加油，👌 收到，🤝 握手，🫰比心 ，✌️ 胜利
* 点击评论按钮，会在跟进内容下方展示评论内容和新建评论输入框，输入内容点击评论可提交评论，支持在评论中@相关同学，@后系统自动通过飞书消息和系统消息形式向被@的用户发送该条评论信息

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-05.png" alt=""><figcaption></figcaption></figure>

### `v4.23.0` 2023.05.08

**行业模板功能**

SalesWorkCRM服务的客户越来越多，我们的客户服务团队在不同的行业积累了很多优秀的管理经验，为此，我们将部分行业的管理经验抽象成模板，方便客户体验和使用。

先期开放：软件服务、咨询服务、MCN本地生活服务、高端制造等四个行业，如果您的业务正好符合这几个行业，可以在「管理后台」-> 「账户首页」中点击「体验Demo」进入模板体验，体验觉得还不错，可以点击「重置模板」，将CRM切换到指定的模板。如果您的CRM中已经有很多数据，可以联系我们帮你进行数据迁移。

> 更多的行业模板逐步开放中，已开放的模板我们也会不断的优化，欢迎体验。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-06.png" alt=""><figcaption></figcaption></figure>

### `v4.22.0` 2023.03.08

**移动端新版工作台**

小程序端工作台全新改版，新版移动端工作台整体分为“快捷搜索、应用导航、数据看板、动态列表、审批列表、快捷新增”6个功能模块，如下图所示，其中「任务」和「审批」等模块将在后期优化。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-07.png" alt=""><figcaption></figcaption></figure>

1.  快捷搜索

    按“客户名称”搜索客户应用以及关联从应用的数据，例如“商机、报价单、合同”等应用关联了客户，则检索范围为按客户名称搜索“客户、商机、报价单、合同”四个应用下的数据
2.  应用导航

    默认读取当前用户在电脑端自定义的导航显隐和排序规则（同应用导航列表），默认最多展示8超过8个则只展示7个，最后一个图标变成全部，点击则下拉展示全部
3.  数据看板

    &#x20;读取当前用户在电脑端的“仪表盘、报表”查看权限及数据，并采用多张轮播卡片的方式展示单张仪表盘内容
4.  动态面板

    默认读取当前用户及其下级用户的所有跟进记录；点击用户头像，可快速过滤展示该用户下的全部动态；点击关联数据可跳转到对应的数据详情页
5.  快捷新增

    点击展开当前用户权限范围内的所有应用的新增入口，新建完成后，返回当前页面，刷新动态

### `v4.21.0` 2023.02.07

**应用端数据导入**

如果用户有应用的数据新增权限，可以在应用数据顶部的菜单中找到“导入”入口，如下图所示。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-08.png" alt=""><figcaption></figcaption></figure>

在应用端导入数据时，会受系统规则限制：

* 导入的数据作为新记录导入应用中，受用户权限约束
* 满足条件的数据会触发工作流程、审批流程和业务流程
* 导入的数据受查重规则约束，如果想限制某些数据导入，请联系管理员配置数据查重规则

**其他优化**

* 映射规则支持图片和文件字段，现在你可以自由转换应用中的图片和附件啦
* **更新仪表盘数据同步规则，之前仪表盘每隔几分钟主动拉取业务侧数据，仪表盘的数据统计与业务侧数据有几分钟延迟，现在我们更新了同步机制，业务侧数据更新后实时同步到仪表盘**
* 修复计算字段中ISNULL函数在某些情况下无法计算出结果的问题
* 在SalesWork中创建的日程可以在飞书中修改，注意：飞书中修改的内容不会同步到CRM中
* 优化跟进记录富文本在小程序端的展示问题
* 子表单关联字段支持跳转到关联数据详情
* **审批流程的审批人支持应用的自定义用户字段啦，之前仅能选择用户的创建人、参与人和归属人**
* 审批列表的表格列宽支持拖拽修改

### `v4.20.0` 2023.01.09

新年首更，我们带来了三大全新功能：全新的富文本字段、全新的动态功能、全新的消息提醒。

**全新富文本**

目前已经有越来越多的客户提出了更丰富的文本属性编辑的需求；之前我们的富文本字段采用的编辑器太重，操作体验不好；而目前的多行文本以及类似跟进记录的文本编辑器又太轻，无法满足复杂需求；为此我们对富文本功能做了全新升级。

你可以在管理后台增加富文本字段，同时动态(跟进记录)输入框也采用了最新的富文本，你可以直接上手体验

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-09.png" alt=""><figcaption></figcaption></figure>

**全新动态(跟进记录)**之前动态仅支持展示用户填写的跟进记录以及简单的审批信息，不少客户提出希望动态支持更多关键信息的展示。为此，我们对数据的关键信息做了如下分类：

* “人员变更”动态类型，展示每次人员变更记录

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-10.png" alt=""><figcaption></figcaption></figure>

* “状态变更”动态类型，展示每次状态变更记录

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-11.png" alt=""><figcaption></figcaption></figure>

* “新建数据”动态类型，展示时间新增记录
* “审批”动态类型，展示全部审批记录

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-12.png" alt=""><figcaption></figcaption></figure>

* “其他”动态类型，展示数据转换操作、公海池操作等关键操作记录

与此同时，我们还支持汇总展示关联从应用3个类型的关键事件：“新建数据、跟进记录、状态变更”，例如客户下有关联的商机、报价单、合同应用，那么可汇总展示所有关联商机、报价单、合同的“新建数据、跟进记录、状态变更”信息。

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-13.png" alt=""><figcaption></figcaption></figure>

**全新消息提醒**

之前所有的消息提醒都需要客户手动配置工作流，但实际业务场景中，数据的人员变更、公海池变动、审批等必要提醒场景，再来手动配置工作流就显得非常繁琐。在这个版本中，我们将客户最常使用的场景，自动以“系统消息+飞书消息”提醒相关人员，无需再配置工作流。

同时，所有的飞书消息，在电脑端点击“查看详情”按钮后，会从侧边栏直接展开移动端详情，比如：

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-14.png" alt=""><figcaption></figcaption></figure>

系统自动提醒的消息类型包含：

* 被别人添加为归属人：通知被添加的归属人
* 被别人变更为归属人：通知新归属人
* 被别人添加为参与人：通知被添加的参与人
* 被别人变更或移除归属人：通知被移除原归属人
* 被别人变更或移除参与人：通知被变更或移除的原参与人
* 被分配线公海索或客户：通知被添加的归属人
* 线索或客户被手动回收公海：通知被回收的原归属人
* 线索或客户被自动回收公海：通知被回收的原归属人
* 提交审批：通知审批人
* 审批评论：通知发起人
* 催办审批：通知被催办的审批人
* 驳回审批：通知发起人
* 撤回审批：通知发起人
* 通过审批：通知发起人
* 移交审批：通知移交人
* 抄送审批：通知抄送人

所有的消息在飞书都以卡片消息的形式发送给对应的通知人，消息格式示例如下：

<figure><img src="//swstatic.saleswork.cn/docs/changelog/2023/psa-changelog-2023-15.png" alt=""><figcaption></figcaption></figure>
