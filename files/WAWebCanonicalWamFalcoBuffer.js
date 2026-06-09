__d(
  "WAWebCanonicalWamFalcoBuffer",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalUtils",
    "WAWebFalcoEventQueue",
    "WAWebLocalStorage",
    "WAWebNetworkStatus",
    "WAWebWamFalcoABProps",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return e == null ||
        typeof e != "object" ||
        typeof e.name != "string" ||
        typeof e.timestamp != "number" ||
        typeof e.fields != "object" ||
        e.fields == null
        ? null
        : { name: e.name, fields: e.fields, timestamp: e.timestamp };
    }
    var m = "WAWebFalcoBuffer",
      p = o("WATimeUtils").DAY_SECONDS * 1e3,
      _ = 50,
      f = 3e4,
      g = 600 * 1e3,
      h = 6e4;
    function y() {
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(m);
        if (t != null) {
          var n = JSON.parse(t);
          if (Array.isArray(n)) {
            var a = [];
            for (var i of n) {
              var l = d(i);
              l != null && a.push(l);
            }
            return a;
          }
        }
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
    function C(e) {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(m, JSON.stringify(e));
    }
    function b() {
      r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(m);
    }
    var v = (function () {
        function e() {
          var e = this;
          ((this.$2 = !1),
            (this.$6 = function () {
              r("WAWebNetworkStatus").online &&
                o("WAWebCanonicalUtils").isCurrentUserLoggedIn() &&
                e.drain();
            }),
            (this.$7 = function () {
              !e.$2 || e.$1.length === 0 || e.$5();
            }),
            (this.$8 = function () {
              if (e.$1.length !== 0) {
                var t = Date.now() - e.$1[0].timestamp;
                t < g ||
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[falco] draining ",
                        " stale buffered events (oldest: ",
                        "s)",
                      ])),
                    e.$1.length,
                    Math.round(t / 1e3),
                  ),
                  e.drain());
              }
            }),
            (this.$5 = function () {
              if (e.$1.length !== 0)
                try {
                  var t = o(
                      "WAWebWamFalcoABProps",
                    ).getCanonicalWamFalcoMaxBufferSize(),
                    n = e.$1.length > t ? e.$1.slice(-t) : e.$1;
                  (C(n), (e.$2 = !1));
                } catch (e) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[falco] failed to persist buffer: ",
                        "",
                      ])),
                    e,
                  );
                }
            }),
            (this.$1 = y()),
            self.addEventListener("beforeunload", this.$5),
            self.addEventListener("pagehide", this.$5),
            r("WAWebNetworkStatus").on("change:online", this.$6),
            (this.$3 = self.setInterval(this.$7, f)),
            (this.$4 = self.setInterval(this.$8, h)));
        }
        var t = e.prototype;
        return (
          (t.buffer = function (t) {
            (this.$1.push(t), (this.$2 = !0), this.$9());
          }),
          (t.drain = function () {
            if (r("WAWebNetworkStatus").online) {
              var e = Date.now(),
                t = this.$1.filter(function (t) {
                  return e - t.timestamp < p;
                });
              ((this.$1 = []),
                (this.$2 = !1),
                b(),
                t.length !== 0 &&
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[falco] draining ",
                        " buffered events",
                      ])),
                    t.length,
                  ),
                  o("WAWebFalcoEventQueue").sendFalcoEventsChunked(t)));
            }
          }),
          (t.$9 = function () {
            var e = o(
                "WAWebWamFalcoABProps",
              ).getCanonicalWamFalcoMaxBufferSize(),
              t = this.$1.length - e;
            if (!(t <= 0)) {
              var n = Math.min(t, _),
                r = this.$1.splice(0, n);
              for (var a of r) o("WAWebFalcoEventQueue").enqueueFalcoEvent(a);
            }
          }),
          e
        );
      })(),
      S = null;
    function R() {
      return (S == null && (S = new v()), S);
    }
    function L(e) {
      R().buffer(e);
    }
    function E() {
      (S == null && y().length === 0) || R().drain();
    }
    ((l.bufferCanonicalFalcoEvent = L), (l.drainCanonicalWamFalcoBuffer = E));
  },
  98,
);
