import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.B4p9iGtR.js";const g=JSON.parse('{"title":"应用信息","description":"","frontmatter":{},"headers":[],"relativePath":"hanks/developer/gaker-paas-api/object.md","filePath":"hanks/developer/gaker-paas-api/object.md"}'),p={name:"hanks/developer/gaker-paas-api/object.md"},t=n(`<h1 id="应用信息" tabindex="-1">应用信息 <a class="header-anchor" href="#应用信息" aria-label="Permalink to &quot;应用信息&quot;">​</a></h1><h2 id="获取应用列表" tabindex="-1">获取应用列表 <a class="header-anchor" href="#获取应用列表" aria-label="Permalink to &quot;获取应用列表&quot;">​</a></h2><p>请求接口：<code>/v1/open/object/list</code></p><p>请求方法：<code>POST</code></p><p>请求参数：无</p><p>响应数据：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;salesLeadObject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,               </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 应用ApiName</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SYSTEM_PRESET_OBJECT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 应用类型</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectDesc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;线索是与客户初次接触获得的原始信息...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 应用描述</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;图片链接&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,                          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 应用Icon地址</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;线索&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                              // 应用名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;customerObject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SYSTEM_PRESET_OBJECT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectDesc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectIcon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;crm3-static.oss-cn-hangzhou.aliyuncs.com/public/object/salesLead.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;S0000420SubTable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SUB_TABLE_OBJECT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectDesc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户联系人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;objectName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;O0000554Object_客户联系人&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>应用类型objectType的取值如下：</p><ul><li><code>SYSTEM_PRESET_OBJECT</code>：系统预设应用</li><li><code>CUSTOM_OBJECT</code>：租户自定义应用</li><li><code>SUB_TABLE_OBJECT</code>：子表单</li></ul><h2 id="获取应用字段列表" tabindex="-1">获取应用字段列表 <a class="header-anchor" href="#获取应用字段列表" aria-label="Permalink to &quot;获取应用字段列表&quot;">​</a></h2><p>请求接口：<code>/v1/open/object/{objectApiName}/fields</code></p><p>请求方法：<code>POST</code></p><p>请求路径参数：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">objectApiName  应用的ApiName，比如：customerObject</span></span></code></pre></div><p>响应数据：</p><p>目前系统的主要字段类型如下所示，当字段为 REF、SUMMARY、CALCULATE 类型的字段时，返回的数据中包含 valueType 属性，表示该计算或引用字段返回的实际字段类型，当字段为其他类型时，valueType的值与 fieldType 一致。</p><p>比如，字段类型为 汇总(SUMMARY) 和 计算(CALCULATE) 字段类型时，大概率的使用场景是用来计算某些字段的值，比如合同.合同金额 = SUM(订单.总额)，这时，valueType = 数字(NUMBER)或金额(MONEY)；</p><p>再比如，字段类型为 引用(REF)字段类型时，valueType 就等于这个字段所引用的那个字段的字段类型，比如，合同“单位”字段中引用了客户的“客户名称”字段，那么“单位”是引用字段，其实际的 valueType 因为文本类型。</p><p>返回的数据中，如果发现有 valueType = REF，那么大概率是因为这些字段关联的字段已经被删除，系统已经不能确认这个字段引用的实际类型了。</p><div class="language-Plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 文本类型字段：</span></span>
<span class="line"><span>         NUMBER_AUTO：自增编号</span></span>
<span class="line"><span>         TEXT_SINGLE：单行文本</span></span>
<span class="line"><span>         TEXT_MULTI：多行文本</span></span>
<span class="line"><span>         TELEPHONE：手机</span></span>
<span class="line"><span>         EMAIL：邮箱</span></span>
<span class="line"><span>         WEBSITE：网址</span></span>
<span class="line"><span>         ADDRESS：地址</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span> 数字类型字段：</span></span>
<span class="line"><span>         MONEY：金额</span></span>
<span class="line"><span>         NUMBER：数字</span></span>
<span class="line"><span>         PERCENT：百分比</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span> 选项类型字段：</span></span>
<span class="line"><span>         SELECT_SINGLE：单选</span></span>
<span class="line"><span>         SELECT_MULTI：多选</span></span>
<span class="line"><span>         RADIO：单选按钮</span></span>
<span class="line"><span>         CHECK_BOX：复选框</span></span>
<span class="line"><span>         BOOLEAN：布尔值(已废弃)</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>时间类型字段：</span></span>
<span class="line"><span>        DATE：日期</span></span>
<span class="line"><span>        TIME：时间</span></span>
<span class="line"><span>        DATE_TIME：日期时间</span></span>
<span class="line"><span>         </span></span>
<span class="line"><span>地址类型字段：</span></span>
<span class="line"><span>        COUNTRY：国家</span></span>
<span class="line"><span>        COUNTRY_CITY：国家城市</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>用户类型字段：</span></span>
<span class="line"><span>        USER：单个用户</span></span>
<span class="line"><span>        USER_LIST：用户列表</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>特殊字段：</span></span>
<span class="line"><span>        LAYOUT：布局</span></span>
<span class="line"><span>        POOL：公海池</span></span>
<span class="line"><span>        LOCATION：定位</span></span>
<span class="line"><span>        RICH_TEXT：富文本</span></span>
<span class="line"><span>        PICTURE：图片</span></span>
<span class="line"><span>        FILE：文件</span></span>
<span class="line"><span>        BUSINESS_PROCESS：商机阶段(已废弃)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>计算字段：</span></span>
<span class="line"><span>    REF：引用字段</span></span>
<span class="line"><span>    SUMMARY：汇总字段</span></span>
<span class="line"><span>    CALCULATE： 计算字段</span></span></code></pre></div><pre class="language-json"><code class="lang-json">{
<strong>    &quot;code&quot;:&quot;0&quot;,
</strong><strong>    &quot;data&quot;:[
</strong>        {
<strong>            &quot;fieldApiName&quot;:&quot;customerLevel&quot;, // 字段ApiName
</strong><strong>            &quot;fieldName&quot;:&quot;客户级别&quot;,          // 字段名称
</strong><strong>            &quot;fieldType&quot;:&quot;SELECT_SINGLE&quot;,    // 字段类型
</strong><strong>            &quot;valueType&quot;:&quot;SELECT_SINGLE&quot;,    // 字段实际类型
</strong><strong>            &quot;optionList&quot;:[                  // 如果字段是选项字段，将返回选项值 
</strong>                {
<strong>                    &quot;optionKey&quot;:&quot;O0000000&quot;,
</strong><strong>                    &quot;optionValue&quot;:&quot;重要客户&quot;
</strong>                },
                {
<strong>                    &quot;optionKey&quot;:&quot;O0000001&quot;,
</strong><strong>                    &quot;optionValue&quot;:&quot;一般客户&quot;
</strong>                },
                {
<strong>                    &quot;optionKey&quot;:&quot;O0000002&quot;,
</strong><strong>                    &quot;optionValue&quot;:&quot;普通客户&quot;
</strong>                }
            ]
        },
        {
<strong>            &quot;fieldApiName&quot;:&quot;addressField&quot;,
</strong><strong>            &quot;fieldName&quot;:&quot;详细地址&quot;,
</strong><strong>            &quot;fieldType&quot;:&quot;TEXT_MULTI&quot;,
</strong><strong>            &quot;valueType&quot;:&quot;TEXT_MULTI&quot;
</strong>        },
        {
<strong>            &quot;fieldApiName&quot;:&quot;emailField&quot;,
</strong><strong>            &quot;fieldName&quot;:&quot;邮箱&quot;,
</strong><strong>            &quot;fieldType&quot;:&quot;EMAIL&quot;,
</strong><strong>            &quot;valueType&quot;:&quot;EMAIL&quot;
</strong>        }
    ],
<strong>    &quot;msg&quot;:&quot;success&quot;
</strong>}
</code></pre><h2 id="获取应用公海池列表" tabindex="-1">获取应用公海池列表 <a class="header-anchor" href="#获取应用公海池列表" aria-label="Permalink to &quot;获取应用公海池列表&quot;">​</a></h2><p>请求接口：<code>/v1/open/object/{objectApiName}/pools</code></p><p>请求方法：<code>POST</code></p><p>请求路径参数：</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>objectApiName  应用的ApiName，比如：customerObject</span></span></code></pre></div><p>响应数据：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;poolId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;61a450d736329c5e3b5cfca0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 公海池ID</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;poolName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;公海A&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    // 公海池名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;poolId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;626643543ff9146055525c4c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;poolName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;公海B&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="获取应用布局列表" tabindex="-1">获取应用布局列表 <a class="header-anchor" href="#获取应用布局列表" aria-label="Permalink to &quot;获取应用布局列表&quot;">​</a></h2><p>请求接口：<code>/v1/open/object/{objectApiName}/layouts?layoutType=CREATE_LAYOUT</code></p><p>请求方法：<code>POST</code></p><p>请求路径参数：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">objectApiName  应用的ApiName，比如：customerObject</span></span></code></pre></div><p>请求查询参数：</p><p>系统约定，新建数据时必须传布局ID，这时候可以传 layoutType = CREATE_LAYOUT 来获取该应用下所有新建布局 ( 你可以在管理后台为同一个应用配置不同的布局，不同布局上新建的字段可以不一致，必填字段也可以不同，比如你所在单位有销售和市场两个团队，这两个团队创建客户时需要填写的字段不一样，那么你就可以配置两个布局来满足这种业务场景 )</p><p>大多数使用接口的场景，都是为了新建数据来查询布局的，因此 layoutType 传 CREATE_LAYOUT 即可</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layoutType 布局类型，其取值有：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CREATE_LAYOUT         新建页布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DETAIL_LAYOUT         详情页布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LIST_LAYOUT           列表页布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CREATE_DETAIL_LAYOUT  新建,详情页布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TABLE_HEADER_LAYOUT   Web端表头布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ALL                   不返回布局详情</span></span></code></pre></div><p>响应数据：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;62451bdaa11bb70f823b6b70&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 布局ID</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Web端列表页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 布局名称</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TABLE_HEADER_LAYOUT&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 布局类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PL000021&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;移动端列表页&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LIST_LAYOUT&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;60e552d954eb75428fca982c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;默认布局&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;layoutType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CREATE_DETAIL_LAYOUT&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="获取应用布局字段列表" tabindex="-1">获取应用布局字段列表 <a class="header-anchor" href="#获取应用布局字段列表" aria-label="Permalink to &quot;获取应用布局字段列表&quot;">​</a></h2><p>请求接口：<code>/v1/open/object/layout/field/{layoutId}</code></p><p>请求方法：<code>POST</code></p><p>请求路径参数：</p><div class="language-JSON vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">layoutId  布局ID，比如：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60e552</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">954</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">75428</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fca</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">982</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">c</span></span></code></pre></div><p>响应数据：接口返回的数据与接口2一致，字段说明请移步到接口2，下面仅展示数据示例</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mainField&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户名称&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TEXT_SINGLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;valueType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TEXT_SINGLE&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;customerSourceField&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;客户来源&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SELECT_SINGLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;valueType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SELECT_SINGLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;optionList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;optionKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;O0000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;optionValue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SEO&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;optionKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;O0000001&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                    &quot;optionValue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;自媒体&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldApiName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ownerField&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;归属人&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;fieldType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;USER&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;valueType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;USER&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,46),l=[t];function h(e,k,E,o,d,u){return a(),i("div",null,l)}const c=s(p,[["render",h]]);export{g as __pageData,c as default};
