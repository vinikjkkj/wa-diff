__d(
  "useWAWebDevicePixelRatio",
  ["err", "once", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = c(m),
        n = t[0],
        r = t[1],
        a,
        i;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = function () {
              return p().subscribe(function (e) {
                r(e);
              });
            }),
            (i = []),
            (e[0] = a),
            (e[1] = i))
          : ((a = e[0]), (i = e[1])),
        u(a, i),
        n
      );
    }
    function m() {
      return p().getValue();
    }
    var p = r("once")(function () {
        return new _();
      }),
      _ = (function () {
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
