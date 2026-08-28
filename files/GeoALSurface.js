__d(
  "GeoALSurface",
  [
    "AdsEditorSelectedIDsContext",
    "GeoPrivateLoggingUtils",
    "Surface.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["headingText", "logging", "name", "status"],
      s = ["capability", "metadata", "subsurface", "surface"],
      u,
      c = u || (u = o("react")),
      d = u.useContext;
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a,
        i,
        l,
        u,
        m;
      n[0] !== t
        ? ((a = t.headingText),
          (i = t.logging),
          (l = t.name),
          (m = t.status),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (u = n[4]), (m = n[5]));
      var p = o("GeoPrivateLoggingUtils").getGeoSurfaceProps(l, i, m, a),
        _;
      n[6] !== i || n[7] !== l
        ? ((_ = o("GeoPrivateLoggingUtils").shouldLogGeoSurface(l, i)),
          (n[6] = i),
          (n[7] = l),
          (n[8] = _))
        : (_ = n[8]);
      var f = _,
        g = d(o("AdsEditorSelectedIDsContext").AdsEditorSelectedIDsContext),
        h = o("AdsEditorSelectedIDsContext").resolveSelectedIDs(g),
        y = p.capability,
        C = p.metadata,
        b = p.subsurface,
        v = p.surface,
        S = babelHelpers.objectWithoutPropertiesLoose(p, s),
        R = babelHelpers.extends({}, C);
      ((h == null ? void 0 : h.adObjectIDs) != null &&
        (R.selected_ad_object_ids = h.adObjectIDs.join(",")),
        (h == null ? void 0 : h.adObjectLevel) != null &&
          (R.ad_object_level = h.adObjectLevel),
        (h == null ? void 0 : h.draftFragmentIDs) != null &&
          (R.selected_fragment_ids = h.draftFragmentIDs.join(",")));
      var L = v.logKey;
      b != null && (L = o("GeoPrivateLoggingUtils").getFullSurfaceString(L, b));
      var E;
      n[9] !== y
        ? ((E =
            (y == null ? void 0 : y.nonInteractive) !== !0
              ? babelHelpers.extends({}, y, { trackVisibilityThreshold: 0.5 })
              : y),
          (n[9] = y),
          (n[10] = E))
        : (E = n[10]);
      var k = E;
      return f
        ? c.jsx(
            r("Surface.react"),
            babelHelpers.extends(
              { capability: k, metadata: R, surface: L },
              u,
              S,
            ),
          )
        : c.jsx(c.Fragment, { children: t.children });
    }
    l.default = m;
  },
  98,
);
