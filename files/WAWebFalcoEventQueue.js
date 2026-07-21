__d(
  "WAWebFalcoEventQueue",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebCanonicalUtils",
    "WAWebFalcoLoggerCache",
    "WAWebODS",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoModes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 150,
      d = 2e3,
      m = 50,
      p = 200,
      _ = [],
      f = function () {
        return {};
      };
    function g(e, t) {
      r("WAWebODS").incr("web.falco.shadow." + e + "." + t);
    }
    function h(e) {
      f = e;
    }
    function y(t) {
      var n =
          o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING,
        a = function () {
          var t = i.critical,
            a = i.fields,
            l = i.name,
            u = {},
            c = o("WAWebCanonicalUtils").isCanonicalPresent();
          try {
            u = f();
          } catch (t) {
            ((c = !1),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[falco] canonical read failed at flush for ",
                      "",
                    ])),
                  l,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("wam_falco_canonical_read_error", { sampling: 0.1 }));
          }
          n &&
            (r("WAWebODS").incr("web.falco.shadow.flush"),
            g(l, "flush"),
            c ||
              (r("WAWebODS").incr("web.falco.shadow.flush_without_canonical"),
              g(l, "flush_without_canonical")));
          try {
            var d = babelHelpers.extends({}, u, a),
              m = o("WAWebFalcoLoggerCache").getFalcoLogger(l);
            t === !0
              ? m.logCritical(function () {
                  return d;
                })
              : m.logImmediately(function () {
                  return d;
                });
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] send failed for ",
                    "",
                  ])),
                l,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("wam_falco_send_error", { sampling: 0.1 });
          }
        };
      for (var i of t) a();
    }
    function C(e) {
      b(e, 0);
    }
    function b(e, t) {
      var n = Math.min(t + p, e.length);
      (y(e.slice(t, n)),
        n < e.length &&
          self.setTimeout(function () {
            return b(e, n);
          }, 0));
    }
    function v() {
      if (_.length !== 0) {
        var e = _;
        ((_ = []), y(e));
      }
    }
    var S = new (o("WAShiftTimer").ShiftTimer)(v),
      R = !1;
    function L() {
      R ||
        ((R = !0),
        self.addEventListener("beforeunload", v),
        self.addEventListener("pagehide", v));
    }
    function E(e) {
      if ((L(), _.length >= d)) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] queue overflow, dropping ",
                " oldest events",
              ])),
            m,
          )
          .sendLogs("wam_falco_queue_overflow", { sampling: 0.01 });
        var t = _.splice(0, m);
        if (
          o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
        )
          for (var n of t) g(n.name, "evicted");
      }
      (_.push(e),
        _.length >= c
          ? S.onOrBefore(0)
          : S.onOrBefore(
              o("WAWebWamFalcoABProps").getWamFalcoFlushIntervalMs(),
            ));
    }
    ((l.setCanonicalFieldsProvider = h),
      (l.sendFalcoEventsNow = y),
      (l.sendFalcoEventsChunked = C),
      (l.drainFalcoQueue = v),
      (l.enqueueFalcoEvent = E));
  },
  98,
);
