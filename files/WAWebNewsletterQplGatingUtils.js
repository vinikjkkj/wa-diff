__d(
  "WAWebNewsletterQplGatingUtils",
  [
    "WAWebABProps",
    "WAWebNewsletterGatingUtils",
    "WAWebQplQuickPerformanceLoggerMarkerIds",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      [
        o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
          .CHANNEL_UNFOLLOW,
        "1",
      ],
      [
        o("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId
          .CHANNEL_FOLLOW,
        "1",
      ],
    ]);
    function s(t) {
      if (!o("WAWebNewsletterGatingUtils").isNewsletterQPLLoggingEnabled())
        return !1;
      var n = e.get(t);
      if (n == null) return !1;
      var r = o("WAWebABProps").getABPropConfigValue(
          "channels_qpl_improvements_supported_types",
        ),
        a = new Set(r.split(","));
      return a.has(n);
    }
    l.isNewsletterQplLoggingEnabledForMarkerId = s;
  },
  98,
);
