import View from './View';

class ListView extends View {
    constructor(name) {
        super(name);

        this._type = 'ListView';
        this._perPage = 30;
        this._infinitePagination = false;
        this._listActions = [];
        this._batchActions = ['delete'];
        this._filters = [];
        this._exportFields = [];

        this._sortField = 'id';
        this._sortDir = 'DESC';
    }

    perPage() {
        if (!arguments.length) { return this._perPage; }
        this._perPage = arguments[0];
        return this;
    }

    /** @deprecated Use perPage instead */
    limit() {
        if (!arguments.length) { return this.perPage(); }
        return this.perPage(arguments[0]);
    }

    sortField() {
        if (arguments.length) {
            this._sortField = arguments[0];
            return this;
        }

        return this._sortField;
    }

    sortDir() {
        if (arguments.length) {
            this._sortDir = arguments[0];
            return this;
        }

        return this._sortDir;
    }

    infinitePagination() {
        if (arguments.length) {
            this._infinitePagination = arguments[0];
            return this;
        }

        return this._infinitePagination;
    }

    actions(actions) {
        if (!arguments.length) {
            return this._actions;
        }

        this._actions = actions;

        return this;
    }

    batchActions(actions) {
        if (!arguments.length) {
            return this._batchActions;
        }

        this._batchActions = actions;

        return this;
    }

    filters(filters) {
        if (!arguments.length) {
            return this._filters;
        }

        this._filters = filters;

        return this;
    }

    getFilterReferences() {
        return this._filters.filter(f => f.type() === 'reference');
    }

    listActions(actions) {
        if (!arguments.length) {
            return this._listActions;
        }

        this._listActions = actions;

        return this;
    }

    exportFields() {
        if (!arguments.length) {
            return this._exportFields.length == 0 ? this._fields : this._exportFields;
        }

        this._exportFields = arguments[0];

        return this;
    }
}

export default ListView;
