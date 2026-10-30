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
      return u(e.id, ((t = e.contact) == null ? void 0 : t.isBusiness) === !0);
    }
    function u(e, t) {
      if (!t) return !1;
      var n = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChatId(e);
      if (n != null && n.is3pdag) return !1;
      var r = o(
        "WAWebConsumerTransparencyInfoIconModel",
      ).ConsumerTransparencyInfoIconModel.shouldShowIcon(e);
      return !(!r && n == null);
    }
    function c() {
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
    function d(e) {
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
              p(t);
              return;
            }
            i && m(t, s);
          }
        }
      }
    }
    function m(t, n) {
      if (!e.has(n)) {
        e.add(n);
        var r = function () {
          n.isBusiness === !0 &&
            (n.off("change:isBusiness", r), e.delete(n), p(t));
        };
        n.on("change:isBusiness", r);
      }
    }
    function p(e) {
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
      (l.shouldShowConsumerTransparencyDisclosureFor = u),
      (l.shouldShowROWConsumerDisclosure = c),
      (l.handleConsumerTransparencyForNewMsg = d));
  },
  98,
);
