__d(
  "useWAWebAddItemModal",
  [
    "fbt",
    "Promise",
    "WAWebAddCatalogItemForm.react",
    "WAWebBizGatingUtils",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessProfileLabels",
    "WAWebCatalogCollection",
    "WAWebComplianceConstants",
    "WAWebConfirmPopup.react",
    "WAWebCountriesUtils",
    "WAWebCurrencyUtils",
    "WAWebDrawerHeader.react",
    "WAWebDropdownItem.react",
    "WAWebEditFormTypes",
    "WAWebFrontendCountriesUtils",
    "WAWebL10NCountryCodes",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebPlusIcon.react",
    "WAWebProductCatalogItemValidationUtils",
    "WAWebProductModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = d.useState;
    function f(t, a) {
      var i = _(!1),
        l = i[0],
        u = i[1],
        d = _(o("WAWebEditFormTypes").EditType.EDITING),
        f = d[0],
        g = d[1],
        h = _(""),
        y = h[0],
        C = h[1],
        b = _(""),
        v = b[0],
        S = b[1],
        R = _(""),
        L = R[0],
        E = R[1],
        k = _(""),
        I = k[0],
        T = k[1],
        D = _(""),
        x = D[0],
        $ = D[1],
        P = _(""),
        N = P[0],
        M = P[1],
        w = _(""),
        A = w[0],
        F = w[1],
        O = _(""),
        B = O[0],
        W = O[1],
        q = _(!1),
        U = q[0],
        V = q[1],
        H = _([]),
        G = H[0],
        z = H[1],
        j = _(null),
        K = j[0],
        Q = j[1],
        X = _([]),
        Y = X[0],
        J = X[1],
        Z = p(null),
        ee = _(""),
        te = ee[0],
        ne = ee[1],
        re = _(""),
        oe = re[0],
        ae = re[1],
        ie = _(""),
        le = ie[0],
        se = ie[1],
        ue = _(""),
        ce = ue[0],
        de = ue[1],
        me = _(""),
        pe = me[0],
        _e = me[1],
        fe = m(function () {
          return o("WAWebCurrencyUtils").currencyForCountryShortcode(
            o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
            ),
          );
        }, []),
        ge = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
              t != null &&
              t.id
            ) {
              var n = yield o("WAWebCountriesUtils").getCountries({
                filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                  .META_RECOGNIZED,
              });
              if (e.aborted) return;
              J(n);
              var r = t.lastUsedCountryCode;
              if (r != null) {
                F(r);
                var a = n.find(function (e) {
                  var t = e[0];
                  return t === r;
                });
                a && W(String(a[1]));
              }
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      r("useWAWebAsync")(ge, [t == null ? void 0 : t.id]);
      var he = m(
          function () {
            if (Y.length === 0) return [];
            var e = [];
            return (
              A !== ""
                ? e.push(A)
                : e.push(
                    o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
                  ),
              o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(
                Y,
                e,
              )
            );
          },
          [Y, A],
        ),
        ye = function (t) {
          C(t);
          var e = o("WAWebProductCatalogItemValidationUtils").validateItemName(
            t,
          );
          ne(e.error);
        },
        Ce = function (t) {
          S(t);
          var e = o("WAWebProductCatalogItemValidationUtils").validateItemPrice(
            fe,
            t,
          );
          ae(e.error);
        },
        be = function (t) {
          E(t);
          var e = o(
            "WAWebProductCatalogItemValidationUtils",
          ).validateItemSalePrice(fe, t, v);
          se(e.error);
        },
        ve = function (t) {
          $(t);
          var e = o("WAWebProductCatalogItemValidationUtils").validateItemLink(
            t,
          );
          de(e.error);
        },
        Se = function () {
          $(function (e) {
            return o(
              "WAWebProductCatalogItemValidationUtils",
            ).autoPrefixLinkWithHttps(e);
          });
        },
        Re = function (t) {
          (F(t), _e(""));
          var e = Y.find(function (e) {
            var n = e[0];
            return n === t;
          });
          e && W(String(e[1]));
        },
        Le = function (t) {
          z(t);
          var e = o(
            "WAWebProductCatalogItemValidationUtils",
          ).validateItemImages(t);
          Q(e.isValid ? null : e.error);
        },
        Ee = function () {
          (C(""),
            S(""),
            E(""),
            T(""),
            $(""),
            M(""),
            F(""),
            V(!1),
            z([]),
            Q(null),
            g(o("WAWebEditFormTypes").EditType.EDITING),
            u(!0));
        },
        ke = function () {
          (o("WAWebModalManager").ModalManager.close(), u(!1));
        },
        Ie = function () {
          var r = o("WAWebProductCatalogItemValidationUtils").validateItemName(
            y,
          );
          if (!r.isValid) {
            ne(r.error);
            return;
          }
          var i = o(
            "WAWebProductCatalogItemValidationUtils",
          ).validateItemImages(G);
          if (!i.isValid) {
            Q(i.error);
            return;
          }
          if (
            !(te !== "" || oe !== "" || le !== "" || ce !== "" || K != null)
          ) {
            var l = Z.current;
            if (l == null) {
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to add item"),
                }),
              );
              return;
            }
            g(o("WAWebEditFormTypes").EditType.PENDING);
            var u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              d =
                t != null
                  ? (e || (e = n("Promise"))).resolve(t)
                  : o("WAWebBizProductCatalogBridge")
                      .createCatalog()
                      .then(function () {
                        return o(
                          "WAWebCatalogCollection",
                        ).CatalogCollection.find(u);
                      });
            d.then(function (e) {
              return l.uploadImages().then(function (t) {
                var n =
                    v !== ""
                      ? o("WAWebCurrencyUtils").valueFromString(fe, v)
                      : null,
                  r =
                    L !== ""
                      ? o("WAWebCurrencyUtils").valueFromString(fe, L)
                      : null,
                  a = new (o("WAWebProductModel").Product)({
                    additionalImageCdnUrl: t.slice(1),
                    complianceInfo: A !== "" ? { countryCodeOrigin: A } : null,
                    currency: fe,
                    description: I || "",
                    imageCdnUrl: t[0],
                    isHidden: U,
                    name: y,
                    priceAmount1000: n,
                    retailerId: N || "",
                    salePriceAmount1000: n != null ? r : null,
                    url: x || "",
                  });
                return e.addProduct(a);
              });
            })
              .then(function () {
                (o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Item added to catalog"),
                  }),
                ),
                  g(o("WAWebEditFormTypes").EditType.DONE),
                  ke(),
                  a && a());
              })
              .catch(function () {
                (o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Failed to add item"),
                  }),
                ),
                  g(o("WAWebEditFormTypes").EditType.EDITING));
              });
          }
        },
        Te = [
          c.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              icon: c.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
              testid: void 0,
              action: Ee,
              children: s._(/*BTDS*/ "Add new item"),
            },
            "add-item",
          ),
        ],
        De = function (n) {
          if ((n === void 0 && (n = []), l)) {
            var e,
              a = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: (e = o(
                  "WAWebBusinessProfileLabels",
                )).getAddItemModalTitle(),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: ke,
              });
            return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: e.getAddToCatalogButtonLabel(),
              cancelText: e.getCancelButtonLabel(),
              type: o("WAWebModal.react").ModalTheme.BusinessProfile,
              onOK: Ie,
              onCancel: ke,
              okSpinner: f === o("WAWebEditFormTypes").EditType.PENDING,
              okDisabled: f === o("WAWebEditFormTypes").EditType.PENDING,
              title: a,
              children: [
                c.jsx("div", {
                  className: "x1aj3ljl xvpt6g3 x1phvje8 xcldk2z",
                  children: c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: e.getAddItemModalDescription(),
                  }),
                }),
                c.jsx(r("WAWebAddCatalogItemForm.react"), {
                  currency: fe,
                  itemName: y,
                  itemNameError: te,
                  onItemNameChange: ye,
                  price: v,
                  priceError: oe,
                  onPriceChange: Ce,
                  salePrice: L,
                  salePriceError: le,
                  onSalePriceChange: be,
                  description: I,
                  onDescriptionChange: T,
                  link: x,
                  linkError: ce,
                  onLinkChange: ve,
                  onLinkBlur: Se,
                  itemCode: N,
                  onItemCodeChange: M,
                  _countryOfOrigin: A,
                  _countryOfOriginError: pe,
                  _onCountryOfOriginChange: Re,
                  countryOfOriginName: B,
                  countriesOfOrigin: he,
                  _lastUsedCountryCode:
                    t == null ? void 0 : t.lastUsedCountryCode,
                  hideItem: U,
                  onHideItemChange: V,
                  onImageChange: Le,
                  imagePanelRef: Z,
                  imageError: K,
                }),
              ],
            });
          }
          return null;
        };
      return { handleAddItem: Ee, menuItems: Te, renderModal: De };
    }
    l.default = f;
  },
  226,
);
