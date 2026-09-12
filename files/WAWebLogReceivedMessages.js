__d(
  "WAWebLogReceivedMessages",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
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
    "WAWebUserPrefsExperienceIds",
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
          var t = yield (m || (m = n("Promise"))).all([b(e), y(e)]),
            r = t[0],
            o = t[1];
          return { chatData: r, contactData: o };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
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
    function E(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
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
          var r = E(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield k(r)),
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
            isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
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
    function $(e) {
      (m || (m = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(T),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function P(t) {
      try {
        o("WAWebUserPrefsExperienceIds").accumulateReceivedExperienceIds(
          t
            .filter(function (e) {
              return !e.id.fromMe;
            })
            .flatMap(function (e) {
              var t;
              return (t = e.experienceIds) != null ? t : [];
            }),
        );
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "accumulateExperienceIdExposure failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("experience-id-accumulate-failed");
      }
    }
    function N(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function M(e) {
      var t = e.msgs;
      S(t)
        .then(function (r) {
          return (
            P(t),
            (m || (m = n("Promise"))).all([
              g(e, r.chatData, r.contactData),
              L(t, r.contactData),
              $(t),
              N(t),
              _(t),
              o(
                "WAWebGalaxyFlowWamLoggerUtils",
              ).logStructuredMessageReceivedWAMEvent(t),
              o(
                "WAWebOrderDetailsReceivedWamLogger",
              ).logOrderDetailsReceivedWAMEvent(t),
              o(
                "WAWebPaymentInfoReceivedWamLogger",
              ).logPaymentInfoReceivedWAMEvent(t),
              o(
                "WAWebPaymentRequestWamLogger",
              ).logPaymentRequestReceivedWAMEvent(t),
              o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
                t,
                r.chatData,
              ),
              x(t),
              o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t),
            ])
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
    function w(e) {
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
    ((l.logReceivedMessagesInWAM = M),
      (l.logConditionalRevealMessageReceive = w));
  },
  98,
);
