var feesJson = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/fees.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

var ordersJson = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/orders.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

function showTime() {
    console.log("Part 1: Fees");
    var sum = 0;
    for (var i = 0; i < ordersJson.length; i++) {
        console.log("Order ID: " + ordersJson[i].order_number);
        for (j in ordersJson[i].order_items) {
            var type = ordersJson[i].order_items[j].type;
            console.log("Type: " + type);
            for (var z = 0; z < feesJson.length; z++) {
                if (feesJson[z].order_item_type == type) {
                    for (var zz = 0; zz < feesJson[z].fees.length; zz++) {
                        var fees = feesJson[z].fees[zz];
                        
                        console.log("Amount: " + fees.amount);
                    }
                }
            }
            sum += parseFloat(fees.amount);
            console.log("Total: " + sum);

        }
    }
}


function fund() {
    console.log("Part 2: Distributions");
    for (var i = 0; i < ordersJson.length; i++) {
        console.log("Order ID: " + ordersJson[i].order_number);
        for (y in ordersJson[i].order_items) {
            var type = ordersJson[i].order_items[y].type;
            console.log("Type: " + type);
            for (var z = 0; z < feesJson.length; z++) {
                if (feesJson[z].order_item_type == type) {
                    for (var zz = 0; zz < feesJson[z].distributions.length; zz++) {
                        var distribution = feesJson[z].distributions[zz];
                        console.log("Fund name: " + distribution.name);
                        console.log("Fund fee: " + distribution.amount);
                    }
                }
            }
        }
    }
}

showTime();
fund();