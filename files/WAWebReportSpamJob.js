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
    "WAWebDualUploadsAssociationTypes",
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
      c,
      d = 5;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          return $(r.slice(0, i));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield o("WAWebReportUtils").getMessageMixinArgs(n);
          if (i == null)
            throw r("err")("report status failed due to unsupported msg type");
          var l = o("WAWebMsgGetters").getSender(n);
          if (l == null)
            throw r("err")("report status failed due to missing sender");
          var s = [h(n, i, l)],
            u = yield y(n, l);
          u != null && s.push(u);
          var c = {
              spamListSpamFlow: t,
              spamListWiTraceId: a,
              spamListJid: o("WAJids").STATUS_JID,
              messageArgs: s,
            },
            d = yield o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(c);
          e: {
            var m = d;
            if (
              ((typeof m == "object" && m !== null) ||
                typeof m == "function") &&
              m.name === "StatusReportResponseError" &&
              "value" in m
            ) {
              var p = m.value,
                _ = parseInt(p.errorSpamIqErrors.value.code, 10),
                f = p.errorSpamIqErrors.value.text;
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "reportStatus: server response with ",
                      ", ",
                      "",
                    ])),
                  _,
                  f,
                ),
                { errorCode: _, errorText: f }
              );
              break e;
            }
            if (
              ((typeof m == "object" && m !== null) ||
                typeof m == "function") &&
              m.name === "StatusReportResponseSuccess" &&
              "value" in m
            ) {
              var g = m.value;
              return g;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                m,
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return babelHelpers.extends({ messageFrom: o("WAJids").STATUS_JID }, t, {
        messageParticipantMixinArgs: {
          messageParticipant: o("WAWebWidToJid").widToUserJid(n),
        },
        messageRecipientMixinArgs: {
          messageTo: o("WAWebWidToJid").widToUserJid(e.to),
        },
      });
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = T(e),
            a = r[0];
          if (a == null) return null;
          var i = yield b(a);
          return i != null
            ? h(a, i, (n = o("WAWebMsgGetters").getSender(a)) != null ? n : t)
            : null;
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
          try {
            return yield o("WAWebReportUtils").getMessageMixinArgs(e, {
              allowAssociatedMessage: !0,
            });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "reportSpam: skipping associated child type=",
                      " association=",
                      "",
                    ])),
                  e.type,
                  String(e.associationType),
                )
                .sendLogs("reporting-associated-child-skipped"),
              null
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return (
        e.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .POLL_ADD_OPTION ||
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          e.associationType,
        )
      );
    }
    function R(e) {
      return S(e)
        ? b(e)
        : o("WAWebReportUtils").getMessageMixinArgs(e, {
            allowAssociatedMessage: o(
              "WAWebSpamUtils",
            ).isSpamSupportedForAssociatedMessageType(e.type),
          });
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = yield o("WAWebReportUtils").getMessageMixinArgs(e),
            l = i != null ? yield D(e) : [],
            s = yield (c || (c = n("Promise"))).all(
              l.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield b(e);
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
            u = [];
          (i != null &&
            u.push(
              babelHelpers.extends(
                {
                  messageSenderOrRecipientMixinGroupArgs: {
                    messageSender: {
                      messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
                    },
                  },
                },
                i,
              ),
            ),
            s.forEach(function (e) {
              e != null && u.push(e);
            }));
          var d = o("WAWebMsgGetters").getSender(e);
          if (d == null)
            throw r("err")("report status failed due to missing sender");
          var m = {
              spamListSpamFlow: t,
              spamListWiTraceId: a,
              spamListJid: o("WAWebWidToJid").widToUserJid(d),
              messageArgs: u,
            },
            p = yield o(
              "WASmaxSpamIndividualReportRPC",
            ).sendIndividualReportRPC(m);
          return o("WAWebParseReportResponse").parseIndividualReportResponse(p);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return o("WAWebMessageAssociationUIUtils")
        .getHiddenAssociatedMessages(e.id)
        .filter(function (e) {
          return o(
            "WAWebDualUploadsAssociationTypes",
          ).isDualUploadAssociationType(e.associationType);
        });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield k(e);
          return [].concat(t, T(e));
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (c || (c = n("Promise"))).all(e.map(D));
          return [].concat(e, t.flat());
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = {
              spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
              spamListSpamFlow: t,
              spamListWiTraceId: n,
              spamListSubject: e.formattedTitle,
            },
            a = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(r);
          return o("WAWebParseReportResponse").parseGroupReportResponse(a);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = [];
            t != null
              ? (i = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
                  ? yield $([t])
                  : [])
              : (i = yield m(e, d, null));
            var l = yield (c || (c = n("Promise"))).all(
                i.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = yield R(t);
                        if (n == null) return null;
                        var r = o(
                            "WAWebGroupHistoryUtils",
                          ).shouldReportGroupHistoryBundleSender(t),
                          a = yield q(t, r);
                        return babelHelpers.extends(
                          {
                            messageFrom: o("WAWebWidToJid").widToGroupJid(e.id),
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
                spamListWiTraceId: a,
                spamListSubject: e.formattedTitle,
                messageArgs: l.filter(Boolean),
              },
              u = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(s);
            return o("WAWebParseReportResponse").parseGroupReportResponse(u);
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = [];
            t != null
              ? (i = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
                  ? yield $([t])
                  : [])
              : (i = yield m(e, d, e.id));
            var l = yield (c || (c = n("Promise"))).all(
                i.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield R(e);
                        return t != null
                          ? babelHelpers.extends(
                              {
                                messageSenderOrRecipientMixinGroupArgs: {
                                  messageSender: {
                                    messageFrom: o(
                                      "WAWebWidToJid",
                                    ).widToUserJid(e.from),
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
              s = {
                spamListSpamFlow: r,
                spamListWiTraceId: a,
                messageArgs: l.filter(Boolean),
              },
              u = yield o(
                "WASmaxSpamIndividualReportRPC",
              ).sendIndividualReportRPC(s);
            return o("WAWebParseReportResponse").parseIndividualReportResponse(
              u,
            );
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a;
            return (
              o("WAWebChatGetters").getIsNewsletter(e)
                ? n != null && o("WAWebMsgGetters").getIsNewsletterStatus(n)
                  ? (a = yield o(
                      "WAWebNewsletterReportUtils",
                    ).sendNewsletterStatusReport(e, n, t, r))
                  : (a = yield o("WAWebNewsletterReportUtils")
                      .sendNewsletterReport == null
                      ? void 0
                      : o("WAWebNewsletterReportUtils").sendNewsletterReport(
                          e,
                          n,
                          t,
                          r,
                        ))
                : n != null && !o("WAWebChatGetters").getIsGroup(e)
                  ? (a = yield L(n, t, r))
                  : e.isParentGroup === !0
                    ? (a = yield N(e, t, r))
                    : o("WAWebChatGetters").getIsGroup(e)
                      ? (a = yield w(e, n, t, r))
                      : (a = yield F(e, n, t, r)),
              a
            );
          },
        )),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) {
            var n = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
            return n != null
              ? o("WAWebWidToJid").widToUserJid(n)
              : (o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = d),
      (l.loadMsgsForSpamReport = m),
      (l.getSpamMessageProtobuf = _),
      (l.reportStatus = f),
      (l.reportSpam = B));
  },
  98,
);
