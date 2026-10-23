__d(
  "WAWebNewsletterSendMsgAction",
  [
    "Promise",
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebFrontendMsgGetters",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMexCreateNewsletterAdminInviteJob",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgRcatUtils",
    "WAWebMsgType",
    "WAWebMsgUtilsBridge",
    "WAWebNewsletterCollection",
    "WAWebNewsletterErrors",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterSendMsgActionUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebRichTextFormatMessageSendLogger",
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
    "getErrorSafe",
    "nullthrows",
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
            s = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(l, a.id),
            u = n.linkPreview ? "media" : "text";
          return P({
            chat: a,
            commitRichTextFormatMessageSend: s,
            msg: l,
            type: u,
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebFrontendMsgGetters").getAsMms(e)
        ? (g || (g = n("Promise"))).resolve()
        : P({ chat: t, msg: e, type: "text" });
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
      a.local = !0;
      var i =
        t instanceof o("WAWebMsgModel").Msg
          ? null
          : o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(a, e.id);
      return P({
        chat: e,
        commitRichTextFormatMessageSend: i,
        msg: a,
        type: "media",
        uploadMediaMsg: r,
      });
    }
    function v(e) {
      ((e.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(e, {
        frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      })),
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
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(t),
            );
            var n = o("WAWebMsgGetters").getIsMedia(e),
              r = o("WAWebMsgGetters").getLinkPreview(e),
              a = o("WAWebMsgRcatUtils").getContentIdString(e, !0),
              i =
                a != null &&
                o("WAWebNewsletterGatingUtils").isRCATFieldGenerationEnabled()
                  ? a
                  : null,
              l = yield o(
                "WAWebNewsletterSendMessageJob",
              ).sendNewsletterMessageJob({
                type: "edit",
                editType: n || r ? "media" : "text",
                msg: e,
                newsletterJid: o(
                  "WAWebNewsletterValidationUtils",
                ).toNewsletterJidOrThrow(e.id.remote.toJid()),
                contentId: i,
              });
            return (
              t.updateAck(o("WAAckLevel").ACK.SENT),
              {
                t: l.ack.t,
                messageSendResult:
                  l.success === !0
                    ? o("WAWebSendMsgResultAction").SendMsgResult.OK
                    : o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK,
              }
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
            a = o(
              "WAWebRichTextFormatMessageSendLogger",
            ).maybeCreateRichTextFormatMessageSendCommit(r, t.id),
            i = yield P({
              chat: t,
              commitRichTextFormatMessageSend: a,
              msg: r,
              type: "pollCreation",
            });
          return [r, i];
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
            n = e.msg;
          return P({ chat: t, msg: n, type: "text" });
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
          var t = e.chat,
            n = e.msgData;
          if (
            !o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled()
          )
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Poll forwarding is not enabled",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("poll-forwarding-not-enabled"),
              r("err")("Poll forwarding is not enabled")
            );
          var a = new (o("WAWebMsgModel").Msg)(n),
            i = yield P({ chat: t, msg: a, type: "pollResultSnapshot" });
          return [a, i];
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
          if (o("WAWebFrontendMsgGetters").getIsMms(t))
            return (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
          return P({
            chat: e,
            msg: o("WAWebMsgModelFromData").msgModelFromMsgData(n),
            type:
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
                ? "pollResultSnapshot"
                : "text",
          });
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a = e.chat,
            i = e.commitRichTextFormatMessageSend,
            l = e.type,
            s = e.uploadMediaMsg,
            u = e.msg;
          if (
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterAdminProfilesSenderEnabled(a.newsletterMetadata)
          ) {
            var c, f, h;
            u.newsletterAdminProfile =
              (c =
                (f = a.newsletterMetadata) == null ? void 0 : f.adminProfile) !=
              null
                ? c
                : {
                    id: null,
                    name: a.name,
                    pictureDirectPath:
                      (h = o("WAWebProfilePicThumbGetters").getMaybeImgFull(
                        o(
                          "WAWebProfilePicThumbCollection",
                        ).ProfilePicThumbCollection.get(a.id),
                      )) != null
                        ? h
                        : null,
                    pictureId: null,
                  };
          }
          (v(u),
            (t = u.wamMessageSendPerfReporter) == null ||
              t.startRenderedStage(),
            yield a.addQueue.enqueue((g || (g = n("Promise"))).resolve(u)).then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).addNewsletterMsgsRecords([
                      o("WAWebMsgDataFromModel").msgDataFromMsgModel(u),
                    ]),
                      a.msgs.add(e),
                      (a.t = u.t));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            (r = u.wamMessageSendPerfReporter) == null ||
              r.postRenderedStage());
          try {
            var y, C, b, S;
            try {
              s != null && (u = yield s(u));
            } catch (e) {
              throw new (o(
                "WAWebNewsletterErrors",
              ).NewsletterMediaUploadError)();
            }
            (y = u.wamMessageSendPerfReporter) == null ||
              y.startReadyToSendStage();
            var R = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                a.id.toJid(),
              ),
              L = o("WAWebMsgRcatUtils").getContentIdString(u, !0),
              E =
                l === "media"
                  ? {
                      msg: u,
                      type: l,
                      newsletterJid: R,
                      mediaHandle: u.mediaHandle,
                      contentId:
                        L != null &&
                        o(
                          "WAWebNewsletterGatingUtils",
                        ).isRCATFieldGenerationEnabled()
                          ? o("WAWebMsgRcatUtils").getContentIdString(u, !0)
                          : null,
                    }
                  : { msg: u, type: l, newsletterJid: R };
            ((C = u.wamMessageSendPerfReporter) == null ||
              C.postReadyToSendStage(),
              (b = u.wamMessageSendPerfReporter) == null ||
                b.startWrittenWireStage());
            var k = yield a.sendQueue.enqueue(
              o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(E),
            );
            switch (
              ((S = u.wamMessageSendPerfReporter) == null ||
                S.postWrittenWireStage(),
              k.success)
            ) {
              case !0: {
                var I;
                o("WAWebCoreActionsODS").logChannelMsgSend();
                var T = k.serverId;
                if (T == null)
                  throw new (o(
                    "WAWebNewsletterErrors",
                  ).MissingNewsletterServerIdError)();
                ((u.serverId = k.serverId),
                  (u.t = k.ack.t),
                  u.updateAck(o("WAAckLevel").ACK.SENT, !0),
                  M(u));
                try {
                  var D, x;
                  ((D = u.wamMessageSendPerfReporter) == null ||
                    D.startSavedStage(),
                    yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).updateNewsletterMsgRecord(u),
                    (x = u.wamMessageSendPerfReporter) == null ||
                      x.postSavedStage());
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to persist sent message on db",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-message-db-fail");
                }
                return (
                  (I = u.wamMessageSendReporter) == null || I.postSuccess(),
                  i == null || i(),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                    msg: u,
                  }
                );
              }
              case !1: {
                var $;
                return (
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message, ",
                          " from server",
                        ])),
                      k.ack.error,
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-message-fail-server"),
                  u.updateAck(o("WAAckLevel").ACK.FAILED, !0),
                  ($ = u.wamMessageSendReporter) == null ||
                    $.postFailure({
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
            var P;
            return (
              e instanceof
              o("WAWebNewsletterErrors").MissingNewsletterServerIdError
                ? o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Empty serverId returned from server",
                        ])),
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-empty-server-id")
                : o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message",
                        ])),
                    )
                    .tags("newsletter"),
              u.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              (P = u.wamMessageSendReporter) == null ||
                P.postFailure({
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
            ((u.wamMessageSendReporter = null),
              (u.wamMessageSendPerfReporter = null));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(t) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "thread_interactions_channel_own_posts_sent_web_enabled",
        ) === !0
      ) {
        var n = function (n) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter:ctl] channel post send logging failed",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("newsletter-ctl-own-post-send-fail");
        };
        try {
          o("WAWebMsgUtilsBridge")
            .logMessageSendForChatThreadLogging(
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(t),
            )
            .catch(n);
        } catch (e) {
          n(e);
        }
      }
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              d = r("nullthrows")(r("WAWebNewsletterCollection").get(l)),
              m = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
                    inviteExpiration: r("nullthrows")(c),
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        A.apply(this, arguments)
      );
    }
    ((l.sendNewsletterTextMsg = h),
      (l.resendNewsletterMsg = C),
      (l.sendNewsletterMediaMsg = b),
      (l.sendNewsletterEditMsg = S),
      (l.sendNewsletterPollCreationMsg = L),
      (l.sendNewsletterAlbumMsg = k),
      (l.sendNewsletterPollResultSnapshotMsg = T),
      (l.forwardNewsletterMessage = x),
      (l.sendNewsletterMessage = P),
      (l.sendNewsletterAdminInviteMessage = w));
  },
  98,
);
