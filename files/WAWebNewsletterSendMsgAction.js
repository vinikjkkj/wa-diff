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
    var e, s, u, c, d, m, p, _, f, g, h;
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          return N({ chat: a, msg: l, type: s });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebFrontendMsgGetters").getAsMms(e)
        ? (h || (h = n("Promise"))).resolve()
        : N({ chat: t, msg: e, type: "text" });
    }
    function v(e, t, r) {
      if (!o("WAWebChatGetters").getIsNewsletter(e))
        return (h || (h = n("Promise"))).reject(
          new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterChatError)(),
        );
      var a =
        t instanceof o("WAWebMsgModel").Msg
          ? t
          : new (o("WAWebMsgModel").Msg)(t);
      return (
        (a.local = !0),
        N({ chat: e, msg: a, type: "media", uploadMediaMsg: r })
      );
    }
    function S(e) {
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
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.msgData,
            r = new (o("WAWebMsgModel").Msg)(n),
            a = yield N({ chat: t, msg: r, type: "pollCreation" });
          return [r, a];
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.msg;
          return N({ chat: t, msg: n, type: "text" });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            i = yield N({ chat: t, msg: a, type: "pollResultSnapshot" });
          return [a, i];
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          return N({
            chat: e,
            msg: o("WAWebMsgModelFromData").msgModelFromMsgData(n),
            type:
              t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT &&
              r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
                ? "pollResultSnapshot"
                : "text",
          });
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
          var t,
            r,
            a = e.chat,
            i = e.type,
            l = e.uploadMediaMsg,
            s = e.msg;
          if (
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterAdminProfilesSenderEnabled(a.newsletterMetadata)
          ) {
            var u, c, f;
            s.newsletterAdminProfile =
              (u =
                (c = a.newsletterMetadata) == null ? void 0 : c.adminProfile) !=
              null
                ? u
                : {
                    id: null,
                    name: a.name,
                    pictureDirectPath:
                      (f = o("WAWebProfilePicThumbGetters").getMaybeImgFull(
                        o(
                          "WAWebProfilePicThumbCollection",
                        ).ProfilePicThumbCollection.get(a.id),
                      )) != null
                        ? f
                        : null,
                    pictureId: null,
                  };
          }
          (S(s),
            (t = s.wamMessageSendPerfReporter) == null ||
              t.startRenderedStage(),
            yield a.addQueue.enqueue((h || (h = n("Promise"))).resolve(s)).then(
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
            var g, y, C, b;
            try {
              l != null && (s = yield l(s));
            } catch (e) {
              throw new (o(
                "WAWebNewsletterErrors",
              ).NewsletterMediaUploadError)();
            }
            (g = s.wamMessageSendPerfReporter) == null ||
              g.startReadyToSendStage();
            var v = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                a.id.toJid(),
              ),
              R = o("WAWebMsgRcatUtils").getContentIdString(s, !0),
              L =
                i === "media"
                  ? {
                      msg: s,
                      type: i,
                      newsletterJid: v,
                      mediaHandle: s.mediaHandle,
                      contentId:
                        R != null &&
                        o(
                          "WAWebNewsletterGatingUtils",
                        ).isRCATFieldGenerationEnabled()
                          ? o("WAWebMsgRcatUtils").getContentIdString(s, !0)
                          : null,
                    }
                  : { msg: s, type: i, newsletterJid: v };
            ((y = s.wamMessageSendPerfReporter) == null ||
              y.postReadyToSendStage(),
              (C = s.wamMessageSendPerfReporter) == null ||
                C.startWrittenWireStage());
            var E = yield a.sendQueue.enqueue(
              o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(L),
            );
            switch (
              ((b = s.wamMessageSendPerfReporter) == null ||
                b.postWrittenWireStage(),
              E.success)
            ) {
              case !0: {
                var k;
                o("WAWebCoreActionsODS").logChannelMsgSend();
                var I = E.serverId;
                if (I == null)
                  throw new (o(
                    "WAWebNewsletterErrors",
                  ).MissingNewsletterServerIdError)();
                ((s.serverId = E.serverId),
                  (s.t = E.ack.t),
                  s.updateAck(o("WAAckLevel").ACK.SENT, !0),
                  w(s));
                try {
                  var T, D;
                  ((T = s.wamMessageSendPerfReporter) == null ||
                    T.startSavedStage(),
                    yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).updateNewsletterMsgRecord(s),
                    (D = s.wamMessageSendPerfReporter) == null ||
                      D.postSavedStage());
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
                  (k = s.wamMessageSendReporter) == null || k.postSuccess(),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                    msg: s,
                  }
                );
              }
              case !1: {
                var x;
                return (
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message, ",
                          " from server",
                        ])),
                      E.ack.error,
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-message-fail-server"),
                  s.updateAck(o("WAAckLevel").ACK.FAILED, !0),
                  (x = s.wamMessageSendReporter) == null ||
                    x.postFailure({
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
            var $;
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
              s.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              ($ = s.wamMessageSendReporter) == null ||
                $.postFailure({
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
        M.apply(this, arguments)
      );
    }
    function w(t) {
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
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.base64Thumb,
            a = t.inviteMessage,
            i = t.newsletterWid;
          try {
            var l = o("WAWebStateUtils").unproxy(e),
              s = r("nullthrows")(r("WAWebNewsletterCollection").get(i)),
              u = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
        B.apply(this, arguments)
      );
    }
    ((l.sendNewsletterTextMsg = y),
      (l.resendNewsletterMsg = b),
      (l.sendNewsletterMediaMsg = v),
      (l.sendNewsletterEditMsg = R),
      (l.sendNewsletterPollCreationMsg = E),
      (l.sendNewsletterAlbumMsg = I),
      (l.sendNewsletterPollResultSnapshotMsg = D),
      (l.forwardNewsletterMessage = $),
      (l.sendNewsletterAdminInviteMessage = A),
      (l.sendNewsletterFollowerInviteMessage = O));
  },
  98,
);
