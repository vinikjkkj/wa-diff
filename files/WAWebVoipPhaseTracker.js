__d(
  "WAWebVoipPhaseTracker",
  ["WALogger", "WAWebAppTracker", "WAWebCallCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = new Set(),
      c = 0;
    function d(e, t) {
      t && !o("WAWebAppTracker").AppTracker.isRunning(e)
        ? o("WAWebAppTracker").AppTracker.start(e)
        : !t &&
          o("WAWebAppTracker").AppTracker.isRunning(e) &&
          o("WAWebAppTracker").AppTracker.stop(e);
    }
    function m() {
      var e = r("WAWebCallCollection").activeCall != null;
      (e && s.size > 0 && s.clear(),
        d(o("WAWebAppTracker").AppTrackerType.VoipPreCall, s.size > 0),
        d(
          o("WAWebAppTracker").AppTrackerType.VoipPostCall,
          u.size > 0 && !e && s.size === 0,
        ));
    }
    function p(e) {
      (s.add(e), m());
    }
    function _(e) {
      s.delete(e) && m();
    }
    function f() {
      var e = "pcw:" + ++c;
      return (u.add(e), m(), e);
    }
    function g(e) {
      u.delete(e) && m();
    }
    function h() {
      (r("WAWebCallCollection").on("change:activeCall", m),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:phaseTracker] observer started",
            ])),
        ));
    }
    function y() {
      var e;
      (s.clear(),
        u.clear(),
        (c = 0),
        (e = o("WAWebAppTracker")).AppTracker.stop(
          e.AppTrackerType.VoipPreCall,
        ),
        e.AppTracker.stop(e.AppTrackerType.VoipPostCall));
    }
    ((l.reconcileVoipPhases = m),
      (l.notePreCallStart = p),
      (l.notePreCallEnd = _),
      (l.beginPostCallWork = f),
      (l.endPostCallWork = g),
      (l.startVoipPhaseObserver = h),
      (l.resetVoipPhasesForTest = y));
  },
  98,
);
