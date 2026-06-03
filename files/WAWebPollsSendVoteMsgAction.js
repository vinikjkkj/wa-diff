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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (r("WAWebWid").isNewsletter(t.id.remote)) {
            if (
              !o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPollsReceivingEnabled()
            ) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Newsletter polls are not supported yet",
                  ])),
              );
              return;
            }
            yield o("WAWebNewsletterSendVoteMsgAction").sendVote(t, n);
            return;
          }
          yield _(t, n);
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
          if (
            e instanceof o("WAWebNewsletterPollVotesModel").NewsletterPollVotes
          ) {
            yield o("WAWebNewsletterSendVoteMsgAction").resendVote(e);
            return;
          }
          yield _(
            o("WAWebFrontendPollVoteGetters").getParentMsg(e),
            new Set(e.selectedOptionLocalIds),
            e.msgKey,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                    id: yield r("WAWebMsgKey").newId(),
                    participant: o("WAWebMsgGetters").getIsGroupMsg(e.unsafe())
                      ? i
                      : void 0,
                  }),
            u = o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
            c = o("WATimeUtils").unixTimeMs(),
            d = {
              msgKey: s,
              parentMsgKey: u,
              selectedOptionLocalIds: Array.from(t),
              senderTimestampMs: c,
              t: Math.floor(c / 1e3),
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
                t: Math.floor(c / 1e3),
                ack: o("WAWebAck").ACK.CLOCK,
                read: !0,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              },
            );
          o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(f)
            ? (_ = f)
            : (_ = yield m(e, d, p));
          var g = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(
            _,
          );
          if (
            g.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
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
            : (y = o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                .REMOVE_VOTE),
            o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
              action: y,
              chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
              creationDateInSeconds: e.t,
              pollOptionsCount: e.pollOptions.length,
            }));
        })),
        f.apply(this, arguments)
      );
    }
    ((l.sendVote = s), (l.resendVote = c));
  },
  98,
);
