__d(
  "WAWebCoexV2RepresentedIdentityFromMessage",
  ["WAWebCoexV2GatingUtils", "WAWebCoexV2RepresentedIdentity"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
        e.author,
        e.metaFrom,
      )
        ? { representedIdentity: s(e, t) }
        : null;
    }
    function s(e, t) {
      return o("WAWebCoexV2RepresentedIdentity").getCoexV2RepresentedIdentity({
        author: e.author,
        metaFrom: e.metaFrom,
        peerRecipientLid: e.peerRecipientLid,
        peerRecipientPn: e.peerRecipientPn,
        peerRecipientUsername: e.peerRecipientUsername,
        senderPn: e.senderPn,
        senderUsername: e.username,
        targetChatJid: t == null ? void 0 : t.targetChatJid,
      });
    }
    ((l.maybeResolveCoexV2RepresentedIdentityFromMessage = e),
      (l.getCoexV2RepresentedIdentityFromMessage = s));
  },
  98,
);
