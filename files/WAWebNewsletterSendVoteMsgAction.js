__d(
  "WAWebNewsletterSendVoteMsgAction",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebCRUDOperationsNewsletterMyVotes",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterPollVotesModelCollection",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollOptionHashUtils",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebSchemaMessage",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t,
        n =
          (t = o("WAWebMsgCollection").MsgCollection.get(e.id)) == null
            ? void 0
            : t.safe();
      if (n == null)
        return o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED;
      var r = e.myVote;
      return n.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
        ? o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
        : c(n, r, e.msgKey);
    }
    async function c(t, n, r) {
      var a = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
          a.id.toJid(),
        ),
        l = await o("WAWebPollsCreateOptionLocalIdMap").createOptionLocalIdMap(
          t.pollOptions,
        ),
        u = Array.from(n, function (e) {
          return new Uint8Array(l.getHashForLocalId(e));
        }),
        c = t.unsafe(),
        p = c.serverId;
      if (p == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter-polls] Message missing serverId",
              ])),
          ),
          o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
        );
      var _ = c.id,
        f = o("WATimeUtils").castToMillisTime(o("WATimeUtils").unixTimeMs()),
        g = await d({
          to: a.id,
          selectedOptionLocalIds: n,
          parentMsgKey: _,
          timestampMs: f,
          from: o("WAWebUserPrefsMeUser").getMeUser(),
          msgKey: r,
        }),
        h = new (o("WAWebMsgModel").Msg)(g),
        y = await o("WAWebCRUDOperationsNewsletterMyVotes").getMyVote(
          a.id.toJid(),
          p,
        ),
        C = o("WAWebNewsletterPollVotesModelCollection").updateOrCreatePollVote(
          {
            msgKey: g.id,
            parentMsgKey: _,
            selectedOptionLocalIds: n,
            timestamp: f,
          },
        );
      await o(
        "WAWebNewsletterBridgeApi",
      ).NewsletterBridgeApi.updateChatPreviewFromVote({
        voteMsgObj: {
          ack: g.ack,
          senderTimestampMs: g.senderTimestampMs,
          sender: o("WAWebUserPrefsMeUser").getMeUser(),
          read: !0,
          msgKey: g.id,
          parentMsgKey: _,
          selectedOptionLocalIds: g.selectedOptionLocalIds,
          t: g.t,
        },
        parentMsgKey: _,
      });
      try {
        (await o(
          "WAWebNewsletterUpdateMsgsRecordsJob",
        ).addNewsletterMsgsRecords([g]),
          (y == null ? void 0 : y.msgKey) != null &&
            (await o("WAWebSchemaMessage").getMessageTable().remove(y.msgKey)),
          await o("WAWebCRUDOperationsNewsletterMyVotes").createOrUpdateMyVote({
            chatJid: a.id.toJid(),
            msgServerId: p,
            serverTimestampMs: f,
            votes: u.map(o("WAWebPollOptionHashUtils").bufferToHex),
            msgKey: h.id.toString(),
          }));
        var b = await o(
          "WAWebNewsletterSendMessageJob",
        ).sendNewsletterMessageJob({
          type: "pollVote",
          newsletterJid: i,
          msg: h,
          parentMsgServerId: p,
          votes: u,
        });
        switch (
          (o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
            action: m(n, y),
            chat: o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
            creationDateInSeconds: t.t,
            pollOptionsCount: t.pollOptions.length,
          }),
          b.success)
        ) {
          case !0:
            return (
              (C.ack = o("WAAckLevel").ACK.SENT),
              h.updateAck(o("WAAckLevel").ACK.SENT),
              await o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                chatJid: a.id.toJid(),
                msgServerId: p,
                ack: o("WAAckLevel").ACK.SENT,
                t: b.ack.t,
              }),
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            );
          case !1:
            return (
              (C.isSendFailure = !0),
              (C.ack = o("WAAckLevel").ACK.FAILED),
              h.updateAck(o("WAAckLevel").ACK.FAILED),
              await o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                chatJid: a.id.toJid(),
                msgServerId: p,
                ack: o("WAAckLevel").ACK.FAILED,
                t: b.ack.t,
              }),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
            );
        }
      } catch (e) {
        throw (
          h.updateAck(o("WAAckLevel").ACK.FAILED),
          (C.isSendFailure = !0),
          await o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
            chatJid: a.id.toJid(),
            msgServerId: p,
            ack: o("WAAckLevel").ACK.FAILED,
          }),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-polls] Failed to send poll vote",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-polls-failed-to-send-vote"),
          e
        );
      }
    }
    async function d(e) {
      var t = e.from,
        n = e.msgKey,
        a = e.parentMsgKey,
        i = e.selectedOptionLocalIds,
        l = e.timestampMs,
        s = e.to;
      return {
        from: t,
        type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
        kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
        subtype: "poll_vote",
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        id:
          n != null
            ? n
            : new (r("WAWebMsgKey"))({
                from: t,
                id: await r("WAWebMsgKey").newId(),
                to: s,
              }),
        t: Math.floor(l / 1e3),
        pollUpdateParentKey: a,
        selectedOptionLocalIds: Array.from(i),
        senderTimestampMs: l,
        ack: o("WAAckLevel").ACK.CLOCK,
        to: s,
        read: !0,
      };
    }
    function m(e, t) {
      return e.size === 0
        ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.REMOVE_VOTE
        : t == null
          ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE
          : o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE;
    }
    ((l.resendVote = u), (l.sendVote = c));
  },
  98,
);
