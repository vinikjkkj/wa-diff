__d(
  "isSiteLinksManuallyOn",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n,
        r =
          (t = e.creative) == null || (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.site_links_data_consented;
      return (
        (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
        (r == null || (n = r.action_metadata) == null ? void 0 : n.type) ===
          "MANUAL"
      );
    }
    i.default = e;
  },
  66,
);
