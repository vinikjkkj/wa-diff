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
      _ = "\uD83D\uDC9A",
      f = 100,
      g = 1e3,
      h = 100,
      y = [],
      C = new (o("WAShiftTimer").ShiftTimer)(H);
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (p || (p = n("Promise"))).all(
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = e.clientReceivedTsMillis,
            l = e.isPq,
            s = e.localAddressingMode,
            u = e.msgProcessStartTsMillis,
            c = e.msgs,
            d = e.offline,
            m = e.oppositeHasUsername,
            _ = e.serverAddressingMode,
            f = e.sessionScope,
            g = e.tsMillis,
            h = r.chatData,
            y = r.contactData,
            C = r.meHasUsername,
            b = r.meHasUsernamePin,
            v =
              (a = y.get(o("WAWebUserUtils").getMeUserOrThrow().toJid())) ==
              null
                ? void 0
                : a.ephemeralDuration;
          yield (p || (p = n("Promise"))).all(
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
                      var c = h[n];
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
                      var p = yield o(
                          "WAWebChatThreadLoggingUtils",
                        ).getOppositeVisibleIdentification(r),
                        S = r.isGroup()
                          ? e.from.isLid()
                          : o("WAWebWamMsgUtils").msgIsLid(e, r),
                        R = new (o(
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
                          }),
                          isAComment:
                            o("WAWebMsgGetters").getType(e) ===
                            o("WAWebMsgType").MSG_TYPE.COMMENT,
                          hasUsername: C,
                          hasUsernamePin: b,
                          chatOrigins: a,
                          oppositeVisibleIdentification: p != null ? p : void 0,
                          isLid: S,
                          messageReceiveT0: 0,
                          messageReceiveT1: 0,
                          messageReceiveT2: 0,
                          sessionScope: o(
                            "WAWebSessionScopeWamUtils",
                          ).sessionScopeToWamType(f),
                        }),
                        L = o("WAWebWamMessageUtils").getVcardMsgWamData(
                          e,
                          "receive",
                        );
                      if (L) {
                        var E = L.lidOnlyVcardCount,
                          k = L.pnAndLidVcardCount,
                          I = L.pnOnlyVcardCount;
                        ((R.receivedPhoneNumberContactSize = I),
                          (R.receivedUsernameContactSize = E),
                          (R.receivedPhoneNumberWithUsernameContactSize = k));
                      }
                      d != null && (R.offlineCount = d);
                      var T = o(
                        "WAWebExperienceIdWamFields",
                      ).getExperienceIdsWamValue(
                        o("WAWebExperienceIdWamFields").getExperienceIds(e),
                      );
                      if (
                        (T != null && (R.experienceIds = T),
                        !r.isGroup() && !r.isStatus())
                      ) {
                        var D,
                          x =
                            (D = y.get(r.toJid())) == null
                              ? void 0
                              : D.ephemeralDuration;
                        (x != null && (R.senderDefaultDisappearingDuration = x),
                          v != null &&
                            (R.receiverDefaultDisappearingDuration = v),
                          (R.isLid = r.isLid()),
                          m != null &&
                            o(
                              "WAWebUsernameGatingUtils",
                            ).usernameAdoptionAndEngagementMonitoringEnabled() &&
                            (R.oppositeHasUsername = m));
                      }
                      (o("WAWebMsgGetters").getIsRevoke(e) &&
                        (R.revokeType =
                          e.subtype === "admin_revoke" || e.subtype === "admin"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((R.messageReceiveT0 = i - g),
                          (R.messageReceiveT1 = t - i),
                          u != null && (R.messageQueueTime = u - i)),
                        e.ephemeralDuration != null &&
                          e.ephemeralDuration > 0 &&
                          (R.ephemeralityDuration = e.ephemeralDuration));
                      var $ = e.afterReadDuration;
                      $ != null &&
                        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                        ((R.isAfterRead = $ > 0), (R.afterReadDuration = $));
                      var P =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      P != null && (R.disappearingChatInitiator = P);
                      var N =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      N != null && (R.ephemeralityTriggerAction = N);
                      var M =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      M != null && (R.ephemeralityInitiator = M);
                      var w =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      w != null && (R.agentEngagementType = w);
                      var A = o(
                          "WAWebCoexV2WamClassification",
                        ).getRecvWamE2eClassification(
                          e.senderWithDevice,
                          e.senderWithDevice,
                          e.metaFrom,
                        ),
                        F = A.e2eSenderType,
                        O = A.encryptionType;
                      (F != null && (R.e2eSenderType = F),
                        O != null && (R.encryptionType = O));
                      var B = yield o(
                        "WAWebWamGroupMetadataMetricUtils",
                      ).getGroupTypeFromChatWid(r);
                      if (
                        (B != null && (R.typeOfGroup = B),
                        _ != null &&
                          (R.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(_)),
                        s != null &&
                          (R.localAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(s)),
                        o("WAWebMsgGetters").getType(e) ===
                          o("WAWebMsgType").MSG_TYPE.STICKER &&
                          (R.stickerIsPremium =
                            e.stickerPremiumStatus ===
                            o("WAWebStickerPremiumStatus").StickerPremiumStatus
                              .PREMIUM),
                        r != null && r.isGroup())
                      ) {
                        var W = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(r),
                          q = o("WAWebMsgGetters").getIsReaction(e);
                        W != null && q != null && (R.isLid = W && q);
                        var U = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(r);
                        ((U == null ? void 0 : U.participantCount) != null &&
                          (R.participantCount = U.participantCount),
                          (U == null ? void 0 : U.deviceCount) != null &&
                            (R.deviceCount = U.deviceCount),
                          (U == null ? void 0 : U.deviceSizeBucket) != null &&
                            (R.deviceSizeBucket = U.deviceSizeBucket));
                      }
                      R.commit();
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebApiBulkGetChats").bulkGetChats(
            e.map(function (e) {
              return e.from;
            }),
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var a of e)
            if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(a)) {
              var i = o("WAWebMsgGetters").getSender(a);
              i != null && t.set(i.toJid(), i);
            }
          var l = yield (p || (p = n("Promise"))).all(
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
            var _;
            if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(d)) {
              var f =
                  (_ = o("WAWebMsgGetters").getSender(d)) == null
                    ? void 0
                    : _.toJid(),
                g = f != null ? s.get(f) : null;
              o("WAWebBizAiPaymentRequestWamLogger").isBizAiPixPaymentRequest(
                d,
                g,
              )
                ? u.push(d)
                : c.push(d);
            }
          }
          yield p.all([
            o(
              "WAWebBizAiPaymentRequestWamLogger",
            ).logBizAiPaymentRequestReceivedWAMEvent(u),
            o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
              c,
              s,
            ),
          ]);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (p || (p = n("Promise"))).all([
              k(e),
              L(e),
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          return {
            chatData: r,
            contactData: a,
            meHasUsername: i,
            meHasUsernamePin: l,
          };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
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
    function N(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r = N(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield M(r)),
              a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
            ) {
              var i = o("WAWebMsgGetters").getIsReply(e),
                l =
                  o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === _;
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
          var u = O(e);
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
        F.apply(this, arguments)
      );
    }
    function O(e) {
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
    function B(t) {
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
                W(i),
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
                  W(i),
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
              (o("WAWebSignupQPLLogger").confirmationParseFailure(e), W(i));
            }
          }
        },
        a;
      for (var i of t) a = n();
    }
    function W(e) {
      o("WAWebSignupFlowLoggerLazy").logSignupOp({
        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION
          .SIGNUP_CONFIRMATION_PARSE_FAILURE,
        signupId: "",
        businessWid: e.id.remote,
      });
    }
    function q(e) {
      (p || (p = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(A),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function U(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function V(e) {
      (y.push({
        params: e,
        msgProcessEndTsMillis: o("WATimeUtils").unixTimeMs(),
      }),
        e.offline == null || !r("gkx")("21649") || y.length >= h
          ? C.forceRunNow()
          : C.debounceAndCap(f, g));
    }
    function H() {
      var e = y.splice(0),
        t = e.flatMap(function (e) {
          var t = e.params;
          return t.msgs;
        });
      x(t)
        .then(function (r) {
          return (p || (p = n("Promise"))).all(
            [].concat(G(e, r), [
              P(t, r.contactData),
              q(t),
              U(t),
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
              T(t),
              o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
                t,
                r.chatData,
              ),
              B(t),
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
    function G(e, t) {
      var n = 0;
      return e.map(function (e) {
        var r = e.msgProcessEndTsMillis,
          o = e.params,
          a = t.chatData.slice(n, n + o.msgs.length);
        return (
          (n += o.msgs.length),
          S(o, r, babelHelpers.extends({}, t, { chatData: a }))
        );
      });
    }
    function z(e) {
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
    ((l.logReceivedMessagesInWAM = V),
      (l.logConditionalRevealMessageReceive = z));
  },
  98,
);
