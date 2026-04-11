__d(
  "WASmaxOutMdCompanionPlatformDisplayElMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.companionPlatformDisplayElementValue,
        n = o("WASmaxJsx").smax("companion_platform_display", null, t);
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCompanionPlatformDisplayElMixin = s;
  },
  98,
);
