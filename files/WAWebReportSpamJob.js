__d(
  "WAWebReportSpamJob",
  [
    "WAJids",
    "WALogger",
    "WASmaxSpamGroupReportRPC",
    "WASmaxSpamIndividualReportRPC",
    "WASmaxSpamStatusReportRPC",
    "WAWebChatGetters",
    "WAWebGroupHistoryUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterReportUtils",
    "WAWebParseReportResponse",
    "WAWebPollCreationUtils",
    "WAWebReportUtils",
    "WAWebSpamUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5;
    function c(e, t, n) {
      for (
        var r = [], a = e.msgs.toArray().reverse(), i = t, l = 0;
        l < a.length && !(r.length >= t);
        l++
      ) {
        var s = a[l];
        if (
          !(
            (!o("WAWebSpamUtils").isSpamSupportedForMessageType(s.type) &&
              s.type !== o("WAWebMsgType").MSG_TYPE.ALBUM) ||
            o("WAWebMsgGetters").getIsBotResponse(s) ||
            (o("WAWebUserPrefsMeUser").isMeAccount(s.from) &&
              !o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(
                s,
              )) ||
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT_SPAM_REPORT,
              s.viewMode,
            )
          ) &&
          !(
            n &&
            ((o("WAWebChatGetters").getIsGroup(e) && !n.equals(s.author)) ||
              (o("WAWebChatGetters").getIsUser(e) && !n.equals(s.from)))
          )
        )
          if (s.type === o("WAWebMsgType").MSG_TYPE.ALBUM)
            r.push.apply(
              r,
              o("WAWebMessageAssociationUIUtils")
                .getHiddenAssociatedMessages(s.id)
                .slice(0, 4),
            );
          else if (
            s.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            s.pollContentType ===
              o("WAWebPollCreationUtils").PollContentType.IMAGE
          ) {
            r.push(s);
            var u = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(s.id);
            (r.push.apply(r, u), (i += u.length));
          } else r.push(s);
      }
      return r.slice(0, i);
    }
    function d(e) {
      var t, n;
      return (
        ((t = e.buttonsMessage) == null ? void 0 : t.buttons) != null &&
          (e.buttonsMessage = babelHelpers.extends({}, e.buttonsMessage, {
            buttons: e.buttonsMessage.buttons.map(function (e) {
              if (e.nativeFlowInfo) {
                var t,
                  n = JSON.parse(
                    (t = e.nativeFlowInfo.paramsJson) != null ? t : "{}",
                  );
                return (
                  delete n.reference_id,
                  delete n.total_amount,
                  babelHelpers.extends({}, e, {
                    nativeFlowInfo: babelHelpers.extends({}, e.nativeFlowInfo, {
                      paramsJson: JSON.stringify(n),
                    }),
                  })
                );
              }
              return e;
            }),
          })),
        ((n = e.messageContextInfo) == null ? void 0 : n.messageSecret) !=
          null &&
          (e.messageContextInfo = babelHelpers.extends(
            {},
            e.messageContextInfo,
            { messageSecret: null },
          )),
        e
      );
    }
    async function m(t, n) {
      var a = await o("WAWebReportUtils").getMessageMixinArgs(n);
      if (a == null)
        throw r("err")("report status failed due to unsupported msg type");
      var i = o("WAWebMsgGetters").getSender(n);
      if (i == null)
        throw r("err")("report status failed due to missing sender");
      var l = babelHelpers.extends({}, a, {
          messageParticipantMixinArgs: {
            messageParticipant: o("WAWebWidToJid").widToUserJid(i),
          },
        }),
        s = {
          spamListSpamFlow: t,
          spamListJid: o("WAJids").STATUS_JID,
          messageFrom: o("WAJids").STATUS_JID,
          messageRecipientMixinArgs: {
            messageTo: o("WAWebWidToJid").widToUserJid(n.to),
          },
          messageMixinArgs: l,
        },
        u = await o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(s);
      e: {
        var c = u;
        if (
          ((typeof c == "object" && c !== null) || typeof c == "function") &&
          c.name === "StatusReportResponseError" &&
          "value" in c
        ) {
          var d = c.value,
            m = parseInt(d.errorSpamIqErrors.value.code, 10),
            p = d.errorSpamIqErrors.value.text;
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "reportStatus: server response with ",
                  ", ",
                  "",
                ])),
              m,
              p,
            ),
            { errorCode: m, errorText: p }
          );
          break e;
        }
        if (
          ((typeof c == "object" && c !== null) || typeof c == "function") &&
          c.name === "StatusReportResponseSuccess" &&
          "value" in c
        ) {
          var _ = c.value;
          return _;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            c,
        );
      }
    }
    async function p(e, t) {
      var n,
        a = await o("WAWebReportUtils").getMessageMixinArgs(e);
      a != null &&
        (n = babelHelpers.extends(
          {
            messageSenderOrRecipientMixinGroupArgs: {
              messageSender: {
                messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
              },
            },
          },
          a,
        ));
      var i = o("WAWebMsgGetters").getSender(e);
      if (i == null)
        throw r("err")("report status failed due to missing sender");
      var l = {
          spamListSpamFlow: t,
          spamListJid: o("WAWebWidToJid").widToUserJid(i),
          messageArgs: n != null ? [n] : [],
        },
        s = await o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(l);
      return o("WAWebParseReportResponse").parseIndividualReportResponse(s);
    }
    async function _(e, t) {
      var n = {
          spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
          spamListSpamFlow: t,
          spamListSubject: e.formattedTitle,
        },
        r = await o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(n);
      return o("WAWebParseReportResponse").parseGroupReportResponse(r);
    }
    async function f(e, t, n) {
      var r = [];
      t != null ? (r = [t]) : (r = c(e, u, null));
      var a,
        i = await Promise.all(
          r.map(async function (t) {
            var n = await o("WAWebReportUtils").getMessageMixinArgs(t),
              r = o(
                "WAWebGroupHistoryUtils",
              ).shouldReportGroupHistoryBundleSender(t),
              i = await y(t, r);
            return (
              n != null &&
                (a = babelHelpers.extends(
                  { messageFrom: o("WAWebWidToJid").widToGroupJid(e.id) },
                  n,
                  i != null && {
                    messageParticipantMixinArgs: {
                      messageParticipant: i,
                      messageParticipantType: r
                        ? "group_history_sender"
                        : "original_sender",
                    },
                  },
                )),
              a
            );
          }),
        ),
        l = {
          spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
          spamListSpamFlow: n,
          spamListSubject: e.formattedTitle,
          messageArgs: i.filter(Boolean),
        },
        s = await o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(l);
      return o("WAWebParseReportResponse").parseGroupReportResponse(s);
    }
    async function g(e, t, n) {
      var r = [];
      t != null ? (r = [t]) : (r = c(e, u, e.id));
      var a,
        i = await Promise.all(
          r.map(async function (e) {
            var t = await o("WAWebReportUtils").getMessageMixinArgs(e);
            return (
              t != null &&
                (a = babelHelpers.extends(
                  {
                    messageSenderOrRecipientMixinGroupArgs: {
                      messageSender: {
                        messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
                      },
                    },
                  },
                  t,
                )),
              a
            );
          }),
        ),
        l = { spamListSpamFlow: n, messageArgs: i.filter(Boolean) },
        s = await o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(l);
      return o("WAWebParseReportResponse").parseIndividualReportResponse(s);
    }
    async function h(e, t, n) {
      var r;
      return (
        o("WAWebChatGetters").getIsNewsletter(e)
          ? n != null && o("WAWebMsgGetters").getIsNewsletterStatus(n)
            ? (r = await o(
                "WAWebNewsletterReportUtils",
              ).sendNewsletterStatusReport(e, n, t))
            : (r = await (o("WAWebNewsletterReportUtils")
                .sendNewsletterReport == null
                ? void 0
                : o("WAWebNewsletterReportUtils").sendNewsletterReport(
                    e,
                    n,
                    t,
                  )))
          : n != null && !o("WAWebChatGetters").getIsGroup(e)
            ? (r = await p(n, t))
            : e.isParentGroup === !0
              ? (r = await _(e, t))
              : o("WAWebChatGetters").getIsGroup(e)
                ? (r = await f(e, n, t))
                : (r = await g(e, n, t)),
        r
      );
    }
    async function y(e, t) {
      if (t) {
        var n = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
        return n != null
          ? o("WAWebWidToJid").widToUserJid(n)
          : (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getReportedAuthorJid: group history bundle sender is null",
                ])),
            ),
            null);
      }
      return e.author
        ? o("WAWebWidToJid").widToUserJid(e.author)
        : e.from.isUser()
          ? o("WAWebWidToJid").widToUserJid(e.from)
          : null;
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = u),
      (l.loadMsgsForSpamReport = c),
      (l.getSpamMessageProtobuf = d),
      (l.reportStatus = m),
      (l.reportSpam = h));
  },
  98,
);
