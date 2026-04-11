__d(
  "WASmaxOutPushConfigAppleClientMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.itemJid,
        r = e.itemMute,
        a = e.itemNotify,
        i = e.itemCall,
        l = o("WASmaxJsx").smax("item", {
          jid: (t = o("WAWap")).JID(n),
          mute: o("WASmaxAttrs").OPTIONAL(t.INT, r),
          notify: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          call: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
        });
      return l;
    }
    function s(t) {
      var n,
        r,
        a = t.itemArgs,
        i = t.configPlatform,
        l = t.hasConfigVersion2,
        s = t.configId,
        u = t.configVoip,
        c = t.configPreview,
        d = t.configDefault,
        m = t.configGroups,
        p = t.configCall,
        _ = t.configStatusSound,
        f = t.configLg,
        g = t.configLc,
        h = t.configBackgroundLocation,
        y = t.configNseVer,
        C = t.configNseCall,
        b = t.configNseRead,
        v = t.configNseRetry,
        S = t.configRegPush,
        R = t.configPkey,
        L = t.configVoipPayloadType,
        E = t.configSettings,
        k = t.configAppMute,
        I = t.configAppleWatchId,
        T = t.configAppleWatchPkey,
        D = o("WASmaxJsx").smax(
          "config",
          {
            platform: (n = o("WAWap")).CUSTOM_STRING(i),
            version: (r = o("WASmaxAttrs")).OPTIONAL_LITERAL("2", l),
            id: r.OPTIONAL(n.CUSTOM_STRING, s),
            voip: r.OPTIONAL(n.CUSTOM_STRING, u),
            preview: n.CUSTOM_STRING(c),
            default: n.CUSTOM_STRING(d),
            groups: n.CUSTOM_STRING(m),
            call: n.CUSTOM_STRING(p),
            status_sound: r.OPTIONAL(n.CUSTOM_STRING, _),
            lg: n.CUSTOM_STRING(f),
            lc: n.CUSTOM_STRING(g),
            background_location: r.OPTIONAL(n.CUSTOM_STRING, h),
            nse_ver: r.OPTIONAL(n.CUSTOM_STRING, y),
            nse_call: r.OPTIONAL(n.CUSTOM_STRING, C),
            nse_read: r.OPTIONAL(n.CUSTOM_STRING, b),
            nse_retry: r.OPTIONAL(n.CUSTOM_STRING, v),
            reg_push: r.OPTIONAL(n.CUSTOM_STRING, S),
            pkey: r.OPTIONAL(n.CUSTOM_STRING, R),
            voip_payload_type: n.CUSTOM_STRING(L),
            settings: r.OPTIONAL(n.INT, E),
            app_mute: r.OPTIONAL(n.INT, k),
            apple_watch_id: r.OPTIONAL(n.CUSTOM_STRING, I),
            apple_watch_pkey: r.OPTIONAL(n.CUSTOM_STRING, T),
          },
          o("WASmaxChildren").REPEATED_CHILD(e, a, 0, 1 / 0),
        );
      return D;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeAppleClientItem = e), (l.mergeAppleClientMixin = u));
  },
  98,
);
