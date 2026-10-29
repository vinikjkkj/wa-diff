__d(
  "WAWebSharableEventAddToCalendarAction",
  [
    "WAWebABProps",
    "WAWebGuestCoreConsts",
    "WAWebGuestEventsCalendarUtils",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventStorageEnums",
    "WAWebSharableEventTiming",
    "WAWebVoipCallLinkUrl",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
        var t = o("WAWebGuestEventsCalendarUtils").getGuestEventCalendarDetails(
          {
            description: u(e),
            endTsSec: o(
              "WAWebSharableEventTiming",
            ).computeSharableEventEffectiveEndTsSec(e),
            eventLinkToken: e.id,
            eventType: "full",
            locationAddress: e.locationAddress,
            locationLat: e.locationLatitude,
            locationLong: e.locationLongitude,
            locationName: e.locationName,
            locationRegion: null,
            startTsSec: e.startTsSec,
            title: e.name,
          },
          o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN,
        );
        o("WAWebGuestEventsCalendarUtils").downloadGuestEventCalendarICSFile(
          o("WAWebGuestEventsCalendarUtils").getGuestEventCalendarICSFile(t),
        );
      }
    }
    function s(e, t) {
      return Math.min(
        t,
        e +
          o("WAWebABProps").getABPropConfigValue(
            "events_v2_hide_add_to_calendar_post_start_window_sec",
          ),
      );
    }
    function u(e) {
      var t,
        n = o("WAWebVoipCallLinkUrl").getCallLinkUrl(
          e.callLinkToken,
          e.callLinkMediaType !==
            o("WAWebSharableEventStorageEnums").SharableEventCallLinkMediaType
              .Voice,
        ),
        r = (t = e.description) == null ? void 0 : t.trim();
      return [r, n]
        .filter(function (e) {
          return e != null && e !== "";
        })
        .join("\n\n");
    }
    ((l.addSharableEventToCalendar = e),
      (l.getSharableEventAddToCalendarHiddenTsSec = s));
  },
  98,
);
