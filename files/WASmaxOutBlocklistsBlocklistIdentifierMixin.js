__d(
  "WASmaxOutBlocklistsBlocklistIdentifierMixin",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsBlocklistIds",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyCountryCode,
        n = e.blocklistIdsArgs,
        r = o("WASmaxOutBlocklistsBlocklistIds").mergeBlocklistIds(
          o("WASmaxJsx").smax("smax$any", {
            country_code: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
          }),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBlocklistIdentifierMixin = s;
  },
  98,
);
