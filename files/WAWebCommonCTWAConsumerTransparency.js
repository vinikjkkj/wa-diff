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
      if (!e.contact.isBusiness) return !1;
      var t = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
      return !(
        !t &&
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
      if (!(t == null || n == null) && e.contact.isBusiness) {
        var r = o(
          "WAWebConsumerTransparencyInfoIconModel",
        ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
        r ||
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
