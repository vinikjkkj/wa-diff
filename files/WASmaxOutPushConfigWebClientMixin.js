__d(
  "WASmaxOutPushConfigWebClientMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.configEndpoint,
        r = e.configAuth,
        a = e.configP256dh,
        i = e.configLg,
        l = e.configLc,
        s = o("WASmaxJsx").smax("config", {
          platform: "web",
          endpoint: (t = o("WAWap")).CUSTOM_STRING(n),
          auth: t.CUSTOM_STRING(r),
          p256dh: t.CUSTOM_STRING(a),
          lg: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
          lc: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, l),
        });
      return s;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeWebClientMixin = s;
  },
  98,
);
