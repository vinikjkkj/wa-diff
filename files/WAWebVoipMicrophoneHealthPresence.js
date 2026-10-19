__d(
  "WAWebVoipMicrophoneHealthPresence",
  ["WAWebBoolFunc", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Set(),
      u = new Set(),
      c = new Set();
    function d(e) {
      return e.isDocPip
        ? "doc_pip"
        : e.isContextInPopoutWindow && e.windowEl !== window
          ? "popout_window"
          : "main_window";
    }
    function m(e) {
      var t = e.isCallActiveInPopoutWindow,
        n = e.isDocPipOpen,
        r = e.placement;
      return n
        ? r === "doc_pip"
        : t
          ? r === "popout_window"
          : r === "main_window";
    }
    function p(t, n, r) {
      (r === void 0 && (r = o("WAWebBoolFunc").returnFalse),
        n ? e.set(t, r) : e.delete(t));
    }
    function _() {
      return Array.from(e.values()).some(function (e) {
        return e();
      });
    }
    function f(e, t) {
      var n = u.size > 0;
      if ((t ? u.add(e) : u.delete(e), !n && u.size > 0)) for (var r of c) r();
    }
    function g() {
      return u.size > 0 && y().isExperienceEnabled;
    }
    function h(e) {
      var t = y(),
        n = t.isCompactAffordanceEnabled,
        r = t.isExperienceEnabled;
      return r && (!e || n);
    }
    function y() {
      return {
        isCompactAffordanceEnabled: o(
          "WAWebVoipGatingUtils",
        ).isMicrophoneHealthCompactAffordanceEnabled(),
        isExperienceEnabled: o(
          "WAWebVoipGatingUtils",
        ).isMicrophoneHealthExperienceEnabled(),
      };
    }
    function C(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function b(e, t) {
      t ? s.add(e) : s.delete(e);
    }
    function v() {
      return s.size > 0;
    }
    function S() {
      (e.clear(), s.clear(), u.clear(), c.clear());
    }
    ((l.getCallSurfacePlacement = d),
      (l.isMicrophoneObserverOwner = m),
      (l.reportMicrophoneHealthArmed = p),
      (l.canMicrophoneHealthWarn = _),
      (l.reportMicrophoneHealthExperienceMounted = f),
      (l.canRecoverMicrophone = g),
      (l.canShowMicrophoneWarning = h),
      (l.subscribeToMicrophoneHealthExperienceMount = C),
      (l.reportMicrophoneUnavailableBannerVisible = b),
      (l.isMicrophoneUnavailableBannerVisible = v),
      (l.resetMicrophoneHealthPresenceForTesting = S));
  },
  98,
);
