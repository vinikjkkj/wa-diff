__d(
  "WAWebMessageSendReporter",
  [
    "MetaConfig",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCoreActionsODS",
    "WAWebEditMessageSendWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebFrontendContactGetters",
    "WAWebMessageSendWamEvent",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebRevokeMessageSendWamEvent",
    "WAWebStickerPremiumStatus",
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
    "cr:17143",
    "cr:17144",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (e = n("cr:17143")) != null ? e : {},
      g = f.ContactCollection,
      h = (s = n("cr:17144")) != null ? s : {},
      y = h.ChatCollection,
      C = (function () {
        function e(e, t) {
          var n;
          ((this.$3 = !1),
            (this.$4 = o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE),
            (this.$1 = e.to));
          var a = !!e.caption;
          (e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            (a = o("WAWebMsgGetters").getIsCaptionByUser(e)),
            (this.$5 = o("WAWebCoreActionsODS").createPostODSCountersFn(e)),
            (this.$6 = o("WAWebCoreActionsODS").createPostODSErrorCountersFn(
              e,
            )));
          var i = r("MetaConfig")._("434"),
            l = 0;
          (i === 2
            ? (o("WAWebCoreActionsODS").logMCMigrationTest(), (l = 75e-7))
            : i === 1 &&
              (o("WAWebCoreActionsODS").logMCMigrationControl(), (l = 15e-7)),
            o("WAWebCoreActionsODS").logMCMigrationRegression(i, l));
          var s = this.$1;
          this.$2 = new (o("WAWebMessageSendWamEvent").MessageSendWamEvent)({
            messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
            messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            mediaCaptionPresent: a,
            fastForwardEnabled: !0,
            messageIsFanout: !0,
            messageIsForward: !!e.isForwarded,
            messageIsRevoke: !!o("WAWebMsgGetters").getIsRevoke(e),
            isViewOnce: !!e.isViewOnce,
            isAReply: o("WAWebMsgGetters").getIsReply(e),
            e2eBackfill: !!(t != null && t.isResend),
            messageDistributionType: o(
              "WAWebWamEnumMessageDistributionEnumType",
            ).MESSAGE_DISTRIBUTION_ENUM_TYPE.REGULAR_MESSAGE,
            editType: o("WAWebMsgGetters").getWamEditType(e),
            botType: o("WAWebWamMsgUtils").getWamBotType(s, e.bizBotType),
            isAComment:
              o("WAWebMsgGetters").getType(e) ===
              o("WAWebMsgType").MSG_TYPE.COMMENT,
          });
          var _ = o("WAWebMsgGetters").getIsGroupMsg(e),
            f = o("WAWebMsgGetters").getIsNewsletterMsg(e),
            h = e.to.isStatus(),
            C = g == null ? void 0 : g.getMeContact(),
            b = s.isRegularUser() ? (g == null ? void 0 : g.get(s)) : null;
          if (
            ((this.$2.hasUsername = !r("isStringNullOrEmpty")(
              C == null ? void 0 : C.username,
            )),
            (this.$2.hasUsernamePin =
              (C == null ? void 0 : C.usernameKey) != null),
            b)
          ) {
            var v = o("WAWebFrontendContactGetters").getFormattedUserAndType(
              b,
            ).type;
            (v && (this.$2.oppositeVisibleIdentification = v),
              b.isHosted === !0 &&
                (this.$2.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
          }
          var S = o("WAWebWamMessageUtils").getVcardMsgWamData(e, "send");
          if (S) {
            var R = S.lidOnlyVcardCount,
              L = S.pnAndLidVcardCount,
              E = S.pnOnlyVcardCount;
            ((this.$2.sharedPhoneNumberContactSize = E),
              (this.$2.sharedUsernameContactSize = R),
              (this.$2.sharedPhoneNumberWithUsernameContactSize = L));
          }
          var k,
            I =
              (n = y == null ? void 0 : y.get(s)) != null
                ? n
                : {
                    lidOriginType:
                      o("WAWebUsernameTypes").LidOriginType.GENERAL,
                  };
          if (I != null && I.lidOriginType)
            switch (I == null ? void 0 : I.lidOriginType) {
              case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                k = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                break;
              case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                k = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                break;
            }
          else
            this.$1.isLid()
              ? (k = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                  .LID_CTWA)
              : (k = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS);
          if (
            (k && (this.$2.chatOrigins = k),
            e.ephemeralDuration != null &&
              (this.$2.ephemeralityDuration = e.ephemeralDuration),
            e.afterReadDuration != null &&
              ((this.$2.isAfterRead = e.afterReadDuration > 0),
              (this.$2.afterReadDuration = e.afterReadDuration)),
            !_ ||
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              ))
          ) {
            var T = o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
            T != null && (this.$2.ephemeralityTriggerAction = T);
            var D = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(e);
            D != null && (this.$2.ephemeralityInitiator = D);
          }
          if (!_ && !f && !h) {
            ((this.$2.isLid = s.isLid()),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for me",
                  ])),
              ));
            var x = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              g == null ? void 0 : g.getMeContact(),
            );
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for me",
                ])),
            ),
              x != null && (this.$2.senderDefaultDisappearingDuration = x),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for wid",
                  ])),
              ));
            var $ = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              g == null ? void 0 : g.get(s),
            );
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for wid",
                ])),
            ),
              $ != null && (this.$2.receiverDefaultDisappearingDuration = $));
          }
          if (o("WAWebMsgGetters").getIsRevoke(e)) {
            this.$2.revokeType =
              e.subtype === "admin_revoke"
                ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
            var P = o("WAWebMsgGetters").getRevokeDuration(e);
            P != null && (this.$2.revokeDuration = P);
          }
          if (o("WAWebMsgGetters").getIsEditProtocolMsg(e)) {
            var N = r("WANullthrows")(
              t == null ? void 0 : t.originalMessage,
              "edit protocol msg must have an original msg",
            );
            ((this.$2.editDuration =
              o("WAWebMsgGetters").getT(e) - o("WAWebMsgGetters").getT(N)),
              (this.$4 = o("WAWebWamMsgUtils").getWamMediaType(N)));
          }
          var M = o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
          M != null && (this.$2.disappearingChatInitiator = M);
          var w = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
          if ((w != null && (this.$2.agentEngagementType = w), _)) {
            var A;
            ((this.$2.isLid = !!(
              !(t == null || (A = t.groupData) == null) && A.isLidAddressingMode
            )),
              (t == null ? void 0 : t.groupData) != null &&
                this.setGroupData(t.groupData));
          }
          (h && (this.$2.isLid = !0),
            f &&
              o("WAWebNewsletterGatingUtils").isWamoSubLoggingEnabled() &&
              (this.$2.isPremium = !!e.isWamoSub),
            o("WAWebMsgGetters").getType(e) ===
              o("WAWebMsgType").MSG_TYPE.STICKER &&
              (this.$2.stickerIsPremium =
                e.stickerPremiumStatus ===
                o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor done",
                ])),
            ));
        }
        var t = e.prototype;
        return (
          (t.setDeviceCount = function (t) {
            ((this.$2.deviceCount = o("WAWebWamGroupMetricUtils").capCount(t)),
              (this.$2.deviceSizeBucket = r("WAWebWamNumberToSizeBucket")(t)));
          }),
          (t.setGroupData = function (t) {
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
          (t.setMessageDistributionType = function (t) {
            this.$2.messageDistributionType = t;
          }),
          (t.setMessageIsFirstUserMessage = function (t) {
            this.$2.messageIsFirstUserMessage = t;
          }),
          (t.postSuccess = function () {
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
              (this.$2.messageSendResult = o(
                "WAWebWamEnumMessageSendResultType",
              ).MESSAGE_SEND_RESULT_TYPE.OK),
              (this.$2.messageSendResultIsTerminal = !1),
              this.$7(),
              this.$5());
          }),
          (t.postFailure = function (t) {
            var e = t.isTerminal,
              n = t.result;
            (o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
              (this.$2.messageSendResult = n),
              (this.$2.messageSendResultIsTerminal = e),
              (this.$2.weight = 0),
              this.$7(),
              this.$6(n, e));
          }),
          (t.$8 = function () {
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
          (t.$9 = function () {
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
          (t.$7 = function () {
            if (this.$3) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                this.$8(),
              this.$2.editType !==
                o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED && this.$9());
          }),
          e
        );
      })();
    function b(e) {
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
    ((l.MessageSendReporter = C), (l.createMessageSendMetricReporter = b));
  },
  98,
);
