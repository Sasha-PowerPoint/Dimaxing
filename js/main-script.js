var databased = {};

var databased2 = {
    "type": {
        "Труба": {
            "related": [1, 2, 3],
            "id": 1
        },
        "Куток": {
            "related": [2, 5, 6],
            "id": 2
        },
        "Круг": {
            "related": [1, 4, 5],
            "id": 3
        },
        "Лист": {
            "related": [3, 6],
            "id": 4
        },
        "Коліно": {
            "related": [1, 2, 3],
            "id": 5
        }
    },
    "material": {
        "Алюміній": {
            "related": [1, 3, 5],
            "id": 1
        },
        "Титан": {
            "related": [1, 2, 5],
            "id": 2
        },
        "Мідь": {
            "related": [1, 4, 5],
            "id": 3
        },
        "Молібден": {
            "related": [3],
            "id": 4
        },
        "Аурум": {
            "related": [2, 3],
            "id": 5
        },
        "Аурум": {
            "related": [2, 4],
            "id": 6
        }
    }
};
var tasks = [
    {
        "text": "Іван, блет. Сігани в Сільпо за вугілками",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id":1,
        "importance":3,
        "comment":"ggg"
    },
    {
        "text": "Прозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери Івана Прозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери ІванаПрозвон Сільпо. Взяти номери Івана",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id": 2,
        "importance":2,
        "comment":"ggg"
    },
    {
        "text": "Сучий пес, їбош по пластини",
        "employee": "Білібаба",
        "state": "done", // processing/done/decline
        "id": 3,
        "importance":2,
        "comment":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
    },
    {
        "text": "Іван, блет. Сігани в Сільпо за вугілками",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id":4,
        "importance":1,
        "comment":"ggg"
    },
    {
        "text": "Джозеф, блет. Кабанчиком в ЕнергоПром",
        "employee": "ДэЛбік",
        "state": "processing", // processing/done/decline
        "id": 5,
        "importance":3,
        "comment":"ggg"
    },
    {
        "text": "Іван, блет. Сігани в Сільпо за вугілками",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id":6,
        "importance":1,
        "comment":"ggg"
    },
    {
        "text": "Джозеф, блет. Кабанчиком в ЕнергоПром",
        "employee": "ДэЛбік",
        "state": "decline", // processing/done/decline
        "id": 7,
        "importance":2,
        "comment":"ggg"
    },
    {
        "text": "Іван, блет. Сігани в Сільпо за вугілками",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id":8,
        "importance":1,
        "comment":"ggg"
    },
    {
        "text": "Джозеф, блет. Кабанчиком в ЕнергоПром",
        "employee": "ДэЛбік",
        "state": "processing", // processing/done/decline
        "id": 9,
        "importance":3,
        "comment":"ggg"
    },
    {
        "text": "Іван, блет. Сігани в Сільпо за вугілками",
        "employee": "",
        "state": "unactive", // processing/done/decline
        "id":10,
        "importance":1,
        "comment":"ggg"
    },
    {
        "text": "Джозеф, блет. Кабанчиком в ЕнергоПром",
        "employee": "ДэЛбік",
        "state": "processing", // processing/done/decline
        "id": 11,
        "importance":2,
        "comment":"ggg"
    },
];


var filters_structured = {};

var filter_setting;
var emptier;

var targets = ["type", "material"];

$(".set_submit").click(function(){
    var task = {};
    task.text = $(".main-task-text").val();
    task.importance = $(".importance").val();
    SetTask(task);
});
$(".list-close-button").click(function(){
    $(".pool-icon").addClass("pool-icon-active");
    $(".task-list").removeClass("task-list-show");
    $(".list-close-button").addClass("list-button-unactive");
})
function PreServing(host){
    if(host == "admin"){
        $(".setter").css("display","flex");
        //$(".setter").addClass("setter-active");
        $(".pool-icon").css("display", "none");
    }else{

    }
};
function SetTask(task){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "setTasks.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("task=" + JSON.stringify(task));
    console.log("Отправлено -//-");
    console.log(task);
    console.log("-//-");
};
function GetTask(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "getTasks.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function() {
        console.log("+++++++++++++++++++++++");
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Получено -//-");
            console.log(JSON.parse(xhr.responseText));
            console.log(" -//-");
            if($.cookie("person") == "admin"){
                MakePool(JSON.stringify(tasks));
            }else{
                MakePoolAdmin(JSON.stringify(tasks));
            }

            GetTask();
        }
    };
};
function CommentaryAccept(id, text){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "changeTaskComm.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("changingcomm=" + text + "&taskid=" + id);
};
function SendTaskChange(id, toState){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "changeTaskState.php", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("changingstate=" + toState + "&taskid=" + id);
};
function AddToCart(id, text){
    var message = document.createElement("div");
    $(message).addClass("active-task");
    $(message).attr("type-id", id);
    var active_text = document.createElement("p");
    $(active_text).html(text);
    $(active_text).addClass("active-text");
    var active_button_submit = document.createElement("p");
    $(active_button_submit).html("Виконано");
    $(active_button_submit).addClass("task-submit");
    var active_button_decline = document.createElement("p");
    $(active_button_decline).html("Проблеми");
    $(active_button_decline).addClass("task-decline");
    var button_holder = document.createElement("div");
    $(button_holder).addClass("active-buttons-holder");
    $(button_holder).append(active_button_submit);
    $(button_holder).append(active_button_decline);
    $(message).append(active_text);
    $(message).append(button_holder);
    $("body").append(message);
    active_button_submit.addEventListener("click", function(){
        $(".pop-up-wrapper").addClass("pop-up-active");
        $(document).mouseup(function (e) {
            var container = $(".pop-up");
            if (container.has(e.target).length === 0){
                $(".pop-up-wrapper").removeClass("pop-up-active");
            }
        });
        $(".commentary-submit").click(function(){
            CommentaryAccept(id, $(".commentary-text").val());
            SendTaskChange(id, "done");
            $(".pop-up-wrapper").removeClass("pop-up-active");
            $(".active-task").remove();
            $(".pool-icon").addClass("pool-icon-active");
        });
    });
    active_button_decline.addEventListener("click", function(){
        $(".pop-up-wrapper").addClass("pop-up-active");
        $(document).mouseup(function (e) {
            var container = $(".pop-up");
            if (container.has(e.target).length === 0){
                $(".pop-up-wrapper").removeClass("pop-up-active");
            }
        });
        $(".commentary-submit").click(function(){
            CommentaryAccept(id, $(".commentary-text").val());
            SendTaskChange(id, "decline");
            $(".pop-up-wrapper").removeClass("pop-up-active");
            $(".active-task").remove();
            $(".pool-icon").addClass("pool-icon-active");
        });
    });
};

$(document).ready(function(){
    //alert($.cookie("person"));
    PreServing($.cookie("person"));
    MakePoolAdmin(JSON.stringify(tasks));
    GetTask();
});
$(".admin-arrow").click(function(){
   if($(".setter").hasClass("setter-active")) {
       $(".setter").removeClass("setter-active");
   }else{
       $(".setter").addClass("setter-active");
   }

});
$(".pool-icon").click(function () {
    $(".task-list").addClass("task-list-show");
    $(".pool-icon").removeClass("pool-icon-active");
    $(".list-close-button").removeClass("list-button-unactive");
});

$(".filter-inputs").children("input").keyup(function (e) {
    if (filter_setting != undefined) {
        clearTimeout(filter_setting);
        clearTimeout(emptier);
    }
    if ($(e.target).val().length != 0) {
        CompleteFilterJson(e.target);
        ProposeAdding($(e.target).parents().children("ul"), e.target);
    }
});

$(".filter-inputs").children("input").blur(function (e) {
    setTimeout(function () {
        $(e.target).parents(".filter-inputs").children("ul").empty();
    }, 200);
});

function MakePool(json_pool_to_str){
    var json_pool = JSON.parse(json_pool_to_str);
    $(".task-list").empty();
    for(var task in json_pool){
        var taskItem = document.createElement("li");
        taskItem.setAttribute("data-employee", json_pool[task].employee);
        var text = document.createElement("p");
        $(text).addClass("task-desc");
        $(text).html(json_pool[task].text);
        $(taskItem).append(text);
        var employee = document.createElement("p");
        $(employee).html(json_pool[task].employee);
        $(taskItem).append(employee);
        var importance_el = document.createElement("p");
        $(importance_el).addClass("importance-indicator-" + json_pool[task].importance);
        $(taskItem).append(importance_el);
        var state;
        var id = json_pool[task].id;
        switch (json_pool[task].state){
            case "unactive":
                state = "just-task";
                break;
            case "processing":
                state = "task-in-process";
                break;
            case "done":
                state = "task-completed";
                break;
            case "decline":
                state = "task-declined";
                break;
        }
        taskItem.classList.add("task");
        taskItem.classList.add(state);
        $(taskItem).attr("data-id", id);
        console.log(taskItem);

        $(".task-list").append(taskItem);

        $(".pool-icon").html($(".task-list").children(".just-task").length);
    }
    $(".just-task").click(function(){
        SendTaskChange(this.getAttribute("id"), "processing");
        AddToCart(this.getAttribute("data-id"), $(this).children(".task-desc").html());
        $(".list-close-button").click();
        $(".pool-icon").removeClass("pool-icon-active");
        $(this).off("click");
    });
};
function MakePoolAdmin(json_pool_to_str){
    var json_pool = JSON.parse(json_pool_to_str);
    $(".admin_pool").empty();
    for(var task in json_pool){
        var taskItem = document.createElement("li");
        taskItem.setAttribute("data-employee", json_pool[task].employee);
        var text_holder = document.createElement("div");
        $(text_holder).addClass("adm-desc");
        $(taskItem).append(text_holder);
        var text = document.createElement("p");
        $(text).addClass("adm-task-desc");
        $(text).html(json_pool[task].text);
        $(text_holder).append(text);
        var employee = document.createElement("p");
        $(employee).html(json_pool[task].employee);
        $(text_holder).append(employee);
        var importance_el = document.createElement("p");
        $(importance_el).addClass("adm-importance-indicator-" + json_pool[task].importance);
        $(taskItem).append(importance_el);
        var state;
        var comment = document.createElement("p");
        $(comment).html(json_pool[task].comment);
        $(comment).addClass("adm-comment");
        $(taskItem).append(comment);
        var id = json_pool[task].id;
        switch (json_pool[task].state){
            case "unactive":
                state = "adm-just-task";
                break;
            case "processing":
                state = "adm-task-in-process";
                break;
            case "done":
                state = "adm-task-completed";
                taskItem.addEventListener("click", function(){
                    if($(this).children(".adm-comment").hasClass("adm-comment-active")){
                        $(this).children(".adm-comment").removeClass("adm-comment-active");
                    }else{
                        $(this).children(".adm-comment").addClass("adm-comment-active");
                    }
                });
                break;
            case "decline":
                state = "adm-task-declined";
                taskItem.addEventListener("click", function(){
                    if($(this).children(".adm-comment").hasClass("adm-comment-active")){
                        $(this).children(".adm-comment").removeClass("adm-comment-active");
                    }else{
                        $(this).children(".adm-comment").addClass("adm-comment-active");
                    }
                });
                break;
        }
        taskItem.classList.add("adm-task");
        taskItem.classList.add(state);
        var importance_el = document.createElement("p");
        $(importance_el).addClass("adm-importance-indicator-" + json_pool[task].importance);
        $(taskItem).append(importance_el);
        $(taskItem).attr("data-id", id);
        console.log(taskItem);

        $(".admin_pool").append(taskItem);

        //$(".pool-icon").html($(".task-list").children(".just-task").length);
    }
    $(".just-task").click(function(){
        SendTaskChange(this.getAttribute("id"), "processing");
        AddToCart(this.getAttribute("data-id"), $(this).children(".task-desc").html());
        $(".list-close-button").click();
        $(".pool-icon").removeClass("pool-icon-active");
        $(this).off("click");
    });
};
function CompleteFilterJson(target) {
  /*  $("p").html(
        "Типи: " + $("#filter-inputs-type").val().split(" ") + "<p>" +
        "Матеріал: " + $("#filter-inputs-material").val().split(" ") + "<p>" +
        "Пошук для: " + target.dataset.target + "<br>" +
        "Ідентифікатори типу: " + filters_structured["type-ids"] + "<br>" +
        "Ідентифікатори матеріалу: " + filters_structured["material-ids"]
    );*/
    filters_structured["type"] = $("#filter-inputs-type").val().split(" ");
    filters_structured["material"] = $("#filter-inputs-material").val().split(" ");
    filters_structured["target"] = target.dataset.target;
    if (!filters_structured["type-ids"]) {
        filters_structured["type-ids"] = [];
    }
    if (!filters_structured["material-ids"]) {
        filters_structured["material-ids"] = [];
    }

    //console.log(filters_structured);
}



function ProposeAdding(ul, input) {
    var target = filters_structured["target"];
    var else_target;
    if (target == targets[0]) {
        else_target = targets[1];
    } else {
        else_target = targets[0];
    }
    $(ul).empty();
    for (var name in databased2[target]) {
        // console.log("Подсказка " + name + " в " + target);
        // console.log("Введено" + filters_structured[target][filters_structured.length - 1]);
        var li = document.createElement("li");

        if (name.indexOf(filters_structured[target][filters_structured[target].length - 1]) == 0 && filters_structured[target][filters_structured[target].length - 1] != "") {
            console.log(filters_structured[else_target + "-ids"]);
            console.log(databased2[target][name].id);
            if (filters_structured[else_target + "-ids"].indexOf(databased2[target][name].id) != -1 || filters_structured[else_target + "-ids"].length == 0) {
                $(li).html(name);
                $(ul).append(li);
            }
        }
    }
    if ($(ul).children().length == 0) {
        var li = document.createElement("li");
        $(li).html("Не існує.");
        $(li).css("text-align", "center");
        $(li).css("background", "pink");
        $(ul).append(li);
    }
    $(".propose_list").children("li").click(function (e) {
        var inner = $(e.target).parents(".filter-inputs").children("input").val().split(" ");
        var attr = $(e.target).parents(".filter-inputs").children("input").attr("data-target");
        delete inner[inner.length - 1];
        $(e.target).parents(".filter-inputs").children("input").val(inner.join(" ") + $(e.target).html());
        $(".filter-inputs").children("input").keyup();
        var arr = databased2[attr][$(e.target).html()].related;
        for (var i = 0; i < arr.length; i++) {
            filters_structured[attr + "-ids"].push(arr[i]);
        }
        alert(databased2[attr][$(e.target).html()].id);
        $(".propose_list").empty();
    });
}
