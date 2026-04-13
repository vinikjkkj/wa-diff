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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        r = e.title,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x1abdmlv x14ug900 x1c3i2sq x117nqv4 xefnzgg x16ovd2e x12xbjc7 xf7dkkf xv54qhq xtvhhri x1hx0egp",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== r
        ? ((i = u.jsx("div", babelHelpers.extends({}, a, { children: r }))),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xh8yej3" }), (t[3] = l))
        : (l = t[3]);
      var s;
      t[4] !== n
        ? ((s = u.jsx("div", babelHelpers.extends({}, l, { children: n }))),
          (t[4] = n),
          (t[5] = s))
        : (s = t[5]);
      var c;
      return (
        t[6] !== i || t[7] !== s
          ? ((c = u.jsxs(u.Fragment, { children: [i, s] })),
            (t[6] = i),
            (t[7] = s),
            (t[8] = c))
          : (c = t[8]),
        c
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.isLast,
        r = e.label,
        a = e.value,
        i;
      t[0] !== n
        ? ((i = {
            0: {
              className: "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
            },
            1: { className: "x1qhh985 x16ovd2e x12xbjc7" },
          }[!!n << 0]),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp" }),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== r
        ? ((s = u.jsx("div", babelHelpers.extends({}, l, { children: r }))),
          (t[3] = r),
          (t[4] = s))
        : (s = t[4]);
      var c;
      t[5] !== a
        ? ((c = {
            0: {
              className: "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk xp4054r x1hx0egp",
            },
            1: {
              className:
                "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk x1yc453h x1hx0egp x126k92a",
            },
          }[!!_(a) << 0]),
          (t[5] = a),
          (t[6] = c))
        : (c = t[6]);
      var d;
      t[7] !== a ? ((d = p(a)), (t[7] = a), (t[8] = d)) : (d = t[8]);
      var m;
      t[9] !== c || t[10] !== d
        ? ((m = u.jsx("div", babelHelpers.extends({}, c, { children: d }))),
          (t[9] = c),
          (t[10] = d),
          (t[11] = m))
        : (m = t[11]);
      var f;
      t[12] !== s || t[13] !== m
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            align: "start",
            children: [s, m],
          })),
          (t[12] = s),
          (t[13] = m),
          (t[14] = f))
        : (f = t[14]);
      var g;
      return (
        t[15] !== i || t[16] !== f
          ? ((g = u.jsx("div", babelHelpers.extends({}, i, { children: f }))),
            (t[15] = i),
            (t[16] = f),
            (t[17] = g))
          : (g = t[17]),
        g
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.expandedJsonFields,
        r = e.fieldKeyPrefix,
        a = e.isLast,
        i = e.label,
        l = e.toggleJsonField,
        c = e.value,
        d = r + "_" + i,
        m;
      t[0] !== c ? ((m = _(c)), (t[0] = c), (t[1] = m)) : (m = t[1]);
      var g = m,
        h,
        y,
        C;
      t[2] !== n || t[3] !== d || t[4] !== g || t[5] !== c
        ? ((h = p(c)),
          (y = n[d] || !1),
          (C = g && !y ? f(h) : h),
          (t[2] = n),
          (t[3] = d),
          (t[4] = g),
          (t[5] = c),
          (t[6] = h),
          (t[7] = y),
          (t[8] = C))
        : ((h = t[6]), (y = t[7]), (C = t[8]));
      var b = C,
        v;
      t[9] !== a
        ? ((v = {
            0: {
              className: "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
            },
            1: { className: "x1qhh985 x16ovd2e x12xbjc7" },
          }[!!a << 0]),
          (t[9] = a),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp" }),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== i
        ? ((R = u.jsx("div", babelHelpers.extends({}, S, { children: i }))),
          (t[12] = i),
          (t[13] = R))
        : (R = t[13]);
      var L;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x78zum5 xdt5ytf x1qvou4u x1s70e7g x1hx0egp" }),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== g
        ? ((E = {
            0: {
              className: "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk xp4054r x1hx0egp",
            },
            1: {
              className:
                "x14ug900 x1ey7xld x1nxh6w3 x1mzt3pk x1yc453h x1hx0egp x126k92a",
            },
          }[!!g << 0]),
          (t[15] = g),
          (t[16] = E))
        : (E = t[16]);
      var k;
      t[17] !== b || t[18] !== E
        ? ((k = u.jsx("div", babelHelpers.extends({}, E, { children: b }))),
          (t[17] = b),
          (t[18] = E),
          (t[19] = k))
        : (k = t[19]);
      var I;
      t[20] !== d || t[21] !== h || t[22] !== y || t[23] !== g || t[24] !== l
        ? ((I =
            g &&
            h.split("\n").length > 2 &&
            u.jsx("div", {
              className: "x1ph7ams x1ypdohk x1pg5gke x1bvjpef",
              onClick: function () {
                return l(d);
              },
              role: "button",
              tabIndex: 0,
              onKeyDown: function (t) {
                (t.key === "Enter" || t.key === " ") &&
                  (t.preventDefault(), l(d));
              },
              children: y
                ? s._(/*BTDS*/ "Show less")
                : s._(/*BTDS*/ "Show more"),
            })),
          (t[20] = d),
          (t[21] = h),
          (t[22] = y),
          (t[23] = g),
          (t[24] = l),
          (t[25] = I))
        : (I = t[25]);
      var T;
      t[26] !== k || t[27] !== I
        ? ((T = u.jsxs(
            "div",
            babelHelpers.extends({}, L, { children: [k, I] }),
          )),
          (t[26] = k),
          (t[27] = I),
          (t[28] = T))
        : (T = t[28]);
      var D;
      t[29] !== T || t[30] !== R
        ? ((D = u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            align: "start",
            children: [R, T],
          })),
          (t[29] = T),
          (t[30] = R),
          (t[31] = D))
        : (D = t[31]);
      var x;
      return (
        t[32] !== D || t[33] !== v
          ? ((x = u.jsx("div", babelHelpers.extends({}, v, { children: D }))),
            (t[32] = D),
            (t[33] = v),
            (t[34] = x))
          : (x = t[34]),
        x
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(63),
        n = e.adAccountData,
        a = e.adgroupSpecs,
        i = e.audienceData,
        l = e.budgetOptions,
        c = e.currentLocallyUploadedMediaCollection,
        p = e.defaultBudget,
        _ = e.dsaData,
        f = e.lwiAudiences,
        C = e.placementData,
        v = e.selectedBudget,
        S = m(!1),
        R = S[0],
        L = S[1],
        E;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {}), (t[0] = E))
        : (E = t[0]);
      var k = m(E),
        I = k[0],
        T = k[1],
        D = d(r("WAWebBizAdCreationConfigContext")),
        x = d(r("WAWebBizAdCreationValidateSpecContext")),
        $ = r("useWAWebBizAdCreationIdentityContext")(),
        P;
      t[1] !== ($ == null ? void 0 : $.relayEnvironment)
        ? ((P = function () {
            var e = $ == null ? void 0 : $.relayEnvironment;
            if (e == null) return "N/A";
            try {
              return o("CometRelay").getActorID(e);
            } catch (e) {
              return "N/A";
            }
          }),
          (t[1] = $ == null ? void 0 : $.relayEnvironment),
          (t[2] = P))
        : (P = t[2]);
      var N = P,
        M;
      t[3] !== R
        ? ((M = function () {
            L(!R);
          }),
          (t[3] = R),
          (t[4] = M))
        : (M = t[4]);
      var w = M,
        A;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = function (t) {
            T(function (e) {
              var n;
              return babelHelpers.extends({}, e, ((n = {}), (n[t] = !e[t]), n));
            });
          }),
          (t[5] = A))
        : (A = t[5]);
      var F = A,
        O;
      t[6] !== n
        ? ((O = { label: "Ad Account Data", value: n }), (t[6] = n), (t[7] = O))
        : (O = t[7]);
      var B;
      t[8] !== a
        ? ((B = { label: "Adgroup Specs", value: a }), (t[8] = a), (t[9] = B))
        : (B = t[9]);
      var W;
      t[10] !== i
        ? ((W = { label: "Audience Data (selected audience)", value: i }),
          (t[10] = i),
          (t[11] = W))
        : (W = t[11]);
      var q;
      t[12] !== _
        ? ((q = { label: "DSA Data", value: _ }), (t[12] = _), (t[13] = q))
        : (q = t[13]);
      var U;
      t[14] !== f
        ? ((U = { label: "LWI Audiences", value: f }), (t[14] = f), (t[15] = U))
        : (U = t[15]);
      var V;
      t[16] !== C
        ? ((V = { label: "Placement Data", value: C }),
          (t[16] = C),
          (t[17] = V))
        : (V = t[17]);
      var H;
      t[18] !== v
        ? ((H = { label: "Selected Budget", value: v }),
          (t[18] = v),
          (t[19] = H))
        : (H = t[19]);
      var G;
      t[20] !== l
        ? ((G = { label: "Budget Options", value: l }),
          (t[20] = l),
          (t[21] = G))
        : (G = t[21]);
      var z;
      t[22] !== p
        ? ((z = { label: "Default Budget", value: p }),
          (t[22] = p),
          (t[23] = z))
        : (z = t[23]);
      var j;
      t[24] !== V ||
      t[25] !== H ||
      t[26] !== G ||
      t[27] !== z ||
      t[28] !== O ||
      t[29] !== B ||
      t[30] !== W ||
      t[31] !== q ||
      t[32] !== U
        ? ((j = [O, B, W, q, U, V, H, G, z]),
          (t[24] = V),
          (t[25] = H),
          (t[26] = G),
          (t[27] = z),
          (t[28] = O),
          (t[29] = B),
          (t[30] = W),
          (t[31] = q),
          (t[32] = U),
          (t[33] = j))
        : (j = t[33]);
      var K = j,
        Q;
      if (
        t[34] !== (D == null ? void 0 : D.entryPoint) ||
        t[35] !== (D == null ? void 0 : D.flow) ||
        t[36] !== (D == null ? void 0 : D.flowID) ||
        t[37] !== (D == null ? void 0 : D.pageID) ||
        t[38] !== (D == null ? void 0 : D.product) ||
        t[39] !== c ||
        t[40] !== I ||
        t[41] !== N ||
        t[42] !== w ||
        t[43] !== $ ||
        t[44] !== R ||
        t[45] !== K ||
        t[46] !== (x == null ? void 0 : x.isValidating) ||
        t[47] !== (x == null ? void 0 : x.notices)
      ) {
        var X,
          Y,
          J,
          Z,
          ee =
            (X = c == null ? void 0 : c.getPreviewableMedias()) != null
              ? X
              : [],
          te = ee.map(b),
          ne = [
            {
              label: "Boosted Component Product",
              value: D == null ? void 0 : D.product,
            },
            { label: "Entrypoint", value: D == null ? void 0 : D.entryPoint },
            { label: "Page ID", value: D == null ? void 0 : D.pageID },
            { label: "Flow", value: D == null ? void 0 : D.flow },
            { label: "Flow ID", value: D == null ? void 0 : D.flowID },
          ],
          re = function () {
            return $ == null
              ? "N/A"
              : $.strongRelayEnvironment != null
                ? "Not required"
                : "Required";
          },
          oe = [
            {
              label: "Account Type",
              value:
                (Y = $ == null ? void 0 : $.accountType) != null
                  ? Y
                  : "Not set",
            },
            { label: "Actor ID", value: N() },
            {
              label: "WAA Eligible",
              value: $ != null && $.isWAAEligible ? "Yes" : "No",
            },
            { label: "Email Verification Status", value: re() },
          ],
          ae = [
            {
              label: "Is Validating",
              value: (J = x == null ? void 0 : x.isValidating) != null ? J : !1,
            },
            {
              label: "Notices",
              value: (Z = x == null ? void 0 : x.notices) != null ? Z : {},
            },
          ],
          ie;
        t[49] !== R
          ? ((ie = {
              0: {
                className:
                  "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62",
              },
              1: {
                className:
                  "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62 x1egiwwb",
              },
            }[!!R << 0]),
            (t[49] = R),
            (t[50] = ie))
          : (ie = t[50]);
        var le;
        t[51] === Symbol.for("react.memo_cache_sentinel")
          ? ((le = {
              className:
                "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
            }),
            (t[51] = le))
          : (le = t[51]);
        var se;
        t[52] !== w
          ? ((se = function (t) {
              (t.key === "Enter" || t.key === " ") && (t.preventDefault(), w());
            }),
            (t[52] = w),
            (t[53] = se))
          : (se = t[53]);
        var ue;
        t[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((ue = u.jsx("span", {
              className: "x14ug900 x1f6kntn x117nqv4 x1hx0egp",
              children: s._(/*BTDS*/ "Hawk Tool"),
            })),
            (t[54] = ue))
          : (ue = t[54]);
        var ce;
        t[55] !== R
          ? ((ce = {
              0: {
                className: "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c",
              },
              1: { className: "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl" },
            }[!!R << 0]),
            (t[55] = R),
            (t[56] = ce))
          : (ce = t[56]);
        var de;
        t[57] !== ce
          ? ((de = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              children: [
                ue,
                u.jsx(
                  "span",
                  babelHelpers.extends({}, ce, { children: "\u25B6" }),
                ),
              ],
            })),
            (t[57] = ce),
            (t[58] = de))
          : (de = t[58]);
        var me;
        (t[59] !== w || t[60] !== se || t[61] !== de
          ? ((me = u.jsx(
              "div",
              babelHelpers.extends({}, le, {
                onClick: w,
                role: "button",
                tabIndex: 0,
                onKeyDown: se,
                children: de,
              }),
            )),
            (t[59] = w),
            (t[60] = se),
            (t[61] = de),
            (t[62] = me))
          : (me = t[62]),
          (Q = u.jsxs(
            "div",
            babelHelpers.extends({}, ie, {
              children: [
                me,
                R &&
                  u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                    selectable: !0,
                    className:
                      "xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq x1hx0egp x162x9ue",
                    children: [
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Spec Values"),
                        children: K.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            y,
                            {
                              label: n,
                              value: r,
                              fieldKeyPrefix: "spec",
                              isLast: t === K.length - 1,
                              expandedJsonFields: I,
                              toggleJsonField: F,
                            },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Config Values"),
                        children: ne.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            h,
                            { label: n, value: r, isLast: t === ne.length - 1 },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Local Medias"),
                        children:
                          te.length === 0
                            ? u.jsx("div", {
                                className:
                                  "x120ee7l x1q0q8m5 xso031l x16ovd2e x12xbjc7 x1hx0egp",
                                children: u.jsx(o("WAWebFlex.react").FlexRow, {
                                  justify: "all",
                                  align: "start",
                                  children: u.jsx("div", {
                                    className:
                                      "xhslqc4 x1nxh6w3 xk50ysn x1yc453h x1hx0egp",
                                    children: s._(
                                      /*BTDS*/ "No media available",
                                    ),
                                  }),
                                }),
                              })
                            : te.map(function (e, t) {
                                var n = e.label,
                                  r = e.value;
                                return u.jsx(
                                  y,
                                  {
                                    label: n,
                                    value: r,
                                    fieldKeyPrefix: "media",
                                    isLast: t === te.length - 1,
                                    expandedJsonFields: I,
                                    toggleJsonField: F,
                                  },
                                  n,
                                );
                              }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Identity"),
                        children: oe.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            h,
                            { label: n, value: r, isLast: t === oe.length - 1 },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Validation Notices"),
                        children: ae.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            y,
                            {
                              label: n,
                              value: r,
                              fieldKeyPrefix: "validation",
                              isLast: t === ae.length - 1,
                              expandedJsonFields: I,
                              toggleJsonField: F,
                            },
                            n,
                          );
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          )),
          (t[34] = D == null ? void 0 : D.entryPoint),
          (t[35] = D == null ? void 0 : D.flow),
          (t[36] = D == null ? void 0 : D.flowID),
          (t[37] = D == null ? void 0 : D.pageID),
          (t[38] = D == null ? void 0 : D.product),
          (t[39] = c),
          (t[40] = I),
          (t[41] = N),
          (t[42] = w),
          (t[43] = $),
          (t[44] = R),
          (t[45] = K),
          (t[46] = x == null ? void 0 : x.isValidating),
          (t[47] = x == null ? void 0 : x.notices),
          (t[48] = Q));
      } else Q = t[48];
      return Q;
    }
    function b(e) {
      return {
        label: "Media " + e.id,
        value: { id: e.id, fullPreview: e.fullPreview, type: e.type },
      };
    }
    var v = r("withWAWebBizAdCreationSpecContext")(C, function (e) {
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
    l.default = v;
  },
  226,
);
