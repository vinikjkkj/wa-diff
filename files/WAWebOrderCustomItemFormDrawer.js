__d(
  "WAWebOrderCustomItemFormDrawer",
  [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebBizGatingUtils",
    "WAWebCurrencyUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebOrderConfirmDiscardModal",
    "WAWebOrderTotalPrice",
    "WAWebProductModel",
    "WAWebRichTextField.react",
    "WAWebSelect.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      return (
        Number.isInteger(e) &&
        +e > 0 &&
        +e <= o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY
      );
    }
    function _(e) {
      if (e == null) return "";
      var t = String(s._(/*BTDS*/ "Add a title"));
      return e.trim() === "" ? t : "";
    }
    function f(e, t) {
      if (t == null) return "";
      var n = String(s._(/*BTDS*/ "Enter a valid price"));
      return t.trim() === "" ||
        !o("WAWebCurrencyUtils").validatePriceString(
          e,
          t,
          o("WAWebProductModel").MIN_PRICE,
          o("WAWebProductModel").MAX_PRICE,
        )
        ? n
        : "";
    }
    function g(e) {
      if (e == null) return "";
      var t = String(s._(/*BTDS*/ "Enter a valid quantity")),
        n = Number(e);
      return p(n) ? "" : t;
    }
    function h(e, t, n, r) {
      var o =
        e != null && e.isQuantitySet ? Number(r) !== e.quantity : r != null;
      return (
        (e == null ? void 0 : e.name) !== t ||
        (e == null ? void 0 : e.price) !== n ||
        o
      );
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(82),
        a = e.currency,
        i = e.customItem,
        l = e.eligibleCurrencies,
        c = e.onBack,
        d = e.onSaveCustomItem,
        y = m(i == null ? void 0 : i.name),
        v = y[0],
        S = y[1],
        R;
      n[0] !== (i == null ? void 0 : i.price)
        ? ((R = Number.isInteger(i == null ? void 0 : i.price)
            ? String(Number(i == null ? void 0 : i.price) / 1e3)
            : null),
          (n[0] = i == null ? void 0 : i.price),
          (n[1] = R))
        : (R = n[1]);
      var L = m(R),
        E = L[0],
        k = L[1],
        I = m(i == null ? void 0 : i.price),
        T = I[0],
        D = I[1],
        x = m(i != null && i.isQuantitySet ? i.quantity : null),
        $ = x[0],
        P = x[1],
        N = m(i != null && i.isQuantitySet ? String(i.quantity) : null),
        M = N[0],
        w = N[1],
        A = m((t = i == null ? void 0 : i.currency) != null ? t : a),
        F = A[0],
        O = A[1],
        B;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = function (t) {
            S(t.text);
          }),
          (n[2] = B))
        : (B = n[2]);
      var W = B,
        q;
      n[3] !== a
        ? ((q = function (t) {
            var e = t.text,
              n = o("WAWebCurrencyUtils").valueFromString(a, e);
            (D(n), k(e));
          }),
          (n[3] = a),
          (n[4] = q))
        : (q = n[4]);
      var U = q,
        V;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = function (t) {
            var e = t.text,
              n = e === "" ? null : Number(e);
            (p(n) || (n = null), P(n), w(e === "" ? null : e));
          }),
          (n[5] = V))
        : (V = n[5]);
      var H = V,
        G;
      n[6] !== F || n[7] !== v || n[8] !== T || n[9] !== $ || n[10] !== d
        ? ((G = function () {
            var e = {
              currency: F,
              isQuantitySet: Number.isInteger($),
              name: v,
              priceAmount1000: +T,
              quantity: $,
            };
            d(e);
          }),
          (n[6] = F),
          (n[7] = v),
          (n[8] = T),
          (n[9] = $),
          (n[10] = d),
          (n[11] = G))
        : (G = n[11]);
      var z = G,
        j;
      n[12] !== v ? ((j = _(v)), (n[12] = v), (n[13] = j)) : (j = n[13]);
      var K = j,
        Q;
      n[14] !== a || n[15] !== E
        ? ((Q = f(a, E)), (n[14] = a), (n[15] = E), (n[16] = Q))
        : (Q = n[16]);
      var X = Q,
        Y;
      n[17] !== M ? ((Y = g(M)), (n[17] = M), (n[18] = Y)) : (Y = n[18]);
      var J = Y,
        Z;
      n[19] !== i || n[20] !== v || n[21] !== T || n[22] !== M
        ? ((Z = h(i, v, T, M)),
          (n[19] = i),
          (n[20] = v),
          (n[21] = T),
          (n[22] = M),
          (n[23] = Z))
        : (Z = n[23]);
      var ee = Z,
        te;
      n[24] !== i ||
      n[25] !== ee ||
      n[26] !== v ||
      n[27] !== K ||
      n[28] !== X ||
      n[29] !== E ||
      n[30] !== J
        ? ((te = function () {
            return v == null || E == null || (i && !ee)
              ? !0
              : [K, X, J].some(b);
          }),
          (n[24] = i),
          (n[25] = ee),
          (n[26] = v),
          (n[27] = K),
          (n[28] = X),
          (n[29] = E),
          (n[30] = J),
          (n[31] = te))
        : (te = n[31]);
      var ne = te,
        re;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function (t) {
            O(t);
          }),
          (n[32] = re))
        : (re = n[32]);
      var oe = re,
        ae;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Add item")
            : s._(/*BTDS*/ "Add to order")),
          (n[33] = ae))
        : (ae = n[33]);
      var ie = ae,
        le;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = { surface: "unknown", viewName: "order-custom-item" }),
          (n[34] = le))
        : (le = n[34]);
      var se;
      n[35] !== i
        ? ((se = i
            ? s._(/*BTDS*/ "Update item")
            : s._(/*BTDS*/ "Create new item")),
          (n[35] = i),
          (n[36] = se))
        : (se = n[36]);
      var ue;
      n[37] !== ee || n[38] !== c
        ? ((ue = ee
            ? function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: c }),
                );
              }
            : c),
          (n[37] = ee),
          (n[38] = c),
          (n[39] = ue))
        : (ue = n[39]);
      var ce;
      n[40] !== se || n[41] !== ue
        ? ((ce = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: se,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: ue,
            focusBackOrCancel: !0,
          })),
          (n[40] = se),
          (n[41] = ue),
          (n[42] = ce))
        : (ce = n[42]);
      var de;
      n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka"), (n[43] = de))
        : (de = n[43]);
      var me;
      n[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = s._(/*BTDS*/ "Item name")), (n[44] = me))
        : (me = n[44]);
      var pe;
      n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (n[45] = pe))
        : (pe = n[45]);
      var _e;
      n[46] !== v || n[47] !== K
        ? ((_e = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: "custom-item-edit-name-input",
            value: v,
            placeholder: me,
            onChange: W,
            theme: "small",
            customStyleThemes: pe,
            maxLength: 150,
            error: K,
          })),
          (n[46] = v),
          (n[47] = K),
          (n[48] = _e))
        : (_e = n[48]);
      var fe;
      n[49] !== F
        ? ((fe = s._(/*BTDS*/ "Price {symbol}", [
            s._param(
              "symbol",
              o("WAWebCurrencyUtils").formatAmount1000ToParts(F, 0).symbol,
            ),
          ])),
          (n[49] = F),
          (n[50] = fe))
        : (fe = n[50]);
      var ge;
      n[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((ge = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (n[51] = ge))
        : (ge = n[51]);
      var he;
      n[52] !== U || n[53] !== X || n[54] !== E || n[55] !== fe
        ? ((he = u.jsx(r("WAWebFlexItem.react"), {
            grow: 4,
            children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: "custom-item-edit-price-input",
              value: E,
              placeholder: fe,
              onChange: U,
              theme: "small",
              maxLength: 30,
              customStyleThemes: ge,
              error: X,
            }),
          })),
          (n[52] = U),
          (n[53] = X),
          (n[54] = E),
          (n[55] = fe),
          (n[56] = he))
        : (he = n[56]);
      var ye;
      if (n[57] !== l || n[58] !== F) {
        var Ce;
        ((ye =
          ((Ce = l == null ? void 0 : l.length) != null ? Ce : 0) > 1 &&
          u.jsx(r("WAWebFlexItem.react"), {
            testid: "custom-item-edit-currency-flex-item",
            children: u.jsx(o("WAWebSelect.react").Select, {
              ariaRoleDescription:
                "Currency selection in custom order item screen",
              initialSelection: F,
              width: 150,
              onChange: oe,
              children: (l != null ? l : []).map(C),
            }),
          })),
          (n[57] = l),
          (n[58] = F),
          (n[59] = ye));
      } else ye = n[59];
      var be;
      n[60] !== he || n[61] !== ye
        ? ((be = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [he, ye],
          })),
          (n[60] = he),
          (n[61] = ye),
          (n[62] = be))
        : (be = n[62]);
      var ve;
      n[63] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = s._(/*BTDS*/ "Quantity (optional)")), (n[63] = ve))
        : (ve = n[63]);
      var Se;
      n[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (n[64] = Se))
        : (Se = n[64]);
      var Re;
      n[65] !== J || n[66] !== M
        ? ((Re = u.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: "custom-item-edit-quantity-input",
            value: M,
            placeholder: ve,
            onChange: H,
            theme: "small",
            maxLength: 30,
            customStyleThemes: Se,
            error: J,
          })),
          (n[65] = J),
          (n[66] = M),
          (n[67] = Re))
        : (Re = n[67]);
      var Le;
      n[68] !== i
        ? ((Le = i ? s._(/*BTDS*/ "Update order") : ie),
          (n[68] = i),
          (n[69] = Le))
        : (Le = n[69]);
      var Ee = ne(),
        ke;
      n[70] !== z || n[71] !== Le || n[72] !== Ee
        ? ((ke = u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
            title: Le,
            disabled: Ee,
            onClick: z,
            testid: "save-custom-item-button",
          })),
          (n[70] = z),
          (n[71] = Le),
          (n[72] = Ee),
          (n[73] = ke))
        : (ke = n[73]);
      var Ie;
      n[74] !== _e || n[75] !== be || n[76] !== Re || n[77] !== ke
        ? ((Ie = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              className: de,
              children: [_e, be, Re, ke],
            }),
          })),
          (n[74] = _e),
          (n[75] = be),
          (n[76] = Re),
          (n[77] = ke),
          (n[78] = Ie))
        : (Ie = n[78]);
      var Te;
      return (
        n[79] !== ce || n[80] !== Ie
          ? ((Te = u.jsxs(r("WAWebDrawer.react"), {
              tsNavigationData: le,
              children: [ce, Ie],
            })),
            (n[79] = ce),
            (n[80] = Ie),
            (n[81] = Te))
          : (Te = n[81]),
        Te
      );
    }
    function C(e) {
      return u.jsx(
        o("WAWebMenuItems.react").SelectMenuItem,
        {
          optionId: e,
          primary: e + " " + o("WAWebCurrencyUtils").formatLocalSymbol(e),
        },
        e,
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      return e;
    }
    l.default = y;
  },
  226,
);
