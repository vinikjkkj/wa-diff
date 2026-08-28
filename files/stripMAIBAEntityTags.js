__d(
  "stripMAIBAEntityTags",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e
        ? e
            .replace(
              /<ad-object\s+[^>]*display=[\"\']([^\"\']*)[\"\'][^>]*\/>/gi,
              "$1",
            )
            .replace(
              /<asset\s+[^>]*display=[\"\']([^\"\']*)[\"\'][^>]*\/>/gi,
              "$1",
            )
            .replace(
              /<ple\s+[^>]*outcome=[\"\']([^\"\']*)[\"\'][^>]*\/>/gi,
              "$1",
            )
            .replace(/<os-cta\s+[^>]*\/>/gi, "")
            .replace(/<r2_6_feature_r1_cross_sell\s*\/?>/gi, "")
            .replace(/<r2_6_feature_r2_2_cross_sell\s*\/?>/gi, "")
            .replace(/<r2_1_feature_repitching\s*\/?>/gi, "")
            .replace(/<r26_r21_objection_handling\s*\/?>/gi, "")
            .replace(/<r2_6_personalized_pitch\s*\/?>/gi, "")
            .replace(/<tool-call\b[^>]*\/>/gi, "")
            .replace(/<\/?ignore-for-memory\b[^>]*>/gi, "")
            .replace(/<\/?suppress-notification\b[^>]*>/gi, "")
            .replace(/<\/?interviewer-optout\b[^>]*>/gi, "")
            .replace(
              /<scorecard-report\b[^>]*>[\s\S]*?<\/scorecard-report>/gi,
              "",
            )
            .replace(/<a2ui\b[^>]*>[\s\S]*?<\/a2ui>/gi, "")
            .replace(/\*\*(.+?)\*\*/g, "$1")
            .replace(/^#{1,6}\s+/gm, "")
            .replace(/\n{3,}/g, "\n\n")
            .replace(/[ \t]+\n/g, "\n")
            .trim()
        : "";
    }
    i.default = e;
  },
  66,
);
