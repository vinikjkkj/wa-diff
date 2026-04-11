__d(
  "WAWebPreCallUserJourneyLogger",
  [
    "WARandomHex",
    "WAWebPreCallUserJourneyCallsTabWamEvent",
    "WAWebPreCallUserJourneyChatThreadWamEvent",
    "WAWebWamEnumPreCallActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        this.$1 = o("WARandomHex").randomHex(16);
      }
      var t = e.prototype;
      return (
        (t.clickCreateVideoCallLink = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
            subSurface: t,
          });
        }),
        (t.clickVideoCallLinkShare = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL_LINK_SHARE,
            subSurface: t,
          });
        }),
        (t.clickVoiceCallLinkShare = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_VOICE_CALL_LINK_SHARE,
            subSurface: t,
          });
        }),
        (t.dismiss = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DISMISS,
            subSurface: t,
          });
        }),
        (t.clickCreateEvent = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
            subSurface: t,
          });
        }),
        (t.clickEventMore = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE,
            subSurface: t,
          });
        }),
        (t.clickEventMoreDetail = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE_DETAIL,
            subSurface: t,
          });
        }),
        (t.clickEventDetail = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_DETAIL,
            subSurface: t,
          });
        }),
        (t.commitEvent = function (n) {
          new (o(
            "WAWebPreCallUserJourneyCallsTabWamEvent",
          ).PreCallUserJourneyCallsTabWamEvent)(
            babelHelpers.extends(
              { appSessionId: e.appSessionId, userJourneyFunnelId: this.$1 },
              n,
            ),
          ).commit();
        }),
        (t.clickCallDropdown = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CALL_DROPDOWN,
            subSurface: t,
          });
        }),
        (t.clickAddContact = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_ADD_CONTACT,
            subSurface: t,
          });
        }),
        (t.selectParticipant = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.SELECT_PARTICIPANT,
            subSurface: t,
          });
        }),
        (t.deselectParticipant = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DESELECT_PARTICIPANT,
            subSurface: t,
          });
        }),
        (t.clickAudioCall = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
            subSurface: t,
          });
        }),
        (t.clickVideoCall = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL,
            subSurface: t,
          });
        }),
        (t.clickCreateEventChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
            subSurface: t,
          });
        }),
        (t.clickCreateVideoCallLinkChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
            subSurface: t,
          });
        }),
        (t.dismissChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DISMISS,
            subSurface: t,
          });
        }),
        (t.commitChatThreadEvent = function (n) {
          new (o(
            "WAWebPreCallUserJourneyChatThreadWamEvent",
          ).PreCallUserJourneyChatThreadWamEvent)(
            babelHelpers.extends(
              { appSessionId: e.appSessionId, userJourneyFunnelId: this.$1 },
              n,
            ),
          ).commit();
        }),
        e
      );
    })();
    ((e.appSessionId = o("WARandomHex").randomHex(16)),
      (l.PreCallUserJourneyLogger = e));
  },
  98,
);
