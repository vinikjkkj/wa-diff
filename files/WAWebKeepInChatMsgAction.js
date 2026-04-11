__d(
  "WAWebKeepInChatMsgAction",
  [
    "fbt",
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WANullthrows",
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
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
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
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          a.push(
            o("WAWebDBUpdateMessageTable").updateMessageTable(
              e,
              babelHelpers.extends({}, t, { kicKey: t.kicKey.toString() }),
            ),
          );
          var i = !1;
          if (
            r != null &&
            o(
              "WAWebMessageAssociationGatingUtils",
            ).isMessageAssociationInfraEnabled()
          ) {
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
            yield (g || (g = n("Promise"))).all(a));
          var s = o("WAWebMsgCollection").MsgCollection.get(e);
          s && (i && s.detachAssociatedMsg(), s.set(t));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, a) {
      var i = {
        kicState: o("WAWebEphemeralConstants").KeepInChatState.KEPT,
        kicKey: n,
        kicTimestampMs: r,
        keptCount: a,
      };
      if (
        t != null &&
        o(
          "WAWebMessageAssociationGatingUtils",
        ).isMessageAssociationInfraEnabled()
      ) {
        var l = o(
          "WAWebAssociationProcessor",
        ).getAssociationProcessorByAssociationType(t);
        (l == null ? void 0 : l.processorType) ===
          o("WAWebAssociationProcessorConstants").AssociationProcessorType
            .WithDetachedMessages &&
          (i = babelHelpers.extends({}, i, {
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            associationType: null,
            parentMsgKey: null,
          }));
      }
      return C(e, i, t);
    }
    function S(e, t, n) {
      var r = {
        kicState: o("WAWebEphemeralConstants").KeepInChatState.UNKEPT,
        kicKey: t,
        kicTimestampMs: n,
      };
      return C(e, r);
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            s,
            u,
            c,
            d,
            m,
            p = o("WAWebUserPrefsMeUser").getMeUser(),
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
          ).MessageSendReporter)(y, b)),
            (y.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: y.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(y),
            })));
          var R = o("WAWebMsgGetters").getIsGroupMsg(t),
            L = R
              ? !!(
                  !(
                    (s = _.groupMetadata) == null ||
                    (s = s.participants.get(p)) == null
                  ) && s.isAdmin
                )
              : void 0,
            k = {
              isAGroup: R,
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
              var I = (t.keptCount || 0) + 1;
              v(t.id, t.associationType, f, g, I);
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
              S(t.id, f, g);
              var x = new (o(
                "WAWebDisappearingMessageKeepInChatWamEvent",
              ).DisappearingMessageKeepInChatWamEvent)(
                babelHelpers.extends({}, k, {
                  kicActionName: o("WAWebWamEnumKicActionNameType")
                    .KIC_ACTION_NAME_TYPE.UNKEEP_MESSAGE,
                  keptDelta: E(t.kicTimestampMs),
                  messageExpiryTimer:
                    (D = t.timeUntilExpiration()) != null ? D : 0,
                  messageExpiredOnUnkeep: o(
                    "WAWebKeepInChatMsgUtils",
                  ).isExpired(t),
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return Math.round(
        (o("WATimeUtils").unixTime() - r("WANullthrows")(e) / 1e3) / 3600,
      );
    }
    function k(e, t) {
      return R(e, o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL, t);
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield R(
            e,
            o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
            n,
          );
          return (
            t != null &&
              t.deleteExpired &&
              o("WAWebKeepInChatMsgUtils").isExpired(e) &&
              (o("WAWebChatSendMessages").sendDeleteMsgs(
                o("WAWebFrontendMsgGetters").getChat(e),
                { type: "message", list: [e] },
                !0,
              ),
              o("WAWebToastManager").ToastManager.open(
                y.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Message disappeared."),
                }),
              )),
            r
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (g || (g = n("Promise"))).all(
            e.map(function (e) {
              return $(e, { allowNotification: !1 });
            }),
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
            g = o("WAWebWidFactory").asUserWidOrThrow(
              r("WANullthrows")(o("WAWebMsgGetters").getSender(a)),
            ),
            h;
          if (
            (s &&
              (h = yield o("WAWebChatThreadLogging").getChatThreadID(
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
              N(a, s, h)),
              o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
                [a],
                function (e) {
                  return e.keptMessageKey;
                },
              ));
            return;
          }
          var y = o("WAWebWidFactory").asUserWidOrThrow(
              r("WANullthrows")(o("WAWebMsgGetters").getSender(i)),
            ),
            C = r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(g, y),
            ),
            b =
              C &&
              a.keepType ===
                o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL;
          if (
            s != null &&
            o("WAWebChatGetters").getIsGroup(s) &&
            o("WAWebKeepInChatMsgUtils").keepIsLockedForUser(a, g) &&
            b !== !0
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
              M(a, i, s, h));
            return;
          }
          if (i.kicKey != null && i.kicTimestampMs != null) {
            var R = { id: i.kicKey, senderTimestampMs: i.kicTimestampMs };
            if (
              o("WAWebEphemeralKeepInChatUtils").compareKeepInChatMessages(
                a,
                R,
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
            !C
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
                var L,
                  E =
                    (L = o("WAWebMsgCollection").MsgCollection.get(
                      a.keptMessageKey,
                    )) != null
                      ? L
                      : o("WAWebMsgCollection").MsgCollection.get(i.id);
                if (E != null) {
                  var k = function () {
                    s &&
                      o("WAWebKicNux.react").shouldShowKicNux(s) &&
                      o("WAWebKicNux.react").openKicNux(
                        s,
                        o("WAWebWamEnumTriggerType").TRIGGER_TYPE
                          .USER_MESSAGE_KEPT,
                      );
                  };
                  o(
                    "WAWebNotificationController",
                  ).WANotificationController.triggerNotification(
                    new (o(
                      "WAWebNotificationsKeepInChatNotification",
                    ).WAKeepInChatNotification)({
                      keepInChatMessage: a,
                      parentMessage: E,
                      onClick: k,
                    }),
                  );
                } else
                  o("WALogger").ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "KIC: cannot find parent message model!",
                      ])),
                  );
              }
              var I = (i.keptCount || 0) + 1;
              (yield v(
                i.id,
                i.associationType,
                a.id,
                r("WANullthrows")(a.senderTimestampMs),
                I,
              ),
                yield o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed([a.id.toString()]),
                w(
                  a,
                  i,
                  o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE
                    .KEEP,
                  s,
                  h,
                ));
              break;
            }
            case o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL:
              (yield S(i.id, a.id, r("WANullthrows")(a.senderTimestampMs)),
                yield o(
                  "WAWebDBMarkFutureproofMessagesReparsed",
                ).markFutureproofMessagesReparsed([a.id.toString()]),
                w(
                  a,
                  i,
                  o("WAWebWamEnumKicRequestTypeType").KIC_REQUEST_TYPE_TYPE
                    .UNKEEP,
                  s,
                  h,
                ));
              break;
            default:
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "KIC: unknown keepType ",
                      "",
                    ])),
                  a,
                )
                .sendLogs("processed-unknown-keeptype");
              break;
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
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
    function M(e, t, n, r) {
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
    function w(e, t, n, r, a) {
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
    ((l.keepMessage = k),
      (l.undoKeepMessage = I),
      (l.processKeepInChatMessages = D),
      (l.processKeepInChatMessage = $));
  },
  226,
);
