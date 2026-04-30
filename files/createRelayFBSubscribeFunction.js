__d(
  "createRelayFBSubscribeFunction",
  ["RelayFBSubscribeFunction"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.accessToken,
        r = e.actorID,
        o = e.queryResponseCache,
        a = e.requestStreamEnabled;
      return function (i, l, s) {
        var e;
        return n("RelayFBSubscribeFunction")(
          i,
          l,
          o,
          r,
          t,
          s == null ? void 0 : s.onSubscribe,
          s == null ? void 0 : s.onResume,
          s == null ? void 0 : s.onPause,
          s == null || (e = s.metadata) == null ? void 0 : e.streamOptions,
          a,
        );
      };
    }
    a.exports = e;
  },
  null,
);
