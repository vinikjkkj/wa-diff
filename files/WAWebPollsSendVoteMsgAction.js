__d(
  "WAWebPollsSendVoteMsgAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebAddonSendMsgData",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterSendVoteMsgAction",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsCreatePollUpdateVoteMsg",
    "WAWebPollsPollVoteCollection",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebViewMode.flow",
    "WAWebWamEnumPollActionType",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      if (r("WAWebWid").isNewsletter(t.id.remote)) {
        if (
          !o("WAWebNewsletterGatingUtils").isNewsletterPollsReceivingEnabled()
        ) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Newsletter polls are not supported yet",
              ])),
          );
          return;
        }
        await o("WAWebNewsletterSendVoteMsgAction").sendVote(t, n);
        return;
      }
      await d(t, n);
    }
    async function u(e) {
      if (e instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes) {
        await o("WAWebNewsletterSendVoteMsgAction").resendVote(e);
        return;
      }
      await d(
        o("WAWebFrontendPollVoteGetters").getParentMsg(e),
        new Set(e.selectedOptionLocalIds),
        e.msgKey,
      );
    }
    async function c(e, t, n) {
      var r = babelHelpers.extends({}, t, {
        senderTimestampMs: o(
          "WAWebAddOnParseWebMsgInfo",
        ).getIncreasingLatestSenderTimestampMs(
          n == null ? void 0 : n.senderTimestampMs,
        ),
      });
      return o("WAWebPollsCreatePollUpdateVoteMsg").createPollUpdateVoteMsg(
        r,
        e,
      );
    }
    async function d(e, t, n) {
      var a = o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
        i = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          a,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        l = e.id.remote,
        s =
          n != null
            ? n
            : new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: l,
                id: await r("WAWebMsgKey").newId(),
                participant: o("WAWebMsgGetters").getIsGroupMsg(e.unsafe())
                  ? i
                  : void 0,
              }),
        u = o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
        d = o("WATimeUtils").unixTimeMs(),
        m = {
          msgKey: s,
          parentMsgKey: u,
          selectedOptionLocalIds: Array.from(t),
          senderTimestampMs: d,
          t: Math.floor(d / 1e3),
          sender: i,
          ack: o("WAWebAck").ACK.CLOCK,
          read: !0,
        },
        p = o("WAWebPollsPollVoteCollection")
          .PollVoteCollection.getForParentAddressingModeInsensitive([u])[0]
          .getVoteFromSenderAddressingModeInsensitive(i),
        _,
        f = babelHelpers.extends(
          { id: s },
          o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
            s,
            o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
          ),
          {
            kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
            type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            pollUpdateParentKey: o(
              "WAWebReferentialMsgKey",
            ).getReferentialMsgKey(e),
            selectedOptionLocalIds: Array.from(t),
            senderTimestampMs: o(
              "WAWebAddOnParseWebMsgInfo",
            ).getIncreasingLatestSenderTimestampMs(
              p == null ? void 0 : p.senderTimestampMs,
            ),
            t: Math.floor(d / 1e3),
            ack: o("WAWebAck").ACK.CLOCK,
            read: !0,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          },
        );
      o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(f)
        ? (_ = f)
        : (_ = await c(e, m, p));
      var g = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(_);
      if (
        g.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      ) {
        var h = o(
          "WAWebPollsPollVoteCollection",
        ).PollVoteCollection.getByMsgKey(s);
        throw (
          h != null &&
            ((h.ack = o("WAWebAck").ACK.FAILED), (h.isSendFailure = !0)),
          r("err")("Vote send error")
        );
      }
      var y;
      (t.size > 0
        ? (y = p
            ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE
            : o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE)
        : (y = o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.REMOVE_VOTE),
        o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
          action: y,
          chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
          creationDateInSeconds: e.t,
          pollOptionsCount: e.pollOptions.length,
        }));
    }
    ((l.sendVote = s), (l.resendVote = u));
  },
  98,
);
