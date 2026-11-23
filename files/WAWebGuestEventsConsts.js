__d(
  "WAWebGuestEventsConsts",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["LOADING", "LANDING", "DOWNLOAD_CTA"]),
      l = n("$InternalEnum").Mirrored(["SUCCESS", "ERROR", "WA_WEB_CONFLICT"]),
      s = 24,
      u = "src",
      c = "ntype",
      d = "notification",
      m = new Set(["event_link", "event_link_android_fallback"]);
    ((i.GuestEventsScreens = e),
      (i.GuestEventsBackendInitResult = l),
      (i.GUEST_EVENTS_INFO_ROW_ICON_SIZE = s),
      (i.GUEST_EVENTS_ENTRY_SOURCE_PARAM = u),
      (i.GUEST_EVENTS_NOTIFICATION_TYPE_PARAM = c),
      (i.GUEST_EVENTS_NOTIFICATION_ENTRY_SOURCE = d),
      (i.GUEST_EVENTS_EVENT_LINK_ENTRY_SOURCES = m));
  },
  66,
);
