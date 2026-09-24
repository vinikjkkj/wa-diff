__d(
  "WAWebVoipBrowserMuteState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = !1,
      s = null;
    function u(t) {
      if (t !== l) {
        l = t;
        for (var n of e) n(t);
      }
    }
    function c(t) {
      return (
        e.add(t),
        l && t(!0),
        function () {
          e.delete(t);
        }
      );
    }
    function d(e) {
      return s === e ? !1 : ((s = e), !0);
    }
    function m() {
      (e.clear(), (l = !1), (s = null));
    }
    ((i.reportBrowserMuteSuspected = u),
      (i.subscribeToBrowserMuteSuspected = c),
      (i.claimBrowserMuteToast = d),
      (i.resetBrowserMuteStateForTesting = m));
  },
  66,
);
