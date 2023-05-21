class NdrTable extends Card {
    docs: Grid<any> = null;
    table: Table;

    constructor($mainPage:JQuery) {
        super(' ');

        this.$card.appendTo($mainPage);

        var $row = $('<div class="row" />').appendTo(this.$body);
        var $col4 = $('<div class="col col-4" />').append('&nbsp;').appendTo($row);
        var $col8 = $('<div class="col col-8 text-left" />').appendTo($row);
        this.table = new Table(["col1", "col2"]);
        this.table.addRow(["col1", "col2"]);
        this.table.$table.appendTo(this.$card);
        
    }

    
}

$(function () {
    var tbl = new NdrTable($("#mainPage"));
    
})