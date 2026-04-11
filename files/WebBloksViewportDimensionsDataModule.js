__d(
  "WebBloksViewportDimensionsDataModule",
  ["WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 16.666666666666668,
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.setup = function (t, n, r, o) {
            var e = this,
              a = { height: window.innerHeight, width: window.innerWidth };
            r != null && this.$2(n, r);
            var i = function () {
              e.$1 != null && window.removeEventListener("resize", e.$1);
            };
            return { cancelToken: i, initialValue: a };
          }),
          (n.$2 = function (n, r) {
            var t = n.id;
            this.$1 != null && window.removeEventListener("resize", this.$1);
            var a = o("WebBloksUtils").throttle(function () {
              var e = { height: window.innerHeight, width: window.innerWidth };
              r == null || r.enqueueVariableUpdateOperation(t, e);
            }, e);
            ((this.$1 = a), window.addEventListener("resize", this.$1));
          }),
          t
        );
      })();
    l.WebBloksViewportDimensionsDataModule = s;
  },
  98,
);
