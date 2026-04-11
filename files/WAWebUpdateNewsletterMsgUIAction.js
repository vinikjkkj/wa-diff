__d(
  "WAWebUpdateNewsletterMsgUIAction",
  [
    "Promise",
    "WAAckLevel",
    "WAJids",
    "WATimeUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterMessageDeliveryUpdateAction",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterReactionCollection",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebReactionsMsgAction",
    "WAWebRevokeMsgAction",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").toNewsletterJid(t.toJid()),
            a = r("WAWebNewsletterCollection").get(t);
          if (
            (a == null &&
              ((a = yield o(
                "WAWebQueryAndUpdateNewslettersMetadataAction",
              ).queryAndUpdateNewsletterMetadataAction(n)),
              a != null && r("WAWebNewsletterCollection").add(a)),
            a == null)
          ) {
            yield o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t);
            return;
          }
          if (e.type === "reaction") return c(e);
          if (e.type === "poll_update")
            return e.subtype === "poll_vote" ? m(e) : void 0;
          if (e.subtype === "admin_revoke") return p(e, t);
          e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            (yield o(
              "WAWebMsgCollection",
            ).MsgCollection.processMultipleMessages(
              a.id,
              [
                babelHelpers.extends(
                  {},
                  o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
                  { recvFresh: !0, isNewMsg: !0 },
                ),
              ],
              {},
              "updateNewsletterMessageUI",
              a.msgs,
              !0,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(
              e.reactionParentKey,
            ),
            n = e.reactionText;
          if (t != null) {
            var r = t.serverId;
            if (r != null) {
              o(
                "WAWebNewsletterReactionCollection",
              ).updateOrCreateMessageReaction({
                parentMsg: t,
                reactionMsg: e,
                reactionCode: n,
              });
              var a = {
                msgKey: e.id.toString(),
                parentMsgKey: o("WAWebNewsletterDBUtils")
                  .craftNewsletterMsgKeyFromServerId(r, e.from)
                  .toString(),
                senderUserJid: o("WAWebUserPrefsMeUser")
                  .getMePnUserOrThrow_DO_NOT_USE()
                  .toString(),
                reactionText: n,
                timestamp: e.t * 1e3,
                orphan: 0,
                read: !0,
                ack: o("WAAckLevel").ACK.SENT,
              };
              yield o(
                "WAWebReactionsMsgAction",
              ).addOrUpdateReactionsModelCollection(a, { allowNotify: !1 });
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (e.pollUpdateParentKey != null) {
        var t = o("WAWebMsgCollection").MsgCollection.get(
          e.pollUpdateParentKey,
        );
        if (!(t == null || e.type !== o("WAWebMsgType").MSG_TYPE.POLL_UPDATE)) {
          var n = e.senderTimestampMs;
          o("WAWebNewsletterPollVotesModelCollection").updateOrCreatePollVote({
            msgKey: e.id,
            parentMsgKey: t.id,
            selectedOptionLocalIds: new Set(e.selectedOptionLocalIds),
            timestamp:
              n != null
                ? o("WATimeUtils").castToMillisTime(n)
                : o("WATimeUtils").castUnixTimeToMillisTime(
                    o("WATimeUtils").castToUnixTime(e.t),
                  ),
          });
        }
      }
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l =
              (i = r("WAWebNewsletterCollection").get(a)) == null
                ? void 0
                : i.msgs.get(t.protocolMessageKey);
          return l == null
            ? (e || (e = n("Promise"))).resolve()
            : (o(
                "WAWebUpdateLastAddOnPreviewChatAction",
              ).deleteModelsForLastAddOnPreview([l.id.toString()]),
              yield o(
                "WAWebNewsletterMessageDeliveryUpdateAction",
              ).removeMessageDeliveryUpdates(
                o("WAWebFrontendMsgGetters").getChat(l),
                [l],
              ),
              (e || (e = n("Promise"))).resolve(
                o("WAWebRevokeMsgAction").revoke(l, {
                  subtype: t.subtype,
                  msgKey: t.id,
                  sender: o("WAWebMsgGetters").getIsSentByMe(t)
                    ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
                    : t.from,
                  revokeTimestamp: t.t,
                  viewMode: t.viewMode,
                }),
              ));
        })),
        _.apply(this, arguments)
      );
    }
    l.updateNewsletterMessageUI = s;
  },
  98,
);
