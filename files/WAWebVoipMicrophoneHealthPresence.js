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
      var t = e.isCallActiveInPopoutWindow,
        n = e.isContextInPopoutWindow,
        r = e.isDocPip,
        o = e.isDocPipOpen;
      return o ? r : t ? n : !n && !r;
    }
    function d(t, n) {
      n ? e.add(t) : e.delete(t);
    }
    function m() {
      return e.size > 0;
    }
    function p(e, t) {
      var n = s.size > 0;
      if ((t ? s.add(e) : s.delete(e), !n && s.size > 0)) for (var r of u) r();
    }
    function _() {
      return s.size > 0;
    }
    function f(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function g(e, t) {
      t ? l.add(e) : l.delete(e);
    }
    function h() {
      return l.size > 0;
    }
    function y() {
      (e.clear(), l.clear(), s.clear(), u.clear());
    }
    ((i.isMicrophoneObserverOwner = c),
      (i.reportMicrophoneHealthArmed = d),
      (i.isMicrophoneHealthArmed = m),
      (i.reportMicrophoneHealthExperienceMounted = p),
      (i.isMicrophoneHealthExperienceMounted = _),
      (i.subscribeToMicrophoneHealthExperienceMount = f),
      (i.reportMicrophoneUnavailableBannerVisible = g),
      (i.isMicrophoneUnavailableBannerVisible = h),
      (i.resetMicrophoneHealthPresenceForTesting = y));
  },
  66,
);
