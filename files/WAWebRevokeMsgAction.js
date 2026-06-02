__d(
  "WAWebRevokeMsgAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonProcessRevoke",
    "WAWebApiChat",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBizCoexGatingUtils",
    "WAWebBotBaseGating",
    "WAWebCmd",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreRevokeMsgs",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebFtsClient",
    "WAWebMedia",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebRevoke",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSendRevokeMessageWamEvent",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStateUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "err",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n) {
      var r,
        a,
        i,
        l = e.data,
        s = o("WAWebFrontendMsgGetters").getChat(l),
        u =
          (r = s == null || (a = s.id) == null ? void 0 : a.toString()) != null
            ? r
            : "",
        c = (s == null || (i = s.contact) == null ? void 0 : i.isHosted) === !0,
        d =
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() === !0,
        m =
          e.type === "message"
            ? f(
                { type: "message", data: o("WAWebStateUtils").unproxy(e.data) },
                t,
                n,
              )
            : f(e, t, n);
      return m.then(function (e) {
        return (
          o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
            e.messageSendResult ===
              o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexDeleteAlert(
              u,
              c,
            ) &&
            (o("WAWebCoexEditDeleteAlertUtils").markCoexDeleteAlertShown(u),
            o("WAWebOpenCoexEditDeleteAlertModal").openCoexDeleteAlertModal(d)),
          e
        );
      });
    }
    function _(e, t) {
      return C(o("WAWebStateUtils").unproxy(e), t);
    }
    async function f(t, n, a, i) {
      var l;
      i === void 0 && (i = !1);
      var c = t.data;
      if (
        n === o("WAWebCmd").Revoke.Sender &&
        !c.id.fromMe &&
        !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(c)
      )
        return Promise.reject(r("err")("revoking received message"));
      var d =
          c.id.remote.isGroup() && t.type === "addon"
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMeUser(),
        m =
          c.id.remote.isGroup() &&
          ((l = o("WAWebFrontendMsgGetters").getChat(c).groupMetadata) == null
            ? void 0
            : l.isLidAddressingMode),
        p = void 0;
      c.id.remote.isGroup() &&
        (p = m === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : d);
      var f = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: c.id.remote,
          fromMe: !0,
          participant: p,
        }),
        g = y(n),
        h = o("WATimeUtils").unixTime(),
        C = h - o("WAWebMsgGetters").getT(c),
        b = {
          id: f,
          from: m === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : d,
          to: c.id.remote,
          author: p,
          t: h,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
          subtype: y(n),
          protocolMessageKey: c.id,
          clearMedia: !!a,
          local: !0,
          revokeDuration: C,
          revokeTimestamp: h,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        };
      if (t.type === "addon")
        return o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var n = t.data;
              if (n.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted)
                throw r("err")(
                  "_sendRevoke: only decrypted comment can be revoked from the UI",
                );
              var a = babelHelpers.extends({}, b, {
                  kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
                  targetMessageKey: n.parentMsgKey,
                  revokeAddonType: n.type,
                }),
                i = await o("WAWebSendMsgRecordAction").sendAddonRecord(a),
                l = i.messageSendResult;
              return (
                l === o("WAWebSendMsgResultAction").SendMsgResult.OK
                  ? (new (o(
                      "WAWebSendRevokeMessageWamEvent",
                    ).SendRevokeMessageWamEvent)({
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(c),
                      messageMediaType:
                        o("WAWebWamMsgUtils").getWamMediaType(c),
                      revokeSendDelay: C,
                    }).commit(),
                    await o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                      babelHelpers.extends({}, a, {
                        t: o("WAWebMsgGetters").getT(c),
                        ack: o("WAWebAck").ACK.SENT,
                      }),
                      n,
                    ))
                  : o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to send revoke addon",
                          ])),
                      )
                      .tags("addons", "messaging")
                      .sendLogs("failedSendRevokeMsg: " + n.type),
                i
              );
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted();
      var v = babelHelpers.extends({}, b);
      if (o("WAWebBotBaseGating").isBotEnabled()) {
        var S,
          R = null,
          L =
            (S = c.mentionedJidList) == null
              ? void 0
              : S.find(function (e) {
                  return e.isBot();
                }),
          E = o("WAWebMsgGetters").getSender(c);
        if (
          (E && E.isBot()
            ? (R = E)
            : L != null && c.isForwarded !== !0 && (R = L),
          R != null)
        ) {
          var k;
          R =
            (k = o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).getDeprecatedPnChatForFbidInvoke(R)) != null
              ? k
              : R;
        }
        ((v.botRespOrInvocationRevokeBotWid = R),
          c.botTargetSenderJid instanceof r("WAWebWid") &&
            (v.botTargetSenderJid = c.botTargetSenderJid));
      }
      var I = new (o("WAWebMsgModel").Msg)(v);
      return (
        (I.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: I.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(I),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(I),
        })),
        I.wamMessageSendPerfReporter.setIsRevokeMessage(!0),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              try {
                var e, n;
                ((e = I.wamMessageSendPerfReporter) == null ||
                  e.startSavedStage(),
                  await o("WAWebDBProcessMessage").storeMessages(
                    [v],
                    o("WAWebFrontendMsgGetters").getChat(c).id,
                  ),
                  (n = I.wamMessageSendPerfReporter) == null ||
                    n.postSavedStage());
              } catch (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "_sendRevoke: failed to storeMessages into storage",
                        ])),
                    )
                    .verbose()
                    .sendLogs("storeMessages failed"),
                  e
                );
              }
              var a = await o("WAWebSendMsgRecordAction").sendMsgRecord(I),
                l = a.messageSendResult;
              if (i)
                throw (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "_sendRevoke path for associated with bot plugin msg",
                      ])),
                  ),
                  r("err")("Expected exit for associated with bot plugin msg")
                );
              return l === o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? (new (o(
                    "WAWebSendRevokeMessageWamEvent",
                  ).SendRevokeMessageWamEvent)({
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(c),
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(c),
                    revokeSendDelay: C,
                  }).commit(),
                  o("WAWebDBStoreRevokeMsgs")
                    .processRevokeMsgs([
                      {
                        revokeMsgKey: c.id,
                        newMsgKey: f,
                        timestamp: o("WAWebMsgGetters").getT(c),
                        revokeTimestamp: h,
                        subtype: g,
                        sender: d,
                        viewMode: I.viewMode,
                      },
                    ])
                    .then(async function () {
                      return (
                        o(
                          "WAWebUpdateLastAddOnPreviewChatAction",
                        ).deleteModelsForLastAddOnPreview([c.id.toString()]),
                        await o("WAWebPersistedJobManagerWorkerCompatible")
                          .getJobManager()
                          .waitUntilPersisted(
                            o(
                              "WAWebPersistedJobDefinitions",
                            ).jobSerializers.deleteAddOns(
                              o("WAWebFrontendMsgGetters")
                                .getChat(c)
                                .id.toString(),
                              [c.id.toString()],
                            ),
                          ),
                        _(t.data, {
                          msgKey: f,
                          subtype: g,
                          sender: d,
                          revokeTimestamp: h,
                          viewMode: I.viewMode,
                        }),
                        {
                          messageSendResult: o("WAWebSendMsgResultAction")
                            .SendMsgResult.OK,
                        }
                      );
                    }))
                : Promise.resolve({
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  });
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    function g(e, t) {
      f(
        { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        t,
        !1,
        !0,
      ).catch(function (e) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[bot revoke] sendAssociatedBotPluginRevoke: ",
              "",
            ])),
          e instanceof Error ? e.message : String(e),
        );
      });
    }
    function h(e, t, n) {
      return f(
        { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        t,
        n,
        !1,
      );
    }
    function y(e) {
      switch (e) {
        case o("WAWebCmd").Revoke.Sender:
          return "sender_revoke";
        case o("WAWebCmd").Revoke.Admin:
          return "admin_revoke";
      }
    }
    function C(e, t) {
      var n,
        a,
        i,
        l = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      if (
        !o("WAWebRevoke").isWithinRevokeWindow({
          revokedMsgKey: e.id,
          revokedMsgTimestamp: e.t,
          revokeTimestamp: o("WATimeUtils").unixTime(),
        })
      ) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "revoke: outside of revoke window, ",
              " has not been revoked",
            ])),
          e.id.toString(),
        );
        return;
      }
      (o("WAWebMsgModelUtils").typeIsMms(e) && o("WAWebMedia").deregisterMsg(e),
        l == null || l.removeFromCollection(e),
        e.trigger("revoked"),
        o("WAWebMsgGetters").clearMsgGetterCacheFor(e),
        o("WAWebFrontendMsgGetters").clearFrontendMsgGetterCacheFor(e));
      var s = e.getCollection(),
        u = e.id,
        c = o("WAWebRevoke").getMsgKeyAfterRevoke({
          originalKey: u,
          revokeKey: t.msgKey,
        }),
        p = e.getMsgChunk();
      (p && p.replaceId(u, c),
        e.forEachThreadMsgChunk(function (e) {
          e.replaceId(u, c);
        }),
        s.replaceId(u, c));
      var f = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1,
        g = (a = l == null ? void 0 : l.isActiveUnreadMsg(e)) != null ? a : !1,
        h = e.associationType;
      if (
        h != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        var y = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(h);
        y &&
          y.processorType ===
            o("WAWebAssociationProcessorConstants").AssociationProcessorType
              .WithDetachedMessages &&
          e.detachAssociatedMsg();
      }
      var C = {
        isOverwrittenByRevoke: !0,
        id: c,
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        revokeSender: t.sender,
        revokeTimestamp: t.revokeTimestamp,
        protocolMessageKey: u,
        body: void 0,
        caption: void 0,
        clientUrl: void 0,
        deprecatedMms3Url: void 0,
        loc: void 0,
        lat: void 0,
        lng: void 0,
        isLive: void 0,
        accuracy: void 0,
        speed: void 0,
        degrees: void 0,
        comment: void 0,
        sequence: void 0,
        shareDuration: void 0,
        finalLat: void 0,
        finalLng: void 0,
        finalAccuracy: void 0,
        finalThumbnail: void 0,
        finalSpeed: void 0,
        finalDegrees: void 0,
        finalTimeOffset: void 0,
        title: void 0,
        description: void 0,
        matchedText: void 0,
        thumbnail: void 0,
        richPreviewType: void 0,
        doNotPlayInline: void 0,
        paymentLinkMetadata: void 0,
        quotedMsg: void 0,
        quotedStanzaID: void 0,
        quotedRemoteJid: void 0,
        quotedParticipant: void 0,
        mediaData: void 0,
        mentionedJidList: void 0,
        groupMentions: void 0,
        vcardList: void 0,
        star: !1,
        kicState: void 0,
        kicTimestampMs: void 0,
        kicKey: void 0,
        errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
        isSendFailure: !1,
        viewMode:
          (i = t.viewMode) != null
            ? i
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        associationType: void 0,
        parentMsgKey: void 0,
      };
      if ((e.set(C), e.trigger("change:msgKey", { newKey: c, oldKey: u }), l)) {
        var b;
        (u.equals(l.lastReceivedKey) && (l.lastReceivedKey = c),
          (b = l.composeQuotedMsg) != null &&
            b.id.equals(u) &&
            (l.composeQuotedMsg = null),
          f &&
            ((l.unreadCount = Math.max(l.unreadCount - 1, 0)),
            (l.unreadDividerOffset += 1),
            o("WAWebApiChat").reduceChatUnreadCount(l.id.toString())),
          g && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0)));
      }
      if (r("WAWebWid").isBroadcast(u.remote)) {
        var v = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u),
          S = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(c);
        if (!v || !S || v.length !== S.length) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "cannot fanout revoke: ",
                " ",
                "",
              ])),
            String(v),
            String(S),
          );
          return;
        }
        (r("lodash")
          .zip(v, S)
          .forEach(function (e) {
            var n = s.get(e[0]);
            n && _(n, { msgKey: e[1], subtype: t.subtype, sender: t.sender });
          }),
          o("WAWebFtsClient")
            .ftsClient.purge([String(e.rowId)])
            .catch(r("WAWebNoop")));
        var R = l ? l.id.toString() : e.id.remote.toString();
        (o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview([u.toString()]),
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                R.toString(),
                [u.toString()],
              ),
            ));
      }
    }
    ((l.sendRevoke = p),
      (l.revoke = _),
      (l.sendAssociatedBotPluginRevoke = g),
      (l.sendAssociatedChildMsgRevoke = h));
  },
  98,
);
