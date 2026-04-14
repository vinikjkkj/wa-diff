__d(
  "useWAWebDevicePixelRatio",
  ["err", "once", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(function () {
          return m().getValue();
        }),
        t = e[0],
        n = e[1];
      return (
        u(function () {
          return m().subscribe(function (e) {
            n(e);
          });
        }, []),
        t
      );
    }
    var m = r("once")(function () {
        return new p();
      }),
      p = (function () {
        function e() {
          this.$1 = new Set();
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t) {
            var e = this;
            if (this.$1.has(t))
              throw r("err")("Callback can only be added once.");
            return (
              this.$1.add(t),
              this.$3(),
              function () {
                (e.$1.delete(t), e.$3());
              }
            );
          }),
          (t.getValue = function () {
            var e;
            return (e = window.devicePixelRatio) != null ? e : 1;
          }),
          (t.$3 = function () {
            var e = this;
            if (this.$1.size === 0) {
              var t;
              (t = this.$2) == null || t.call(this);
              return;
            }
            if (this.$2 == null) {
              var n = matchMedia("(resolution: " + this.getValue() + "dppx)"),
                r = function () {
                  e.$2 == null || e.$2();
                  var t = e.getValue();
                  (e.$1.forEach(function (e) {
                    e(t);
                  }),
                    e.$3());
                };
              (n.addListener(r),
                (this.$2 = function () {
                  (n.removeListener(r), (e.$2 = null));
                }));
            }
          }),
          e
        );
      })();
    l.default = d;
  },
  98,
);
