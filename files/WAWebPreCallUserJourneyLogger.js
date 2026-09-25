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
    "WAWebWamEnumSubSurface",
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
    var c = null,
      d = null;
    function m() {
      return !o(
        "WAWebCallUserJourneyGating",
      ).isCallUserJourneyLoggingEnabled() || c == null
        ? {}
        : { surfaceSessionId: c };
    }
    function p() {
      var e = d;
      if (
        !o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() ||
        e == null
      )
        return {};
      var t = { surfaceSessionId: e.surfaceSessionId };
      return (
        e.groupSize != null && (t.groupSize = e.groupSize),
        e.isCommunityGroup != null && (t.isCommunityGroup = e.isCommunityGroup),
        t
      );
    }
    function _(e) {
      var t = {};
      return (
        (e == null ? void 0 : e.callSizeType) != null &&
          (t.callSizeType = e.callSizeType),
        (e == null ? void 0 : e.itemPosition) != null &&
          (t.itemPosition = e.itemPosition),
        t
      );
    }
    function f(e) {
      return e == null ? {} : { subSurface: e };
    }
    function g() {
      return o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled();
    }
    var h = (function () {
      function t() {
        this.$1 = o("WARandomHex").randomHex(16);
      }
      ((t.startCallsTabSession = function () {
        c = o("WARandomHex").randomHex(16);
      }),
        (t.endCallsTabSession = function () {
          c = null;
        }),
        (t.startChatThreadSession = function (t) {
          d = {
            surfaceSessionId: o("WARandomHex").randomHex(16),
            groupSize: t.groupSize,
            isCommunityGroup: t.isCommunityGroup,
          };
        }),
        (t.endChatThreadSession = function () {
          d = null;
        }));
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
        (n.openCallsTab = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .OPEN_CALLS_TAB,
            { subSurface: t },
          );
        }),
        (n.clickCallInfo = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_CALL_INFO,
            babelHelpers.extends({ subSurface: t }, _(n)),
          );
        }),
        (n.longPress = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.LONG_PRESS,
            babelHelpers.extends({ subSurface: t }, _(n)),
          );
        }),
        (n.deleteCallLog = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DELETE_CALL_LOG,
            babelHelpers.extends({ subSurface: t }, _(n)),
          );
        }),
        (n.sendMessage = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .SEND_MESSAGE,
            babelHelpers.extends({ subSurface: t }, _(n)),
          );
        }),
        (n.selectParticipantFromCallsTab = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .SELECT_PARTICIPANT,
            babelHelpers.extends({ subSurface: t }, _(n)),
          );
        }),
        (n.clickAudioCallFromCallsTab = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_AUDIO_CALL,
            babelHelpers.extends({}, f(t), _(n)),
          );
        }),
        (n.clickVideoCallFromCallsTab = function (t, n) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_VIDEO_CALL,
            babelHelpers.extends({}, f(t), _(n)),
          );
        }),
        (n.clickPlusButton = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_PLUS_BUTTON,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickDialPadButton = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_DIAL_PAD_BUTTON,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.dialerInputStarted = function () {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DIALER_INPUT_STARTED,
            { subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER },
          );
        }),
        (n.dialerInputPasted = function () {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DIALER_INPUT_PASTED,
            { subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER },
          );
        }),
        (n.dialerInputCursorEngaged = function () {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DIALER_INPUT_CURSOR_ENGAGED,
            { subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER },
          );
        }),
        (n.dialerInputCopied = function () {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DIALER_INPUT_COPIED,
            { subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER },
          );
        }),
        (n.dialerInputCut = function () {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .DIALER_INPUT_CUT,
            { subSurface: o("WAWebWamEnumSubSurface").SUB_SURFACE.DIALER },
          );
        }),
        (n.tapFavoritesAdd = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .TAP_FAVORITES_ADD,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.tapFavoritesSeeAll = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .TAP_FAVORITES_SEE_ALL,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickCallLink = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_CALL_LINK,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickCreateAudioCallLink = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_CREATE_AUDIO_CALL_LINK,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickAudioCallLinkShare = function (t) {
          this.$2(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_AUDIO_CALL_LINK_SHARE,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.$2 = function (t, n) {
          g() &&
            this.commitEvent(
              babelHelpers.extends({}, n, { preCallActionType: t }),
            );
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
              m(),
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
        (n.openAttachmentTray = function (t) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .OPEN_ATTACHMENT_TRAY,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickICCE = function (t) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE.CLICK_ICCE,
            { subSurface: t },
          );
        }),
        (n.clickCallConfirmButton = function (t, n, r) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_CALL_CONFIRM_BUTTON,
            babelHelpers.extends({ subSurface: t }, s(n), u(r)),
          );
        }),
        (n.clickRejoin = function (t) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_REJOIN,
            { subSurface: t },
          );
        }),
        (n.clickCallLinkFromChat = function (t) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_CALL_LINK,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.clickVideoCallLinkShareFromChat = function (t) {
          this.$3(
            o("WAWebWamEnumPreCallActionType").PRE_CALL_ACTION_TYPE
              .CLICK_VIDEO_CALL_LINK_SHARE,
            babelHelpers.extends({}, f(t)),
          );
        }),
        (n.$3 = function (t, n) {
          g() &&
            this.commitChatThreadEvent(
              babelHelpers.extends({}, n, { preCallActionType: t }),
            );
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
              p(),
              r,
            ),
          ).commit();
        }),
        t
      );
    })();
    ((h.appSessionId = o("WARandomHex").randomHex(16)),
      (l.PreCallUserJourneyLogger = h));
  },
  98,
);
