var TextPanel = function() {

}

TextPanel.prototype = new Panel();

TextPanel.prototype.getTitle = function() {
    return this.title;
}

TextPanel.prototype.getContent = function() {
    return this.content;
}
