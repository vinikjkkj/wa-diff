__d(
  "WAWebBizAdCreationTargetingSpecHawkWidget.react",
  [
    "fbt",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
    "withWAWebBizAdCreationTargetingSpecPart.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.targetingSpec,
        r = c(!1),
        a = r[0],
        i = r[1],
        l;
      t[0] !== a
        ? ((l = function () {
            i(!a);
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        f = _,
        g = p,
        h = n == null ? void 0 : n.age_min,
        y;
      if (
        t[2] !== d ||
        t[3] !== a ||
        t[4] !== h ||
        t[5] !== (n == null ? void 0 : n.age_max) ||
        t[6] !== (n == null ? void 0 : n.age_range) ||
        t[7] !== (n == null ? void 0 : n.connections) ||
        t[8] !== (n == null ? void 0 : n.custom_audiences) ||
        t[9] !== (n == null ? void 0 : n.excluded_custom_audiences) ||
        t[10] !== (n == null ? void 0 : n.exclusions) ||
        t[11] !== (n == null ? void 0 : n.flexible_spec) ||
        t[12] !== (n == null ? void 0 : n.genders) ||
        t[13] !== (n == null ? void 0 : n.geo_locations) ||
        t[14] !== (n == null ? void 0 : n.locales) ||
        t[15] !== (n == null ? void 0 : n.targeting_automation) ||
        t[16] !== (n == null ? void 0 : n.targeting_optimization) ||
        t[17] !== (n == null ? void 0 : n.targeting_relaxation_types)
      ) {
        var C = [
            { label: "Age Min", value: h },
            { label: "Age Max", value: n == null ? void 0 : n.age_max },
            { label: "Age Range", value: n == null ? void 0 : n.age_range },
            { label: "Connections", value: n == null ? void 0 : n.connections },
            {
              label: "Custom Audiences",
              value: n == null ? void 0 : n.custom_audiences,
            },
            {
              label: "Excluded Custom Audiences",
              value: n == null ? void 0 : n.excluded_custom_audiences,
            },
            { label: "Exclusions", value: n == null ? void 0 : n.exclusions },
            {
              label: "Flexible Spec",
              value: n == null ? void 0 : n.flexible_spec,
            },
            { label: "Genders", value: n == null ? void 0 : n.genders },
            {
              label: "Geo Locations",
              value: n == null ? void 0 : n.geo_locations,
            },
            { label: "Locales", value: n == null ? void 0 : n.locales },
            {
              label: "Targeting Automation",
              value: n == null ? void 0 : n.targeting_automation,
            },
            {
              label: "Targeting Optimization",
              value: n == null ? void 0 : n.targeting_optimization,
            },
            {
              label: "Targeting Relaxation Types",
              value: n == null ? void 0 : n.targeting_relaxation_types,
            },
          ].filter(m),
          b,
          v;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = {
              className:
                "x1h3rtpe xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1phlbz0 xt7fyls x6ikm8r x10wlt62",
            }),
            (v = {
              className:
                "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
            }),
            (t[19] = b),
            (t[20] = v))
          : ((b = t[19]), (v = t[20]));
        var S;
        t[21] !== d
          ? ((S = function (t) {
              (t.key === "Enter" || t.key === " ") && (t.preventDefault(), d());
            }),
            (t[21] = d),
            (t[22] = S))
          : (S = t[22]);
        var R;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = u.jsx("span", {
              className: "x14ug900 x1f6kntn x117nqv4",
              children: s._(/*BTDS*/ "Targeting Spec Hawk Tool"),
            })),
            (t[23] = R))
          : (R = t[23]);
        var L;
        t[24] !== a
          ? ((L = {
              0: {
                className: "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c",
              },
              1: { className: "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl" },
            }[!!a << 0]),
            (t[24] = a),
            (t[25] = L))
          : (L = t[25]);
        var E;
        t[26] !== L
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              children: [
                R,
                u.jsx(
                  "span",
                  babelHelpers.extends({}, L, { children: "\u25B6" }),
                ),
              ],
            })),
            (t[26] = L),
            (t[27] = E))
          : (E = t[27]);
        var k;
        (t[28] !== d || t[29] !== S || t[30] !== E
          ? ((k = u.jsx(
              "div",
              babelHelpers.extends({}, v, {
                onClick: d,
                role: "button",
                tabIndex: 0,
                onKeyDown: S,
                children: E,
              }),
            )),
            (t[28] = d),
            (t[29] = S),
            (t[30] = E),
            (t[31] = k))
          : (k = t[31]),
          (y = u.jsxs(
            "div",
            babelHelpers.extends({}, b, {
              children: [
                k,
                a &&
                  u.jsx("div", {
                    className:
                      "x1sslpiy xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq",
                    children: u.jsx("div", {
                      className: "xh8yej3",
                      children: C.map(function (e, t) {
                        var n = e.label,
                          r = e.value;
                        return u.jsx(
                          "div",
                          babelHelpers.extends(
                            {},
                            {
                              0: {
                                className:
                                  "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7",
                              },
                              1: { className: "x1qhh985 x16ovd2e x12xbjc7" },
                            }[(t === C.length - 1) << 0],
                            {
                              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                                justify: "all",
                                align: "start",
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "xhslqc4 x1nxh6w3 xk50ysn x1yc453h",
                                    children: n,
                                  }),
                                  u.jsx(
                                    "div",
                                    babelHelpers.extends(
                                      {},
                                      {
                                        0: {
                                          className:
                                            "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk xp4054r",
                                        },
                                        1: {
                                          className:
                                            "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk x1yc453h x126k92a",
                                        },
                                      }[!!g(r) << 0],
                                      { children: f(r) },
                                    ),
                                  ),
                                ],
                              }),
                            },
                          ),
                          n,
                        );
                      }),
                    }),
                  }),
              ],
            }),
          )),
          (t[2] = d),
          (t[3] = a),
          (t[4] = h),
          (t[5] = n == null ? void 0 : n.age_max),
          (t[6] = n == null ? void 0 : n.age_range),
          (t[7] = n == null ? void 0 : n.connections),
          (t[8] = n == null ? void 0 : n.custom_audiences),
          (t[9] = n == null ? void 0 : n.excluded_custom_audiences),
          (t[10] = n == null ? void 0 : n.exclusions),
          (t[11] = n == null ? void 0 : n.flexible_spec),
          (t[12] = n == null ? void 0 : n.genders),
          (t[13] = n == null ? void 0 : n.geo_locations),
          (t[14] = n == null ? void 0 : n.locales),
          (t[15] = n == null ? void 0 : n.targeting_automation),
          (t[16] = n == null ? void 0 : n.targeting_optimization),
          (t[17] = n == null ? void 0 : n.targeting_relaxation_types),
          (t[18] = y));
      } else y = t[18];
      return y;
    }
    function m(e) {
      var t = e.value;
      return t != null;
    }
    function p(e) {
      return e != null && typeof e == "object";
    }
    function _(e) {
      return e == null
        ? "null"
        : typeof e == "object"
          ? JSON.stringify(e, null, 2)
          : String(e);
    }
    var f = r("withWAWebBizAdCreationTargetingSpecPart.react")(d, function (e) {
      return { targetingSpec: e };
    });
    l.default = f;
  },
  226,
);
