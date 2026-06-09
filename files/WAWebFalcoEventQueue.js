__d(
  "WAWebFalcoEventQueue",
  ["FalcoLoggerInternal", "WALogger", "WAShiftTimer"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3,
      c = 150,
      d = 500,
      m = 200,
      p = [];
    function _(t) {
      var n = function () {
        var t = r.fields,
          n = r.name;
        try {
          var a = o("FalcoLoggerInternal").create(n, { r: 1 });
          a.logImmediately(function () {
            return t;
          });
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] send failed for ",
                  ": ",
                  "",
                ])),
              n,
              t,
            )
            .sendLogs("wam_falco_send_error", { sampling: 0.1 });
        }
      };
      for (var r of t) n();
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
        p.length >= d &&
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] queue overflow, dropping 50 oldest events",
                ])),
            )
            .sendLogs("wam_falco_queue_overflow", { sampling: 0.01 }),
          p.splice(0, 50)),
        p.push(e),
        p.length >= c ? y.onOrBefore(0) : y.onOrBefore(u));
    }
    ((l.sendFalcoEventsNow = _),
      (l.sendFalcoEventsChunked = f),
      (l.enqueueFalcoEvent = v));
  },
  98,
);
