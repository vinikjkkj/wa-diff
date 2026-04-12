__d(
  "useWAWebBizAdCreationAudienceSpec",
  [
    "CometRelay",
    "LWICometDefaultTargetingSpec",
    "jsonParseSafe",
    "nullthrows",
    "useWAWebBizAdCreationAudienceSpec_boostedComponentWrapper.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationAudienceSpec_boostedComponentWrapper.graphql",
            ));
    function u(e) {
      var t,
        n,
        a,
        i,
        l,
        u,
        c = o("CometRelay").useFragment(s, e),
        d = c.spec,
        m = r("nullthrows")(
          d == null || (t = d.audience) == null ? void 0 : t.audience_option,
          "Audience Option should not be empty",
        ),
        p = String(
          d == null || (n = d.audience) == null ? void 0 : n.audience_key,
        );
      return {
        audienceID: p,
        audienceOption: m,
        clientEditable: !!(
          !(d == null || (a = d.audience) == null) && a.client_editable
        ),
        name: String(d == null || (i = d.audience) == null ? void 0 : i.name),
        subjectToDSA: !!(
          !(d == null || (l = d.audience) == null) && l.subject_to_dsa
        ),
        targetSpec: r("jsonParseSafe")(
          String(
            d == null || (u = d.audience) == null
              ? void 0
              : u.target_spec_string_without_placements,
          ),
          o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC,
        ),
      };
    }
    l.default = u;
  },
  98,
);
