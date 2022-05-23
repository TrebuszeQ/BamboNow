"use strict";
// module "main"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webpage = exports.instanceController = exports.instanceTable = void 0;
let instanceTable;
exports.instanceTable = instanceTable;
function instanceController(x) {
    let instance;
    return;
}
exports.instanceController = instanceController;
function emptyInstance() {
    let emptyInstance = document.getElementById("emptyInstance");
    document.write(String(emptyInstance));
    document.title = "emptyTemplate";
}
class Webpage {
    constructor(templateId, pageTitle, author, description, keywords) {
        this.templateId = templateId;
        this.pageTitle = pageTitle;
        this.author = author;
        this.description = description;
        this.keywords = keywords;
        let x = document.implementation.createHTMLDocument(this.pageTitle);
        x = instanceTable[instanceTable.length];
    }
    metaDebug() {
        let metaElement = document.createElement("meta");
        const head = document.getElementById('primaryHead');
        document.getElementsByTagName('head')[0].id = 'primaryHead';
        let validator = false;
        let author = this.author;
        let keywords = this.keywords;
        let description = this.description;
        function viewportDebug() {
            validator = false;
            let x = head.querySelector("name = 'viewport'");
            if (x != null) {
                x.setAttribute("conent", "width = device-width, initial-scale = 1");
                return validator = true;
            }
            else {
                head.append(metaElement);
                metaElement.setAttribute('name', 'viewport');
                metaElement.setAttribute('content', 'width = device-width, initial-scale = 1');
                return validator = true;
            }
        }
        function authorDebug() {
            if (author != null) {
            }
            else {
                author = '';
            }
            validator = false;
            let x = head.querySelector("name = 'author'");
            if (x != null) {
                x.setAttribute('content', `Hubert Dąbrowski, Hubert Dabrowski, ${author}`);
                return validator = true;
            }
            else {
                head.append(metaElement);
                metaElement.setAttribute('name', 'author');
                metaElement.setAttribute('content', `Hubert Dąbrowski, Hubert Dabrowski, ${author}`);
                return validator = true;
            }
        }
        function descriptionDebug() {
            if (description != null) {
            }
            else {
                description = '';
            }
            validator = false;
            let x = head.querySelector("description");
            if (x != null) {
                x.setAttribute("content", description);
                return validator = true;
            }
            else {
                head.append(metaElement);
                metaElement.setAttribute("name", "description");
                metaElement.setAttribute("content", description);
                return validator = true;
            }
        }
        function keywordsDebug() {
            if (keywords != null) {
            }
            else {
                keywords = '';
            }
            validator = false;
            let x = head.querySelector("keywords");
            if (x != null) {
                x.setAttribute("content", keywords);
                return validator = true;
            }
            else {
                head.append(metaElement);
                metaElement.setAttribute("name", "keywords");
                metaElement.setAttribute("content", keywords);
                return validator = true;
            }
        }
    }
}
exports.Webpage = Webpage;
