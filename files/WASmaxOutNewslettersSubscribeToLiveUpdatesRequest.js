__d(
  "WASmaxOutNewslettersSubscribeToLiveUpdatesRequest",
  ["WASmaxJsx", "WASmaxOutNewslettersNewsletterIQSetRequestMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutNewslettersNewsletterIQSetRequestMixin",
      ).mergeNewsletterIQSetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("live_updates", null),
        ),
        e,
      );
      return t;
    }
    l.makeSubscribeToLiveUpdatesRequest = e;
  },
  98,
);
