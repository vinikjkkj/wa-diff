__d(
  "WAWebTasksDailyStatsTask",
  [
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebCallReachability",
    "WAWebCallUserJourneyGating",
    "WAWebCanonicalUtils",
    "WAWebChatThreadLoggingUtils",
    "WAWebCommunityHomeActionWamEvent",
    "WAWebCommunityTabActionWamEvent",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactManagementGating",
    "WAWebCountryCodeUtils",
    "WAWebCurrentUser",
    "WAWebDBOutContactDatabaseApi",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebDailyWamEvent",
    "WAWebEphemeralityResolver",
    "WAWebEstimateFtsStorageApi",
    "WAWebForwardReachDailyStatsUtils",
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
    "WAWebTasksExperienceIdDailyReport",
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
    "WAWebUserUtils",
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
    "countWhere",
    "cr:17587",
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
      C,
      b,
      v,
      S = 3e4,
      R = (e = n("cr:7293")) != null ? e : {},
      L = R.getNotificationToneGroupSetting,
      E = R.getNotificationToneSetting,
      k = R.getNotificationToneStatusSetting;
    function I(e) {
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
    function T() {
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
        (E && L && k
          ? ((a = E()), (i = L()), (l = k()))
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
          r.set(
            babelHelpers.extends(
              {
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
                showPreview: o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalPreviews(),
                offlineNotification: o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalOfflineNotifications(),
              },
              D(),
            ),
          ));
      } else
        r.set(
          babelHelpers.extends(
            {
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
            },
            D(),
          ),
        );
      r.commit();
    }
    function D() {
      return !o(
        "WAWebMuteCollection",
      ).MuteCollection.isGlobalSettingsRestored() ||
        !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
        ? {}
        : {
            callNotificationSound: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalCallRingtone(),
            callShowNotification: o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalCallNotifications(),
          };
    }
    function x() {
      var e = Date.now(),
        t = o("WAWebDailyAggregatedStatsCollection")
          .DailyAggregatedStatsCollection.toArray()
          .find(function (t) {
            return t.startTime <= e && e < t.getEndTime();
          });
      t != null && (t.forwardReachTracked = !0);
    }
    async function $(e, t) {
      o("WAWebABProps").getABPropConfigValue(
        "forward_reach_stats_logging_enabled",
      ) &&
        (x(),
        await Promise.all(
          e.map(function (e) {
            return o("WAPromiseDelays")
              .withTimeout(
                o(
                  "WAWebForwardReachDailyStatsUtils",
                ).submitForwardReachDailyStats(
                  e,
                  o("WAWebCountryCodeUtils").getMyCountryCode,
                  t,
                ),
                S,
                function () {
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "logDailyStats: forward reach handoff timed out",
                        ])),
                    )
                    .sendLogs("forward-reach-daily-stats-fail");
                },
              )
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "logDailyStats: forward reach handoff failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("forward-reach-daily-stats-fail");
              });
          }),
        ));
    }
    function P(e) {
      return o("WAWebABProps").getABPropConfigValue(
        "forward_reach_stats_logging_enabled",
      )
        ? e.filter(function (e) {
            return (
              o(
                "WAWebDailyAggregatedStatsCollection",
              ).DailyAggregatedStatsCollection.get(e.id) === e
            );
          })
        : e;
    }
    async function N(e) {
      (o("WAWebABPropsGlobals").logClientExposurePulseEventFromDailyStatsTask(),
        o(
          "WAWebGroupABPropsGlobals",
        ).logGroupExposurePulseEventFromDailyStatsTask());
      var t = await Promise.all([M(), q(), G(), z(), Q(), Z(), J(), K()]),
        a = t[0],
        i = t[1],
        l = t[2],
        s = t[3],
        u = t[4],
        m = t[5],
        p = t[6],
        _ = t[7],
        f = j(),
        g = babelHelpers.extends({}, a, i, l, f, u, m, p, _, {
          isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent(),
        }),
        h = new (o("WAWebDailyWamEvent").DailyWamEvent)();
      (h.set(g), h.commit(), T());
      try {
        var y = await w({ includeGroupComposition: !0 });
        new (o("WAWebLidMigrationDailyWamEvent").LidMigrationDailyWamEvent)(
          y,
        ).commit();
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getLidMigrationStatus: dropping daily event on scan failure",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("lid-migration-daily-dropped");
      }
      o("WAWebTasksExperienceIdDailyReport").reportExperienceIdDailyStats();
      var C = new (o("WAWebWebcFtsStorageWamEvent").WebcFtsStorageWamEvent)();
      (C.set({ ftsTotalSize: s }), C.commit());
      var b = new (o(
        "WAWebScreenLockSettingsDataWamEvent",
      ).ScreenLockSettingsDataWamEvent)();
      (b.set(X()), b.commit());
      try {
        n("cr:17587") == null ||
          n("cr:17587").reportAeaConsumerBackfillStatus();
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] logDailyStats: failed to report the backfill status",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-backfill-status-report-fail");
      }
      var v = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        S = new (o("WAWebWebcStorageStatWamEvent").WebcStorageStatWamEvent)();
      (S.set({
        webcStorageQuota: l.storageTotalSize,
        webcStorageUsage: l.storageUsed,
        webcAgeOfStorage:
          v != null
            ? o("WATimeUtils").unixTimeWithoutClockSkewCorrection() - v
            : -1,
        webcPackingEnabled: !1,
      }),
        S.commit());
      var R = await o(
        "WAWebUserPrefsGeneral",
      ).getOfflineNotificationEngagement();
      if (R) {
        var L, E;
        (new (o(
          "WAWebNotificationEngagementWamEvent",
        ).NotificationEngagementWamEvent)({
          isWebBackgroundSyncNotif: !0,
          totalNotifShown: (L = R.totalNotifShown) != null ? L : 0,
          totalNotifTapToOpen: (E = R.totalNotifTapToOpen) != null ? E : 0,
        }).commit(),
          o(
            "WAWebUserPrefsGeneral",
          ).clearOfflineNotificationContentEngagement());
      }
      var k = await o("WAWebUserPrefsGeneral").getNotificationEngagement();
      if (k) {
        var D, x, N, A;
        (new (o(
          "WAWebNotificationEngagementWamEvent",
        ).NotificationEngagementWamEvent)({
          totalNotifRtcVoipAccept:
            (D = k.totalNotifRtcVoipAccept) != null ? D : 0,
          totalNotifRtcVoipDecline:
            (x = k.totalNotifRtcVoipDecline) != null ? x : 0,
          totalNotifShown: (N = k.totalNotifShown) != null ? N : 0,
          totalNotifTapToOpen: (A = k.totalNotifTapToOpen) != null ? A : 0,
        }).commit(),
          o("WAWebUserPrefsGeneral").clearNotificationContentEngagement());
      }
      o("WAWebWamPrivateStatsUtils").logDailyPrivateStatsTestEvents();
      var F = o("WAWebDailyAggregatedStatsCollection")
        .DailyAggregatedStatsCollection.toArray()
        .filter(function (e) {
          return e.shouldBeSubmitted();
        });
      (await $(F, e),
        (F = P(F)),
        o(
          "WAWebDailyAggregatedStatsCollection",
        ).DailyAggregatedStatsCollection.remove(F),
        F.forEach(function (e) {
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
            I(e),
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
            new (o(
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
            }).commit(),
            o("WAWebSubmitChatLockDailyStats").submitChatLockDailyStats(e));
        }),
        new (o(
          "WAWebWebDynamicSamplingTestEventWithoutSamplingWamEvent",
        ).WebDynamicSamplingTestEventWithoutSamplingWamEvent)().commit(),
        new (o(
          "WAWebWebDynamicSamplingTestEventWithSamplingWamEvent",
        ).WebDynamicSamplingTestEventWithSamplingWamEvent)().commit());
    }
    async function M() {
      var e = await o("WAWebBackendApi").frontendSendAndReceive(
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
    }
    async function w(e) {
      var t,
        n,
        a,
        i,
        l = e === void 0 ? {} : e,
        s = l.includeGroupComposition,
        u = s === void 0 ? !1 : s,
        c = [];
      (c.push("con"),
        c.push("id"),
        c.push("ss"),
        c.push("sk"),
        c.push("ch_jid"),
        c.push("st_lid"),
        o(
          "WAWebUserPrefsFavoritesLidMigration",
        ).isFavoritesMigrationComplete() && c.push("fav"),
        o("WAWebUserPrefsCartLidMigration").isCartLidMigrationComplete() &&
          c.push("cart"),
        o(
          "WAWebUserPrefsLabelAssociationsLidMigration",
        ).isLabelAssociationsMigrationComplete() && c.push("lab"));
      var d = o(
        "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
      ).isPhoneNumberHidingThreadPromotionMigrationComplete();
      (d && c.push("pnh_lid"),
        o("WAWebBlocklistMigration").isBlocklistMigrated() && c.push("bl_lid"),
        o(
          "WAWebInactiveGroupLidMigration",
        ).isInactiveGroupLidMigrationComplete() && c.push("inactg"),
        o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
          c.push("web_lid"));
      var C = await o("WAWebSchemaChat").getChatTable().all(),
        b = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all(),
        v,
        S,
        R,
        L;
      try {
        if (
          ((v = C.filter(function (e) {
            var t = o("WAWebWidFactory").createWid(e.id);
            return (
              t.isRegularUser() && o("WAWebLidMigrationUtils").toLid(t) == null
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
                : o("WAWebWidFactory").createWid(t.accountLid).toLogString()) +
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "getLidMigrationStatus: PN chat without mapping: ",
                "",
              ])),
            v.slice(0, 5).map(E).join(","),
          ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
            d &&
              (I > 0 || k > 0) &&
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
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
            ? o("WAWebWamEnumLidMigrationSourceType").LID_MIGRATION_SOURCE_TYPE
                .HISTORY
            : o("WAWebWamEnumLidMigrationSourceType").LID_MIGRATION_SOURCE_TYPE
                .PEER,
        D = 0,
        x = 0;
      try {
        for (var $ of b) $.isLidAddressingMode === !0 ? x++ : D++;
        o("WAWebCurrentUser").isEmployee() &&
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "getLidMigrationStatus: numberOfPnGroups: ",
                "",
              ])),
            D,
          ),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "getLidMigrationStatus: numberOfLidGroups: ",
                "",
              ])),
            x,
          ));
      } catch (e) {
        o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "getLidMigrationStatus: error counting groups: ",
              "",
            ])),
          e,
        );
      }
      var P =
          u &&
          o("WAWebABProps").getABPropConfigValue(
            "lid_migration_daily_group_composition_enabled",
          )
            ? await F(b)
            : null,
        N = babelHelpers.extends(
          {
            completedMigrations: c.join(","),
            numberOfPnChatsWithoutMapping:
              (t = (n = v) == null ? void 0 : n.length) != null ? t : -1,
            numberOfUserChatsWithoutAccountLid:
              (a = (i = S) == null ? void 0 : i.length) != null ? a : -1,
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
          (N.numberOfPnOnlyGroupsNotMember = P.numberOfPnOnlyGroupsNotMember),
          (N.numberOfPnOnlyGroupsNotMemberAllMapped =
            P.numberOfPnOnlyGroupsNotMemberAllMapped),
          (N.numberOfPnOnlyGroupsNotMemberUnmappedContacts =
            P.numberOfPnOnlyGroupsNotMemberUnmappedContacts),
          (N.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts =
            P.numberOfPnOnlyGroupsNotMemberUnmappedOutContacts)),
        N
      );
    }
    async function A() {
      var e = new Set(),
        t = await o("WAWebDBOutContactDatabaseApi").getAllOutContacts();
      for (var n of t)
        try {
          e.add(o("WAWebWidFactory").createWid(n.id));
        } catch (e) {}
      return e;
    }
    async function F(e) {
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
      await o("WAWebSchemaParticipant")
        .getParticipantTable()
        .forEach(function (e) {
          n.set(e.groupId, e.participants);
        });
      var r = await A(),
        a = 0;
      for (var i of e)
        try {
          var l,
            s = (l = n.get(i.id)) != null ? l : [];
          B(t, i.defaultSubgroup === !0, O(s), r);
        } catch (e) {
          a++;
        }
      return (
        a > 0 &&
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "getGroupParticipantComposition: skipped ",
                  " group(s)",
                ])),
              a,
            )
            .sendLogs("group-composition-group-skipped"),
        t
      );
    }
    function O(e) {
      var t = !1,
        n = !1,
        r = !1,
        a = [];
      for (var i of e) {
        var l = o("WAWebWidFactory").createWid(i);
        (o("WAWebUserUtils").isMeAccount(l) && (r = !0),
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
    function B(e, t, n, r) {
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
      a && (e.numberOfPnOnlyGroups++, i || W(e, n, r));
    }
    function W(e, t, n) {
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
    async function q() {
      var e, t, n, r;
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose(["getPrivacySettings"])),
      );
      var a = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        i = { receiptsEnabled: a.readReceipts !== "none" },
        l = await o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
      ((i.privacySettingsAbout = U(a.about)),
        (i.privacySettingsAboutExceptNum =
          a.about === "contact_blacklist"
            ? V((e = l.about) == null ? void 0 : e.disallowedList.length)
            : null),
        (i.privacySettingsGroups = U(a.groupAdd)),
        (i.privacySettingsGroupsExceptNum =
          a.groupAdd === "contact_blacklist"
            ? V((t = l.groupadd) == null ? void 0 : t.disallowedList.length)
            : null),
        (i.privacySettingsLastSeen = U(a.lastSeen)),
        (i.privacySettingsLastSeenExceptNum =
          a.lastSeen === "contact_blacklist"
            ? V((n = l.last) == null ? void 0 : n.disallowedList.length)
            : null),
        (i.privacySettingsProfilePhoto = U(a.profilePicture)),
        (i.privacySettingsProfilePhotoExceptNum =
          a.profilePicture === "contact_blacklist"
            ? V((r = l.profile) == null ? void 0 : r.disallowedList.length)
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
        (i.defenseMode = H(a.defenseMode)),
        (i.isDefaultDisappearingMessagingUser =
          i.defaultDisappearingDuration !== 0));
      var c = await o(
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
    }
    function U(e) {
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
    function V(e) {
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
    function H(e) {
      if (e == null) return -1;
      switch (e) {
        case "off":
          return 0;
        case "on_standard":
          return 1;
      }
    }
    async function G() {
      var e = r("WAWebLidAwareContactsDB")
          .equals(["isAddressBookContact"], 1)
          .then(function (e) {
            return e.filter(function (e) {
              return !r("WAWebWid").isStringLid(e.id);
            });
          }),
        t = o("WAStorageEstimator").estimateStorage(),
        n = o("WAWebMediaStore").LruMediaStore.count(),
        a = r("WAWebLidAwareContactsDB").count(),
        i = o("WAWebContactCollectionUtils").getFilteredContacts(
          o("WAWebContactCollection").ContactCollection,
          {},
        ).length,
        l = await Promise.all([t, e, n, a]),
        s = l[0],
        u = l[1],
        c = l[2],
        d = l[3],
        m = 0,
        p = 0,
        _ = 0;
      if (s.success) {
        var f = s.value,
          g = f.quota,
          h = f.usage;
        ((m = g - h), (p = g), (_ = h));
      }
      return {
        addressbookWhatsappSize: Y(u.length, 10),
        totalCountInNetworkUniquePhoneNumber: r("countWhere")(u, function (e) {
          return e.isUsernameContact !== !0;
        }),
        storageAvailSize: Y(m, 100),
        storageTotalSize: Y(p, 100),
        storageUsed: Y(_, 100),
        mediaFolderFileCount: c,
        webcContactsTableSize: Y(d, 10),
        webcFilteredContactsSize: i,
      };
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
    async function K() {
      try {
        if (!o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled())
          return {};
        var e = await Promise.all([
            o("WAWebCallReachability").readMediaWebPermissionState("camera"),
            o("WAWebCallReachability").readMediaWebPermissionState(
              "microphone",
            ),
          ]),
          t = e[0],
          n = e[1];
        return { webPermissionCamera: t, webPermissionMic: n };
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "logDailyStats: failed to read the camera and microphone permissions",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("daily-stats-web-media-permissions-read-failed"),
          {}
        );
      }
    }
    async function Q() {
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
            (await n.encodingInfo(c)).supported && e.push("avc");
          } catch (e) {}
          try {
            (await n.encodingInfo(d)).supported && e.push("hevc");
          } catch (e) {}
          try {
            (await n.encodingInfo(m)).supported && e.push("av1");
          } catch (e) {}
          try {
            (await n.encodingInfo(p)).supported && e.push("vp9");
          } catch (e) {}
        }
        if (n.decodingInfo != null) {
          try {
            (await n.decodingInfo(_)).supported && t.push("avc");
          } catch (e) {}
          try {
            (await n.decodingInfo(f)).supported && t.push("hevc");
          } catch (e) {}
          try {
            (await n.decodingInfo(g)).supported && t.push("av1");
          } catch (e) {}
          try {
            (await n.decodingInfo(h)).supported && t.push("vp9");
          } catch (e) {}
        }
      }
      return { supportedEncoders: e.join(","), supportedDecoders: t.join(",") };
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
    async function J() {
      var e = await Promise.all([
          o("WAWebChatThreadLoggingUtils").getMeHasUsername(),
          o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin(),
        ]),
        t = e[0],
        n = e[1],
        r = o("WAWebUserPrefsUsername").getUsernameState(),
        a;
      return (
        r === "ACTIVE"
          ? (a = o("WAWebWamEnumUsernameState").USERNAME_STATE.ACTIVATED)
          : r === "RESERVED" &&
            (a = o("WAWebWamEnumUsernameState").USERNAME_STATE.RESERVED),
        { hasUsername: t, hasUsernamePin: n, usernameState: a }
      );
    }
    async function Z() {
      var e = new Set(),
        t = 0,
        n = new Set(),
        a = 0,
        i = await r("WAWebLidAwareContactsDB").all(),
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
      return {
        usernameOnlyContactsSize: t,
        deprecatedContactsSize: e.size,
        uniquePhoneNumberContactsSizeWithUsername: n.size,
        contactsRequiringSyncBeforeDisplaySize: a,
      };
    }
    ((l.logDailyStats = N),
      (l.getLidMigrationStatus = w),
      (l.classifyGroupParticipants = O),
      (l.tallyNonMemberPnOnlyGroup = W));
  },
  98,
);
