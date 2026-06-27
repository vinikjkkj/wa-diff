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
            var e = { height: window.innerHeight, width: window.innerWidth },
              a = n,
              i = this;
            return {
              initialData: {
                initialValue: e,
                commitToStore: function (t, n) {
                  return (
                    n != null && i.$2(a, t, n),
                    function () {
                      i.$1 != null &&
                        window.removeEventListener("resize", i.$1);
                    }
                  );
                },
              },
              snapshot: o,
            };
          }),
          (n.$2 = function (n, r, a) {
            this.$1 != null && window.removeEventListener("resize", this.$1);
            var t = o("WebBloksUtils").throttle(function () {
              var e = { height: window.innerHeight, width: window.innerWidth };
              a == null || a.enqueueVariableUpdateOperation(r, e);
            }, e);
            ((this.$1 = t), window.addEventListener("resize", this.$1));
          }),
          t
        );
      })();
    l.WebBloksViewportDimensionsDataModule = s;
  },
  98,
);
