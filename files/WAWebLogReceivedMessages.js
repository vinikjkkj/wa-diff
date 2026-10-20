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
    "WAWebDBGroupsGroupMetadata",
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
      C = new (o("WAShiftTimer").ShiftTimer)(X);
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
            C = r.groupMetadataById,
            b = r.meHasUsername,
            v = r.meHasUsernamePin,
            S =
              (a = y.get(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid(),
              )) == null
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
                          }),
                          isAComment:
                            o("WAWebMsgGetters").getType(e) ===
                            o("WAWebMsgType").MSG_TYPE.COMMENT,
                          hasUsername: b,
                          hasUsernamePin: v,
                          chatOrigins: a,
                          oppositeVisibleIdentification: p != null ? p : void 0,
                          isLid: R,
                          messageReceiveT0: 0,
                          messageReceiveT1: 0,
                          messageReceiveT2: 0,
                          sessionScope: o(
                            "WAWebSessionScopeWamUtils",
                          ).sessionScopeToWamType(f),
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
                            (x = y.get(r.toJid())) == null
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
                      var N = e.afterReadDuration;
                      N != null &&
                        o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                        ((L.isAfterRead = N > 0), (L.afterReadDuration = N));
                      var w =
                        o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
                      w != null && (L.disappearingChatInitiator = w);
                      var A =
                        o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
                      A != null && (L.ephemeralityTriggerAction = A);
                      var F =
                        o(
                          "WAWebMsgGetters",
                        ).getWamDisappearingModeInitiatedByMe(e);
                      F != null && (L.ephemeralityInitiator = F);
                      var O =
                        o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
                      O != null && (L.agentEngagementType = O);
                      var B = o(
                          "WAWebCoexV2WamClassification",
                        ).getRecvWamE2eClassification(
                          e.senderWithDevice,
                          e.senderWithDevice,
                          e.metaFrom,
                        ),
                        W = B.e2eSenderType,
                        q = B.encryptionType;
                      (W != null && (L.e2eSenderType = W),
                        q != null && (L.encryptionType = q));
                      var U = yield P(r, C);
                      if (
                        (U != null && (L.typeOfGroup = U),
                        _ != null &&
                          (L.serverAddressingMode = o(
                            "WAWebWamAddressingModeUtils",
                          ).getWamAddressingModeFromString(_)),
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
                        var V = yield M(r, C),
                          H = o("WAWebMsgGetters").getIsReaction(e);
                        V != null && H != null && (L.isLid = V && H);
                        var G = yield o(
                          "WAWebWamGroupMetricCache",
                        ).getGroupMetrics(r);
                        ((G == null ? void 0 : G.participantCount) != null &&
                          (L.participantCount = G.participantCount),
                          (G == null ? void 0 : G.deviceCount) != null &&
                            (L.deviceCount = G.deviceCount),
                          (G == null ? void 0 : G.deviceSizeBucket) != null &&
                            (L.deviceSizeBucket = G.deviceSizeBucket));
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
          var t = new Map();
          if (
            (e.forEach(function (e) {
              var n = e.from;
              n != null && n.isGroup() && t.set(n.toString(), n);
            }),
            t.size === 0 || !r("gkx")("17426"))
          )
            return null;
          var n = Array.from(t.values()),
            a = yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(n);
          return new Map(
            n.map(function (e, t) {
              return [e.toString(), a[t]];
            }),
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null)
            return o(
              "WAWebWamGroupMetadataMetricUtils",
            ).getGroupTypeFromChatWid(e);
          var n = t.get(e.toString());
          return n != null
            ? o(
                "WAWebWamGroupMetadataMetricUtils",
              ).getGroupTypeFromGroupMetadata(n)
            : null;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null)
            return o("WAWebWamGroupMetadataMetricUtils").isCagFromChatWid(e);
          var n = t.get(e.toString());
          return n != null
            ? o("WAWebWamGroupMetadataMetricUtils").isCagFromGroupMetadata(n)
            : null;
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
          var t = yield (p || (p = n("Promise"))).all([
              k(e),
              L(e),
              x(e),
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = t[4];
          return {
            chatData: r,
            contactData: a,
            groupMetadataById: i,
            meHasUsername: l,
            meHasUsernamePin: s,
          };
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
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
    function B(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : t.toString();
          if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r = B(e);
          if (r !== "missing-stanza-id") {
            var a = yield o("WAWebDBMsgUtils").getMsgByMsgKey(r);
            if (
              (o("WAWebMsgGetters").getIsReply(e) &&
                a == null &&
                (a = yield W(r)),
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
          var u = H(e);
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
        V.apply(this, arguments)
      );
    }
    function H(e) {
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
    function G(t) {
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
                z(i),
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
                  z(i),
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
              (o("WAWebSignupQPLLogger").confirmationParseFailure(e), z(i));
            }
          }
        },
        a;
      for (var i of t) a = n();
    }
    function z(e) {
      o("WAWebSignupFlowLoggerLazy").logSignupOp({
        operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION
          .SIGNUP_CONFIRMATION_PARSE_FAILURE,
        signupId: "",
        businessWid: e.id.remote,
      });
    }
    function j(e) {
      (p || (p = n("Promise")))
        .all(
          e
            .filter(
              o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
            )
            .map(U),
        )
        .then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function K(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function Q(e) {
      (y.push({
        params: e,
        msgProcessEndTsMillis: o("WATimeUtils").unixTimeMs(),
      }),
        e.offline == null || !r("gkx")("21649") || y.length >= h
          ? C.forceRunNow()
          : C.debounceAndCap(f, g));
    }
    function X() {
      var e = y.splice(0),
        t = e.flatMap(function (e) {
          var t = e.params;
          return t.msgs;
        });
      A(t)
        .then(function (r) {
          return (p || (p = n("Promise"))).all(
            [].concat(Y(e, r), [
              O(t, r.contactData),
              j(t),
              K(t),
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
              G(t),
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
    function Y(e, t) {
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
    function J(e) {
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
    ((l.logReceivedMessagesInWAM = Q),
      (l.logConditionalRevealMessageReceive = J));
  },
  98,
);
