__d(
  "WAWebLogReceivedMessages",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
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
    "WAWebUserPrefsMeUser",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "\uD83D\uDC9A";
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (m || (m = n("Promise"))).all(
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
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
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
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = e.clientReceivedTsMillis,
            l = e.isPq,
            s = e.localAddressingMode,
            u = e.msgProcessStartTsMillis,
            c = e.msgs,
            d = e.offline,
            p = e.oppositeHasUsername,
            _ = e.serverAddressingMode,
            f = e.sessionScope,
            g = e.tsMillis,
            h = o("WATimeUtils").unixTimeMs(),
            y = yield (m || (m = n("Promise"))).all([
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            C = y[0],
            b = y[1],
            v =
              (a = r.get(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
              )) == null
                ? void 0
                : a.ephemeralDuration;
          yield m.all(
            c.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var a = e.from;
                    if (a != null) {
                      var c = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .OTHERS;
                      a.isLid() &&
                        (c = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                          .LID_CTWA);
                      var m = t[n];
                      m != null &&
                        m.lidOriginType &&
                        (c =
                          m.lidOriginType ===
                          o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
                            ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                                .LID_CTWA
                            : m.lidOriginType ===
                                o("WAWebUsernameTypes").LidOriginType.GENERAL
                              ? o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      m.lidOriginType,
                                  );
                                })());
                      var y = yield o(
                          "WAWebChatThreadLoggingUtils",
                        ).getOppositeVisibleIdentification(a),
                        S = a.isGroup()
                          ? e.from.isLid()
                          : o("WAWebWamMsgUtils").msgIsLid(e, a),
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
                            chatId: a,
                            bizBotType: e.bizBotType,
                          }),
                          isAComment:
                            o("WAWebMsgGetters").getType(e) ===
                            o("WAWebMsgType").MSG_TYPE.COMMENT,
                          hasUsername: C,
                          hasUsernamePin: b,
                          chatOrigins: c,
                          oppositeVisibleIdentification: y != null ? y : void 0,
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
                        !a.isGroup() && !a.isStatus())
                      ) {
                        var D,
                          x =
                            (D = r.get(a.toJid())) == null
                              ? void 0
                              : D.ephemeralDuration;
                        (x != null && (R.senderDefaultDisappearingDuration = x),
                          v != null &&
                            (R.receiverDefaultDisappearingDuration = v),
                          (R.isLid = a.isLid()),
                          p != null &&
                            o(
                              "WAWebUsernameGatingUtils",
                            ).usernameAdoptionAndEngagementMonitoringEnabled() &&
                            (R.oppositeHasUsername = p));
                      }
                      (o("WAWebMsgGetters").getIsRevoke(e) &&
                        (R.revokeType =
                          e.subtype === "admin_revoke" || e.subtype === "admin"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((R.messageReceiveT0 = i - g),
                          (R.messageReceiveT1 = h - i),
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
                      ).getGroupTypeFromChatWid(a);
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
                        a != null && a.isGroup())
                      ) {
                        var W = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(a),
                          q = o("WAWebMsgGetters").getIsReaction(e);
                        W != null && q != null && (R.isLid = W && q);
                        var U = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(a);
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
          t.add(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid());
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebApiBulkGetChats").bulkGetChats(
            e.map(function (e) {
              return e.from;
            }),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var a of e)
            if (o("WAWebPaymentRequestWamLogger").isPaymentRequestMsg(a)) {
              var i = o("WAWebMsgGetters").getSender(a);
              i != null && t.set(i.toJid(), i);
            }
          var l = yield (m || (m = n("Promise"))).all(
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
                                d ||
                                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
          );
          yield o(
            "WAWebPaymentRequestWamLogger",
          ).logPaymentRequestReceivedWAMEvent(e, new Map(l.filter(Boolean)));
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
          var t = yield (m || (m = n("Promise"))).all([b(e), y(e)]),
            r = t[0],
            o = t[1];
          return { chatData: r, contactData: o };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
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
    function I(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
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
          var r = I(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield T(r)),
              a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
            ) {
              var i = o("WAWebMsgGetters").getIsReply(e),
                l =
                  o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === p;
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
          var u = P(e);
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
    function N(e) {
      for (var t of e)
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          t.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP &&
          !t.id.fromMe
        ) {
          var n,
            a =
              (n = t.interactivePayload) == null ||
              (n = n.buttons) == null ||
              (n = n[0]) == null
                ? void 0
                : n.buttonParamsJson;
          if (a == null) {
            o("WAWebSignupQPLLogger").confirmationMissingParams();
            continue;
          }
          try {
            var i = JSON.parse(a),
              l = i.signup_id;
            if (l == null) {
              o("WAWebSignupQPLLogger").confirmationParseFailure(
                "missing field 'signup_id'",
              );
              continue;
            }
            (o("WAWebSignupFlowLoggerLazy").logSignupOp({
              operation: o("WAWebSignupFlowLoggerLazy")
                .SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_RECEIVED,
              signupId: String(l),
              businessWid: t.id.remote,
            }),
              o("WAWebSignupQPLLogger").confirmationSuccess(String(l)));
          } catch (e) {
            o("WAWebSignupQPLLogger").confirmationParseFailure(e);
          }
        }
    }
    function M(e) {
      (m || (m = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(x),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
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
    function A(t) {
      var r = t.msgs;
      L(r)
        .then(function (e) {
          return (m || (m = n("Promise"))).all([
            g(t, e.chatData, e.contactData),
            k(r, e.contactData),
            M(r),
            w(r),
            _(r),
            o(
              "WAWebGalaxyFlowWamLoggerUtils",
            ).logStructuredMessageReceivedWAMEvent(r),
            o(
              "WAWebOrderDetailsReceivedWamLogger",
            ).logOrderDetailsReceivedWAMEvent(r),
            o(
              "WAWebPaymentInfoReceivedWamLogger",
            ).logPaymentInfoReceivedWAMEvent(r),
            S(r),
            o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
              r,
              e.chatData,
            ),
            N(r),
            o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(r),
          ]);
        })
        .catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                "",
              ])),
            String(t),
          );
        });
    }
    function F(e) {
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
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "error logging conditional-reveal message receive: ",
              "",
            ])),
          String(e),
        );
      }
    }
    ((l.logReceivedMessagesInWAM = A),
      (l.logConditionalRevealMessageReceive = F));
  },
  98,
);
