__d(
  "WAWebTasksDailyStatsTask",
  [
    "CurrentUser",
    "Promise",
    "WALogger",
    "WAStorageEstimator",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsGlobals",
    "WAWebAboutConsumptionDailyWamEvent",
    "WAWebAboutCreationDailyWamEvent",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebApiPrivacyDisallowedList",
    "WAWebApiPrivacyEphemerality",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebChatThreadLoggingUtils",
    "WAWebCommunityHomeActionWamEvent",
    "WAWebCommunityTabActionWamEvent",
    "WAWebContactCollection",
    "WAWebContactManagementGating",
    "WAWebCurrentUser",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebDailyWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebEstimateFtsStorageApi",
    "WAWebGroupABPropsGlobals",
    "WAWebHistorySyncLidChatGating",
    "WAWebInactiveGroupLidMigration",
    "WAWebKeepInChatNotifWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationDailyWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMediaStore",
    "WAWebMuteCollection",
    "WAWebNotificationConstants",
    "WAWebNotificationEngagementWamEvent",
    "WAWebNotificationSettingWamEvent",
    "WAWebPnhDailyWamEvent",
    "WAWebPrivacyHighlightDailyWamEvent",
    "WAWebPttDailyWamEvent",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebScreenLockSettingsDataWamEvent",
    "WAWebSubmitChatLockDailyStats",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebUserPrefsContactManagement",
    "WAWebUserPrefsFavoritesLidMigration",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsNotifications",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUserPrefsScreenLock",
    "WAWebUserPrefsTypes",
    "WAWebUserPrefsUsername",
    "WAWebUsernameTypes",
    "WAWebWaFsSingleEmojiMessageDailyWamEvent",
    "WAWebWamEnumLidMigrationSourceType",
    "WAWebWamEnumNotificationSettingType",
    "WAWebWamEnumNotificationSoundTone",
    "WAWebWamEnumPrivacyHighlightCategoryEnum",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "WAWebWamEnumPrivacySettingsContactsBuckets",
    "WAWebWamEnumPrivacySettingsValueType",
    "WAWebWamEnumTypeOfGroupEnum",
    "WAWebWamEnumUsernameState",
    "WAWebWamPrivateStatsUtils",
    "WAWebWebDynamicSamplingTestEventWithSamplingWamEvent",
    "WAWebWebDynamicSamplingTestEventWithoutSamplingWamEvent",
    "WAWebWebcFtsStorageWamEvent",
    "WAWebWebcStorageStatWamEvent",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "cr:7293",
    "gkx",
    "isStringNullOrEmpty",
    "justknobx",
    "nullthrows",
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
      f,
      g,
      h = (e = n("cr:7293")) != null ? e : {},
      y = h.getNotificationToneGroupSetting,
      C = h.getNotificationToneSetting,
      b = h.getNotificationToneStatusSetting;
    function v(e) {
      if (
        e.goldenBoxContactNarrativeAppearCount > 0 ||
        e.goldenBoxContactDialogAppearCount > 0 ||
        e.goldenBoxContactDialogSelectCount > 0
      ) {
        var t = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT,
          narrativeAppearCount: e.goldenBoxContactNarrativeAppearCount,
          dialogAppearCount: e.goldenBoxContactDialogAppearCount,
          dialogSelectCount: e.goldenBoxContactDialogSelectCount,
        });
        t.commit();
      }
      if (
        e.goldenBoxGroupNarrativeAppearCount > 0 ||
        e.goldenBoxGroupDialogAppearCount > 0 ||
        e.goldenBoxGroupDialogSelectCount > 0
      ) {
        var n = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP,
          narrativeAppearCount: e.goldenBoxGroupNarrativeAppearCount,
          dialogAppearCount: e.goldenBoxGroupDialogAppearCount,
          dialogSelectCount: e.goldenBoxGroupDialogSelectCount,
        });
        n.commit();
      }
      if (
        e.infoScreenGroupNarrativeAppearCount > 0 ||
        e.infoScreenGroupDialogAppearCount > 0 ||
        e.infoScreenGroupDialogSelectCount > 0
      ) {
        var r = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
          narrativeAppearCount: e.infoScreenGroupNarrativeAppearCount,
          dialogAppearCount: e.infoScreenGroupDialogAppearCount,
          dialogSelectCount: e.infoScreenGroupDialogSelectCount,
        });
        r.commit();
      }
      if (
        e.chatsListNarrativeAppearCount > 0 ||
        e.chatsListDialogAppearCount > 0 ||
        e.chatsListDialogSelectCount > 0
      ) {
        var a = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
          narrativeAppearCount: e.chatsListNarrativeAppearCount,
          dialogAppearCount: e.chatsListDialogAppearCount,
          dialogSelectCount: e.chatsListDialogSelectCount,
        });
        a.commit();
      }
      if (
        e.statusListNarrativeAppearCount > 0 ||
        e.statusListDialogAppearCount > 0 ||
        e.statusListDialogSelectCount > 0
      ) {
        var i = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
          narrativeAppearCount: e.statusListNarrativeAppearCount,
          dialogAppearCount: e.statusListDialogAppearCount,
          dialogSelectCount: e.statusListDialogSelectCount,
        });
        i.commit();
      }
      if (
        e.callingScreenAudioNarrativeAppearCount > 0 ||
        e.callingScreenAudioDialogAppearCount > 0 ||
        e.callingScreenAudioDialogSelectCount > 0
      ) {
        var l = new (o(
          "WAWebPrivacyHighlightDailyWamEvent",
        ).PrivacyHighlightDailyWamEvent)({
          privacyHighlightCategory: o(
            "WAWebWamEnumPrivacyHighlightCategoryEnum",
          ).PRIVACY_HIGHLIGHT_CATEGORY_ENUM.E2EE,
          privacyHighlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLING_SCREEN_AUDIO,
          narrativeAppearCount: e.callingScreenAudioNarrativeAppearCount,
          dialogAppearCount: e.callingScreenAudioDialogAppearCount,
          dialogSelectCount: e.callingScreenAudioDialogSelectCount,
        });
        l.commit();
      }
    }
    function S() {
      var e = !o("WAWebMuteCollection").MuteCollection.globalReactionsMute(),
        t = !!o("WAWebUserPrefsNotifications").getIgnoreNondirectGroupMsg(),
        n = o("WAWebABProps").getABPropConfigValue(
          "wa_web_enable_granular_notifications",
        ),
        r = new (o(
          "WAWebNotificationSettingWamEvent",
        ).NotificationSettingWamEvent)();
      if (n) {
        var a = void 0,
          i = void 0,
          l = void 0;
        (C && y && b
          ? ((a = C()), (i = y()), (l = b()))
          : (o("WAWebMuteCollection").MuteCollection.getGlobalSoundsEnabled() &&
              (a = o("WAWebWamEnumNotificationSoundTone")
                .NOTIFICATION_SOUND_TONE.DEFAULT),
            o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupSoundsEnabled() &&
              (i = o("WAWebWamEnumNotificationSoundTone")
                .NOTIFICATION_SOUND_TONE.DEFAULT),
            o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusSoundsEnabled() &&
              (l = o("WAWebWamEnumNotificationSoundTone")
                .NOTIFICATION_SOUND_TONE.DEFAULT)),
          r.set({
            groupReactionNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationReactionsEnabled(),
            groupShowNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalGroupNotificationsEnabled(),
            groupSoundTone: i,
            messageReactionNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationReactionsEnabled(),
            messageShowNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalNotificationsEnabled(),
            messageSoundTone: a,
            statusReactionNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusNotificationReactionsEnabled(),
            statusShowNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalStatusNotificationsEnabled(),
            statusSoundTone: l,
            showPreview: o("WAWebUserPrefsNotifications").getGlobalPreviews(),
            offlineNotification: o(
              "WAWebUserPrefsNotifications",
            ).getGlobalOfflineNotifications(),
          }));
      } else
        r.set({
          groupReactionNotification: t && e,
          groupShowNotification: t,
          groupSoundTone: o("WAWebWamEnumNotificationSoundTone")
            .NOTIFICATION_SOUND_TONE.DEFAULT,
          inAppNotificationSound: o(
            "WAWebUserPrefsNotifications",
          ).getGlobalSounds(),
          messageReactionNotification: e,
          messageShowNotification: o(
            "WAWebUserPrefsNotifications",
          ).getGlobalNotifications(),
          messageSoundTone: o("WAWebWamEnumNotificationSoundTone")
            .NOTIFICATION_SOUND_TONE.DEFAULT,
          showPreview: o("WAWebUserPrefsNotifications").getGlobalPreviews(),
          offlineNotification: o(
            "WAWebUserPrefsNotifications",
          ).getGlobalOfflineNotifications(),
        });
      r.commit();
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o(
            "WAWebABPropsGlobals",
          ).logClientExposurePulseEventFromDailyStatsTask(),
            o(
              "WAWebGroupABPropsGlobals",
            ).logGroupExposurePulseEventFromDailyStatsTask());
          var e = yield (g || (g = n("Promise"))).all([
              E(),
              D(),
              M(),
              A(),
              O(),
              H(),
              U(),
            ]),
            t = e[0],
            a = e[1],
            i = e[2],
            l = e[3],
            s = e[4],
            u = e[5],
            c = e[6],
            d = F(),
            m = babelHelpers.extends({}, t, a, i, d, s, u, c, {
              isCanonicalEntPresent: r("CurrentUser").isLoggedIn(),
            }),
            p = new (o("WAWebDailyWamEvent").DailyWamEvent)();
          (p.set(m), p.commit(), S());
          var _ = yield I();
          new (o("WAWebLidMigrationDailyWamEvent").LidMigrationDailyWamEvent)(
            _,
          ).commit();
          var f = new (o(
            "WAWebWebcFtsStorageWamEvent",
          ).WebcFtsStorageWamEvent)();
          (f.set({ ftsTotalSize: l }), f.commit());
          var h = new (o(
            "WAWebScreenLockSettingsDataWamEvent",
          ).ScreenLockSettingsDataWamEvent)();
          (h.set(W()), h.commit());
          var y = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            C = new (o(
              "WAWebWebcStorageStatWamEvent",
            ).WebcStorageStatWamEvent)();
          (C.set({
            webcStorageQuota: i.storageTotalSize,
            webcStorageUsage: i.storageUsed,
            webcAgeOfStorage:
              y != null
                ? o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - y
                : -1,
            webcPackingEnabled: !1,
          }),
            C.commit());
          var b = yield o(
            "WAWebUserPrefsGeneral",
          ).getOfflineNotificationEngagement();
          if (b) {
            var R, L;
            (new (o(
              "WAWebNotificationEngagementWamEvent",
            ).NotificationEngagementWamEvent)({
              isWebBackgroundSyncNotif: !0,
              totalNotifShown: (R = b.totalNotifShown) != null ? R : 0,
              totalNotifTapToOpen: (L = b.totalNotifTapToOpen) != null ? L : 0,
            }).commit(),
              o(
                "WAWebUserPrefsGeneral",
              ).clearOfflineNotificationContentEngagement());
          }
          var k = yield o("WAWebUserPrefsGeneral").getNotificationEngagement();
          if (k) {
            var T, x;
            (new (o(
              "WAWebNotificationEngagementWamEvent",
            ).NotificationEngagementWamEvent)({
              totalNotifShown: (T = k.totalNotifShown) != null ? T : 0,
              totalNotifTapToOpen: (x = k.totalNotifTapToOpen) != null ? x : 0,
            }).commit(),
              o("WAWebUserPrefsGeneral").clearNotificationContentEngagement());
          }
          o("WAWebWamPrivateStatsUtils").logDailyPrivateStatsTestEvents();
          var $ = o("WAWebDailyAggregatedStatsCollection")
            .DailyAggregatedStatsCollection.toArray()
            .filter(function (e) {
              return e.shouldBeSubmitted();
            });
          (o(
            "WAWebDailyAggregatedStatsCollection",
          ).DailyAggregatedStatsCollection.remove($),
            $.forEach(function (e) {
              var t = new (o("WAWebPttDailyWamEvent").PttDailyWamEvent)({
                pttCancelBroadcast: e.pttCancelBroadcast,
                pttCancelGroup: e.pttCancelGroup,
                pttCancelIndividual: e.pttCancelIndividual,
                pttCancelNewsletter: e.pttCancelNewsletter,
                pttDraftReviewBroadcast: e.pttDraftReviewBroadcast,
                pttDraftReviewGroup: e.pttDraftReviewGroup,
                pttDraftReviewIndividual: e.pttDraftReviewIndividual,
                pttDraftReviewNewsletter: e.pttDraftReviewNewsletter,
                pttFastplaybackBroadcast: e.pttFastplaybackBroadcast,
                pttFastplaybackGroup: e.pttFastplaybackGroup,
                pttFastplaybackIndividual: e.pttFastplaybackIndividual,
                pttFastplaybackNewsletter: e.pttFastplaybackNewsletter,
                pttLockBroadcast: e.pttLockBroadcast,
                pttLockGroup: e.pttLockGroup,
                pttLockIndividual: e.pttLockIndividual,
                pttLockNewsletter: e.pttLockNewsletter,
                pttOutOfChatBroadcast: e.pttOutOfChatBroadcast,
                pttOutOfChatGroup: e.pttOutOfChatGroup,
                pttOutOfChatIndividual: e.pttOutOfChatIndividual,
                pttOutOfChatNewsletter: e.pttOutOfChatNewsletter,
                pttPlaybackBroadcast: e.pttPlaybackBroadcast,
                pttPlaybackGroup: e.pttPlaybackGroup,
                pttPlaybackIndividual: e.pttPlaybackIndividual,
                pttPlaybackNewsletter: e.pttPlaybackNewsletter,
                pttRecordBroadcast: e.pttRecordBroadcast,
                pttRecordGroup: e.pttRecordGroup,
                pttRecordIndividual: e.pttRecordIndividual,
                pttRecordNewsletter: e.pttRecordNewsletter,
                pttSendBroadcast: e.pttSendBroadcast,
                pttSendGroup: e.pttSendGroup,
                pttSendIndividual: e.pttSendIndividual,
                pttSendNewsletter: e.pttSendNewsletter,
                pttPausedRecordBroadcast: e.pttPausedRecordBroadcast,
                pttPausedRecordGroup: e.pttPausedRecordGroup,
                pttPausedRecordIndividual: e.pttPausedRecordIndividual,
                pttPausedRecordNewsletter: e.pttPausedRecordNewsletter,
              });
              (t.commit(),
                v(e),
                new (o(
                  "WAWebCommunityTabActionWamEvent",
                ).CommunityTabActionWamEvent)({
                  communityTabGroupNavigations: e.communityTabGroupNavigations,
                  communityTabToHomeViews: e.communityTabToHomeViews,
                  communityTabViews: e.communityTabViews,
                  communityTabViewsViaContextMenu:
                    e.communityTabViewsViaContextMenu,
                }).commit(),
                e.communityHome != null &&
                  Object.keys(e.communityHome).forEach(function (t) {
                    var n = r("WAWebWid").user(t);
                    if (n != null) {
                      var a = e.communityHome[t],
                        i = a.communityHomeGroupDiscoveries,
                        l = a.communityHomeGroupJoins,
                        s = a.communityHomeGroupNavigations,
                        u = a.communityHomeViews;
                      new (o(
                        "WAWebCommunityHomeActionWamEvent",
                      ).CommunityHomeActionWamEvent)({
                        communityHomeId: n,
                        communityHomeGroupDiscoveries: i,
                        communityHomeGroupJoins: l,
                        communityHomeGroupNavigations: s,
                        communityHomeViews: u,
                      }).commit();
                    }
                  }),
                e.pnhCagActions != null &&
                  Object.keys(e.pnhCagActions).forEach(function (t) {
                    var n = e.pnhCagActions[t],
                      r = n.pnhIndicatorClicksChat,
                      a = n.pnhIndicatorClicksInfoScreen,
                      i = n.reactionDeleteCount,
                      l = n.reactionOpenTrayCount;
                    new (o("WAWebPnhDailyWamEvent").PnhDailyWamEvent)({
                      communityId: t,
                      pnhIndicatorClicksChat: r,
                      pnhIndicatorClicksInfoScreen: a,
                      reactionDeleteCount: i,
                      reactionOpenTrayCount: l,
                      typeOfGroup: o("WAWebWamEnumTypeOfGroupEnum")
                        .TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP,
                    }).commit();
                  }));
              var n = new (o(
                "WAWebKeepInChatNotifWamEvent",
              ).KeepInChatNotifWamEvent)({
                kicGroupNotificationTaps: e.kicGroupNotificationTaps,
                kicGroupNotifications: e.kicGroupNotifications,
                kicNotificationTaps: e.kicNotificationTaps,
                kicNotifications: e.kicNotifications,
              });
              (n.commit(),
                o("WAWebABProps").getABPropConfigValue(
                  "single_emoji_logging_enabled",
                ) &&
                  new (o(
                    "WAWebWaFsSingleEmojiMessageDailyWamEvent",
                  ).WaFsSingleEmojiMessageDailyWamEvent)({
                    animatedEmojiSendCnt: e.animatedEmojiSend,
                    emojiReplyCount: e.emojiReply,
                    singleEmojiSendCnt: e.singleEmojiSend,
                  }).commit(),
                o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
                  (new (o(
                    "WAWebAboutCreationDailyWamEvent",
                  ).AboutCreationDailyWamEvent)({
                    aboutCreationStarted: e.aboutCreationStartedCount,
                    aboutCreationVisit: e.aboutCreationVisitCount,
                    aboutFailureCount: e.aboutFailureCount,
                    aboutSuccessCount: e.aboutSuccessCount,
                  }).commit(),
                  new (o(
                    "WAWebAboutConsumptionDailyWamEvent",
                  ).AboutConsumptionDailyWamEvent)({
                    aboutChatBubbleTapCount: e.aboutChatBubbleTapCount,
                    aboutChatConsumptionCount: e.aboutChatConsumptionCount,
                    aboutMessageSendCount: e.aboutMessageSendCount,
                  }).commit()),
                o("WAWebSubmitChatLockDailyStats").submitChatLockDailyStats(e));
            }),
            new (o(
              "WAWebWebDynamicSamplingTestEventWithoutSamplingWamEvent",
            ).WebDynamicSamplingTestEventWithoutSamplingWamEvent)().commit(),
            new (o(
              "WAWebWebDynamicSamplingTestEventWithSamplingWamEvent",
            ).WebDynamicSamplingTestEventWithSamplingWamEvent)().commit());
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebBackendApi").frontendSendAndReceive(
            "getDeviceInfo",
            void 0,
          );
          return {
            languageCode: e.lg,
            locationCode: e.lc,
            osBuildNumber: e.osBuild,
            simMcc: parseInt(e.mcc, 10),
            simMnc: parseInt(e.mnc, 10),
          };
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t,
            n,
            a,
            i = [];
          (i.push("con"),
            i.push("id"),
            i.push("ss"),
            i.push("sk"),
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && i.push("ch_jid"),
            i.push("st_lid"),
            o(
              "WAWebUserPrefsFavoritesLidMigration",
            ).isFavoritesMigrationComplete() && i.push("fav"),
            o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete() &&
              i.push("cart"),
            o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete() && i.push("lab"));
          var l = o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).isPhoneNumberHidingThreadPromotionMigrationComplete();
          (l && i.push("pnh_lid"),
            o("WAWebBlocklistMigration").isBlocklistMigrated() &&
              i.push("bl_lid"),
            o(
              "WAWebInactiveGroupLidMigration",
            ).isInactiveGroupLidMigrationComplete() && i.push("inactg"),
            o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
              i.push("web_lid"));
          var f = yield o("WAWebSchemaChat").getChatTable().all(),
            g = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .all(),
            h,
            y,
            C,
            b;
          try {
            if (
              ((h = f.filter(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                return (
                  t.isRegularUser() &&
                  o("WAWebLidMigrationUtils").toLid(t) == null
                );
              })),
              (y = f.filter(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                return t.isRegularUser() && e.accountLid == null;
              })),
              o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
                (b = f.filter(function (e) {
                  return o("WAWebWidFactory").createWid(e.id).isRegularUserPn();
                }).length),
              o("WAWebCurrentUser").isEmployee())
            ) {
              var v = function (t) {
                var e,
                  n,
                  r = o("WAWebWidFactory").createWid(t.id);
                return (
                  "chat id: " +
                  r.toLogString() +
                  ", account lid: " +
                  (t.accountLid == null
                    ? "null"
                    : o("WAWebWidFactory")
                        .createWid(t.accountLid)
                        .toLogString()) +
                  ", mapping: " +
                  ((e =
                    (n = o("WAWebLidMigrationUtils").toLid(r)) == null
                      ? void 0
                      : n.toLogString()) != null
                    ? e
                    : "null")
                );
              };
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: PN chat without mapping: ",
                    "",
                  ])),
                h.slice(0, 5).map(v).join(","),
              ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getLidMigrationStatus: chats without account_lid: ",
                      "",
                    ])),
                  y.slice(0, 5).map(v).join(","),
                ));
            }
            if (r("justknobx")._("5315")) {
              var S = 0,
                R = 0;
              (f.forEach(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                t.isLid() &&
                  e.lidOriginType ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (o("WAWebLidMigrationUtils").toPn(t) == null ? R++ : S++);
              }),
                (C = {
                  numberOfPnhCtwaThreadsKnownMapping: S,
                  numberOfPnhCtwaThreadsMissingMapping: R,
                }),
                l &&
                  (R > 0 || S > 0) &&
                  (o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[getLidMigrationStatus] PNH->unmigrated miss=",
                        " known=",
                        "",
                      ])),
                    R,
                    S,
                  ),
                  o(
                    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
                  ).setPhoneNumberHidingThreadPromotionMigrationState(
                    "unmigrated",
                  )));
            }
          } catch (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "getLidMigrationStatus: ",
                  "",
                ])),
              e,
            );
          }
          var L =
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.lidMigrationSource() ===
              o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY
                ? o("WAWebWamEnumLidMigrationSourceType")
                    .LID_MIGRATION_SOURCE_TYPE.HISTORY
                : o("WAWebWamEnumLidMigrationSourceType")
                    .LID_MIGRATION_SOURCE_TYPE.PEER,
            E = 0,
            k = 0;
          try {
            for (var I of g) I.isLidAddressingMode === !0 ? k++ : E++;
            o("WAWebCurrentUser").isEmployee() &&
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: numberOfPnGroups: ",
                    "",
                  ])),
                E,
              ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: numberOfLidGroups: ",
                    "",
                  ])),
                k,
              ));
          } catch (e) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "getLidMigrationStatus: error counting groups: ",
                  "",
                ])),
              e,
            );
          }
          return babelHelpers.extends(
            {
              completedMigrations: i.join(","),
              numberOfPnChatsWithoutMapping:
                (e = (t = h) == null ? void 0 : t.length) != null ? e : -1,
              numberOfUserChatsWithoutAccountLid: o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated()
                ? (n = (a = y) == null ? void 0 : a.length) != null
                  ? n
                  : -1
                : void 0,
              lidMigrationSource: L,
              numberOfPnGroups: E,
              numberOfLidGroups: k,
            },
            C,
            { numberOfRegularPnChats: b },
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, n, r;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getPrivacySettings",
              ])),
          );
          var a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            i = { receiptsEnabled: a.readReceipts !== "none" },
            l = yield o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
          ((i.privacySettingsAbout = $(a.about)),
            (i.privacySettingsAboutExceptNum =
              a.about === "contact_blacklist"
                ? P((e = l.about) == null ? void 0 : e.disallowedList.length)
                : null),
            (i.privacySettingsGroups = $(a.groupAdd)),
            (i.privacySettingsGroupsExceptNum =
              a.groupAdd === "contact_blacklist"
                ? P((t = l.groupadd) == null ? void 0 : t.disallowedList.length)
                : null),
            (i.privacySettingsLastSeen = $(a.lastSeen)),
            (i.privacySettingsLastSeenExceptNum =
              a.lastSeen === "contact_blacklist"
                ? P((n = l.last) == null ? void 0 : n.disallowedList.length)
                : null),
            (i.privacySettingsProfilePhoto = $(a.profilePicture)),
            (i.privacySettingsProfilePhotoExceptNum =
              a.profilePicture === "contact_blacklist"
                ? P((r = l.profile) == null ? void 0 : r.disallowedList.length)
                : null));
          var s = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
            o("WAWebContactCollection").ContactCollection.getMeContact(),
          );
          i.defaultDisappearingDuration = s != null ? s : 0;
          var u =
            s != null &&
            o("WAWebAfterReadUtils").isAfterReadDuration(s) &&
            o("WAWebAfterReadUtils").isAfterReadEnabled();
          if (
            ((i.defaultAfterReadEnabled = u),
            (i.defaultAfterReadDuration = u ? s : void 0),
            u && (i.defaultDisappearingDuration = 0),
            (i.defenseMode = N(a.defenseMode)),
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_daily_logs",
            ))
          ) {
            i.isDefaultDisappearingMessagingUser =
              i.defaultDisappearingDuration !== 0;
            var c = yield o(
                "WAWebApiPrivacyEphemerality",
              ).queryEphemeralityDailyLogInfo(),
              d = c.countEphemeralThreads,
              m = c.countEphemeralThreadsEnabledByMe,
              p = c.isEphemeralMessagingUser;
            ((i.isEphemeralMessagingUser = p),
              (i.countEphemeralThreads = d),
              (i.countEphemeralThreadsEnabledByMe = m));
          }
          return i;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return e == null
        ? null
        : e === "all"
          ? o("WAWebWamEnumPrivacySettingsValueType")
              .PRIVACY_SETTINGS_VALUE_TYPE.EVERYONE
          : e === "contacts"
            ? o("WAWebWamEnumPrivacySettingsValueType")
                .PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS
            : e === "contact_blacklist"
              ? o("WAWebWamEnumPrivacySettingsValueType")
                  .PRIVACY_SETTINGS_VALUE_TYPE.MY_CONTACTS_EXCEPT
              : e === "none"
                ? o("WAWebWamEnumPrivacySettingsValueType")
                    .PRIVACY_SETTINGS_VALUE_TYPE.NOBODY
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function P(e) {
      return e == null
        ? null
        : e === 0
          ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
              .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B0
          : e < 5
            ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B1
            : e < 10
              ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                  .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B5
              : e < 15
                ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                    .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B10
                : e < 20
                  ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                      .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B15
                  : e < 30
                    ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                        .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B20
                    : e < 40
                      ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                          .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B30
                      : e < 50
                        ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                            .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B40
                        : e < 60
                          ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                              .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B50
                          : e < 70
                            ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                                .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B60
                            : e < 80
                              ? o("WAWebWamEnumPrivacySettingsContactsBuckets")
                                  .PRIVACY_SETTINGS_CONTACTS_BUCKETS.B70
                              : e < 90
                                ? o(
                                    "WAWebWamEnumPrivacySettingsContactsBuckets",
                                  ).PRIVACY_SETTINGS_CONTACTS_BUCKETS.B80
                                : e < 100
                                  ? o(
                                      "WAWebWamEnumPrivacySettingsContactsBuckets",
                                    ).PRIVACY_SETTINGS_CONTACTS_BUCKETS.B90
                                  : o(
                                      "WAWebWamEnumPrivacySettingsContactsBuckets",
                                    ).PRIVACY_SETTINGS_CONTACTS_BUCKETS.B100;
    }
    function N(e) {
      if (e == null) return -1;
      switch (e) {
        case "off":
          return 0;
        case "on_standard":
          return 1;
      }
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("WAWebLidAwareContactsDB")
              .equals(["isAddressBookContact"], 1)
              .then(function (e) {
                return r("countWhere")(e, function (e) {
                  return !r("WAWebWid").isStringLid(e.id);
                });
              }),
            t = o("WAStorageEstimator").estimateStorage(),
            a = o("WAWebMediaStore").LruMediaStore.count(),
            i = r("WAWebLidAwareContactsDB").count(),
            l = o(
              "WAWebContactCollection",
            ).ContactCollection.getFilteredContacts({}).length,
            s = yield (g || (g = n("Promise"))).all([t, e, a, i]),
            u = s[0],
            c = s[1],
            d = s[2],
            m = s[3],
            p = 0,
            _ = 0,
            f = 0;
          if (u.success) {
            var h = u.value,
              y = h.quota,
              C = h.usage;
            ((p = y - C), (_ = y), (f = C));
          }
          return {
            addressbookWhatsappSize: q(c, 10),
            storageAvailSize: q(p, 100),
            storageTotalSize: q(_, 100),
            storageUsed: q(f, 100),
            mediaFolderFileCount: d,
            webcContactsTableSize: q(m, 10),
            webcFilteredContactsSize: l,
          };
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return o("WAWebEstimateFtsStorageApi").getEstimatedFTSDbSize();
    }
    function F() {
      var e = o("WAWebWamEnumNotificationSettingType").NOTIFICATION_SETTING_TYPE
        .UNKNOWN;
      if (window.Notification != null)
        switch (window.Notification.permission) {
          case o("WAWebNotificationConstants").PERMISSION_ALLOWED:
            e = o("WAWebWamEnumNotificationSettingType")
              .NOTIFICATION_SETTING_TYPE.ALLOWED;
            break;
          case o("WAWebNotificationConstants").PERMISSION_DENIED:
            e = o("WAWebWamEnumNotificationSettingType")
              .NOTIFICATION_SETTING_TYPE.BLOCKED;
            break;
          default:
            e = o("WAWebWamEnumNotificationSettingType")
              .NOTIFICATION_SETTING_TYPE.UNKNOWN;
        }
      var t;
      return (
        o("WAWebContactManagementGating").contactManagementEnabled() &&
          (t = o(
            "WAWebUserPrefsContactManagement",
          ).getSyncToAddressbookDefaultSetting()),
        { osNotificationSetting: e, isContactSyncToOsDefaultOn: t }
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = [],
            t = [],
            n = window.navigator.mediaCapabilities;
          if (n != null) {
            var r = { width: 800, height: 600, bitrate: 1e4, framerate: 30 },
              o = { type: "record" },
              a = { type: "file" },
              i = { contentType: 'video/mp4; codecs="avc1.42000a"' },
              l = { contentType: 'video/mp4; codecs="hev1.1.6.L93.B0"' },
              s = { contentType: 'video/mp4; codecs="av01.0.00M.08"' },
              u = {
                contentType: 'video/mp4; codecs="vp09.00.51.08.01.01.01.01.00"',
              },
              c = babelHelpers.extends({}, o, {
                video: babelHelpers.extends({}, i, r),
              }),
              d = babelHelpers.extends({}, o, {
                video: babelHelpers.extends({}, l, r),
              }),
              m = babelHelpers.extends({}, o, {
                video: babelHelpers.extends({}, s, r),
              }),
              p = babelHelpers.extends({}, o, {
                video: babelHelpers.extends({}, u, r),
              }),
              _ = babelHelpers.extends({}, a, {
                video: babelHelpers.extends({}, i, r),
              }),
              f = babelHelpers.extends({}, a, {
                video: babelHelpers.extends({}, l, r),
              }),
              g = babelHelpers.extends({}, a, {
                video: babelHelpers.extends({}, s, r),
              }),
              h = babelHelpers.extends({}, a, {
                video: babelHelpers.extends({}, u, r),
              });
            if (n.encodingInfo != null) {
              try {
                (yield n.encodingInfo(c)).supported && e.push("avc");
              } catch (e) {}
              try {
                (yield n.encodingInfo(d)).supported && e.push("hevc");
              } catch (e) {}
              try {
                (yield n.encodingInfo(m)).supported && e.push("av1");
              } catch (e) {}
              try {
                (yield n.encodingInfo(p)).supported && e.push("vp9");
              } catch (e) {}
            }
            if (n.decodingInfo != null) {
              try {
                (yield n.decodingInfo(_)).supported && t.push("avc");
              } catch (e) {}
              try {
                (yield n.decodingInfo(f)).supported && t.push("hevc");
              } catch (e) {}
              try {
                (yield n.decodingInfo(g)).supported && t.push("av1");
              } catch (e) {}
              try {
                (yield n.decodingInfo(h)).supported && t.push("vp9");
              } catch (e) {}
            }
          }
          return {
            supportedEncoders: e.join(","),
            supportedDecoders: t.join(","),
          };
        })),
        B.apply(this, arguments)
      );
    }
    function W() {
      return {
        screenAutoLockDuration: o(
          "WAWebUserPrefsScreenLock",
        ).getScreenLockDurationForLogging(),
      };
    }
    function q(e, t) {
      return r("gkx")("26258") ? Math.round(e / t) * t : e;
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (g || (g = n("Promise"))).all([
              o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
              o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
            ]),
            t = e[0],
            r = e[1],
            a = o("WAWebUserPrefsUsername").getUsernameState(),
            i;
          return (
            a === "ACTIVE"
              ? (i = o("WAWebWamEnumUsernameState").USERNAME_STATE.ACTIVATED)
              : a === "RESERVED" &&
                (i = o("WAWebWamEnumUsernameState").USERNAME_STATE.RESERVED),
            { hasUsername: t, hasUsernamePin: r, usernameState: i }
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebLidAwareContactsDB").all(),
            t = e.filter(function (e) {
              return r("WAWebWid").isStringLid(e.id);
            }),
            n = new Set(),
            a = 0,
            i = new Set(),
            l = 0;
          for (var s of t) {
            var u = o("WAWebWidFactory").createUserLidOrThrow(s.id),
              c = o("WAWebApiContact").getLatestLid(u);
            (c != null && !u.equals(c) && n.add(s.id),
              s.isUsernameContact === !0 && !n.has(s.id) && a++,
              !r("isStringNullOrEmpty")(s.phoneNumber) &&
                !r("isStringNullOrEmpty")(s.username) &&
                i.add(r("nullthrows")(s.phoneNumber)),
              s.isContactSyncCompleted === 0 && l++);
          }
          return {
            usernameOnlyContactsSize: a,
            deprecatedContactsSize: n.size,
            uniquePhoneNumberContactsSizeWithUsername: i.size,
            contactsRequiringSyncBeforeDisplaySize: l,
          };
        })),
        G.apply(this, arguments)
      );
    }
    ((l.logDailyStats = R), (l.getLidMigrationStatus = I));
  },
  98,
);
