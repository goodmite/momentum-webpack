/**
 * @class ImiEngage: class describing imi-engage web component
 * todo: put it into saperate file
 * */
export class ImiEngage extends HTMLElement {

    constructor() {

        super();
        this.sr = this.attachShadow({mode: 'open'});
        /*
        * tabsStr
        * Tabs list of 40 items, to place inside tab md-tabs
        * */
        const tabsStr = ["All templates", "Only Fb Template", ...Array(20)]
            .map((value, index, array) => {
                    return `
                        <md-tab slot="tab">
                          <md-icon name="recents_16"></md-icon>
                          <span>${value || ('Tab' + index)}</span>
                        </md-tab>
                        
                        <md-tab-panel slot="panel">
                          <span>Content for "Tab ${index}"</span>
                        </md-tab-panel>
               
`;
                }
            ).join('\n');
        console.log(tabsStr);
        // shadowRoot.host
        this.sr.innerHTML = `
<style>
md-menu-overlay::part(overlay-content){
        height: 360px !important;
        width: 360px !important;
    }
</style>
    <md-theme>
    <md-menu-overlay size="large" placement="top-start">
        <md-tooltip slot="menu-trigger" placement="right">
            <md-button
                    hasRemoveStyle
                    type="button"
                    class="mv-predefined-icon"
                    
            >
                <md-icon name="icon-response_16"/>
            </md-button>
            <!— Use your md-tabs component here —>
        </md-tooltip>
        <div style="max-width: 100%;">
            <md-tabs selected="1">
            
                
            ${tabsStr}
              
          </md-tabs>
        </div>
    </md-menu-overlay>
</md-theme>
`;
    }
}