__d(
  "WAWebVoipSessionTracker",
  ["WALogger", "WAWebAppTracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = 12e4,
      c = new Map(),
      d = !1,
      m = null,
      p = 0;
    function _() {
      m != null && (window.clearTimeout(m), (m = null));
    }
    function f() {
      (_(),
        (m = self.setTimeout(function () {
          ((m = null),
            c.size === 0 &&
              d &&
              ((d = !1),
              o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.VoipSession,
              )));
        }, s)));
    }
    function g(t) {
      _();
      var n = c.get(t);
      (n != null && window.clearTimeout(n),
        c.set(
          t,
          self.setTimeout(function () {
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] VoipSession id leaked, force-closing: ",
                  "",
                ])),
              t,
            ),
              y(t));
          }, u),
        ),
        d ||
          ((d = !0),
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.VoipSession,
          )));
    }
    function h(e) {
      var t = c.get(e);
      t != null && (window.clearTimeout(t), c.delete(e), c.size === 0 && f());
    }
    function y(e) {
      c.delete(e) && c.size === 0 && f();
    }
    function C() {
      var e = "auto:" + ++p;
      return (g(e), e);
    }
    function b(e) {
      h(e);
    }
    function v() {
      _();
      for (var e of c.values()) self.clearTimeout(e);
      (c.clear(),
        (d = !1),
        (p = 0),
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.VoipSession,
        ));
    }
    ((l.openVoipSession = g),
      (l.closeVoipSession = h),
      (l.beginVoipSession = C),
      (l.endVoipSession = b),
      (l.resetVoipSessionForTest = v));
  },
  98,
);
