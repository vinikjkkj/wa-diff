__d(
  "WAWebCoexV2UsernameInfoUpdate",
  [
    "WAWebCoexV2RepresentedIdentityFromMessage",
    "WAWebSetUsernameJob",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (!r("justknobx")._("5968")) return null;
      var n = o(
        "WAWebCoexV2RepresentedIdentityFromMessage",
      ).maybeResolveCoexV2RepresentedIdentityFromMessage(e, t);
      if (n == null) return null;
      var a = n.representedIdentity;
      if (a == null || a.username == null)
        return { peerRecipientUsernameInfo: null, usernameInfoUpdate: null };
      var i = a.identitySource,
        l = a.representedUser,
        s = a.username;
      return i === "peer-recipient"
        ? {
            peerRecipientUsernameInfo: { userId: l, username: s },
            usernameInfoUpdate: null,
          }
        : {
            peerRecipientUsernameInfo: null,
            usernameInfoUpdate: o(
              "WAWebSetUsernameJob",
            ).maybeCreateSetUsernameInfoJobArg({
              userId: l,
              username: s,
              usernameCountryCode: e.senderCountryCode,
            }),
          };
    }
    l.maybeGetCoexV2UsernameInfoUpdatePlan = e;
  },
  98,
);
