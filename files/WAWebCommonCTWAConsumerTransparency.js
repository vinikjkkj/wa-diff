__d(
  "WAWebCommonCTWAConsumerTransparency",
  [
    "WAWebBizGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConsumerTransparencyInfoIconModel",
    "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        if (!t.contact.isBusiness) return !1;
        var e = o(
          "WAWebConsumerTransparencyInfoIconModel",
        ).ConsumerTransparencyInfoIconModel.shouldShowIcon(t.id);
        return !(
          !e &&
          r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t) == null
        );
      },
      s = function () {
        return (
          !o(
            "WAWebBizGatingUtils",
          ).isUpdatedConsumerDisclosureUiIndiaEnabled() &&
          (o("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() ||
            o(
              "WAWebBizGatingUtils",
            ).isUpdatedConsumerDisclosureUiBrazilEnabled())
        );
      },
      u = function (t, n, r) {
        if (!(n == null || r == null) && t.contact.isBusiness) {
          var e = o(
            "WAWebConsumerTransparencyInfoIconModel",
          ).ConsumerTransparencyInfoIconModel.shouldShowIcon(t.id);
          e ||
            (o(
              "WAWebConsumerTransparencyInfoIconModel",
            ).ConsumerTransparencyInfoIconModel.add(t.id),
            o(
              "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
            ).maybeInsertCtwaConsumerDisclosureMsg(t));
        }
      };
    ((l.shouldShowConsumerTransparencyDisclosure = e),
      (l.shouldShowROWConsumerDisclosure = s),
      (l.handleConsumerTransparencyForNewMsg = u));
  },
  98,
);
