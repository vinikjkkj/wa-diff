__d(
  "AdsInstantBookUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.instant_book_configuration) == null
        ? void 0
        : t.booking_url;
    }
    function l(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.instant_book_configuration) == null
          ? void 0
          : t.is_enabled) === !0
      );
    }
    ((i.getInstantBookBookingUrl = e), (i.isInstantBookSelected = l));
  },
  66,
);
