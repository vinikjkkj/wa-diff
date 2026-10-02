__d(
  "WACreateHandleServerSyncNotificationBranch",
  [
    "Promise",
    "WAResultOrError",
    "WASmaxSyncdNewPatchRPC",
    "WATimeUtils",
    "WAUnknownStanzaError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r,
        a = (r = t.syncd) == null ? void 0 : r.handleSyncdNewPatchNotification;
      return function (r) {
        if (a == null)
          return (e || (e = n("Promise"))).resolve(
            o("WAUnknownStanzaError").unknownStanzaError,
          );
        var t = o("WASmaxSyncdNewPatchRPC").receiveNewPatchRPC(r),
          i = t.makeNewPatchResponseClientAck,
          l = t.parsedRequest,
          s = l.collection,
          u = l.id,
          c = l.offline,
          d = l.t,
          m = new Map(
            s
              .map(function (e) {
                var t = e.name,
                  n = e.version;
                return [t, n];
              })
              .filter(Boolean),
          );
        return a({
          makeAck: i,
          collections: m,
          offline: c,
          id: u,
          serverTs: o("WATimeUtils").castToUnixTime(d),
        }).then(o("WAResultOrError").makeResult);
      };
    }
    l.createHandleServerSyncNotification = s;
  },
  98,
);
