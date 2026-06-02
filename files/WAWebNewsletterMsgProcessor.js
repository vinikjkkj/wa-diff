__d(
  "WAWebNewsletterMsgProcessor",
  [
    "WATimeUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollsCreateOptionLocalIdMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.offline != null,
        n = e.type === "NewsletterRevoke",
        r = e.serverId,
        a = s(e.type),
        i =
          a && r != null
            ? await o("WAWebNewsletterDBUtils").getMessageByServerId(
                r,
                e.from.toJid(),
              )
            : null,
        l = a && i == null,
        d = await c(i, e.pollVote),
        m = {
          isNewMsg: !t && !n,
          addOnParentKey: a
            ? u({ addOnParentMsg: i, serverId: r, remote: e.from })
            : void 0,
          pollVotesAsLocalIds: d,
          latestEditSenderTimestampMs:
            e.msgEditT != null
              ? o("WATimeUtils").castToMillisTime(e.msgEditT)
              : null,
        };
      (e.isWamoSub != null &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled() &&
        (m.isWamoSub = e.isWamoSub),
        e.hasPaidPartnershipLabel != null &&
          o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
          (m.hasPaidPartnershipLabel = e.hasPaidPartnershipLabel));
      var p = o("WAWebNewsletterMsgUtils").mapMsgStanzaToMsgData(
          { msg: e, msgContext: m },
          "relay",
        ),
        _ = await o(
          "WAWebApiFilterAndReplaceMessages",
        ).filterAndReplaceMessages([p]),
        f = _.newMsgs,
        g = f[0];
      return { msgData: g, isOrphan: l };
    }
    function s(e) {
      switch (e) {
        case "NewsletterReaction":
        case "NewsletterReactionRevoke":
        case "NewsletterPollVote":
          return !0;
        default:
          return !1;
      }
    }
    function u(e) {
      var t = e.addOnParentMsg,
        n = e.remote,
        r = e.serverId;
      return t != null
        ? t.id
        : o("WAWebNewsletterDBUtils").craftNewsletterMsgKeyFromServerId(
            r,
            n.toJid(),
          );
    }
    async function c(e, t) {
      var n = e == null ? void 0 : e.pollOptions;
      if (!(n == null || t == null)) {
        var r = await o(
          "WAWebPollsCreateOptionLocalIdMap",
        ).createOptionLocalIdMap(n);
        return t.map(function (e) {
          return r.getLocalIdForHash(e.slice().buffer);
        });
      }
    }
    ((l.preprocessNewsletterMsg = e), (l.isAddOnType = s));
  },
  98,
);
