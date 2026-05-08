__d(
  "WAWebCanonicalWamFalcoBuffer",
  [
    "FalcoLoggerInternal",
    "WALogger",
    "WATimeUtils",
    "WAWebLocalStorage",
    "WAWebWamFalcoABProps",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "WAWebFalcoBuffer",
      m = 500,
      p = o("WATimeUtils").DAY_SECONDS * 1e3,
      _ = 50;
    function f() {
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(d);
        if (t != null) return JSON.parse(t);
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[falco] corrupted buffer storage, discarding: ",
              "",
            ])),
          t,
        );
      }
      return [];
    }
    function g(e) {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(d, JSON.stringify(e));
    }
    function h() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(d);
    }
    function y(e, t) {
      for (
        var n = Math.min(t + _, e.length),
          r = function () {
            var t = e[a],
              n = t.falcoFields,
              r = t.finalEventName,
              i = o("FalcoLoggerInternal").create(r, { r: 1 });
            i.log(function () {
              return n;
            });
          },
          a = t;
        a < n;
        a++
      )
        r();
      n < e.length &&
        self.setTimeout(function () {
          return y(e, n);
        }, 0);
    }
    var C = (function () {
        function e() {
          var e = this;
          ((this.$2 = function () {
            if (e.$1.length !== 0)
              try {
                var t = e.$1.length > m ? e.$1.slice(-m) : e.$1;
                g(t);
              } catch (e) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] failed to persist buffer: ",
                      "",
                    ])),
                  e,
                );
              }
          }),
            (this.$1 = f()),
            self.addEventListener("beforeunload", this.$2));
        }
        var t = e.prototype;
        return (
          (t.buffer = function (t, n, r) {
            (this.$1.push({ finalEventName: t, falcoFields: n, time: r }),
              this.$3());
          }),
          (t.drain = function () {
            try {
              var e = this.$1;
              ((this.$1 = []), h());
              var t = Date.now(),
                n = e.filter(function (e) {
                  return t - e.time < p;
                });
              if (n.length === 0) return;
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] draining ",
                    " buffered events",
                  ])),
                n.length,
              ),
                y(n, 0));
            } catch (e) {
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] failed to drain buffer: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (t.$3 = function () {
            var e = o(
              "WAWebWamFalcoABProps",
            ).getCanonicalWamFalcoMaxBufferSize();
            if (!(this.$1.length <= e)) {
              var t = this.$1.splice(0, _);
              self.setTimeout(function () {
                return y(t, 0);
              }, 0);
            }
          }),
          e
        );
      })(),
      b = null;
    function v() {
      return (b == null && (b = new C()), b);
    }
    function S(e, t, n) {
      v().buffer(e, t, n);
    }
    function R() {
      (b == null && f().length === 0) || v().drain();
    }
    ((l.bufferCanonicalFalcoEvent = S), (l.drainCanonicalWamFalcoBuffer = R));
  },
  98,
);
