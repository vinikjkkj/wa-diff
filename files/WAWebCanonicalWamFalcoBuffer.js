__d(
  "WAWebCanonicalWamFalcoBuffer",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBufferConstants",
    "WAWebFalcoEventQueue",
    "WAWebLocalStorage",
    "WAWebNetworkStatus",
    "WAWebODS",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoModes",
    "getErrorSafe",
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
        : {
            name: e.name,
            fields: e.fields,
            timestamp: e.timestamp,
            critical: e.critical === !0,
          };
    }
    var m = 7 * o("WATimeUtils").DAY_SECONDS * 1e3,
      p = 50,
      _ = 3e4,
      f = 600 * 1e3,
      g = 6e4;
    function h(e, t) {
      o("WAWebWamFalcoABProps").getWamFalcoMode() ===
        o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING &&
        r("WAWebODS").incr("web.falco.shadow." + e.name + "." + t);
    }
    function y() {
      try {
        var t =
          r("WAWebLocalStorage") == null
            ? void 0
            : r("WAWebLocalStorage").getItem(
                o("WAWebCanonicalWamFalcoBufferConstants")
                  .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY,
              );
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
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] corrupted buffer storage, discarding",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("wam_falco_buffer_read_error");
      }
      return [];
    }
    function C(e) {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").setItem(
          o("WAWebCanonicalWamFalcoBufferConstants")
            .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY,
          JSON.stringify(e),
        );
    }
    function b() {
      r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").removeItem(
          o("WAWebCanonicalWamFalcoBufferConstants")
            .CANONICAL_WAM_FALCO_BUFFER_STORAGE_KEY,
        );
    }
    var v = (function () {
        function e() {
          var e = this;
          ((this.$2 = !1),
            (this.$6 = function () {
              r("WAWebNetworkStatus").online &&
                o("WAWebCanonicalUtils").isCanonicalPresent() &&
                e.drain("canonical");
            }),
            (this.$7 = function () {
              !e.$2 || e.$1.length === 0 || e.$5();
            }),
            (this.$8 = function () {
              if (e.$1.length !== 0) {
                var t = Date.now() - e.$1[0].timestamp;
                t < f ||
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
                  e.drain("stale"));
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
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[falco] failed to persist buffer",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("wam_falco_buffer_persist_error");
                }
            }),
            (this.$1 = y()),
            self.addEventListener("beforeunload", this.$5),
            self.addEventListener("pagehide", this.$5),
            r("WAWebNetworkStatus").on("change:online", this.$6),
            (this.$3 = self.setInterval(this.$7, _)),
            (this.$4 = self.setInterval(this.$8, g)));
        }
        var t = e.prototype;
        return (
          (t.buffer = function (t) {
            (this.$1.push(t), (this.$2 = !0), this.$9());
          }),
          (t.drain = function (t) {
            if (r("WAWebNetworkStatus").online) {
              var e = Date.now(),
                n = this.$1.filter(function (t) {
                  return e - t.timestamp < m;
                });
              if (((this.$1 = []), (this.$2 = !1), b(), n.length !== 0)) {
                var a =
                  t === "stale"
                    ? "buffer_stale_drain"
                    : "buffer_canonical_drain";
                for (var i of n) h(i, a);
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] draining ",
                      " buffered events",
                    ])),
                  n.length,
                ),
                  o("WAWebFalcoEventQueue").sendFalcoEventsChunked(n));
              }
            }
          }),
          (t.flushNow = function () {
            var e = Date.now(),
              t = this.$1.filter(function (t) {
                return e - t.timestamp < m;
              });
            if (((this.$1 = []), (this.$2 = !1), b(), t.length > 0)) {
              for (var n of t) h(n, "buffer_logout_flush");
              o("WAWebFalcoEventQueue").sendFalcoEventsNow(t);
            }
          }),
          (t.$9 = function () {
            var e = o(
                "WAWebWamFalcoABProps",
              ).getCanonicalWamFalcoMaxBufferSize(),
              t = this.$1.length - e;
            if (!(t <= 0)) {
              var n = Math.min(t, p),
                r = this.$1.splice(0, n);
              for (var a of r)
                (h(a, "buffer_overflow"),
                  o("WAWebFalcoEventQueue").enqueueFalcoEvent(a));
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
      (h(e, "buffer"), R().buffer(e));
    }
    function E() {
      (S == null && y().length === 0) || R().drain("canonical");
    }
    function k() {
      (S == null && y().length === 0) || R().flushNow();
    }
    ((l.bufferCanonicalFalcoEvent = L),
      (l.drainCanonicalWamFalcoBuffer = E),
      (l.flushCanonicalWamFalcoBuffer = k));
  },
  98,
);
