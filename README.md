# site_17_mmservices

TypeScript source code for the [Site 17 Multimedia Services ServiceNow application](https://github.com/USASOC-HQ/x_44813_mmservices).

Issues and backlog items are tracked in the [USASOC Multimedia Services GitHub Project](https://github.com/orgs/USASOC-HQ/projects/3).

## Pre-requisites and Initialization

### Visual Studio Code

[Visual Studio Code can be installed using this link](https://code.visualstudio.com/).
The file [.vscode/extension.json](./.vscode/extensions.json) contains extensions that are recommended.
You can view these recommendations and load them from the extensions icon in the activity bar.
Without certain extensions, such as "JavaScript and TypeScript Nightly", you may not be able to successfully execute a build task.

### NodeJS and NPM (Node Package Manager)

When installing [NodeJS from this link](https://nodejs.org/en/download/), the installer will include NPM.

After the first time you check out this repository, you'll need to initialize NPM locally for this repository using the command `npm install`.

## Using Transpiled Code

The transpiled files will contain a reasonable representation of the code that you copy and paste into respective script text boxes in the target ServiceNow instance.
Since there are some differences in concept of namespaces between ServiceNow and TypeScript, most of the time you will be copying and pasting the contents of a particular namespace,
rather than the entire contents of a transpiled file.

Classes in this module are created and initialized within self-executing function expressions similar to the following template:

```JavaScript
ClassName = (function () {
     var constructor = Class.create();
     var constantVar = "value";
     function privateFunc() { /* code */ }
     constructor.staticMethod() { /* code */ }
     constructor.prototype = {
        instanceMethod: function() { /* code */ },
        type: "ClassName"
     };
     return constructor;
})();
```

The transpiled code of script includes will contain references for the namespace, such as `x_44813_mmservices`, with the return value from `Class.Create()` being assigned to the namespace,
rather than to a variable like it is in ServiceNow itself. Therefore, you would copy code being assigned and paste that as the assignment value in ServiceNow.

In the following abbreviated example of the transpiled code for the `Site17MMServicesUtil` API, you would copy the function expression being assigned to `x_44813_mmservices.Site17MMServicesUtil` and paste that into ServiceNow
as the value being assigned to the `Site17MMServicesUtil` variable.

```JavaScript
"use strict";
/// <reference path="../../types/sn_typings_server_scoped/dist/index.d.ts" />
/// <reference path="../../types/x_g_inte_site_17/index.d.ts" />
/// <reference path="../../types/x_44813_mmservices/table/index.d.ts" />
var x_44813_mmservices;
(function (x_44813_mmservices) {
    // /show_schedule_page.do?sysparm_page_sys_id=gantt_chart&sysparm_timeline_task_id=d530bf907f0000015ce594fd929cf6a4
    x_44813_mmservices.Site17MMServicesUtil = (function () {
// ... code omitted ...
        var constructor = Class.create();
// ... code omitted ...
        function getDefaultMinLeadTimeDays() {
            var defaultMinLeadTime = parseInt('' + gs.getProperty(PROPERTY_NAME_default_min_leadTime_days, ''));
            return isNaN(defaultMinLeadTime) ? 3 : defaultMinLeadTime;
        }
// ... code omitted ...
        constructor.getDefaultMinLeadTimeDays = getDefaultMinLeadTimeDays;
// ... code omitted ...
        constructor.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
            getDefaultMinLeadTimeDays: function () {
                this.setAnswer(getDefaultMinLeadTimeDays());
            },
// ... code omitted ...
            type: "Site17MMServicesUtil"
        });
        return constructor;
    })();
})(x_44813_mmservices || (x_44813_mmservices = {}));
```

After you paste the code into ServiceNow script edit box, you can fix the indent by using the script formatting button. Then, it will look something like:

```JavaScript
var Site17MMServicesUtil = (function () {
// ... code omitted ...
    var constructor = Class.create();
// ... code omitted ...
    function getDefaultMinLeadTimeDays() {
        var defaultMinLeadTime = parseInt('' + gs.getProperty(PROPERTY_NAME_default_min_leadTime_days, ''));
        return isNaN(defaultMinLeadTime) ? 3 : defaultMinLeadTime;
    }
// ... code omitted ...
    constructor.getDefaultMinLeadTimeDays = getDefaultMinLeadTimeDays;
// ... code omitted ...
    constructor.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
        getDefaultMinLeadTimeDays: function () {
            this.setAnswer(getDefaultMinLeadTimeDays());
        },
// ... code omitted ...
        type: "Site17MMServicesUtil"
    });
    return constructor;
})();
```

## Type Definitions

### Type Definition Dependencies

This depends upon TypeScript definitions from the [sn_typings_server_scoped](https://github.com/erwinel/sn_typings_server_scoped/blob/master/README.md) repository.
This is included as a git submodule, with type definitions contained in the `types/sn_typings_server_scoped/dist` folder.
The original author of this project intended to replace this dependency with improved (and less complex) TypeScript definitions from the [sn-types-scoped-server](https://github.com/lerwine/sn-types-scoped-server/blob/master/README.md). However there was not enough time to finish the new set of type definitions and migrate this project before the it was handed off for deployment.

Since the associated ServiceNow application has a dependency upon the Site 17 ServiceNow application, this also depends upon type definitions from the [site_17_server_side repository](https://github.com/USASOC-HQ/site_17_server_side/tree/main/types/x_g_inte_site_17). Due to complications with the way type definitions are exported in the that repository, type definitions will need to be manually synchronized
with the contents of the `types/x_g_inte_site_17` folder. Relative path references are different between the two, which complicates possibilities of automating this.

### Generate Type Definitions

When build tasks are executed, type defintion files for Script Includes are generated in the `types/x_44813_mmservices/api` folder.
The `types/x_44813_mmservices/table` contains type definitions for tables defined in theSite 17 Multimedia Services application, in accordance with table definition patterns used in the
type definitions in `types/sn_typings_server_scoped/dist`.

