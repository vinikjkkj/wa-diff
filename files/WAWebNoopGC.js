__d(
  "WAWebNoopGC",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !1,
      l = !1;
    function s() {
      var t;
      if (!e) {
        var n = (t = window) == null ? void 0 : t.gc;
        if (typeof n == "function")
          try {
            var r = function () {
              l || n.call(window);
            };
            ((r.toString = function () {
              return "function gc() { [native code] }";
            }),
              (window.gc = r),
              (e = !0));
          } catch (e) {}
      }
    }
    function u() {
      l = !0;
    }
    ((i.installGCNoopWrapper = s), (i.enableGCNoop = u));
  },
  66,
);
