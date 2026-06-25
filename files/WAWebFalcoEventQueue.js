__d(
  "WAWebFalcoEventQueue",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebFalcoLoggerCache",
    "WAWebWamFalcoABProps",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 150,
      c = 2e3,
      d = 50,
      m = 200,
      p = [];
    function _(t) {
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
    function f(e) {
      g(e, 0);
    }
    function g(e, t) {
      var n = Math.min(t + m, e.length);
      (_(e.slice(t, n)),
        n < e.length &&
          self.setTimeout(function () {
            return g(e, n);
          }, 0));
    }
    function h() {
      if (p.length !== 0) {
        var e = p;
        ((p = []), _(e));
      }
    }
    var y = new (o("WAShiftTimer").ShiftTimer)(h),
      C = !1;
    function b() {
      C ||
        ((C = !0),
        self.addEventListener("beforeunload", h),
        self.addEventListener("pagehide", h));
    }
    function v(e) {
      (b(),
        p.length >= c &&
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] queue overflow, dropping ",
                  " oldest events",
                ])),
              d,
            )
            .sendLogs("wam_falco_queue_overflow", { sampling: 0.01 }),
          p.splice(0, d)),
        p.push(e),
        p.length >= u
          ? y.onOrBefore(0)
          : y.onOrBefore(
              o("WAWebWamFalcoABProps").getWamFalcoFlushIntervalMs(),
            ));
    }
    ((l.sendFalcoEventsNow = _),
      (l.sendFalcoEventsChunked = f),
      (l.drainFalcoQueue = h),
      (l.enqueueFalcoEvent = v));
  },
  98,
);
