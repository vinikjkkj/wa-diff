__d(
  "WAWebVoipBrowserMuteState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = !1,
      s = null,
      u = !1;
    function c(t) {
      if (t !== l) {
        l = t;
        for (var n of e) n(t);
      }
    }
    function d(t) {
      return (
        e.add(t),
        l && t(!0),
        function () {
          e.delete(t);
        }
      );
    }
    function m(e) {
      return s === e ? !1 : ((s = e), !0);
    }
    function p(e) {
      u = e;
    }
    function _() {
      return u;
    }
    function f() {
      (e.clear(), (l = !1), (s = null), (u = !1));
    }
    ((i.reportBrowserMuteSuspected = c),
      (i.subscribeToBrowserMuteSuspected = d),
      (i.claimBrowserMuteToast = m),
      (i.recordPlaybackBrowserMuted = p),
      (i.wasLastPlaybackBrowserMuted = _),
      (i.resetBrowserMuteStateForTesting = f));
  },
  66,
);
