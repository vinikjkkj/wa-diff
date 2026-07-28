__d(
  "WAWebCommonCTWAConsumerTransparency",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConsumerTransparencyInfoIconModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (!((t = e.contact) != null && t.isBusiness)) return !1;
      var n = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
      if (n != null && n.is3pdag) return !1;
      var r = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
      return !(!r && n == null);
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
    function u(e) {
      var t,
        n = e.chat,
        r = e.conversionData,
        a = e.conversionSource,
        i = e.ctwaSignals;
      if (!(r == null || a == null)) {
        var l = o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: r,
          conversionSource: a,
          ctwaSignals: i,
        });
        if (
          (l == null ? void 0 : l.is3pdag) !== !0 &&
          (t = n.contact) != null &&
          t.isBusiness
        ) {
          var s = o(
            "WAWebConsumerTransparencyInfoIconModel",
          ).ConsumerTransparencyInfoIconModel.shouldShowIcon(n.id);
          s ||
            (o(
              "WAWebConsumerTransparencyInfoIconModel",
            ).ConsumerTransparencyInfoIconModel.add(n.id),
            o(
              "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
            ).maybeInsertCtwaConsumerDisclosureMsg(n));
        }
      }
    }
    ((l.shouldShowConsumerTransparencyDisclosure = e),
      (l.shouldShowROWConsumerDisclosure = s),
      (l.handleConsumerTransparencyForNewMsg = u));
  },
  98,
);
