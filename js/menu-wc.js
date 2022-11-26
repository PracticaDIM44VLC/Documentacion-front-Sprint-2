'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministratorModule.html" data-type="entity-link" >AdministratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdministratorModule-8347c0cb8c00eccacfbc36febb28080d8643d540fe8487661cd244c20eb6b6d14c28695ebf0bf74e5a1ce325e364204d8a5628beed4924674138945a8ad474e7"' : 'data-target="#xs-components-links-module-AdministratorModule-8347c0cb8c00eccacfbc36febb28080d8643d540fe8487661cd244c20eb6b6d14c28695ebf0bf74e5a1ce325e364204d8a5628beed4924674138945a8ad474e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministratorModule-8347c0cb8c00eccacfbc36febb28080d8643d540fe8487661cd244c20eb6b6d14c28695ebf0bf74e5a1ce325e364204d8a5628beed4924674138945a8ad474e7"' :
                                            'id="xs-components-links-module-AdministratorModule-8347c0cb8c00eccacfbc36febb28080d8643d540fe8487661cd244c20eb6b6d14c28695ebf0bf74e5a1ce325e364204d8a5628beed4924674138945a8ad474e7"' }>
                                            <li class="link">
                                                <a href="components/AdminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminShellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormAdminDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAdminDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormAdminUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAdminUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormDeviceConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormDeviceConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateAdminUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateAdminUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemAdminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemAdminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemAdminDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemAdminDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemAdminDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemAdminDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemAdminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemAdminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministratorRoutingModule.html" data-type="entity-link" >AdministratorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-04622bd57402e28256183038f82fe877c69e85355a08c3e3026a86d24f6caa2f621e56fb5dc55ebfe70c545fc6334657e2ed6ab9e47c552907031e35cca6964f"' : 'data-target="#xs-components-links-module-AppModule-04622bd57402e28256183038f82fe877c69e85355a08c3e3026a86d24f6caa2f621e56fb5dc55ebfe70c545fc6334657e2ed6ab9e47c552907031e35cca6964f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-04622bd57402e28256183038f82fe877c69e85355a08c3e3026a86d24f6caa2f621e56fb5dc55ebfe70c545fc6334657e2ed6ab9e47c552907031e35cca6964f"' :
                                            'id="xs-components-links-module-AppModule-04622bd57402e28256183038f82fe877c69e85355a08c3e3026a86d24f6caa2f621e56fb5dc55ebfe70c545fc6334657e2ed6ab9e47c552907031e35cca6964f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' : 'data-target="#xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' :
                                            'id="xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-ff1650d46f588e6343250d82d4e9af88d2a68ea3b279b0a42f3144980c9cc85d4cec8ec040c161a3adc9312e30f6257c5832fb5be83f32c1bb27cfca468d6bed"' : 'data-target="#xs-components-links-module-HomeModule-ff1650d46f588e6343250d82d4e9af88d2a68ea3b279b0a42f3144980c9cc85d4cec8ec040c161a3adc9312e30f6257c5832fb5be83f32c1bb27cfca468d6bed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-ff1650d46f588e6343250d82d4e9af88d2a68ea3b279b0a42f3144980c9cc85d4cec8ec040c161a3adc9312e30f6257c5832fb5be83f32c1bb27cfca468d6bed"' :
                                            'id="xs-components-links-module-HomeModule-ff1650d46f588e6343250d82d4e9af88d2a68ea3b279b0a42f3144980c9cc85d4cec8ec040c161a3adc9312e30f6257c5832fb5be83f32c1bb27cfca468d6bed"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-70312f5ee57d1f46ec39cb5428aa4fd31a6f1407bcb49869ef8470cd83d9215422d5589dafefb43755c71893daf732f98e4ee4bf4dd18f646b126183538f8a42"' : 'data-target="#xs-components-links-module-LayoutModule-70312f5ee57d1f46ec39cb5428aa4fd31a6f1407bcb49869ef8470cd83d9215422d5589dafefb43755c71893daf732f98e4ee4bf4dd18f646b126183538f8a42"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-70312f5ee57d1f46ec39cb5428aa4fd31a6f1407bcb49869ef8470cd83d9215422d5589dafefb43755c71893daf732f98e4ee4bf4dd18f646b126183538f8a42"' :
                                            'id="xs-components-links-module-LayoutModule-70312f5ee57d1f46ec39cb5428aa4fd31a6f1407bcb49869ef8470cd83d9215422d5589dafefb43755c71893daf732f98e4ee4bf4dd18f646b126183538f8a42"' }>
                                            <li class="link">
                                                <a href="components/ViewerLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewerLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutRoutingModule.html" data-type="entity-link" >LayoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrincipalModule.html" data-type="entity-link" >PrincipalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrincipalModule-499331e4862b7fb576c75701b3ae1252c32616e3927d633c6758cef03d15690b99b1e064a7ae146e5dfc0cb71fb61e419ab6fe183c5dbb2645eb81450aa58927"' : 'data-target="#xs-components-links-module-PrincipalModule-499331e4862b7fb576c75701b3ae1252c32616e3927d633c6758cef03d15690b99b1e064a7ae146e5dfc0cb71fb61e419ab6fe183c5dbb2645eb81450aa58927"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrincipalModule-499331e4862b7fb576c75701b3ae1252c32616e3927d633c6758cef03d15690b99b1e064a7ae146e5dfc0cb71fb61e419ab6fe183c5dbb2645eb81450aa58927"' :
                                            'id="xs-components-links-module-PrincipalModule-499331e4862b7fb576c75701b3ae1252c32616e3927d633c6758cef03d15690b99b1e064a7ae146e5dfc0cb71fb61e419ab6fe183c5dbb2645eb81450aa58927"' }>
                                            <li class="link">
                                                <a href="components/HeaderPrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderPrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainPrincipalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShellPrincipalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShellPrincipalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrincipalRoutingModule.html" data-type="entity-link" >PrincipalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-4538a095eae7696fc9860d095b8abc488c68660eae240f222b6fd4873067a295aa838d562e99d93c26cde3e66a1eb2e7045e5c68bd2f572ad66bc3b6ee10a544"' : 'data-target="#xs-components-links-module-SearchModule-4538a095eae7696fc9860d095b8abc488c68660eae240f222b6fd4873067a295aa838d562e99d93c26cde3e66a1eb2e7045e5c68bd2f572ad66bc3b6ee10a544"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-4538a095eae7696fc9860d095b8abc488c68660eae240f222b6fd4873067a295aa838d562e99d93c26cde3e66a1eb2e7045e5c68bd2f572ad66bc3b6ee10a544"' :
                                            'id="xs-components-links-module-SearchModule-4538a095eae7696fc9860d095b8abc488c68660eae240f222b6fd4873067a295aa838d562e99d93c26cde3e66a1eb2e7045e5c68bd2f572ad66bc3b6ee10a544"' }>
                                            <li class="link">
                                                <a href="components/BranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeviceConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link" >SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SuperadministratorModule.html" data-type="entity-link" >SuperadministratorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SuperadministratorModule-6b4ade496659d8f6ad18fc5ff88338b031b8043acfe5da2d72b1196a13a6d0bd46058a5dfad29a0766f05ee95b8c3eb4ed965fd86b73c09167eb3dca6b778bc3"' : 'data-target="#xs-components-links-module-SuperadministratorModule-6b4ade496659d8f6ad18fc5ff88338b031b8043acfe5da2d72b1196a13a6d0bd46058a5dfad29a0766f05ee95b8c3eb4ed965fd86b73c09167eb3dca6b778bc3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SuperadministratorModule-6b4ade496659d8f6ad18fc5ff88338b031b8043acfe5da2d72b1196a13a6d0bd46058a5dfad29a0766f05ee95b8c3eb4ed965fd86b73c09167eb3dca6b778bc3"' :
                                            'id="xs-components-links-module-SuperadministratorModule-6b4ade496659d8f6ad18fc5ff88338b031b8043acfe5da2d72b1196a13a6d0bd46058a5dfad29a0766f05ee95b8c3eb4ed965fd86b73c09167eb3dca6b778bc3"' }>
                                            <li class="link">
                                                <a href="components/ConfigDeleteBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteDutyTitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteDutyTitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigDeleteTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDeleteTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigNewTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigNewTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateDutyTitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateDutyTitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigUpdateTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigUpdateTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterSuperadminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterSuperadminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormSuperadminTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormSuperadminTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperadminTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperadminTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperamdinBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperamdinBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperamdinDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperamdinDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormUpdateSuperamdinDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormUpdateSuperamdinDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderSuperadminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderSuperadminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemSuperadminTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemSuperadminTypeOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainSuperadminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainSuperadminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminBranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminBranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminCisServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminCisServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminConfigComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminDeviceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminDeviceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminDeviceTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminDeviceTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminDivisionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminDivisionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminDutytitleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminDutytitleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminOperationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminShellComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminShellComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminTypeLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminTypeLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuperadminTypeOperationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuperadminTypeOperationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SuperadministratorRoutingModule.html" data-type="entity-link" >SuperadministratorRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BranchImpl.html" data-type="entity-link" >BranchImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/CisServiceImpl.html" data-type="entity-link" >CisServiceImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigurationDeviceImpl.html" data-type="entity-link" >ConfigurationDeviceImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeviceImpl.html" data-type="entity-link" >DeviceImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeviceTypeImpl.html" data-type="entity-link" >DeviceTypeImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DivisionImpl.html" data-type="entity-link" >DivisionImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/DutyTitleImpl.html" data-type="entity-link" >DutyTitleImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationImpl.html" data-type="entity-link" >LocationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginImpl.html" data-type="entity-link" >LoginImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/MilitaryImpl.html" data-type="entity-link" >MilitaryImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/OperationImpl.html" data-type="entity-link" >OperationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/OperationPackImpl.html" data-type="entity-link" >OperationPackImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/PackOperationImpl.html" data-type="entity-link" >PackOperationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/PackOriginImpl.html" data-type="entity-link" >PackOriginImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeLocationImpl.html" data-type="entity-link" >TypeLocationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeOperationImpl.html" data-type="entity-link" >TypeOperationImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginImpl.html" data-type="entity-link" >UserLoginImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkStationImpl.html" data-type="entity-link" >WorkStationImpl</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataPackService.html" data-type="entity-link" >DataPackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Branch.html" data-type="entity-link" >Branch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CisService.html" data-type="entity-link" >CisService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationDevice.html" data-type="entity-link" >ConfigurationDevice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeviceType.html" data-type="entity-link" >DeviceType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Division.html" data-type="entity-link" >Division</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DutyTitle.html" data-type="entity-link" >DutyTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Military.html" data-type="entity-link" >Military</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Operation.html" data-type="entity-link" >Operation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OperationPack.html" data-type="entity-link" >OperationPack</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackOperation.html" data-type="entity-link" >PackOperation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackOrigin.html" data-type="entity-link" >PackOrigin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeLocation.html" data-type="entity-link" >TypeLocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeOperation.html" data-type="entity-link" >TypeOperation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WorkStation.html" data-type="entity-link" >WorkStation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});