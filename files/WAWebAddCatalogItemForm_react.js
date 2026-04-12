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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState;
    function p(e) {
      var t = e._countryOfOrigin,
        n = e._countryOfOriginError,
        a = e._lastUsedCountryCode,
        i = e._onCountryOfOriginChange,
        l = e.countriesOfOrigin,
        c = e.countryOfOriginName,
        p = e.currency,
        _ = e.description,
        f = e.descriptionError,
        g = e.hideItem,
        h = e.imageError,
        y = e.imagePanelRef,
        C = e.itemCode,
        b = e.itemCodeError,
        v = e.itemName,
        S = e.itemNameError,
        R = e.link,
        L = e.linkError,
        E = e.onDescriptionChange,
        k = e.onHideItemChange,
        I = e.onImageChange,
        T = e.onItemCodeChange,
        D = e.onItemNameChange,
        x = e.onLinkBlur,
        $ = e.onLinkChange,
        P = e.onPriceChange,
        N = e.onSalePriceChange,
        M = e.price,
        w = e.priceError,
        A = e.salePrice,
        F = e.salePriceError,
        O = m(""),
        B = O[0],
        W = O[1],
        q = m(!1),
        U = q[0],
        V = q[1],
        H = d(
          function () {
            var e =
              p !== ""
                ? o("WAWebCurrencyUtils").formatAmount1000ToParts(p, 0).symbol
                : "";
            return {
              priceInputLabel: s._(
                /*BTDS*/ "Price {currencySymbol} (Recommended)",
                [s._param("currencySymbol", e)],
              ),
              salePriceInputLabel: s._(
                /*BTDS*/ "Sale price {currencySymbol} (optional)",
                [s._param("currencySymbol", e)],
              ),
            };
          },
          [p],
        ),
        G = H.priceInputLabel,
        z = H.salePriceInputLabel,
        j = d(
          function () {
            if (B === "") return l;
            var e = B.toLowerCase();
            return l.filter(function (t) {
              var n = t[0],
                r = t[1],
                o = typeof r == "string" ? r : n;
              return o.toLowerCase().includes(e);
            });
          },
          [l, B],
        ),
        K = function (t) {
          (i(t), V(!1), W(""));
        },
        Q = function (t) {
          (W(t), U || V(!0));
        },
        X = function () {
          U || (W(c), V(!0));
        },
        Y = function () {
          (V(!1), W(""));
        };
      return u.jsxs("div", {
        className: "x78zum5 xdt5ytf x1f0uite xs2akgl x1phvje8 xcldk2z x1n2onr6",
        children: [
          u.jsx(r("WAWebCatalogItemMediaUpload.react"), {
            ref: y,
            error: h,
            maxImageCount: 10,
            onChange: I,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: o("WAWebBusinessProfileLabels").getItemNameLabel(),
            value: v,
            onValueChange: D,
            error: S != null && S !== "",
            errorText: S,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: G,
            value: M,
            onValueChange: P,
            error: w != null && w !== "",
            errorText: w,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: z,
            value: A,
            onValueChange: N,
            error: F != null && F !== "",
            errorText: F,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: o("WAWebBusinessProfileLabels").getItemDescriptionLabel(),
            value: _,
            onValueChange: E,
            error: f != null && f !== "",
            errorText: f,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: o("WAWebBusinessProfileLabels").getItemLinkLabel(),
            value: R,
            onValueChange: $,
            onBlur: x,
            error: L != null && L !== "",
            errorText: L,
          }),
          u.jsx(r("WDSTextField.react"), {
            label: o("WAWebBusinessProfileLabels").getItemCodeLabel(),
            value: C,
            onValueChange: T,
            error: b != null && b !== "",
            errorText: b,
          }),
          o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
            l.length > 0 &&
            u.jsxs("div", {
              className: "x1n2onr6",
              children: [
                u.jsx(r("WDSTextField.react"), {
                  label: o(
                    "WAWebBusinessProfileLabels",
                  ).getCountryOfOriginLabel(),
                  value: U ? B : c,
                  onValueChange: Q,
                  onFocus: X,
                  onBlur: function () {
                    window.setTimeout(Y, 200);
                  },
                }),
                U &&
                  j.length > 0 &&
                  u.jsx("div", {
                    className:
                      "xw6alqk xso031l x1lun4ml xpilrb4 xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1kpx6y5 xpyat2d xtijo5x x1o0tod x569fbc x1odjw0f x10l6tqk xdsb8wn xfo81ep",
                    role: "listbox",
                    children: j.map(function (e) {
                      var n = e[0],
                        a = e[1];
                      return u.jsx(
                        "div",
                        {
                          className:
                            "x1ypdohk x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xw6alqk xa9814a",
                          onClick: function () {
                            return K(n);
                          },
                          onMouseDown: o("WAWebStopEvent").preventDefault,
                          onKeyDown: function (t) {
                            (t.key === "Enter" || t.key === " ") &&
                              (t.preventDefault(), K(n));
                          },
                          role: "option",
                          tabIndex: 0,
                          "aria-selected": n === t,
                          children: u.jsx(r("WDSText.react"), {
                            colorName: "contentDefault",
                            type: "Body2",
                            children: typeof a == "string" ? a : n,
                          }),
                        },
                        n,
                      );
                    }),
                  }),
              ],
            }),
          u.jsx("div", {
            className: "x1ypdohk",
            onClick: function () {
              return k(!g);
            },
            onKeyDown: function (t) {
              (t.key === "Enter" || t.key === " ") &&
                (t.preventDefault(), k(!g));
            },
            role: "button",
            tabIndex: 0,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 8,
              children: [
                u.jsx(r("WDSBaseCheckbox.react"), { value: g }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  children: [
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body1",
                      children: o(
                        "WAWebBusinessProfileLabels",
                      ).getHideItemLabel(),
                    }),
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDeemphasized",
                      type: "Body2",
                      children: o(
                        "WAWebBusinessProfileLabels",
                      ).getHideItemDescriptionLabel(),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
