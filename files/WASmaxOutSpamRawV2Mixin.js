__d(
  "WASmaxOutSpamRawV2Mixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("raw", { v: o("WAWap").INT(2) });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeRawV2Mixin = s;
  },
  98,
);
