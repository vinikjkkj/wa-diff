__d(
  "WAWebDailyAggregatedStats",
  ["$InternalEnum", "WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        NARRATIVE_APPEAR: 1,
        DIALOG_APPEAR: 2,
        DIALOG_SELECT: 3,
      }),
      s = 1440 * 60 * 1e3,
      u = 21 * s,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.startTime = o("WAWebBaseModel").prop()),
            (t.pttCancelBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttCancelGroup = o("WAWebBaseModel").prop(0)),
            (t.pttCancelIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttCancelNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttDraftReviewBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttDraftReviewGroup = o("WAWebBaseModel").prop(0)),
            (t.pttDraftReviewIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttDraftReviewNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttFastplaybackBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttFastplaybackGroup = o("WAWebBaseModel").prop(0)),
            (t.pttFastplaybackIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttFastplaybackNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttLockBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttLockGroup = o("WAWebBaseModel").prop(0)),
            (t.pttLockIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttLockNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttPlaybackBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttPlaybackGroup = o("WAWebBaseModel").prop(0)),
            (t.pttPlaybackIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttPlaybackNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttRecordBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttRecordGroup = o("WAWebBaseModel").prop(0)),
            (t.pttRecordIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttRecordNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttSendBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttSendGroup = o("WAWebBaseModel").prop(0)),
            (t.pttSendIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttSendNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttPausedRecordBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttPausedRecordGroup = o("WAWebBaseModel").prop(0)),
            (t.pttPausedRecordIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttPausedRecordNewsletter = o("WAWebBaseModel").prop(0)),
            (t.pttOutOfChatBroadcast = o("WAWebBaseModel").prop(0)),
            (t.pttOutOfChatGroup = o("WAWebBaseModel").prop(0)),
            (t.pttOutOfChatIndividual = o("WAWebBaseModel").prop(0)),
            (t.pttOutOfChatNewsletter = o("WAWebBaseModel").prop(0)),
            (t.goldenBoxContactNarrativeAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.goldenBoxContactDialogAppearCount = o("WAWebBaseModel").prop(0)),
            (t.goldenBoxContactDialogSelectCount = o("WAWebBaseModel").prop(0)),
            (t.goldenBoxGroupNarrativeAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.goldenBoxGroupDialogAppearCount = o("WAWebBaseModel").prop(0)),
            (t.goldenBoxGroupDialogSelectCount = o("WAWebBaseModel").prop(0)),
            (t.infoScreenContactNarrativeAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.infoScreenContactDialogAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.infoScreenContactDialogSelectCount =
              o("WAWebBaseModel").prop(0)),
            (t.infoScreenGroupNarrativeAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.infoScreenGroupDialogAppearCount = o("WAWebBaseModel").prop(0)),
            (t.infoScreenGroupDialogSelectCount = o("WAWebBaseModel").prop(0)),
            (t.chatsListNarrativeAppearCount = o("WAWebBaseModel").prop(0)),
            (t.chatsListDialogAppearCount = o("WAWebBaseModel").prop(0)),
            (t.chatsListDialogSelectCount = o("WAWebBaseModel").prop(0)),
            (t.statusListNarrativeAppearCount = o("WAWebBaseModel").prop(0)),
            (t.statusListDialogAppearCount = o("WAWebBaseModel").prop(0)),
            (t.statusListDialogSelectCount = o("WAWebBaseModel").prop(0)),
            (t.callingScreenAudioNarrativeAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.callingScreenAudioDialogAppearCount =
              o("WAWebBaseModel").prop(0)),
            (t.callingScreenAudioDialogSelectCount =
              o("WAWebBaseModel").prop(0)),
            (t.prinaLastEvent = o("WAWebBaseModel").prop(0)),
            (t.communityTabGroupNavigations = o("WAWebBaseModel").prop(0)),
            (t.communityTabToHomeViews = o("WAWebBaseModel").prop(0)),
            (t.communityTabViews = o("WAWebBaseModel").prop(0)),
            (t.communityTabViewsViaContextMenu = o("WAWebBaseModel").prop(0)),
            (t.communityNoActionTabViews = o("WAWebBaseModel").prop(0)),
            (t.communityHome = o("WAWebBaseModel").prop(function () {
              return {};
            })),
            (t.pnhCagActions = o("WAWebBaseModel").prop(function () {
              return {};
            })),
            (t.animatedEmojiSend = o("WAWebBaseModel").prop(0)),
            (t.singleEmojiSend = o("WAWebBaseModel").prop(0)),
            (t.emojiReply = o("WAWebBaseModel").prop(0)),
            (t.kicGroupNotificationTaps = o("WAWebBaseModel").prop(0)),
            (t.kicGroupNotifications = o("WAWebBaseModel").prop(0)),
            (t.kicNotificationTaps = o("WAWebBaseModel").prop(0)),
            (t.kicNotifications = o("WAWebBaseModel").prop(0)),
            (t.chatLockFolderChatsCount = o("WAWebBaseModel").prop(0)),
            (t.chatLockFolderOpenCount = o("WAWebBaseModel").prop(0)),
            (t.chatLockLockFolderHidden = o("WAWebBaseModel").prop(null)),
            (t.chatLockNewAddChatCount = o("WAWebBaseModel").prop(0)),
            (t.chatLockNewRemoveChatCount = o("WAWebBaseModel").prop(0)),
            (t.chatLockSecretCodeActive = o("WAWebBaseModel").prop(null)),
            (t.aboutCreationStartedCount = o("WAWebBaseModel").prop(0)),
            (t.aboutCreationVisitCount = o("WAWebBaseModel").prop(0)),
            (t.aboutFailureCount = o("WAWebBaseModel").prop(0)),
            (t.aboutSuccessCount = o("WAWebBaseModel").prop(0)),
            (t.aboutChatBubbleTapCount = o("WAWebBaseModel").prop(0)),
            (t.aboutChatConsumptionCount = o("WAWebBaseModel").prop(0)),
            (t.aboutMessageSendCount = o("WAWebBaseModel").prop(0)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.initialize = function () {
            e.prototype.initialize.call(this);
          }),
          (n.getEndTime = function () {
            return this.startTime + s;
          }),
          (n.shouldBeSubmitted = function () {
            return !this.isExpired() && this.getEndTime() < Date.now();
          }),
          (n.isExpired = function () {
            var e = Date.now() - u;
            return this.startTime < e;
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "daily-aggregated-stats";
    var d = o("WAWebBaseModel").defineModel(c);
    ((l.PrinaDailyActionType = e), (l.DailyAggregatedStats = d));
  },
  98,
);
