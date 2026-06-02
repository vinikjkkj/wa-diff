__d(
  "WAWebLogReceivedMessages",
  [
    "PaymentLinkWamLogger",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "\u{1F49A}";
    async function d(t) {
      await Promise.all(
        t.map(async function (t) {
          o("PaymentLinkWamLogger").shouldLogReceiverEvent(t) &&
            (await o("PaymentLinkWamLogger")
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
    async function m(e, t, n) {
      var r,
        a = e.clientReceivedTsMillis,
        i = e.localAddressingMode,
        l = e.msgProcessStartTsMillis,
        s = e.msgs,
        u = e.offline,
        c = e.serverAddressingMode,
        d = e.tsMillis,
        m = o("WATimeUtils").unixTimeMs(),
        p = await Promise.all([
          o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
          o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
        ]),
        _ = p[0],
        f = p[1],
        g =
          (r = n.get(o("WAWebUserPrefsMeUser").getMeUser().toJid())) == null
            ? void 0
            : r.ephemeralDuration;
      await Promise.all(
        s.map(async function (e, r) {
          var s = e.from;
          if (s != null) {
            var p = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
            s.isLid() &&
              (p = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA);
            var h = t[r];
            h != null &&
              h.lidOriginType &&
              (p =
                h.lidOriginType ===
                o("WAWebUsernameTypes").LidOriginType.PNH_CTWA
                  ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA
                  : h.lidOriginType ===
                      o("WAWebUsernameTypes").LidOriginType.GENERAL
                    ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            h.lidOriginType,
                        );
                      })());
            var y = await o(
                "WAWebChatThreadLoggingUtils",
              ).getOppositeVisibleIdentification(s),
              C = s.isGroup()
                ? e.from.isLid()
                : o("WAWebWamMsgUtils").msgIsLid(e, s),
              b = new (o("WAWebMessageReceiveWamEvent").MessageReceiveWamEvent)(
                {
                  messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
                  messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                  messageIsInternational:
                    o("WAWebMsgGetters").getIsInternational(e),
                  messageIsOffline: u != null,
                  isViewOnce: !!e.isViewOnce,
                  isForwardedForward:
                    o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
                  isAReply: o("WAWebMsgGetters").getIsReply(e),
                  editType: o("WAWebMsgGetters").getWamEditType(e),
                  botType: o("WAWebWamMsgUtils").getWamBotType(s, e.bizBotType),
                  isAComment:
                    o("WAWebMsgGetters").getType(e) ===
                    o("WAWebMsgType").MSG_TYPE.COMMENT,
                  hasUsername: _,
                  hasUsernamePin: f,
                  chatOrigins: p,
                  oppositeVisibleIdentification: y != null ? y : void 0,
                  isLid: C,
                  messageReceiveT0: 0,
                  messageReceiveT1: 0,
                  messageReceiveT2: 0,
                },
              ),
              v = o("WAWebWamMessageUtils").getVcardMsgWamData(e, "receive");
            if (v) {
              var S = v.lidOnlyVcardCount,
                R = v.pnAndLidVcardCount,
                L = v.pnOnlyVcardCount;
              ((b.receivedPhoneNumberContactSize = L),
                (b.receivedUsernameContactSize = S),
                (b.receivedPhoneNumberWithUsernameContactSize = R));
            }
            if (
              (u != null && (b.offlineCount = u), !s.isGroup() && !s.isStatus())
            ) {
              var E,
                k =
                  (E = n.get(s.toJid())) == null ? void 0 : E.ephemeralDuration;
              (k != null && (b.senderDefaultDisappearingDuration = k),
                g != null && (b.receiverDefaultDisappearingDuration = g),
                (b.isLid = s.isLid()));
            }
            (o("WAWebMsgGetters").getIsRevoke(e) &&
              (b.revokeType =
                e.subtype === "admin_revoke" || e.subtype === "admin"
                  ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                  : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER),
              a != null &&
                ((b.messageReceiveT0 = a - d),
                (b.messageReceiveT1 = m - a),
                l != null && (b.messageQueueTime = l - a)),
              e.ephemeralDuration != null &&
                e.ephemeralDuration > 0 &&
                (b.ephemeralityDuration = e.ephemeralDuration),
              e.afterReadDuration != null &&
                ((b.isAfterRead = e.afterReadDuration > 0),
                (b.afterReadDuration = e.afterReadDuration)));
            var I = o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
            I != null && (b.disappearingChatInitiator = I);
            var T = o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
            T != null && (b.ephemeralityTriggerAction = T);
            var D = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(e);
            D != null && (b.ephemeralityInitiator = D);
            var x = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
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
            var N = await o(
              "WAWebWamGroupMetadataMetricUtils",
            ).getGroupTypeFromChatWid(s);
            if (
              (N != null && (b.typeOfGroup = N),
              c != null &&
                (b.serverAddressingMode = o(
                  "WAWebWamAddressingModeUtils",
                ).getWamAddressingModeFromString(c)),
              i != null &&
                (b.localAddressingMode = o(
                  "WAWebWamAddressingModeUtils",
                ).getWamAddressingModeFromString(i)),
              o("WAWebMsgGetters").getType(e) ===
                o("WAWebMsgType").MSG_TYPE.STICKER &&
                (b.stickerIsPremium =
                  e.stickerPremiumStatus ===
                  o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM),
              s != null && s.isGroup())
            ) {
              var M = await o(
                  "WAWebWamGroupMetadataMetricUtils",
                ).isCagFromChatWid(s),
                w = o("WAWebMsgGetters").getIsReaction(e);
              M != null && w != null && (b.isLid = M && w);
              var A = await o("WAWebWamGroupMetricCache").getGroupMetrics(s);
              ((A == null ? void 0 : A.participantCount) != null &&
                (b.participantCount = A.participantCount),
                (A == null ? void 0 : A.deviceCount) != null &&
                  (b.deviceCount = A.deviceCount),
                (A == null ? void 0 : A.deviceSizeBucket) != null &&
                  (b.deviceSizeBucket = A.deviceSizeBucket));
            }
            b.commit();
          }
        }),
      );
    }
    async function p(e) {
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
      t.add(o("WAWebUserPrefsMeUser").getMeUser().toJid());
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
    async function _(e) {
      return o("WAWebApiBulkGetChats").bulkGetChats(
        e.map(function (e) {
          return e.from;
        }),
      );
    }
    async function f(e) {
      var t = await Promise.all([_(e), p(e)]),
        n = t[0],
        r = t[1];
      return { chatData: n, contactData: r };
    }
    function g(e, t) {
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
    function h(e) {
      return o("WAWebMsgGetters").getIsReaction(e)
        ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e)
        : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
    }
    async function y(e) {
      var t,
        n =
          (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
            ? void 0
            : t.toString();
      if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
    }
    async function C(e) {
      if (
        o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT
      ) {
        var t;
        return {
          activityType: "commentsReceived",
          ts: (t = e.t) != null ? t : o("WATimeUtils").unixTimeMs(),
          chatId: e.id.remote,
        };
      }
      if (
        o("WAWebABProps").getABPropConfigValue("group_status_receiver_enabled")
      ) {
        var n = h(e);
        if (n !== "missing-stanza-id") {
          var r = await o("WAWebDBMsgUtils").getMsgByMsgKey(n);
          if (
            (o("WAWebMsgGetters").getIsReply(e) &&
              r == null &&
              (r = await y(n)),
            r != null && o("WAWebMsgGetters").getIsGroupStatus(r))
          ) {
            var a = o("WAWebMsgGetters").getIsReply(e),
              i = o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === c;
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
        isCommerceMessage: o("WAWebChatThreadLoggingUtils").isCommerceMessage(
          e,
        ),
        isReply: o("WAWebMsgGetters").getIsReply(e),
        isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
        isBot:
          o("WAWebMsgGetters").getIsBotQuery(e) ||
          o("WAWebMsgGetters").getIsMetaBotResponse(e),
        isEventCreation: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
        isEventResponse: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
      };
    }
    function b(e) {
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
    function v(e) {
      Promise.all(
        e
          .filter(
            o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive,
          )
          .map(C),
      ).then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
    }
    function S(e) {
      e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(
        function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "logOTPMessageReceivedActions",
            { msgData: e },
          );
        },
      );
    }
    function R(e) {
      var t = e.msgs;
      f(t)
        .then(function (n) {
          return Promise.all([
            m(e, n.chatData, n.contactData),
            g(t, n.contactData),
            v(t),
            S(t),
            d(t),
            o(
              "WAWebGalaxyFlowWamLoggerUtils",
            ).logStructuredMessageReceivedWAMEvent(t),
            o(
              "WAWebOrderDetailsReceivedWamLogger",
            ).logOrderDetailsReceivedWAMEvent(t),
            o(
              "WAWebPaymentInfoReceivedWamLogger",
            ).logPaymentInfoReceivedWAMEvent(t),
            o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(
              t,
            ),
            o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(
              t,
              n.chatData,
            ),
            b(t),
            o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t),
          ]);
        })
        .catch(function (e) {
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "error logging received messages: ",
                "",
              ])),
            String(e),
          );
        });
    }
    l.logReceivedMessagesInWAM = R;
  },
  98,
);
