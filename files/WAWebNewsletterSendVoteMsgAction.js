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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            : d(n, r, e.msgKey);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
            i = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              a.id.toJid(),
            ),
            l = yield o(
              "WAWebPollsCreateOptionLocalIdMap",
            ).createOptionLocalIdMap(t.pollOptions),
            u = Array.from(n, function (e) {
              return new Uint8Array(l.getHashForLocalId(e));
            }),
            c = t.unsafe(),
            d = c.serverId;
          if (d == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-polls] Message missing serverId",
                  ])),
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
            );
          var m = c.id,
            _ = o("WATimeUtils").castToMillisTime(
              o("WATimeUtils").unixTimeMs(),
            ),
            g = yield p({
              to: a.id,
              selectedOptionLocalIds: n,
              parentMsgKey: m,
              timestampMs: _,
              from: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              msgKey: r,
            }),
            h = new (o("WAWebMsgModel").Msg)(g),
            y = yield o("WAWebCRUDOperationsNewsletterMyVotes").getMyVote(
              a.id.toJid(),
              d,
            ),
            C = o(
              "WAWebNewsletterPollVotesModelCollection",
            ).updateOrCreatePollVote({
              msgKey: g.id,
              parentMsgKey: m,
              selectedOptionLocalIds: n,
              timestamp: _,
            });
          yield o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateChatPreviewFromVote({
            voteMsgObj: {
              ack: g.ack,
              senderTimestampMs: g.senderTimestampMs,
              sender: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              read: !0,
              msgKey: g.id,
              parentMsgKey: m,
              selectedOptionLocalIds: g.selectedOptionLocalIds,
              t: g.t,
            },
            parentMsgKey: m,
          });
          try {
            (yield o(
              "WAWebNewsletterUpdateMsgsRecordsJob",
            ).addNewsletterMsgsRecords([g]),
              (y == null ? void 0 : y.msgKey) != null &&
                (yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .remove(y.msgKey)),
              yield o(
                "WAWebCRUDOperationsNewsletterMyVotes",
              ).createOrUpdateMyVote({
                chatJid: a.id.toJid(),
                msgServerId: d,
                serverTimestampMs: _,
                votes: u.map(o("WAWebPollOptionHashUtils").bufferToHex),
                msgKey: h.id.toString(),
              }));
            var b = yield o(
              "WAWebNewsletterSendMessageJob",
            ).sendNewsletterMessageJob({
              type: "pollVote",
              newsletterJid: i,
              msg: h,
              parentMsgServerId: d,
              votes: u,
            });
            switch (
              (o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
                action: f(n, y),
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
                  yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                    chatJid: a.id.toJid(),
                    msgServerId: d,
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
                  yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                    chatJid: a.id.toJid(),
                    msgServerId: d,
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
              yield o("WAWebCRUDOperationsNewsletterMyVotes").updateMyVote({
                chatJid: a.id.toJid(),
                msgServerId: d,
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                    id: yield r("WAWebMsgKey").newId(),
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return e.size === 0
        ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.REMOVE_VOTE
        : t == null
          ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE
          : o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE;
    }
    ((l.resendVote = u), (l.sendVote = d));
  },
  98,
);
