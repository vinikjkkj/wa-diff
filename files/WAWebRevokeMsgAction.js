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
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
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
            a,
            i = e.clearMedia,
            l = e.isAssociatedBotPluginRevoke,
            s = l === void 0 ? !1 : l,
            u = e.record,
            c = e.type,
            f = u.data;
          if (
            c === o("WAWebCmd").Revoke.Sender &&
            !f.id.fromMe &&
            !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(f)
          )
            return (_ || (_ = n("Promise"))).reject(
              r("err")("revoking received message"),
            );
          var h =
              f.id.remote.isGroup() && u.type === "addon"
                ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            y =
              f.id.remote.isGroup() &&
              ((t = o("WAWebFrontendMsgGetters").getChat(f).groupMetadata) ==
              null
                ? void 0
                : t.isLidAddressingMode),
            C = void 0;
          f.id.remote.isGroup() &&
            (C =
              y === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : h);
          var b = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: f.id.remote,
              fromMe: !0,
              participant: C,
            }),
            S = v(c),
            R = o("WATimeUtils").unixTime(),
            L = R - o("WAWebMsgGetters").getT(f),
            E = {
              id: b,
              from:
                y === !0 ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : h,
              to: f.id.remote,
              author: C,
              t: R,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: v(c),
              protocolMessageKey: f.id,
              clearMedia: !!i,
              local: !0,
              revokeDuration: L,
              revokeTimestamp: R,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            };
          if (u.type === "addon")
            return o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = u.data;
                  if (e.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted)
                    throw r("err")(
                      "_sendRevoke: only decrypted comment can be revoked from the UI",
                    );
                  var t = babelHelpers.extends({}, E, {
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
                            o("WAWebWamMsgUtils").getWamMessageType(f),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(f),
                          revokeSendDelay: L,
                        }).commit(),
                        yield o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                          babelHelpers.extends({}, t, {
                            t: o("WAWebMsgGetters").getT(f),
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
          var k = babelHelpers.extends({}, E),
            I = o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
              ? ((a = f.botGroupParticipants) != null ? a : []).filter(
                  function (e) {
                    return (
                      e.isUser() &&
                      o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)
                    );
                  },
                )
              : [];
          if (
            (I.length > 0 && (k.botGroupParticipants = [].concat(I)),
            o("WAWebBotBaseGating").isBotEnabled())
          ) {
            var T,
              D = null,
              x =
                (T = f.mentionedJidList) == null
                  ? void 0
                  : T.find(function (e) {
                      return e.isBot();
                    }),
              $ = o("WAWebMsgGetters").getSender(f);
            if (
              ($ && $.isBot()
                ? (D = $)
                : x != null && f.isForwarded !== !0 && (D = x),
              D != null)
            ) {
              var P;
              D =
                (P = o(
                  "WAWebSimpleSignalPNToFBIDMigration",
                ).getDeprecatedPnChatForFbidInvoke(D)) != null
                  ? P
                  : D;
            }
            ((k.botRespOrInvocationRevokeBotWid = D),
              f.botTargetSenderJid instanceof r("WAWebWid") &&
                (k.botTargetSenderJid = f.botTargetSenderJid));
          }
          var N = new (o("WAWebMsgModel").Msg)(k);
          return (
            (N.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: N.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(N),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(N),
            })),
            N.wamMessageSendPerfReporter.setIsRevokeMessage(!0),
            o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var e, t;
                    ((e = N.wamMessageSendPerfReporter) == null ||
                      e.startSavedStage(),
                      yield o("WAWebDBProcessMessage").storeMessages(
                        [k],
                        o("WAWebFrontendMsgGetters").getChat(f).id,
                      ),
                      (t = N.wamMessageSendPerfReporter) == null ||
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
                  var a = yield o("WAWebSendMsgRecordAction").sendMsgRecord(N),
                    i = a.messageSendResult;
                  if (s)
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
                        messageType: o("WAWebWamMsgUtils").getWamMessageType(f),
                        messageMediaType:
                          o("WAWebWamMsgUtils").getWamMediaType(f),
                        revokeSendDelay: L,
                      }).commit(),
                      o("WAWebDBProcessRevokeMsgs")
                        .processRevokeMsgsAndGetCleanupEligibleKeys([
                          {
                            revokeMsgKey: f.id,
                            newMsgKey: b,
                            timestamp: o("WAWebMsgGetters").getT(f),
                            revokeTimestamp: R,
                            subtype: S,
                            sender: h,
                            viewMode: N.viewMode,
                          },
                        ])
                        .then(
                          (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e) {
                              return e.has(f.id.toString())
                                ? (o(
                                    "WAWebUpdateLastAddOnPreviewChatAction",
                                  ).deleteModelsForLastAddOnPreview([
                                    f.id.toString(),
                                  ]),
                                  yield o(
                                    "WAWebRequestDeleteAddOns",
                                  ).requestDeleteAddOns(
                                    o("WAWebFrontendMsgGetters")
                                      .getChat(f)
                                      .id.toString(),
                                    [f.id.toString()],
                                  ),
                                  g(u.data, {
                                    msgKey: b,
                                    subtype: S,
                                    sender: h,
                                    revokeTimestamp: R,
                                    viewMode: N.viewMode,
                                  }),
                                  {
                                    messageSendResult: o(
                                      "WAWebSendMsgResultAction",
                                    ).SendMsgResult.OK,
                                  })
                                : {
                                    messageSendResult: o(
                                      "WAWebSendMsgResultAction",
                                    ).SendMsgResult.ERROR_UNKNOWN,
                                  };
                            });
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
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
