__d(
  "WAWebNewsletterSendMsgAction",
  [
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMexCreateNewsletterAdminInviteJob",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgRcatUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterErrors",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterSendMsgActionUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebStateUtils").unproxy(e);
          if (!o("WAWebChatGetters").getIsNewsletter(a))
            throw new (o(
              "WAWebNewsletterErrors",
            ).UnexpectedNonNewsletterChatError)();
          var i = yield o("WAWebSendTextMsgChatAction").createTextMsgData(
            a,
            t,
            n,
          );
          if (i == null) throw r("err")("Failed to generate MsgData");
          o("WAWebNewsletterSendMsgActionUtils").validateMsgDataForMsgSend(
            i,
            a,
          );
          var l = new (o("WAWebMsgModel").Msg)(i),
            s = n.linkPreview ? "media" : "text";
          return x({ chat: a, msg: l, type: s });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebFrontendMsgGetters").getAsMms(e)
        ? (g || (g = n("Promise"))).resolve()
        : x({ chat: t, msg: e, type: "text" });
    }
    function b(e, t, r) {
      if (!o("WAWebChatGetters").getIsNewsletter(e))
        return (g || (g = n("Promise"))).reject(
          new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterChatError)(),
        );
      var a =
        t instanceof o("WAWebMsgModel").Msg
          ? t
          : new (o("WAWebMsgModel").Msg)(t);
      return (
        (a.local = !0),
        x({ chat: e, msg: a, type: "media", uploadMediaMsg: r })
      );
    }
    function v(e) {
      ((e.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(e)),
        (e.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: e.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
        })));
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            yield o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(t),
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(n),
            );
            var r = o("WAWebMsgGetters").getIsMedia(t),
              a = o("WAWebMsgGetters").getLinkPreview(t),
              i = o("WAWebMsgRcatUtils").getContentIdString(t, !0),
              l =
                i != null &&
                o("WAWebNewsletterGatingUtils").isRCATFieldGenerationEnabled()
                  ? i
                  : null,
              s = yield o(
                "WAWebNewsletterSendMessageJob",
              ).sendNewsletterMessageJob({
                type: "edit",
                editType: r || a ? "media" : "text",
                msg: t,
                newsletterJid: o(
                  "WAWebNewsletterValidationUtils",
                ).toNewsletterJidOrThrow(t.id.remote.toJid()),
                contentId: l,
              });
            return (
              n.updateAck(o("WAAckLevel").ACK.SENT),
              {
                t: s.ack.t,
                messageSendResult:
                  s.success === !0
                    ? o("WAWebSendMsgResultAction").SendMsgResult.OK
                    : o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK,
              }
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to edit message",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-edit-fail"),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.msgData,
            r = new (o("WAWebMsgModel").Msg)(n),
            a = yield x({ chat: t, msg: r, type: "pollCreation" });
          return [r, a];
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
          var t = e.chat,
            n = e.msgData;
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled()
          )
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Poll forwarding is not enabled",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("poll-forwarding-not-enabled"),
              r("err")("Poll forwarding is not enabled")
            );
          var a = new (o("WAWebMsgModel").Msg)(n),
            i = yield x({ chat: t, msg: a, type: "pollResultSnapshot" });
          return [a, i];
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebFrontendMsgGetters").getIsMms(t))
            return (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter] Forwarding MMS messages is not supported",
                  ])),
              ),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          var n = yield o(
            "WAWebNewsletterSendMsgActionUtils",
          ).prepMsgDataForForward(t);
          return x({
            chat: e,
            msg: o("WAWebMsgModelFromData").msgModelFromMsgData(n),
            type:
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
                ? "pollResultSnapshot"
                : "text",
          });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = e.chat,
            i = e.type,
            l = e.uploadMediaMsg,
            s = e.msg;
          (v(s),
            (t = s.wamMessageSendPerfReporter) == null ||
              t.startRenderedStage(),
            yield a.addQueue.enqueue((g || (g = n("Promise"))).resolve(s)).then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).addNewsletterMsgsRecords([
                      o("WAWebMsgDataFromModel").msgDataFromMsgModel(s),
                    ]),
                      a.msgs.add(e),
                      (a.t = s.t));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            (r = s.wamMessageSendPerfReporter) == null ||
              r.postRenderedStage());
          try {
            var u, _, f, h;
            try {
              l != null && (s = yield l(s));
            } catch (e) {
              throw new (o(
                "WAWebNewsletterErrors",
              ).NewsletterMediaUploadError)();
            }
            (u = s.wamMessageSendPerfReporter) == null ||
              u.startReadyToSendStage();
            var y = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                a.id.toJid(),
              ),
              C = o("WAWebMsgRcatUtils").getContentIdString(s, !0),
              b =
                i === "media"
                  ? {
                      msg: s,
                      type: i,
                      newsletterJid: y,
                      mediaHandle: s.mediaHandle,
                      contentId:
                        C != null &&
                        o(
                          "WAWebNewsletterGatingUtils",
                        ).isRCATFieldGenerationEnabled()
                          ? o("WAWebMsgRcatUtils").getContentIdString(s, !0)
                          : null,
                    }
                  : { msg: s, type: i, newsletterJid: y };
            ((_ = s.wamMessageSendPerfReporter) == null ||
              _.postReadyToSendStage(),
              (f = s.wamMessageSendPerfReporter) == null ||
                f.startWrittenWireStage());
            var S = yield a.sendQueue.enqueue(
              o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(b),
            );
            switch (
              ((h = s.wamMessageSendPerfReporter) == null ||
                h.postWrittenWireStage(),
              S.success)
            ) {
              case !0: {
                var R;
                o("WAWebCoreActionsODS").logChannelMsgSend();
                var L = S.serverId;
                if (L == null)
                  throw new (o(
                    "WAWebNewsletterErrors",
                  ).MissingNewsletterServerIdError)();
                ((s.serverId = S.serverId),
                  (s.t = S.ack.t),
                  s.updateAck(o("WAAckLevel").ACK.SENT, !0));
                try {
                  var E, k;
                  ((E = s.wamMessageSendPerfReporter) == null ||
                    E.startSavedStage(),
                    yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).updateNewsletterMsgRecord(s),
                    (k = s.wamMessageSendPerfReporter) == null ||
                      k.postSavedStage());
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to persist sent message on db",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-message-db-fail");
                }
                return (
                  (R = s.wamMessageSendReporter) == null || R.postSuccess(),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                  }
                );
              }
              case !1: {
                var I;
                return (
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message, ",
                          " from server",
                        ])),
                      S.ack.error,
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-message-fail-server"),
                  s.updateAck(o("WAAckLevel").ACK.FAILED, !0),
                  (I = s.wamMessageSendReporter) == null ||
                    I.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                      isTerminal: !1,
                    }),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_NETWORK,
                  }
                );
              }
            }
          } catch (e) {
            var T;
            return (
              e instanceof
              o("WAWebNewsletterErrors").MissingNewsletterServerIdError
                ? o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Empty serverId returned from server",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-empty-server-id")
                : o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message",
                        ])),
                    )
                    .tags("newsletter"),
              s.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              (T = s.wamMessageSendReporter) == null ||
                T.postFailure({
                  result:
                    e instanceof
                    o("WAWebNewsletterErrors").NewsletterMediaUploadError
                      ? o("WAWebWamEnumMessageSendResultType")
                          .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD
                      : o("WAWebWamEnumMessageSendResultType")
                          .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !1,
                }),
              e instanceof o("WAWebNewsletterErrors").NewsletterMediaUploadError
                ? {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UPLOAD,
                  }
                : {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  }
            );
          } finally {
            ((s.wamMessageSendReporter = null),
              (s.wamMessageSendPerfReporter = null));
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.base64Thumb,
            a = t.invitee,
            i = t.inviteMessage,
            l = t.newsletterWid;
          try {
            var s = o("WAWebStateUtils").unproxy(e),
              u = yield o(
                "WAWebMexCreateNewsletterAdminInviteJob",
              ).createNewsletterAdminInvite(
                o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                  l.toJid(),
                ),
                a,
              ),
              c = u.inviteExpiration,
              d = r("WANullthrows")(r("WAWebNewsletterCollection").get(l)),
              m = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              p = babelHelpers.extends(
                {
                  ack: o("WAAckLevel").ACK.CLOCK,
                  from: m,
                  id: new (r("WAWebMsgKey"))({
                    from: m,
                    to: s.id,
                    id: yield r("WAWebMsgKey").newId(),
                    participant: void 0,
                    selfDir: "out",
                  }),
                  local: !0,
                  t: o("WATimeUtils").unixTime(),
                  to: s.id,
                  type: "newsletter_admin_invite",
                  kind: "newsletterAdminInvite",
                  viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  isNewMsg: !0,
                  newsletterAdminInviteInfo: {
                    newsletterId:
                      o("WAWebWidFactory").asNewsletterWidOrThrow(l),
                    newsletterName: d == null ? void 0 : d.name,
                    inviteExpiration: r("WANullthrows")(c),
                    inviteMessage: i,
                    pictureThumbnail: n,
                  },
                },
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  s,
                ),
              );
            return o("WAWebSendMsgChatAction").addAndSendMsgToChat(s, p)[1];
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendNewsletterAdminInviteMessage] Failed to send message ",
                      "",
                    ])),
                  e,
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-send-admin-invite"),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.base64Thumb,
            a = t.inviteMessage,
            i = t.newsletterWid;
          try {
            var l = o("WAWebStateUtils").unproxy(e),
              s = r("WANullthrows")(r("WAWebNewsletterCollection").get(i)),
              u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              c = babelHelpers.extends(
                {
                  ack: o("WAAckLevel").ACK.CLOCK,
                  from: u,
                  id: new (r("WAWebMsgKey"))({
                    from: u,
                    to: l.id,
                    id: yield r("WAWebMsgKey").newId(),
                    participant: void 0,
                    selfDir: "out",
                  }),
                  local: !0,
                  t: o("WATimeUtils").unixTime(),
                  to: l.id,
                  type: "newsletter_follower_invite",
                  kind: "newsletterFollowerInvite",
                  viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                  broadcast: !0,
                  isNewMsg: !0,
                  newsletterFollowerInviteInfo: {
                    newsletterId:
                      o("WAWebWidFactory").asNewsletterWidOrThrow(i),
                    newsletterName: s == null ? void 0 : s.name,
                    inviteMessage: a,
                    pictureThumbnail: n,
                  },
                },
                o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(
                  l,
                ),
              );
            return o("WAWebSendMsgChatAction").addAndSendMsgToChat(l, c)[1];
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[sendNewsletterFollowerInviteMessage] send failed ",
                      "",
                    ])),
                  e,
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-send-follower-invite"),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    ((l.sendNewsletterTextMsg = h),
      (l.resendNewsletterMsg = C),
      (l.sendNewsletterMediaMsg = b),
      (l.sendNewsletterEditMsg = S),
      (l.sendNewsletterPollCreationMsg = L),
      (l.sendNewsletterPollResultSnapshotMsg = k),
      (l.forwardNewsletterMessage = T),
      (l.sendNewsletterAdminInviteMessage = P),
      (l.sendNewsletterFollowerInviteMessage = M));
  },
  98,
);
