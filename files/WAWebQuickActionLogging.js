__d(
  "WAWebQuickActionLogging",
  [
    "WAWebWamEnumWebcQuickActionEventType",
    "WAWebWamEnumWebcQuickActionId",
    "WAWebWamEnumWebcQuickActionSurface",
    "WAWebWebcQuickActionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        status: o("WAWebWamEnumWebcQuickActionSurface")
          .WEBC_QUICK_ACTION_SURFACE.STATUS,
        channels: o("WAWebWamEnumWebcQuickActionSurface")
          .WEBC_QUICK_ACTION_SURFACE.CHANNELS,
        community_navigation: o("WAWebWamEnumWebcQuickActionSurface")
          .WEBC_QUICK_ACTION_SURFACE.COMMUNITY_NAVIGATION,
      },
      u = {
        text_status: (e = o("WAWebWamEnumWebcQuickActionId"))
          .WEBC_QUICK_ACTION_ID.TEXT_STATUS,
        photo_video: e.WEBC_QUICK_ACTION_ID.PHOTO_VIDEO,
        create_channel: e.WEBC_QUICK_ACTION_ID.CREATE_CHANNEL,
        find_channels: e.WEBC_QUICK_ACTION_ID.FIND_CHANNELS,
        community_info: e.WEBC_QUICK_ACTION_ID.COMMUNITY_INFO,
        community_members: e.WEBC_QUICK_ACTION_ID.COMMUNITY_MEMBERS,
        community_settings: e.WEBC_QUICK_ACTION_ID.COMMUNITY_SETTINGS,
        community_new_group: e.WEBC_QUICK_ACTION_ID.COMMUNITY_NEW_GROUP,
        community_add_existing_group:
          e.WEBC_QUICK_ACTION_ID.COMMUNITY_EXISTING_GROUP,
      },
      c = !1,
      d = new Set(),
      m = new Set();
    function p(e, t) {
      return e + ":" + t;
    }
    function _(e, t) {
      if (!d.has(e)) {
        d.add(e);
        var n = new (o(
          "WAWebWebcQuickActionWamEvent",
        ).WebcQuickActionWamEvent)();
        ((n.webcQuickActionEventType = o(
          "WAWebWamEnumWebcQuickActionEventType",
        ).WEBC_QUICK_ACTION_EVENT_TYPE.SURFACE_VIEW),
          (n.webcQuickActionSurface = s[e]),
          (n.webcQuickActionNumVisible = t),
          (n.webcQuickActionIsCustomized = c),
          n.commit());
      }
    }
    function f(e, t, n, r) {
      var a = p(e, t);
      if (!m.has(a)) {
        m.add(a);
        var i = new (o(
          "WAWebWebcQuickActionWamEvent",
        ).WebcQuickActionWamEvent)();
        ((i.webcQuickActionEventType = o(
          "WAWebWamEnumWebcQuickActionEventType",
        ).WEBC_QUICK_ACTION_EVENT_TYPE.IMPRESSION),
          (i.webcQuickActionSurface = s[e]),
          (i.webcQuickActionId = u[t]),
          (i.webcQuickActionSlotPosition = n),
          (i.webcQuickActionNumVisible = r),
          (i.webcQuickActionIsCustomized = c),
          i.commit());
      }
    }
    function g(e, t, n, r) {
      var a = new (o("WAWebWebcQuickActionWamEvent").WebcQuickActionWamEvent)();
      ((a.webcQuickActionEventType = o(
        "WAWebWamEnumWebcQuickActionEventType",
      ).WEBC_QUICK_ACTION_EVENT_TYPE.TAP),
        (a.webcQuickActionSurface = s[e]),
        (a.webcQuickActionId = u[t]),
        (a.webcQuickActionSlotPosition = n),
        (a.webcQuickActionNumVisible = r),
        (a.webcQuickActionIsCustomized = c),
        a.commit());
    }
    ((l.logQuickActionSurfaceView = _),
      (l.logQuickActionImpression = f),
      (l.logQuickActionTap = g));
  },
  98,
);
