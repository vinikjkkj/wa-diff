__d(
  "WAWebTasksDailyStatsTask",
  [
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
    "WAWebCanonicalUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebCommunityHomeActionWamEvent",
    "WAWebCommunityTabActionWamEvent",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactManagementGating",
    "WAWebCurrentUser",
    "WAWebDBOutContactDatabaseApi",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebDailyWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebEstimateFtsStorageApi",
    "WAWebExperienceIdGatingUtils",
    "WAWebExperienceIdWamFields",
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
    "WAWebSchemaParticipant",
    "WAWebScreenLockSettingsDataWamEvent",
    "WAWebSubmitChatLockDailyStats",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsCartLidMigration",
    "WAWebUserPrefsContactManagement",
    "WAWebUserPrefsExperienceIds",
    "WAWebUserPrefsFavoritesLidMigration",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebUserPrefsMeUser",
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
    "getErrorSafe",
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
      h,
      y,
      C = (e = n("cr:7293")) != null ? e : {},
      b = C.getNotificationToneGroupSetting,
      v = C.getNotificationToneSetting,
      S = C.getNotificationToneStatusSetting;
    function R(e) {
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
    function L() {
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
        (v && b && S
          ? ((a = v()), (i = b()), (l = S()))
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
    function E() {
      var e = o(
        "WAWebUserPrefsExperienceIds",
      ).extractAndClearCurrentReceiverExperienceIds();
      if (!o("WAWebExperienceIdGatingUtils").isExperienceIdReceiveEnabled())
        return {};
      var t = o("WAWebExperienceIdWamFields").getExperienceIdsWamValue(
        [].concat(e).sort(function (e, t) {
          return e - t;
        }),
      );
      return t != null ? { receivedExperienceIds: t } : {};
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o(
            "WAWebABPropsGlobals",
          ).logClientExposurePulseEventFromDailyStatsTask(),
            o(
              "WAWebGroupABPropsGlobals",
            ).logGroupExposurePulseEventFromDailyStatsTask());
          var e = yield (y || (y = n("Promise"))).all([
              T(),
              B(),
              H(),
              z(),
              K(),
              ee(),
              J(),
            ]),
            t = e[0],
            a = e[1],
            i = e[2],
            l = e[3],
            u = e[4],
            c = e[5],
            d = e[6],
            m = j(),
            p = babelHelpers.extends({}, t, a, i, m, u, c, d, E(), {
              isCanonicalEntPresent: o(
                "WAWebCanonicalUtils",
              ).isCanonicalPresent(),
            }),
            _ = new (o("WAWebDailyWamEvent").DailyWamEvent)();
          (_.set(p), _.commit(), L());
          try {
            var f = yield x({ includeGroupComposition: !0 });
            new (o("WAWebLidMigrationDailyWamEvent").LidMigrationDailyWamEvent)(
              f,
            ).commit();
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: dropping daily event on scan failure",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("lid-migration-daily-dropped");
          }
          var g = new (o(
            "WAWebWebcFtsStorageWamEvent",
          ).WebcFtsStorageWamEvent)();
          (g.set({ ftsTotalSize: l }), g.commit());
          var h = new (o(
            "WAWebScreenLockSettingsDataWamEvent",
          ).ScreenLockSettingsDataWamEvent)();
          (h.set(X()), h.commit());
          var C = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            b = new (o(
              "WAWebWebcStorageStatWamEvent",
            ).WebcStorageStatWamEvent)();
          (b.set({
            webcStorageQuota: i.storageTotalSize,
            webcStorageUsage: i.storageUsed,
            webcAgeOfStorage:
              C != null
                ? o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - C
                : -1,
            webcPackingEnabled: !1,
          }),
            b.commit());
          var v = yield o(
            "WAWebUserPrefsGeneral",
          ).getOfflineNotificationEngagement();
          if (v) {
            var S, k;
            (new (o(
              "WAWebNotificationEngagementWamEvent",
            ).NotificationEngagementWamEvent)({
              isWebBackgroundSyncNotif: !0,
              totalNotifShown: (S = v.totalNotifShown) != null ? S : 0,
              totalNotifTapToOpen: (k = v.totalNotifTapToOpen) != null ? k : 0,
            }).commit(),
              o(
                "WAWebUserPrefsGeneral",
              ).clearOfflineNotificationContentEngagement());
          }
          var I = yield o("WAWebUserPrefsGeneral").getNotificationEngagement();
          if (I) {
            var D, $;
            (new (o(
              "WAWebNotificationEngagementWamEvent",
            ).NotificationEngagementWamEvent)({
              totalNotifShown: (D = I.totalNotifShown) != null ? D : 0,
              totalNotifTapToOpen: ($ = I.totalNotifTapToOpen) != null ? $ : 0,
            }).commit(),
              o("WAWebUserPrefsGeneral").clearNotificationContentEngagement());
          }
          o("WAWebWamPrivateStatsUtils").logDailyPrivateStatsTestEvents();
          var P = o("WAWebDailyAggregatedStatsCollection")
            .DailyAggregatedStatsCollection.toArray()
            .filter(function (e) {
              return e.shouldBeSubmitted();
            });
          (o(
            "WAWebDailyAggregatedStatsCollection",
          ).DailyAggregatedStatsCollection.remove(P),
            P.forEach(function (e) {
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
                R(e),
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
                  Object.entries(e.communityHome).forEach(function (e) {
                    var t = e[0],
                      n = e[1],
                      a = r("WAWebWid").user(t);
                    if (a != null) {
                      var i = n.communityHomeGroupDiscoveries,
                        l = n.communityHomeGroupJoins,
                        s = n.communityHomeGroupNavigations,
                        u = n.communityHomeViews;
                      new (o(
                        "WAWebCommunityHomeActionWamEvent",
                      ).CommunityHomeActionWamEvent)({
                        communityHomeId: a,
                        communityHomeGroupDiscoveries: i,
                        communityHomeGroupJoins: l,
                        communityHomeGroupNavigations: s,
                        communityHomeViews: u,
                      }).commit();
                    }
                  }),
                e.pnhCagActions != null &&
                  Object.entries(e.pnhCagActions).forEach(function (e) {
                    var t = e[0],
                      n = e[1],
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
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l = e === void 0 ? {} : e,
            s = l.includeGroupComposition,
            g = s === void 0 ? !1 : s,
            h = [];
          (h.push("con"),
            h.push("id"),
            h.push("ss"),
            h.push("sk"),
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() && h.push("ch_jid"),
            h.push("st_lid"),
            o(
              "WAWebUserPrefsFavoritesLidMigration",
            ).isFavoritesMigrationComplete() && h.push("fav"),
            o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete() &&
              h.push("cart"),
            o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete() && h.push("lab"));
          var y = o(
            "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
          ).isPhoneNumberHidingThreadPromotionMigrationComplete();
          (y && h.push("pnh_lid"),
            o("WAWebBlocklistMigration").isBlocklistMigrated() &&
              h.push("bl_lid"),
            o(
              "WAWebInactiveGroupLidMigration",
            ).isInactiveGroupLidMigrationComplete() && h.push("inactg"),
            o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
              h.push("web_lid"));
          var C = yield o("WAWebSchemaChat").getChatTable().all(),
            b = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .all(),
            v,
            S,
            R,
            L;
          try {
            if (
              ((v = C.filter(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                return (
                  t.isRegularUser() &&
                  o("WAWebLidMigrationUtils").toLid(t) == null
                );
              })),
              (S = C.filter(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                return t.isRegularUser() && e.accountLid == null;
              })),
              (L = C.filter(function (e) {
                return o("WAWebWidFactory").createWid(e.id).isRegularUserPn();
              }).length),
              o("WAWebCurrentUser").isEmployee())
            ) {
              var E = function (t) {
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: PN chat without mapping: ",
                    "",
                  ])),
                v.slice(0, 5).map(E).join(","),
              ),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "getLidMigrationStatus: chats without account_lid: ",
                      "",
                    ])),
                  S.slice(0, 5).map(E).join(","),
                ));
            }
            if (r("justknobx")._("5315")) {
              var k = 0,
                I = 0;
              (C.forEach(function (e) {
                var t = o("WAWebWidFactory").createWid(e.id);
                t.isLid() &&
                  e.lidOriginType ===
                    o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                  (o("WAWebLidMigrationUtils").toPn(t) == null ? I++ : k++);
              }),
                (R = {
                  numberOfPnhCtwaThreadsKnownMapping: k,
                  numberOfPnhCtwaThreadsMissingMapping: I,
                }),
                y &&
                  (I > 0 || k > 0) &&
                  (o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[getLidMigrationStatus] PNH->unmigrated miss=",
                        " known=",
                        "",
                      ])),
                    I,
                    k,
                  ),
                  o(
                    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
                  ).setPhoneNumberHidingThreadPromotionMigrationState(
                    "unmigrated",
                  )));
            }
          } catch (e) {
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "getLidMigrationStatus: ",
                  "",
                ])),
              e,
            );
          }
          var T =
              o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.lidMigrationSource() ===
              o("WAWebUserPrefsTypes").LidMigrationSource.HISTORY
                ? o("WAWebWamEnumLidMigrationSourceType")
                    .LID_MIGRATION_SOURCE_TYPE.HISTORY
                : o("WAWebWamEnumLidMigrationSourceType")
                    .LID_MIGRATION_SOURCE_TYPE.PEER,
            D = 0,
            x = 0;
          try {
            for (var $ of b) $.isLidAddressingMode === !0 ? x++ : D++;
            o("WAWebCurrentUser").isEmployee() &&
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: numberOfPnGroups: ",
                    "",
                  ])),
                D,
              ),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "getLidMigrationStatus: numberOfLidGroups: ",
                    "",
                  ])),
                x,
              ));
          } catch (e) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "getLidMigrationStatus: error counting groups: ",
                  "",
                ])),
              e,
            );
          }
          var P =
              g &&
              o("WAWebABProps").getABPropConfigValue(
                "lid_migration_daily_group_composition_enabled",
              )
                ? yield M(b)
                : null,
            N = babelHelpers.extends(
              {
                completedMigrations: h.join(","),
                numberOfPnChatsWithoutMapping:
                  (t = (n = v) == null ? void 0 : n.length) != null ? t : -1,
                numberOfUserChatsWithoutAccountLid: o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated()
                  ? (a = (i = S) == null ? void 0 : i.length) != null
                    ? a
                    : -1
                  : void 0,
                lidMigrationSource: T,
                numberOfPnGroups: D,
                numberOfLidGroups: x,
              },
              R,
              { numberOfRegularPnChats: L },
            );
          return (
            P != null &&
              ((N.numberOfPnOnlyGroups = P.numberOfPnOnlyGroups),
              (N.numberOfLidOnlyGroups = P.numberOfLidOnlyGroups),
              (N.numberOfMixedPnLidGroups = P.numberOfMixedPnLidGroups),
              (N.numberOfCagGroups = P.numberOfCagGroups),
              (N.numberOfCagLidGroups = P.numberOfCagLidGroups),
              (N.numberOfPnOnlyGroupsNotMember =
                P.numberOfPnOnlyGroupsNotMember),
              (N.numberOfPnOnlyGroupsNotMemberAllMapped =
                P.numberOfPnOnlyGroupsNotMemberAllMapped),
              (N.numberOfPnOnlyGroupsNotMemberUnmappedContacts =
                P.numberOfPnOnlyGroupsNotMemberUnmappedContacts),
              (N.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts =
                P.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts)),
            N
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Set(),
            t = yield o("WAWebDBOutContactDatabaseApi").getAllOutContacts();
          for (var n of t)
            try {
              e.add(o("WAWebWidFactory").createWid(n.id));
            } catch (e) {}
          return e;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {
              numberOfPnOnlyGroups: 0,
              numberOfLidOnlyGroups: 0,
              numberOfMixedPnLidGroups: 0,
              numberOfCagGroups: 0,
              numberOfCagLidGroups: 0,
              numberOfPnOnlyGroupsNotMember: 0,
              numberOfPnOnlyGroupsNotMemberAllMapped: 0,
              numberOfPnOnlyGroupsNotMemberUnmappedContacts: 0,
              numberOfPnOnlyGroupsNotMemberUnmappedOutContacts: 0,
            },
            n = new Map();
          yield o("WAWebSchemaParticipant")
            .getParticipantTable()
            .forEach(function (e) {
              n.set(e.groupId, e.participants);
            });
          var r = yield P(),
            a = 0;
          for (var i of e)
            try {
              var l,
                s = (l = n.get(i.id)) != null ? l : [];
              F(t, i.defaultSubgroup === !0, A(s), r);
            } catch (e) {
              a++;
            }
          return (
            a > 0 &&
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "getGroupParticipantComposition: skipped ",
                      " group(s)",
                    ])),
                  a,
                )
                .sendLogs("group-composition-group-skipped"),
            t
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t = !1,
        n = !1,
        r = !1,
        a = [];
      for (var i of e) {
        var l = o("WAWebWidFactory").createWid(i);
        (o("WAWebUserPrefsMeUser").isMeAccount(l) && (r = !0),
          l.isRegularUser() &&
            (l.isLid()
              ? (n = !0)
              : ((t = !0),
                o("WAWebLidMigrationUtils").toLid(l) == null && a.push(l))));
      }
      return {
        hasPnParticipant: t,
        hasLidParticipant: n,
        isCurrentUserMember: r,
        unmappedPnWids: a,
      };
    }
    function F(e, t, n, r) {
      var o = n.hasLidParticipant,
        a = n.hasPnParticipant,
        i = n.isCurrentUserMember;
      if (t) {
        a ? e.numberOfCagGroups++ : o && e.numberOfCagLidGroups++;
        return;
      }
      if (a && o) {
        e.numberOfMixedPnLidGroups++;
        return;
      }
      if (o) {
        e.numberOfLidOnlyGroups++;
        return;
      }
      a && (e.numberOfPnOnlyGroups++, i || O(e, n, r));
    }
    function O(e, t, n) {
      e.numberOfPnOnlyGroupsNotMember++;
      var r = t.unmappedPnWids;
      r.length === 0
        ? e.numberOfPnOnlyGroupsNotMemberAllMapped++
        : r.some(function (e) {
              return n.has(e);
            })
          ? e.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts++
          : e.numberOfPnOnlyGroupsNotMemberUnmappedContacts++;
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e, t, n, r;
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "getPrivacySettings",
              ])),
          );
          var a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
            i = { receiptsEnabled: a.readReceipts !== "none" },
            l = yield o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
          ((i.privacySettingsAbout = q(a.about)),
            (i.privacySettingsAboutExceptNum =
              a.about === "contact_blacklist"
                ? U((e = l.about) == null ? void 0 : e.disallowedList.length)
                : null),
            (i.privacySettingsGroups = q(a.groupAdd)),
            (i.privacySettingsGroupsExceptNum =
              a.groupAdd === "contact_blacklist"
                ? U((t = l.groupadd) == null ? void 0 : t.disallowedList.length)
                : null),
            (i.privacySettingsLastSeen = q(a.lastSeen)),
            (i.privacySettingsLastSeenExceptNum =
              a.lastSeen === "contact_blacklist"
                ? U((n = l.last) == null ? void 0 : n.disallowedList.length)
                : null),
            (i.privacySettingsProfilePhoto = q(a.profilePicture)),
            (i.privacySettingsProfilePhotoExceptNum =
              a.profilePicture === "contact_blacklist"
                ? U((r = l.profile) == null ? void 0 : r.disallowedList.length)
                : null));
          var s = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
            o("WAWebContactCollection").ContactCollection.getMeContact(),
          );
          i.defaultDisappearingDuration = s != null ? s : 0;
          var u =
            s != null &&
            o("WAWebAfterReadUtils").isAfterReadDuration(s) &&
            o("WAWebAfterReadUtils").isAfterReadEnabled();
          ((i.defaultAfterReadEnabled = u),
            (i.defaultAfterReadDuration = u ? s : void 0),
            u && (i.defaultDisappearingDuration = 0),
            (i.defenseMode = V(a.defenseMode)),
            (i.isDefaultDisappearingMessagingUser =
              i.defaultDisappearingDuration !== 0));
          var c = yield o(
              "WAWebApiPrivacyEphemerality",
            ).queryEphemeralityDailyLogInfo(),
            d = c.countEphemeralThreads,
            m = c.countEphemeralThreadsEnabledByMe,
            p = c.isEphemeralMessagingUser;
          return (
            (i.isEphemeralMessagingUser = p),
            (i.countEphemeralThreads = d),
            (i.countEphemeralThreadsEnabledByMe = m),
            i
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
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
    function U(e) {
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
    function V(e) {
      if (e == null) return -1;
      switch (e) {
        case "off":
          return 0;
        case "on_standard":
          return 1;
      }
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebABProps").getABPropConfigValue(
              "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
            )
              ? r("WAWebLidAwareContactsDB")
                  .equalsPrimaryKeys(["isAddressBookContact"], 1)
                  .then(function (e) {
                    return r("countWhere")(e, function (e) {
                      return !r("WAWebWid").isStringLid(e);
                    });
                  })
              : r("WAWebLidAwareContactsDB")
                  .equals(["isAddressBookContact"], 1)
                  .then(function (e) {
                    return r("countWhere")(e, function (e) {
                      return !r("WAWebWid").isStringLid(e.id);
                    });
                  }),
            t = o("WAStorageEstimator").estimateStorage(),
            a = o("WAWebMediaStore").LruMediaStore.count(),
            i = r("WAWebLidAwareContactsDB").count(),
            l = o("WAWebContactCollectionUtils").getFilteredContacts(
              o("WAWebContactCollection").ContactCollection,
              {},
            ).length,
            s = yield (y || (y = n("Promise"))).all([t, e, a, i]),
            u = s[0],
            c = s[1],
            d = s[2],
            m = s[3],
            p = 0,
            _ = 0,
            f = 0;
          if (u.success) {
            var g = u.value,
              h = g.quota,
              C = g.usage;
            ((p = h - C), (_ = h), (f = C));
          }
          return {
            addressbookWhatsappSize: Y(c, 10),
            storageAvailSize: Y(p, 100),
            storageTotalSize: Y(_, 100),
            storageUsed: Y(f, 100),
            mediaFolderFileCount: d,
            webcContactsTableSize: Y(m, 10),
            webcFilteredContactsSize: l,
          };
        })),
        G.apply(this, arguments)
      );
    }
    function z() {
      return o("WAWebEstimateFtsStorageApi").getEstimatedFTSDbSize();
    }
    function j() {
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
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        Q.apply(this, arguments)
      );
    }
    function X() {
      return {
        screenAutoLockDuration: o(
          "WAWebUserPrefsScreenLock",
        ).getScreenLockDurationForLogging(),
      };
    }
    function Y(e, t) {
      return r("gkx")("26258") ? Math.round(e / t) * t : e;
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (y || (y = n("Promise"))).all([
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
        Z.apply(this, arguments)
      );
    }
    function ee() {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new Set(),
            t = 0,
            n = new Set(),
            a = 0;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "web_anr_batch_and_queue_bulk_contacts_db_writes_enabled",
            )
          )
            o("WAWebContactCollection").ContactCollection.forEach(function (r) {
              if (r.id.isLid()) {
                var i = r.id.toString(),
                  l = o("WAWebWidFactory").asUserLidOrThrow(r.id),
                  s = o("WAWebApiContact").getLatestLid(l);
                (s != null && !l.equals(s) && e.add(i),
                  r.isUsernameContact === !0 && !e.has(i) && t++);
                var u = r.phoneNumber;
                (u != null &&
                  o("WAWebUsernameTypes").isPresentUsername(r.username) &&
                  n.add(u.toString()),
                  r.isContactSyncCompleted === 0 && a++);
              }
            });
          else {
            var i = yield r("WAWebLidAwareContactsDB").all(),
              l = i.filter(function (e) {
                return r("WAWebWid").isStringLid(e.id);
              });
            for (var s of l) {
              var u = o("WAWebWidFactory").createUserLidOrThrow(s.id),
                c = o("WAWebApiContact").getLatestLid(u);
              (c != null && !u.equals(c) && e.add(s.id),
                s.isUsernameContact === !0 && !e.has(s.id) && t++,
                !r("isStringNullOrEmpty")(s.phoneNumber) &&
                  o("WAWebUsernameTypes").isPresentUsername(s.username) &&
                  n.add(r("nullthrows")(s.phoneNumber)),
                s.isContactSyncCompleted === 0 && a++);
            }
          }
          return {
            usernameOnlyContactsSize: t,
            deprecatedContactsSize: e.size,
            uniquePhoneNumberContactsSizeWithUsername: n.size,
            contactsRequiringSyncBeforeDisplaySize: a,
          };
        })),
        te.apply(this, arguments)
      );
    }
    ((l.logDailyStats = k),
      (l.getLidMigrationStatus = x),
      (l.classifyGroupParticipants = A),
      (l.tallyNonMemberPnOnlyGroup = O));
  },
  98,
);
