__d(
  "WAWebPreCallUserJourneyLogger",
  [
    "WARandomHex",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyAppSessionId",
    "WAWebCallUserJourneyGating",
    "WAWebPreCallUserJourneyCallsTabWamEvent",
    "WAWebPreCallUserJourneyChatThreadWamEvent",
    "WAWebUserJourneyEventMs",
    "WAWebWamEnumPreCallActionType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
        return {};
      var e = o("WAWebUserJourneyEventMs").userJourneyEventMs();
      return e == null ? {} : { userJourneyEventMs: e };
    }
    function s(e) {
      return o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled()
        ? { isVideoCall: e }
        : {};
    }
    function u(e) {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled())
        return {};
      var t = o("WAWebCallRandomIdStore").getOrCreateCallRandomId(e);
      return t == null ? {} : { callRandomId: t };
    }
    var c = (function () {
      function t() {
        this.$1 = o("WARandomHex").randomHex(16);
      }
      var n = t.prototype;
      return (
        (n.clickCreateVideoCallLink = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
            subSurface: t,
          });
        }),
        (n.clickVideoCallLinkShare = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL_LINK_SHARE,
            subSurface: t,
          });
        }),
        (n.clickVoiceCallLinkShare = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_VOICE_CALL_LINK_SHARE,
            subSurface: t,
          });
        }),
        (n.dismiss = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DISMISS,
            subSurface: t,
          });
        }),
        (n.clickCreateEvent = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
            subSurface: t,
          });
        }),
        (n.clickEventMore = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE,
            subSurface: t,
          });
        }),
        (n.clickEventMoreDetail = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_MORE_DETAIL,
            subSurface: t,
          });
        }),
        (n.clickEventDetail = function (t) {
          this.commitEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_EVENT_DETAIL,
            subSurface: t,
          });
        }),
        (n.commitEvent = function (r) {
          new (o(
            "WAWebPreCallUserJourneyCallsTabWamEvent",
          ).PreCallUserJourneyCallsTabWamEvent)(
            babelHelpers.extends(
              {
                appSessionId: o(
                  "WAWebCallUserJourneyAppSessionId",
                ).callUserJourneyAppSessionId(t.appSessionId),
                userJourneyFunnelId: this.$1,
              },
              e(),
              r,
            ),
          ).commit();
        }),
        (n.clickCallDropdown = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CALL_DROPDOWN,
            subSurface: t,
          });
        }),
        (n.clickAddContact = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_ADD_CONTACT,
            subSurface: t,
          });
        }),
        (n.selectParticipant = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.SELECT_PARTICIPANT,
            subSurface: t,
          });
        }),
        (n.deselectParticipant = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DESELECT_PARTICIPANT,
            subSurface: t,
          });
        }),
        (n.clickAudioCall = function (t, n) {
          this.commitChatThreadEvent(
            babelHelpers.extends(
              {
                preCallActionType: o("WAWebWamEnumPreCallActionType")
                  .PRE_CALL_ACTION_TYPE.CLICK_AUDIO_CALL,
                subSurface: t,
              },
              s(!1),
              u(n),
            ),
          );
        }),
        (n.clickVideoCall = function (t, n) {
          this.commitChatThreadEvent(
            babelHelpers.extends(
              {
                preCallActionType: o("WAWebWamEnumPreCallActionType")
                  .PRE_CALL_ACTION_TYPE.CLICK_VIDEO_CALL,
                subSurface: t,
              },
              s(!0),
              u(n),
            ),
          );
        }),
        (n.clickCreateEventChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_EVENT,
            subSurface: t,
          });
        }),
        (n.clickCreateVideoCallLinkChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.CLICK_CREATE_VIDEO_CALL_LINK,
            subSurface: t,
          });
        }),
        (n.dismissChatThread = function (t) {
          this.commitChatThreadEvent({
            preCallActionType: o("WAWebWamEnumPreCallActionType")
              .PRE_CALL_ACTION_TYPE.DISMISS,
            subSurface: t,
          });
        }),
        (n.commitChatThreadEvent = function (r) {
          new (o(
            "WAWebPreCallUserJourneyChatThreadWamEvent",
          ).PreCallUserJourneyChatThreadWamEvent)(
            babelHelpers.extends(
              {
                appSessionId: o(
                  "WAWebCallUserJourneyAppSessionId",
                ).callUserJourneyAppSessionId(t.appSessionId),
                userJourneyFunnelId: this.$1,
              },
              e(),
              r,
            ),
          ).commit();
        }),
        t
      );
    })();
    ((c.appSessionId = o("WARandomHex").randomHex(16)),
      (l.PreCallUserJourneyLogger = c));
  },
  98,
);
