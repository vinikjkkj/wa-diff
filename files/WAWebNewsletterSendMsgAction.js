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
        r,
        a = e.chat,
        i = e.type,
        l = e.uploadMediaMsg,
        s = e.msg;
      if (
        (t = a.newsletterMetadata) != null &&
        t.adminProfile &&
        o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterAdminProfilesSenderEnabled(a.newsletterMetadata)
      ) {
        var u;
        s.newsletterAdminProfile =
          (u = a.newsletterMetadata) == null ? void 0 : u.adminProfile;
      }
      (C(s),
        (n = s.wamMessageSendPerfReporter) == null || n.startRenderedStage(),
        await a.addQueue.enqueue(Promise.resolve(s)).then(async function (e) {
          (await o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).addNewsletterMsgsRecords([
            o("WAWebMsgDataFromModel").msgDataFromMsgModel(s),
          ]),
            a.msgs.add(e),
            (a.t = s.t));
        }),
        (r = s.wamMessageSendPerfReporter) == null || r.postRenderedStage());
      try {
        var _, f, g, h;
        try {
          l != null && (s = await l(s));
        } catch (e) {
          throw new (o("WAWebNewsletterErrors").NewsletterMediaUploadError)();
        }
        (_ = s.wamMessageSendPerfReporter) == null || _.startReadyToSendStage();
        var y = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            a.id.toJid(),
          ),
          b = o("WAWebMsgRcatUtils").getContentIdString(s, !0),
          v =
            i === "media"
              ? {
                  msg: s,
                  type: i,
                  newsletterJid: y,
                  mediaHandle: s.mediaHandle,
                  contentId:
                    b != null &&
                    o(
                      "WAWebNewsletterGatingUtils",
                    ).isRCATFieldGenerationEnabled()
                      ? o("WAWebMsgRcatUtils").getContentIdString(s, !0)
                      : null,
                }
              : { msg: s, type: i, newsletterJid: y };
        ((f = s.wamMessageSendPerfReporter) == null || f.postReadyToSendStage(),
          (g = s.wamMessageSendPerfReporter) == null ||
            g.startWrittenWireStage());
        var S = await a.sendQueue.enqueue(
          o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(v),
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
                await o(
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msg: s,
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_NETWORK,
              }
            );
          }
        }
      } catch (e) {
        var T;
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
              }
            : {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
        );
      } finally {
        ((s.wamMessageSendReporter = null),
          (s.wamMessageSendPerfReporter = null));
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
