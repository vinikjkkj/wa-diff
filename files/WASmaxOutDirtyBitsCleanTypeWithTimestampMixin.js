__d(
  "WASmaxOutDirtyBitsCleanTypeWithTimestampMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.cleanTimestamp,
        n = o("WASmaxJsx").smax("clean", {
          type: "syncd_app_state",
          timestamp: o("WAWap").INT(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCleanTypeWithTimestampMixin = s;
  },
  98,
);
