__d(
  "WAWebWamLabelEventReporter",
  [
    "$InternalEnum",
    "WAWebGetSharedSessionId",
    "WAWebLabelEventWamEvent",
    "WAWebMobilePlatforms",
    "WAWebUnifiedSession",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        CHAT_HEADER: "chat_header",
        CONTACT_INFO: "contact_info",
        GROUP_INFO: "group_info",
        CHAT_OVERFLOW: "chat_overflow",
        CHAT_LIST_CONTEXT_MENU: "chat_list_context_menu",
        LIST_SETTINGS: "list_settings",
        LIST_NUX: "list_nux",
        BROADCAST_LIST_CHAT_INFO_OVERFLOW: "broadcast_list_chat_info_overflow",
      }),
      u =
        (e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
        null
          ? e
          : o("WAWebGetSharedSessionId").getSharedSessionId();
    function c(e, t, n, r, a, i, l, s) {
      var c = { labelOperation: e };
      (t != null && (c.labelCount = t),
        n && (c.labelTarget = n),
        r != null && o("WAWebMobilePlatforms").isSMB() && (c.threadIdHmac = r),
        a != null && (c.predefinedLabelNumber = a),
        i != null && (c.customLabelTitle = i),
        l != null && (c.entryPointConversionSource = l),
        s != null && (c.labelOperationEntryPoint = s),
        (c.appSessionId = u));
      var d = new (o("WAWebLabelEventWamEvent").LabelEventWamEvent)(c);
      d.commit();
    }
    ((l.LabelOperationEntryPoints = s), (l.logLabelOperationEvent = c));
  },
  98,
);
