var app = null;

window.onload = function() {
    app = new Vue({
        el: "#array",
        data: {arr:[
            {'name':'Arun','id':1,'marks':75},
            {'name':'Dheeraj','id':2,'marks':25},
            {'name':'Akhil','id':3,'marks':20}
        ]},
        methods: {
            isPassed(marks){
                return marks>=35 ? 'passed':'failed'
            },
        },
    });
};