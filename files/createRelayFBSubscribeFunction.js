__d(
  "createRelayFBSubscribeFunction",
  ["RelayFBSubscribeFunction"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.accessToken,
        r = e.actorID,
        o = e.queryResponseCache;
      return function (a, i, l) {
        var e;
        return n("RelayFBSubscribeFunction")(
          a,
          i,
          o,
          r,
          t,
          l == null ? void 0 : l.onSubscribe,
          l == null ? void 0 : l.onResume,
          l == null ? void 0 : l.onPause,
          l == null || (e = l.metadata) == null ? void 0 : e.streamOptions,
        );
      };
    }
    a.exports = e;
  },
  null,
);
