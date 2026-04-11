__d(
  "WASmaxOutPushConfigWNSClientMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.configVersion,
        n = e.configId,
        r = o("WASmaxJsx").smax("config", {
          platform: "wns",
          version: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          id: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeWNSClientMixin = s;
  },
  98,
);
