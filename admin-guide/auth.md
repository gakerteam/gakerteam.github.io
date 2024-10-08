# 权限管理

## 角色权限
在【管理后台】找到【角色权限】入口，点击进入审批流程列表页面

页面左侧分别展示“管理角色”和“员工角色”，管理角色支持额外设置管理后台的操作权限。

点击【新建角色】按钮，在弹窗中填写“角色名称、角色类型”提交后完成角色创建，角色创建好支持需要设置功能权限，每个应用都支持细分“查看、新增、编辑、删除、变更归属人、导出”权限

鼠标 hover 至应用名称旁边，点击设置按钮，在弹窗中设置应用字段权限，每个应用的每个字段都支持细分“读写、只读、不可见”权限

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-070.png)

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-071.png)

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-072.png)

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-073.png)

## 基础数据权限
系统中大多数应用数据通常仅限数据归属人、参与人及其上级能

### 功能入口

进入【管理后台】，点击左侧“权限管理”中的“基础数据权限”菜单，进入角色权限设置页面

每个应用可设置“私有、公开只读、公开读写”三种类型的基础数据权限

私有：默认“创建人、归属人、参与人”及其上级拥有该应用数据的读写权限，上级范围包括组织架构中设置的“直属上级、多层上级、直属部门负责人、多层上级部门负责人”，可设置“包含创建人”及其上级。

公开只读：应用数据对企业内所有用户公开，仅数据的归属人、参与人及其上级拥有读写权限。

公开读写：应用数据对企业内所有用户公开，只要拥有应用编辑权限的都人可以编辑。

## 共享数据权限

### 功能概述

数据归属人、参与人、创建人等拥有数据查看权限外，还经常涉及到财务、售前支持、售后服务等角色参与协同，而这些角色下的成员通常不会直接拥有客户的访问权限，而他们经常需要查看数据并完成一些跟进操作，这时候可以通过添加共享数据规则为他们授权。

### 功能入口

进入【管理后台】，点击左侧菜单【权限管理】中的【共享数据权限】，进入共享数据规则列表页面，查看并设置共享数据规则

### 添加规则

点击右上角【添加规则】按钮，在弹窗中设置以下规则

共享的数据：选择共享哪些应用下的数据，支持多选，选个单个选项时，支持添加过滤条件

数据来源于：选择共享哪些用户名下的数据，支持添加单个用户以及某个角色或部门下的全部用户

共享数据给：选择数据共享的目标用户，支持添加单个用户以及某个角色或部门下的全部用户

共享后的权限：只读、读写（数据共享权限设置了读写，用户也未必就能编辑，取决于角色权限中是否也同时拥有读写权限）

![](//swstatic.saleswork.cn/docs/usermanual/admin-guide-074.png)