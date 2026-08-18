__d(
  "WASmaxOutMdContactPointMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyContactPointType,
        n = e.anyContactPointValue,
        r = o("WASmaxJsx").smax("smax$any", {
          contact_point_type: o("WAWap").CUSTOM_STRING(t),
          contact_point_value: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeContactPointMixin = s;
  },
  98,
);
