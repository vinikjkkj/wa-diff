__d(
  "WAWebNewsletterMsgProcessor",
  [
    "WATimeUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebPollsCreateOptionLocalIdMap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.offline != null,
            n = e.type === "NewsletterRevoke",
            r = e.serverId,
            a = u(e.type),
            i =
              a && r != null
                ? yield o("WAWebNewsletterDBUtils").getMessageByServerId(
                    r,
                    e.from.toJid(),
                  )
                : null,
            l = a && i == null,
            s = yield d(i, e.pollVote),
            m = {
              isNewMsg: !t && !n,
              addOnParentKey: a
                ? c({ addOnParentMsg: i, serverId: r, remote: e.from })
                : void 0,
              pollVotesAsLocalIds: s,
              latestEditSenderTimestampMs:
                e.msgEditT != null
                  ? o("WATimeUtils").castToMillisTime(e.msgEditT)
                  : null,
            };
          (e.isWamoSub != null &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isWamoSubMessagesProcessingEnabled() &&
            (m.isWamoSub = e.isWamoSub),
            e.hasPaidPartnershipLabel != null &&
              o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
              (m.hasPaidPartnershipLabel = e.hasPaidPartnershipLabel));
          var p = o("WAWebNewsletterMsgUtils").mapMsgStanzaToMsgData(
              { msg: e, msgContext: m },
              "relay",
            ),
            _ = yield o(
              "WAWebApiFilterAndReplaceMessages",
            ).filterAndReplaceMessages([p]),
            f = _.newMsgs,
            g = f[0];
          return { msgData: g, isOrphan: l };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      switch (e) {
        case "NewsletterReaction":
        case "NewsletterReactionRevoke":
        case "NewsletterPollVote":
          return !0;
        default:
          return !1;
      }
    }
    function c(e) {
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e == null ? void 0 : e.pollOptions;
          if (!(n == null || t == null)) {
            var r = yield o(
              "WAWebPollsCreateOptionLocalIdMap",
            ).createOptionLocalIdMap(n);
            return t.map(function (e) {
              return r.getLocalIdForHash(e.slice().buffer);
            });
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.preprocessNewsletterMsg = e), (l.isAddOnType = u));
  },
  98,
);
