__d(
  "WAWebAddCatalogItemForm.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileLabels",
    "WAWebCatalogItemMediaUpload.react",
    "WAWebCurrencyUtils",
    "WAWebFlex.react",
    "WAWebStopEvent",
    "WDSBaseCheckbox.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(92),
        n = e._countryOfOrigin,
        a = e._onCountryOfOriginChange,
        i = e.countriesOfOrigin,
        l = e.countryOfOriginName,
        c = e.currency,
        d = e.description,
        p = e.descriptionError,
        _ = e.hideItem,
        f = e.imageError,
        g = e.imagePanelRef,
        h = e.itemCode,
        y = e.itemCodeError,
        C = e.itemName,
        b = e.itemNameError,
        v = e.link,
        S = e.linkError,
        R = e.onDescriptionChange,
        L = e.onHideItemChange,
        E = e.onImageChange,
        k = e.onItemCodeChange,
        I = e.onItemNameChange,
        T = e.onLinkBlur,
        D = e.onLinkChange,
        x = e.onPriceChange,
        $ = e.onSalePriceChange,
        P = e.price,
        N = e.priceError,
        M = e.salePrice,
        w = e.salePriceError,
        A = m(""),
        F = A[0],
        O = A[1],
        B = m(!1),
        W = B[0],
        q = B[1],
        U;
      t[0] !== c
        ? ((U =
            c !== ""
              ? o("WAWebCurrencyUtils").formatAmount1000ToParts(c, 0).symbol
              : ""),
          (t[0] = c),
          (t[1] = U))
        : (U = t[1]);
      var V = U,
        H;
      t[2] !== V
        ? ((H = {
            priceInputLabel: s._(
              /*BTDS*/ "Price {currencySymbol} (Recommended)",
              [s._param("currencySymbol", V)],
            ),
            salePriceInputLabel: s._(
              /*BTDS*/ "Sale price {currencySymbol} (optional)",
              [s._param("currencySymbol", V)],
            ),
          }),
          (t[2] = V),
          (t[3] = H))
        : (H = t[3]);
      var G = H,
        z = G.priceInputLabel,
        j = G.salePriceInputLabel,
        K;
      e: {
        if (F === "") {
          K = i;
          break e;
        }
        var Q;
        if (t[4] !== i || t[5] !== F) {
          var X = F.toLowerCase();
          ((Q = i.filter(function (e) {
            var t = e[0],
              n = e[1],
              r = typeof n == "string" ? n : t;
            return r.toLowerCase().includes(X);
          })),
            (t[4] = i),
            (t[5] = F),
            (t[6] = Q));
        } else Q = t[6];
        K = Q;
      }
      var Y = K,
        J;
      t[7] !== a
        ? ((J = function (t) {
            (a(t), q(!1), O(""));
          }),
          (t[7] = a),
          (t[8] = J))
        : (J = t[8]);
      var Z = J,
        ee;
      t[9] !== W
        ? ((ee = function (t) {
            (O(t), W || q(!0));
          }),
          (t[9] = W),
          (t[10] = ee))
        : (ee = t[10]);
      var te = ee,
        ne;
      t[11] !== l || t[12] !== W
        ? ((ne = function () {
            W || (O(l), q(!0));
          }),
          (t[11] = l),
          (t[12] = W),
          (t[13] = ne))
        : (ne = t[13]);
      var re = ne,
        oe;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = function () {
            (q(!1), O(""));
          }),
          (t[14] = oe))
        : (oe = t[14]);
      var ae = oe,
        ie;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = {
            className:
              "x78zum5 xdt5ytf x1f0uite xs2akgl x1phvje8 xcldk2z x1n2onr6",
          }),
          (t[15] = ie))
        : (ie = t[15]);
      var le;
      t[16] !== f || t[17] !== g || t[18] !== E
        ? ((le = u.jsx(r("WAWebCatalogItemMediaUpload.react"), {
            ref: g,
            error: f,
            maxImageCount: 10,
            onChange: E,
          })),
          (t[16] = f),
          (t[17] = g),
          (t[18] = E),
          (t[19] = le))
        : (le = t[19]);
      var se;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = o("WAWebBusinessProfileLabels").getItemNameLabel()),
          (t[20] = se))
        : (se = t[20]);
      var ue = b != null && b !== "",
        ce;
      t[21] !== C || t[22] !== b || t[23] !== I || t[24] !== ue
        ? ((ce = u.jsx(r("WDSTextField.react"), {
            label: se,
            value: C,
            onValueChange: I,
            error: ue,
            errorText: b,
          })),
          (t[21] = C),
          (t[22] = b),
          (t[23] = I),
          (t[24] = ue),
          (t[25] = ce))
        : (ce = t[25]);
      var de = N != null && N !== "",
        me;
      t[26] !== x || t[27] !== P || t[28] !== N || t[29] !== z || t[30] !== de
        ? ((me = u.jsx(r("WDSTextField.react"), {
            label: z,
            value: P,
            onValueChange: x,
            error: de,
            errorText: N,
          })),
          (t[26] = x),
          (t[27] = P),
          (t[28] = N),
          (t[29] = z),
          (t[30] = de),
          (t[31] = me))
        : (me = t[31]);
      var pe = w != null && w !== "",
        _e;
      t[32] !== $ || t[33] !== M || t[34] !== w || t[35] !== j || t[36] !== pe
        ? ((_e = u.jsx(r("WDSTextField.react"), {
            label: j,
            value: M,
            onValueChange: $,
            error: pe,
            errorText: w,
          })),
          (t[32] = $),
          (t[33] = M),
          (t[34] = w),
          (t[35] = j),
          (t[36] = pe),
          (t[37] = _e))
        : (_e = t[37]);
      var fe;
      t[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = o("WAWebBusinessProfileLabels").getItemDescriptionLabel()),
          (t[38] = fe))
        : (fe = t[38]);
      var ge = p != null && p !== "",
        he;
      t[39] !== d || t[40] !== p || t[41] !== R || t[42] !== ge
        ? ((he = u.jsx(r("WDSTextField.react"), {
            label: fe,
            value: d,
            onValueChange: R,
            error: ge,
            errorText: p,
          })),
          (t[39] = d),
          (t[40] = p),
          (t[41] = R),
          (t[42] = ge),
          (t[43] = he))
        : (he = t[43]);
      var ye;
      t[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((ye = o("WAWebBusinessProfileLabels").getItemLinkLabel()),
          (t[44] = ye))
        : (ye = t[44]);
      var Ce = S != null && S !== "",
        be;
      t[45] !== v || t[46] !== S || t[47] !== T || t[48] !== D || t[49] !== Ce
        ? ((be = u.jsx(r("WDSTextField.react"), {
            label: ye,
            value: v,
            onValueChange: D,
            onBlur: T,
            error: Ce,
            errorText: S,
          })),
          (t[45] = v),
          (t[46] = S),
          (t[47] = T),
          (t[48] = D),
          (t[49] = Ce),
          (t[50] = be))
        : (be = t[50]);
      var ve;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = o("WAWebBusinessProfileLabels").getItemCodeLabel()),
          (t[51] = ve))
        : (ve = t[51]);
      var Se = y != null && y !== "",
        Re;
      t[52] !== h || t[53] !== y || t[54] !== k || t[55] !== Se
        ? ((Re = u.jsx(r("WDSTextField.react"), {
            label: ve,
            value: h,
            onValueChange: k,
            error: Se,
            errorText: y,
          })),
          (t[52] = h),
          (t[53] = y),
          (t[54] = k),
          (t[55] = Se),
          (t[56] = Re))
        : (Re = t[56]);
      var Le;
      t[57] !== n ||
      t[58] !== i ||
      t[59] !== l ||
      t[60] !== Y ||
      t[61] !== Z ||
      t[62] !== re ||
      t[63] !== te ||
      t[64] !== F ||
      t[65] !== W
        ? ((Le =
            o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
            i.length > 0 &&
            u.jsxs("div", {
              className: "x1n2onr6",
              children: [
                u.jsx(r("WDSTextField.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getCountryOfOriginLabel(),
                  value: W ? F : l,
                  onValueChange: te,
                  onFocus: re,
                  onBlur: function () {
                    window.setTimeout(ae, 200);
                  },
                }),
                W &&
                  Y.length > 0 &&
                  u.jsx("div", {
                    className:
                      "xw6alqk xso031l x1lun4ml xpilrb4 xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1kpx6y5 xpyat2d xtijo5x x1o0tod x569fbc x1odjw0f x10l6tqk xdsb8wn xfo81ep",
                    role: "listbox",
                    children: Y.map(function (e) {
                      var t = e[0],
                        a = e[1];
                      return u.jsx(
                        "div",
                        {
                          className:
                            "x1ypdohk x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xw6alqk xa9814a",
                          onClick: function () {
                            return Z(t);
                          },
                          onMouseDown: o("WAWebStopEvent").preventDefault,
                          onKeyDown: function (n) {
                            (n.key === "Enter" || n.key === " ") &&
                              (n.preventDefault(), Z(t));
                          },
                          role: "option",
                          tabIndex: 0,
                          "aria-selected": t === n,
                          children: u.jsx(r("WDSText.react"), {
                            colorName: "contentDefault",
                            type: "Body2",
                            children: typeof a == "string" ? a : t,
                          }),
                        },
                        t,
                      );
                    }),
                  }),
              ],
            })),
          (t[57] = n),
          (t[58] = i),
          (t[59] = l),
          (t[60] = Y),
          (t[61] = Z),
          (t[62] = re),
          (t[63] = te),
          (t[64] = F),
          (t[65] = W),
          (t[66] = Le))
        : (Le = t[66]);
      var Ee;
      t[67] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = { className: "x1ypdohk" }), (t[67] = Ee))
        : (Ee = t[67]);
      var ke, Ie;
      t[68] !== _ || t[69] !== L
        ? ((ke = function () {
            return L(!_);
          }),
          (Ie = function (t) {
            (t.key === "Enter" || t.key === " ") && (t.preventDefault(), L(!_));
          }),
          (t[68] = _),
          (t[69] = L),
          (t[70] = ke),
          (t[71] = Ie))
        : ((ke = t[70]), (Ie = t[71]));
      var Te;
      t[72] !== _
        ? ((Te = u.jsx(r("WDSBaseCheckbox.react"), { value: _ })),
          (t[72] = _),
          (t[73] = Te))
        : (Te = t[73]);
      var De;
      t[74] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            children: o("WAWebBusinessProfileLabels").getHideItemLabel(),
          })),
          (t[74] = De))
        : (De = t[74]);
      var xe;
      t[75] === Symbol.for("react.memo_cache_sentinel")
        ? ((xe = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              De,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: o(
                  "WAWebBusinessProfileLabels",
                ).getHideItemDescriptionLabel(),
              }),
            ],
          })),
          (t[75] = xe))
        : (xe = t[75]);
      var $e;
      t[76] !== Te
        ? (($e = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 8,
            children: [Te, xe],
          })),
          (t[76] = Te),
          (t[77] = $e))
        : ($e = t[77]);
      var Pe;
      t[78] !== ke || t[79] !== Ie || t[80] !== $e
        ? ((Pe = u.jsx(
            "div",
            babelHelpers.extends({}, Ee, {
              onClick: ke,
              onKeyDown: Ie,
              role: "button",
              tabIndex: 0,
              children: $e,
            }),
          )),
          (t[78] = ke),
          (t[79] = Ie),
          (t[80] = $e),
          (t[81] = Pe))
        : (Pe = t[81]);
      var Ne;
      return (
        t[82] !== ce ||
        t[83] !== me ||
        t[84] !== _e ||
        t[85] !== he ||
        t[86] !== be ||
        t[87] !== Re ||
        t[88] !== Le ||
        t[89] !== Pe ||
        t[90] !== le
          ? ((Ne = u.jsxs(
              "div",
              babelHelpers.extends({}, ie, {
                children: [le, ce, me, _e, he, be, Re, Le, Pe],
              }),
            )),
            (t[82] = ce),
            (t[83] = me),
            (t[84] = _e),
            (t[85] = he),
            (t[86] = be),
            (t[87] = Re),
            (t[88] = Le),
            (t[89] = Pe),
            (t[90] = le),
            (t[91] = Ne))
          : (Ne = t[91]),
        Ne
      );
    }
    l.default = p;
  },
  226,
);
