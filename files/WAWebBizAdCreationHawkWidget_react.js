__d(
  "WAWebBizAdCreationHawkWidget.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebCopyPasteSelectable.react",
    "WAWebFlex.react",
    "react",
    "useWAWebBizAdCreationIdentityContext",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useState,
      p = function (t) {
        return t == null
          ? "null"
          : typeof t == "object"
            ? JSON.stringify(t, null, 2)
            : String(t);
      },
      _ = function (t) {
        return t != null && typeof t == "object";
      },
      f = function (t, n) {
        n === void 0 && (n = 2);
        var e = t.split("\n");
        return e.length <= n ? t : e.slice(0, n).join("\n") + "\n...";
      };
    function g(e) {
      var t = e.children,
        n = e.title;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className:
              "x1abdmlv x14ug900 x1c3i2sq x117nqv4 xefnzgg x16ovd2e x12xbjc7 xf7dkkf xv54qhq xtvhhri x1hx0egp",
            children: n,
          }),
          u.jsx("div", { className: "xh8yej3", children: t }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.isLast,
        n = e.label,
        r = e.value;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className: "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
            },
            1: { className: "x1qhh985 x16ovd2e x12xbjc7" },
          }[!!t << 0],
          {
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "start",
              children: [
                u.jsx("div", {
                  className: "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp",
                  children: n,
                }),
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    {
                      0: {
                        className:
                          "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk xp4054r x1hx0egp",
                      },
                      1: {
                        className:
                          "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk x1yc453h x1hx0egp x126k92a",
                      },
                    }[!!_(r) << 0],
                    { children: p(r) },
                  ),
                ),
              ],
            }),
          },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.expandedJsonFields,
        n = e.fieldKeyPrefix,
        r = e.isLast,
        a = e.label,
        i = e.toggleJsonField,
        l = e.value,
        c = n + "_" + a,
        d = _(l),
        m = p(l),
        g = t[c] || !1,
        h = d && !g ? f(m) : m;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className: "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
            },
            1: { className: "x1qhh985 x16ovd2e x12xbjc7" },
          }[!!r << 0],
          {
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "all",
              align: "start",
              children: [
                u.jsx("div", {
                  className: "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp",
                  children: a,
                }),
                u.jsxs("div", {
                  className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g x1hx0egp",
                  children: [
                    u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        {
                          0: {
                            className:
                              "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk xp4054r x1hx0egp",
                          },
                          1: {
                            className:
                              "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk x1yc453h x1hx0egp x126k92a",
                          },
                        }[!!d << 0],
                        { children: h },
                      ),
                    ),
                    d &&
                      m.split("\n").length > 2 &&
                      u.jsx("div", {
                        className: "x1ph7ams x1ypdohk x1pg5gke x1bvjpef",
                        onClick: function () {
                          return i(c);
                        },
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: function (t) {
                          (t.key === "Enter" || t.key === " ") &&
                            (t.preventDefault(), i(c));
                        },
                        children: g
                          ? s._(/*BTDS*/ "Show less")
                          : s._(/*BTDS*/ "Show more"),
                      }),
                  ],
                }),
              ],
            }),
          },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n,
        a,
        i,
        l = e.adAccountData,
        c = e.adgroupSpecs,
        p = e.audienceData,
        _ = e.budgetOptions,
        f = e.currentLocallyUploadedMediaCollection,
        C = e.defaultBudget,
        b = e.dsaData,
        v = e.lwiAudiences,
        S = e.placementData,
        R = e.selectedBudget,
        L = m(!1),
        E = L[0],
        k = L[1],
        I = m({}),
        T = I[0],
        D = I[1],
        x = d(r("WAWebBizAdCreationConfigContext")),
        $ = d(r("WAWebBizAdCreationValidateSpecContext")),
        P = r("useWAWebBizAdCreationIdentityContext")(),
        N = function () {
          var e = P == null ? void 0 : P.relayEnvironment;
          if (e == null) return "N/A";
          try {
            return o("CometRelay").getActorID(e);
          } catch (e) {
            return "N/A";
          }
        },
        M = function () {
          k(!E);
        },
        w = function (t) {
          D(function (e) {
            var n;
            return babelHelpers.extends({}, e, ((n = {}), (n[t] = !e[t]), n));
          });
        },
        A = [
          { label: "Ad Account Data", value: l },
          { label: "Adgroup Specs", value: c },
          { label: "Audience Data (selected audience)", value: p },
          { label: "DSA Data", value: b },
          { label: "LWI Audiences", value: v },
          { label: "Placement Data", value: S },
          { label: "Selected Budget", value: R },
          { label: "Budget Options", value: _ },
          { label: "Default Budget", value: C },
        ],
        F =
          (t = f == null ? void 0 : f.getPreviewableMedias()) != null ? t : [],
        O = F.map(function (e) {
          return {
            label: "Media " + e.id,
            value: { id: e.id, fullPreview: e.fullPreview, type: e.type },
          };
        }),
        B = [
          {
            label: "Boosted Component Product",
            value: x == null ? void 0 : x.product,
          },
          { label: "Entrypoint", value: x == null ? void 0 : x.entryPoint },
          { label: "Page ID", value: x == null ? void 0 : x.pageID },
          { label: "Flow", value: x == null ? void 0 : x.flow },
          { label: "Flow ID", value: x == null ? void 0 : x.flowID },
        ],
        W = function () {
          return P == null
            ? "N/A"
            : P.strongRelayEnvironment != null
              ? "Not required"
              : "Required";
        },
        q = [
          {
            label: "Account Type",
            value:
              (n = P == null ? void 0 : P.accountType) != null ? n : "Not set",
          },
          { label: "Actor ID", value: N() },
          {
            label: "WAA Eligible",
            value: P != null && P.isWAAEligible ? "Yes" : "No",
          },
          { label: "Email Verification Status", value: W() },
        ],
        U = [
          {
            label: "Is Validating",
            value: (a = $ == null ? void 0 : $.isValidating) != null ? a : !1,
          },
          {
            label: "Notices",
            value: (i = $ == null ? void 0 : $.notices) != null ? i : {},
          },
        ];
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62",
            },
            1: {
              className:
                "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62 x1egiwwb",
            },
          }[!!E << 0],
          {
            children: [
              u.jsx("div", {
                className:
                  "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
                onClick: M,
                role: "button",
                tabIndex: 0,
                onKeyDown: function (t) {
                  (t.key === "Enter" || t.key === " ") &&
                    (t.preventDefault(), M());
                },
                children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "all",
                  children: [
                    u.jsx("span", {
                      className: "x14ug900 x1f6kntn x117nqv4 x1hx0egp",
                      children: s._(/*BTDS*/ "Hawk Tool"),
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
                        }[!!E << 0],
                        { children: "\u25B6" },
                      ),
                    ),
                  ],
                }),
              }),
              E &&
                u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                  selectable: !0,
                  className:
                    "xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq x1hx0egp x162x9ue",
                  children: [
                    u.jsx(g, {
                      title: s._(/*BTDS*/ "Spec Values"),
                      children: A.map(function (e, t) {
                        var n = e.label,
                          r = e.value;
                        return u.jsx(
                          y,
                          {
                            label: n,
                            value: r,
                            fieldKeyPrefix: "spec",
                            isLast: t === A.length - 1,
                            expandedJsonFields: T,
                            toggleJsonField: w,
                          },
                          n,
                        );
                      }),
                    }),
                    u.jsx(g, {
                      title: s._(/*BTDS*/ "Config Values"),
                      children: B.map(function (e, t) {
                        var n = e.label,
                          r = e.value;
                        return u.jsx(
                          h,
                          { label: n, value: r, isLast: t === B.length - 1 },
                          n,
                        );
                      }),
                    }),
                    u.jsx(g, {
                      title: s._(/*BTDS*/ "Local Medias"),
                      children:
                        O.length === 0
                          ? u.jsx("div", {
                              className:
                                "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
                              children: u.jsx(o("WAWebFlex.react").FlexRow, {
                                justify: "all",
                                align: "start",
                                children: u.jsx("div", {
                                  className:
                                    "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp",
                                  children: s._(/*BTDS*/ "No media available"),
                                }),
                              }),
                            })
                          : O.map(function (e, t) {
                              var n = e.label,
                                r = e.value;
                              return u.jsx(
                                y,
                                {
                                  label: n,
                                  value: r,
                                  fieldKeyPrefix: "media",
                                  isLast: t === O.length - 1,
                                  expandedJsonFields: T,
                                  toggleJsonField: w,
                                },
                                n,
                              );
                            }),
                    }),
                    u.jsx(g, {
                      title: s._(/*BTDS*/ "Identity"),
                      children: q.map(function (e, t) {
                        var n = e.label,
                          r = e.value;
                        return u.jsx(
                          h,
                          { label: n, value: r, isLast: t === q.length - 1 },
                          n,
                        );
                      }),
                    }),
                    u.jsx(g, {
                      title: s._(/*BTDS*/ "Validation Notices"),
                      children: U.map(function (e, t) {
                        var n = e.label,
                          r = e.value;
                        return u.jsx(
                          y,
                          {
                            label: n,
                            value: r,
                            fieldKeyPrefix: "validation",
                            isLast: t === U.length - 1,
                            expandedJsonFields: T,
                            toggleJsonField: w,
                          },
                          n,
                        );
                      }),
                    }),
                  ],
                }),
            ],
          },
        ),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = r("withWAWebBizAdCreationSpecContext")(C, function (e) {
      return {
        adAccountData: e.adAccountData,
        adgroupSpecs: e.adgroupSpecs,
        audienceData: e.audienceData,
        dsaData: e.dsaData,
        lwiAudiences: e.lwiAudiences,
        currentLocallyUploadedMediaCollection:
          e.currentLocallyUploadedMediaCollection,
        placementData: e.placementData,
        selectedBudget: e.budgetData.budget,
        budgetOptions: e.budgetData.budgetOptions,
        defaultBudget: e.budgetData.defaultBudget,
      };
    });
    l.default = b;
  },
  226,
);
