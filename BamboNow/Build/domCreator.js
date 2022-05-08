"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicContent = void 0;
var dynamicContent;
(function (dynamicContent) {
    const newDiv = document.createElement("div");
    const siteWrapper = document.getElementById('siteWrapper');
    const siteWrapperIn = siteWrapper.innerHTML;
    const navbar = document.getElementById('navbar');
    //const navbarIn: HTMLElement | null = navbar!.innerHTML();
    const leftMenu = document.getElementById('leftMenu');
    const uniqueIds = [];
    function debugLog(content) {
        console.log(content);
    }
    function idCheck(id) {
        let z = '';
        let isInDocument = document.getElementById(id);
        let exists = uniqueIds.find(function (value) { value === id; });
        exists;
        if ((exists != typeof (z)) && (isInDocument === null)) {
            if (uniqueIds.length <= 0) {
                uniqueIds[0] = id;
            }
            else {
                uniqueIds[uniqueIds.length] = id;
            }
            return id;
        }
        else {
            return id = `idCheck failure: ${id} exists.`;
        }
    }
    class StylingCss {
        constructor(selector, property, value) {
            this.selector = selector;
            this.property = property;
            this.value = value;
        }
        innerCssInsert() {
            return document.styleSheets[0].insertRule(`${this.selector} 
        { ${this.property}: ${this.value}; 
        }`, document.styleSheets[0].cssRules.length);
        }
        styleSheetIterator() {
            const innerStylesheet = document.styleSheets[0];
            const outerStylesheet = document.styleSheets[1];
            const stylesheets = [innerStylesheet, outerStylesheet];
            let i = 0;
            let x = 0;
            let currentStyleSheet = stylesheets[i];
            let rule = currentStyleSheet.cssRules[x];
            let ruleStyle = rule;
            let rulesLength = currentStyleSheet.cssRules.length;
            for (; i < document.styleSheets.length; i++) {
                currentStyleSheet = document.styleSheets[i];
                rule = currentStyleSheet.cssRules[i];
                console.log(`i: ${i}; rulesLength: ${rulesLength};`);
                console.log(currentStyleSheet);
                if (rulesLength > 0) {
                    for (let x = 0; x < rulesLength; x++) {
                        console.log(rule);
                    }
                }
                else {
                    console.log(`rule not found`);
                    /*document.styleSheets[0].insertRule(`${ this.selector }
                    { ${ this.property }: ${ this.value };
                    }`, document.styleSheets[0].cssRules.length );*/
                }
            }
            return console.log(`Current stylesheet is: ${currentStyleSheet};`);
        }
    }
    class ElementHTML {
        constructor(id, classCss) {
            this.id = id;
            this.classCss = classCss;
        }
    }
    class ButtonHTML extends ElementHTML {
        constructor(id, classCss, btnType, name, link, formtarget) {
            super(id, classCss);
            this.id = id;
            this.classCss = classCss;
            this.btnType = btnType;
            this.name = name;
            this.link = link;
            this.formtarget = formtarget;
        }
        buttonCreation() {
            let x = document.createElement("button");
            x.id = idCheck(this.id);
            //let button = document.getElementById( id );
            x.setAttribute("class", this.classCss);
            x.setAttribute("type", this.btnType);
            x.setAttribute("name", this.name);
            if (this.link.length < 4 || this.link === undefined || null) {
                x.setAttribute("formaction", "nolink");
                this.formtarget = "_blank";
                x.setAttribute("formtarget", this.formtarget);
            }
            else {
                x.setAttribute("formAction", this.link);
            }
            siteWrapper.append(x);
        }
    }
    class NamedButtonHTML extends ButtonHTML {
        constructor(id, classCss, btnType, name, link, formtarget) {
            super(id, classCss, btnType, name, link, formtarget);
            this.id = id;
            this.classCss = classCss;
            this.btnType = btnType;
            this.name = name;
            this.link = link;
            this.formtarget = formtarget;
        }
        buttonCreation() {
            let x = document.createElement("button");
            x.id = idCheck(this.id);
            //let button = document.getElementById( id );
            x.setAttribute("class", this.classCss);
            x.setAttribute("type", this.btnType);
            x.setAttribute("name", this.name);
            if (this.link.length < 4 || this.link === undefined || null) {
                x.setAttribute("formaction", "nolink");
                this.formtarget = "_blank";
                x.setAttribute("formtarget", this.formtarget);
            }
            else {
                x.setAttribute("formAction", this.link);
            }
            siteWrapper.append(x);
            let y = document.createElement("p");
            x.append(y);
            y.append(document.createTextNode(this.name));
        }
    }
    class BlockHTML {
        constructor(id, classCss) {
            this.id = id;
            this.classCss = classCss;
        }
        blockCreation() {
            let x = document.createElement("div");
            x.id = idCheck(this.id);
            x.setAttribute("class", this.classCss);
        }
    }
    // ------------------------------------------------------------------------------------
    let test = new ButtonHTML("test", "test", "button", "test", "test");
    test.buttonCreation();
    let test2 = new NamedButtonHTML("test2", "test", "button", "lol", "");
    test2.buttonCreation();
    let testStyling = new StylingCss("test", "width", "200px");
    testStyling.styleSheetIterator();
    //console.log ( innerStylesheet );
    //console.log ( outerStylesheet );
})(dynamicContent = exports.dynamicContent || (exports.dynamicContent = {}));
/*rulesIterator()
{
  this.styleSheetIterator();
  for ( let i: number = 0; i < currentStyleSheet.cssRules.length; i++ )
  {
    let rules: CSSRule = currentStyleSheet.cssRules[i];
    let rulesStyle: CSSStyleRule = rules as CSSStyleRule;
    console.log( `wtf` );
    if ( rulesStyle.selectorText === this.selector )
    {
      console.log( `rulesStyle.cssText =
      ${ this.selector }
      {
        ${ this.property }: ${ this.value };
      };`);
      return rulesStyle.cssText =
      `${ this.selector }
      {
        ${ this.property }: ${ this.value };
      }`;
    }
    else
    {
      console.log( `innerCssInsert: ${this.innerCssInsert()}` );
      return this.innerCssInsert();
    }
  }
    } */ 
