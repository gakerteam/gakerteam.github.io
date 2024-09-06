# 数据管理

## 回收站

### 功能概述
应用下的字段及应用下的数据被删除后，可在回收站操作恢复。系统会将删除的数据暂存15天，15天后将会被清空。

### 操作入口
进入【管理后台】，点击【应用管理】，进入应用管理页面，在【扩展插件】分栏中找到【回收站】，进入删除数据列表页面，查看并设置数据恢复。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-143.png)

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-144.png)

### 恢复删除字段
进入删除字段列表，选择需要恢复的被删除字段，点击【恢复】按钮即可将被删除字段恢复至应用中。

点击【删除】按钮则将字段彻底删除，彻底删除的数据不可恢复，请谨慎操作。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-145.png)

### 恢复删除数据
进入删除数据列表，选择应用，列表展示应用下被删除数据，选择需要恢复的数据，点击【恢复】按钮即可将被删除数据恢复至应用列表下。

点击【删除】按钮则将数据彻底删除，彻底删除的数据不可恢复，请谨慎操作。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-146.png)

## 导入数据

### 操作入口
进入【管理后台】，点击【导入数据】，进入导入数据操作页面

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-147.png)

### 导入操作步骤
1. 整理数据：导入前，请先导出一份当前应用的数据作为模板，参照模板汇总的示例，导入数据时系统会严格校验数据格式，请仔细阅读【导入说明】做好数据整理工作，否则数据导入时很容易报错。
2. 上传文件：将整理好的数据文件上传。
3. 数据预览：提交上传文件后生成预览数据，确认表格中的数据能被系统所识别。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-148.png)

4. 选择应用：选择数据需要导入的应用及布局

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-149.png)

5. 字段映射：将表头名称与系统中的字段建立映射关系，系统会自动将同名的字段进行关联映射。选择“是否判断数据重复，当数据重复时，选择判断重复的字段以及执行“跳过、覆盖”操作类型。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-150.png)

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-151.png)

6. 导入数据，导入完成后会显示结果报告，如果数据量较大，可不必在页面上等待，系统会自动在后台执行导入，完成后会自动以消息通知的方式发送结果报告。点击页面顶部导航右侧【消息】入口进行查看。

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-152.png)