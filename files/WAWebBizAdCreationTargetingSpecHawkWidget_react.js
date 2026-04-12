__d(
  "WAWebBizAdCreationTargetingSpecHawkWidget.react",
  [
    "fbt",
    "WAWebFlex.react",
    "react",
    "withWAWebBizAdCreationTargetingSpecPart.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.targetingSpec,
        n = c(!1),
        r = n[0],
        a = n[1],
        i = function () {
          a(!r);
        },
        l = function (t) {
          return t == null
            ? "null"
            : typeof t == "object"
              ? JSON.stringify(t, null, 2)
              : String(t);
        },
        d = function (t) {
          return t != null && typeof t == "object";
        },
        m = [
          { label: "Age Min", value: t == null ? void 0 : t.age_min },
          { label: "Age Max", value: t == null ? void 0 : t.age_max },
          { label: "Age Range", value: t == null ? void 0 : t.age_range },
          { label: "Connections", value: t == null ? void 0 : t.connections },
          {
            label: "Custom Audiences",
            value: t == null ? void 0 : t.custom_audiences,
          },
          {
            label: "Excluded Custom Audiences",
            value: t == null ? void 0 : t.excluded_custom_audiences,
          },
          { label: "Exclusions", value: t == null ? void 0 : t.exclusions },
          {
            label: "Flexible Spec",
            value: t == null ? void 0 : t.flexible_spec,
          },
          { label: "Genders", value: t == null ? void 0 : t.genders },
          {
            label: "Geo Locations",
            value: t == null ? void 0 : t.geo_locations,
          },
          { label: "Locales", value: t == null ? void 0 : t.locales },
          {
            label: "Targeting Automation",
            value: t == null ? void 0 : t.targeting_automation,
          },
          {
            label: "Targeting Optimization",
            value: t == null ? void 0 : t.targeting_optimization,
          },
          {
            label: "Targeting Relaxation Types",
            value: t == null ? void 0 : t.targeting_relaxation_types,
          },
        ].filter(function (e) {
          var t = e.value;
          return t != null;
        });
      return u.jsxs("div", {
        className:
          "x1h3rtpe xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1phlbz0 xt7fyls x6ikm8r x10wlt62",
        children: [
          u.jsx("div", {
            className:
              "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
            onClick: i,
            role: "button",
            tabIndex: 0,
            onKeyDown: function (t) {
              (t.key === "Enter" || t.key === " ") && (t.preventDefault(), i());
            },
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              children: [
                u.jsx("span", {
                  className: "x14ug900 x1f6kntn x117nqv4",
                  children: s._(/*BTDS*/ "Targeting Spec Hawk Tool"),
                }),
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c",
                      },
                      1: {
                        className:
                          "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl",
                      },
                    }[!!r << 0],
                    { children: "\u25B6" },
                  ),
                ),
              ],
            }),
          }),
          r &&
            u.jsx("div", {
              className:
                "x1sslpiy xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq",
              children: u.jsx("div", {
                className: "xh8yej3",
                children: m.map(function (e, t) {
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
                      }[(t === m.length - 1) << 0],
                      {
                        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                          justify: "all",
                          align: "start",
                          children: [
                            u.jsx("div", {
                              className: "xhslqc4 x1nxh6w3 xk50ysn x1yc453h",
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
                                }[!!d(r) << 0],
                                { children: l(r) },
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
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = r("withWAWebBizAdCreationTargetingSpecPart.react")(d, function (e) {
      return { targetingSpec: e };
    });
    l.default = m;
  },
  226,
);
