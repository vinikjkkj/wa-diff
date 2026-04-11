__d(
  "WASmaxOutBlocklistsGuestNameMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyGuestName,
        n = o("WASmaxJsx").smax("smax$any", {
          guest_name: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGuestNameMixin = s;
  },
  98,
);
