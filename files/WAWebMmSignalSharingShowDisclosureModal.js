__d(
  "WAWebMmSignalSharingShowDisclosureModal",
  [
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebWamEnumDisclosureEventType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r;
      return !o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled() ||
        (o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
          (r = e.contact) != null &&
          r.isContactBlocked) ||
        !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMm(e, t) ||
        !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(t) ||
        (n ===
          o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .BODY_URL_CLICK &&
          !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled()) ||
        o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted()
        ? Promise.resolve(!1)
        : o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted() === !1;
    }
    l.showDisclosureModalForMm = e;
  },
  98,
);
