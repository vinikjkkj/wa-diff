__d(
  "WAWebWamLabelEventReporter",
  ["$InternalEnum", "WAWebLabelEventWamEvent", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      CHAT_HEADER: "chat_header",
      CONTACT_INFO: "contact_info",
      GROUP_INFO: "group_info",
      CHAT_OVERFLOW: "chat_overflow",
      CHAT_LIST_CONTEXT_MENU: "chat_list_context_menu",
      LIST_SETTINGS: "list_settings",
      LIST_NUX: "list_nux",
      BROADCAST_LIST_CHAT_INFO_OVERFLOW: "broadcast_list_chat_info_overflow",
    });
    function s(e, t, n, r, a, i, l, s) {
      var u = { labelOperation: e };
      (t != null && (u.labelCount = t),
        n && (u.labelTarget = n),
        r != null && o("WAWebMobilePlatforms").isSMB() && (u.threadIdHmac = r),
        a != null && (u.predefinedLabelNumber = a),
        i != null && (u.customLabelTitle = i),
        l != null && (u.entryPointConversionSource = l),
        s != null && (u.labelOperationEntryPoint = s));
      var c = new (o("WAWebLabelEventWamEvent").LabelEventWamEvent)(u);
      c.commit();
    }
    ((l.LabelOperationEntryPoints = e), (l.logLabelOperationEvent = s));
  },
  98,
);
