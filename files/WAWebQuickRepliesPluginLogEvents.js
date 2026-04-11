__d(
  "WAWebQuickRepliesPluginLogEvents",
  [
    "WAWebQuickReplyWamEvent",
    "WAWebWamEnumQuickReplyAction",
    "WAWebWamEnumQuickReplyEntryPoint",
    "WAWebWamEnumQuickReplyType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_CHAT_IMPRESSION,
        quickReplyCount: e,
        quickReplyEntryPoint: t
          ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
          : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
      });
      n.commit();
    }
    function s(e) {
      e === void 0 && (e = !1);
      var t = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_CHAT_CLICK,
        quickReplyKeywordMatched: !1,
        quickReplyEntryPoint: e
          ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
          : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
      });
      t.commit();
    }
    function u(e) {
      e === void 0 && (e = !1);
      var t = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_CHAT_CLICK_CANCEL,
        quickReplyEntryPoint: e
          ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
          : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
      });
      t.commit();
    }
    function c(e) {
      e === void 0 && (e = !1);
      var t = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SMART_DEFAULT_CLICK,
        quickReplyKeywordMatched: !1,
        quickReplyEntryPoint: e
          ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
          : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
      });
      t.commit();
    }
    function d(e) {
      e === void 0 && (e = !1);
      var t = new (o("WAWebQuickReplyWamEvent").QuickReplyWamEvent)({
        quickReplyAction: o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION
          .ACTION_SMART_DEFAULT_CLICK,
        quickReplyKeywordMatched: !1,
        quickReplyEntryPoint: e
          ? o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_ATTACHMENT_PANEL
          : o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT
              .QUICK_REPLY_ENTRY_POINT_KEYBOARD,
        quickReplyType: o("WAWebWamEnumQuickReplyType").QUICK_REPLY_TYPE
          .QUICK_REPLY_TYPE_PIX_KEY,
      });
      t.commit();
    }
    ((l.logFilterEvent = e),
      (l.logSelectEvent = s),
      (l.logCancelEvent = u),
      (l.logSmartDefaultSelectEvent = c),
      (l.logPixSmartSelectEvent = d));
  },
  98,
);
