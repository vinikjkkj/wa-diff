__d(
  "WASmaxOutNewslettersNewsletterMessageRequestPayloadMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutNewslettersMessageDirections",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.messagesCount,
        n = e.messageDirectionsArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutNewslettersMessageDirections").mergeMessageDirections,
          o("WASmaxJsx").smax("messages", { count: o("WAWap").INT(t) }),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterMessageRequestPayloadMixin = s;
  },
  98,
);
