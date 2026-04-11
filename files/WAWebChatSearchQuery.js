__d(
  "WAWebChatSearchQuery",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = "SEARCH_EVENT",
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.query = ""),
            (e.filter = {}),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.trimmed = function () {
            return this.query.trim();
          }),
          (r.highlighted = function () {
            var e = this.trimmed().toLowerCase().split(" ");
            return Array.from(new Set(e));
          }),
          (r.$SearchQuery$p_1 = function () {
            return this.trimmed() === "" || !this.trimmed();
          }),
          (r.isEmptyQuery = function () {
            return this.$SearchQuery$p_1();
          }),
          (r.hasFilter = function () {
            return this.hasKindFilter() || this.hasLabelFilter();
          }),
          (r.hasKindFilter = function () {
            return !!this.filter.kind;
          }),
          (r.hasLabelFilter = function () {
            return !!this.filter.label;
          }),
          (r.updateQuery = function (n) {
            var t = this.query;
            ((this.query = n), n.trim() !== t && this.trigger(e));
          }),
          (r.updateLabelQuery = function (t) {
            this.filter = t || {};
          }),
          (r.clear = function () {
            this.updateQuery("");
          }),
          (r.equals = function (t, n) {
            return (
              this.query === t &&
              this.filter.kind === (n == null ? void 0 : n.kind) &&
              this.filter.label === (n == null ? void 0 : n.label)
            );
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    function u(e) {
      return e == null ? !1 : !!(!e.isEmptyQuery() || e.hasFilter());
    }
    ((l.SEARCH_EVENT = e), (l.SearchQuery = s), (l.isSearchResult = u));
  },
  98,
);
