__d(
  "WAWebRevokeMsgAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonProcessRevoke",
    "WAWebAddonService",
    "WAWebApiChat",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendRuntime",
    "WAWebBotBaseGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebBroadcastFanoutKeys",
    "WAWebCmd",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebFtsClient",
    "WAWebMediaMsgRegistration",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendService",
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
    "WAWebRevokeService",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSendRevokeMessageWamEvent",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStateUtils",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n, r) {
      var a,
        i,
        l,
        s = e.data,
        u = o("WAWebFrontendMsgGetters").getChat(s),
        c =
          (a = u == null || (i = u.id) == null ? void 0 : i.toString()) != null
            ? a
            : "",
        d = (u == null || (l = u.contact) == null ? void 0 : l.isHosted) === !0,
        m =
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() === !0,
        p =
          e.type === "message"
            ? g({
                clearMedia: n,
                record: {
                  type: "message",
                  data: o("WAWebStateUtils").unproxy(e.data),
                },
                type: t,
                viewMode: r,
              })
            : g({ clearMedia: n, record: e, type: t, viewMode: r });
      return p.then(function (e) {
        return (
          e.messageSendResult ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK &&
            o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexDeleteAlert(
              c,
              d,
            ) &&
            (o("WAWebCoexEditDeleteAlertUtils").markCoexDeleteAlertShown(c),
            o("WAWebOpenCoexEditDeleteAlertModal").openCoexDeleteAlertModal(m)),
          e
        );
      });
    }
    function f(e, t) {
      return R(o("WAWebStateUtils").unproxy(e), t);
    }
    async function g(t) {
      var n,
        a = t.clearMedia,
        i = t.isAssociatedBotPluginRevoke,
        l = i === void 0 ? !1 : i,
        u = t.record,
        c = t.type,
        d = t.viewMode,
        m = d === void 0 ? o("WAWebViewMode.flow").ViewModeType.VISIBLE : d,
        p = u.data;
      if (
        c === o("WAWebCmd").Revoke.Sender &&
        !p.id.fromMe &&
        !o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(p)
      )
        return Promise.reject(r("err")("revoking received message"));
      var _ =
          p.id.remote.isGroup() && u.type === "addon"
            ? o("WAWebUserUtils").getMeLidUserOrThrow()
            : o("WAWebUserUtils").getMeUserOrThrow(),
        g =
          p.id.remote.isGroup() &&
          ((n = o("WAWebFrontendMsgGetters").getChat(p).groupMetadata) == null
            ? void 0
            : n.isLidAddressingMode),
        h = void 0;
      p.id.remote.isGroup() &&
        (h = g === !0 ? o("WAWebUserUtils").getMeLidUserOrThrow() : _);
      var y = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: p.id.remote,
          fromMe: !0,
          participant: h,
        }),
        R = S(c),
        L = o("WATimeUtils").unixTime(),
        E = L - o("WAWebMsgGetters").getT(p),
        k = {
          id: y,
          from: g === !0 ? o("WAWebUserUtils").getMeLidUserOrThrow() : _,
          to: p.id.remote,
          author: h,
          t: L,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
          subtype: S(c),
          protocolMessageKey: p.id,
          clearMedia: !!a,
          local: !0,
          revokeDuration: E,
          revokeTimestamp: L,
          viewMode: m,
        };
      if (u.type === "addon")
        return o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var t = u.data;
              if (t.kind !== o("WAWebMsgType").MsgKind.CommentDecrypted)
                throw r("err")(
                  "_sendRevoke: only decrypted comment can be revoked from the UI",
                );
              var n = babelHelpers.extends({}, k, {
                  kind: o("WAWebMsgType").MsgKind.ProtocolAddonRevoke,
                  targetMessageKey: t.parentMsgKey,
                  revokeAddonType: t.type,
                }),
                a = await o("WAWebSendMsgRecordAction").sendAddonRecord(n),
                i = a.messageSendResult;
              return (
                i === o("WAWebSendMsgResultAction").SendMsgResult.OK
                  ? (new (o(
                      "WAWebSendRevokeMessageWamEvent",
                    ).SendRevokeMessageWamEvent)({
                      messageType: o("WAWebWamMsgUtils").getWamMessageType(p),
                      messageMediaType:
                        o("WAWebWamMsgUtils").getWamMediaType(p),
                      revokeSendDelay: E,
                    }).commit(),
                    await o("WAWebAddonProcessRevoke").processSentRevokeMsg(
                      babelHelpers.extends({}, n, {
                        t: o("WAWebMsgGetters").getT(p),
                        ack: o("WAWebAck").ACK.SENT,
                      }),
                      t,
                    ))
                  : o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "failed to send revoke addon",
                          ])),
                      )
                      .tags("addons", "messaging")
                      .sendLogs("failedSendRevokeMsg: " + t.type),
                a
              );
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted();
      var I = babelHelpers.extends({}, k),
        T = C(p, c);
      if (
        (T.length > 0 && (I.botGroupParticipants = T),
        o("WAWebBotBaseGating").isBotEnabled())
      ) {
        var D = b(p);
        if (D != null) {
          var x;
          D =
            (x = o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).getDeprecatedPnChatForFbidInvoke(D)) != null
              ? x
              : D;
        }
        ((I.botRespOrInvocationRevokeBotWid = D),
          p.botTargetSenderJid instanceof r("WAWebWid") &&
            (I.botTargetSenderJid = p.botTargetSenderJid));
      }
      var $ = new (o("WAWebMsgModel").Msg)(I);
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
            async function () {
              var e = await (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime")
                      .runtime(o("WAWebMessageSendService").MessageSendService)
                      .storeAndSend(
                        $,
                        [I],
                        o("WAWebFrontendMsgGetters").getChat(p).id,
                        { pathfinderAccountToken: null },
                      )
                  : v($, I, o("WAWebFrontendMsgGetters").getChat(p).id)),
                t = e.messageSendResult;
              if (l)
                throw (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "_sendRevoke path for associated with bot plugin msg",
                      ])),
                  ),
                  r("err")("Expected exit for associated with bot plugin msg")
                );
              return t === o("WAWebSendMsgResultAction").SendMsgResult.OK
                ? (new (o(
                    "WAWebSendRevokeMessageWamEvent",
                  ).SendRevokeMessageWamEvent)({
                    messageType: o("WAWebWamMsgUtils").getWamMessageType(p),
                    messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(p),
                    revokeSendDelay: E,
                  }).commit(),
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime")
                        .runtime(o("WAWebRevokeService").RevokeService)
                        .processSentRevoke({
                          msg: u.data,
                          newKey: y,
                          t: L,
                          subtype: R,
                          sender: _,
                          viewMode: $.viewMode,
                        })
                    : o("WAWebDBProcessRevokeMsgs")
                        .processRevokeMsgsAndGetCleanupEligibleKeys([
                          {
                            revokeMsgKey: p.id,
                            newMsgKey: y,
                            timestamp: o("WAWebMsgGetters").getT(p),
                            revokeTimestamp: L,
                            subtype: R,
                            sender: _,
                            viewMode: $.viewMode,
                          },
                        ])
                        .then(async function (e) {
                          return e.has(p.id.toString())
                            ? (o(
                                "WAWebUpdateLastAddOnPreviewChatAction",
                              ).deleteModelsForLastAddOnPreview([
                                p.id.toString(),
                              ]),
                              await o(
                                "WAWebRequestDeleteAddOns",
                              ).requestDeleteAddOns(
                                o("WAWebFrontendMsgGetters")
                                  .getChat(p)
                                  .id.toString(),
                                [p.id.toString()],
                              ),
                              f(u.data, {
                                msgKey: y,
                                subtype: R,
                                sender: _,
                                revokeTimestamp: L,
                                viewMode: $.viewMode,
                              }),
                              {
                                messageSendResult: o("WAWebSendMsgResultAction")
                                  .SendMsgResult.OK,
                              })
                            : {
                                messageSendResult: o("WAWebSendMsgResultAction")
                                  .SendMsgResult.ERROR_UNKNOWN,
                              };
                        }))
                : Promise.resolve({
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_UNKNOWN,
                  });
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    function h(e, t) {
      g({
        clearMedia: !1,
        isAssociatedBotPluginRevoke: !0,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(e) },
        type: t,
      }).catch(function (e) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[bot revoke] sendAssociatedBotPluginRevoke: ",
              "",
            ])),
          e instanceof Error ? e.message : String(e),
        );
      });
    }
    function y(e) {
      var t = e.clearMedia,
        n = e.msg,
        r = e.type;
      return g({
        clearMedia: t,
        isAssociatedBotPluginRevoke: !1,
        record: { type: "message", data: o("WAWebStateUtils").unproxy(n) },
        type: r,
      });
    }
    function C(e, t) {
      var n,
        r = o("WAWebMsgGetters").getSender(e),
        a = [].concat(
          (n = e.botGroupParticipants) != null ? n : [],
          t === o("WAWebCmd").Revoke.Admin && r != null ? [r] : [],
        ),
        i = new Map();
      return (
        a.forEach(function (e) {
          e.isUser() &&
            o("WAWebBotGroupGatingUtils").isGroupRevokeAgentTarget(e) &&
            i.set(e.toString(), e);
        }),
        Array.from(i.values())
      );
    }
    function b(e) {
      var t;
      if (o("WAWebBotUtils").isHatchBot(e.id.remote)) return null;
      var n = function (n) {
          return (
            n.isBot() &&
            !(
              e.id.remote.isGroup() &&
              o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n)
            )
          );
        },
        r = o("WAWebMsgGetters").getSender(e);
      if (r != null && r.isBot()) return n(r) ? r : null;
      var a = (t = e.mentionedJidList) == null ? void 0 : t.find(n);
      return a != null && e.isForwarded !== !0 ? a : null;
    }
    async function v(e, t, n) {
      try {
        var r, a;
        ((r = e.wamMessageSendPerfReporter) == null || r.startSavedStage(),
          await o("WAWebDBProcessMessage").storeMessages([t], n),
          (a = e.wamMessageSendPerfReporter) == null || a.postSavedStage());
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "_sendRevoke: failed to storeMessages into storage",
                ])),
            )
            .verbose()
            .sendLogs("storeMessages failed"),
          e
        );
      }
      return o("WAWebSendMsgRecordAction").sendMsgRecord(e);
    }
    function S(e) {
      switch (e) {
        case o("WAWebCmd").Revoke.Sender:
          return "sender_revoke";
        case o("WAWebCmd").Revoke.Admin:
          return "admin_revoke";
      }
    }
    function R(e, t) {
      var n,
        a,
        i,
        l = o("WAWebFrontendMsgGetters").getMaybeChat(e);
      if (
        !o("WAWebRevoke").canRevokeOutsideWindow({
          associationType: e.associationType,
          revokedMsgKey: e.id,
          subtype: t.subtype,
        }) &&
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
      (o("WAWebMsgModelUtils").typeIsMms(e) &&
        o("WAWebMediaMsgRegistration").deregisterMsg(e),
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
        _ = e.getMsgChunk();
      (_ && _.replaceId(u, c),
        e.forEachThreadMsgChunk(function (e) {
          e.replaceId(u, c);
        }),
        s.replaceId(u, c));
      var g = (n = l == null ? void 0 : l.isUnreadMsg(e)) != null ? n : !1,
        h = (a = l == null ? void 0 : l.isActiveUnreadMsg(e)) != null ? a : !1,
        y = e.associationType,
        C = o("WAWebViewModeUtils").getRevokedViewMode({
          associationType: y,
          incomingViewMode:
            (i = t.viewMode) != null
              ? i
              : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          msgType: e.type,
          storedViewMode: e.viewMode,
        });
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
        viewMode: C,
        associationType: void 0,
        parentMsgKey: void 0,
      };
      if ((e.set(v), e.trigger("change:msgKey", { newKey: c, oldKey: u }), l)) {
        var S;
        (u.equals(l.lastReceivedKey) && (l.lastReceivedKey = c),
          (S = l.composeQuotedMsg) != null &&
            S.id.equals(u) &&
            (l.composeQuotedMsg = null),
          g &&
            ((l.unreadCount = Math.max(l.unreadCount - 1, 0)),
            (l.unreadDividerOffset += 1),
            o("WAWebApiChat")
              .reduceChatUnreadCount(l.id.toString())
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "revokeInternal: failed to reduce chat unread count",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("reduceChatUnreadCount failed");
              })),
          h && (l.activeUnreadCount = Math.max(l.activeUnreadCount - 1, 0)));
      }
      if (r("WAWebWid").isBroadcast(u.remote)) {
        var R = o("WAWebBroadcastFanoutKeys").getBroadcastFanoutKeys(u),
          L = o("WAWebBroadcastFanoutKeys").getBroadcastFanoutKeys(c);
        if (!R || !L || R.length !== L.length) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
          var r = s.get(e);
          r && f(r, { msgKey: L[n], subtype: t.subtype, sender: t.sender });
        }),
          o("WAWebFtsClient")
            .ftsClient.purge([String(e.rowId)])
            .catch(r("WAWebNoop")));
        var E = l ? l.id.toString() : e.id.remote.toString();
        (o(
          "WAWebUpdateLastAddOnPreviewChatAction",
        ).deleteModelsForLastAddOnPreview([u.toString()]),
          (o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebAddonService").AddonService,
              ).requestDeleteAddOnsFireAndForget
            : o("WAWebRequestDeleteAddOns").requestDeleteAddOnsFireAndForget)(
            E.toString(),
            [u.toString()],
          ));
      }
    }
    ((l.sendRevoke = _),
      (l.revoke = f),
      (l.sendAssociatedBotPluginRevoke = h),
      (l.sendAssociatedChildMsgRevoke = y));
  },
  98,
);
