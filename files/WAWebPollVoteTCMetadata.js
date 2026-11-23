__d(
  "WAWebPollVoteTCMetadata",
  [
    "WALogger",
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        return await u(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to build outgoing poll vote metadata",
                ])),
            )
            .sendLogs("poll-tc-vote-metadata-failed"),
          null
        );
      }
    }
    async function u(e) {
      var t,
        n = o("WAWebMsgGetters").getPollName(e);
      if (
        !o("WAWebPollsGatingUtils").isPollTCSendingEnabled() ||
        o("WAWebMsgGetters").getId(e).remote.isNewsletter() ||
        n == null ||
        n.length === 0 ||
        d(e)
      )
        return null;
      var r =
          (t = o("WAWebMsgGetters").getLatestEditMsgKey(e)) == null
            ? void 0
            : t.id,
        a = await o("WAWebPollNameHashUtils").tryComputePollNameHash(n);
      return a == null
        ? null
        : r != null && r.length > 0
          ? { pollNameHash: a, lastEditStanzaId: r }
          : { pollNameHash: a };
    }
    function c(e) {
      var t = e == null ? void 0 : e.pollNameHash;
      if (t != null) {
        var n = e == null ? void 0 : e.lastEditStanzaId;
        return n != null && n.length > 0
          ? { pollNameHash: new Uint8Array(t), lastEditStanzaId: n }
          : { pollNameHash: new Uint8Array(t) };
      }
    }
    function d(e) {
      var t, n;
      return (
        ((t = o("WAWebMsgGetters").getLatestEditMsgKey(e)) == null
          ? void 0
          : t.fromMe) === !0 &&
        ((n = o("WAWebMsgGetters").getAck(e)) != null
          ? n
          : o("WAWebAck").ACK.CLOCK) < o("WAWebAck").ACK.SENT
      );
    }
    ((l.buildOutgoingPollVoteTCMetadata = s),
      (l.pollVoteTCMetadataFromProto = c));
  },
  98,
);
