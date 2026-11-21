__d(
  "WAWebLogReceivedMessages",
  [
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebBizAiPaymentRequestWamLogger",
    "WAWebBoolFunc",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebCoexV2WamClassification",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebEphemeralityResolver",
    "WAWebExperienceIdWamFields",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGatedMessageReceivedWamEvent",
    "WAWebInAppSignupInfoStore",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMessageReceiveWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOrderDetailsReceivedWamLogger",
    "WAWebPaymentInfoReceivedWamLogger",
    "WAWebPaymentLinkWamLogger",
    "WAWebPaymentRequestWamLogger",
    "WAWebQbmIncomingMessageLogger",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSchemaBotProfile",
    "WAWebSessionScopeWamUtils",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebStickerPremiumStatus",
    "WAWebUprReceivedWamLogger",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatGatedReason",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumRevokeType",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWamMessageUtils",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "\uD83D\uDC9A",
      g = 100,
      h = 1e3,
      y = 100,
      C = [],
      b = new (o("WAShiftTimer").ShiftTimer)(j);
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (_ || (_ = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(e) &&
                      (yield o("WAWebPaymentLinkWamLogger")
                        .genLogReceiveEvent(
                          { interaction_component: null, msg: e },
                          e.matchedText,
                        )
                        .catch(function (e) {
                          o("WALogger").WARN(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "error logging payment link message receive: ",
                                "",
                              ])),
                            String(e),
                          );
                        }));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = e.clientReceivedTsMillis,
            l = e.isPq,
            s = e.localAddressingMode,
            u = e.msgProcessStartTsMillis,
            c = e.msgs,
            d = e.offline,
            m = e.oppositeHasUsername,
            p = e.serverAddressingMode,
            f = e.sessionScope,
            g = e.tsMillis,
            h = r.botProducts,
            y = r.chatData,
            C = r.contactData,
            b = r.meHasUsername,
            v = r.meHasUsernamePin,
            S =
              (a = C.get(o("WAWebUserUtils").getMeUserOrThrow().toJid())) ==
              null
                ? void 0
                : a.ephemeralDuration;
          yield (_ || (_ = n("Promise"))).all(
            c.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var r = e.from;
                    if (r != null) {
                      var a = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .OTHERS;
                      r.isLid() &&
                        (a = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                          .LID_CTWA);
                      var c = y[n];
                      c != null &&
                        c.lidOriginType &&
                        (a =
                          c.lidOriginType ===
                          o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
                            ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                                .LID_CTWA
                            : c.lidOriginType ===
                                o("WAWebUsernameTypes").LidOriginType.GENERAL
                              ? o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      c.lidOriginType,
                                  );
                                })());
                      var _ = yield o(
                          "WAWebChatThreadLoggingUtils",
                        ).getOppositeVisibleIdentification(r),
                        R = r.isGroup()
                          ? e.from.isLid()
                          : o("WAWebWamMsgUtils").msgIsLid(e, r),
                        L = new (o(
                          "WAWebMessageReceiveWamEvent",
                        ).MessageReceiveWamEvent)({
                          messageType:
                            o("WAWebWamMsgUtils").getWamMessageType(e),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(e),
                          messageIsInternational:
                            o("WAWebMsgGetters").getIsInternational(e),
                          messageIsOffline: d != null,
                          isPq: l,
                          isViewOnce: !!e.isViewOnce,
                          isForwardedForward:
                            o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
                          isAReply: o("WAWebMsgGetters").getIsReply(e),
                          editType: o("WAWebMsgGetters").getWamEditType(e),
                          botType: o("WAWebWamMsgUtils").getWamBotType({
                            chatId: r,
                            bizBotType: e.bizBotType,
                            botProduct: h.get(r.toString()),
                          }),
                          isAComment:
                            o("WAWebMsgGetters").getType(e) ===
                            o("WAWebMsgType").MSG_TYPE.COMMENT,
                          hasUsername: b,
                          hasUsernamePin: v,
                          chatOrigins: a,
                          oppositeVisibleIdentification: _ != null ? _ : void 0,
                          isLid: R,
                          messageReceiveT0: 0,
                          messageReceiveT1: 0,
                          messageReceiveT2: 0,
                          sessionScope: o(
                            "WAWebSessionScopeWamUtils",
                          ).sessionScopeToWamType(f),
                          invisibleMessageCategory:
                            o(
                              "WAWebWamMsgUtils",
                            ).getWamAiInvisibleMessageCategory(e),
                          botInteractionStage:
                            o("WAWebWamMsgUtils").getWamBotInteractionStage(e),
                        }),
                        E = o("WAWebWamMessageUtils").getVcardMsgWamData(
                          e,
                          "receive",
                        );
                      if (E) {
                        var k = E.lidOnlyVcardCount,
                          I = E.pnAndLidVcardCount,
                          T = E.pnOnlyVcardCount;
                        ((L.receivedPhoneNumberContactSize = T),
                          (L.receivedUsernameContactSize = k),
                          (L.receivedPhoneNumberWithUsernameContactSize = I));
                      }
                      d != null && (L.offlineCount = d);
                      var D = o(
                        "WAWebExperienceIdWamFields",
                      ).getExperienceIdsWamValue(
                        o("WAWebExperienceIdWamFields").getExperienceIds(e),
                      );
                      if (
                        (D != null && (L.experienceIds = D),
                        !r.isGroup() && !r.isStatus())
                      ) {
                        var x,
                          $ =
                            (x = C.get(r.toJid())) == null
                              ? void 0
                              : x.ephemeralDuration;
                        ($ != null && (L.senderDefaultDisappearingDuration = $),
                          S != null &&
                            (L.receiverDefaultDisappearingDuration = S),
                          (L.isLid = r.isLid()),
                          m != null &&
                            o(
                              "WAWebUsernameGatingUtils",
                            ).usernameAdoptionAndEngagementMonitoringEnabled() &&
                            (L.oppositeHasUsername = m));
                      }
                      (o("WAWebMsgGetters").getIsRevoke(e) &&
                        (L.revokeType =
                          e.subtype === "admin_revoke" || e.subtype === "admin"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((L.messageReceiveT0 = i - g),
                          (L.messageReceiveT1 = t - i),
                          u != null && (L.messageQueueTime = u - i)),
                        e.ephemeralDuration != null &&
                          e.ephemeralDuration > 0 &&
                          (L.ephemeralityDuration = e.ephemeralDuration));
                      var P = e.afterReadDuration;
                      P != null &&
                        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                        ((L.isAfterRead = P > 0), (L.afterReadDuration = P));
                      var N =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      N != null && (L.disappearingChatInitiator = N);
                      var M =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      M != null && (L.ephemeralityTriggerAction = M);
                      var w =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      w != null && (L.ephemeralityInitiator = w);
                      var A =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      A != null && (L.agentEngagementType = A);
                      var F = o(
                          "WAWebCoexV2WamClassification",
                        ).getRecvWamE2eClassification(
                          e.senderWithDevice,
                          e.senderWithDevice,
                          e.metaFrom,
                        ),
                        O = F.e2eSenderType,
                        B = F.encryptionType;
                      (O != null && (L.e2eSenderType = O),
                        B != null && (L.encryptionType = B));
                      var W = yield o(
                        "WAWebWamGroupMetadataMetricUtils",
                      ).getGroupTypeFromChatWid(r);
                      if (
                        (W != null && (L.typeOfGroup = W),
                        p != null &&
                          (L.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(p)),
                        s != null &&
                          (L.localAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(s)),
                        o("WAWebMsgGetters").getType(e) ===
                          o("WAWebMsgType").MSG_TYPE.STICKER &&
                          (L.stickerIsPremium =
                            e.stickerPremiumStatus ===
                            o("WAWebStickerPremiumStatus").StickerPremiumStatus
                              .PREMIUM),
                        r != null && r.isGroup())
                      ) {
                        var q = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(r),
                          U = o("WAWebMsgGetters").getIsReaction(e);
                        q != null && U != null && (L.isLid = q && U);
                        var V = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(r);
                        ((V == null ? void 0 : V.participantCount) != null &&
                          (L.participantCount = V.participantCount),
                          (V == null ? void 0 : V.deviceCount) != null &&
                            (L.deviceCount = V.deviceCount),
                          (V == null ? void 0 : V.deviceSizeBucket) != null &&
                            (L.deviceSizeBucket = V.deviceSizeBucket));
                      }
                      L.commit();
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getContactData: for ",
                " msgs",
              ])),
            e.length,
          );
          var t = new Set(
            e
              .filter(function (e) {
                return e.id.remote.isUser();
              })
              .map(function (e) {
                return e.id.remote.toJid();
              }),
          );
          t.add(o("WAWebUserUtils").getMeUserOrThrow().toJid());
          var n = Array.from(t),
            a;
          return o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? ((a = yield r("WAWebLidAwareContactsDB").bulkGet(n)),
              new Map(
                a.map(function (e, t) {
                  return [
                    n[t],
                    {
                      ephemeralDuration: o(
                        "WAWebEphemeralityResolver",
                      ).getEphemeralDurationForUser(e),
                      shouldBlockByCountry: o("WAWebBoolFunc").returnFalse,
                      shouldBlockByTos: o("WAWebBoolFunc").returnFalse,
                    },
                  ];
                }),
              ))
            : o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive(
                "getContactData",
                { ids: n.map(o("WAWebWidFactory").createWid) },
              );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebApiBulkGetChats").bulkGetChats(
            e.map(function (e) {
              return e.from;
            }),
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var a of e)
            if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(a)) {
              var i = o("WAWebMsgGetters").getSender(a);
              i != null && t.set(i.toJid(), i);
            }
          var l = yield (_ || (_ = n("Promise"))).all(
              Array.from(
                t,
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        a = yield o("WAWebApiVerifiedBusinessName")
                          .getVerifiedBusinessNameRecordLidAware(n)
                          .catch(function (e) {
                            return (
                              o("WALogger")
                                .WARN(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[WAM:PAYMENT_REQUEST] sender business lookup failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs(
                                  "payment-request-sender-business-lookup-failed",
                                ),
                              null
                            );
                          });
                      if (a == null) return null;
                      var i = {
                        isApi: a.isApi,
                        isSmb: a.isSmb,
                        storedPrivacyMode:
                          a.privacyMode != null
                            ? o(
                                "WAWebApiVerifiedBusinessName",
                              ).convertPrivacyModeFromStorageType(a.privacyMode)
                            : null,
                      };
                      return [t, i];
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            s = new Map(l.filter(Boolean)),
            u = [],
            c = [];
          for (var d of e) {
            var p;
            if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(d)) {
              var f =
                  (p = o("WAWebMsgGetters").getSender(d)) == null
                    ? void 0
                    : p.toJid(),
                g = f != null ? s.get(f) : null;
              o("WAWebBizAiPaymentRequestWamLogger").isBizAiPixPaymentRequest(
                d,
                g,
              )
                ? u.push(d)
                : c.push(d);
            }
          }
          yield _.all([
            o(
              "WAWebBizAiPaymentRequestWamLogger",
            ).logBizAiPaymentRequestReceivedWAMEvent(u),
            o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
              c,
              s,
            ),
          ]);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (_ || (_ = n("Promise"))).all([
              N(e),
              I(e),
              E(e),
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = t[4];
          return {
            botProducts: r,
            chatData: a,
            contactData: i,
            meHasUsername: l,
            meHasUsernamePin: s,
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(
            new Set(
              e
                .map(function (e) {
                  return e.from;
                })
                .filter(Boolean)
                .filter(function (e) {
                  return (
                    o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) &&
                    !o("WAWebBotUtils").isHatchBot(e)
                  );
                })
                .map(function (e) {
                  return e.toString();
                }),
            ),
          );
          if (
            t.length === 0 ||
            !o("WAWebABProps").getABPropConfigValue(
              "ai_hatch_3p_bot_channel_enabled",
            )
          )
            return new Map();
          try {
            var n = yield o("WAWebSchemaBotProfile")
              .getBotProfileTable()
              .bulkGet(t);
            return new Map(
              t.map(function (e, t) {
                var r;
                return [
                  e,
                  o("WAWebBotProduct").botProductFromServerValue(
                    (r = n[t]) == null ? void 0 : r.product,
                  ),
                ];
              }),
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "receive logging: bot profile read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("receive-logging-bot-profile-read-failed"),
              new Map()
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      for (var n of e) {
        var r = t.get(n.id.remote.toJid());
        r &&
          !o("WAWebMsgGetters").getIsSentByMe(n) &&
          (r.shouldBlockByCountry()
            ? new (o(
                "WAWebGatedMessageReceivedWamEvent",
              ).GatedMessageReceivedWamEvent)({
                chatGatedReason: o("WAWebWamEnumChatGatedReason")
                  .CHAT_GATED_REASON.COUNTRY,
              }).commit()
            : r.shouldBlockByTos() &&
              new (o(
                "WAWebGatedMessageReceivedWamEvent",
              ).GatedMessageReceivedWamEvent)({
                chatGatedReason: o("WAWebWamEnumChatGatedReason")
                  .CHAT_GATED_REASON.TOS3,
              }).commit());
      }
    }
    function A(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            o("WAWebMsgGetters").getType(e) ===
            o("WAWebMsgType").MSG_TYPE.COMMENT
          ) {
            var n;
            return {
              activityType: "commentsReceived",
              ts: (n = e.t) != null ? n : o("WATimeUtils").unixTimeMs(),
              chatId: e.id.remote,
            };
          }
          var r = A(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield F(r)),
              a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
            ) {
              var i = o("WAWebMsgGetters").getIsReply(e),
                l =
                  o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === f;
              if (i || l) {
                var s = o("WAWebMsgGetters").getIsSentByMe(a);
                return {
                  activityType: "groupStatusMsgReceive",
                  chatId: e.id.remote,
                  ts: e.t,
                  isGroupStatusReplyOthersToOwn: i && s,
                  isGroupStatusReplyOthersToOthers: i && !s,
                  isGroupStatusLikeOthersToOwn: l && s,
                  isGroupStatusLikeOthersToOthers: l && !s,
                };
              }
            }
          }
          var u = q(e);
          return {
            activityType: e.id.fromMe ? "msgSend" : "msgReceive",
            ts: e.t,
            chatId: e.id.remote,
            isViewOnce: e.isViewOnce === !0,
            isReaction: o("WAWebMsgGetters").getIsReaction(e),
            isForwarded: e.isForwarded === !0,
            isCommerceMessage: o(
              "WAWebChatThreadLoggingUtils",
            ).isCommerceMessage(e),
            isReply: o("WAWebMsgGetters").getIsReply(e),
            isEdit:
              o("WAWebMsgGetters").getIsEditProtocolMsg(e) ||
              (u && e.subtype === "message_edit"),
            isExcludedModification: u,
            isBot:
              o("WAWebMsgGetters").getIsBotQuery(e) ||
              o("WAWebMsgGetters").getIsMetaBotResponse(e),
            isEventCreation:
              e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
            isEventResponse:
              e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled()
              ? ((t = e.afterReadDuration) != null ? t : 0) > 0
              : void 0,
          };
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return (
        !e.id.fromMe &&
        (e.subtype === "message_edit" ||
          o("WAWebMsgGetters").getIsRevoke(e) ||
          o("WAWebMsgGetters").getType(e) ===
            o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE) &&
        o("WAWebABProps").getABPropConfigValue(
          "thread_interactions_received_excludes_edits_web_enabled",
        ) === !0
      );
    }
    function U(t) {
      var n = function () {
          if (
            i.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            i.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
            !i.id.fromMe
          ) {
            var t,
              n =
                (t = i.interactivePayload) == null ||
                (t = t.buttons) == null ||
                (t = t[0]) == null
                  ? void 0
                  : t.buttonParamsJson;
            if (n == null)
              return (
                o("WAWebSignupQPLLogger").confirmationMissingParams(),
                V(i),
                0
              );
            try {
              var a = JSON.parse(n),
                l = a.signup_id;
              if (l == null)
                return (
                  o("WAWebSignupQPLLogger").confirmationParseFailure(
                    "missing field 'signup_id'",
                  ),
                  V(i),
                  0
                );
              (o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_RECEIVED,
                signupId: String(l),
                businessWid: i.id.remote,
              }),
                o("WAWebSignupQPLLogger").confirmationSuccess(String(l)),
                o("WAWebInAppSignupInfoStore")
                  .stopPendingConfirmationTimer(String(l))
                  .then(function (t) {
                    t === "write_failed" &&
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[signup:confirmation] timer stop failed signupId=",
                              "",
                            ])),
                          String(l),
                        )
                        .sendLogs("signup-stop-pending-confirmation-failed");
                  }));
            } catch (e) {
              (o("WAWebSignupQPLLogger").confirmationParseFailure(e), V(i));
            }
          }
        },
        a;
      for (var i of t) a = n();
    }
    function V(e) {
      o("WAWebSignupFlowLoggerLazy").logSignupOp({
        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION
          .SIGNUP_CONFIRMATION_PARSE_FAILURE,
        signupId: "",
        businessWid: e.id.remote,
      });
    }
    function H(e) {
      (_ || (_ = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(B),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function G(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function z(e) {
      var t;
      (C.push({
        params: e,
        msgProcessEndTsMillis:
          (t = e.msgProcessEndTsMillis) != null
            ? t
            : o("WATimeUtils").unixTimeMs(),
      }),
        e.offline == null || !r("gkx")("21649") || C.length >= y
          ? b.forceRunNow()
          : b.debounceAndCap(g, h));
    }
    function j() {
      var e = C.splice(0),
        t = e.flatMap(function (e) {
          var t = e.params;
          return t.msgs;
        });
      $(t)
        .then(function (r) {
          return (_ || (_ = n("Promise"))).all(
            [].concat(K(e, r), [
              w(t, r.contactData),
              H(t),
              G(t),
              v(t),
              o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageReceivedWAMEvent(t),
              o(
                "WAWebOrderDetailsReceivedWamLogger",
              ).logOrderDetailsReceivedWAMEvent(t),
              o(
                "WAWebPaymentInfoReceivedWamLogger",
              ).logPaymentInfoReceivedWAMEvent(t),
              D(t),
              o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
                t,
                r.chatData,
              ),
              U(t),
              o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t),
            ]),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                "",
              ])),
            String(e),
          );
        });
    }
    function K(e, t) {
      var n = 0;
      return e.map(function (e) {
        var r = e.msgProcessEndTsMillis,
          o = e.params,
          a = t.chatData.slice(n, n + o.msgs.length);
        return (
          (n += o.msgs.length),
          R(o, r, babelHelpers.extends({}, t, { chatData: a }))
        );
      });
    }
    function Q(e) {
      var t = e.chatWid,
        n = e.clientReceivedTsMillis,
        r = e.msgProcessStartTsMillis,
        a = e.offline,
        i = e.tsMillis;
      try {
        var l = new (o("WAWebMessageReceiveWamEvent").MessageReceiveWamEvent)({
          messageType:
            o("WAWebWamMsgUtils").getWamMessageTypeForScheduledMsg(t),
          messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
            .CONDITIONAL_REVEAL,
          messageIsOffline: a != null,
          messageReceiveT0: 0,
          messageReceiveT1: 0,
          messageReceiveT2: 0,
        });
        (a != null && (l.offlineCount = a),
          n != null &&
            ((l.messageReceiveT0 = n - i),
            (l.messageReceiveT1 = o("WATimeUtils").unixTimeMs() - n),
            r != null && (l.messageQueueTime = r - n)),
          l.commit());
      } catch (e) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "error logging conditional-reveal message receive: ",
              "",
            ])),
          String(e),
        );
      }
    }
    ((l.logReceivedMessagesInWAM = z),
      (l.logConditionalRevealMessageReceive = Q));
  },
  98,
);
