__d(
  "MAIBAMemoryImportGKUtils",
  ["ALToolTab", "BanzaiLazyQueue", "MAIBASurfacesUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = "MBS Billing";
    function u() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool(),
        t = o("ALToolTab").getCurrentToolTab().tab;
      return (
        e != null &&
        e !== "Insights" &&
        o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e) &&
        !(e === "Billing & Payments" && t != null && String(t).startsWith(s))
      );
    }
    function c(e, t) {
      return (
        u() &&
        e != null &&
        e === t.ad_account_id &&
        t.is_eligible &&
        (t.is_uxr || t.exposure_logging_id != null || t.is_enabled)
      );
    }
    function d(e, t) {
      return c(e, t) && t.is_uxr;
    }
    function m(e, t) {
      return c(e, t) && (t.is_uxr || t.is_enabled);
    }
    function p(t, n) {
      if (!c(t, n)) return !1;
      if (n.is_uxr) return !0;
      var r = n.exposure_logging_id;
      return (
        r != null &&
          !e.has(r) &&
          (e.add(r), o("BanzaiLazyQueue").queuePost("qex", { l: r })),
        n.is_enabled
      );
    }
    ((l.isMAIBAMemoryImportSurfaceEligible = u),
      (l.isMAIBAMemoryImportAccountEligible = c),
      (l.isMAIBAMemoryImportUXREnabled = d),
      (l.isMAIBAMemoryImportServedWithoutExposure = m),
      (l.isMAIBAMemoryImportEnabled = p));
  },
  98,
);
