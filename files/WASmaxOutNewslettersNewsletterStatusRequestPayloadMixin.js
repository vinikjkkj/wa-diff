__d(
  "WASmaxOutNewslettersNewsletterStatusRequestPayloadMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersStatusDirections",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusesCount,
        n = e.statusDirectionsArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutNewslettersStatusDirections").mergeStatusDirections,
          o("WASmaxJsx").smax("statuses", { count: o("WAWap").INT(t) }),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterStatusRequestPayloadMixin = s;
  },
  98,
);
