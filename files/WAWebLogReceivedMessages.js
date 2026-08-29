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
      m = "\uD83D\uDC9A";
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (d || (d = n("Promise"))).all(
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
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = e.clientReceivedTsMillis,
            l = e.localAddressingMode,
            s = e.msgProcessStartTsMillis,
            u = e.msgs,
            c = e.offline,
            m = e.oppositeHasUsername,
            p = e.serverAddressingMode,
            _ = e.sessionScope,
            f = e.tsMillis,
            g = o("WATimeUtils").unixTimeMs(),
            h = yield (d || (d = n("Promise"))).all([
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            y = h[0],
            C = h[1],
            b =
              (a = r.get(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
              )) == null
                ? void 0
                : a.ephemeralDuration;
          yield d.all(
            u.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var a = e.from;
                    if (a != null) {
                      var u = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                        .OTHERS;
                      a.isLid() &&
                        (u = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                          .LID_CTWA);
                      var d = t[n];
                      d != null &&
                        d.lidOriginType &&
                        (u =
                          d.lidOriginType ===
                          o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
                            ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                                .LID_CTWA
                            : d.lidOriginType ===
                                o("WAWebUsernameTypes").LidOriginType.GENERAL
                              ? o("WAWebWamEnumChatOriginsType")
                                  .CHAT_ORIGINS_TYPE.OTHERS
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      d.lidOriginType,
                                  );
                                })());
                      var h = yield o(
                          "WAWebChatThreadLoggingUtils",
                        ).getOppositeVisibleIdentification(a),
                        v = a.isGroup()
                          ? e.from.isLid()
                          : o("WAWebWamMsgUtils").msgIsLid(e, a),
                        S = new (o(
                          "WAWebMessageReceiveWamEvent",
                        ).MessageReceiveWamEvent)({
                          messageType:
                            o("WAWebWamMsgUtils").getWamMessageType(e),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(e),
                          messageIsInternational:
                            o("WAWebMsgGetters").getIsInternational(e),
                          messageIsOffline: c != null,
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
                          hasUsername: y,
                          hasUsernamePin: C,
                          chatOrigins: u,
                          oppositeVisibleIdentification: h != null ? h : void 0,
                          isLid: v,
                          messageReceiveT0: 0,
                          messageReceiveT1: 0,
                          messageReceiveT2: 0,
                          sessionScope: o(
                            "WAWebSessionScopeWamUtils",
                          ).sessionScopeToWamType(_),
                        }),
                        R = o("WAWebWamMessageUtils").getVcardMsgWamData(
                          e,
                          "receive",
                        );
                      if (R) {
                        var L = R.lidOnlyVcardCount,
                          E = R.pnAndLidVcardCount,
                          k = R.pnOnlyVcardCount;
                        ((S.receivedPhoneNumberContactSize = k),
                          (S.receivedUsernameContactSize = L),
                          (S.receivedPhoneNumberWithUsernameContactSize = E));
                      }
                      c != null && (S.offlineCount = c);
                      var I = o(
                        "WAWebExperienceIdWamFields",
                      ).getExperienceIdsWamValue(
                        o("WAWebExperienceIdWamFields").getExperienceIds(e),
                      );
                      if (
                        (I != null && (S.experienceIds = I),
                        !a.isGroup() && !a.isStatus())
                      ) {
                        var T,
                          D =
                            (T = r.get(a.toJid())) == null
                              ? void 0
                              : T.ephemeralDuration;
                        (D != null && (S.senderDefaultDisappearingDuration = D),
                          b != null &&
                            (S.receiverDefaultDisappearingDuration = b),
                          (S.isLid = a.isLid()),
                          m != null &&
                            o(
                              "WAWebUsernameGatingUtils",
                            ).usernameAdoptionAndEngagementMonitoringEnabled() &&
                            (S.oppositeHasUsername = m));
                      }
                      (o("WAWebMsgGetters").getIsRevoke(e) &&
                        (S.revokeType =
                          e.subtype === "admin_revoke" || e.subtype === "admin"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((S.messageReceiveT0 = i - f),
                          (S.messageReceiveT1 = g - i),
                          s != null && (S.messageQueueTime = s - i)),
                        e.ephemeralDuration != null &&
                          e.ephemeralDuration > 0 &&
                          (S.ephemeralityDuration = e.ephemeralDuration));
                      var x = e.afterReadDuration;
                      x != null &&
                        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                        ((S.isAfterRead = x > 0), (S.afterReadDuration = x));
                      var $ =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      $ != null && (S.disappearingChatInitiator = $);
                      var P =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      P != null && (S.ephemeralityTriggerAction = P);
                      var N =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      N != null && (S.ephemeralityInitiator = N);
                      var M =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      M != null && (S.agentEngagementType = M);
                      var w = o(
                          "WAWebCoexV2WamClassification",
                        ).getRecvWamE2eClassification(
                          e.senderWithDevice,
                          e.senderWithDevice,
                          e.metaFrom,
                        ),
                        A = w.e2eSenderType,
                        F = w.encryptionType;
                      (A != null && (S.e2eSenderType = A),
                        F != null && (S.encryptionType = F));
                      var O = yield o(
                        "WAWebWamGroupMetadataMetricUtils",
                      ).getGroupTypeFromChatWid(a);
                      if (
                        (O != null && (S.typeOfGroup = O),
                        p != null &&
                          (S.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(p)),
                        l != null &&
                          (S.localAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(l)),
                        o("WAWebMsgGetters").getType(e) ===
                          o("WAWebMsgType").MSG_TYPE.STICKER &&
                          (S.stickerIsPremium =
                            e.stickerPremiumStatus ===
                            o("WAWebStickerPremiumStatus").StickerPremiumStatus
                              .PREMIUM),
                        a != null && a.isGroup())
                      ) {
                        var B = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(a),
                          W = o("WAWebMsgGetters").getIsReaction(e);
                        B != null && W != null && (S.isLid = B && W);
                        var q = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(a);
                        ((q == null ? void 0 : q.participantCount) != null &&
                          (S.participantCount = q.participantCount),
                          (q == null ? void 0 : q.deviceCount) != null &&
                            (S.deviceCount = q.deviceCount),
                          (q == null ? void 0 : q.deviceSizeBucket) != null &&
                            (S.deviceSizeBucket = q.deviceSizeBucket));
                      }
                      S.commit();
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebApiBulkGetChats").bulkGetChats(
            e.map(function (e) {
              return e.from;
            }),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (d || (d = n("Promise"))).all([C(e), h(e)]),
            r = t[0],
            o = t[1];
          return { chatData: r, contactData: o };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
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
    function L(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
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
          var r = L(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield E(r)),
              a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
            ) {
              var i = o("WAWebMsgGetters").getIsReply(e),
                l =
                  o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === m;
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
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
    function x(e) {
      (d || (d = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(I),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function $(t) {
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
    function P(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function N(e) {
      var t = e.msgs;
      v(t)
        .then(function (r) {
          return (
            $(t),
            (d || (d = n("Promise"))).all([
              f(e, r.chatData, r.contactData),
              R(t, r.contactData),
              x(t),
              P(t),
              p(t),
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
              D(t),
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
    l.logReceivedMessagesInWAM = N;
  },
  98,
);
