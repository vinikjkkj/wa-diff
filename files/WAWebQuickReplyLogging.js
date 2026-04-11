__d(
  "WAWebQuickReplyLogging",
  [
    "WAWebQuickReplyWamEvent",
    "WAWebWamEnumQuickReplyAction",
    "WAWebWamEnumQuickReplyEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SETTINGS_ADDED,
        quickReplyEntryPoint: o("WAWebWamEnumQuickReplyEntryPoint")
          .QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_SETTINGS_MENU,
      });
      e.commit();
    }
    function s() {
      var e = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SETTINGS_ADD_CLICK,
        quickReplyEntryPoint: o("WAWebWamEnumQuickReplyEntryPoint")
          .QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_SETTINGS_MENU,
      });
      e.commit();
    }
    function u() {
      var e = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SETTINGS_ADD_ABANDONED,
        quickReplyEntryPoint: o("WAWebWamEnumQuickReplyEntryPoint")
          .QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_SETTINGS_MENU,
      });
      e.commit();
    }
    function c() {
      var e = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SETTINGS_DELETED,
        quickReplyEntryPoint: o("WAWebWamEnumQuickReplyEntryPoint")
          .QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_SETTINGS_MENU,
      });
      e.commit();
    }
    function d() {
      var e = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SETTINGS_EDITED,
        quickReplyEntryPoint: o("WAWebWamEnumQuickReplyEntryPoint")
          .QUICK_REPLY_ENTRY_POINT.QUICK_REPLY_ENTRY_POINT_SETTINGS_MENU,
      });
      e.commit();
    }
    function m(e) {
      var t = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .QUICK_REPLY_MESSAGE_SENT,
        quickReplyEntryPoint: e,
      });
      t.commit();
    }
    ((l.logQuickReplyAddedEvent = e),
      (l.logQuickReplyAddClickEvent = s),
      (l.logQuickReplyAddAbandonEvent = u),
      (l.logQuickReplyDeleteEvent = c),
      (l.logQuickReplyEditEvent = d),
      (l.logQuickReplySendEvent = m));
  },
  98,
);
