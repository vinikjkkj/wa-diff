__d(
  "WAWebCrashlogConstants",
  ["WAWebBuildConstants", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    var e = "https://crashlogs.whatsapp.net/wa_fls_upload_check",
      s = "1063127757113399|745146ffa34413f9dbb5469f5370b7af",
      u = "https://crashlogs.whatsapp.net/wa_clb_data",
      c = "web",
      d = "web";
    (r("WAWebEnvironment").isWindows && (d = "win_hybrid"),
      r("WAWebEnvironment").isGuest && (d = "guest"));
    var m = d,
      p = (0x97e965c4439a).toString(),
      _ = "0",
      f = o("WAWebBuildConstants").DYN_ORIGIN + "web-contact-us",
      g = 0;
    ((l.CLB_CHECK_URL = e),
      (l.CLB_TOKEN = s),
      (l.CLB_URL = u),
      (l.CLB_PLATFORM = c),
      (l.CLB_SUBPLATFORM = m),
      (l.FB_APP_ID = p),
      (l.BUILD_ID = _),
      (l.TICKET_URL = f),
      (l.UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE = g));
  },
  98,
);
