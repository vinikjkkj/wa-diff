__d(
  "HierarchicalTreeSearchableEntry",
  ["SearchableEntry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["categorySearchSource", "pathFromRoot"],
      s = (function (t) {
        function n(n) {
          var r,
            o = n.categorySearchSource,
            a = n.pathFromRoot,
            i = babelHelpers.objectWithoutPropertiesLoose(n, e);
          return (
            (r = t.call(this, i) || this),
            (r.$HierarchicalTreeSearchableEntry$p_1 = a),
            (r.$HierarchicalTreeSearchableEntry$p_2 = o),
            r
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getPathFromRootIDsToString = function () {
            return this.$HierarchicalTreeSearchableEntry$p_1
              .map(function (e) {
                return e.getUniqueID();
              })
              .join(",");
          }),
          (r.getPathFromRoot = function () {
            return this.$HierarchicalTreeSearchableEntry$p_1;
          }),
          (r.setPathFromRoot = function (t) {
            this.$HierarchicalTreeSearchableEntry$p_1 = t;
          }),
          (r.getCategorySearchSource = function () {
            return this.$HierarchicalTreeSearchableEntry$p_2;
          }),
          (r.setCategorySearchSource = function (t) {
            this.$HierarchicalTreeSearchableEntry$p_2 = t;
          }),
          n
        );
      })(r("SearchableEntry"));
    l.default = s;
  },
  98,
);
