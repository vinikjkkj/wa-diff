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
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(64),
        l = _(!1),
        u = l[0],
        d = l[1],
        m = _(o("WAWebEditFormTypes").EditType.EDITING),
        f = m[0],
        h = m[1],
        y = _(""),
        C = y[0],
        b = y[1],
        v = _(""),
        S = v[0],
        R = v[1],
        L = _(""),
        E = L[0],
        k = L[1],
        I = _(""),
        T = I[0],
        D = I[1],
        x = _(""),
        $ = x[0],
        P = x[1],
        N = _(""),
        M = N[0],
        w = N[1],
        A = _(""),
        F = A[0],
        O = A[1],
        B = _(""),
        W = B[0],
        q = B[1],
        U = _(!1),
        V = U[0],
        H = U[1],
        G;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = []), (i[0] = G))
        : (G = i[0]);
      var z = _(G),
        j = z[0],
        K = z[1],
        Q = _(null),
        X = Q[0],
        Y = Q[1],
        J;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = []), (i[1] = J))
        : (J = i[1]);
      var Z = _(J),
        ee = Z[0],
        te = Z[1],
        ne = p(null),
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
        fe = _(""),
        ge = fe[0],
        he = fe[1],
        ye;
      i[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((ye = o("WAWebCurrencyUtils").currencyForCountryShortcode(
            o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
            ),
          )),
          (i[2] = ye))
        : (ye = i[2]);
      var Ce = ye,
        be;
      i[3] !== t
        ? ((be = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
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
                  te(n);
                  var r = t.lastUsedCountryCode;
                  if (r != null) {
                    O(r);
                    var a = n.find(function (e) {
                      var t = e[0];
                      return t === r;
                    });
                    a && q(String(a[1]));
                  }
                }
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (i[3] = t),
          (i[4] = be))
        : (be = i[4]);
      var ve = be,
        Se = t == null ? void 0 : t.id,
        Re;
      (i[5] !== Se ? ((Re = [Se]), (i[5] = Se), (i[6] = Re)) : (Re = i[6]),
        r("useWAWebAsync")(ve, Re));
      var Le;
      e: {
        if (ee.length === 0) {
          var Ee;
          (i[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((Ee = []), (i[7] = Ee))
            : (Ee = i[7]),
            (Le = Ee));
          break e;
        }
        var ke;
        if (i[8] !== ee || i[9] !== F) {
          var Ie = [];
          (F !== ""
            ? Ie.push(F)
            : Ie.push(
                o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
              ),
            (ke = o(
              "WAWebFrontendCountriesUtils",
            ).bubbleCountryOnListOfCountries(ee, Ie)),
            (i[8] = ee),
            (i[9] = F),
            (i[10] = ke));
        } else ke = i[10];
        Le = ke;
      }
      var Te = Le,
        De;
      i[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = function (t) {
            b(t);
            var e = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemName(t);
            ae(e.error);
          }),
          (i[11] = De))
        : (De = i[11]);
      var xe = De,
        $e;
      i[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($e = function (t) {
            R(t);
            var e = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemPrice(Ce, t);
            se(e.error);
          }),
          (i[12] = $e))
        : ($e = i[12]);
      var Pe = $e,
        Ne;
      i[13] !== S
        ? ((Ne = function (t) {
            k(t);
            var e = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemSalePrice(Ce, t, S);
            de(e.error);
          }),
          (i[13] = S),
          (i[14] = Ne))
        : (Ne = i[14]);
      var Me = Ne,
        we;
      i[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = function (t) {
            P(t);
            var e = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemLink(t);
            _e(e.error);
          }),
          (i[15] = we))
        : (we = i[15]);
      var Ae = we,
        Fe;
      i[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((Fe = function () {
            P(g);
          }),
          (i[16] = Fe))
        : (Fe = i[16]);
      var Oe = Fe,
        Be;
      i[17] !== ee
        ? ((Be = function (t) {
            (O(t), he(""));
            var e = ee.find(function (e) {
              var n = e[0];
              return n === t;
            });
            e && q(String(e[1]));
          }),
          (i[17] = ee),
          (i[18] = Be))
        : (Be = i[18]);
      var We = Be,
        qe;
      i[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((qe = function (t) {
            K(t);
            var e = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemImages(t);
            Y(e.isValid ? null : e.error);
          }),
          (i[19] = qe))
        : (qe = i[19]);
      var Ue = qe,
        Ve;
      i[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ve = function () {
            (b(""),
              R(""),
              k(""),
              D(""),
              P(""),
              w(""),
              O(""),
              H(!1),
              K([]),
              Y(null),
              h(o("WAWebEditFormTypes").EditType.EDITING),
              d(!0));
          }),
          (i[20] = Ve))
        : (Ve = i[20]);
      var He = Ve,
        Ge;
      i[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ge = function () {
            (o("WAWebModalManager").ModalManager.close(), d(!1));
          }),
          (i[21] = Ge))
        : (Ge = i[21]);
      var ze = Ge,
        je;
      i[22] !== t ||
      i[23] !== F ||
      i[24] !== T ||
      i[25] !== V ||
      i[26] !== X ||
      i[27] !== j ||
      i[28] !== M ||
      i[29] !== C ||
      i[30] !== $ ||
      i[31] !== pe ||
      i[32] !== oe ||
      i[33] !== a ||
      i[34] !== S ||
      i[35] !== le ||
      i[36] !== E ||
      i[37] !== ce
        ? ((je = function () {
            var r = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemName(C);
            if (!r.isValid) {
              ae(r.error);
              return;
            }
            var i = o(
              "WAWebProductCatalogItemValidationUtils",
            ).validateItemImages(j);
            if (!i.isValid) {
              Y(i.error);
              return;
            }
            if (
              !(oe !== "" || le !== "" || ce !== "" || pe !== "" || X != null)
            ) {
              var l = ne.current;
              if (l == null) {
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Failed to add item"),
                  }),
                );
                return;
              }
              h(o("WAWebEditFormTypes").EditType.PENDING);
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
                      S !== ""
                        ? o("WAWebCurrencyUtils").valueFromString(Ce, S)
                        : null,
                    r =
                      E !== ""
                        ? o("WAWebCurrencyUtils").valueFromString(Ce, E)
                        : null,
                    a = new (o("WAWebProductModel").Product)({
                      additionalImageCdnUrl: t.slice(1),
                      complianceInfo:
                        F !== "" ? { countryCodeOrigin: F } : null,
                      currency: Ce,
                      description: T || "",
                      imageCdnUrl: t[0],
                      isHidden: V,
                      name: C,
                      priceAmount1000: n,
                      retailerId: M || "",
                      salePriceAmount1000: n != null ? r : null,
                      url: $ || "",
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
                    h(o("WAWebEditFormTypes").EditType.DONE),
                    ze(),
                    a && a());
                })
                .catch(function () {
                  (o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Failed to add item"),
                    }),
                  ),
                    h(o("WAWebEditFormTypes").EditType.EDITING));
                });
            }
          }),
          (i[22] = t),
          (i[23] = F),
          (i[24] = T),
          (i[25] = V),
          (i[26] = X),
          (i[27] = j),
          (i[28] = M),
          (i[29] = C),
          (i[30] = $),
          (i[31] = pe),
          (i[32] = oe),
          (i[33] = a),
          (i[34] = S),
          (i[35] = le),
          (i[36] = E),
          (i[37] = ce),
          (i[38] = je))
        : (je = i[38]);
      var Ke = je,
        Qe;
      i[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((Qe = c.jsx(o("WAWebPlusIcon.react").PlusIcon, {})), (i[39] = Qe))
        : (Qe = i[39]);
      var Xe;
      i[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((Xe = [
            c.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                icon: Qe,
                testid: void 0,
                action: He,
                children: s._(/*BTDS*/ "Add new item"),
              },
              "add-item",
            ),
          ]),
          (i[40] = Xe))
        : (Xe = i[40]);
      var Ye = Xe,
        Je;
      if (
        i[41] !== (t == null ? void 0 : t.lastUsedCountryCode) ||
        i[42] !== Te ||
        i[43] !== F ||
        i[44] !== ge ||
        i[45] !== W ||
        i[46] !== T ||
        i[47] !== f ||
        i[48] !== We ||
        i[49] !== Ke ||
        i[50] !== Me ||
        i[51] !== V ||
        i[52] !== X ||
        i[53] !== M ||
        i[54] !== C ||
        i[55] !== $ ||
        i[56] !== pe ||
        i[57] !== oe ||
        i[58] !== S ||
        i[59] !== le ||
        i[60] !== E ||
        i[61] !== ce ||
        i[62] !== u
      ) {
        var Ze = function (n) {
          if (u) {
            var e,
              a = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: (e = o(
                  "WAWebBusinessProfileLabels",
                )).getAddItemModalTitle(),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                onCancel: ze,
              });
            return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: e.getAddToCatalogButtonLabel(),
              cancelText: e.getCancelButtonLabel(),
              type: o("WAWebModal.react").ModalTheme.BusinessProfile,
              onOK: Ke,
              onCancel: ze,
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
                  currency: Ce,
                  itemName: C,
                  itemNameError: oe,
                  onItemNameChange: xe,
                  price: S,
                  priceError: le,
                  onPriceChange: Pe,
                  salePrice: E,
                  salePriceError: ce,
                  onSalePriceChange: Me,
                  description: T,
                  onDescriptionChange: D,
                  link: $,
                  linkError: pe,
                  onLinkChange: Ae,
                  onLinkBlur: Oe,
                  itemCode: M,
                  onItemCodeChange: w,
                  _countryOfOrigin: F,
                  _countryOfOriginError: ge,
                  _onCountryOfOriginChange: We,
                  countryOfOriginName: W,
                  countriesOfOrigin: Te,
                  _lastUsedCountryCode:
                    t == null ? void 0 : t.lastUsedCountryCode,
                  hideItem: V,
                  onHideItemChange: H,
                  onImageChange: Ue,
                  imagePanelRef: ne,
                  imageError: X,
                }),
              ],
            });
          }
          return null;
        };
        ((Je = { handleAddItem: He, menuItems: Ye, renderModal: Ze }),
          (i[41] = t == null ? void 0 : t.lastUsedCountryCode),
          (i[42] = Te),
          (i[43] = F),
          (i[44] = ge),
          (i[45] = W),
          (i[46] = T),
          (i[47] = f),
          (i[48] = We),
          (i[49] = Ke),
          (i[50] = Me),
          (i[51] = V),
          (i[52] = X),
          (i[53] = M),
          (i[54] = C),
          (i[55] = $),
          (i[56] = pe),
          (i[57] = oe),
          (i[58] = S),
          (i[59] = le),
          (i[60] = E),
          (i[61] = ce),
          (i[62] = u),
          (i[63] = Je));
      } else Je = i[63];
      return Je;
    }
    function g(e) {
      return o(
        "WAWebProductCatalogItemValidationUtils",
      ).autoPrefixLinkWithHttps(e);
    }
    l.default = f;
  },
  226,
);
