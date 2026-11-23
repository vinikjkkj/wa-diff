__d(
  "AdsBulkEditColumnKeyToDialogTypeMap",
  ["AdsBulkEditDialogTypes", "AdsBulkEditMenuPluginResolver", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("immutable").Map({}),
        t = function (n) {
          var t = r("AdsBulkEditMenuPluginResolver").resolve({ dialogType: n });
          t.columnConfigs.forEach(function (t) {
            var o = t == null ? void 0 : t.columnKey;
            if (o != null) {
              var a = e.get(o) || r("immutable").Set();
              ((a = a.add(n)), (e = e.set(o, a)));
            }
          });
        };
      for (var n of r("AdsBulkEditDialogTypes").members()) t(n);
      return e;
    }
    function s(e) {
      return e.map(function (e, t) {
        return t.includes("NAME")
          ? e.filter(function (e) {
              return e.includes("NAME");
            })
          : e;
      });
    }
    var u = e(),
      c = s(u),
      d = c;
    l.default = d;
  },
  98,
);
