__d(
  "WAWebMsgSendFailIcon.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebFailIcon.react",
    "WAWebFailedMessageEditResendModal.react",
    "WAWebFailedMessageModal.react",
    "WAWebFbtIntlList",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebPinMsgConstants",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebPollsRestoreLastSuccessfulVote",
    "WAWebPollsSendVoteMsgAction",
    "WAWebReactionsMsgAction",
    "WAWebReactionsUtils",
    "WAWebSendCommentMessageAction",
    "WAWebSendEventResponseMsgAction",
    "WAWebSendMsgResultAction",
    "WAWebSendPinMessageAction",
    "WAWebStateUtils",
    "err",
    "react",
    "useWAWebEventResponsesToResend",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
    "useWAWebPinsToResend",
    "useWAWebPollVotesToResend",
    "useWAWebReactionsByMe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = f || (f = o("react"));
    function h(t) {
      var n = t.displayType,
        a = t.msgs,
        i = t.showForAddOns,
        l = t.showForMessages,
        d = r("WANullthrows")(a[0]),
        m = o("useWAWebMsgValues").useMsgValues(d.id, [
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        p = m[0],
        _ = o("WAWebFrontendMsgGetters").getChat(d.unsafe()),
        f = l ? a : [],
        h = r("useWAWebEventTargetValue")(
          f,
          "change:ack change:isSendFailure",
          function () {
            return f.filter(function (e) {
              return o("WAWebMsgGetters").getIsFailed(e);
            });
          },
        ),
        v = f[0] != null && o("WAWebMsgGetters").getIsEdited(f[0]),
        S = i ? a : [],
        R = S.map(function (e) {
          return e.id;
        }),
        E = r("useWAWebReactionsByMe")(
          R,
          a.some(function (e) {
            return o("WAWebMsgGetters").getHasReaction(e);
          }),
        ),
        k = r("useWAWebEventTargetValue")(E, "change:isFailed", function () {
          return E.filter(function (e) {
            return e.isFailed;
          });
        }),
        I = S[0],
        T = r("useWAWebPollVotesToResend")(I.unsafe()),
        D = r("useWAWebPinsToResend")(R),
        x = r("useWAWebEventResponsesToResend")(R);
      if (
        h.length === 0 &&
        k.length === 0 &&
        T.length === 0 &&
        D.length === 0 &&
        x.length === 0
      )
        return null;
      var $ = function () {
          v && k.length === 0
            ? (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MsgSendFailIcon:handleClick: edit send failure",
                  ])),
              ),
              y(d, _))
            : L(T)
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "MsgSendFailIcon:handleClick: ended poll vote failure",
                    ])),
                ),
                b(T))
              : (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "MsgSendFailIcon:handleClick: generic send failure",
                    ])),
                ),
                C({
                  messagesToResend: h,
                  reactionsToResend: k,
                  votesToResend: T,
                  pinsToResend: D,
                  eventResponsesToResend: x,
                  commentsToResend: [],
                }));
        },
        P = s._(/*BTDS*/ "Something went wrong. Click to learn more.");
      return g.jsx(r("WAWebFailIcon.react"), {
        displayType: n,
        tooltip: P,
        ariaLabel: P,
        fromMe: p,
        onClick: $,
        isGroupChatProfilePictureDisplayed: !0,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      var n = o("WAWebMsgActionCapability").canEditText(e.unsafe()),
        a = n
          ? g.jsx(r("WAWebFailedMessageEditResendModal.react"), {
              failedEditedMsg: e.unsafe(),
            })
          : g.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
              chat: t,
              msgList: [e.unsafe()].map(o("WAWebStateUtils").unproxy),
            });
      o("WAWebModalManager").ModalManager.open(a);
    }
    function C(e) {
      var t = v(e),
        n = e.messagesToResend[0],
        a = n != null ? o("WAWebFrontendMsgGetters").getChat(n.unsafe()) : null,
        i =
          n != null &&
          (o("WAWebMsgGetters").getBroadcastId(n) != null ||
            (a != null && o("WAWebChatGetters").getIsBroadcast(a)));
      o("WAWebModalManager").ModalManager.open(
        g.jsx(r("WAWebFailedMessageModal.react"), {
          text: t,
          resend: i
            ? void 0
            : function () {
                S(e);
              },
        }),
      );
    }
    function b(e) {
      var t = R(e),
        n = s._(/*BTDS*/ "The poll has now ended.");
      o("WAWebModalManager").ModalManager.open(
        g.jsx(r("WAWebFailedMessageModal.react"), {
          title: t,
          text: n,
          onDelete: function () {
            return e.forEach(function (e) {
              e instanceof o("WAWebPollsPollVoteModel").PollVote &&
                o(
                  "WAWebPollsRestoreLastSuccessfulVote",
                ).restoreLastSuccessfulVote(e);
            });
          },
        }),
      );
    }
    function v(e) {
      var t = e.commentsToResend,
        n = e.eventResponsesToResend,
        a = e.messagesToResend,
        i = e.pinsToResend,
        l = e.reactionsToResend,
        u = e.votesToResend,
        c = l.length + u.length + i.length + n.length,
        d = a.length + c;
      if (a.length > 0 && d === a.length)
        return s._(/*BTDS*/ "Your message was not sent.");
      if (a.length > 0)
        return s._(
          /*BTDS*/ "Your message and actions on this message were not sent.",
        );
      if (l.length === c) {
        var m = r("WAWebFbtIntlList")(
          l.map(function (e) {
            return e.reactionText;
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        );
        return l.length > 2
          ? s._(
              /*BTDS*/ '_j{"*":"{count} reactions weren\'t sent","_1":"1 reaction wasn\'t sent"}',
              [s._plural(l.length, "count")],
            )
          : s._(
              /*BTDS*/ '_j{"*":"Your {reactions} reactions weren\'t sent","_1":"Your {reactions} reaction was not sent"}',
              [s._plural(l.length), s._param("reactions", m)],
            );
      }
      if (u.length === c) return R(u);
      if (i.length === c) {
        var p = i[0];
        return p.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN
          ? s._(/*BTDS*/ "Could not pin.")
          : s._(/*BTDS*/ "Could not unpin.");
      }
      if (n.length === c) return s._(/*BTDS*/ "Your response was not sent.");
      if (t.length === c) return s._(/*BTDS*/ "Your comment was not sent.");
      if (c > 0)
        return s._(/*BTDS*/ "Your actions on this message were not sent.");
      throw r("err")(
        "Unhandled case: " +
          a.length +
          " messages, " +
          l.length +
          " reactions, " +
          u.length +
          " votes, " +
          d +
          " total.",
      );
    }
    function S(e) {
      var t = e.commentsToResend,
        r = e.eventResponsesToResend,
        a = e.messagesToResend,
        i = e.pinsToResend,
        l = e.reactionsToResend,
        s = e.votesToResend;
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "FailedMessageModal:resend: resend failed messages and add-ons, ",
            " messages, ",
            " reactions, ",
            " votes, ",
            " pins, ",
            " event responses, ",
            " comments",
          ])),
        a.length,
        l.length,
        s.length,
        i.length,
        r.length,
        t.length,
      );
      var u = 0,
        c = a.map(function (e) {
          return e
            .resend()
            .then(function (e) {
              e === o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN &&
                u++;
            })
            .catch(function (e) {
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "FailedMessageModal:resend: resend failure ",
                      "",
                    ])),
                  e,
                )
                .tags("messaging");
            });
        });
      ((_ || (_ = n("Promise"))).allSettled(c).then(function () {
        u > 0 &&
          o("WALogger")
            .LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "FailedMessageModal:resend: ",
                  " failures with SendMsgResult.ERROR_UNKNOWN",
                ])),
              u,
            )
            .tags("messaging");
      }),
        l.forEach(function (e) {
          var t = o("WAWebReactionsUtils").reactionSenderToReactionUpdate(e);
          o(
            "WAWebReactionsMsgAction",
          ).resendUpdateFailedPropsForSentReactionsDBAndModel(t);
        }),
        s.forEach(o("WAWebPollsSendVoteMsgAction").resendVote),
        i.forEach(o("WAWebSendPinMessageAction").resendPinInChatMsg),
        r.forEach(o("WAWebSendEventResponseMsgAction").resendEventResponseMsg),
        t.forEach(o("WAWebSendCommentMessageAction").resendComment));
    }
    function R(e) {
      var t = e[0],
        n =
          t instanceof o("WAWebPollsPollVoteModel").PollVote
            ? o("WAWebPollVoteGetters").getIsUnvote(t)
            : t.isUnvote;
      return n
        ? s._(/*BTDS*/ "Your vote change couldn't save")
        : s._(/*BTDS*/ "Your vote couldn't save");
    }
    function L(e) {
      return e.some(function (e) {
        if (!(e instanceof o("WAWebPollsPollVoteModel").PollVote)) return !1;
        var t = o("WAWebFrontendPollVoteGetters").getParentMsg(e),
          n = o("WAWebMsgGetters").getPollEndTime(t);
        return n != null && n <= o("WAWebClock").Clock.getServerTimeMs();
      });
    }
    ((l.MsgSendFailIcon = h),
      (l.showResendDialog = C),
      (l.showEndedPollVoteDialog = b));
  },
  226,
);
