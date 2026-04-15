__d(
  "WAWebLogReceivedMessages",
  [
    "PaymentLinkWamLogger",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAddonProcessMsgsUtils",
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
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMessageReceiveWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPaymentRequestWamLogger",
    "WAWebQbmIncomingMessageLogger",
    "WAWebRuntimeEnvironmentUtils",
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
                            e,
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
              (a = r.get(
                o("WAWebUserPrefsMeUser")
                  .getMePnUserOrThrow_DO_NOT_USE()
                  .toJid(),
              )) == null
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
                          e.subtype === "admin_revoke"
                            ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                            : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
                        i != null &&
                          ((b.messageReceiveT0 = i - p),
                          (b.messageReceiveT1 = _ - i),
                          s != null && (b.messageQueueTime = s - i)),
                        e.ephemeralDuration != null &&
                          e.ephemeralDuration > 0 &&
                          (b.ephemeralityDuration = e.ephemeralDuration),
                        e.afterReadDuration != null &&
                          ((b.isAfterRead = e.afterReadDuration > 0),
                          (b.afterReadDuration = e.afterReadDuration)));
                      var I =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      I != null && (b.disappearingChatInitiator = I);
                      var T =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      T != null && (b.ephemeralityTriggerAction = T);
                      var D =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      D != null && (b.ephemeralityInitiator = D);
                      var x =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      x != null && (b.agentEngagementType = x);
                      var $ = e.senderWithDevice;
                      if ($ != null) {
                        var P = o("WAWebWamMsgUtils").getWamE2eSenderType($);
                        (P != null && (b.e2eSenderType = P),
                          $.isHosted() &&
                            (b.encryptionType = o(
                              "WAWebWamEnumEncryptionTypeCode",
                            ).ENCRYPTION_TYPE_CODE.COEX));
                      }
                      var N = yield o(
                        "WAWebWamGroupMetadataMetricUtils",
                      ).getGroupTypeFromChatWid(a);
                      if (
                        (N != null && (b.typeOfGroup = N),
                        m != null &&
                          (b.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(m)),
                        l != null &&
                          (b.localAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(l)),
                        a != null && a.isGroup())
                      ) {
                        var M = yield o(
                            "WAWebWamGroupMetadataMetricUtils",
                          ).isCagFromChatWid(a),
                          w = o("WAWebMsgGetters").getIsReaction(e);
                        M != null && w != null && (b.isLid = M && w);
                        var A = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(a);
                        ((A == null ? void 0 : A.participantCount) != null &&
                          (b.participantCount = A.participantCount),
                          (A == null ? void 0 : A.deviceCount) != null &&
                            (b.deviceCount = A.deviceCount),
                          (A == null ? void 0 : A.deviceSizeBucket) != null &&
                            (b.deviceSizeBucket = A.deviceSizeBucket));
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
          t.add(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().toJid(),
          );
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
          if (
            o("WAWebMsgGetters").getType(e) ===
            o("WAWebMsgType").MSG_TYPE.COMMENT
          ) {
            var t;
            return {
              activityType: "commentsReceived",
              ts: (t = e.t) != null ? t : o("WATimeUtils").unixTimeMs(),
              chatId: e.id.remote,
            };
          }
          if (
            o("WAWebABProps").getABPropConfigValue(
              "group_status_receiver_enabled",
            )
          ) {
            var n = R(e);
            if (n !== "missing-stanza-id") {
              var r = yield o("WAWebDBMsgUtils").getMsgByMsgKey(n);
              if (
                (o("WAWebMsgGetters").getIsReply(e) &&
                  r == null &&
                  (r = yield L(n)),
                r != null && o("WAWebMsgGetters").getIsGroupStatus(r))
              ) {
                var a = o("WAWebMsgGetters").getIsReply(e),
                  i =
                    o("WAWebMsgGetters").getIsReaction(e) &&
                    e.reactionText === d;
                if (a || i) {
                  var l = o("WAWebMsgGetters").getIsSentByMe(r);
                  return {
                    activityType: "groupStatusMsgReceive",
                    chatId: e.id.remote,
                    ts: e.t,
                    isGroupStatusReplyOthersToOwn: a && l,
                    isGroupStatusReplyOthersToOthers: a && !l,
                    isGroupStatusLikeOthersToOwn: i && l,
                    isGroupStatusLikeOthersToOthers: i && !l,
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
          };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
    function D(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function x(t) {
      var r = t.msgs;
      b(r)
        .then(function (e) {
          return (c || (c = n("Promise"))).all([
            _(t, e.chatData, e.contactData),
            S(r, e.contactData),
            T(r),
            D(r),
            m(r),
            o(
              "WAWebGalaxyFlowWamLoggerUtils",
            ).logStructuredMessageReceivedWAMEvent(r),
            o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
              r,
            ),
            o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
              r,
              e.chatData,
            ),
          ]);
        })
        .catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                "",
              ])),
            t,
          );
        });
    }
    l.logReceivedMessagesInWAM = x;
  },
  98,
);
