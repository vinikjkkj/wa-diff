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
    var c = new Set(),
      d = { version: 0, make: [], ai_system_used: [], publisher: [] },
      m = { value: "", json: null };
    function p() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "system_provenance_allowed_values",
      );
      return (e !== m.value && (m = { value: e, json: _(e) }), m.json);
    }
    function _(e) {
      var t,
        n = (t = f(e)) != null ? t : d;
      return [n.make, n.ai_system_used, n.publisher].some(function (e) {
        return Array.isArray(e) && e.length > 0;
      })
        ? e
        : null;
    }
    function f(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      return t != null && typeof t == "object" && !Array.isArray(t) ? t : null;
    }
    ((l.systemProvenanceDestination = e),
      (l.isSystemProvenanceEnabledFor = s),
      (l.systemProvenanceAllowedFieldNames = u),
      (l.systemProvenanceAllowlistsJson = p));
  },
  98,
);
