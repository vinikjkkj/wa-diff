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
    var e = new WeakSet();
    function s(e) {
      var t;
      if (!((t = e.contact) != null && t.isBusiness)) return !1;
      var n = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
      if (n != null && n.is3pdag) return !1;
      var r = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
      return !(!r && n == null);
    }
    function u() {
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
    function c(e) {
      var t = e.chat,
        n = e.conversionData,
        r = e.conversionSource,
        a = e.ctwaSignals,
        i = e.fromMe;
      if (!(n == null || r == null)) {
        var l = o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: n,
          conversionSource: r,
          ctwaSignals: a,
        });
        if ((l == null ? void 0 : l.is3pdag) !== !0) {
          var s = t.contact;
          if (s != null) {
            if (s.isBusiness === !0) {
              m(t);
              return;
            }
            i && d(t, s);
          }
        }
      }
    }
    function d(t, n) {
      if (!e.has(n)) {
        e.add(n);
        var r = function () {
          n.isBusiness === !0 &&
            (n.off("change:isBusiness", r), e.delete(n), m(t));
        };
        n.on("change:isBusiness", r);
      }
    }
    function m(e) {
      var t = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e.id);
      t ||
        (o(
          "WAWebConsumerTransparencyInfoIconModel",
        ).ConsumerTransparencyInfoIconModel.add(e.id),
        o(
          "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
        ).maybeInsertCtwaConsumerDisclosureMsg(e));
    }
    ((l.shouldShowConsumerTransparencyDisclosure = s),
      (l.shouldShowROWConsumerDisclosure = u),
      (l.handleConsumerTransparencyForNewMsg = c));
  },
  98,
);
