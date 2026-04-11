__d(
  "WASmaxOutPushConfigAndroidClientConfigMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.configPlatform,
        a = e.configId,
        i = e.configAppid,
        l = e.configAppMute,
        s = e.configPkey,
        u = e.configVoipPayloadType,
        c = e.configNumAcc,
        d = o("WASmaxJsx").smax("config", {
          platform: (t = o("WAWap")).CUSTOM_STRING(r),
          id: t.CUSTOM_STRING(a),
          appid: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, i),
          app_mute: n.OPTIONAL(t.INT, l),
          pkey: n.OPTIONAL(t.CUSTOM_STRING, s),
          voip_payload_type: n.OPTIONAL(t.CUSTOM_STRING, u),
          num_acc: n.OPTIONAL(t.INT, c),
        });
      return d;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAndroidClientConfigMixin = s;
  },
  98,
);
