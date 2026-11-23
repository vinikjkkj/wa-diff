__d(
  "WAWebKeepInChatMsgAction",
  [
    "fbt",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebChatThreadLogging",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBStoreMessageOrphans",
    "WAWebDBUpdateMessageTable",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebEphemeralConstants",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatMsgUtils",
    "WAWebKeepInChatPerfWamEvent",
    "WAWebKicNux.react",
    "WAWebLidMigrationUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNotificationController",
    "WAWebNotificationsKeepInChatNotification",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProtobufsE2E.pb",
    "WAWebSendMsgRecordAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumKicActionNameType",
    "WAWebWamEnumKicActorType",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumKicRequestTypeType",
    "WAWebWamEnumResponseType",
    "WAWebWamEnumTriggerType",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "getErrorSafe",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = h || (h = o("react"));
    async function C(e, t, n) {
      var r = [];
      r.push(
        (o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).updateMessageTable
          : o("WAWebDBUpdateMessageTable").updateMessageTable)(
          e,
          babelHelpers.extends({}, t, { kicKey: t.kicKey.toString() }),
        ),
      );
      var a = !1;
      if (n != null) {
        var i = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(n);
        i &&
          i.processorType ===
            o("WAWebAssociationProcessorConstants").AssociationProcessorType
              .WithDetachedMessages &&
          (a = !0);
      }
      (a &&
        r.push(
          o("WAWebDBDeleteAssociatedMsgsByMsgKey").bulkDeleteMessagesByMsgKeys([
            e.toString(),
          ]),
        ),
        await Promise.all(r));
      var l = o("WAWebMsgCollection").MsgCollection.get(e);
      l && (a && l.detachAssociatedMsg(), l.set(t));
    }
    function b(e) {
      var t = e.keptCount,
        n = e.kicKey,
        r = e.kicTimestampMs,
        a = e.msgToKeepAssociationType,
        i = e.msgToKeepKey,
        l = {
          kicState: o("WAWebEphemeralConstants").KeepInChatState.KEPT,
          kicKey: n,
          kicTimestampMs: r,
          keptCount: t,
        };
      if (a != null) {
        var s = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(a);
        (s == null ? void 0 : s.processorType) ===
          o("WAWebAssociationProcessorConstants").AssociationProcessorType
            .WithDetachedMessages &&
          (l = babelHelpers.extends({}, l, {
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            associationType: null,
            parentMsgKey: null,
          }));
      }
      return C(i, l, a);
    }
    function v(e, t, n) {
      var r = {
        kicState: o("WAWebEphemeralConstants").KeepInChatState.UNKEPT,
        kicKey: t,
        kicTimestampMs: n,
      };
      return C(e, r);
    }
    async function S(t, n, a) {
      var i,
        l,
        s,
        u,
        c,
        d,
        m = o("WAWebUserUtils").getMeUserOrThrow(),
        p = o("WAWebFrontendMsgGetters").getChat(t),
        _ = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: p.id,
          id: await r("WAWebMsgKey").newId(),
          participant: o("WAWebChatGetters").getIsGroup(p) ? m : void 0,
        }),
        f = o("WATimeUtils").unixTimeMs(),
        g = {
          id: _,
          from: m,
          to: p.id,
          t: o("WATimeUtils").unixTime(),
          type: o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.KeepInChat,
          keepType: n,
          keptMessageKey: t.id,
          senderTimestampMs: f,
          ack: o("WAWebAck").ACK.CLOCK,
        },
        h = new (o("WAWebMsgModel").Msg)(g),
        y = !!((i = p.groupMetadata) != null && i.isLidAddressingMode),
        C = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
          p.id,
          o("WAWebWamMsgUtils").msgIsLid(h, p.id, y),
        );
      ((h.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(
        h,
        babelHelpers.extends({}, C, {
          frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        }),
      )),
        (h.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: h.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(h),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(h),
        })));
      var S = o("WAWebMsgGetters").getIsGroupMsg(t),
        E = S
          ? !!(
              !(
                (l = p.groupMetadata) == null ||
                (l = l.participants.get(m)) == null
              ) && l.isAdmin
            )
          : void 0,
        k = {
          isAGroup: S,
          messagesSelected: 1,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
          chatEphemeralityDuration:
            (s = o("WAWebChatEphemerality").getEphemeralSetting(p)) != null
              ? s
              : 0,
          kicActor: o("WAWebMsgGetters").getIsSentByMe(t)
            ? o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.SENDER
            : o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.RECIPIENT,
          kicEntryPoint: a,
          canEditDmSettings: o("WAWebChatGetters").getIsGroup(p)
            ? (u = p.groupMetadata) == null
              ? void 0
              : u.canSetEphemeralSetting()
            : !0,
          threadId: await o("WAWebChatThreadLogging").getChatThreadID(
            p.id.toJid(),
          ),
          isAdmin: E,
        };
      switch (
        ((c = h.wamMessageSendPerfReporter) == null || c.startRenderedStage(),
        n)
      ) {
        case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL: {
          var I = (t.keptCount || 0) + 1;
          await b({
            keptCount: I,
            kicKey: _,
            kicTimestampMs: f,
            msgToKeepAssociationType: t.associationType,
            msgToKeepKey: t.id,
          });
          var T = new (o(
            "WAWebDisappearingMessageKeepInChatWamEvent",
          ).DisappearingMessageKeepInChatWamEvent)(
            babelHelpers.extends({}, k, {
              kicActionName: o("WAWebWamEnumKicActionNameType")
                .KIC_ACTION_NAME_TYPE.KEEP_MESSAGE,
              keptCount: I,
            }),
          );
          T.commit();
          break;
        }
        case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL: {
          var D;
          await v(t.id, _, f);
          var x = new (o(
            "WAWebDisappearingMessageKeepInChatWamEvent",
          ).DisappearingMessageKeepInChatWamEvent)(
            babelHelpers.extends({}, k, {
              kicActionName: o("WAWebWamEnumKicActionNameType")
                .KIC_ACTION_NAME_TYPE.UNKEEP_MESSAGE,
              keptDelta: R(t.kicTimestampMs),
              messageExpiryTimer: (D = L(t)) != null ? D : 0,
              messageExpiredOnUnkeep: o("WAWebKeepInChatMsgUtils").isExpired(t),
              keptCount: t.keptCount,
            }),
          );
          x.commit();
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendKeepInChatMessage: trying to send unknown keepType ",
                  "",
                ])),
              n,
            )
            .sendLogs("sending-unknown-keeptype");
          break;
      }
      return (
        (d = h.wamMessageSendPerfReporter) == null || d.postRenderedStage(),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var e, t;
              ((e = h.wamMessageSendPerfReporter) == null ||
                e.startSavedStage(),
                await (
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? o("WAWebBackendRuntime").runtime(
                        o("WAWebMessageStoreService").MessageStoreService,
                      ).storeMessages
                    : o("WAWebDBProcessMessage").storeMessages
                )([g], o("WAWebFrontendMsgGetters").getChat(h).id),
                (t = h.wamMessageSendPerfReporter) == null ||
                  t.postSavedStage());
              var n = await (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageSendService").MessageSendService,
                    ).sendMsgRecord
                  : o("WAWebSendMsgRecordAction").sendMsgRecord
              )(h);
              return n;
            },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    function R(e) {
      return Math.round(
        (o("WATimeUtils").unixTime() - r("nullthrows")(e) / 1e3) / 3600,
      );
    }
    function L(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      return t == null
        ? null
        : o("WAWebKeepInChatMsgUtils").isExpired(e)
          ? 0
          : t - o("WATimeUtils").unixTime();
    }
    function E(e, t) {
      return S(e, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL, t);
    }
    async function k(e, t, n) {
      var r = await S(
        e,
        o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
        n,
      );
      return (
        t != null &&
          t.deleteExpired &&
          o("WAWebKeepInChatMsgUtils").isExpired(e) &&
          (o("WAWebToastManager").ToastManager.open(
            y.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ),
          await o("WAWebChatSendMessages").sendDeleteMsgs({
            chat_: o("WAWebFrontendMsgGetters").getChat(e),
            clearMedia: !0,
            record: { type: "message", list: [e] },
          })),
        r
      );
    }
    async function I(e, t) {
      await Promise.all(
        e.map(function (e) {
          return T(e, { allowNotification: !1 });
        }),
      );
    }
    async function T(e, t) {
      var n = t.allowNotification,
        a = o("WAWebMsgModelFromData").msgModelFromMsgData(e),
        i = await o("WAWebDBMsgUtils").getMsgByMsgKey(a.keptMessageKey);
      if (i == null) {
        var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(
          a.keptMessageKey,
        );
        l &&
          ((i = await o("WAWebDBMsgUtils").getMsgByMsgKey(l)),
          i &&
            (a.id = new (r("WAWebMsgKey"))({
              fromMe: a.id.fromMe,
              remote: i.id.remote,
              id: a.id.id,
              participant: a.id.participant,
            })));
      }
      var s = o("WAWebChatCollection").ChatCollection.get(a.id.remote),
        h = o("WAWebWidFactory").asUserWidOrThrow(
          r("nullthrows")(o("WAWebMsgGetters").getSender(a)),
        ),
        y;
      if (
        (s &&
          (y = await o("WAWebChatThreadLogging").getChatThreadID(s.id.toJid())),
        i == null || i.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN)
      ) {
        (i ||
          (o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "KIC: cannot find associated message",
              ])),
          ),
          D({ chat: s, keepInChatMessage: a, threadId: y })),
          await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
            [a],
            function (e) {
              return e.keptMessageKey;
            },
          ));
        return;
      }
      var C = o("WAWebWidFactory").asUserWidOrThrow(
          r("nullthrows")(o("WAWebMsgGetters").getSender(i)),
        ),
        S = r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(h, C),
        ),
        R =
          S &&
          a.keepType === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
      if (
        s != null &&
        o("WAWebChatGetters").getIsGroup(s) &&
        o("WAWebKeepInChatMsgUtils").keepIsLockedForUser(a, h) &&
        R !== !0
      ) {
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "KIC: incoming KIC by a restricted group member",
            ])),
        );
        return;
      }
      if (i.isRevoke) {
        (o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "KIC: msg revoked, cannot keep/unkeep",
            ])),
        ),
          x(a, i, s, y));
        return;
      }
      if (i.kicKey != null && i.kicTimestampMs != null) {
        var L = { id: i.kicKey, senderTimestampMs: i.kicTimestampMs };
        if (
          o("WAWebEphemeralKeepInChatUtils").compareKeepInChatMessages(a, L) ===
          -1
        ) {
          (o("WAWebEphemeralKeepInChatWamUtils").logOlderRequestKic(a),
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "KIC: incoming msg behind stored KIC fields",
                ])),
            ));
          return;
        }
      }
      if (
        o("WAWebEphemeralKeepInChatUtils").kicSenderSuperPowerActive(i) &&
        !S
      ) {
        o("WALogger").ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "KIC: dropped, sender super power: ",
              " - ",
              "",
            ])),
          a.id,
          i.id,
        );
        return;
      }
      switch (a.keepType) {
        case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL: {
          if (n) {
            var E,
              k =
                (E = o("WAWebMsgCollection").MsgCollection.get(
                  a.keptMessageKey,
                )) != null
                  ? E
                  : o("WAWebMsgCollection").MsgCollection.get(i.id);
            if (k != null) {
              var I = function () {
                s &&
                  o("WAWebKicNux.react").shouldShowKicNux(s) &&
                  o("WAWebKicNux.react").openKicNux(
                    s,
                    o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT,
                  );
              };
              o("WAWebNotificationController")
                .WANotificationController.triggerNotification(
                  new (o(
                    "WAWebNotificationsKeepInChatNotification",
                  ).WAKeepInChatNotification)({
                    keepInChatMessage: a,
                    kicSender: h,
                    parentMessage: k,
                    onClick: I,
                  }),
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "KIC: triggerNotification failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("kic-trigger-notification-failed");
                });
            } else
              o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "KIC: cannot find parent message model!",
                  ])),
              );
          }
          var T = (i.keptCount || 0) + 1;
          (await b({
            keptCount: T,
            kicKey: a.id,
            kicTimestampMs: r("nullthrows")(a.senderTimestampMs),
            msgToKeepAssociationType: i.associationType,
            msgToKeepKey: i.id,
          }),
            await o(
              "WAWebDBMarkFutureproofMessagesReparsed",
            ).markFutureproofMessagesReparsed([a.id.toString()]),
            $(
              a,
              i,
              o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.KEEP,
              s,
              y,
            ));
          break;
        }
        case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
          (await v(i.id, a.id, r("nullthrows")(a.senderTimestampMs)),
            await o(
              "WAWebDBMarkFutureproofMessagesReparsed",
            ).markFutureproofMessagesReparsed([a.id.toString()]),
            $(
              a,
              i,
              o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE.UNKEEP,
              s,
              y,
            ));
          break;
        default:
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "KIC: unknown keepType ",
                  "",
                ])),
              a,
            )
            .sendLogs("processed-unknown-keeptype");
          break;
      }
    }
    function D(e) {
      var t = e.chat,
        n = e.keepInChatMessage,
        r = e.threadId,
        a = new (o("WAWebKeepInChatPerfWamEvent").KeepInChatPerfWamEvent)({
          response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
          requestSendTime: n.t,
          kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
            .MESSAGE_MISSING,
          chatEphemeralityDuration:
            (t && o("WAWebChatEphemerality").getEphemeralSetting(t)) || 0,
        });
      r != null && a.set({ threadId: r });
      var i = o("WAWebEphemeralKeepInChatWamUtils").parseKeepTypeToMetric(
        n.keepType,
      );
      (i && a.set({ kicRequestType: i }), a.commit());
    }
    function x(e, t, n, r) {
      var a = new (o("WAWebKeepInChatPerfWamEvent").KeepInChatPerfWamEvent)({
          response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
          requestSendTime: e.t,
          kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
            .MESSAGE_REVOKED,
          kicMessageEphemeralityDuration:
            (t == null ? void 0 : t.ephemeralDuration) || 0,
          chatEphemeralityDuration:
            (n && o("WAWebChatEphemerality").getEphemeralSetting(n)) || 0,
        }),
        i = o("WAWebEphemeralKeepInChatWamUtils").parseKeepTypeToMetric(
          e.keepType,
        );
      (i && a.set({ kicRequestType: i }),
        r != null && a.set({ threadId: r }),
        a.commit());
    }
    function $(e, t, n, r, a) {
      var i = new (o("WAWebKeepInChatPerfWamEvent").KeepInChatPerfWamEvent)({
        kicRequestType: n,
        response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.SUCCESS,
        requestSendTime: e.t,
        kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
          .NONE,
        kicMessageEphemeralityDuration:
          (t == null ? void 0 : t.ephemeralDuration) || 0,
        chatEphemeralityDuration:
          (r && o("WAWebChatEphemerality").getEphemeralSetting(r)) || 0,
      });
      (a != null && i.set({ threadId: a }), i.commit());
    }
    ((l.keepMessage = E),
      (l.undoKeepMessage = k),
      (l.processKeepInChatMessages = I),
      (l.processKeepInChatMessage = T));
  },
  226,
);
