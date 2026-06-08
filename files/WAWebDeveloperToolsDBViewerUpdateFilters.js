__d(
  "WAWebDeveloperToolsDBViewerUpdateFilters",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = [].concat(t);
      return (n ? r.splice(e, 1, n) : r.splice(e, 1), r);
    }
    function l(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o) {
            var a = yield e(t, n, o);
            yield r(a);
          },
        )),
        s.apply(this, arguments)
      );
    }
    ((i.getUpdatedFilters = e), (i.updateFilters = l));
  },
  66,
);
