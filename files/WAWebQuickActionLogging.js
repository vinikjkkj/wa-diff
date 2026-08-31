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
      s,
      u = {
        status: (e = o("WAWebWamEnumWebcQuickActionSurface"))
          .WEBC_QUICK_ACTION_SURFACE.STATUS,
        channels: e.WEBC_QUICK_ACTION_SURFACE.CHANNELS,
        community_navigation: e.WEBC_QUICK_ACTION_SURFACE.COMMUNITY_NAVIGATION,
        chats: e.WEBC_QUICK_ACTION_SURFACE.CHATS,
        calls: e.WEBC_QUICK_ACTION_SURFACE.CALLS,
      },
      c = {
        text_status: (s = o("WAWebWamEnumWebcQuickActionId"))
          .WEBC_QUICK_ACTION_ID.TEXT_STATUS,
        photo_video: s.WEBC_QUICK_ACTION_ID.PHOTO_VIDEO,
        create_channel: s.WEBC_QUICK_ACTION_ID.CREATE_CHANNEL,
        find_channels: s.WEBC_QUICK_ACTION_ID.FIND_CHANNELS,
        community_info: s.WEBC_QUICK_ACTION_ID.COMMUNITY_INFO,
        community_members: s.WEBC_QUICK_ACTION_ID.COMMUNITY_MEMBERS,
        community_settings: s.WEBC_QUICK_ACTION_ID.COMMUNITY_SETTINGS,
        community_new_group: s.WEBC_QUICK_ACTION_ID.COMMUNITY_NEW_GROUP,
        community_add_existing_group:
          s.WEBC_QUICK_ACTION_ID.COMMUNITY_EXISTING_GROUP,
        send_document: s.WEBC_QUICK_ACTION_ID.SEND_DOCUMENT,
        add_contact: s.WEBC_QUICK_ACTION_ID.ADD_CONTACT,
        ask_meta_ai: s.WEBC_QUICK_ACTION_ID.ASK_META_AI,
        start_call: s.WEBC_QUICK_ACTION_ID.START_CALL,
        new_call_link: s.WEBC_QUICK_ACTION_ID.NEW_CALL_LINK,
        open_dialer: s.WEBC_QUICK_ACTION_ID.OPEN_DIALER,
        schedule_call: s.WEBC_QUICK_ACTION_ID.SCHEDULE_CALL,
      },
      d = !1,
      m = new Set(),
      p = new Set();
    function _(e, t) {
      return e + ":" + t;
    }
    function f(e, t) {
      if (!m.has(e)) {
        m.add(e);
        var n = new (o(
          "WAWebWebcQuickActionWamEvent",
        ).WebcQuickActionWamEvent)();
        ((n.webcQuickActionEventType = o(
          "WAWebWamEnumWebcQuickActionEventType",
        ).WEBC_QUICK_ACTION_EVENT_TYPE.SURFACE_VIEW),
          (n.webcQuickActionSurface = u[e]),
          (n.webcQuickActionNumVisible = t),
          (n.webcQuickActionIsCustomized = d),
          n.commit());
      }
    }
    function g(e) {
      var t = e.actionId,
        n = e.numActionsVisible,
        r = e.slotPosition,
        a = e.surface,
        i = _(a, t);
      if (!p.has(i)) {
        p.add(i);
        var l = new (o(
          "WAWebWebcQuickActionWamEvent",
        ).WebcQuickActionWamEvent)();
        ((l.webcQuickActionEventType = o(
          "WAWebWamEnumWebcQuickActionEventType",
        ).WEBC_QUICK_ACTION_EVENT_TYPE.IMPRESSION),
          (l.webcQuickActionSurface = u[a]),
          (l.webcQuickActionId = c[t]),
          (l.webcQuickActionSlotPosition = r),
          (l.webcQuickActionNumVisible = n),
          (l.webcQuickActionIsCustomized = d),
          l.commit());
      }
    }
    function h(e, t, n, r) {
      var a = new (o("WAWebWebcQuickActionWamEvent").WebcQuickActionWamEvent)();
      ((a.webcQuickActionEventType = o(
        "WAWebWamEnumWebcQuickActionEventType",
      ).WEBC_QUICK_ACTION_EVENT_TYPE.TAP),
        (a.webcQuickActionSurface = u[e]),
        (a.webcQuickActionId = c[t]),
        (a.webcQuickActionSlotPosition = n),
        (a.webcQuickActionNumVisible = r),
        (a.webcQuickActionIsCustomized = d),
        a.commit());
    }
    ((l.logQuickActionSurfaceView = f),
      (l.logQuickActionImpression = g),
      (l.logQuickActionTap = h));
  },
  98,
);
