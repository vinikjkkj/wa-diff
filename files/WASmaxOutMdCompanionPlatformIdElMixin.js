__d(
  "WASmaxOutMdCompanionPlatformIdElMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.companionPlatformIdElementValue,
        n = o("WASmaxJsx").smax("companion_platform_id", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCompanionPlatformIdElMixin = s;
  },
  98,
);
