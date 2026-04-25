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
      _ = {
        createPostODSCountersFn: (p = o("WAWebCoreActionsODS"))
          .createPostODSCountersFn,
        createPostODSErrorCountersFn: p.createPostODSErrorCountersFn,
        logMCMigrationControl: p.logMCMigrationControl,
        logMCMigrationTest: p.logMCMigrationTest,
        logMCMigrationRegression: p.logMCMigrationRegression,
      },
      f = (function () {
        function t(t, n) {
          var a, i;
          ((this.$3 = !1),
            (this.$4 = o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE),
            (this.$1 = t.to));
          var l = !!t.caption;
          t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            (l = o("WAWebMsgGetters").getIsCaptionByUser(t));
          var m = (a = n == null ? void 0 : n.odsDeps) != null ? a : _,
            p = n == null ? void 0 : n.frontendDeps;
          ((this.$5 = m.createPostODSCountersFn(t)),
            (this.$6 = m.createPostODSErrorCountersFn(t)));
          var f = r("MetaConfig")._("434"),
            g = 0;
          (f === 2
            ? (m.logMCMigrationTest(), (g = 75e-7))
            : f === 1 && (m.logMCMigrationControl(), (g = 15e-7)),
            m.logMCMigrationRegression(f, g));
          var h = this.$1;
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
            botType: o("WAWebWamMsgUtils").getWamBotType(h, t.bizBotType),
            isAComment:
              o("WAWebMsgGetters").getType(t) ===
              o("WAWebMsgType").MSG_TYPE.COMMENT,
          });
          var y = o("WAWebMsgGetters").getIsGroupMsg(t),
            C = o("WAWebMsgGetters").getIsNewsletterMsg(t),
            b = t.to.isStatus(),
            v = p != null ? p : {},
            S = v.ChatCollection,
            R = v.ContactCollection,
            L = R == null ? void 0 : R.getMeContact(),
            E = h.isRegularUser() ? (R == null ? void 0 : R.get(h)) : null;
          if (
            ((this.$2.hasUsername = !r("isStringNullOrEmpty")(
              L == null ? void 0 : L.username,
            )),
            (this.$2.hasUsernamePin =
              (L == null ? void 0 : L.usernameKey) != null),
            E)
          ) {
            var k = p == null ? void 0 : p.getFormattedUserAndType(E).type;
            (k && (this.$2.oppositeVisibleIdentification = k),
              E.isHosted === !0 &&
                (this.$2.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX));
          }
          var I = o("WAWebWamMessageUtils").getVcardMsgWamData(t, "send");
          if (I) {
            var T = I.lidOnlyVcardCount,
              D = I.pnAndLidVcardCount,
              x = I.pnOnlyVcardCount;
            ((this.$2.sharedPhoneNumberContactSize = x),
              (this.$2.sharedUsernameContactSize = T),
              (this.$2.sharedPhoneNumberWithUsernameContactSize = D));
          }
          var $,
            P =
              (i = S == null ? void 0 : S.get(h)) != null
                ? i
                : {
                    lidOriginType:
                      o("WAWebUsernameTypes").LidOriginType.GENERAL,
                  };
          if (P != null && P.lidOriginType)
            switch (P == null ? void 0 : P.lidOriginType) {
              case o("WAWebUsernameTypes").LidOriginType.PNH_CTWA:
                $ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA;
                break;
              case o("WAWebUsernameTypes").LidOriginType.GENERAL:
                $ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
                break;
            }
          else
            this.$1.isLid()
              ? ($ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE
                  .LID_CTWA)
              : ($ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS);
          if (
            ($ && (this.$2.chatOrigins = $),
            t.ephemeralDuration != null &&
              (this.$2.ephemeralityDuration = t.ephemeralDuration),
            t.afterReadDuration != null &&
              ((this.$2.isAfterRead = t.afterReadDuration > 0),
              (this.$2.afterReadDuration = t.afterReadDuration)),
            !y ||
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              ))
          ) {
            var N = o("WAWebMsgGetters").getWamDisappearingModeTrigger(t);
            N != null && (this.$2.ephemeralityTriggerAction = N);
            var M = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(t);
            M != null && (this.$2.ephemeralityInitiator = M);
          }
          if (!y && !C && !b) {
            ((this.$2.isLid = h.isLid()),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for me",
                  ])),
              ));
            var w = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              R == null ? void 0 : R.getMeContact(),
            );
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for me",
                ])),
            ),
              w != null && (this.$2.senderDefaultDisappearingDuration = w),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageSendReporter constructor before get ephemeral for wid",
                  ])),
              ));
            var A = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
              R == null ? void 0 : R.get(h),
            );
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageSendReporter constructor after get ephemeral for wid",
                ])),
            ),
              A != null && (this.$2.receiverDefaultDisappearingDuration = A));
          }
          if (o("WAWebMsgGetters").getIsRevoke(t)) {
            this.$2.revokeType =
              t.subtype === "admin_revoke"
                ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN
                : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER;
            var F = o("WAWebMsgGetters").getRevokeDuration(t);
            F != null && (this.$2.revokeDuration = F);
          }
          if (o("WAWebMsgGetters").getIsEditProtocolMsg(t)) {
            var O = r("WANullthrows")(
              n == null ? void 0 : n.originalMessage,
              "edit protocol msg must have an original msg",
            );
            ((this.$2.editDuration =
              o("WAWebMsgGetters").getT(t) - o("WAWebMsgGetters").getT(O)),
              (this.$4 = o("WAWebWamMsgUtils").getWamMediaType(O)));
          }
          var B = o("WAWebMsgGetters").getWamDisappearingModeInitiator(t);
          B != null && (this.$2.disappearingChatInitiator = B);
          var W = o("WAWebWamMsgUtils").getWamAgentEngagementType(t);
          if ((W != null && (this.$2.agentEngagementType = W), y)) {
            var q;
            ((this.$2.isLid = !!(
              !(n == null || (q = n.groupData) == null) && q.isLidAddressingMode
            )),
              (n == null ? void 0 : n.groupData) != null &&
                this.setGroupData(n.groupData));
          }
          (b && (this.$2.isLid = !0),
            C &&
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
          (n.postSuccess = function () {
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
          (n.postFailure = function (t) {
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
          (n.$8 = function () {
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
          (n.$9 = function () {
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
          (n.$7 = function () {
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
                this.$8(),
              this.$2.editType !==
                o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED && this.$9());
          }),
          t
        );
      })();
    function g(e) {
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
    ((l.MessageSendReporter = f), (l.createMessageSendMetricReporter = g));
  },
  98,
);
