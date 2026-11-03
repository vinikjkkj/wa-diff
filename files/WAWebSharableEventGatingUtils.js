__d(
  "WAWebSharableEventGatingUtils",
  ["$InternalEnum", "WALogger", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = n("$InternalEnum"))({
        Futureproof: 0,
        FutureproofCustomText: 1,
        FullBubble: 2,
      });
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_v2_invitation_message_version",
      );
    }
    function d() {
      return c() > Number(u.Futureproof);
    }
    function m() {
      return c() >= Number(u.FullBubble);
    }
    var p = s({
      MessageBubble: 1,
      MessageContextMenu: 2,
      EventDetails: 4,
      RsvpConfirmation: 8,
    });
    function _(e) {
      var t = Number(e),
        n = o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_add_to_calendar",
        );
      return Math.floor(n / t) % 2 === 1;
    }
    var f = s({
      EventsList: 1,
      IndividualChatAttachmentTray: 2,
      GroupChatAttachmentTray: 4,
      NewChat: 8,
      IndividualChatDateDetector: 16,
      GroupChatDateDetector: 32,
    });
    function g(e) {
      var t = Number(e),
        n = o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_entry_points_creation",
        );
      return Math.floor(n / t) % 2 === 1;
    }
    var h = s({
      EventsList: 1,
      CallsTabHScroll: 2,
      NewCallPicker: 4,
      GroupChat: 8,
      IndividualChat: 16,
    });
    function y(e) {
      var t = Number(e),
        n = o("WAWebABProps").getABPropConfigValue(
          "enable_scheduled_calls_v2_entry_points_creation",
        );
      return Math.floor(n / t) % 2 === 1;
    }
    function C() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "events_v2_enable_notifications",
        ) === !0
      );
    }
    function b() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_on_companion",
        ) === !0
      );
    }
    var v = new Set();
    function S(t) {
      var n = b();
      return (
        !n &&
          !v.has(t) &&
          (v.add(t),
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
    function R() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_events_v2_invite_message_with_datetime",
        ) === !0
      );
    }
    ((l.SharableEventInviteReceivingVersion = u),
      (l.isSharableEventInviteReceiveEnabled = d),
      (l.shouldRenderSharableEventInviteBubble = m),
      (l.SharableEventAddToCalendarEntryPoint = p),
      (l.isSharableEventAddToCalendarEnabled = _),
      (l.SharableEventCreationEntryPoint = f),
      (l.isSharableEventCreationEnabled = g),
      (l.SharableScheduledCallCreationEntryPoint = h),
      (l.isSharableScheduledCallCreationEnabled = y),
      (l.isSharableEventNotificationsEnabled = C),
      (l.isEventsV2OnCompanionEnabled = b),
      (l.isEventsV2OnCompanionEnabledForAction = S),
      (l.isSharableEventInviteDatetimeEnabled = R));
  },
  98,
);
