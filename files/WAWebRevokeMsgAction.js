__d(
  "WAWebRevokeMsgAction",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonProcessRevoke",
    "WAWebApiChat",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
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
            ? g({
                clearMedia: n,
                record: {
                  type: "message",
                  data: o("WAWebStateUtils").unproxy(e.data),
                },
                type: t,
              })
            : g({ clearMedia: n, record: e, type: t });
      return m.then(function (e) {
        return (
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
    function f(e, t) {
      return v(o("WAWebStateUtils").unproxy(e), t);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.clearMedia,
            i = e.isAssociatedBotPluginRevoke,
            l = i === void 0 ? !1 : i,
            s = e.record,
            u = e.type,
            _ = s.data;
          if (
            u === o("WAWebCmd").Revoke.Sender &&
            !_.id.fromMe &&
            !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(_)
          )
            return (p || (p = n("Promise"))).reject(
              r("err")("revoking received message"),
            );
          var g =
              _.id.remote.isGroup() && s.type === "addon"
                ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            h =
              _.id.remote.isGroup() &&
              ((t = o("WAWebFrontendMsgGetters").getChat(_).groupMetadata) ==
              null
                ? void 0
                : t.isLidAddressingMode),
            y = void 0;
          _.id.remote.isGroup() &&
            (y =
              h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : g);
          var C = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: _.id.remote,
              fromMe: !0,
              participant: y,
            }),
            v = b(u),
            S = o("WATimeUtils").unixTime(),
            R = S - o("WAWebMsgGetters").getT(_),
            L = {
              id: C,
              from:
                h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : g,
              to: _.id.remote,
              author: y,
              t: S,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: b(u),
              protocolMessageKey: _.id,
              clearMedia: !!a,
              local: !0,
              revokeDuration: R,
              revokeTimestamp: S,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            };
          if (s.type === "addon")
            return o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = s.data;
                  if (e.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted)
                    throw r("err")(
                      "_sendRevoke: only decrypted comment can be revoked from the UI",
                    );
                  var t = babelHelpers.extends({}, L, {
                      kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
                      targetMessageKey: e.parentMsgKey,
                      revokeAddonType: e.type,
                    }),
                    n = yield o("WAWebSendMsgRecordAction").sendAddonRecord(t),
                    a = n.messageSendResult;
                  return (
                    a === o("WAWebSendMsgResultAction").SendMsgResult.OK
                      ? (new (o(
                          "WAWebSendRevokeMessageWamEvent",
                        ).SendRevokeMessageWamEvent)({
                          messageType:
                            o("WAWebWamMsgUtils").getWamMessageType(_),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(_),
                          revokeSendDelay: R,
                        }).commit(),
                        yield o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                          babelHelpers.extends({}, t, {
                            t: o("WAWebMsgGetters").getT(_),
                            ack: o("WAWebAck").ACK.SENT,
                          }),
                          e,
                        ))
                      : o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "failed to send revoke addon",
                              ])),
                          )
                          .tags("addons", "messaging")
                          .sendLogs("failedSendRevokeMsg: " + e.type),
                    n
                  );
                }),
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted();
          var E = babelHelpers.extends({}, L);
          if (o("WAWebBotBaseGating").isBotEnabled()) {
            var k,
              I = null,
              T =
                (k = _.mentionedJidList) == null
                  ? void 0
                  : k.find(function (e) {
                      return e.isBot();
                    }),
              D = o("WAWebMsgGetters").getSender(_);
            if (
              (D && D.isBot()
                ? (I = D)
                : T != null && _.isForwarded !== !0 && (I = T),
              I != null)
            ) {
              var x;
              I =
                (x = o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).getDeprecatedPnChatForFbidInvoke(I)) != null
                  ? x
                  : I;
            }
            ((E.botRespOrInvocationRevokeBotWid = I),
              _.botTargetSenderJid instanceof r("WAWebWid") &&
                (E.botTargetSenderJid = _.botTargetSenderJid));
          }
          var $ = new (o("WAWebMsgModel").Msg)(E);
          return (
            ($.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: $.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType($),
              messageType: o("WAWebWamMsgUtils").getWamMessageType($),
            })),
            $.wamMessageSendPerfReporter.setIsRevokeMessage(!0),
            o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var e, t;
                    ((e = $.wamMessageSendPerfReporter) == null ||
                      e.startSavedStage(),
                      yield o("WAWebDBProcessMessage").storeMessages(
                        [E],
                        o("WAWebFrontendMsgGetters").getChat(_).id,
                      ),
                      (t = $.wamMessageSendPerfReporter) == null ||
                        t.postSavedStage());
                  } catch (e) {
                    throw (
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "_sendRevoke: failed to storeMessages into storage",
                            ])),
                        )
                        .verbose()
                        .sendLogs("storeMessages failed"),
                      e
                    );
                  }
                  var a = yield o("WAWebSendMsgRecordAction").sendMsgRecord($),
                    i = a.messageSendResult;
                  if (l)
                    throw (
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "_sendRevoke path for associated with bot plugin msg",
                          ])),
                      ),
                      r("err")(
                        "Expected exit for associated with bot plugin msg",
                      )
                    );
                  return i === o("WAWebSendMsgResultAction").SendMsgResult.OK
                    ? (new (o(
                        "WAWebSendRevokeMessageWamEvent",
                      ).SendRevokeMessageWamEvent)({
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(_),
                        messageMediaType:
                          o("WAWebWamMsgUtils").getWamMediaType(_),
                        revokeSendDelay: R,
                      }).commit(),
                      o("WAWebDBStoreRevokeMsgs")
                        .processRevokeMsgs([
                          {
                            revokeMsgKey: _.id,
                            newMsgKey: C,
                            timestamp: o("WAWebMsgGetters").getT(_),
                            revokeTimestamp: S,
                            subtype: v,
                            sender: g,
                            viewMode: $.viewMode,
                          },
                        ])
                        .then(
                          n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* () {
                              return (
                                o(
                                  "WAWebUpdateLastAddOnPreviewChatAction",
                                ).deleteModelsForLastAddOnPreview([
                                  _.id.toString(),
                                ]),
                                yield o(
                                  "WAWebPersistedJobManagerWorkerCompatible",
                                )
                                  .getJobManager()
                                  .waitUntilPersisted(
                                    o(
                                      "WAWebPersistedJobDefinitions",
                                    ).jobSerializers.deleteAddOns(
                                      o("WAWebFrontendMsgGetters")
                                        .getChat(_)
                                        .id.toString(),
                                      [_.id.toString()],
                                    ),
                                  ),
                                f(s.data, {
                                  msgKey: C,
                                  subtype: v,
                                  sender: g,
                                  revokeTimestamp: S,
                                  viewMode: $.viewMode,
                                }),
                                {
                                  messageSendResult: o(
                                    "WAWebSendMsgResultAction",
                                  ).SendMsgResult.OK,
                                }
                              );
                            },
                          ),
                        ))
                    : (p || (p = n("Promise"))).resolve({
                        messageSendResult: o("WAWebSendMsgResultAction")
                          .SendMsgResult.ERROR_UNKNOWN,
                      });
                }),
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted()
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, n) {
      g({
        clearMedia: !1,
        isAssociatedBotPluginRevoke: !0,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(t) },
        type: n,
      }).catch(function (t) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot revoke] sendAssociatedBotPluginRevoke: ",
              "",
            ])),
          t instanceof Error ? t.message : String(t),
        );
      });
    }
    function C(e, t, n) {
      return g({
        clearMedia: n,
        isAssociatedBotPluginRevoke: !1,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        type: t,
      });
    }
    function b(e) {
      switch (e) {
        case o("WAWebCmd").Revoke.Sender:
          return "sender_revoke";
        case o("WAWebCmd").Revoke.Admin:
          return "admin_revoke";
      }
    }
    function v(e, t) {
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
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
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
      var c = e.getCollection(),
        d = e.id,
        m = o("WAWebRevoke").getMsgKeyAfterRevoke({
          originalKey: d,
          revokeKey: t.msgKey,
        }),
        p = e.getMsgChunk();
      (p && p.replaceId(d, m),
        e.forEachThreadMsgChunk(function (e) {
          e.replaceId(d, m);
        }),
        c.replaceId(d, m));
      var _ = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1,
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
        id: m,
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        revokeSender: t.sender,
        revokeTimestamp: t.revokeTimestamp,
        protocolMessageKey: d,
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
      if ((e.set(C), e.trigger("change:msgKey", { newKey: m, oldKey: d }), l)) {
        var b;
        (d.equals(l.lastReceivedKey) && (l.lastReceivedKey = m),
          (b = l.composeQuotedMsg) != null &&
            b.id.equals(d) &&
            (l.composeQuotedMsg = null),
          _ &&
            ((l.unreadCount = Math.max(l.unreadCount - 1, 0)),
            (l.unreadDividerOffset += 1),
            o("WAWebApiChat").reduceChatUnreadCount(l.id.toString())),
          g && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0)));
      }
      if (r("WAWebWid").isBroadcast(d.remote)) {
        var v = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(d),
          S = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(m);
        if (!v || !S || v.length !== S.length) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "cannot fanout revoke: ",
                " ",
                "",
              ])),
            String(v),
            String(S),
          );
          return;
        }
        (v.forEach(function (e, n) {
          var r = c.get(e);
          r && f(r, { msgKey: S[n], subtype: t.subtype, sender: t.sender });
        }),
          o("WAWebFtsClient")
            .ftsClient.purge([String(e.rowId)])
            .catch(r("WAWebNoop")));
        var R = l ? l.id.toString() : e.id.remote.toString();
        (o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview([d.toString()]),
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                R.toString(),
                [d.toString()],
              ),
            ));
      }
    }
    ((l.sendRevoke = _),
      (l.revoke = f),
      (l.sendAssociatedBotPluginRevoke = y),
      (l.sendAssociatedChildMsgRevoke = C));
  },
  98,
);
