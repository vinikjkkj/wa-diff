__d(
  "WASmaxOutBlocklistsUsernameMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyUsername,
        n = o("WASmaxJsx").smax("smax$any", {
          username: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUsernameMixin = s;
  },
  98,
);
