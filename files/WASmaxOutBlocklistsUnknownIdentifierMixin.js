__d(
  "WASmaxOutBlocklistsUnknownIdentifierMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("smax$any", { unknown_identifier: "true" });
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeUnknownIdentifierMixin = s;
  },
  98,
);
