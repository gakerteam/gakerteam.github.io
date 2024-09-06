import{_ as e,c as t,a1 as p,o as r}from"./chunks/framework.aDewEmSk.js";const u=JSON.parse('{"title":"流程引擎概述","description":"","frontmatter":{},"headers":[],"relativePath":"admin-guide/process.md","filePath":"admin-guide/process.md"}'),o={name:"admin-guide/process.md"};function s(i,a,n,d,c,l){return r(),t("div",null,a[0]||(a[0]=[p('<h1 id="流程引擎概述" tabindex="-1">流程引擎概述 <a class="header-anchor" href="#流程引擎概述" aria-label="Permalink to &quot;流程引擎概述&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>每项业务背后都有一套业务流程，它包含了一系列流程节点（通常是人为定义的关键“里程碑”，或称为“流程状态”）以及对应每个节点下的具体活动（可细分为任务），每个节点之间，以及活动之间，具有相互衔接的逻辑顺序。所有的流程都会一个负责发起和输入需求（input）的开始节点，最终走向一个输出结果（output）的结束节点，结束节点要么成功，要么失败。中间再有数量不等的“中间节点”。以反映线下某个具体事项的“发起、处理过程和结束”，以及完成这件事所涉及到不同人以及任务的分工。</p><p>在定义业务流程之前，通常需要梳理企业的价值流，任何企业的相同使命或者说存在的意义都是为客户创造价值，因此定义价值流就是定义企业内部流程要如何设计才能更好的为客户创造价值。每个企业的价值流都会围绕“找到客户、获得订单、订单履约”横向业务流程展开，对应企业的“营销、销售、售后”等纵向组织架构，同时企业还会有“人事、财务”等职能部门也有其对应的业务流程。</p><p>什么是企业的核心业务流程？在业务流程管理领域的共识是，一切围绕客户价值创造的流程就是企业的核心流程。因此梳理和构建业务流程要先从企业产生价值创造的核心业务流程开始。所有企业都应该按照自身业务特征梳理出“订单销售和履约流程”。</p><p>集客云流程引擎主要支持业务流程管理的三层架构。</p><p>第一个层次：主线流程：多流程串联，“商机、销售合同、项目”，</p><p>第二个层次：支线流程：单应用流程，每个应用上的每条数据代表一个具体的事项，典型的，例如销售合同是与客户达成交易的主干流程，设置“起始、中间、结束”状态</p><p>第三个层次：执行任务：SOP，在每个单应用流程的不同节点上为不同用户/角色自动分发任务</p><p>而这种发起，有一个产出给内部成员或外部客户，例如产品研发流程、生成制造流程等。</p><p>除了业务流程，还有为了控制风险的审批流程，例如采购审批、请假审批等。</p><h2 id="工作流" tabindex="-1">工作流 <a class="header-anchor" href="#工作流" aria-label="Permalink to &quot;工作流&quot;">​</a></h2><p>为业务流程和审批流程提供一个可自动执行的流程模型，通过分析拆解流程中的活动，在工作流中定义好任务、角色、规则并进行执行和监控，达到自动化流程的目的，最终实现重复性的任务由自动化代替，减少人工操作， 提高效率。</p><p>一个工作流由触发器和若干个动作节点组成。触发器是流程启动的开关，通过多种类型的动作节点来完成各种任务，以此实现流程自动化。</p>',14)]))}const m=e(o,[["render",s]]);export{u as __pageData,m as default};
