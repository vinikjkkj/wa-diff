__d(
  "WAWebWhatsNewGatingUtils",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Control: 0,
      LoadingCarousel: 1,
      BannerAndModal: 2,
      AutoModal: 3,
    });
    function s() {
      var t,
        n = o("WAWebABProps").getABPropConfigValue("web_whats_new_m0_bespoke");
      return (t = e.cast(n)) != null ? t : e.Control;
    }
    function u() {
      return s() === e.LoadingCarousel;
    }
    function c() {
      return s() === e.BannerAndModal;
    }
    function d() {
      return s() === e.AutoModal;
    }
    ((l.WhatsNewVariant = e),
      (l.getWhatsNewVariant = s),
      (l.isWhatsNewCarouselEnabled = u),
      (l.isWhatsNewBannerEnabled = c),
      (l.isWhatsNewAutoModalEnabled = d));
  },
  98,
);
