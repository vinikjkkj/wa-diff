__d(
  "WAWebVoipCameraCaptureOwnerProvider",
  ["WAWebCallCollection", "WAWebVoipCallStateUtils", "WAWebVoipEventConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = o("WAWebVoipEventConstants")).getChangeEvent(
        e.VoipCallCollectionEvents.ACTIVE_CALL,
      ),
      u = "change:state",
      c = e.getChangeEvent(e.VoipCallModelEvents.USER_ENDED_CALL);
    function d() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null) return null;
      var t = e.getUserEndedCallGeneration(),
        n = e.userEndedCall,
        a = function () {
          return (
            n ||
            e.getUserEndedCallGeneration() !== t ||
            r("WAWebCallCollection").activeCall !== e ||
            e.userEndedCall ||
            o("WAWebVoipCallStateUtils").isCallTerminal(e.getState())
          );
        };
      return {
        isStopped: a,
        subscribe: function (n) {
          return m(e, a, n);
        },
      };
    }
    function m(e, t, n) {
      var o = !0,
        a = !1,
        i = function () {
          o &&
            ((o = !1),
            e.off(u, l),
            e.off(c, l),
            r("WAWebCallCollection").off(s, l));
        },
        l = function () {
          !o || a || !t() || ((a = !0), i(), n());
        };
      return (
        e.on(u, l),
        e.on(c, l),
        r("WAWebCallCollection").on(s, l),
        l(),
        i
      );
    }
    l.createActiveCallCameraCaptureOwner = d;
  },
  98,
);
