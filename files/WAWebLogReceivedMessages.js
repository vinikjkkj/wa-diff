__d(
  "WAWebLogReceivedMessages",
  [
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
      _ = "\u{1F49A}",
      f = 100,
      g = 1e3,
      h = 100,
      y = [],
      C = new (o("WAShiftTimer").ShiftTimer)(F);
    async function b(t) {
      await Promise.all(
        t.map(async function (t) {
          o("WAWebPaymentLinkWamLogger").shouldLogReceiverEvent(t) &&
            (await o("WAWebPaymentLinkWamLogger")
              .genLogReceiveEvent(
                { interaction_component: null, msg: t },
                t.matchedText,
              )
              .catch(function (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error logging payment link message receive: ",
                      "",
                    ])),
                  String(t),
                );
              }));
        }),
      );
    }
    async function v(e, t, n) {
      var r,
        a = e.clientReceivedTsMillis,
        i = e.isPq,
        l = e.localAddressingMode,
        s = e.msgProcessStartTsMillis,
        u = e.msgs,
        c = e.offline,
        d = e.oppositeHasUsername,
        m = e.serverAddressingMode,
        p = e.sessionScope,
        _ = e.tsMillis,
        f = n.botProducts,
        g = n.chatData,
        h = n.contactData,
        y = n.meHasUsername,
        C = n.meHasUsernamePin,
        b =
          (r = h.get(o("WAWebUserUtils").getMeUserOrThrow().toJid())) == null
            ? void 0
            : r.ephemeralDuration;
      await Promise.all(
        u.map(async function (e, n) {
          var r = e.from;
          if (r != null) {
            var u = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
            r.isLid() &&
              (u = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA);
            var v = g[n];
            v != null &&
              v.lidOriginType &&
              (u =
                v.lidOriginType ===
                o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
                  ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA
                  : v.lidOriginType ===
                      o("WAWebUsernameTypes").LidOriginType.GENERAL
                    ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            v.lidOriginType,
                        );
                      })());
            var S = await o(
                "WAWebChatThreadLoggingUtils",
              ).getOppositeVisibleIdentification(r),
              R = r.isGroup()
                ? e.from.isLid()
                : o("WAWebWamMsgUtils").msgIsLid(e, r),
              L = new (o("WAWebMessageReceiveWamEvent").MessageReceiveWamEvent)(
                {
                  messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
                  messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                  messageIsInternational:
                    o("WAWebMsgGetters").getIsInternational(e),
                  messageIsOffline: c != null,
                  isPq: i,
                  isViewOnce: !!e.isViewOnce,
                  isForwardedForward:
                    o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
                  isAReply: o("WAWebMsgGetters").getIsReply(e),
                  editType: o("WAWebMsgGetters").getWamEditType(e),
                  botType: o("WAWebWamMsgUtils").getWamBotType({
                    chatId: r,
                    bizBotType: e.bizBotType,
                    botProduct: f.get(r.toString()),
                  }),
                  isAComment:
                    o("WAWebMsgGetters").getType(e) ===
                    o("WAWebMsgType").MSG_TYPE.COMMENT,
                  hasUsername: y,
                  hasUsernamePin: C,
                  chatOrigins: u,
                  oppositeVisibleIdentification: S != null ? S : void 0,
                  isLid: R,
                  messageReceiveT0: 0,
                  messageReceiveT1: 0,
                  messageReceiveT2: 0,
                  sessionScope: o(
                    "WAWebSessionScopeWamUtils",
                  ).sessionScopeToWamType(p),
                  invisibleMessageCategory:
                    o("WAWebWamMsgUtils").getWamAiInvisibleMessageCategory(e),
                  botInteractionStage:
                    o("WAWebWamMsgUtils").getWamBotInteractionStage(e),
                },
              ),
              E = o("WAWebWamMessageUtils").getVcardMsgWamData(e, "receive");
            if (E) {
              var k = E.lidOnlyVcardCount,
                I = E.pnAndLidVcardCount,
                T = E.pnOnlyVcardCount;
              ((L.receivedPhoneNumberContactSize = T),
                (L.receivedUsernameContactSize = k),
                (L.receivedPhoneNumberWithUsernameContactSize = I));
            }
            c != null && (L.offlineCount = c);
            var D = o("WAWebExperienceIdWamFields").getExperienceIdsWamValue(
              o("WAWebExperienceIdWamFields").getExperienceIds(e),
            );
            if (
              (D != null && (L.experienceIds = D),
              !r.isGroup() && !r.isStatus())
            ) {
              var x,
                $ =
                  (x = h.get(r.toJid())) == null ? void 0 : x.ephemeralDuration;
              ($ != null && (L.senderDefaultDisappearingDuration = $),
                b != null && (L.receiverDefaultDisappearingDuration = b),
                (L.isLid = r.isLid()),
                d != null &&
                  o(
                    "WAWebUsernameGatingUtils",
                  ).usernameAdoptionAndEngagementMonitoringEnabled() &&
                  (L.oppositeHasUsername = d));
            }
            (o("WAWebMsgGetters").getIsRevoke(e) &&
              (L.revokeType =
                e.subtype === "admin_revoke" || e.subtype === "admin"
                  ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                  : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
              a != null &&
                ((L.messageReceiveT0 = a - _),
                (L.messageReceiveT1 = t - a),
                s != null && (L.messageQueueTime = s - a)),
              e.ephemeralDuration != null &&
                e.ephemeralDuration > 0 &&
                (L.ephemeralityDuration = e.ephemeralDuration));
            var P = e.afterReadDuration;
            P != null &&
              o("WAWebAfterReadUtils").isAfterReadEnabled() &&
              ((L.isAfterRead = P > 0), (L.afterReadDuration = P));
            var N = o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
            N != null && (L.disappearingChatInitiator = N);
            var M = o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
            M != null && (L.ephemeralityTriggerAction = M);
            var w = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(e);
            w != null && (L.ephemeralityInitiator = w);
            var A = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
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
            var W = await o(
              "WAWebWamGroupMetadataMetricUtils",
            ).getGroupTypeFromChatWid(r);
            if (
              (W != null && (L.typeOfGroup = W),
              m != null &&
                (L.serverAddressingMode = o(
                  "WAWebWamAddressingModeUtils",
                ).getWamAddressingModeFromString(m)),
              l != null &&
                (L.localAddressingMode = o(
                  "WAWebWamAddressingModeUtils",
                ).getWamAddressingModeFromString(l)),
              o("WAWebMsgGetters").getType(e) ===
                o("WAWebMsgType").MSG_TYPE.STICKER &&
                (L.stickerIsPremium =
                  e.stickerPremiumStatus ===
                  o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM),
              r != null && r.isGroup())
            ) {
              var q = await o(
                  "WAWebWamGroupMetadataMetricUtils",
                ).isCagFromChatWid(r),
                U = o("WAWebMsgGetters").getIsReaction(e);
              q != null && U != null && (L.isLid = q && U);
              var V = await o("WAWebWamGroupMetricCache").getGroupMetrics(r);
              ((V == null ? void 0 : V.participantCount) != null &&
                (L.participantCount = V.participantCount),
                (V == null ? void 0 : V.deviceCount) != null &&
                  (L.deviceCount = V.deviceCount),
                (V == null ? void 0 : V.deviceSizeBucket) != null &&
                  (L.deviceSizeBucket = V.deviceSizeBucket));
            }
            L.commit();
          }
        }),
      );
    }
    async function S(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
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
        ? ((a = await r("WAWebLidAwareContactsDB").bulkGet(n)),
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
    }
    async function R(e) {
      return o("WAWebApiBulkGetChats").bulkGetChats(
        e.map(function (e) {
          return e.from;
        }),
      );
    }
    async function L(e) {
      var t = new Map();
      for (var n of e)
        if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(n)) {
          var a = o("WAWebMsgGetters").getSender(n);
          a != null && t.set(a.toJid(), a);
        }
      var i = await Promise.all(
          Array.from(t, async function (e) {
            var t = e[0],
              n = e[1],
              a = await o("WAWebApiVerifiedBusinessName")
                .getVerifiedBusinessNameRecordLidAware(n)
                .catch(function (e) {
                  return (
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
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
          }),
        ),
        l = new Map(i.filter(Boolean)),
        s = [],
        c = [];
      for (var d of e) {
        var m;
        if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(d)) {
          var p =
              (m = o("WAWebMsgGetters").getSender(d)) == null
                ? void 0
                : m.toJid(),
            _ = p != null ? l.get(p) : null;
          o("WAWebBizAiPaymentRequestWamLogger").isBizAiPixPaymentRequest(d, _)
            ? s.push(d)
            : c.push(d);
        }
      }
      await Promise.all([
        o(
          "WAWebBizAiPaymentRequestWamLogger",
        ).logBizAiPaymentRequestReceivedWAMEvent(s),
        o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
          c,
          l,
        ),
      ]);
    }
    async function E(e) {
      var t = await Promise.all([
          k(e),
          R(e),
          S(e),
          o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
          o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = t[3],
        l = t[4];
      return {
        botProducts: n,
        chatData: r,
        contactData: a,
        meHasUsername: i,
        meHasUsernamePin: l,
      };
    }
    async function k(e) {
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
        var n = await o("WAWebSchemaBotProfile")
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "receive logging: bot profile read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("receive-logging-bot-profile-read-failed"),
          new Map()
        );
      }
    }
    function I(e, t) {
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
    function T(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    async function D(e) {
      var t,
        n =
          (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
            ? void 0
            : t.toString();
      if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
    }
    async function x(e) {
      var t;
      if (
        o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT
      ) {
        var n;
        return {
          activityType: "commentsReceived",
          ts: (n = e.t) != null ? n : o("WATimeUtils").unixTimeMs(),
          chatId: e.id.remote,
        };
      }
      var r = T(e);
      if (r !== "missing-stanza-id") {
        var a = await o("WAWebDBMsgUtils").getMsgByMsgKey(r);
        if (
          (o("WAWebMsgGetters").getIsReply(e) && a == null && (a = await D(r)),
          a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
        ) {
          var i = o("WAWebMsgGetters").getIsReply(e),
            l = o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === _;
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
      var u = $(e);
      return {
        activityType: e.id.fromMe ? "msgSend" : "msgReceive",
        ts: e.t,
        chatId: e.id.remote,
        isViewOnce: e.isViewOnce === !0,
        isReaction: o("WAWebMsgGetters").getIsReaction(e),
        isForwarded: e.isForwarded === !0,
        isCommerceMessage: o("WAWebChatThreadLoggingUtils").isCommerceMessage(
          e,
        ),
        isReply: o("WAWebMsgGetters").getIsReply(e),
        isEdit:
          o("WAWebMsgGetters").getIsEditProtocolMsg(e) ||
          (u && e.subtype === "message_edit"),
        isExcludedModification: u,
        isBot:
          o("WAWebMsgGetters").getIsBotQuery(e) ||
          o("WAWebMsgGetters").getIsMetaBotResponse(e),
        isEventCreation: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
        isEventResponse: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
        isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled()
          ? ((t = e.afterReadDuration) != null ? t : 0) > 0
          : void 0,
      };
    }
    function $(e) {
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
    function P(e) {
      var t = function () {
          if (
            a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
            a.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
            !a.id.fromMe
          ) {
            var e,
              t =
                (e = a.interactivePayload) == null ||
                (e = e.buttons) == null ||
                (e = e[0]) == null
                  ? void 0
                  : e.buttonParamsJson;
            if (t == null)
              return (
                o("WAWebSignupQPLLogger").confirmationMissingParams(),
                N(a),
                0
              );
            try {
              var n = JSON.parse(t),
                i = n.signup_id;
              if (i == null)
                return (
                  o("WAWebSignupQPLLogger").confirmationParseFailure(
                    "missing field 'signup_id'",
                  ),
                  N(a),
                  0
                );
              (o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy")
                  .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_RECEIVED,
                signupId: String(i),
                businessWid: a.id.remote,
              }),
                o("WAWebSignupQPLLogger").confirmationSuccess(String(i)),
                o("WAWebInAppSignupInfoStore")
                  .stopPendingConfirmationTimer(String(i))
                  .then(function (e) {
                    e === "write_failed" &&
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[signup:confirmation] timer stop failed signupId=",
                              "",
                            ])),
                          String(i),
                        )
                        .sendLogs("signup-stop-pending-confirmation-failed");
                  }));
            } catch (e) {
              (o("WAWebSignupQPLLogger").confirmationParseFailure(e), N(a));
            }
          }
        },
        n;
      for (var a of e) n = t();
    }
    function N(e) {
      o("WAWebSignupFlowLoggerLazy").logSignupOp({
        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION
          .SIGNUP_CONFIRMATION_PARSE_FAILURE,
        signupId: "",
        businessWid: e.id.remote,
      });
    }
    function M(e) {
      Promise.all(
        e
          .filter(
            o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
          )
          .map(x),
      ).then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function w(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function A(e) {
      var t;
      (y.push({
        params: e,
        msgProcessEndTsMillis:
          (t = e.msgProcessEndTsMillis) != null
            ? t
            : o("WATimeUtils").unixTimeMs(),
      }),
        e.offline == null || !r("gkx")("21649") || y.length >= h
          ? C.forceRunNow()
          : C.debounceAndCap(f, g));
    }
    function F() {
      var e = y.splice(0),
        t = e.flatMap(function (e) {
          var t = e.params;
          return t.msgs;
        });
      E(t)
        .then(function (n) {
          return Promise.all(
            [].concat(O(e, n), [
              I(t, n.contactData),
              M(t),
              w(t),
              b(t),
              o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageReceivedWAMEvent(t),
              o(
                "WAWebOrderDetailsReceivedWamLogger",
              ).logOrderDetailsReceivedWAMEvent(t),
              o(
                "WAWebPaymentInfoReceivedWamLogger",
              ).logPaymentInfoReceivedWAMEvent(t),
              L(t),
              o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
                t,
                n.chatData,
              ),
              P(t),
              o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t),
            ]),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                "",
              ])),
            String(e),
          );
        });
    }
    function O(e, t) {
      var n = 0;
      return e.map(function (e) {
        var r = e.msgProcessEndTsMillis,
          o = e.params,
          a = t.chatData.slice(n, n + o.msgs.length);
        return (
          (n += o.msgs.length),
          v(o, r, babelHelpers.extends({}, t, { chatData: a }))
        );
      });
    }
    function B(e) {
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
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "error logging conditional-reveal message receive: ",
              "",
            ])),
          String(e),
        );
      }
    }
    ((l.logReceivedMessagesInWAM = A),
      (l.logConditionalRevealMessageReceive = B));
  },
  98,
);
