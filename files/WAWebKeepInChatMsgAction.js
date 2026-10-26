__d(
  "WAWebKeepInChatMsgAction",
  [
    "fbt",
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAssociationProcessor",
    "WAWebAssociationProcessorConstants",
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
    "WAWebUserPrefsMeUser",
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
    "asyncToGeneratorRuntime",
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
      y,
      C = y || (y = o("react"));
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          a.push(
            o("WAWebDBUpdateMessageTable").updateMessageTable(
              e,
              babelHelpers.extends({}, t, { kicKey: t.kicKey.toString() }),
            ),
          );
          var i = !1;
          if (r != null) {
            var l = o(
              "WAWebAssociationProcessor",
            ).getAssociationProcessorByAssociationType(r);
            l &&
              l.processorType ===
                o("WAWebAssociationProcessorConstants").AssociationProcessorType
                  .WithDetachedMessages &&
              (i = !0);
          }
          (i &&
            a.push(
              o(
                "WAWebDBDeleteAssociatedMsgsByMsgKey",
              ).bulkDeleteMessagesByMsgKeys([e.toString()]),
            ),
            yield (h || (h = n("Promise"))).all(a));
          var s = o("WAWebMsgCollection").MsgCollection.get(e);
          s && (i && s.detachAssociatedMsg(), s.set(t));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
      return b(i, l, a);
    }
    function R(e, t, n) {
      var r = {
        kicState: o("WAWebEphemeralConstants").KeepInChatState.UNKEPT,
        kicKey: t,
        kicTimestampMs: n,
      };
      return b(e, r);
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            s,
            u,
            c,
            d,
            m,
            p = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            _ = o("WAWebFrontendMsgGetters").getChat(t),
            f = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: _.id,
              id: yield r("WAWebMsgKey").newId(),
              participant: o("WAWebChatGetters").getIsGroup(_) ? p : void 0,
            }),
            g = o("WATimeUtils").unixTimeMs(),
            h = {
              id: f,
              from: p,
              to: _.id,
              t: o("WATimeUtils").unixTime(),
              type: o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              kind: o("WAWebMsgType").MsgKind.KeepInChat,
              keepType: a,
              keptMessageKey: t.id,
              senderTimestampMs: g,
              ack: o("WAWebAck").ACK.CLOCK,
            },
            y = new (o("WAWebMsgModel").Msg)(h),
            C = !!((l = _.groupMetadata) != null && l.isLidAddressingMode),
            b = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
              _.id,
              o("WAWebWamMsgUtils").msgIsLid(y, _.id, C),
            );
          ((y.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(
            y,
            babelHelpers.extends({}, b, {
              frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            }),
          )),
            (y.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: y.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(y),
            })));
          var v = o("WAWebMsgGetters").getIsGroupMsg(t),
            L = v
              ? !!(
                  !(
                    (s = _.groupMetadata) == null ||
                    (s = s.participants.get(p)) == null
                  ) && s.isAdmin
                )
              : void 0,
            E = {
              isAGroup: v,
              messagesSelected: 1,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
              chatEphemeralityDuration:
                (u = o("WAWebChatEphemerality").getEphemeralSetting(_)) != null
                  ? u
                  : 0,
              kicActor: o("WAWebMsgGetters").getIsSentByMe(t)
                ? o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.SENDER
                : o("WAWebWamEnumKicActorType").KIC_ACTOR_TYPE.RECIPIENT,
              kicEntryPoint: i,
              canEditDmSettings: o("WAWebChatGetters").getIsGroup(_)
                ? (c = _.groupMetadata) == null
                  ? void 0
                  : c.canSetEphemeralSetting()
                : !0,
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                _.id.toJid(),
              ),
              isAdmin: L,
            };
          switch (
            ((d = y.wamMessageSendPerfReporter) == null ||
              d.startRenderedStage(),
            a)
          ) {
            case o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL: {
              var T = (t.keptCount || 0) + 1;
              yield S({
                keptCount: T,
                kicKey: f,
                kicTimestampMs: g,
                msgToKeepAssociationType: t.associationType,
                msgToKeepKey: t.id,
              });
              var D = new (o(
                "WAWebDisappearingMessageKeepInChatWamEvent",
              ).DisappearingMessageKeepInChatWamEvent)(
                babelHelpers.extends({}, E, {
                  kicActionName: o("WAWebWamEnumKicActionNameType")
                    .KIC_ACTION_NAME_TYPE.KEEP_MESSAGE,
                  keptCount: T,
                }),
              );
              D.commit();
              break;
            }
            case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL: {
              var x;
              yield R(t.id, f, g);
              var $ = new (o(
                "WAWebDisappearingMessageKeepInChatWamEvent",
              ).DisappearingMessageKeepInChatWamEvent)(
                babelHelpers.extends({}, E, {
                  kicActionName: o("WAWebWamEnumKicActionNameType")
                    .KIC_ACTION_NAME_TYPE.UNKEEP_MESSAGE,
                  keptDelta: k(t.kicTimestampMs),
                  messageExpiryTimer: (x = I(t)) != null ? x : 0,
                  messageExpiredOnUnkeep: o(
                    "WAWebKeepInChatMsgUtils",
                  ).isExpired(t),
                  keptCount: t.keptCount,
                }),
              );
              $.commit();
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
                  a,
                )
                .sendLogs("sending-unknown-keeptype");
              break;
          }
          return (
            (m = y.wamMessageSendPerfReporter) == null || m.postRenderedStage(),
            o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e, t;
                  ((e = y.wamMessageSendPerfReporter) == null ||
                    e.startSavedStage(),
                    yield o("WAWebDBProcessMessage").storeMessages(
                      [h],
                      o("WAWebFrontendMsgGetters").getChat(y).id,
                    ),
                    (t = y.wamMessageSendPerfReporter) == null ||
                      t.postSavedStage());
                  var n = yield o("WAWebSendMsgRecordAction").sendMsgRecord(y);
                  return n;
                }),
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted()
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return Math.round(
        (o("WATimeUtils").unixTime() - r("nullthrows")(e) / 1e3) / 3600,
      );
    }
    function I(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      return t == null
        ? null
        : o("WAWebKeepInChatMsgUtils").isExpired(e)
          ? 0
          : t - o("WATimeUtils").unixTime();
    }
    function T(e, t) {
      return L(e, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL, t);
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield L(
            e,
            o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
            n,
          );
          return (
            t != null &&
              t.deleteExpired &&
              o("WAWebKeepInChatMsgUtils").isExpired(e) &&
              (o("WAWebToastManager").ToastManager.open(
                C.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Message disappeared."),
                }),
              ),
              yield o("WAWebChatSendMessages").sendDeleteMsgs({
                chat_: o("WAWebFrontendMsgGetters").getChat(e),
                clearMedia: !0,
                record: { type: "message", list: [e] },
              })),
            r
          );
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
          yield (h || (h = n("Promise"))).all(
            e.map(function (e) {
              return N(e, { allowNotification: !1 });
            }),
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.allowNotification,
            a = o("WAWebMsgModelFromData").msgModelFromMsgData(e),
            i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(a.keptMessageKey);
          if (i == null) {
            var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(
              a.keptMessageKey,
            );
            l &&
              ((i = yield o("WAWebDBMsgUtils").getMsgByMsgKey(l)),
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
              (y = yield o("WAWebChatThreadLogging").getChatThreadID(
                s.id.toJid(),
              )),
            i == null || i.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN)
          ) {
            (i ||
              (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "KIC: cannot find associated message",
                  ])),
              ),
              w(a, s, y)),
              yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
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
            b = r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(h, C),
            ),
            v =
              b &&
              a.keepType ===
                o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
          if (
            s != null &&
            o("WAWebChatGetters").getIsGroup(s) &&
            o("WAWebKeepInChatMsgUtils").keepIsLockedForUser(a, h) &&
            v !== !0
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
              A(a, i, s, y));
            return;
          }
          if (i.kicKey != null && i.kicTimestampMs != null) {
            var L = { id: i.kicKey, senderTimestampMs: i.kicTimestampMs };
            if (
              o("WAWebEphemeralKeepInChatUtils").compareKeepInChatMessages(
                a,
                L,
              ) === -1
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
            !b
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
                        o("WAWebWamEnumTriggerType").TRIGGER_TYPE
                          .USER_MESSAGE_KEPT,
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
              (yield S({
                keptCount: T,
                kicKey: a.id,
                kicTimestampMs: r("nullthrows")(a.senderTimestampMs),
                msgToKeepAssociationType: i.associationType,
                msgToKeepKey: i.id,
              }),
                yield o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed([a.id.toString()]),
                F(
                  a,
                  i,
                  o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE
                    .KEEP,
                  s,
                  y,
                ));
              break;
            }
            case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
              (yield R(i.id, a.id, r("nullthrows")(a.senderTimestampMs)),
                yield o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed([a.id.toString()]),
                F(
                  a,
                  i,
                  o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE
                    .UNKEEP,
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
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      var r = new (o("WAWebKeepInChatPerfWamEvent").KeepInChatPerfWamEvent)({
        response: o("WAWebWamEnumResponseType").RESPONSE_TYPE.ERROR,
        requestSendTime: e.t,
        kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
          .MESSAGE_MISSING,
        chatEphemeralityDuration:
          (t && o("WAWebChatEphemerality").getEphemeralSetting(t)) || 0,
      });
      n != null && r.set({ threadId: n });
      var a = o("WAWebEphemeralKeepInChatWamUtils").parseKeepTypeToMetric(
        e.keepType,
      );
      (a && r.set({ kicRequestType: a }), r.commit());
    }
    function A(e, t, n, r) {
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
    function F(e, t, n, r, a) {
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
    ((l.keepMessage = T),
      (l.undoKeepMessage = D),
      (l.processKeepInChatMessages = $),
      (l.processKeepInChatMessage = N));
  },
  226,
);
