__d(
  "WAWebLogReceivedMessages",
  [
    "PaymentLinkWamLogger",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAfterReadUtils",
    "WAWebApiBulkGetChats",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebChatThreadLogging",
    "WAWebChatThreadLoggingUtils",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebEphemeralityResolver",
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
    "WAWebPaymentRequestWamLogger",
    "WAWebQbmIncomingMessageLogger",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupQPLLogger",
    "WAWebStickerPremiumStatus",
    "WAWebUprReceivedWamLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatGatedReason",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumRevokeType",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWamMessageUtils",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "\uD83D\uDC9A";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (c || (c = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    o("PaymentLinkWamLogger").shouldLogReceiverEvent(e) &&
                      (yield o("PaymentLinkWamLogger")
                        .genLogReceiveEvent(
                          { interaction_component: null, msg: e },
                          e.matchedText,
                        )
                        .catch(function (e) {
                          o("WALogger").WARN(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
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
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a,
            i = e.clientReceivedTsMillis,
            l = e.localAddressingMode,
            s = e.msgProcessStartTsMillis,
            u = e.msgs,
            d = e.offline,
            m = e.serverAddressingMode,
            p = e.tsMillis,
            _ = o("WATimeUtils").unixTimeMs(),
            f = yield (c || (c = n("Promise"))).all([
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            g = f[0],
            h = f[1],
            y =
              (a = r.get(o("WAWebUserPrefsMeUser").getMeUser().toJid())) == null
                ? void 0
                : a.ephemeralDuration;
          yield c.all(
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
                      var c = t[n];
                      c != null &&
                        c.lidOriginType &&
                        (u =
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
                      var f = yield o(
                          "WAWebChatThreadLoggingUtils",
                        ).getOppositeVisibleIdentification(a),
                        C = a.isGroup()
                          ? e.from.isLid()
                          : o("WAWebWamMsgUtils").msgIsLid(e, a),
                        b = new (o(
                          "WAWebMessageReceiveWamEvent",
                        ).MessageReceiveWamEvent)({
                          messageType:
                            o("WAWebWamMsgUtils").getWamMessageType(e),
                          messageMediaType:
                            o("WAWebWamMsgUtils").getWamMediaType(e),
                          messageIsInternational:
                            o("WAWebMsgGetters").getIsInternational(e),
                          messageIsOffline: d != null,
                          isViewOnce: !!e.isViewOnce,
                          isForwardedForward:
                            o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
                          isAReply: o("WAWebMsgGetters").getIsReply(e),
                          editType: o("WAWebMsgGetters").getWamEditType(e),
                          botType: o("WAWebWamMsgUtils").getWamBotType(
                            a,
                            e.bizBotType,
                          ),
                          isAComment:
                            o("WAWebMsgGetters").getType(e) ===
                            o("WAWebMsgType").MSG_TYPE.COMMENT,
                          hasUsername: g,
                          hasUsernamePin: h,
                          chatOrigins: u,
                          oppositeVisibleIdentification: f != null ? f : void 0,
                          isLid: C,
                          messageReceiveT0: 0,
                          messageReceiveT1: 0,
                          messageReceiveT2: 0,
                        }),
                        v = o("WAWebWamMessageUtils").getVcardMsgWamData(
                          e,
                          "receive",
                        );
                      if (v) {
                        var S = v.lidOnlyVcardCount,
                          R = v.pnAndLidVcardCount,
                          L = v.pnOnlyVcardCount;
                        ((b.receivedPhoneNumberContactSize = L),
                          (b.receivedUsernameContactSize = S),
                          (b.receivedPhoneNumberWithUsernameContactSize = R));
                      }
                      if (
                        (d != null && (b.offlineCount = d),
                        !a.isGroup() && !a.isStatus())
                      ) {
                        var E,
                          k =
                            (E = r.get(a.toJid())) == null
                              ? void 0
                              : E.ephemeralDuration;
                        (k != null && (b.senderDefaultDisappearingDuration = k),
                          y != null &&
                            (b.receiverDefaultDisappearingDuration = y),
                          (b.isLid = a.isLid()));
                      }
                      (o("WAWebMsgGetters").getIsRevoke(e) &&
                        (b.revokeType =
                          e.subtype === "admin_revoke" || e.subtype === "admin"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((b.messageReceiveT0 = i - p),
                          (b.messageReceiveT1 = _ - i),
                          s != null && (b.messageQueueTime = s - i)),
                        e.ephemeralDuration != null &&
                          e.ephemeralDuration > 0 &&
                          (b.ephemeralityDuration = e.ephemeralDuration));
                      var I = e.afterReadDuration;
                      I != null &&
                        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                        ((b.isAfterRead = I > 0), (b.afterReadDuration = I));
                      var T =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      T != null && (b.disappearingChatInitiator = T);
                      var D =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      D != null && (b.ephemeralityTriggerAction = D);
                      var x =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      x != null && (b.ephemeralityInitiator = x);
                      var $ =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      $ != null && (b.agentEngagementType = $);
                      var P = e.senderWithDevice;
                      if (P != null) {
                        var N = o("WAWebWamMsgUtils").getWamE2eSenderType(P);
                        (N != null && (b.e2eSenderType = N),
                          P.isHosted() &&
                            (b.encryptionType = o(
                              "WAWebWamEnumEncryptionTypeCode",
                            ).ENCRYPTION_TYPE_CODE.COEX));
                      }
                      var M = yield o(
                        "WAWebWamGroupMetadataMetricUtils",
                      ).getGroupTypeFromChatWid(a);
                      if (
                        (M != null && (b.typeOfGroup = M),
                        m != null &&
                          (b.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(m)),
                        l != null &&
                          (b.localAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(l)),
                        o("WAWebMsgGetters").getType(e) ===
                          o("WAWebMsgType").MSG_TYPE.STICKER &&
                          (b.stickerIsPremium =
                            e.stickerPremiumStatus ===
                            o("WAWebStickerPremiumStatus").StickerPremiumStatus
                              .PREMIUM),
                        a != null && a.isGroup())
                      ) {
                        var w = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(a),
                          A = o("WAWebMsgGetters").getIsReaction(e);
                        w != null && A != null && (b.isLid = w && A);
                        var F = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(a);
                        ((F == null ? void 0 : F.participantCount) != null &&
                          (b.participantCount = F.participantCount),
                          (F == null ? void 0 : F.deviceCount) != null &&
                            (b.deviceCount = F.deviceCount),
                          (F == null ? void 0 : F.deviceSizeBucket) != null &&
                            (b.deviceSizeBucket = F.deviceSizeBucket));
                      }
                      b.commit();
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
          t.add(o("WAWebUserPrefsMeUser").getMeUser().toJid());
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebApiBulkGetChats").bulkGetChats(
            e.map(function (e) {
              return e.from;
            }),
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
          var t = yield (c || (c = n("Promise"))).all([y(e), g(e)]),
            r = t[0],
            o = t[1];
          return { chatData: r, contactData: o };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
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
    function R(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
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
          if (
            o("WAWebABProps").getABPropConfigValue(
              "group_status_receiver_enabled",
            )
          ) {
            var r = R(e);
            if (r !== "missing-stanza-id") {
              var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
              if (
                (o("WAWebMsgGetters").getIsReply(e) &&
                  a == null &&
                  (a = yield L(r)),
                a != null && o("WAWebMsgGetters").getIsGroupStatus(a))
              ) {
                var i = o("WAWebMsgGetters").getIsReply(e),
                  l =
                    o("WAWebMsgGetters").getIsReaction(e) &&
                    e.reactionText === d;
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
    function D(e) {
      (c || (c = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(k),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function x(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function $(t) {
      var r = t.msgs;
      b(r)
        .then(function (e) {
          return (c || (c = n("Promise"))).all([
            _(t, e.chatData, e.contactData),
            S(r, e.contactData),
            D(r),
            x(r),
            m(r),
            o(
              "WAWebGalaxyFlowWamLoggerUtils",
            ).logStructuredMessageReceivedWAMEvent(r),
            o(
              "WAWebOrderDetailsReceivedWamLogger",
            ).logOrderDetailsReceivedWAMEvent(r),
            o(
              "WAWebPaymentInfoReceivedWamLogger",
            ).logPaymentInfoReceivedWAMEvent(r),
            o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
              r,
            ),
            o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
              r,
              e.chatData,
            ),
            T(r),
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
    l.logReceivedMessagesInWAM = $;
  },
  98,
);
