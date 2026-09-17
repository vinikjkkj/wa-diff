__d(
  "WAWebVoipMicrophoneHealthPresence",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = new Set();
    function s(e) {
      var t = e.isCallActiveInPopoutWindow,
        n = e.isContextInPopoutWindow,
        r = e.isDocPip,
        o = e.isDocPipOpen;
      return o ? r : t ? n : !n && !r;
    }
    function u(t, n) {
      n ? e.add(t) : e.delete(t);
    }
    function c() {
      return e.size > 0;
    }
    function d(e, t) {
      t ? l.add(e) : l.delete(e);
    }
    function m() {
      return l.size > 0;
    }
    function p() {
      (e.clear(), l.clear());
    }
    ((i.isMicrophoneObserverOwner = s),
      (i.reportMicrophoneHealthArmed = u),
      (i.isMicrophoneHealthArmed = c),
      (i.reportMicrophoneUnavailableBannerVisible = d),
      (i.isMicrophoneUnavailableBannerVisible = m),
      (i.resetMicrophoneHealthPresenceForTesting = p));
  },
  66,
);
