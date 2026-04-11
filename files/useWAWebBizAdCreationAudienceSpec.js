__d(
  "useWAWebBizAdCreationAudienceSpec",
  [
    "CometRelay",
    "LWICometDefaultTargetingSpec",
    "jsonParseSafe",
    "nullthrows",
    "react-compiler-runtime",
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
        c = o("react-compiler-runtime").c(11),
        d = o("CometRelay").useFragment(s, e),
        m = d.spec,
        p = m == null || (t = m.audience) == null ? void 0 : t.audience_option,
        _;
      c[0] !== p
        ? ((_ = r("nullthrows")(p, "Audience Option should not be empty")),
          (c[0] = p),
          (c[1] = _))
        : (_ = c[1]);
      var f = _,
        g = String(
          m == null || (n = m.audience) == null ? void 0 : n.audience_key,
        ),
        h = !!(!(m == null || (a = m.audience) == null) && a.client_editable),
        y = String(m == null || (i = m.audience) == null ? void 0 : i.name),
        C = !!(!(m == null || (l = m.audience) == null) && l.subject_to_dsa),
        b = String(
          m == null || (u = m.audience) == null
            ? void 0
            : u.target_spec_string_without_placements,
        ),
        v;
      c[2] !== b
        ? ((v = r("jsonParseSafe")(
            b,
            o("LWICometDefaultTargetingSpec").DEFAULT_TARGETING_SPEC,
          )),
          (c[2] = b),
          (c[3] = v))
        : (v = c[3]);
      var S = v,
        R;
      return (
        c[4] !== g ||
        c[5] !== f ||
        c[6] !== h ||
        c[7] !== y ||
        c[8] !== C ||
        c[9] !== S
          ? ((R = {
              audienceID: g,
              audienceOption: f,
              clientEditable: h,
              name: y,
              subjectToDSA: C,
              targetSpec: S,
            }),
            (c[4] = g),
            (c[5] = f),
            (c[6] = h),
            (c[7] = y),
            (c[8] = C),
            (c[9] = S),
            (c[10] = R))
          : (R = c[10]),
        R
      );
    }
    l.default = u;
  },
  98,
);
