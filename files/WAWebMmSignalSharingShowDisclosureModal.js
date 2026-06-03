__d(
  "WAWebMmSignalSharingShowDisclosureModal",
  [
    "Promise",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebWamEnumDisclosureEventType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i;
          return !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureEnabled() ||
            (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
              (i = t.contact) != null &&
              i.isContactBlocked) ||
            !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(
              t,
              r,
            ) ||
            !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(r) ||
            (a ===
              o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                .BODY_URL_CLICK &&
              !o(
                "WAWebMmSignalSharingGatingUtils",
              ).isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled()) ||
            o(
              "WAWebMmSignalSharingTos",
            ).isMmSignalSharingDisclosureTosAccepted()
            ? (e || (e = n("Promise"))).resolve(!1)
            : o(
                "WAWebMmSignalSharingTos",
              ).isMmSignalSharingDisclosureTosAccepted() === !1;
        })),
        u.apply(this, arguments)
      );
    }
    l.showDisclosureModalForMm = s;
  },
  98,
);
