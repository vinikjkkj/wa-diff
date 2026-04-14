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
        n,
        a = e.currency,
        i = e.customItem,
        l = e.eligibleCurrencies,
        c = e.onBack,
        y = e.onSaveCustomItem,
        C = m(i == null ? void 0 : i.name),
        b = C[0],
        v = C[1],
        S = m(
          Number.isInteger(i == null ? void 0 : i.price)
            ? String(Number(i == null ? void 0 : i.price) / 1e3)
            : null,
        ),
        R = S[0],
        L = S[1],
        E = m(i == null ? void 0 : i.price),
        k = E[0],
        I = E[1],
        T = m(i != null && i.isQuantitySet ? i.quantity : null),
        D = T[0],
        x = T[1],
        $ = m(i != null && i.isQuantitySet ? String(i.quantity) : null),
        P = $[0],
        N = $[1],
        M = m((t = i == null ? void 0 : i.currency) != null ? t : a),
        w = M[0],
        A = M[1],
        F = function (t) {
          v(t.text);
        },
        O = function (t) {
          var e = t.text,
            n = o("WAWebCurrencyUtils").valueFromString(a, e);
          (I(n), L(e));
        },
        B = function (t) {
          var e = t.text,
            n = e === "" ? null : Number(e);
          (p(n) || (n = null), x(n), N(e === "" ? null : e));
        },
        W = function () {
          var e = {
            currency: w,
            isQuantitySet: Number.isInteger(D),
            name: b,
            priceAmount1000: +k,
            quantity: D,
          };
          y(e);
        },
        q = d(
          function () {
            return _(b);
          },
          [b],
        ),
        U = d(
          function () {
            return f(a, R);
          },
          [a, R],
        ),
        V = d(
          function () {
            return g(P);
          },
          [P],
        ),
        H = h(i, b, k, P),
        G = function () {
          return b == null || R == null || (i && !H)
            ? !0
            : [q, U, V].some(function (e) {
                return e;
              });
        },
        z = function (t) {
          A(t);
        },
        j = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
          ? s._(/*BTDS*/ "Add item")
          : s._(/*BTDS*/ "Add to order");
      return u.jsxs(r("WAWebDrawer.react"), {
        tsNavigationData: { surface: "unknown", viewName: "order-custom-item" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: i
              ? s._(/*BTDS*/ "Update item")
              : s._(/*BTDS*/ "Create new item"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: H
              ? function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebOrderConfirmDiscardModal"), { onOK: c }),
                  );
                }
              : c,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              className: "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
              children: [
                u.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  value: b,
                  placeholder: s._(/*BTDS*/ "Item name"),
                  onChange: F,
                  theme: "small",
                  customStyleThemes: [
                    o("WAWebRichTextField.react").TextInputCustomStyleThemes
                      .Desaturated,
                  ],
                  maxLength: 150,
                  error: q,
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [
                    u.jsx(r("WAWebFlexItem.react"), {
                      grow: 4,
                      children: u.jsx(
                        o("WAWebRichTextField.react").RichTextField,
                        {
                          testid: void 0,
                          value: R,
                          placeholder: s._(/*BTDS*/ "Price {symbol}", [
                            s._param(
                              "symbol",
                              o("WAWebCurrencyUtils").formatAmount1000ToParts(
                                w,
                                0,
                              ).symbol,
                            ),
                          ]),
                          onChange: O,
                          theme: "small",
                          maxLength: 30,
                          customStyleThemes: [
                            o("WAWebRichTextField.react")
                              .TextInputCustomStyleThemes.Desaturated,
                          ],
                          error: U,
                        },
                      ),
                    }),
                    ((n = l == null ? void 0 : l.length) != null ? n : 0) > 1 &&
                      u.jsx(r("WAWebFlexItem.react"), {
                        testid: void 0,
                        children: u.jsx(o("WAWebSelect.react").Select, {
                          ariaRoleDescription:
                            "Currency selection in custom order item screen",
                          initialSelection: w,
                          width: 150,
                          onChange: z,
                          children: (l != null ? l : []).map(function (e) {
                            return u.jsx(
                              o("WAWebMenuItems.react").SelectMenuItem,
                              {
                                optionId: e,
                                primary:
                                  e +
                                  " " +
                                  o("WAWebCurrencyUtils").formatLocalSymbol(e),
                              },
                              e,
                            );
                          }),
                        }),
                      }),
                  ],
                }),
                u.jsx(o("WAWebRichTextField.react").RichTextField, {
                  testid: void 0,
                  value: P,
                  placeholder: s._(/*BTDS*/ "Quantity (optional)"),
                  onChange: B,
                  theme: "small",
                  maxLength: 30,
                  customStyleThemes: [
                    o("WAWebRichTextField.react").TextInputCustomStyleThemes
                      .Desaturated,
                  ],
                  error: V,
                }),
                u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
                  title: i ? s._(/*BTDS*/ "Update order") : j,
                  disabled: G(),
                  onClick: W,
                  testid: void 0,
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
