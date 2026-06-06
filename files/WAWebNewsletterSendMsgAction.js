__d(
  "WAWebNewsletterSendMsgAction",
  [
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
    "WAWebMessageSendReporterFrontendDeps",
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
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterSendMsgActionUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebPollResultSnapshotPollTypeEnvelopeEnabled",
    "WAWebProfilePicThumbCollection",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(e, t, n) {
      var a = o("WAWebStateUtils").unproxy(e);
      if (!o("WAWebChatGetters").getIsNewsletter(a))
        throw new (o(
          "WAWebNewsletterErrors",
        ).UnexpectedNonNewsletterChatError)();
      var i = await o("WAWebSendTextMsgChatAction").createTextMsgData(a, t, n);
      if (i == null) throw r("err")("Failed to generate MsgData");
      o("WAWebNewsletterSendMsgActionUtils").validateMsgDataForMsgSend(i, a);
      var l = new (o("WAWebMsgModel").Msg)(i),
        s = n.linkPreview ? "media" : "text";
      return E({ chat: a, msg: l, type: s });
    }
    function h(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e);
      return o("WAWebFrontendMsgGetters").getAsMms(e)
        ? Promise.resolve()
        : E({ chat: t, msg: e, type: "text" });
    }
    function y(e, t, n) {
      if (!o("WAWebChatGetters").getIsNewsletter(e))
        return Promise.reject(
          new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterChatError)(),
        );
      var r =
        t instanceof o("WAWebMsgModel").Msg
          ? t
          : new (o("WAWebMsgModel").Msg)(t);
      return (
        (r.local = !0),
        E({ chat: e, msg: r, type: "media", uploadMediaMsg: n })
      );
    }
    function C(e) {
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
    async function b(t, n) {
      try {
        await o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(
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
          s = await o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(
            {
              type: "edit",
              editType: r || a ? "media" : "text",
              msg: t,
              newsletterJid: o(
                "WAWebNewsletterValidationUtils",
              ).toNewsletterJidOrThrow(t.id.remote.toJid()),
              contentId: l,
            },
          );
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
    }
    async function v(e) {
      var t = e.chat,
        n = e.msgData,
        r = new (o("WAWebMsgModel").Msg)(n),
        a = await E({ chat: t, msg: r, type: "pollCreation" });
      return [r, a];
    }
    async function S(e) {
      var t = e.chat,
        n = e.msg;
      return E({ chat: t, msg: n, type: "text" });
    }
    async function R(e) {
      var t = e.chat,
        n = e.msgData;
      if (!o("WAWebNewsletterGatingUtils").isNewsletterPollForwardingEnabled())
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
        i = await E({ chat: t, msg: a, type: "pollResultSnapshot" });
      return [a, i];
    }
    async function L(e, t) {
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
      var n = await o(
        "WAWebNewsletterSendMsgActionUtils",
      ).prepMsgDataForForward(t);
      return E({
        chat: e,
        msg: o("WAWebMsgModelFromData").msgModelFromMsgData(n),
        type:
          t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT &&
          r("WAWebPollResultSnapshotPollTypeEnvelopeEnabled")()
            ? "pollResultSnapshot"
            : "text",
      });
    }
    async function E(e) {
      var t,
        n,
        r = e.chat,
        a = e.type,
        i = e.uploadMediaMsg,
        l = e.msg;
      if (
        o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterAdminProfilesSenderEnabled(r.newsletterMetadata)
      ) {
        var s, u, _, f;
        l.newsletterAdminProfile =
          (s = (u = r.newsletterMetadata) == null ? void 0 : u.adminProfile) !=
          null
            ? s
            : {
                id: null,
                name: r.name,
                pictureDirectPath:
                  (_ =
                    (f = o(
                      "WAWebProfilePicThumbCollection",
                    ).ProfilePicThumbCollection.get(r.id)) == null
                      ? void 0
                      : f.fullDirectPath) != null
                    ? _
                    : null,
                pictureId: null,
              };
      }
      (C(l),
        (t = l.wamMessageSendPerfReporter) == null || t.startRenderedStage(),
        await r.addQueue.enqueue(Promise.resolve(l)).then(async function (e) {
          (await o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).addNewsletterMsgsRecords([
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(l),
          ]),
            r.msgs.add(e),
            (r.t = l.t));
        }),
        (n = l.wamMessageSendPerfReporter) == null || n.postRenderedStage());
      try {
        var g, h, y, b;
        try {
          i != null && (l = await i(l));
        } catch (e) {
          throw new (o("WAWebNewsletterErrors").NewsletterMediaUploadError)();
        }
        (g = l.wamMessageSendPerfReporter) == null || g.startReadyToSendStage();
        var v = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            r.id.toJid(),
          ),
          S = o("WAWebMsgRcatUtils").getContentIdString(l, !0),
          R =
            a === "media"
              ? {
                  msg: l,
                  type: a,
                  newsletterJid: v,
                  mediaHandle: l.mediaHandle,
                  contentId:
                    S != null &&
                    o(
                      "WAWebNewsletterGatingUtils",
                    ).isRCATFieldGenerationEnabled()
                      ? o("WAWebMsgRcatUtils").getContentIdString(l, !0)
                      : null,
                }
              : { msg: l, type: a, newsletterJid: v };
        ((h = l.wamMessageSendPerfReporter) == null || h.postReadyToSendStage(),
          (y = l.wamMessageSendPerfReporter) == null ||
            y.startWrittenWireStage());
        var L = await r.sendQueue.enqueue(
          o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(R),
        );
        switch (
          ((b = l.wamMessageSendPerfReporter) == null ||
            b.postWrittenWireStage(),
          L.success)
        ) {
          case !0: {
            var E;
            o("WAWebCoreActionsODS").logChannelMsgSend();
            var k = L.serverId;
            if (k == null)
              throw new (o(
                "WAWebNewsletterErrors",
              ).MissingNewsletterServerIdError)();
            ((l.serverId = L.serverId),
              (l.t = L.ack.t),
              l.updateAck(o("WAAckLevel").ACK.SENT, !0));
            try {
              var I, T;
              ((I = l.wamMessageSendPerfReporter) == null ||
                I.startSavedStage(),
                await o(
                  "WAWebNewsletterUpdateMsgsRecordsJob",
                ).updateNewsletterMsgRecord(l),
                (T = l.wamMessageSendPerfReporter) == null ||
                  T.postSavedStage());
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
              (E = l.wamMessageSendReporter) == null || E.postSuccess(),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msg: l,
              }
            );
          }
          case !1: {
            var D;
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to send message, ",
                      " from server",
                    ])),
                  L.ack.error,
                )
                .tags("newsletter")
                .sendLogs("newsletter-send-message-fail-server"),
              l.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              (D = l.wamMessageSendReporter) == null ||
                D.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK,
                  isTerminal: !1,
                }),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_NETWORK,
              }
            );
          }
        }
      } catch (e) {
        var x;
        return (
          e instanceof o("WAWebNewsletterErrors").MissingNewsletterServerIdError
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
          l.updateAck(o("WAAckLevel").ACK.FAILED, !0),
          (x = l.wamMessageSendReporter) == null ||
            x.postFailure({
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
              }
            : {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
        );
      } finally {
        ((l.wamMessageSendReporter = null),
          (l.wamMessageSendPerfReporter = null));
      }
    }
    async function k(e, t) {
      var n = t.base64Thumb,
        a = t.invitee,
        i = t.inviteMessage,
        l = t.newsletterWid;
      try {
        var s = o("WAWebStateUtils").unproxy(e),
          u = await o(
            "WAWebMexCreateNewsletterAdminInviteJob",
          ).createNewsletterAdminInvite(
            o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
              l.toJid(),
            ),
            a,
          ),
          c = u.inviteExpiration,
          d = r("WANullthrows")(r("WAWebNewsletterCollection").get(l)),
          m = o("WAWebUserPrefsMeUser").getMeUser(),
          p = babelHelpers.extends(
            {
              ack: o("WAAckLevel").ACK.CLOCK,
              from: m,
              id: new (r("WAWebMsgKey"))({
                from: m,
                to: s.id,
                id: await r("WAWebMsgKey").newId(),
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
                newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(l),
                newsletterName: d == null ? void 0 : d.name,
                inviteExpiration: r("WANullthrows")(c),
                inviteMessage: i,
                pictureThumbnail: n,
              },
            },
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(s),
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
    }
    async function I(e, t) {
      var n = t.base64Thumb,
        a = t.inviteMessage,
        i = t.newsletterWid;
      try {
        var l = o("WAWebStateUtils").unproxy(e),
          s = r("WANullthrows")(r("WAWebNewsletterCollection").get(i)),
          u = o("WAWebUserPrefsMeUser").getMeUser(),
          c = babelHelpers.extends(
            {
              ack: o("WAAckLevel").ACK.CLOCK,
              from: u,
              id: new (r("WAWebMsgKey"))({
                from: u,
                to: l.id,
                id: await r("WAWebMsgKey").newId(),
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
                newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(i),
                newsletterName: s == null ? void 0 : s.name,
                inviteMessage: a,
                pictureThumbnail: n,
              },
            },
            o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(l),
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
    }
    ((l.sendNewsletterTextMsg = g),
      (l.resendNewsletterMsg = h),
      (l.sendNewsletterMediaMsg = y),
      (l.sendNewsletterEditMsg = b),
      (l.sendNewsletterPollCreationMsg = v),
      (l.sendNewsletterAlbumMsg = S),
      (l.sendNewsletterPollResultSnapshotMsg = R),
      (l.forwardNewsletterMessage = L),
      (l.sendNewsletterAdminInviteMessage = k),
      (l.sendNewsletterFollowerInviteMessage = I));
  },
  98,
);
