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
      var t = o("react-compiler-runtime").c(69),
        n = e.adAccountData,
        a = e.adgroupSpecs,
        i = e.audienceData,
        l = e.budgetOptions,
        c = e.currentLocallyUploadedMediaCollection,
        p = e.defaultBudget,
        _ = e.dsaData,
        f = e.durationData,
        C = e.lwiAudiences,
        v = e.placementData,
        S = e.selectedBudget,
        R = m(!1),
        L = R[0],
        E = R[1],
        k;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {}), (t[0] = k))
        : (k = t[0]);
      var I = m(k),
        T = I[0],
        D = I[1],
        x = d(r("WAWebBizAdCreationConfigContext")),
        $ = d(r("WAWebBizAdCreationValidateSpecContext")),
        P = r("useWAWebBizAdCreationIdentityContext")(),
        N;
      t[1] !== (P == null ? void 0 : P.relayEnvironment)
        ? ((N = function () {
            var e = P == null ? void 0 : P.relayEnvironment;
            if (e == null) return "N/A";
            try {
              return o("CometRelay").getActorID(e);
            } catch (e) {
              return "N/A";
            }
          }),
          (t[1] = P == null ? void 0 : P.relayEnvironment),
          (t[2] = N))
        : (N = t[2]);
      var M = N,
        w;
      t[3] !== L
        ? ((w = function () {
            E(!L);
          }),
          (t[3] = L),
          (t[4] = w))
        : (w = t[4]);
      var A = w,
        F;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            D(function (e) {
              var n;
              return babelHelpers.extends({}, e, ((n = {}), (n[t] = !e[t]), n));
            });
          }),
          (t[5] = F))
        : (F = t[5]);
      var O = F,
        B;
      t[6] !== n
        ? ((B = { label: "Ad Account Data", value: n }), (t[6] = n), (t[7] = B))
        : (B = t[7]);
      var W;
      t[8] !== a
        ? ((W = { label: "Adgroup Specs", value: a }), (t[8] = a), (t[9] = W))
        : (W = t[9]);
      var q;
      t[10] !== i
        ? ((q = { label: "Audience Data (selected audience)", value: i }),
          (t[10] = i),
          (t[11] = q))
        : (q = t[11]);
      var U;
      t[12] !== _
        ? ((U = { label: "DSA Data", value: _ }), (t[12] = _), (t[13] = U))
        : (U = t[13]);
      var V;
      t[14] !== C
        ? ((V = { label: "LWI Audiences", value: C }), (t[14] = C), (t[15] = V))
        : (V = t[15]);
      var H;
      t[16] !== v
        ? ((H = { label: "Placement Data", value: v }),
          (t[16] = v),
          (t[17] = H))
        : (H = t[17]);
      var G;
      t[18] !== S
        ? ((G = { label: "Selected Budget", value: S }),
          (t[18] = S),
          (t[19] = G))
        : (G = t[19]);
      var z;
      t[20] !== l
        ? ((z = { label: "Budget Options", value: l }),
          (t[20] = l),
          (t[21] = z))
        : (z = t[21]);
      var j;
      t[22] !== p
        ? ((j = { label: "Default Budget", value: p }),
          (t[22] = p),
          (t[23] = j))
        : (j = t[23]);
      var K;
      t[24] !== f.durationInDays
        ? ((K = { label: "Duration In Days", value: f.durationInDays }),
          (t[24] = f.durationInDays),
          (t[25] = K))
        : (K = t[25]);
      var Q;
      t[26] !== f.initialDurationInDays
        ? ((Q = {
            label: "Default Duration In Days",
            value: f.initialDurationInDays,
          }),
          (t[26] = f.initialDurationInDays),
          (t[27] = Q))
        : (Q = t[27]);
      var X;
      t[28] !== H ||
      t[29] !== G ||
      t[30] !== z ||
      t[31] !== j ||
      t[32] !== K ||
      t[33] !== Q ||
      t[34] !== B ||
      t[35] !== W ||
      t[36] !== q ||
      t[37] !== U ||
      t[38] !== V
        ? ((X = [B, W, q, U, V, H, G, z, j, K, Q]),
          (t[28] = H),
          (t[29] = G),
          (t[30] = z),
          (t[31] = j),
          (t[32] = K),
          (t[33] = Q),
          (t[34] = B),
          (t[35] = W),
          (t[36] = q),
          (t[37] = U),
          (t[38] = V),
          (t[39] = X))
        : (X = t[39]);
      var Y = X,
        J;
      if (
        t[40] !== (x == null ? void 0 : x.entryPoint) ||
        t[41] !== (x == null ? void 0 : x.flow) ||
        t[42] !== (x == null ? void 0 : x.flowID) ||
        t[43] !== (x == null ? void 0 : x.pageID) ||
        t[44] !== (x == null ? void 0 : x.product) ||
        t[45] !== c ||
        t[46] !== T ||
        t[47] !== M ||
        t[48] !== A ||
        t[49] !== P ||
        t[50] !== L ||
        t[51] !== Y ||
        t[52] !== ($ == null ? void 0 : $.isValidating) ||
        t[53] !== ($ == null ? void 0 : $.notices)
      ) {
        var Z,
          ee,
          te,
          ne,
          re =
            (Z = c == null ? void 0 : c.getPreviewableMedias()) != null
              ? Z
              : [],
          oe = re.map(b),
          ae = [
            {
              label: "Boosted Component Product",
              value: x == null ? void 0 : x.product,
            },
            { label: "Entrypoint", value: x == null ? void 0 : x.entryPoint },
            { label: "Page ID", value: x == null ? void 0 : x.pageID },
            { label: "Flow", value: x == null ? void 0 : x.flow },
            { label: "Flow ID", value: x == null ? void 0 : x.flowID },
          ],
          ie = function () {
            return P == null
              ? "N/A"
              : P.strongRelayEnvironment != null
                ? "Not required"
                : "Required";
          },
          le = [
            {
              label: "Account Type",
              value:
                (ee = P == null ? void 0 : P.accountType) != null
                  ? ee
                  : "Not set",
            },
            { label: "Actor ID", value: M() },
            {
              label: "WAA Eligible",
              value: P != null && P.isWAAEligible ? "Yes" : "No",
            },
            { label: "Email Verification Status", value: ie() },
          ],
          se = [
            {
              label: "Is Validating",
              value:
                (te = $ == null ? void 0 : $.isValidating) != null ? te : !1,
            },
            {
              label: "Notices",
              value: (ne = $ == null ? void 0 : $.notices) != null ? ne : {},
            },
          ],
          ue;
        t[55] !== L
          ? ((ue = {
              0: {
                className:
                  "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62",
              },
              1: {
                className:
                  "xx42vgk xbogo7e x120ee7l x1vb5itz xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x6ikm8r x10wlt62 x1egiwwb",
              },
            }[!!L << 0]),
            (t[55] = L),
            (t[56] = ue))
          : (ue = t[56]);
        var ce;
        t[57] === Symbol.for("react.memo_cache_sentinel")
          ? ((ce = {
              className:
                "x6s0dn4 x1280gxy x120ee7l x1q0q8m5 xso031l x1ypdohk x1xrf6ya xscbp6u xf7dkkf xv54qhq",
            }),
            (t[57] = ce))
          : (ce = t[57]);
        var de;
        t[58] !== A
          ? ((de = function (t) {
              (t.key === "Enter" || t.key === " ") && (t.preventDefault(), A());
            }),
            (t[58] = A),
            (t[59] = de))
          : (de = t[59]);
        var me;
        t[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((me = u.jsx("span", {
              className: "x14ug900 x1f6kntn x117nqv4 x1hx0egp",
              children: s._(/*BTDS*/ "Hawk Tool"),
            })),
            (t[60] = me))
          : (me = t[60]);
        var pe;
        t[61] !== L
          ? ((pe = {
              0: {
                className: "xhslqc4 x1pg5gke x150mmf0 x7p49u4 xd7bwuw x1jaox4c",
              },
              1: { className: "xhslqc4 x1pg5gke x150mmf0 x1jaox4c x1iffjtl" },
            }[!!L << 0]),
            (t[61] = L),
            (t[62] = pe))
          : (pe = t[62]);
        var _e;
        t[63] !== pe
          ? ((_e = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              children: [
                me,
                u.jsx(
                  "span",
                  babelHelpers.extends({}, pe, { children: "\u25B6" }),
                ),
              ],
            })),
            (t[63] = pe),
            (t[64] = _e))
          : (_e = t[64]);
        var fe;
        (t[65] !== A || t[66] !== de || t[67] !== _e
          ? ((fe = u.jsx(
              "div",
              babelHelpers.extends({}, ce, {
                onClick: A,
                role: "button",
                tabIndex: 0,
                onKeyDown: de,
                children: _e,
              }),
            )),
            (t[65] = A),
            (t[66] = de),
            (t[67] = _e),
            (t[68] = fe))
          : (fe = t[68]),
          (J = u.jsxs(
            "div",
            babelHelpers.extends({}, ue, {
              children: [
                fe,
                L &&
                  u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableDiv, {
                    selectable: !0,
                    className:
                      "xw2csxc x1odjw0f x1p57kb1 xvpt6g3 xf7dkkf xv54qhq x1hx0egp x162x9ue",
                    children: [
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Spec Values"),
                        children: Y.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            y,
                            {
                              label: n,
                              value: r,
                              fieldKeyPrefix: "spec",
                              isLast: t === Y.length - 1,
                              expandedJsonFields: T,
                              toggleJsonField: O,
                            },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Config Values"),
                        children: ae.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            h,
                            { label: n, value: r, isLast: t === ae.length - 1 },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Local Medias"),
                        children:
                          oe.length === 0
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
                            : oe.map(function (e, t) {
                                var n = e.label,
                                  r = e.value;
                                return u.jsx(
                                  y,
                                  {
                                    label: n,
                                    value: r,
                                    fieldKeyPrefix: "media",
                                    isLast: t === oe.length - 1,
                                    expandedJsonFields: T,
                                    toggleJsonField: O,
                                  },
                                  n,
                                );
                              }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Identity"),
                        children: le.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            h,
                            { label: n, value: r, isLast: t === le.length - 1 },
                            n,
                          );
                        }),
                      }),
                      u.jsx(g, {
                        title: s._(/*BTDS*/ "Validation Notices"),
                        children: se.map(function (e, t) {
                          var n = e.label,
                            r = e.value;
                          return u.jsx(
                            y,
                            {
                              label: n,
                              value: r,
                              fieldKeyPrefix: "validation",
                              isLast: t === se.length - 1,
                              expandedJsonFields: T,
                              toggleJsonField: O,
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
          (t[40] = x == null ? void 0 : x.entryPoint),
          (t[41] = x == null ? void 0 : x.flow),
          (t[42] = x == null ? void 0 : x.flowID),
          (t[43] = x == null ? void 0 : x.pageID),
          (t[44] = x == null ? void 0 : x.product),
          (t[45] = c),
          (t[46] = T),
          (t[47] = M),
          (t[48] = A),
          (t[49] = P),
          (t[50] = L),
          (t[51] = Y),
          (t[52] = $ == null ? void 0 : $.isValidating),
          (t[53] = $ == null ? void 0 : $.notices),
          (t[54] = J));
      } else J = t[54];
      return J;
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
        durationData: e.durationData,
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
