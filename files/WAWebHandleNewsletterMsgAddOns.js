__d(
  "WAWebHandleNewsletterMsgAddOns",
  [
    "WAAckLevel",
    "WAWebBackendApi",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebNewsletterDBUtils",
    "WAWebPollOptionHashUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      switch (e.type) {
        case "reaction":
          return s(e);
        case "poll_update":
          return u(e, t);
        default:
          return Promise.resolve();
      }
    }
    async function s(e) {
      var t = e.from,
        n = e.id,
        r = e.reactionText,
        a = e.serverId,
        i = e.t;
      if (!(a == null || i == null || t == null || r == null)) {
        var l = {
          msgKey: n.toString(),
          parentMsgKey: o("WAWebNewsletterDBUtils")
            .craftNewsletterMsgKeyFromServerId(a, t)
            .toString(),
          senderUserJid: o("WAWebUserPrefsMeUser").getMeUser().toJid(),
          reactionText: r,
          timestamp: i * 1e3,
          orphan: 0,
          read: !0,
          ack: o("WAAckLevel").ACK.SENT,
        };
        await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions([l]);
        var s = await o("WAWebNewsletterDBUtils").getMessageByServerId(
          a,
          t.toJid(),
        );
        s != null &&
          (await o("WAWebBackendApi").frontendFireAndForget(
            "updateChatPreviewFromReaction",
            { reactionMsgObj: l, parentMsgKey: s.id },
          ));
      }
    }
    async function u(e, t) {
      var n = e.from,
        r = e.id,
        a = e.selectedOptionLocalIds,
        i = e.serverId,
        l = e.t,
        s = t.pollVotes;
      if (!(i == null || l == null || n == null || s == null)) {
        var u = {
          chatJid: r.remote.toJid(),
          msgServerId: i,
          msgKey: e.id.toString(),
          serverTimestampMs: l * 1e3,
          t: l,
          votes: s.map(o("WAWebPollOptionHashUtils").bufferToHex),
        };
        await o("WAWebCRUDOperationsNewsletterMyVotes").createOrUpdateMyVote(u);
        var c = await o("WAWebNewsletterDBUtils").getMessageByServerId(
          i,
          n.toJid(),
        );
        c != null &&
          (await o("WAWebBackendApi").frontendFireAndForget(
            "updateChatPreviewFromVote",
            {
              voteMsgObj: {
                ack: o("WAAckLevel").ACK.SENT,
                read: !0,
                msgKey: e.id,
                parentMsgKey: c.id,
                selectedOptionLocalIds: a != null ? a : [],
                sender: o("WAWebUserPrefsMeUser").getMeUser(),
                senderTimestampMs: l * 1e3,
                t: l,
              },
              parentMsgKey: c.id,
            },
          ));
      }
    }
    l.maybeHandleNewsletterMsgAddOns = e;
  },
  98,
);
