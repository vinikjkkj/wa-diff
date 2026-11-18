__d(
  "WAWebSharableEventGatingUtils",
  ["$InternalEnum", "WALogger", "WAWebABProps", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        Futureproof: 0,
        FutureproofCustomText: 1,
        FullBubble: 2,
      });
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_v2_invitation_message_version",
      );
    }
    function c() {
      return u() > Number(s.Futureproof);
    }
    function d() {
      return u() >= Number(s.FullBubble);
    }
    var m = n("$InternalEnum")({
      MessageBubble: 1,
      MessageContextMenu: 2,
      EventDetails: 4,
      RsvpConfirmation: 8,
    });
    function p(e) {
      var t = Number(e),
        n = o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_add_to_calendar",
        );
      return Math.floor(n / t) % 2 === 1;
    }
    var _ = n("$InternalEnum")({
      EventsList: 1,
      IndividualChatAttachmentTray: 2,
      GroupChatAttachmentTray: 4,
      NewChat: 8,
      IndividualChatDateDetector: 16,
      GroupChatDateDetector: 32,
    });
    function f(e) {
      var t = Number(e),
        n = o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_entry_points_creation",
        );
      return Math.floor(n / t) % 2 === 1;
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "events_v2_enable_notifications",
        ) === !0
      );
    }
    function h() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_on_companion",
        ) === !0
      );
    }
    function y() {
      return (
        h() &&
        o("WAWebVoipGatingUtils").isCallingEnabled() &&
        !o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()
      );
    }
    var C = new Set();
    function b(t) {
      var n = h();
      return (
        !n &&
          !C.has(t) &&
          (C.add(t),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][gate] ",
                " skipped, enable_events_v2_on_companion is off",
              ])),
            t,
          )),
        n
      );
    }
    ((l.SharableEventInviteReceivingVersion = s),
      (l.isSharableEventInviteReceiveEnabled = c),
      (l.shouldRenderSharableEventInviteBubble = d),
      (l.SharableEventAddToCalendarEntryPoint = m),
      (l.isSharableEventAddToCalendarEnabled = p),
      (l.SharableEventCreationEntryPoint = _),
      (l.isSharableEventCreationEnabled = f),
      (l.isSharableEventNotificationsEnabled = g),
      (l.isEventsV2OnCompanionEnabled = h),
      (l.canScheduleSharableEventCallsInBrowser = y),
      (l.isEventsV2OnCompanionEnabledForAction = b));
  },
  98,
);
