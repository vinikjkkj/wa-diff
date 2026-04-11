__d(
  "WASmaxOutBlocklistsGuestNameAndDisplayNameMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsDisplayNameMixin",
    "WASmaxOutBlocklistsGuestNameMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutBlocklistsGuestNameMixin").mergeGuestNameMixin(
        o("WASmaxOutBlocklistsDisplayNameMixin").mergeDisplayNameMixin(
          o("WASmaxJsx").smax("smax$any", null),
          e,
        ),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeGuestNameAndDisplayNameMixin = s;
  },
  98,
);
