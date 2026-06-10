__d(
  "WASmaxOutBizSettingsSmbDataSharingSettingValueMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyValue,
        n = e.anyVersion,
        r = o("WASmaxJsx").smax("smax$any", {
          value: o("WAWap").CUSTOM_STRING(t),
          version: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSmbDataSharingSettingValueMixin = s;
  },
  98,
);
