__d(
  "WASmaxOutPushConfigEnterpriseClientMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.configId,
        n = o("WASmaxJsx").smax("config", {
          platform: "ent",
          id: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeEnterpriseClientMixin = s;
  },
  98,
);
