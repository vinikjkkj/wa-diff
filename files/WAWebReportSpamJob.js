__d(
  "WAWebReportSpamJob",
  [
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 5;
    async function p(e, t, n) {
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
      return E(r.slice(0, i));
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
    async function f(t, n, a) {
      var i = await o("WAWebReportUtils").getMessageMixinArgs(n);
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
      var c = [g({ msg: n, msgMixin: i, sender: l })],
        d = await h(n, l);
      d != null && c.push(d);
      var m = {
          spamListSpamFlow: t,
          spamListWiTraceId: a,
          spamListJid: o("WAJids").STATUS_JID,
          messageArgs: c,
        },
        p = await o("WASmaxSpamStatusReportRPC").sendStatusReportRPC(m);
      e: {
        var _ = p;
        if (
          ((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
          _.name === "StatusReportResponseError" &&
          "value" in _
        ) {
          var f = _.value,
            y = parseInt(String(f.errorSpamIqErrors.value.code), 10),
            C = f.errorSpamIqErrors.value.text;
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "reportStatus: server response with ",
                  ", ",
                  "",
                ])),
              y,
              C,
            ),
            { errorCode: y, errorText: C }
          );
          break e;
        }
        if (
          ((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
          _.name === "StatusReportResponseSuccess" &&
          "value" in _
        ) {
          var b = _.value;
          return b;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            _,
        );
      }
    }
    function g(e) {
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
    async function h(e, t) {
      var n,
        r = R(e),
        a = r[0];
      if (a == null) return null;
      var i = await y(a);
      return i != null
        ? g({
            msg: a,
            msgMixin: i,
            sender: (n = o("WAWebMsgGetters").getSender(a)) != null ? n : t,
          })
        : null;
    }
    async function y(e) {
      try {
        return await o("WAWebReportUtils").getMessageMixinArgs(e, {
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
    }
    function C(e) {
      return (
        e.associationType ===
          o("WAWebMessageAssociation.flow").MessageAssociationType
            .POLL_ADD_OPTION ||
        o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
          e.associationType,
        )
      );
    }
    function b(e) {
      return C(e)
        ? y(e)
        : o("WAWebReportUtils").getMessageMixinArgs(e, {
            allowAssociatedMessage: o(
              "WAWebSpamUtils",
            ).isSpamSupportedForAssociatedMessageType(e.type),
          });
    }
    async function v(e, t, n) {
      var a = await o("WAWebReportUtils").getMessageMixinArgs(e),
        i = a != null ? await L(e) : [],
        l = await Promise.all(
          i.map(async function (e) {
            var t = await y(e);
            return t != null
              ? babelHelpers.extends(
                  {
                    messageSenderOrRecipientMixinGroupArgs: {
                      messageSender: {
                        messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
                      },
                    },
                  },
                  t,
                )
              : null;
          }),
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
      var u = o("WAWebMsgGetters").getSender(e);
      if (u == null)
        throw r("err")("report status failed due to missing sender");
      var c = {
          spamListSpamFlow: t,
          spamListWiTraceId: n,
          spamListJid: o("WAWebWidToJid").widToUserJid(u),
          messageArgs: s,
        },
        d = await o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(c);
      return o("WAWebParseReportResponse").parseIndividualReportResponse(d);
    }
    async function S(e) {
      var t;
      if (e.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) return [];
      if (!o("WAWebSpamUtils").isSpamSupportedForMessageType(e.type)) return [];
      var n = ((t = e.pollOptions) != null ? t : []).flatMap(function (e) {
          return e.addOptionMsgKey != null ? [e.addOptionMsgKey] : [];
        }),
        r = await o(
          "WAWebMessageAssociationUIUtils",
        ).getAssociatedMessagesByMsgKeys(e.id, n);
      return r.filter(function (e) {
        return (
          o("WAWebSpamUtils").isSpamSupportedForAssociatedMessageType(e.type) &&
          e.associationType ===
            o("WAWebMessageAssociation.flow").MessageAssociationType
              .POLL_ADD_OPTION &&
          !o("WAWebMsgGetters").getIsSentByMe(e) &&
          !e.pendingDeleteForMe
        );
      });
    }
    function R(e) {
      return o("WAWebMessageAssociationUIUtils")
        .getHiddenAssociatedMessages(e.id)
        .filter(function (e) {
          return o(
            "WAWebDualUploadsAssociationTypes",
          ).isDualUploadAssociationType(e.associationType);
        });
    }
    async function L(e) {
      var t = await S(e);
      return [].concat(t, R(e));
    }
    async function E(e) {
      var t = await Promise.all(e.map(L));
      return [].concat(e, t.flat());
    }
    async function k(e, t, n) {
      var r = {
          spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
          spamListSpamFlow: t,
          spamListWiTraceId: n,
          spamListSubject: e.formattedTitle,
        },
        a = await o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(r);
      return o("WAWebParseReportResponse").parseGroupReportResponse(a);
    }
    async function I(e, t, n, r) {
      var a = [];
      t != null
        ? (a = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
            ? await E([t])
            : [])
        : (a = await p(e, m, null));
      var i = await Promise.all(
          a.map(async function (t) {
            var n = await b(t);
            if (n == null) return null;
            var r = o(
                "WAWebGroupHistoryUtils",
              ).shouldReportGroupHistoryBundleSender(t),
              a = await x(t, r);
            return babelHelpers.extends(
              { messageFrom: o("WAWebWidToJid").widToGroupJid(e.id) },
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
          }),
        ),
        l = {
          spamListJid: o("WAWebWidToJid").widToGroupJid(e.id),
          spamListSpamFlow: n,
          spamListWiTraceId: r,
          spamListSubject: e.formattedTitle,
          messageArgs: i.filter(Boolean),
        },
        s = await o("WASmaxSpamGroupReportRPC").sendGroupReportRPC(l);
      return o("WAWebParseReportResponse").parseGroupReportResponse(s);
    }
    async function T(e, t, n, r) {
      var a = [];
      t != null
        ? (a = o("WAWebSpamUtils").isSpamSupportedForMessageType(t.type)
            ? await E([t])
            : [])
        : (a = await p(e, m, e.id));
      var i = await Promise.all(
          a.map(async function (e) {
            var t = await b(e);
            return t != null
              ? babelHelpers.extends(
                  {
                    messageSenderOrRecipientMixinGroupArgs: {
                      messageSender: {
                        messageFrom: o("WAWebWidToJid").widToUserJid(e.from),
                      },
                    },
                  },
                  t,
                )
              : null;
          }),
        ),
        l = {
          spamListSpamFlow: n,
          spamListWiTraceId: r,
          spamListJid: o("WAWebWidToJid").widToUserJid(e.id),
          messageArgs: i.filter(Boolean),
        },
        s = await o("WASmaxSpamIndividualReportRPC").sendIndividualReportRPC(l);
      return o("WAWebParseReportResponse").parseIndividualReportResponse(s);
    }
    async function D(e, t, n, r) {
      var a;
      return (
        o("WAWebChatGetters").getIsNewsletter(e)
          ? n != null && o("WAWebMsgGetters").getIsNewsletterStatus(n)
            ? (a = await o(
                "WAWebNewsletterReportUtils",
              ).sendNewsletterStatusReport(e, n, t, r))
            : (a = await (o("WAWebNewsletterReportUtils")
                .sendNewsletterReport == null
                ? void 0
                : o("WAWebNewsletterReportUtils").sendNewsletterReport(
                    e,
                    n,
                    t,
                    r,
                  )))
          : n != null && !o("WAWebChatGetters").getIsGroup(e)
            ? (a = await v(n, t, r))
            : e.isParentGroup === !0
              ? (a = await k(e, t, r))
              : o("WAWebChatGetters").getIsGroup(e)
                ? (a = await I(e, n, t, r))
                : (a = await T(e, n, t, r)),
        a
      );
    }
    async function x(e, t) {
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
    }
    ((l.SPAM_REPORT_MESSAGE_COUNT = m),
      (l.loadMsgsForSpamReport = p),
      (l.getSpamMessageProtobuf = _),
      (l.reportStatus = f),
      (l.reportSpam = D));
  },
  98,
);
