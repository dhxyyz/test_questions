function TrueAnswer() {
    this.number = 0;
}

var answer =
        [
        {name:'Completion_01', sign:false, answer:['统一建模语言'], fraction:2},
        {name:'Completion_02', sign:true, answer:['封装','继承','多态'], fraction:2},

        {name:'choose_01', sign:false, answer:['B'], fraction:2},
        {name:'choose_02', sign:false, answer:['C'], fraction:2},

        {name:'more_choose_01', sign:false, answer:['A','B','D'], fraction:5},
        {name:'more_choose_02', sign:false, answer:['A','B','C'], fraction:5},

        {name:'judge_01', sign:false, answer:['N'], fraction:2},
        {name:'judge_02', sign:false, answer:['Y'], fraction:2},
        ];

TrueAnswer.prototype.socore = function() {
    var formValueGetter = new FormValueGetter();
    formValueGetter.getValue();
    console.log(formValueGetter.solution, 'huoqu ');

    var result = 0;
    for (var i = 0; i < answer.length; i++) {
        for (var key in formValueGetter.solution) {
            if (answer[i].name === key) {
                if (answer[i].sign) {
                    console.log(formValueGetter.solution[key], answer[i].answer, '000000');
                    result += signTrue(formValueGetter.solution[key], answer[i].answer) * answer[i].fraction;
                    console.log(result, '55555555555');
                } else {
                    result += signFalse(formValueGetter.solution[key], answer[i].answer) * answer[i].fraction;
                }
            }
        }
    }
    this.number = result;

    function signTrue(array_a, array_b) {
        var result = 0;
        for (var i = 0; i < array_a.length; i++) {
            for (var x = 0; x < array_b.length; x++) {
                if (array_a[i] === array_b[x]) {
                    result += 1;
                }
            }
        }
        return result;
    }

    function signFalse(array_a, array_b) {
        var result = 1;
        if (array_a.length === array_b.length) {
            for (var i = 0; i < array_a.length; i++) {
                if (array_a[i] !== array_b[i]) {
                    result *= 0;
                }
            }
        }
        return result;
    }
};
