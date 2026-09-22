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
    "WAWebMessageAssociation.flow",
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
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  !o(
                    "WAWebGroupHistoryUtils",
                  ).shouldReportGroupHistoryBundleSender(s)) ||
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
              else if (s.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                r.push(s);
                var u =
                  s.pollContentType ===
                  o("WAWebPollCreationUtils").PollContentType.IMAGE
                    ? o(
                        "WAWebMessageAssociationUIUtils",
                      ).getHiddenAssociatedMessages(s.id)
                    : [];
                (r.push.apply(r, u), (i += u.length));
              } else r.push(s);
          }
          return b(r.slice(0, i));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield o("WAWebReportUtils").getMessageMixinArgs(e),
            i = a != null ? yield y(e) : [],
            l = yield (u || (u = n("Promise"))).all(
              i.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o("WAWebReportUtils").getMessageMixinArgs(
                        e,
                        { allowAssociatedMessage: !0 },
                      );
                      return t != null
                        ? babelHelpers.extends(
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
                          )
                        : null;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = [];
          (a != null &&
            s.push(
              babelHelpers.extends(
                {
                  messageSenderOrRecipientMixinGroupArgs: {
                    messageSender: {
                      messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
                    },
                  },
                },
                a,
              ),
            ),
            l.forEach(function (e) {
              e != null && s.push(e);
            }));
          var c = o("WAWebMsgGetters").getSender(e);
          if (c == null)
            throw r("err")("report status failed due to missing sender");
          var d = {
              spamListSpamFlow: t,
              spamListJid: o("WAWebWidToJid").widToUserJid(c),
              messageArgs: s,
            },
            m = yield o(
              "WASmaxSpamIndividualReportRPC",
            ).sendIndividualReportRPC(d);
          return o("WAWebParseReportResponse").parseIndividualReportResponse(m);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) return [];
          if (!o("WAWebSpamUtils").isSpamSupportedForMessageType(e.type))
            return [];
          var n = ((t = e.pollOptions) != null ? t : []).flatMap(function (e) {
              return e.addOptionMsgKey != null ? [e.addOptionMsgKey] : [];
            }),
            r = yield o(
              "WAWebMessageAssociationUIUtils",
            ).getAssociatedMessagesByMsgKeys(e.id, n);
          return r.filter(function (e) {
            return (
              o("WAWebSpamUtils").isSpamSupportedForAssociatedMessageType(
                e.type,
              ) &&
              e.associationType ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .POLL_ADD_OPTION &&
              !o("WAWebMsgGetters").getIsSentByMe(e) &&
              !e.pendingDeleteForMe
            );
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all(e.map(y));
          return [].concat(e, t.flat());
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = {
              spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
              spamListSpamFlow: t,
              spamListSubject: e.formattedTitle,
            },
            r = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(n);
          return o("WAWebParseReportResponse").parseGroupReportResponse(r);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          t != null
            ? (a = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
                ? yield b([t])
                : [])
            : (a = yield d(e, c, null));
          var i,
            l = yield (u || (u = n("Promise"))).all(
              a.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = yield o("WAWebReportUtils").getMessageMixinArgs(
                          t,
                          {
                            allowAssociatedMessage: o(
                              "WAWebSpamUtils",
                            ).isSpamSupportedForAssociatedMessageType(t.type),
                          },
                        ),
                        r = o(
                          "WAWebGroupHistoryUtils",
                        ).shouldReportGroupHistoryBundleSender(t),
                        a = yield x(t, r);
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
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          t != null
            ? (a = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
                ? yield b([t])
                : [])
            : (a = yield d(e, c, e.id));
          var i,
            l = yield (u || (u = n("Promise"))).all(
              a.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o("WAWebReportUtils").getMessageMixinArgs(
                        e,
                        {
                          allowAssociatedMessage: o(
                            "WAWebSpamUtils",
                          ).isSpamSupportedForAssociatedMessageType(e.type),
                        },
                      );
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                ? (r = yield g(n, t))
                : e.isParentGroup === !0
                  ? (r = yield S(e, t))
                  : o("WAWebChatGetters").getIsGroup(e)
                    ? (r = yield L(e, n, t))
                    : (r = yield k(e, n, t)),
            r
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        $.apply(this, arguments)
      );
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = c),
      (l.loadMsgsForSpamReport = d),
      (l.getSpamMessageProtobuf = p),
      (l.reportStatus = _),
      (l.reportSpam = T));
  },
  98,
);
