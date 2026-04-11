__d(
  "WAWebPushNameBridge",
  [
    "Promise",
    "WASendPresenceStatusProtocol",
    "WATimeUtils",
    "WAWebPushNameSync",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (t) {
        var a = o("WATimeUtils").unixTimeMs(),
          i = r("WAWebPushNameSync").getPushnameMutation(a, t);
        return (
          o("WASendPresenceStatusProtocol").sendPresenceStatusProtocol({
            name: t,
          }),
          o("WAWebSyncdCoreApi").lockForSync([], [i], function () {
            return (e || (e = n("Promise"))).resolve();
          })
        );
      }
      return (e || (e = n("Promise"))).resolve();
    }
    l.default = s;
  },
  98,
);
