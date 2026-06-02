__d(
  "WAWebUpdateNewsletterMsgUIAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WAJids").toNewsletterJid(t.toJid()),
        a = r("WAWebNewsletterCollection").get(t);
      if (
        (a == null &&
          ((a = await o(
            "WAWebQueryAndUpdateNewslettersMetadataAction",
          ).queryAndUpdateNewsletterMetadataAction(n)),
          a != null && r("WAWebNewsletterCollection").add(a)),
        a == null)
      ) {
        await o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(t);
        return;
      }
      if (e.type === "reaction") return s(e);
      if (e.type === "poll_update")
        return e.subtype === "poll_vote" ? u(e) : void 0;
      if (e.subtype === "admin_revoke") return c(e, t);
      e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        (await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
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
    }
    async function s(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e.reactionParentKey),
        n = e.reactionText;
      if (t != null) {
        var r = t.serverId;
        if (r != null) {
          o("WAWebNewsletterReactionCollection").updateOrCreateMessageReaction({
            parentMsg: t,
            reactionMsg: e,
            reactionCode: n,
          });
          var a = {
            msgKey: e.id.toString(),
            parentMsgKey: o("WAWebNewsletterDBUtils")
              .craftNewsletterMsgKeyFromServerId(r, e.from)
              .toString(),
            senderUserJid: o("WAWebUserPrefsMeUser").getMeUser().toString(),
            reactionText: n,
            timestamp: e.t * 1e3,
            orphan: 0,
            read: !0,
            ack: o("WAAckLevel").ACK.SENT,
          };
          await o(
            "WAWebReactionsMsgAction",
          ).addOrUpdateReactionsModelCollection(a, { allowNotify: !1 });
        }
      }
    }
    function u(e) {
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
    async function c(e, t) {
      var n,
        a =
          (n = r("WAWebNewsletterCollection").get(t)) == null
            ? void 0
            : n.msgs.get(e.protocolMessageKey);
      return a == null
        ? Promise.resolve()
        : (o(
            "WAWebUpdateLastAddOnPreviewChatAction",
          ).deleteModelsForLastAddOnPreview([a.id.toString()]),
          await o(
            "WAWebNewsletterMessageDeliveryUpdateAction",
          ).removeMessageDeliveryUpdates(
            o("WAWebFrontendMsgGetters").getChat(a),
            [a],
          ),
          Promise.resolve(
            o("WAWebRevokeMsgAction").revoke(a, {
              subtype: e.subtype,
              msgKey: e.id,
              sender: o("WAWebMsgGetters").getIsSentByMe(e)
                ? o("WAWebUserPrefsMeUser").getMeUser()
                : e.from,
              revokeTimestamp: e.t,
              viewMode: e.viewMode,
            }),
          ));
    }
    l.updateNewsletterMessageUI = e;
  },
  98,
);
