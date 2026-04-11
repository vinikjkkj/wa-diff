__d(
  "SCIsolationRollout",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t.startsWith("Falco")) return !1;
      var n = t.toUpperCase();
      return n.startsWith("FBLQ:") ||
        n.startsWith("GRAPHQL:") ||
        n.startsWith("FBGQLS:") ||
        n.startsWith("IGGQLS:") ||
        n.startsWith("SKY:") ||
        n === "SKY"
        ? !0
        : t === "MLCInternCollab" || t === "MLCCollab"
          ? e.get_sci_dogfooding()
          : t.startsWith("EntityPresence:")
            ? e.get_js_rs_client_route_entity_presence_to_sci()
            : t === "PresenceUnifiedJSON"
              ? e.get_js_rs_client_route_presence_unified_json_to_sci()
              : !0;
    }
    i.shouldUseSCIsolation = e;
  },
  66,
);
