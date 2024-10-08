# 采购管理及应付核算

## 新建采购产品
在导航中找到【产品信息】入口，点击进入产品信息列表页。

在列表右上角点击【新建】按钮，在新建表单中选择“产品类型”为“外购产品”或“原材料”，填写“产品名称、产品类目、规格型号、计价单位、税率”等信息，如涉及上架销售，提交并完成新建。

则需填写“建议售价、最低售价”等信息，并将流程状态流转至“已上架”，该产品才会在销售提交报价或销售合同时被选到。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-099.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-100.png)

## 新建供应商
在导航中找到【供应商】入口，点击进入供应商列表页。在列表右上角点击【新建】按钮。

在新建表单中输入“供应商名称”关键词，回车或点击输入框右侧【工商查询】图标按钮，可查询天眼查数据库中匹配的公司列表，选择后可快捷录入“供应商名称”和“税务登记号”，补充填写其他必要的供应商信息，提交并完成新建。

系统会根据工商数据库中的名称精确判重，系统中已存在的重名供应商会提示并禁止录入。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-101.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-102.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-103.png)

## 供应商审批
【采购申请人直属上级 / 财务 / 各级领导】分别会收到审批消息提醒，依次点击进入审批页面完成报价审批

## 供应商状态流转
审批通过后供应商状态会流转为“合格供应商”。

在供应商详情页点击【废弃供应商】状态按钮，手动将供应商状态流转至“废弃供应商”，提交并完成状态流转。

提交采购合同时仅允许选择“合格供应商”，“待审批、废弃供应商”状态的供应商无法被选择。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-104.png)

## 提交采购需求
入口1：销售合同转采购需求，适用于合同相关的采购场景，经审批通过的销售合同，会在详情页右上角展示【提交采购需求】按钮，点击后系统自动将销售合同中已有信息填入采购需求，补充填写采购需求所需更多必要信息后，提交并完成新建。

入口2：适用于与合同无关的采购场景，在导航中找到【采购需求】入口，点击进入采购需求列表页。在列表右上角点击【新建】按钮，填写采购需求所需必要信息后，提交并完成新建。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-105.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-106.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-107.png)

## 采购需求审批
【申请人直属上级 / 采购 / 各级领导 】分别会收到审批消息提醒，依次点击进入审批页面完成审批。

## 采购需求状态流转
【系统】判断采购需求下关联了采购合同，会自动将采购需求状态流转至“采购中”

【系统】判断采购需求下关联的采购合同到达“已入库”状态，会自动将采购需求状态流转至“采购完成”

## 提交采购合同
入口1：采购需求转采购合同，经审批通过的采购需求，会在采购需求详情页右上角展示【转采购合同】按钮，点击后系统自动将采购需求中已有信息填入采购合同，补充填写采购合同所需更多必要信息后，提交并完成新建（转换成功后，采购需求状态会自动变更为“已转订单”）。

入口2：在导航中找到【采购合同】入口，点击进入采购合同列表页。在列表右上角点击【新建】按钮，填写采购合同所需必要信息后，提交并完成新建。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-108.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-109.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-110.png)

## 采购合同审批
【归属人直属上级 / 财务 / 各级领导】（金额大于5000财务总监参与审批、金额大于10000副总参与审批、金额大于50000老板参与审批）会收到审批消息提醒，依次点击进入审批页面完成审批。

## 采购合同状态流转
【采购】在采购合同详情页点击“已签约”状态按钮，填写“合同签署时间”、上传“合同双签扫描件”，手动将合同状态流转至“已签约”

【系统】判断当“已入库金额 = 采购总金额”，会自动将采购合同状态流转至“已入库”

【系统】判断当“已付款金额 = 合同总金额”，会自动将采购合同状态流转至“已付款”

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-111.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-112.png)

## 提交采购入库
经审批通过的采购合同，会在详情页右上角展示【申请入库】按钮，点击后下推生成采购入库表单，补充填写采购入库所需更多必要信息后，提交并完成新建。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-113.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-114.png)

## 采购入库审批
【库管】会收到审批消息提醒，点击进入审批页面完成审批。

## 采购入库状态流转
进入采购入库详情页，点击【已质检】状态按钮，填写“质检时间”，上传“质检凭证”，手动将采购入库状态流转至“已质检”。

进入采购入库详情页，点击【已入库】状态按钮，填写“实际入库时间”，手动将采购入库状态流转至“已入库”。

采购入库流转至“已入库”状态后，“采购合同”应付核算中的“已入库金额”会自动汇总更新。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-115.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-116.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-117.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-118.png)

## 提交付款申请
流转至“已签约”状态后的采购合同，会在详情页右上角展示【申请付款】按钮，点击后下推生成申请付款表单，补充填写申请付款所需更多必要信息后，提交并完成新建。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-119.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-120.png)

## 付款申请审批
【归属人直属上级 / 各区财务 / 总裁助理 / 各级领导】（金额大于5000常务副总裁参与审批、金额大于10000总经理参与审批、金额大于50000董事长参与审批）分别会收到审批消息提醒，依次点击进入审批页面完成审批。

## 付款完成确认
【财务】完成付款后，在付款申请列表页【搜索框】中输入供应商名称，搜索找到匹配的供应商及对应的付款申请。

进入付款申请详情页，点击“已付款”状态按钮，在弹窗中填写“实际付款时间、实际付款金额”，手动将开票状态流转至“已付款”。

付款完成后，“采购合同”应付核算中的“已付款金额”会自动汇总更新。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-121.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-122.png)

## 提交采购发票
流转至“已签约”状态后的采购合同，会在详情页右上角展示【采购发票】按钮，点击后下推生成采购发票表单，补充填写采购发票所需更多必要信息后，提交并完成新建。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-123.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-124.png)

## 采购发票确认
【财务】进入采购发票详情页，点击“已收票”状态按钮，手动将开票状态流转至“已收票”。

收票完成后，“采购合同”应付核算中的“已收票金额”会自动汇总更新。

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-125.png)

![](//swstatic.saleswork.cn/docs/usermanual/user-guide-126.png)

## 采购合同应付台账
系统会根据采购合同相关联的【采购明细、付款申请、采购入库、采购发票】表单数据以及预设的流程规范自动生成应付核算数据。
