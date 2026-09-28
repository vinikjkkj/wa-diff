__d(
  "WAWebVoipMicrophoneHealthPresence",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = new Set(),
      s = new Set(),
      u = new Set();
    function c(e) {
      return e.isDocPip
        ? "doc_pip"
        : e.isContextInPopoutWindow && e.windowEl !== window
          ? "popout_window"
          : "main_window";
    }
    function d(e) {
      var t = e.isCallActiveInPopoutWindow,
        n = e.isDocPipOpen,
        r = e.placement;
      return n
        ? r === "doc_pip"
        : t
          ? r === "popout_window"
          : r === "main_window";
    }
    function m(t, n) {
      n ? e.add(t) : e.delete(t);
    }
    function p() {
      return e.size > 0;
    }
    function _(e, t) {
      var n = s.size > 0;
      if ((t ? s.add(e) : s.delete(e), !n && s.size > 0)) for (var r of u) r();
    }
    function f() {
      return s.size > 0;
    }
    function g(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function h(e, t) {
      t ? l.add(e) : l.delete(e);
    }
    function y() {
      return l.size > 0;
    }
    function C() {
      (e.clear(), l.clear(), s.clear(), u.clear());
    }
    ((i.getCallSurfacePlacement = c),
      (i.isMicrophoneObserverOwner = d),
      (i.reportMicrophoneHealthArmed = m),
      (i.isMicrophoneHealthArmed = p),
      (i.reportMicrophoneHealthExperienceMounted = _),
      (i.isMicrophoneHealthExperienceMounted = f),
      (i.subscribeToMicrophoneHealthExperienceMount = g),
      (i.reportMicrophoneUnavailableBannerVisible = h),
      (i.isMicrophoneUnavailableBannerVisible = y),
      (i.resetMicrophoneHealthPresenceForTesting = C));
  },
  66,
);
