__d(
  "MAIBACampaignFunnelStage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return new RegExp("\\b" + e + "\\b", "i");
    }
    function l(t) {
      if (t == null || t.trim() === "") return null;
      var n = t.trim();
      return n.toLowerCase().includes("sales") ||
        n.toLowerCase().includes("conversion") ||
        n.toLowerCase().includes("purchase") ||
        n.toLowerCase().includes("revenue") ||
        n.toLowerCase().includes("install") ||
        n.toLowerCase().includes("catalog")
        ? "conversion"
        : n.toLowerCase().includes("awareness") ||
            e("reach").test(n) ||
            e("brand").test(n) ||
            n.toLowerCase().includes("video view")
          ? "awareness"
          : n.toLowerCase().includes("traffic") ||
              n.toLowerCase().includes("engagement") ||
              /\bleads?\b/i.test(n) ||
              e("app").test(n) ||
              n.toLowerCase().includes("message") ||
              n.toLowerCase().includes("consideration")
            ? "consideration"
            : null;
    }
    i.deriveFunnelStage = l;
  },
  66,
);
