__d(
  "WAWebVoipStartingCallSettle",
  ["Promise", "WAWebCallCollection", "WAWebVoipEventConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    function u(t) {
      if (r("WAWebCallCollection").activeCall != null)
        return (e || (e = n("Promise"))).resolve();
      var a = o("WAWebVoipEventConstants").getChangeEvent(
        o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
      );
      return new (e || (e = n("Promise")))(function (e) {
        var n = !1,
          o = null,
          i = function () {
            n ||
              ((n = !0),
              r("WAWebCallCollection").off(a, l),
              o != null && window.clearTimeout(o),
              e());
          };
        function l() {
          r("WAWebCallCollection").activeCall != null && i();
        }
        (r("WAWebCallCollection").on(a, l),
          (o = window.setTimeout(i, s)),
          t.then(
            function (e) {
              e !== !0 && i();
            },
            function () {
              i();
            },
          ));
      });
    }
    ((l.STARTING_CALL_TIMEOUT_MS = s), (l.waitForStartingCallToSettle = u));
  },
  98,
);
