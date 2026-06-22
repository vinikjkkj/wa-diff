__d(
  "WAWebCommonCTWAConsumerTransparency",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConsumerTransparencyInfoIconModel",
    "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (!((t = e.contact) != null && t.isBusiness)) return !1;
      var n = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
      return !(
        !n &&
        r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e) == null
      );
    }
    function s() {
      return (
        !o(
          "WAWebCTWAGatingUtils",
        ).isUpdatedConsumerDisclosureUiIndiaEnabled() &&
        (o("WAWebCTWAGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() ||
          o(
            "WAWebCTWAGatingUtils",
          ).isUpdatedConsumerDisclosureUiBrazilEnabled())
      );
    }
    function u(e, t, n) {
      var r;
      if (
        !(t == null || n == null) &&
        (r = e.contact) != null &&
        r.isBusiness
      ) {
        var a = o(
          "WAWebConsumerTransparencyInfoIconModel",
        ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
        a ||
          (o(
            "WAWebConsumerTransparencyInfoIconModel",
          ).ConsumerTransparencyInfoIconModel.add(e.id),
          o(
            "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
          ).maybeInsertCtwaConsumerDisclosureMsg(e));
      }
    }
    ((l.shouldShowConsumerTransparencyDisclosure = e),
      (l.shouldShowROWConsumerDisclosure = s),
      (l.handleConsumerTransparencyForNewMsg = u));
  },
  98,
);
