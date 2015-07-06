function FormValueGetter() {
    this.solution = {};
}
FormValueGetter.prototype.getValue = function() {
    var array = {};
    var form = document.querySelector('form');
    var temp = {};
    for (var i = 0; i < form.length; i++) {
        if (form[i].type === "text") {
            temp[form[i].name] = temp[form[i].name] || [];
            temp[form[i].name].push(form[i].value);
        }
        if (form[i].type === "radio" && form[i].checked) {
            temp[form[i].name] = temp[form[i].name] || [];
            temp[form[i].name].push(form[i].value);
        }
        if (form[i].type === "checkbox" && form[i].checked) {
            temp[form[i].name] = temp[form[i].name] || [];
            temp[form[i].name].push(form[i].value);
        }
    }
    this.solution = temp;
};
