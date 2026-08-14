__d(
  "WASmaxOutStatusPublishStatusDeprecatedParticipantHashMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusPhash,
        n = o("WASmaxJsx").smax("status", {
          phash: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusDeprecatedParticipantHashMixin = s;
  },
  98,
);
