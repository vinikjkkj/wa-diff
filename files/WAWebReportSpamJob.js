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
    "WAWebUserUtils",
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
      d,
      m,
      p = 5;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                (o("WAWebUserUtils").isMeAccount(s.from) &&
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
          return N(r.slice(0, i));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = yield o("WAWebReportUtils").getMessageMixinArgs(n);
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WA-ICE] reportStatus unsupported msg type=",
                      " sub=",
                      "",
                    ])),
                  n.type,
                  n.subtype,
                )
                .tags("wa-ice", "reporting")
                .sendLogs("reporting-status-unsupported-msg-type"),
              r("err")(
                "report status failed due to unsupported msg type=%s sub=%s",
                n.type,
                String(n.subtype),
              )
            );
          var l = o("WAWebMsgGetters").getSender(n);
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WA-ICE] reportStatus missing sender type=",
                      " sub=",
                      "",
                    ])),
                  n.type,
                  n.subtype,
                )
                .tags("wa-ice", "reporting")
                .sendLogs("reporting-status-missing-sender"),
              r("err")(
                "report status failed due to missing sender type=%s sub=%s",
                n.type,
                String(n.subtype),
              )
            );
          var c = [C({ msg: n, msgMixin: i, sender: l })],
            d = yield b(n, l);
          d != null && c.push(d);
          var m = {
              spamListSpamFlow: t,
              spamListWiTraceId: a,
              spamListJid: o("WAJids").STATUS_JID,
              messageArgs: c,
            },
            p = yield o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(m);
          e: {
            var _ = p;
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "StatusReportResponseError" &&
              "value" in _
            ) {
              var f = _.value,
                g = parseInt(String(f.errorSpamIqErrors.value.code), 10),
                h = f.errorSpamIqErrors.value.text;
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "reportStatus: server response with ",
                      ", ",
                      "",
                    ])),
                  g,
                  h,
                ),
                { errorCode: g, errorText: h }
              );
              break e;
            }
            if (
              ((typeof _ == "object" && _ !== null) ||
                typeof _ == "function") &&
              _.name === "StatusReportResponseSuccess" &&
              "value" in _
            ) {
              var y = _.value;
              return y;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                _,
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = e.msg,
        n = e.msgMixin,
        r = e.sender;
      return babelHelpers.extends({ messageFrom: o("WAJids").STATUS_JID }, n, {
        messageParticipantMixinArgs: {
          messageParticipant: o("WAWebWidToJid").widToUserJid(r),
        },
        messageRecipientMixinArgs: {
          messageTo: o("WAWebWidToJid").widToUserJid(t.to),
        },
      });
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = x(e),
            a = r[0];
          if (a == null) return null;
          var i = yield S(a);
          return i != null
            ? C({
                msg: a,
                msgMixin: i,
                sender: (n = o("WAWebMsgGetters").getSender(a)) != null ? n : t,
              })
            : null;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebReportUtils").getMessageMixinArgs(e, {
              allowAssociatedMessage: !0,
            });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return (
        e.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .POLL_ADD_OPTION ||
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          e.associationType,
        )
      );
    }
    function E(e) {
      return L(e)
        ? S(e)
        : o("WAWebReportUtils").getMessageMixinArgs(e, {
            allowAssociatedMessage: o(
              "WAWebSpamUtils",
            ).isSpamSupportedForAssociatedMessageType(e.type),
          });
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = yield o("WAWebReportUtils").getMessageMixinArgs(e),
            l = i != null ? yield $(e) : [],
            s = yield (m || (m = n("Promise"))).all(
              l.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield S(e);
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
          var c = o("WAWebMsgGetters").getSender(e);
          if (c == null)
            throw r("err")("report status failed due to missing sender");
          var d = {
              spamListSpamFlow: t,
              spamListWiTraceId: a,
              spamListJid: o("WAWebWidToJid").widToUserJid(c),
              messageArgs: u,
            },
            p = yield o(
              "WASmaxSpamIndividualReportRPC",
            ).sendIndividualReportRPC(d);
          return o("WAWebParseReportResponse").parseIndividualReportResponse(p);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return o("WAWebMessageAssociationUIUtils")
        .getHiddenAssociatedMessages(e.id)
        .filter(function (e) {
          return o(
            "WAWebDualUploadsAssociationTypes",
          ).isDualUploadAssociationType(e.associationType);
        });
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield T(e);
          return [].concat(t, x(e));
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (m || (m = n("Promise"))).all(e.map($));
          return [].concat(e, t.flat());
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = {
              spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
              spamListSpamFlow: t,
              spamListWiTraceId: n,
              spamListSubject: e.formattedTitle,
            },
            a = yield o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(r);
          return o("WAWebParseReportResponse").parseGroupReportResponse(a);
        })),
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
                  ? yield N([t])
                  : [])
              : (i = yield _(e, p, null));
            var l = yield (m || (m = n("Promise"))).all(
                i.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = yield E(t);
                        if (n == null) return null;
                        var r = o(
                            "WAWebGroupHistoryUtils",
                          ).shouldReportGroupHistoryBundleSender(t),
                          a = yield V(t, r);
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
        O.apply(this, arguments)
      );
    }
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = [];
            t != null
              ? (i = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
                  ? yield N([t])
                  : [])
              : (i = yield _(e, p, e.id));
            var l = yield (m || (m = n("Promise"))).all(
                i.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = yield E(e);
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
                spamListJid: o("WAWebWidToJid").widToUserJid(e.id),
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
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, r) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  ? (a = yield k(n, t, r))
                  : e.isParentGroup === !0
                    ? (a = yield w(e, t, r))
                    : o("WAWebChatGetters").getIsGroup(e)
                      ? (a = yield F(e, n, t, r))
                      : (a = yield B(e, n, t, r)),
              a
            );
          },
        )),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) {
            var n = o("WAWebMsgGetters").getGroupHistoryBundleSender(e);
            return n != null
              ? o("WAWebWidToJid").widToUserJid(n)
              : (o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
        H.apply(this, arguments)
      );
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = p),
      (l.loadMsgsForSpamReport = _),
      (l.getSpamMessageProtobuf = g),
      (l.reportStatus = h),
      (l.reportSpam = q));
  },
  98,
);
