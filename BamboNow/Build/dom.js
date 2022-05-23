"use strict";
// module "dom"
Object.defineProperty(exports, "__esModule", { value: true });
// To do & worknotes
// null
// Last thought
// static CSS, dynamic HTML via mainly templates
const main_1 = require("./main");
main_1.instanceTable[1];
const newDiv = document.createElement("div");
const siteWrapper = document.getElementById('siteWrapper');
const siteWrapperIn = siteWrapper.innerHTML;
let debugging;
debugging =
    {
        uniqueIds: [],
        idCheck(id) {
            let validator = this.validationId(id);
            if ((validator === true) && (this.uniqueIds.length >= 1)) {
                console.log(`Error: element with id="${id}" already exists.`);
                id = id + this.uniqueIds.length;
                return id;
            }
            else {
                return this.uniqueIds[this.uniqueIds.length] = id;
            }
        },
        validationId(id) {
            let validator;
            let y;
            if (this.uniqueIds.length <= 1) {
                return validator = false;
            }
            else {
                for (let i = 0; i < this.uniqueIds.length; i++) {
                    y = this.uniqueIds[i];
                    if (id === y) {
                        return validator = true;
                    }
                    else {
                        return validator = false;
                    }
                }
            }
            ;
        },
        locationDebug(location) {
            let typeGuard;
            let b;
            let x = document.getElementById("siteWrapper");
            if (typeof x === null || typeof x === undefined) {
                let y = document.createElement('siteWrapper');
                y.id = "siteWrapper";
                return document.body.append(y);
            }
            else {
                return;
            }
        },
        debugLog(content) {
            return console.log(content);
        },
    };
let debuggingForm;
debuggingForm =
    {
        formDebug() {
        },
        actionDebug(x, link, location) {
            if (location.tagName === "FORM") {
            }
            else {
                if (link === '' && link.length < 8) {
                    document.title = "error404";
                    link = 'pagenotfound';
                    x.setAttribute("target", "_blank");
                }
                else {
                }
            }
            return link;
        },
        methodDebug() {
        },
        targetDebug(target) {
            return target;
        },
        typeDebug() {
        },
    };
class ElementHTML {
    constructor(tagName, location) {
        this.tagName = tagName;
        this.location = location;
        this.x = document.createElement(this.tagName);
        if (location != location) {
            console.log(`Location: ${location} is not valid. Set to comment with location of document body.`);
            let debugComment = String(this.x);
            document.body.innerHTML = `/* ${this.x} */`;
        }
        else {
            location.append(this.x);
        }
    }
    appendElement() {
        return this.location.append(this.x);
    }
}
class BodyElementHTML extends ElementHTML {
    constructor(tagName, location, id, classCss) {
        super(tagName, location);
        this.tagName = tagName;
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", this.classCss);
    }
    appendElement() {
        if (this.location === (null) || this.location === (undefined) || this.location === (null)) {
            return console.log(`Error: variable location is ${String(typeof location)}.`);
        }
        else {
            return this.location.append(this.x);
        }
    }
}
class ButtonHTML extends BodyElementHTML {
    constructor(location, id, classCss) {
        let tagName = "button";
        super(tagName, location, id, classCss);
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", this.classCss);
        this.x.setAttribute("type", "button");
        this.x.setAttribute("name", this.id);
    }
    appendElement() {
        super.appendElement();
    }
}
class FormButtonHTML extends ButtonHTML {
    constructor(location, id, classCss, buttonType, link, target) {
        super(location, id, classCss);
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.buttonType = buttonType;
        this.link = link;
        this.target = target;
        let form = this.id;
        let action = '';
        let y = document.createElement("form");
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", this.classCss);
        this.x.setAttribute("type", this.buttonType);
        y.setAttribute("action", this.link);
        this.x.setAttribute("name", this.id);
        switch (this.buttonType) {
            case "submit":
                this.x.setAttribute("type", "submit");
                this.x.setAttribute("action", action);
                this.x.setAttribute("formtarget", debuggingForm.targetDebug(this.target));
                this.x.setAttribute("form", this.id);
                break;
            case "reset":
                break;
            default:
                break;
        }
    }
}
class BlockHTML extends BodyElementHTML {
    constructor(location, id, classCss) {
        let tagName = "div";
        super(tagName, location, id, classCss);
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", this.classCss);
    }
}
class SemanticHTML extends BodyElementHTML {
    constructor(tagName, location, id, classCss) {
        super(tagName, location, id, classCss);
        this.tagName = tagName;
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        tagName = 'article' || 'aside' || 'details' || 'figcaption' || 'figure' || 'footer' || 'header' || 'main' || 'mark' || 'nav' || 'section' || 'summary' || 'time';
    }
}
class ParagraphHTML extends BodyElementHTML {
    constructor(location, id, classCss, text) {
        let tagName = 'p';
        super(tagName, location, id, classCss);
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.text = text;
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", this.classCss);
        this.x.setAttribute("name", this.id);
    }
    fillParagraph() {
        let textNode = document.createTextNode(this.text);
        this.x.appendChild(textNode);
    }
}
class HyperlinkHTML extends BodyElementHTML {
    constructor(location, id, classCss, link, rel, target) {
        let tagName = 'a';
        super(tagName, location, id, classCss);
        this.location = location;
        this.id = id;
        this.classCss = classCss;
        this.link = link;
        this.rel = rel;
        this.target = target;
        debugging.locationDebug(this.location);
        this.x.id = debugging.idCheck(this.id);
        this.x.setAttribute("class", this.classCss);
        this.x.setAttribute("name", this.id);
        this.x.setAttribute("href", 'debuggingForm.actionDebug( this.link )');
        this.x.setAttribute("rel", this.rel);
        this.x.setAttribute("target", debuggingForm.targetDebug(this.target));
    }
}
class FAIconsHTML extends BodyElementHTML {
    constructor(location, classCss) {
        let tagName = 'i';
        let id = '';
        super(tagName, location, id, classCss);
        this.location = location;
        this.classCss = classCss;
        this.x.id = debugging.idCheck(this.id);
        debugging.locationDebug(location);
        this.x.setAttribute("class", `fa fa-${this.classCss}`);
    }
}
/*class metaHTML extends ElementHTML
{
  constructor( public tagName: string, public value?: string )
  {
    let location: HTMLElement = document.head;
    let head: HTMLHeadElement = location;
    super( tagName, location )
    
    head.querySelector( "head[ charset = 'utf-8' ]" );
  }

  metaBuilder( )
  {
    let head: HTMLHeadElement = document.head;
    let x: HTMLMetaElement | null = head.querySelector("head[ name =  'description' ]");
    if ( x != null )
    {
      x!.setAttribute( "content", this.description );
    }
    else
    {
      head.appendChild(  )
    }
    HTMLMetaElement
  }
}
*/
let ticketing;
ticketing;
{
    let mainHeader = new SemanticHTML("header", siteWrapper, "mainHeader", "block noMargin noPadding relative floatLeft contentBox fullWidth darkTheme mainHeader");
    let leftAside = new SemanticHTML("aside", siteWrapper, "leftAside", "grid noMargin noPadding relative floatLeft contentBox darkTheme leftAside");
    let leftAsideButtonHome = new ButtonHTML(document.getElementById("leftAside"), "asideButtonHome", "block noMargin noPadding relative floatLeft contentBox asideButton darkTheme");
    let asideHomeParagraph = new ParagraphHTML(document.getElementById("asideButtonHome"), "asideHomeParagraph", "whiteFont noPadding noMargin asideButtonParagraph", " Home");
    let faiHome = new FAIconsHTML(document.getElementById("asideHomeParagraph"), "home");
    asideHomeParagraph.fillParagraph();
    let mainContent = new SemanticHTML("content", siteWrapper, "mainContent", "grid noMargin noPadding relative floatLeft contentBox midTheme mainContent");
    let contentNav = new SemanticHTML("nav", document.getElementById('mainContent'), "topContentNav", "block noMargin noPadding relative floatLeft contentBox darkTheme contentNav");
    let contnetNav2 = new SemanticHTML("nav", document.getElementById('mainContent'), "midContentNav", "grid noMargin noPadding relative floatLeft contentBox darkTheme contentNav");
    let sectionContent = new SemanticHTML("content", document.getElementById('mainContent'), "sectionContent", "grid noMargin noPadding relative floatLeft contentBox singleSection");
    let rightAside = new SemanticHTML("aside", siteWrapper, "rightAside", "hidden noMargin noPadding relative floatLeft contentBox midTheme rightAside");
}
/* class templateHandler
{
constructor( public location: HTMLElement, public id: string, public name: string )
{
  debugging.idCheck( this.id );
  debugging.siteWrapperDebug( location );
}
append()
{

}*/
// archive
/* export class StylingCss
{
  innerStylesheet = document.styleSheets[0];
  outerStylesheet = document.styleSheets[1];
  stylesheets: CSSStyleSheet[] = [ this.innerStylesheet, this.outerStylesheet ];

  constructor( public selector: string, public property: string, public value: string)
  {
  }

  innerCssInsert()
  {
    return this.innerStylesheet.insertRule(`${ this.selector }
      {
        ${ this.property }: ${ this.value };
      }`, this.innerStylesheet.cssRules.length );
  }

  outerCssInsert()
  {
    return this.outerStylesheet.insertRule(`${ this.selector }
      {
        ${ this.property }: ${ this.value };
      }`, this.innerStylesheet.cssRules.length );
  }

  styleSet()
  {
    let currentStyleSheet: CSSStyleSheet = this.stylesheets[0];
    let chainer: boolean = false;

    for ( let i: number = 0 ; i < document.styleSheets.length; i++ )
    {
      let currentStyleSheet: CSSStyleSheet = this.stylesheets[i];
      let rulesLength: number = currentStyleSheet.cssRules.length;
      currentStyleSheet = document.styleSheets[i];

      for ( let x: number = 0; x < rulesLength; x++ )
        {
          let rule: CSSRule = currentStyleSheet.cssRules[x];
          let ruleStyle: CSSStyleRule = rule as CSSStyleRule;

          if ( ruleStyle.selectorText === this.selector )
          {
            chainer = true;
            return ruleStyle.style.setProperty( this.property, this.value );
          }

          else if ( ( x === rulesLength - 1 ) && ( chainer === false ) )
          {
            chainer = true;
            this.innerCssInsert();
          }
        }
      }
  }
} */
