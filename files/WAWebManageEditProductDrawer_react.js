__d(
  "WAWebManageEditProductDrawer.react",
  [
    "fbt",
    "Promise",
    "WANullthrows",
    "WAWebBizComplianceUtil",
    "WAWebBizGatingUtils",
    "WAWebButton.react",
    "WAWebCatalogCollection",
    "WAWebCatalogLogEvents",
    "WAWebCheckBox.react",
    "WAWebCountriesUtils",
    "WAWebCurrencyUtils",
    "WAWebDragAndDropMask.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerContext",
    "WAWebDrawerHeader.react",
    "WAWebL10NCountryCodes",
    "WAWebLocaleModules",
    "WAWebManageEditProductDrawerCompliance.react",
    "WAWebManageEditProductDrawerHelpers",
    "WAWebManageEditProductDrawerSaveHandlers",
    "WAWebProductCatalogProductImagesEditPanel.react",
    "WAWebProductModel",
    "WAWebRichTextField.react",
    "WAWebSpinner.react",
    "WAWebSyntheticCountryCode",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebURLUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useVisibility",
    "useWAWebAsync",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useContext,
      f = p.useMemo,
      g = p.useRef,
      h = p.useState,
      y = {
        productWrapper: {
          position: "x1n2onr6",
          width: "x1h08jmb",
          paddingTop: "x13crsa5",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1rxj1xn",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        isSending: { pointerEvents: "x47corl", opacity: "xbyyjgo", $$css: !0 },
        deleteButtonContainer: { textAlign: "x2b8uid", $$css: !0 },
        hiddenLabel: { position: "x1n2onr6", top: "xnfr1j", $$css: !0 },
        hiddenDescr: {
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "x9bq0rd",
          $$css: !0,
        },
      };
    function C(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.catalog,
        d = i.newProduct,
        p = d === void 0 ? !1 : d,
        C = i.onBack,
        b = i.onCancel,
        v = i.onCreate,
        S = i.onDelete,
        R = i.onEditSuccess,
        L = _(o("WAWebDrawerContext").DrawerContext),
        E = g(null),
        k = o("useWAWebModelValues").useModelValues(i.catalog, [
          "lastUsedCountryCode",
        ]),
        I = k.lastUsedCountryCode,
        T = o("useWAWebModelValues").useModelValues(i.product, [
          "id",
          "additionalImageCdnUrl",
          "name",
          "priceAmount1000",
          "salePriceAmount1000",
          "description",
          "productImageCollection",
          "reviewStatus",
          "url",
          "imageCdnUrl",
          "retailerId",
          "currency",
          "isHidden",
          "complianceInfo",
          "videos",
        ]),
        D = f(
          function () {
            return o("WAWebBizComplianceUtil").getCountryShortcodeByWid(l.id);
          },
          [l.id],
        ),
        x = r("useVisibility")({
          onVisible: function () {
            o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(p);
          },
        }),
        $ = x[0],
        P = function (t) {
          return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(
            t,
            o("WAWebBizGatingUtils").hideUnsupportedCurrency(),
          );
        },
        N =
          T.currency != null
            ? T.currency
            : o("WAWebCurrencyUtils").currencyForCountryShortcode(
                o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
                    .user,
                ),
              ),
        M = P(N),
        w = h(T.name || ""),
        A = w[0],
        F = w[1],
        O = h(M ? T.priceAmount1000 : null),
        B = O[0],
        W = O[1],
        q = h(M ? T.salePriceAmount1000 : null),
        U = q[0],
        V = q[1],
        H = h(T.description || ""),
        G = H[0],
        z = H[1],
        j = h(T.url || ""),
        K = j[0],
        Q = j[1],
        X = h(T.retailerId || ""),
        Y = X[0],
        J = X[1],
        Z = h(function () {
          if (T.priceAmount1000 != null && N != null && M) {
            var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(
              N,
              T.priceAmount1000,
            );
            return "" + e.integer + e.decimal;
          }
          return "";
        }),
        ee = Z[0],
        te = Z[1],
        ne = h(function () {
          if (T.salePriceAmount1000 != null && N != null && M) {
            var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(
              N,
              T.salePriceAmount1000,
            );
            return "" + e.integer + e.decimal;
          }
          return "";
        }),
        re = ne[0],
        oe = ne[1],
        ae = M ? N : "",
        ie = h(!1),
        le = ie[0],
        se = ie[1],
        ue = h(""),
        ce = ue[0],
        de = ue[1],
        me = h(""),
        pe = me[0],
        _e = me[1],
        fe = h(""),
        ge = fe[0],
        he = fe[1],
        ye = h(""),
        Ce = ye[0],
        be = ye[1],
        ve = h(""),
        Se = ve[0],
        Re = ve[1],
        Le = h(!!T.imageCdnUrl),
        Ee = Le[0],
        ke = Le[1],
        Ie = h(!1),
        Te = Ie[0],
        De = Ie[1],
        xe = h(T.isHidden),
        $e = xe[0],
        Pe = xe[1],
        Ne = h(!M),
        Me = Ne[0],
        we = Ne[1],
        Ae = h(!1),
        Fe = Ae[0],
        Oe = Ae[1],
        Be = h(!1),
        We = Be[0],
        qe = Be[1],
        Ue = h(void 0),
        Ve = Ue[0],
        He = Ue[1],
        Ge = B == null;
      o("useWAWebListener").useListener(T, "change:isHidden", function () {
        Pe(T.isHidden);
      });
      var ze = "";
      re !== "" &&
      !o("WAWebCurrencyUtils").validatePriceString(
        ae,
        re,
        o("WAWebProductModel").MIN_PRICE,
        o("WAWebProductModel").MAX_PRICE,
      )
        ? (ze = s._(/*BTDS*/ "Enter a valid sale price"))
        : B == null && U != null
          ? (ze = s._(/*BTDS*/ "Sale price requires a price"))
          : U != null &&
            B != null &&
            U >= B &&
            (ze = s._(/*BTDS*/ "Sale price must be less than price"));
      var je = h(),
        Ke = je[0],
        Qe = je[1];
      function Xe(e, t) {
        var n = (e == null ? void 0 : e.complianceInfo) || {},
          r = n.countryCodeOrigin,
          a = n.importerAddress,
          i = n.importerName,
          l =
            r ===
            String(
              o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
            )
              ? s._(/*BTDS*/ "Not applicable").toString()
              : o("WAWebCountriesUtils").getCountryNameWithMap(
                  r,
                  o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
                  t,
                ),
          u = o("WAWebCountriesUtils").getCountryNameWithMap(
            a == null ? void 0 : a.countryCode,
            o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
            t,
          );
        Oe(!0);
        var c = [
          i,
          a == null ? void 0 : a.street1,
          a == null ? void 0 : a.street2,
          a == null ? void 0 : a.postalCode,
          a == null ? void 0 : a.city,
          a == null ? void 0 : a.region,
          a == null ? void 0 : a.countryCode,
        ];
        if (o("WAWebBizGatingUtils").isCountryOfOriginEnabled()) {
          var d = e == null ? void 0 : e.importerInformationExempt;
          if (d === !0) qe(d);
          else {
            var m = c.some(
              o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement,
            );
            qe(!m);
          }
        }
        He({
          countryCodeOrigin: r,
          countryNameOrigin: l,
          countryCodeOriginError: "",
          importerName: i,
          importerNameError: "",
          importerAddress: {
            street1: a == null ? void 0 : a.street1,
            street1Error: "",
            street2: a == null ? void 0 : a.street2,
            postalCode: a == null ? void 0 : a.postalCode,
            city: a == null ? void 0 : a.city,
            cityError: "",
            region: a == null ? void 0 : a.region,
            countryCode: a == null ? void 0 : a.countryCode,
            countryName: u,
            countryCodeError: "",
          },
        });
      }
      var Ye = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebBizGatingUtils").showComplianceFieldsInEditProductDrawer(
              l.id,
            )
          ) {
            var t = p
                ? [o("WAWebLocaleModules").getCountryData()]
                : [
                    o("WAWebLocaleModules").getCountryData(),
                    o("WAWebCatalogCollection").CatalogCollection.findProduct({
                      catalogWid: l.id,
                      productId: T.id.toString(),
                      shouldFetchComplianceFields: !0,
                    }),
                  ],
              a = yield (c || (c = n("Promise"))).all(t),
              i = a[0];
            if (e.aborted) return;
            if ((Qe(i), p))
              (Oe(!0),
                I != null &&
                  o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
                  He({
                    countryCodeOrigin: I,
                    countryNameOrigin: o(
                      "WAWebCountriesUtils",
                    ).getCountryNameWithMap(
                      I,
                      o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                        .META_RECOGNIZED,
                      i,
                    ),
                    importerAddress: {},
                  }));
            else {
              var s = r("WANullthrows")(l).productCollection.get(T.id);
              Xe(s, i);
            }
          }
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })();
      r("useWAWebAsync")(Ye, []);
      var Je = function (t) {
          var e;
          (e = E.current) == null || e.handleFilePick(t);
        },
        Ze = function (t, n) {
          De(t);
        },
        et = function (t) {
          var e = "";
          (t.length === 0 && (e = s._(/*BTDS*/ "Add at least one image")),
            Re(e),
            ke(t.length > 0),
            we(!0));
        },
        tt = function (t) {
          var e = t.text;
          e !== Y && (J(e), be(""), we(!0));
        },
        nt = function (t) {
          var e = t.text;
          if (e !== K) {
            var n = "";
            (e !== "" &&
              !r("WAWebURLUtils").isValid(e) &&
              (n = s._(/*BTDS*/ "URL is incorrect")),
              Q(e),
              he(n),
              we(!0));
          }
        },
        rt = function (t) {
          var e = t.text;
          e !== G && (z(e), we(!0));
        },
        ot = function (t) {
          var e = t.text;
          (F(e),
            de(e.trim() === "" ? s._(/*BTDS*/ "Add a title") : ""),
            e !== A && we(!0));
        },
        at = function () {
          Pe(function (e) {
            return !e;
          });
        },
        it = function () {
          qe(function (e) {
            return !e;
          });
        },
        lt = function () {
          K !== "" &&
            !r("WAWebURLUtils").isHttps(K) &&
            !r("WAWebURLUtils").isHttp(K) &&
            Q("https://" + K);
        },
        st = function (t) {
          var e = t.text,
            n = "" + e;
          if (n !== ee) {
            var r = o("WAWebCurrencyUtils").valueFromString(ae, e),
              a = "";
            (e !== "" &&
              !o("WAWebCurrencyUtils").validatePriceString(
                ae,
                e,
                o("WAWebProductModel").MIN_PRICE,
                o("WAWebProductModel").MAX_PRICE,
              ) &&
              (a = s._(/*BTDS*/ "Enter a valid price")),
              W(e === "" ? null : r),
              te(n),
              _e(a),
              we(!0));
          }
        },
        ut = function (t) {
          var e = t.text,
            n = o("WAWebCurrencyUtils").valueFromString(ae, e);
          (V(e === "" ? null : n), oe("" + e), we(!0));
        },
        ct = function (t, n, r) {
          return o(
            "WAWebManageEditProductDrawerHelpers",
          ).getImporterAddressFieldValueOnChange(Ve, t, n, r);
        },
        dt = function () {
          return o(
            "WAWebManageEditProductDrawerHelpers",
          ).shouldShowComplianceInfoImporterAddress(Ve, We);
        },
        mt = function () {
          return o(
            "WAWebManageEditProductDrawerHelpers",
          ).shouldShowComplianceInfoImporterNotApplicableToggle(Ve);
        },
        pt = function () {
          return o(
            "WAWebManageEditProductDrawerHelpers",
          ).shouldComplianceBeHardEnforced(l.id);
        },
        _t = function (t, n) {
          o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
            e: t,
            markerId: n,
            newProduct: p,
            product: T,
            context: L,
            setImageError: Re,
            setRetailerIdError: be,
          });
        },
        ft = function () {
          o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
            catalog: l,
            product: T,
            context: L,
            onDelete: S,
          });
        },
        gt = function (t) {
          o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
            localProduct: t,
            catalog: l,
            newProduct: p,
            product: T,
            context: L,
            onEditSuccess: R,
            onCreate: v,
          });
        },
        ht = function () {
          return o(
            "WAWebManageEditProductDrawerHelpers",
          ).getComplianceProductChanges(
            Ve,
            We,
            o("WAWebBizGatingUtils").showComplianceFieldsInEditProductDrawer(
              l.id,
            ),
          );
        },
        yt = function () {
          return new (o("WAWebProductModel").Product)({
            id: T.id,
            priceAmount1000: B,
            salePriceAmount1000: B != null ? U : null,
            currency: ae,
            description: G || "",
            imageCdnUrl: T.imageCdnUrl,
            additionalImageCdnUrl: T.additionalImageCdnUrl,
            videos: T.videos,
            name: A,
            retailerId: Y,
            url: K,
            isHidden: $e,
            complianceInfo: ht(),
            importerInformationExempt: We,
          });
        },
        Ct = function (t, n) {
          var e = ct("street1", t, n),
            r = ct("street2", t, n),
            a = ct("postalCode", t, n),
            i = ct("city", t, n),
            l = ct("region", t, n),
            u = ct("countryCode", t, n),
            c =
              [e, r, a, i, l, u].some(function (e) {
                return e;
              }) || pt(),
            d = babelHelpers.extends({}, Ve, {
              importerAddress: babelHelpers.extends(
                {},
                Ve == null ? void 0 : Ve.importerAddress,
              ),
            });
          if (t === "countryCode") {
            var m = o("WAWebCountriesUtils").getCountryNameWithMap(
              n,
              o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
              Ke,
            );
            m == null || m === ""
              ? delete d.importerAddress.countryName
              : (d.importerAddress.countryName = m);
          }
          (n == null || n === ""
            ? delete d.importerAddress[t]
            : (d.importerAddress[t] = n),
            (d.importerAddress.street1Error =
              c &&
              !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(e)
                ? s._(/*BTDS*/ "Add an importer address line 1")
                : ""),
            (d.importerAddress.cityError =
              c &&
              !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i)
                ? s._(/*BTDS*/ "Add an importer city")
                : ""),
            (d.importerAddress.countryCodeError =
              c &&
              !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(u)
                ? s._(/*BTDS*/ "Add an importer country")
                : ""),
            we(!0),
            He(d));
        },
        bt = function (t, n) {
          var e,
            r = babelHelpers.extends({}, Ve, {
              importerAddress: babelHelpers.extends(
                {},
                Ve == null ? void 0 : Ve.importerAddress,
              ),
            });
          (t === "countryCodeOrigin" &&
            ((e =
              n ===
              String(
                o("WAWebSyntheticCountryCode").SyntheticCountryCode
                  .NotApplicable,
              )
                ? s._(/*BTDS*/ "Not applicable").toString()
                : o("WAWebCountriesUtils").getCountryNameWithMap(
                    n,
                    o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                      .META_RECOGNIZED,
                    Ke,
                  )),
            (r.countryNameOrigin = e),
            (r.countryCodeOriginError = "")),
            t === "importerName" &&
              (r.importerNameError =
                o("WAWebBizComplianceUtil").existsField(
                  n,
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                ) || !pt()
                  ? ""
                  : s._(/*BTDS*/ "Add an importer name")),
            n == null || n === "" ? delete r[t] : (r[t] = n),
            we(!0),
            He(r));
        },
        vt = function () {
          var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            t = pt() || o("WAWebBizGatingUtils").isCountryOfOriginEnabled();
          if (!t || !Fe) return !1;
          var n = babelHelpers.extends({}, Ve, {
            importerAddress: babelHelpers.extends(
              {},
              Ve == null ? void 0 : Ve.importerAddress,
            ),
          });
          if (
            !o("WAWebBizComplianceUtil").existsField(n.countryCodeOrigin, e) ||
            (o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
              !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(
                n.countryCodeOrigin,
              ))
          )
            return (
              (n.countryCodeOriginError = s._(
                /*BTDS*/ "Add a country of origin",
              )),
              He(n),
              !0
            );
          if (!dt()) return !1;
          var r = n.importerAddress,
            a = r.city,
            i = r.countryCode,
            l = r.street1,
            u = n.importerName,
            c = !1;
          return (
            o("WAWebBizComplianceUtil").existsField(u, e) ||
              ((n.importerNameError = s._(/*BTDS*/ "Add an importer name")),
              (c = !0)),
            o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(l) ||
              ((n.importerAddress.street1Error = s._(
                /*BTDS*/ "Add an importer address line 1",
              )),
              (c = !0)),
            o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(a) ||
              ((n.importerAddress.cityError = s._(
                /*BTDS*/ "Add an importer city",
              )),
              (c = !0)),
            o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i) ||
              ((n.importerAddress.countryCodeError = s._(
                /*BTDS*/ "Add an importer country",
              )),
              (c = !0)),
            c ? (He(n), !0) : !1
          );
        },
        St = function () {
          var e = yt();
          vt() ||
            (!p &&
              o(
                "WAWebCatalogLogEvents",
              ).logSMBAddEditProductDetailsSaveClicked(),
            o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
              newProduct: p,
              isModified: Me,
              product: T,
              productChanges: e,
              catalog: l,
              context: L,
              imagePanelRef: E,
              setIsUpdating: se,
              handleEditError: _t,
              handleEditSuccess: gt,
              propsProduct: i.product,
            }));
        },
        Rt = function () {
          if (le || A.trim() === "" || Ee === !1) return !1;
          var e = [ce, pe, ze, ge, Ce, Se];
          return (
            dt() &&
              e.push(
                Ve == null ? void 0 : Ve.importerNameError,
                Ve == null ? void 0 : Ve.importerAddress.street1Error,
                Ve == null ? void 0 : Ve.importerAddress.cityError,
                Ve == null ? void 0 : Ve.importerAddress.countryCodeError,
              ),
            (pt() || o("WAWebBizGatingUtils").isCountryOfOriginEnabled()) &&
              e.push(Ve == null ? void 0 : Ve.countryCodeOriginError),
            e.every(function (e) {
              return !e;
            })
          );
        },
        Lt = m.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          onClick: St,
          disabled: !Rt(),
          testid: void 0,
          children: p ? s._(/*BTDS*/ "Add to catalog") : s._(/*BTDS*/ "Save"),
        }),
        Et = p ? s._(/*BTDS*/ "Add new item") : s._(/*BTDS*/ "Edit item"),
        kt = m.jsxs("div", {
          className: "x78zum5 x6s0dn4",
          children: [
            m.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
              level: "2",
              weight: "normal",
              size: "inherit",
              children: Et,
            }),
            m.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.startAuto,
                ),
                { children: Lt },
              ),
            ),
          ],
        }),
        It = p
          ? null
          : m.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props([
                  y.deleteButtonContainer,
                  o("WAWebUISpacing").uiMargin.vert20,
                ]),
                {
                  children: m.jsx(o("WAWebButton.react").Button, {
                    type: "warning",
                    onClick: ft,
                    testid: void 0,
                    children: s._(/*BTDS*/ "Delete item"),
                  }),
                },
              ),
            ),
        Tt = u(
          y.productWrapper,
          o("WAWebUISpacing").uiMargin.horizAuto,
          o("WAWebUISpacing").uiMargin.vert0,
          le && y.isSending,
        ),
        Dt = Te ? m.jsx(r("WAWebDragAndDropMask.react"), {}) : null,
        xt = le
          ? m.jsx("div", {
              className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
              children: m.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 3,
              }),
            })
          : null,
        $t = m.jsxs(
          "div",
          babelHelpers.extends(
            {},
            u.props(o("WAWebUISpacing").uiMargin.top10),
            {
              children: [
                m.jsx(o("WAWebCheckBox.react").CheckBox, {
                  id: "product-hidden-check",
                  onChange: at,
                  checked: $e,
                  disabled: !1,
                }),
                m.jsx(
                  "label",
                  babelHelpers.extends(
                    {},
                    u.props([
                      y.hiddenLabel,
                      o("WAWebUISpacing").uiMargin.start10,
                    ]),
                    {
                      htmlFor: "product-hidden-check",
                      children: s._(/*BTDS*/ "Hide item"),
                    },
                  ),
                ),
                m.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    u.props([
                      y.hiddenDescr,
                      o("WAWebUISpacing").uiMargin.top5,
                      o("WAWebUISpacing").uiMargin.bottom30,
                      o("WAWebUISpacing").uiMargin.start28,
                    ]),
                    {
                      children: s._(
                        /*BTDS*/ "When you hide an item, customers won't see it in your catalog.",
                      ),
                    },
                  ),
                ),
              ],
            },
          ),
        ),
        Pt = f(
          function () {
            var e =
              ae !== ""
                ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ae, 0).symbol
                : "";
            return s._(/*BTDS*/ "Price {currencySymbol} (Recommended)", [
              s._param("currencySymbol", e),
            ]);
          },
          [ae],
        ),
        Nt = f(
          function () {
            var e =
              ae !== ""
                ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ae, 0).symbol
                : "";
            return s._(/*BTDS*/ "Sale Price {currencySymbol}", [
              s._param("currencySymbol", e),
            ]);
          },
          [ae],
        ),
        Mt = f(
          function () {
            return {
              surface: p
                ? "smb-catalog-create-product"
                : "smb-catalog-edit-product",
            };
          },
          [p],
        );
      return m.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: a,
          theme: "catalog",
          onDrop: Je,
          onDragChange: Ze,
          tsNavigationData: Mt,
          children: [
            Dt,
            m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: kt,
              titleStr: Et,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: C,
              onCancel: b,
              focusBackOrCancel: !0,
            }),
            m.jsx(r("WAWebDrawerBody.react"), {
              children: m.jsxs("div", {
                ref: $,
                className: Tt,
                children: [
                  xt,
                  m.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
                    product: T,
                    maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
                    onChange: et,
                    ref: E,
                    error: Se,
                  }),
                  m.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: A,
                    placeholder: s._(/*BTDS*/ "Name"),
                    onChange: ot,
                    theme: "small",
                    showRemaining: !0,
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: 150,
                    error: ce,
                    title: s._(/*BTDS*/ "Name"),
                  }),
                  P(ae) &&
                    m.jsx(o("WAWebRichTextField.react").RichTextField, {
                      testid: void 0,
                      value: ee,
                      placeholder: Pt,
                      onChange: st,
                      theme: "small",
                      maxLength: 30,
                      customStyleThemes: [
                        o("WAWebRichTextField.react").TextInputCustomStyleThemes
                          .Desaturated,
                      ],
                      error: pe,
                      title: s._(/*BTDS*/ "Price"),
                    }),
                  P(ae) &&
                    o(
                      "WAWebBizGatingUtils",
                    ).isCatalogProductSalePriceEnabled() &&
                    m.jsx(o("WAWebRichTextField.react").RichTextField, {
                      testid: void 0,
                      readOnly: Ge,
                      value: re,
                      placeholder: Nt,
                      onChange: ut,
                      theme: "small",
                      maxLength: 30,
                      customStyleThemes: Ge
                        ? [
                            o("WAWebRichTextField.react")
                              .TextInputCustomStyleThemes.Desaturated,
                            o("WAWebRichTextField.react")
                              .TextInputCustomStyleThemes.DisabledLabel,
                          ]
                        : [
                            o("WAWebRichTextField.react")
                              .TextInputCustomStyleThemes.Desaturated,
                          ],
                      error: ze,
                      title: s._(/*BTDS*/ "Sale Price"),
                    }),
                  m.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: G,
                    placeholder: s._(/*BTDS*/ "Description (optional)"),
                    onChange: rt,
                    theme: "small",
                    showRemaining: !0,
                    maxLength: 5e3,
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    multiline: !0,
                    title: s._(/*BTDS*/ "Description"),
                  }),
                  m.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: K,
                    placeholder: s._(/*BTDS*/ "Link (optional)"),
                    onChange: nt,
                    onBlur: lt,
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: 75,
                    error: ge,
                    managed: !0,
                    title: s._(/*BTDS*/ "Link"),
                  }),
                  m.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: Y,
                    placeholder: s._(/*BTDS*/ "Item code (optional)"),
                    onChange: tt,
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: 100,
                    error: Ce,
                    title: s._(/*BTDS*/ "Item code"),
                  }),
                  o(
                    "WAWebBizGatingUtils",
                  ).showComplianceFieldsInEditProductDrawer(l.id)
                    ? m.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
                        isComplianceInfoAvailable: Fe,
                        showComplianceInfoImporterAddress: dt(),
                        complianceInfo: Ve,
                        onComplianceInfoChange: bt,
                        onComplianceInfoImporterAddressChange: Ct,
                        lastUsedCountryCode: I,
                        showComplianceInfoImporterNotApplicableToggle: mt(),
                        handleComplianceInfoImporterToggleChange: it,
                        importerInformationNotApplicableEnabled: We,
                        selfCountryCode: D,
                        countriesMap: Ke,
                      })
                    : null,
                  $t,
                  It,
                ],
              }),
            }),
          ],
        },
        "catalog-link-drawer",
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
