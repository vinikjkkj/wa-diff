__d(
  "WAWebSystemProvenanceGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.isNewsletter,
        n = e.isNewsletterStatus;
      return t ? (n ? "channel_status" : "channel") : null;
    }
    function s(e) {
      return (
        e != null &&
        o("WAWebABProps").getABPropConfigValue(
          "anti_stripping_detection_enabled",
        )
      );
    }
    function u() {
      var e;
      try {
        e = JSON.parse(
          o("WAWebABProps").getABPropConfigValue(
            "system_provenance_allowed_fields",
          ),
        );
      } catch (e) {
        return c;
      }
      var t = e != null && typeof e == "object" ? e.fields : null;
      return Array.isArray(t)
        ? new Set(
            t.filter(function (e) {
              return typeof e == "string";
            }),
          )
        : c;
    }
    var c = new Set();
    ((l.systemProvenanceDestination = e),
      (l.isSystemProvenanceEnabledFor = s),
      (l.systemProvenanceAllowedFieldNames = u));
  },
  98,
);
