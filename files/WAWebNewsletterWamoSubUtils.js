__d(
  "WAWebNewsletterWamoSubUtils",
  ["WAWebCommonNewsletterEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        (e == null ? void 0 : e.wamoSubStatus) ===
        o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE
      );
    }
    function s(e) {
      return (
        (e == null ? void 0 : e.wamoSubPlanId) != null &&
        (e == null ? void 0 : e.wamoSubPlanId) !== ""
      );
    }
    ((l.iHavePaidSubscription = e), (l.newsletterSupportsSubscriptions = s));
  },
  98,
);
