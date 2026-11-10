__d(
  "WAWebStartupLaunchAttribution",
  [],
  function (t, n, r, o, a, i) {
    var e = /^([A-Z_]{1,32})~([a-z0-9_.-]{1,64})$/,
      l = new Set([
        "JUMPLIST_NEW_CHAT",
        "JUMPLIST_NEW_CALL",
        "JUMPLIST_CONTACT",
        "SHARE_TARGET",
        "PROTOCOL_TEL",
        "PROTOCOL_MS_VOIP_CALL",
        "PROTOCOL_MS_VOIP_VIDEO",
        "PROTOCOL_IM",
        "PROTOCOL_MS_IPMESSAGING",
        "PROTOCOL_WHATSAPP",
        "PROTOCOL_OTHER",
        "LAUNCH",
        "LAUNCH_ARGUMENTS",
        "TOAST",
        "STARTUP_TASK",
        "OTHER",
      ]),
      s = "-",
      u = "other",
      c = new Set([
        "phone_link",
        "start_recommended",
        "start_search",
        "start_menu",
        "search",
        "people_app",
        "contact_card",
        "lock_screen",
        "oobe",
        "scoobe",
        "share_sheet",
        "taskbar",
        "widgets",
        "notification_center",
        "copilot",
        "outlook",
        "teams",
        "edge",
      ]),
      d = /^(microsoft|windows)(\.[a-z0-9]+)+$/;
    function m(e) {
      var t = p(new URLSearchParams(e).get("launchAttribution"));
      return t != null ? "launch_attribution:" + t : null;
    }
    function p(t) {
      var n = t != null ? e.exec(t) : null;
      if (n == null) return null;
      var r = n[1],
        o = n[2];
      return l.has(r) ? r + ":" + _(r, o) : null;
    }
    function _(e, t) {
      return t === s
        ? s
        : e === "SHARE_TARGET"
          ? d.test(t)
            ? t
            : u
          : c.has(t)
            ? t
            : u;
    }
    i.getLaunchAttributionAppContextPart = m;
  },
  66,
);
