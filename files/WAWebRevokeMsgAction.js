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
    "WAWebDBProcessRevokeMsgs",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebFtsClient",
    "WAWebMedia",
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
    "WAWebRequestDeleteAddOns",
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
    "WAWebViewModeUtils",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t, n) {
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
            ? h({
                clearMedia: n,
                record: {
                  type: "message",
                  data: o("WAWebStateUtils").unproxy(e.data),
                },
                type: t,
              })
            : h({ clearMedia: n, record: e, type: t });
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
    function g(e, t) {
      return S(o("WAWebStateUtils").unproxy(e), t);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.clearMedia,
            i = e.isAssociatedBotPluginRevoke,
            l = i === void 0 ? !1 : i,
            s = e.record,
            u = e.type,
            c = s.data;
          if (
            u === o("WAWebCmd").Revoke.Sender &&
            !c.id.fromMe &&
            !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(c)
          )
            return (_ || (_ = n("Promise"))).reject(
              r("err")("revoking received message"),
            );
          var f =
              c.id.remote.isGroup() && s.type === "addon"
                ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            h =
              c.id.remote.isGroup() &&
              ((t = o("WAWebFrontendMsgGetters").getChat(c).groupMetadata) ==
              null
                ? void 0
                : t.isLidAddressingMode),
            y = void 0;
          c.id.remote.isGroup() &&
            (y =
              h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : f);
          var C = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: c.id.remote,
              fromMe: !0,
              participant: y,
            }),
            b = v(u),
            S = o("WATimeUtils").unixTime(),
            R = S - o("WAWebMsgGetters").getT(c),
            L = {
              id: C,
              from:
                h === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : f,
              to: c.id.remote,
              author: y,
              t: S,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: v(u),
              protocolMessageKey: c.id,
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
                            o("WAWebWamMsgUtils").getWamMessageType(c),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(c),
                          revokeSendDelay: R,
                        }).commit(),
                        yield o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                          babelHelpers.extends({}, t, {
                            t: o("WAWebMsgGetters").getT(c),
                            ack: o("WAWebAck").ACK.SENT,
                          }),
                          e,
                        ))
                      : o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
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
                (k = c.mentionedJidList) == null
                  ? void 0
                  : k.find(function (e) {
                      return e.isBot();
                    }),
              D = o("WAWebMsgGetters").getSender(c);
            if (
              (D && D.isBot()
                ? (I = D)
                : T != null && c.isForwarded !== !0 && (I = T),
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
              c.botTargetSenderJid instanceof r("WAWebWid") &&
                (E.botTargetSenderJid = c.botTargetSenderJid));
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
                        o("WAWebFrontendMsgGetters").getChat(c).id,
                      ),
                      (t = $.wamMessageSendPerfReporter) == null ||
                        t.postSavedStage());
                  } catch (e) {
                    throw (
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(c),
                        messageMediaType:
                          o("WAWebWamMsgUtils").getWamMediaType(c),
                        revokeSendDelay: R,
                      }).commit(),
                      o("WAWebDBProcessRevokeMsgs")
                        .processRevokeMsgs([
                          {
                            revokeMsgKey: c.id,
                            newMsgKey: C,
                            timestamp: o("WAWebMsgGetters").getT(c),
                            revokeTimestamp: S,
                            subtype: b,
                            sender: f,
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
                                  c.id.toString(),
                                ]),
                                yield o(
                                  "WAWebRequestDeleteAddOns",
                                ).requestDeleteAddOns(
                                  o("WAWebFrontendMsgGetters")
                                    .getChat(c)
                                    .id.toString(),
                                  [c.id.toString()],
                                ),
                                g(s.data, {
                                  msgKey: C,
                                  subtype: b,
                                  sender: f,
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
                    : (_ || (_ = n("Promise"))).resolve({
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
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
      h({
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
    function b(e, t, n) {
      return h({
        clearMedia: n,
        isAssociatedBotPluginRevoke: !1,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        type: t,
      });
    }
    function v(e) {
      switch (e) {
        case o("WAWebCmd").Revoke.Sender:
          return "sender_revoke";
        case o("WAWebCmd").Revoke.Admin:
          return "admin_revoke";
      }
    }
    function S(e, t) {
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
      var d = e.getCollection(),
        m = e.id,
        p = o("WAWebRevoke").getMsgKeyAfterRevoke({
          originalKey: m,
          revokeKey: t.msgKey,
        }),
        _ = e.getMsgChunk();
      (_ && _.replaceId(m, p),
        e.forEachThreadMsgChunk(function (e) {
          e.replaceId(m, p);
        }),
        d.replaceId(m, p));
      var f = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1,
        h = (a = l == null ? void 0 : l.isActiveUnreadMsg(e)) != null ? a : !1,
        y = e.associationType,
        C = o("WAWebViewModeUtils").getRevokedViewMode(
          e.viewMode,
          y,
          (i = t.viewMode) != null
            ? i
            : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        );
      if (y != null) {
        var b = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(y);
        b &&
          b.processorType ===
            o("WAWebAssociationProcessorConstants").AssociationProcessorType
              .WithDetachedMessages &&
          e.detachAssociatedMsg();
      }
      var v = {
        isOverwrittenByRevoke: !0,
        id: p,
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        revokeSender: t.sender,
        revokeTimestamp: t.revokeTimestamp,
        protocolMessageKey: m,
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
        viewMode: C,
        associationType: void 0,
        parentMsgKey: void 0,
      };
      if ((e.set(v), e.trigger("change:msgKey", { newKey: p, oldKey: m }), l)) {
        var S;
        (m.equals(l.lastReceivedKey) && (l.lastReceivedKey = p),
          (S = l.composeQuotedMsg) != null &&
            S.id.equals(m) &&
            (l.composeQuotedMsg = null),
          f &&
            ((l.unreadCount = Math.max(l.unreadCount - 1, 0)),
            (l.unreadDividerOffset += 1),
            o("WAWebApiChat")
              .reduceChatUnreadCount(l.id.toString())
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "revokeInternal: failed to reduce chat unread count",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("reduceChatUnreadCount failed");
              })),
          h && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0)));
      }
      if (r("WAWebWid").isBroadcast(m.remote)) {
        var R = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(m),
          L = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(p);
        if (!R || !L || R.length !== L.length) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "cannot fanout revoke: ",
                " ",
                "",
              ])),
            String(R),
            String(L),
          );
          return;
        }
        (R.forEach(function (e, n) {
          var r = d.get(e);
          r && g(r, { msgKey: L[n], subtype: t.subtype, sender: t.sender });
        }),
          o("WAWebFtsClient")
            .ftsClient.purge([String(e.rowId)])
            .catch(r("WAWebNoop")));
        var E = l ? l.id.toString() : e.id.remote.toString();
        (o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview([m.toString()]),
          o("WAWebRequestDeleteAddOns").requestDeleteAddOnsFireAndForget(
            E.toString(),
            [m.toString()],
          ));
      }
    }
    ((l.sendRevoke = f),
      (l.revoke = g),
      (l.sendAssociatedBotPluginRevoke = C),
      (l.sendAssociatedChildMsgRevoke = b));
  },
  98,
);
