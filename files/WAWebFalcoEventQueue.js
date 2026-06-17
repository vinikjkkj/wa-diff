__d(
  "WAWebFalcoEventQueue",
  ["WALogger", "WAShiftTimer", "WAWebFalcoLoggerCache", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = 150,
      d = 2e3,
      m = 50,
      p = 200,
      _ = [];
    function f(t) {
      var n = function () {
        var t = a.fields,
          n = a.name;
        try {
          o("WAWebFalcoLoggerCache")
            .getFalcoLogger(n)
            .logImmediately(function () {
              return t;
            });
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] send failed for ",
                  "",
                ])),
              n,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("wam_falco_send_error", { sampling: 0.1 });
        }
      };
      for (var a of t) n();
    }
    function g(e) {
      h(e, 0);
    }
    function h(e, t) {
      var n = Math.min(t + p, e.length);
      (f(e.slice(t, n)),
        n < e.length &&
          self.setTimeout(function () {
            return h(e, n);
          }, 0));
    }
    function y() {
      if (_.length !== 0) {
        var e = _;
        ((_ = []), f(e));
      }
    }
    var C = new (o("WAShiftTimer").ShiftTimer)(y),
      b = !1;
    function v() {
      b ||
        ((b = !0),
        self.addEventListener("beforeunload", y),
        self.addEventListener("pagehide", y));
    }
    function S(e) {
      (v(),
        _.length >= d &&
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] queue overflow, dropping ",
                  " oldest events",
                ])),
              m,
            )
            .sendLogs("wam_falco_queue_overflow", { sampling: 0.01 }),
          _.splice(0, m)),
        _.push(e),
        _.length >= c ? C.onOrBefore(0) : C.onOrBefore(u));
    }
    ((l.sendFalcoEventsNow = f),
      (l.sendFalcoEventsChunked = g),
      (l.drainFalcoQueue = y),
      (l.enqueueFalcoEvent = S));
  },
  98,
);
