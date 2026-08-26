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
    "WAWebLidMeUserForChat",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterPollVotesModel",
    "WAWebNewsletterSendVoteMsgAction",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsCreatePollUpdateVoteMsg",
    "WAWebPollsDailyStatsUtils",
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
            i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
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
          var h = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(
            _,
          );
          if (
            h.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          ) {
            var y = o(
              "WAWebPollsPollVoteCollection",
            ).PollVoteCollection.getByMsgKey(s);
            throw (
              y != null &&
                ((y.ack = o("WAWebAck").ACK.FAILED), (y.isSendFailure = !0)),
              r("err")("Vote send error")
            );
          }
          var C;
          (t.size > 0
            ? (C = p
                ? o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.CHANGE_VOTE
                : o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VOTE)
            : (C = o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                .REMOVE_VOTE),
            o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(
              babelHelpers.extends(
                {
                  action: C,
                  chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
                },
                o(
                  "WAWebPollsActionsMetricUtils",
                ).getPollMetricFieldsFromCreationMsg(e),
              ),
            ),
            o("WAWebPollsDailyStatsUtils").incrementPollsDailyStat(
              e,
              g(t, p != null),
              i,
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return (function (e) {
        if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === 0)
          return "vote_delete";
        if (Array.isArray(e) && e.length === 2 && e[0] === !1) {
          var t = e[1];
          if (t > 0) return "vote";
        }
        return "vote_change";
      })([t, e.size]);
    }
    ((l.sendVote = s), (l.resendVote = c));
  },
  98,
);
