var Panel = function() {
    this.title = null;
    this.content = null;
}

Panel.prototype.createElement = function() {
    var outerdiv = $("<div>", {class: "panel panel-default"});
    var titlediv = $("<div>", {class: "panel-heading"});
    var contentdiv = $("<div>", {class: "panel-body"});
    titlediv.html(this.getTitle());
    contentdiv.html(this.getContent());
    outerdiv.append(titlediv);
    outerdiv.append(contentdiv);
    return outerdiv;
}

Panel.prototype.setTitle = function(title) {
    this.title = title;
}

Panel.prototype.setContent = function(content) {
    this.content = content;
}

Panel.prototype.getTitle = function() {

}

Panel.prototype.getContent = function() {

}
