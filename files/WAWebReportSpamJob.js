__d(
  "WAWebReportSpamJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5;
    function d(e, t, n) {
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
    function m(e) {
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield o("WAWebReportUtils").getMessageMixinArgs(n);
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
            u = yield o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(s);
          e: {
            var c = u;
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
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
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebReportUtils").getMessageMixinArgs(e);
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
            s = yield o(
              "WASmaxSpamIndividualReportRPC",
            ).sendIndividualReportRPC(l);
          return o("WAWebParseReportResponse").parseIndividualReportResponse(s);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
              spamListSpamFlow: t,
              spamListSubject: e.formattedTitle,
            },
            r = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(n);
          return o("WAWebParseReportResponse").parseGroupReportResponse(r);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          t != null ? (a = [t]) : (a = d(e, c, null));
          var i,
            l = yield (u || (u = n("Promise"))).all(
              a.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n =
                          yield o("WAWebReportUtils").getMessageMixinArgs(t),
                        r = o(
                          "WAWebGroupHistoryUtils",
                        ).shouldReportGroupHistoryBundleSender(t),
                        a = yield E(t, r);
                      return (
                        n != null &&
                          (i = babelHelpers.extends(
                            {
                              messageFrom: o("WAWebWidToJid").widToGroupJid(
                                e.id,
                              ),
                            },
                            n,
                            a != null && {
                              messageParticipantMixinArgs: {
                                messageParticipant: a,
                                messageParticipantType: r
                                  ? "group_history_sender"
                                  : "original_sender",
                              },
                            },
                          )),
                        i
                      );
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = {
              spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
              spamListSpamFlow: r,
              spamListSubject: e.formattedTitle,
              messageArgs: l.filter(Boolean),
            },
            m = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(s);
          return o("WAWebParseReportResponse").parseGroupReportResponse(m);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          t != null ? (a = [t]) : (a = d(e, c, e.id));
          var i,
            l = yield (u || (u = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t =
                        yield o("WAWebReportUtils").getMessageMixinArgs(e);
                      return (
                        t != null &&
                          (i = babelHelpers.extends(
                            {
                              messageSenderOrRecipientMixinGroupArgs: {
                                messageSender: {
                                  messageFrom: o("WAWebWidToJid").widToUserJid(
                                    e.from,
                                  ),
                                },
                              },
                            },
                            t,
                          )),
                        i
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = { spamListSpamFlow: r, messageArgs: l.filter(Boolean) },
            m = yield o(
              "WASmaxSpamIndividualReportRPC",
            ).sendIndividualReportRPC(s);
          return o("WAWebParseReportResponse").parseIndividualReportResponse(m);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          return (
            o("WAWebChatGetters").getIsNewsletter(e)
              ? n != null && o("WAWebMsgGetters").getIsNewsletterStatus(n)
                ? (r = yield o(
                    "WAWebNewsletterReportUtils",
                  ).sendNewsletterStatusReport(e, n, t))
                : (r = yield o("WAWebNewsletterReportUtils")
                    .sendNewsletterReport == null
                    ? void 0
                    : o("WAWebNewsletterReportUtils").sendNewsletterReport(
                        e,
                        n,
                        t,
                      ))
              : n != null && !o("WAWebChatGetters").getIsGroup(e)
                ? (r = yield f(n, t))
                : e.isParentGroup === !0
                  ? (r = yield h(e, t))
                  : o("WAWebChatGetters").getIsGroup(e)
                    ? (r = yield C(e, n, t))
                    : (r = yield v(e, n, t)),
            r
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        })),
        k.apply(this, arguments)
      );
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = c),
      (l.loadMsgsForSpamReport = d),
      (l.getSpamMessageProtobuf = m),
      (l.reportStatus = p),
      (l.reportSpam = R));
  },
  98,
);
