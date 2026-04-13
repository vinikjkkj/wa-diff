__d(
  "WAWebBizMerchantDetailsEntityTypePopup.react",
  [
    "fbt",
    "WAWebBizComplianceUtil",
    "WAWebBusinessProfileTypes",
    "WAWebButton.react",
    "WAWebComplianceConstants",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebRichTextField.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useState,
      f = {
        cursorPointer: { cursor: "x1ypdohk", $$css: !0 },
        footer: {
          backgroundColor: "x1280gxy",
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          paddingTop: "x889kno",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xe2zdcy",
          $$css: !0,
        },
        indentedOption: { marginInlineStart: "xvc51xn", $$css: !0 },
        inputWrapper: {
          alignSelf: "xamitd3",
          display: "x78zum5",
          paddingInlineEnd: "x1xnnf8n",
          $$css: !0,
        },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(60),
        n = e.legalEntityDetails,
        a = e.onSave,
        i = _(n == null ? void 0 : n.entityType),
        l = i[0],
        u = i[1],
        d = _(n == null ? void 0 : n.entityTypeCustom),
        m = d[0],
        g = d[1],
        y = _(n == null ? void 0 : n.isRegistered),
        C = y[0],
        b = y[1],
        v;
      t[0] !== l || t[1] !== (n == null ? void 0 : n.entityType)
        ? ((v = function () {
            l !== (n == null ? void 0 : n.entityType) && (g(""), b(!1));
          }),
          (t[0] = l),
          (t[1] = n == null ? void 0 : n.entityType),
          (t[2] = v))
        : (v = t[2]);
      var S = n == null ? void 0 : n.entityType,
        R;
      (t[3] !== l || t[4] !== S
        ? ((R = [l, S]), (t[3] = l), (t[4] = S), (t[5] = R))
        : (R = t[5]),
        p(v, R));
      var L;
      t[6] !== l || t[7] !== m || t[8] !== C || t[9] !== a
        ? ((L = function () {
            (o("WAWebModalManager").ModalManager.close(), a(l, m, C));
          }),
          (t[6] = l),
          (t[7] = m),
          (t[8] = C),
          (t[9] = a),
          (t[10] = L))
        : (L = t[10]);
      var E = L,
        k;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            u(t.target.value);
          }),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            return b(t.target.checked);
          }),
          (t[12] = T))
        : (T = t[12]);
      var D = T,
        x;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Registered business")), (t[13] = x))
        : (x = t[13]);
      var $;
      t[14] !== C
        ? (($ = c.jsx(h, {
            value: C,
            label: x,
            inputType: "checkbox",
            xstyle: f.indentedOption,
            onChange: D,
            "data-testid": void 0,
          })),
          (t[14] = C),
          (t[15] = $))
        : ($ = t[15]);
      var P = $,
        N;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { surface: "unknown", viewName: "biz-merchant-entity-type" }),
          (t[16] = N))
        : (N = t[16]);
      var M;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Business type"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (t[17] = M))
        : (M = t[17]);
      var w;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "xqy66fx x5zjp28 xr1496l x162tt16" }), (t[18] = w))
        : (w = t[18]);
      var A;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Limited liability partnership")), (t[19] = A))
        : (A = t[19]);
      var F;
      t[20] !== l
        ? ((F = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions
              .limitedLiabilityPartnership,
            value: l,
            label: A,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[20] = l),
          (t[21] = F))
        : (F = t[21]);
      var O;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Sole proprietorship")), (t[22] = O))
        : (O = t[22]);
      var B;
      t[23] !== l
        ? ((B = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions
              .soleProprietorship,
            value: l,
            label: O,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[23] = l),
          (t[24] = B))
        : (B = t[24]);
      var W;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Partnership")), (t[25] = W))
        : (W = t[25]);
      var q;
      t[26] !== l
        ? ((q = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions.partnership,
            value: l,
            label: W,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[26] = l),
          (t[27] = q))
        : (q = t[27]);
      var U =
          l ===
            o("WAWebBusinessProfileTypes").businessTypeOptions.partnership && P,
        V;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Public company")), (t[28] = V))
        : (V = t[28]);
      var H;
      t[29] !== l
        ? ((H = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions
              .publicCompany,
            value: l,
            label: V,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[29] = l),
          (t[30] = H))
        : (H = t[30]);
      var G;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "Private company")), (t[31] = G))
        : (G = t[31]);
      var z;
      t[32] !== l
        ? ((z = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions
              .privateCompany,
            value: l,
            label: G,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[32] = l),
          (t[33] = z))
        : (z = t[33]);
      var j;
      t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Other")), (t[34] = j))
        : (j = t[34]);
      var K;
      t[35] !== l
        ? ((K = c.jsx(h, {
            id: o("WAWebBusinessProfileTypes").businessTypeOptions.other,
            value: l,
            label: j,
            onChange: I,
            "data-testid": void 0,
          })),
          (t[35] = l),
          (t[36] = K))
        : (K = t[36]);
      var Q;
      t[37] !== l || t[38] !== m || t[39] !== P
        ? ((Q =
            l === o("WAWebBusinessProfileTypes").businessTypeOptions.other &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx("div", {
                  className: "xvc51xn",
                  "data-testid": void 0,
                  children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    value: m,
                    editable: !0,
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.ENTITY_TYPE_CUSTOM,
                    inputPlaceholder: s._(/*BTDS*/ "Label"),
                    showRemaining: !0,
                    onChange: function (t) {
                      var e = t.text;
                      return g(e);
                    },
                    theme: "text-input",
                    lowProfile: !0,
                  }),
                }),
                P,
              ],
            })),
          (t[37] = l),
          (t[38] = m),
          (t[39] = P),
          (t[40] = Q))
        : (Q = t[40]);
      var X;
      t[41] !== F ||
      t[42] !== B ||
      t[43] !== q ||
      t[44] !== U ||
      t[45] !== H ||
      t[46] !== z ||
      t[47] !== K ||
      t[48] !== Q
        ? ((X = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(
              "form",
              babelHelpers.extends({}, w, {
                children: c.jsxs("ol", { children: [F, B, q, U, H, z, K, Q] }),
              }),
            ),
          })),
          (t[41] = F),
          (t[42] = B),
          (t[43] = q),
          (t[44] = U),
          (t[45] = H),
          (t[46] = z),
          (t[47] = K),
          (t[48] = Q),
          (t[49] = X))
        : (X = t[49]);
      var Y;
      t[50] !== l || t[51] !== m
        ? ((Y =
            l === o("WAWebBusinessProfileTypes").businessTypeOptions.other &&
            !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(m)),
          (t[50] = l),
          (t[51] = m),
          (t[52] = Y))
        : (Y = t[52]);
      var J;
      t[53] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s._(/*BTDS*/ "Save")), (t[53] = J))
        : (J = t[53]);
      var Z;
      t[54] !== E || t[55] !== Y
        ? ((Z = c.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            xstyle: f.footer,
            children: c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                onClick: E,
                disabled: Y,
                children: J,
              }),
            }),
          })),
          (t[54] = E),
          (t[55] = Y),
          (t[56] = Z))
        : (Z = t[56]);
      var ee;
      return (
        t[57] !== X || t[58] !== Z
          ? ((ee = c.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              children: c.jsxs(r("WAWebDrawer.react"), {
                theme: "settings",
                tsNavigationData: N,
                children: [M, X, Z],
              }),
            })),
            (t[57] = X),
            (t[58] = Z),
            (t[59] = ee))
          : (ee = t[59]),
        ee
      );
    }
    function h(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t["data-testid"],
        i = t.id,
        l = t.inputType,
        s = t.label,
        u = t.onChange,
        d = t.value,
        m = t.xstyle,
        p = a === void 0 ? "merchant-details-entity-type-option-popup" : a,
        _ = l === void 0 ? "radio" : l,
        g;
      n[0] !== i || n[1] !== s
        ? ((g = i || s.toString()), (n[0] = i), (n[1] = s), (n[2] = g))
        : (g = n[2]);
      var h = g,
        y;
      n[3] !== m
        ? ((y = (e || (e = r("stylex"))).props(f.cursorPointer, m)),
          (n[3] = m),
          (n[4] = y))
        : (y = n[4]);
      var C = _ === "radio" ? d === h : d,
        b;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x1ypdohk" }), (n[5] = b))
        : (b = n[5]);
      var v;
      n[6] !== h || n[7] !== _ || n[8] !== u || n[9] !== C
        ? ((v = c.jsx(r("WAWebFlexItem.react"), {
            xstyle: f.inputWrapper,
            children: c.jsx(
              "input",
              babelHelpers.extends(
                { id: h, value: h, type: _, name: "entityType", checked: C },
                b,
                { onChange: u },
              ),
            ),
          })),
          (n[6] = h),
          (n[7] = _),
          (n[8] = u),
          (n[9] = C),
          (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = {
            className:
              "x1lliihq x1lkfr7t x889kno xyri2b x1a8lsjc x1c1uobl x1ypdohk",
          }),
          (n[11] = S))
        : (S = n[11]);
      var R = p + "-label",
        L;
      n[12] !== h || n[13] !== s || n[14] !== R
        ? ((L = c.jsx(r("WAWebFlexItem.react"), {
            grow: 1,
            children: c.jsx(
              "label",
              babelHelpers.extends({ htmlFor: h }, S, {
                "data-testid": void 0,
                children: s,
              }),
            ),
          })),
          (n[12] = h),
          (n[13] = s),
          (n[14] = R),
          (n[15] = L))
        : (L = n[15]);
      var E;
      n[16] !== L || n[17] !== v
        ? ((E = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [v, L],
          })),
          (n[16] = L),
          (n[17] = v),
          (n[18] = E))
        : (E = n[18]);
      var k;
      return (
        n[19] !== E || n[20] !== y
          ? ((k = c.jsx("li", babelHelpers.extends({}, y, { children: E }))),
            (n[19] = E),
            (n[20] = y),
            (n[21] = k))
          : (k = n[21]),
        k
      );
    }
    l.default = g;
  },
  226,
);
