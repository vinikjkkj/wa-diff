__d(
  "WAWebFalcoEventQueue",
  [
    "WALogger",
    "WAShiftTimer",
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
    function g(e) {
      f = e;
    }
    function h(t) {
      var n =
          o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING,
        a = function () {
          var t = i.fields,
            a = i.name,
            l = {};
          try {
            l = f();
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] canonical read failed at flush for ",
                    "",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("wam_falco_canonical_read_error", { sampling: 0.1 });
          }
          n &&
            (r("WAWebODS").incr("web.falco.shadow.flush"),
            r("WAWebODS").incr("web.falco.shadow." + a + ".flush"));
          try {
            var u = babelHelpers.extends({}, l, t);
            o("WAWebFalcoLoggerCache")
              .getFalcoLogger(a)
              .logImmediately(function () {
                return u;
              });
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] send failed for ",
                    "",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("wam_falco_send_error", { sampling: 0.1 });
          }
        };
      for (var i of t) a();
    }
    function y(e) {
      C(e, 0);
    }
    function C(e, t) {
      var n = Math.min(t + p, e.length);
      (h(e.slice(t, n)),
        n < e.length &&
          self.setTimeout(function () {
            return C(e, n);
          }, 0));
    }
    function b() {
      if (_.length !== 0) {
        var e = _;
        ((_ = []), h(e));
      }
    }
    var v = new (o("WAShiftTimer").ShiftTimer)(b),
      S = !1;
    function R() {
      S ||
        ((S = !0),
        self.addEventListener("beforeunload", b),
        self.addEventListener("pagehide", b));
    }
    function L(e) {
      (R(),
        _.length >= d &&
          (o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] queue overflow, dropping ",
                  " oldest events",
                ])),
              m,
            )
            .sendLogs("wam_falco_queue_overflow", { sampling: 0.01 }),
          _.splice(0, m)),
        _.push(e),
        _.length >= c
          ? v.onOrBefore(0)
          : v.onOrBefore(
              o("WAWebWamFalcoABProps").getWamFalcoFlushIntervalMs(),
            ));
    }
    ((l.setCanonicalFieldsProvider = g),
      (l.sendFalcoEventsNow = h),
      (l.sendFalcoEventsChunked = y),
      (l.drainFalcoQueue = b),
      (l.enqueueFalcoEvent = L));
  },
  98,
);
