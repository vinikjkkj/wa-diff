__d(
  "WAWebLabyrinthLocalIdentity",
  [
    "WAResultOrError",
    "WAWebLabyrinthCanonicalUserFbid",
    "WAWebLabyrinthLocalDeviceId",
    "WAWebLabyrinthOwnerAccountId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebLabyrinthLocalDeviceId").getMaybeLabyrinthLocalDeviceId();
      if (e == null)
        return o("WAResultOrError").makeError({
          kind: "missing-local-device-id",
        });
      var t = o("WAWebLabyrinthOwnerAccountId").getMaybeOwnerAccountId();
      if (t == null)
        return o("WAResultOrError").makeError({
          kind: "missing-local-account-id",
        });
      var n = o(
        "WAWebLabyrinthCanonicalUserFbid",
      ).getMaybeWaCanonicalUserFbid();
      return n == null
        ? o("WAResultOrError").makeError({
            kind: "missing-wa-canonical-user-fbid",
          })
        : o("WAResultOrError").makeResult({
            localDeviceId: e,
            ownerAccountId: t,
            waCanonicalUserFbid: n,
          });
    }
    function s(e) {
      var t = o("WAWebLabyrinthLocalDeviceId").getMaybeLabyrinthLocalDeviceId();
      return (
        t != null &&
        t === e.localDeviceId &&
        o("WAWebLabyrinthOwnerAccountId").isCurrentAccount(e.ownerAccountId)
      );
    }
    ((l.getLabyrinthLocalIdentity = e), (l.isCurrentLabyrinthIdentity = s));
  },
  98,
);
