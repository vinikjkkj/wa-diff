__d(
  "WAWebVoipHandleLidCallerDisplayInfo",
  ["WAPromiseEach", "WAWebVoipLidUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.trim();
      return t == null || t === "" ? null : t;
    }
    function s(t) {
      var n = t.split(";"),
        r = [];
      return (
        n.forEach(function (t) {
          if (t.trim()) {
            var n = t.split(","),
              a = n[0],
              i = n[1],
              l = n[2],
              s = n[3];
            r.push({
              pn: o("WAWebWidFactory").createUserWidOrThrow(a),
              lid: o("WAWebWidFactory").createUserWidOrThrow(i),
              displayName: e(l),
              username: e(s),
            });
          }
        }),
        r
      );
    }
    async function u(e) {
      await o("WAPromiseEach").promiseEach(e, async function (t, n) {
        var r = n === e.length - 1,
          a = t.displayName,
          i = t.lid,
          l = t.pn,
          s = t.username;
        await o("WAWebVoipLidUtils").attemptPersistLidMappingAndUserAttributes({
          jid: i,
          phoneNumber: l,
          username: s,
          pushName: a,
          flushImmediately: r,
        });
      });
    }
    async function c(e) {
      var t = s(e);
      await u(t);
    }
    ((l.parseWAWebVoipLidCallerDisplayInfoPayload = s),
      (l.handleWAWebVoipLidCallerDisplayInfo = c));
  },
  98,
);
