__d(
  "WAWebMessageSendReporter",
  [
    "MetaConfig",
    "WALogger",
    "WANullthrows",
    "WAStartSendToSentQplFlow",
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebCoreActionsODSMsgGetters",
    "WAWebCoreActionsODSSyncd",
    "WAWebEditMessageSendWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebMessageSendWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebRevokeMessageSendWamEvent",
    "WAWebSessionScopeWamUtils",
    "WAWebStickerPremiumStatus",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumRevokeType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamMessageUtils",
    "WAWebWamMsgUtils",
    "WAWebWamNumberToSizeBucket",
    "WAWebWid",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = {
        createPostODSCountersFn: o("WAWebCoreActionsODSMsgGetters")
          .createPostODSCountersFn,
        createPostODSErrorCountersFn: o("WAWebCoreActionsODSMsgGetters")
          .createPostODSErrorCountersFn,
        logMCMigrationControl: o("WAWebCoreActionsODS").logMCMigrationControl,
        logMCMigrationTest: o("WAWebCoreActionsODS").logMCMigrationTest,
        logMCMigrationRegression: o("WAWebCoreActionsODSSyncd")
          .logMCMigrationRegression,
      },
      _ = (function () {
        function t(t, n) {
          var a, i;
          ((this.$3 = !1),
            (this.$4 = o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE),
            (this.$8 = !1),
            (this.$1 = t.to),
            y(t.type) &&
              (n == null ? void 0 : n.isResend) !== !0 &&
              (this.$7 = o("WAStartSendToSentQplFlow").startSendToSentQplFlow({
                chatType: g(t.to),
                event: r("qpl")._(891433801, "3599"),
                messageType: h(t.type, t.isGif),
              })));
          var l = !!t.caption;
          t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            (l = o("WAWebMsgGetters").getIsCaptionByUser(t));
          var m = (a = n == null ? void 0 : n.odsDeps) != null ? a : p,
            _ = n == null ? void 0 : n.frontendDeps;
          ((this.$5 = m.createPostODSCountersFn(t)),
            (this.$6 = m.createPostODSErrorCountersFn(t)));
          var f = r("MetaConfig")._("434"),
            C = 0;
          (f === 2
            ? (m.logMCMigrationTest(), (C = 75e-7))
            : f === 1 && (m.logMCMigrationControl(), (C = 15e-7)),
            m.logMCMigrationRegression(f, C));
          var b = this.$1;
          this.$2 = new (o("WAWebMessageSendWamEvent").MessageSendWamEvent)({
            messageType: o("WAWebWamMsgUtils").getWamMessageType(t),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(t),
            mediaCaptionPresent: l,
            fastForwardEnabled: !0,
            messageIsFanout: !0,
            messageIsForward: !!t.isForwarded,
            messageIsRevoke: !!o("WAWebMsgGetters").getIsRevoke(t),
            isViewOnce: !!t.isViewOnce,
            isAReply: o("WAWebMsgGetters").getIsReply(t),
            e2eBackfill: !!(n != null && n.isResend),
            messageDistributionType: o(
              "WAWebWamEnumMessageDistributionEnumType",
            ).MESSAGE_DISTRIBUTION_ENUM_TYPE.REGULAR_MESSAGE,
            editType: o("WAWebMsgGetters").getWamEditType(t),
            botType: o("WAWebWamMsgUtils").getWamBotType({
              chatId: b,
              bizBotType: t.bizBotType,
            }),
            isAComment:
              o("WAWebMsgGetters").getType(t) ===
              o("WAWebMsgType").MSG_TYPE.COMMENT,
          });
          var v = o("WAWebMsgGetters").getIsGroupMsg(t),
            S = o("WAWebMsgGetters").getIsNewsletterMsg(t),
            R = t.to.isStatus(),
            L = _ != null ? _ : {},
            E = L.ChatCollection,
            k = L.ContactCollection,
            I = k == null ? void 0 : k.getMeContact(),
            T = b.isRegularUser() ? (k == null ? void 0 : k.get(b)) : null;
          if (
            ((this.$2.hasUsername = o("WAWebUsernameTypes").isPresentUsername(
              I == null ? void 0 : I.username,
            )),
            (this.$2.hasUsernamePin =
              (I == null ? void 0 : I.usernameKey) != null),
            T)
          ) {
            var D = _ == null ? void 0 : _.getFormattedUserAndType(T).type;
            (D && (this.$2.oppositeVisibleIdentification = D),
              T.isHosted === !0 &&
                (this.$2.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
          }
          var x = o("WAWebWamMessageUtils").getVcardMsgWamData(t, "send");
          if (x) {
            var $ = x.lidOnlyVcardCount,
              P = x.pnAndLidVcardCount,
              N = x.pnOnlyVcardCount;
            ((this.$2.sharedPhoneNumberContactSize = N),
              (this.$2.sharedUsernameContactSize = $),
              (this.$2.sharedPhoneNumberWithUsernameContactSize = P));
          }
          var M,
            w =
              (i = E == null ? void 0 : E.get(b)) != null
                ? i
                : {
                    lidOriginType:
                      o("WAWebUsernameTypes").LidOriginType.GENERAL,
                  };
          if (w != null && w.lidOriginType)
            switch (w == null ? void 0 : w.lidOriginType) {
              case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                break;
              case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                break;
            }
          else
            this.$1.isLid()
              ? (M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                  .LID_CTWA)
              : (M = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS);
          (M && (this.$2.chatOrigins = M),
            t.ephemeralDuration != null &&
              (this.$2.ephemeralityDuration = t.ephemeralDuration));
          var A = t.afterReadDuration;
          if (
            (A != null &&
              o("WAWebAfterReadUtils").isAfterReadEnabled() &&
              ((this.$2.isAfterRead = A > 0), (this.$2.afterReadDuration = A)),
            !v ||
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              ))
          ) {
            var F = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
            F != null && (this.$2.ephemeralityTriggerAction = F);
            var O = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
            O != null && (this.$2.ephemeralityInitiator = O);
          }
          if (!v && !S && !R) {
            ((this.$2.isLid = b.isLid()),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for me",
                  ])),
              ));
            var B = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              k == null ? void 0 : k.getMeContact(),
            );
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for me",
                ])),
            ),
              B != null && (this.$2.senderDefaultDisappearingDuration = B),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for wid",
                  ])),
              ));
            var W = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              k == null ? void 0 : k.get(b),
            );
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for wid",
                ])),
            ),
              W != null && (this.$2.receiverDefaultDisappearingDuration = W));
          }
          if (o("WAWebMsgGetters").getIsRevoke(t)) {
            this.$2.revokeType =
              t.subtype === "admin_revoke" || t.subtype === "admin"
                ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
            var q = o("WAWebMsgGetters").getRevokeDuration(t);
            q != null && (this.$2.revokeDuration = q);
          }
          if (o("WAWebMsgGetters").getIsEditProtocolMsg(t)) {
            var U = r("WANullthrows")(
              n == null ? void 0 : n.originalMessage,
              "edit protocol msg must have an original msg",
            );
            ((this.$2.editDuration =
              o("WAWebMsgGetters").getT(t) - o("WAWebMsgGetters").getT(U)),
              (this.$4 = o("WAWebWamMsgUtils").getWamMediaType(U)));
          }
          var V = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
          V != null && (this.$2.disappearingChatInitiator = V);
          var H = o("WAWebWamMsgUtils").getWamAgentEngagementType(t);
          if ((H != null && (this.$2.agentEngagementType = H), v)) {
            var G;
            ((this.$2.isLid = !!(
              !(n == null || (G = n.groupData) == null) && G.isLidAddressingMode
            )),
              (n == null ? void 0 : n.groupData) != null &&
                this.setGroupData(n.groupData));
          }
          (R && (this.$2.isLid = !0),
            S &&
              o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled() &&
              (this.$2.isPremium = !!t.isWamoSub),
            o("WAWebMsgGetters").getType(t) ===
              o("WAWebMsgType").MSG_TYPE.STICKER &&
              (this.$2.stickerIsPremium =
                t.stickerPremiumStatus ===
                o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor done",
                ])),
            ));
        }
        var n = t.prototype;
        return (
          (n.setDeviceCount = function (t) {
            ((this.$2.deviceCount = o("WAWebWamGroupMetricUtils").capCount(t)),
              (this.$2.deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(t)));
          }),
          (n.setParticipantCount = function (t) {
            this.$2.participantCount = t;
          }),
          (n.setGroupData = function (t) {
            var e = o(
              "WAWebWamAddressingModeUtils",
            ).getAddressingModeMetricsFromGroupMetadata(t);
            (e != null && (this.$2.localAddressingMode = e),
              t.wamTypeOfGroup != null &&
                (this.$2.typeOfGroup = t.wamTypeOfGroup),
              t.participantCount != null &&
                (this.$2.participantCount = t.participantCount),
              t.deviceCount != null && (this.$2.deviceCount = t.deviceCount),
              t.deviceSizeBucket != null &&
                (this.$2.deviceSizeBucket = t.deviceSizeBucket));
          }),
          (n.setMessageDistributionType = function (t) {
            this.$2.messageDistributionType = t;
          }),
          (n.setMessageIsFirstUserMessage = function (t) {
            this.$2.messageIsFirstUserMessage = t;
          }),
          (n.setSessionScope = function (t) {
            var e = o("WAWebSessionScopeWamUtils").sessionScopeToWamType(t);
            e != null && (this.$2.sessionScope = e);
          }),
          (n.setOppositeHasUsername = function (t) {
            o(
              "WAWebUsernameGatingUtils",
            ).usernameAdoptionAndEngagementMonitoringEnabled() &&
              (this.$2.oppositeHasUsername = t);
          }),
          (n.postSuccess = function () {
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
              (this.$2.messageSendResult = o(
                "WAWebWamEnumMessageSendResultType",
              ).MESSAGE_SEND_RESULT_TYPE.OK),
              (this.$2.messageSendResultIsTerminal = !1),
              this.$9(),
              this.$5(),
              this.$10());
          }),
          (n.postFailure = function (t) {
            var e = t.isTerminal,
              n = t.qplFailReason,
              r = t.result;
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
              (this.$2.messageSendResult = r),
              (this.$2.messageSendResultIsTerminal = e),
              (this.$2.weight = 0),
              this.$9(),
              this.$6(r, e),
              this.$11(r, n));
          }),
          (n.$10 = function () {
            var e = this.$7;
            e == null ||
              this.$8 ||
              ((this.$8 = !0),
              e.addPoint(
                o(
                  "WAStartSendToSentQplFlow",
                ).SendToSentPoint.ServerAckSent.valueOf(),
              ),
              e.endSuccess());
          }),
          (n.$11 = function (t, n) {
            var e = this.$7;
            e == null ||
              this.$8 ||
              ((this.$8 = !0),
              e.endFail(n != null ? n : "", {
                string: { messageSendResult: String(t) },
              }));
          }),
          (n.$12 = function () {
            new (o("WAWebRevokeMessageSendWamEvent").RevokeMessageSendWamEvent)(
              {
                messageSendResultIsTerminal:
                  this.$2.messageSendResultIsTerminal,
                messageType: this.$2.messageType,
                resendCount: this.$2.resendCount,
                retryCount: this.$2.retryCount,
                revokeDuration: this.$2.revokeDuration,
                revokeType: this.$2.revokeType,
              },
            ).commit();
          }),
          (n.$13 = function () {
            new (o("WAWebEditMessageSendWamEvent").EditMessageSendWamEvent)({
              messageSendResultIsTerminal: this.$2.messageSendResultIsTerminal,
              messageType: this.$2.messageType,
              resendCount: this.$2.resendCount,
              retryCount: this.$2.retryCount,
              editType: this.$2.editType,
              editDuration: this.$2.editDuration,
              typeOfGroup: this.$2.typeOfGroup,
              mediaType: this.$4,
            }).commit();
          }),
          (n.$9 = function () {
            if (this.$3) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[MessageSendReporter] skip post, already posted",
                  ])),
              );
              return;
            }
            ((this.$3 = !0),
              this.$2.markMessageSendT(),
              this.$2.messageSendT != null &&
                o("WAWebAppTracker").attachWAMAppContext(
                  this.$2,
                  this.$2.messageSendT,
                ),
              this.$2.commit(),
              this.$2.messageIsRevoke &&
                this.$2.messageType !==
                  o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS &&
                this.$12(),
              this.$2.editType !==
                o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED && this.$13());
          }),
          t
        );
      })();
    function f(e) {
      var t = e.messageIsInvisible,
        n = new (o("WAWebMessageSendWamEvent").MessageSendWamEvent)({
          messageIsInvisible: t,
        });
      return {
        setGroupData: function (t) {
          (t.wamTypeOfGroup != null && (n.typeOfGroup = t.wamTypeOfGroup),
            t.participantCount != null &&
              (n.participantCount = t.participantCount),
            t.deviceCount != null && (n.deviceCount = t.deviceCount),
            t.deviceSizeBucket != null &&
              (n.deviceSizeBucket = t.deviceSizeBucket));
        },
        post: function () {
          (n.markMessageSendT(), n.commit());
        },
      };
    }
    function g(e) {
      return r("WAWebWid").isStatus(e)
        ? o("WAStartSendToSentQplFlow").SendToSentChatType.Status
        : r("WAWebWid").isNewsletter(e)
          ? o("WAStartSendToSentQplFlow").SendToSentChatType.Channel
          : r("WAWebWid").isGroup(e)
            ? o("WAStartSendToSentQplFlow").SendToSentChatType.Group
            : r("WAWebWid").isBroadcast(e)
              ? o("WAStartSendToSentQplFlow").SendToSentChatType.Broadcast
              : o("WAStartSendToSentQplFlow").SendToSentChatType.Individual;
    }
    function h(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.IMAGE
        ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Image
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? t === !0
            ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Gif
            : o("WAStartSendToSentQplFlow").SendToSentMessageType.Video
          : e === o("WAWebMsgType").MSG_TYPE.AUDIO
            ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Audio
            : e === o("WAWebMsgType").MSG_TYPE.PTT
              ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Ptt
              : e === o("WAWebMsgType").MSG_TYPE.DOCUMENT
                ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Document
                : e === o("WAWebMsgType").MSG_TYPE.STICKER
                  ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Sticker
                  : e === o("WAWebMsgType").MSG_TYPE.CHAT
                    ? o("WAStartSendToSentQplFlow").SendToSentMessageType.Text
                    : o("WAStartSendToSentQplFlow").SendToSentMessageType
                        .Unknown;
    }
    function y(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e === o("WAWebMsgType").MSG_TYPE.AUDIO ||
        e === o("WAWebMsgType").MSG_TYPE.PTT ||
        e === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
        e === o("WAWebMsgType").MSG_TYPE.STICKER
      );
    }
    ((l.MessageSendReporter = _), (l.createMessageSendMetricReporter = f));
  },
  98,
);
