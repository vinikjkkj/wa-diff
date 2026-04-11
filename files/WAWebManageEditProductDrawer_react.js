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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(250),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var d = i,
        p = d.catalog,
        f = d.newProduct,
        C = d.onBack,
        E = d.onCancel,
        k = d.onCreate,
        I = d.onDelete,
        T = d.onEditSuccess,
        D = f === void 0 ? !1 : f,
        x = _(o("WAWebDrawerContext").DrawerContext),
        $ = g(null),
        P;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = ["lastUsedCountryCode"]), (a[3] = P))
        : (P = a[3]);
      var N = o("useWAWebModelValues").useModelValues(i.catalog, P),
        M = N.lastUsedCountryCode,
        w;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = [
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
          (a[4] = w))
        : (w = a[4]);
      var A = o("useWAWebModelValues").useModelValues(i.product, w),
        F;
      a[5] !== p.id
        ? ((F = o("WAWebBizComplianceUtil").getCountryShortcodeByWid(p.id)),
          (a[5] = p.id),
          (a[6] = F))
        : (F = a[6]);
      var O = F,
        B;
      a[7] !== D
        ? ((B = {
            onVisible: function () {
              o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(D);
            },
          }),
          (a[7] = D),
          (a[8] = B))
        : (B = a[8]);
      var W = r("useVisibility")(B),
        q = W[0],
        U = L,
        V;
      a[9] !== A.currency
        ? ((V =
            A.currency != null
              ? A.currency
              : o("WAWebCurrencyUtils").currencyForCountryShortcode(
                  o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
                      .user,
                  ),
                )),
          (a[9] = A.currency),
          (a[10] = V))
        : (V = a[10]);
      var H = V,
        G;
      a[11] !== H ? ((G = U(H)), (a[11] = H), (a[12] = G)) : (G = a[12]);
      var z = G,
        j = h(A.name || ""),
        K = j[0],
        Q = j[1],
        X = h(z ? A.priceAmount1000 : null),
        Y = X[0],
        J = X[1],
        Z = h(z ? A.salePriceAmount1000 : null),
        ee = Z[0],
        te = Z[1],
        ne = h(A.description || ""),
        re = ne[0],
        oe = ne[1],
        ae = h(A.url || ""),
        ie = ae[0],
        le = ae[1],
        se = h(A.retailerId || ""),
        ue = se[0],
        ce = se[1],
        de;
      a[13] !== A.priceAmount1000 || a[14] !== H || a[15] !== z
        ? ((de = function () {
            if (A.priceAmount1000 != null && H != null && z) {
              var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(
                H,
                A.priceAmount1000,
              );
              return "" + e.integer + e.decimal;
            }
            return "";
          }),
          (a[13] = A.priceAmount1000),
          (a[14] = H),
          (a[15] = z),
          (a[16] = de))
        : (de = a[16]);
      var me = h(de),
        pe = me[0],
        _e = me[1],
        fe;
      a[17] !== A.salePriceAmount1000 || a[18] !== H || a[19] !== z
        ? ((fe = function () {
            if (A.salePriceAmount1000 != null && H != null && z) {
              var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(
                H,
                A.salePriceAmount1000,
              );
              return "" + e.integer + e.decimal;
            }
            return "";
          }),
          (a[17] = A.salePriceAmount1000),
          (a[18] = H),
          (a[19] = z),
          (a[20] = fe))
        : (fe = a[20]);
      var ge = h(fe),
        he = ge[0],
        ye = ge[1],
        Ce = z ? H : "",
        be = h(!1),
        ve = be[0],
        Se = be[1],
        Re = h(""),
        Le = Re[0],
        Ee = Re[1],
        ke = h(""),
        Ie = ke[0],
        Te = ke[1],
        De = h(""),
        xe = De[0],
        $e = De[1],
        Pe = h(""),
        Ne = Pe[0],
        Me = Pe[1],
        we = h(""),
        Ae = we[0],
        Fe = we[1],
        Oe = h(!!A.imageCdnUrl),
        Be = Oe[0],
        We = Oe[1],
        qe = h(!1),
        Ue = qe[0],
        Ve = qe[1],
        He = h(A.isHidden),
        Ge = He[0],
        ze = He[1],
        je = h(!z),
        Ke = je[0],
        Qe = je[1],
        Xe = h(!1),
        Ye = Xe[0],
        Je = Xe[1],
        Ze = h(!1),
        et = Ze[0],
        tt = Ze[1],
        nt = h(void 0),
        rt = nt[0],
        ot = nt[1],
        at = Y == null,
        it;
      (a[21] !== A.isHidden
        ? ((it = function () {
            ze(A.isHidden);
          }),
          (a[21] = A.isHidden),
          (a[22] = it))
        : (it = a[22]),
        o("useWAWebListener").useListener(A, "change:isHidden", it));
      var lt = "";
      he !== "" &&
      !o("WAWebCurrencyUtils").validatePriceString(
        Ce,
        he,
        o("WAWebProductModel").MIN_PRICE,
        o("WAWebProductModel").MAX_PRICE,
      )
        ? (lt = s._(/*BTDS*/ "Enter a valid sale price"))
        : Y == null && ee != null
          ? (lt = s._(/*BTDS*/ "Sale price requires a price"))
          : ee != null &&
            Y != null &&
            ee >= Y &&
            (lt = s._(/*BTDS*/ "Sale price must be less than price"));
      var st = h(),
        ut = st[0],
        ct = st[1],
        dt;
      a[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((dt = function (t, n) {
            var e = (t == null ? void 0 : t.complianceInfo) || {},
              r = e.countryCodeOrigin,
              a = e.importerAddress,
              i = e.importerName,
              l =
                r ===
                String(
                  o("WAWebSyntheticCountryCode").SyntheticCountryCode
                    .NotApplicable,
                )
                  ? s._(/*BTDS*/ "Not applicable").toString()
                  : o("WAWebCountriesUtils").getCountryNameWithMap(
                      r,
                      o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                        .META_RECOGNIZED,
                      n,
                    ),
              u = o("WAWebCountriesUtils").getCountryNameWithMap(
                a == null ? void 0 : a.countryCode,
                o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
                n,
              );
            Je(!0);
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
              var d = t == null ? void 0 : t.importerInformationExempt;
              if (d === !0) tt(d);
              else {
                var m = c.some(
                  o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement,
                );
                tt(!m);
              }
            }
            ot({
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
          }),
          (a[23] = dt))
        : (dt = a[23]);
      var mt = dt,
        pt;
      a[24] !== p || a[25] !== M || a[26] !== D || a[27] !== A.id
        ? ((pt = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  o(
                    "WAWebBizGatingUtils",
                  ).showComplianceFieldsInEditProductDrawer(p.id)
                ) {
                  var t = D
                      ? [o("WAWebLocaleModules").getCountryData()]
                      : [
                          o("WAWebLocaleModules").getCountryData(),
                          o(
                            "WAWebCatalogCollection",
                          ).CatalogCollection.findProduct({
                            catalogWid: p.id,
                            productId: A.id.toString(),
                            shouldFetchComplianceFields: !0,
                          }),
                        ],
                    a = yield (c || (c = n("Promise"))).all(t),
                    i = a[0];
                  if (e.aborted) return;
                  if ((ct(i), D))
                    (Je(!0),
                      M != null &&
                        o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
                        ot({
                          countryCodeOrigin: M,
                          countryNameOrigin: o(
                            "WAWebCountriesUtils",
                          ).getCountryNameWithMap(
                            M,
                            o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                              .META_RECOGNIZED,
                            i,
                          ),
                          importerAddress: {},
                        }));
                  else {
                    var l = r("WANullthrows")(p).productCollection.get(A.id);
                    mt(l, i);
                  }
                }
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[24] = p),
          (a[25] = M),
          (a[26] = D),
          (a[27] = A.id),
          (a[28] = pt))
        : (pt = a[28]);
      var _t = pt,
        ft;
      (a[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ft = []), (a[29] = ft))
        : (ft = a[29]),
        r("useWAWebAsync")(_t, ft));
      var gt;
      a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((gt = function (t) {
            var e;
            (e = $.current) == null || e.handleFilePick(t);
          }),
          (a[30] = gt))
        : (gt = a[30]);
      var ht = gt,
        yt;
      a[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((yt = function (t, n) {
            Ve(t);
          }),
          (a[31] = yt))
        : (yt = a[31]);
      var Ct = yt,
        bt;
      a[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((bt = function (t) {
            var e = "";
            (t.length === 0 && (e = s._(/*BTDS*/ "Add at least one image")),
              Fe(e),
              We(t.length > 0),
              Qe(!0));
          }),
          (a[32] = bt))
        : (bt = a[32]);
      var vt = bt,
        St;
      a[33] !== ue
        ? ((St = function (t) {
            var e = t.text;
            e !== ue && (ce(e), Me(""), Qe(!0));
          }),
          (a[33] = ue),
          (a[34] = St))
        : (St = a[34]);
      var Rt = St,
        Lt;
      a[35] !== ie
        ? ((Lt = function (t) {
            var e = t.text;
            if (e !== ie) {
              var n = "";
              (e !== "" &&
                !r("WAWebURLUtils").isValid(e) &&
                (n = s._(/*BTDS*/ "URL is incorrect")),
                le(e),
                $e(n),
                Qe(!0));
            }
          }),
          (a[35] = ie),
          (a[36] = Lt))
        : (Lt = a[36]);
      var Et = Lt,
        kt;
      a[37] !== re
        ? ((kt = function (t) {
            var e = t.text;
            e !== re && (oe(e), Qe(!0));
          }),
          (a[37] = re),
          (a[38] = kt))
        : (kt = a[38]);
      var It = kt,
        Tt;
      a[39] !== K
        ? ((Tt = function (t) {
            var e = t.text;
            (Q(e),
              Ee(e.trim() === "" ? s._(/*BTDS*/ "Add a title") : ""),
              e !== K && Qe(!0));
          }),
          (a[39] = K),
          (a[40] = Tt))
        : (Tt = a[40]);
      var Dt = Tt,
        xt;
      a[41] === Symbol.for("react.memo_cache_sentinel")
        ? ((xt = function () {
            ze(R);
          }),
          (a[41] = xt))
        : (xt = a[41]);
      var $t = xt,
        Pt;
      a[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((Pt = function () {
            tt(S);
          }),
          (a[42] = Pt))
        : (Pt = a[42]);
      var Nt = Pt,
        Mt;
      a[43] !== ie
        ? ((Mt = function () {
            ie !== "" &&
              !r("WAWebURLUtils").isHttps(ie) &&
              !r("WAWebURLUtils").isHttp(ie) &&
              le("https://" + ie);
          }),
          (a[43] = ie),
          (a[44] = Mt))
        : (Mt = a[44]);
      var wt = Mt,
        At;
      a[45] !== Ce || a[46] !== pe
        ? ((At = function (t) {
            var e = t.text,
              n = "" + e;
            if (n !== pe) {
              var r = o("WAWebCurrencyUtils").valueFromString(Ce, e),
                a = "";
              (e !== "" &&
                !o("WAWebCurrencyUtils").validatePriceString(
                  Ce,
                  e,
                  o("WAWebProductModel").MIN_PRICE,
                  o("WAWebProductModel").MAX_PRICE,
                ) &&
                (a = s._(/*BTDS*/ "Enter a valid price")),
                J(e === "" ? null : r),
                _e(n),
                Te(a),
                Qe(!0));
            }
          }),
          (a[45] = Ce),
          (a[46] = pe),
          (a[47] = At))
        : (At = a[47]);
      var Ft = At,
        Ot;
      a[48] !== Ce
        ? ((Ot = function (t) {
            var e = t.text,
              n = o("WAWebCurrencyUtils").valueFromString(Ce, e);
            (te(e === "" ? null : n), ye("" + e), Qe(!0));
          }),
          (a[48] = Ce),
          (a[49] = Ot))
        : (Ot = a[49]);
      var Bt = Ot,
        Wt;
      a[50] !== rt
        ? ((Wt = function (t, n, r) {
            return o(
              "WAWebManageEditProductDrawerHelpers",
            ).getImporterAddressFieldValueOnChange(rt, t, n, r);
          }),
          (a[50] = rt),
          (a[51] = Wt))
        : (Wt = a[51]);
      var qt = Wt,
        Ut;
      a[52] !== rt || a[53] !== et
        ? ((Ut = function () {
            return o(
              "WAWebManageEditProductDrawerHelpers",
            ).shouldShowComplianceInfoImporterAddress(rt, et);
          }),
          (a[52] = rt),
          (a[53] = et),
          (a[54] = Ut))
        : (Ut = a[54]);
      var Vt = Ut,
        Ht;
      a[55] !== rt
        ? ((Ht = function () {
            return o(
              "WAWebManageEditProductDrawerHelpers",
            ).shouldShowComplianceInfoImporterNotApplicableToggle(rt);
          }),
          (a[55] = rt),
          (a[56] = Ht))
        : (Ht = a[56]);
      var Gt = Ht,
        zt;
      a[57] !== p.id
        ? ((zt = function () {
            return o(
              "WAWebManageEditProductDrawerHelpers",
            ).shouldComplianceBeHardEnforced(p.id);
          }),
          (a[57] = p.id),
          (a[58] = zt))
        : (zt = a[58]);
      var jt = zt,
        Kt;
      a[59] !== x || a[60] !== D || a[61] !== A
        ? ((Kt = function (t, n) {
            o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
              e: t,
              markerId: n,
              newProduct: D,
              product: A,
              context: x,
              setImageError: Fe,
              setRetailerIdError: Me,
            });
          }),
          (a[59] = x),
          (a[60] = D),
          (a[61] = A),
          (a[62] = Kt))
        : (Kt = a[62]);
      var Qt = Kt,
        Xt;
      a[63] !== p || a[64] !== x || a[65] !== I || a[66] !== A
        ? ((Xt = function () {
            o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
              catalog: p,
              product: A,
              context: x,
              onDelete: I,
            });
          }),
          (a[63] = p),
          (a[64] = x),
          (a[65] = I),
          (a[66] = A),
          (a[67] = Xt))
        : (Xt = a[67]);
      var Yt = Xt,
        Jt;
      a[68] !== p ||
      a[69] !== x ||
      a[70] !== D ||
      a[71] !== k ||
      a[72] !== T ||
      a[73] !== A
        ? ((Jt = function (t) {
            o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
              localProduct: t,
              catalog: p,
              newProduct: D,
              product: A,
              context: x,
              onEditSuccess: T,
              onCreate: k,
            });
          }),
          (a[68] = p),
          (a[69] = x),
          (a[70] = D),
          (a[71] = k),
          (a[72] = T),
          (a[73] = A),
          (a[74] = Jt))
        : (Jt = a[74]);
      var Zt = Jt,
        en;
      a[75] !== p.id || a[76] !== rt || a[77] !== et
        ? ((en = function () {
            return o(
              "WAWebManageEditProductDrawerHelpers",
            ).getComplianceProductChanges(
              rt,
              et,
              o("WAWebBizGatingUtils").showComplianceFieldsInEditProductDrawer(
                p.id,
              ),
            );
          }),
          (a[75] = p.id),
          (a[76] = rt),
          (a[77] = et),
          (a[78] = en))
        : (en = a[78]);
      var tn = en,
        nn;
      a[79] !== Ce ||
      a[80] !== re ||
      a[81] !== tn ||
      a[82] !== et ||
      a[83] !== Ge ||
      a[84] !== K ||
      a[85] !== Y ||
      a[86] !== A.additionalImageCdnUrl ||
      a[87] !== A.id ||
      a[88] !== A.imageCdnUrl ||
      a[89] !== A.videos ||
      a[90] !== ue ||
      a[91] !== ee ||
      a[92] !== ie
        ? ((nn = function () {
            return new (o("WAWebProductModel").Product)({
              id: A.id,
              priceAmount1000: Y,
              salePriceAmount1000: Y != null ? ee : null,
              currency: Ce,
              description: re || "",
              imageCdnUrl: A.imageCdnUrl,
              additionalImageCdnUrl: A.additionalImageCdnUrl,
              videos: A.videos,
              name: K,
              retailerId: ue,
              url: ie,
              isHidden: Ge,
              complianceInfo: tn(),
              importerInformationExempt: et,
            });
          }),
          (a[79] = Ce),
          (a[80] = re),
          (a[81] = tn),
          (a[82] = et),
          (a[83] = Ge),
          (a[84] = K),
          (a[85] = Y),
          (a[86] = A.additionalImageCdnUrl),
          (a[87] = A.id),
          (a[88] = A.imageCdnUrl),
          (a[89] = A.videos),
          (a[90] = ue),
          (a[91] = ee),
          (a[92] = ie),
          (a[93] = nn))
        : (nn = a[93]);
      var rn = nn,
        on;
      a[94] !== rt || a[95] !== ut || a[96] !== qt || a[97] !== jt
        ? ((on = function (t, n) {
            var e = qt("street1", t, n),
              r = qt("street2", t, n),
              a = qt("postalCode", t, n),
              i = qt("city", t, n),
              l = qt("region", t, n),
              u = qt("countryCode", t, n),
              c = [e, r, a, i, l, u].some(v) || jt(),
              d = babelHelpers.extends({}, rt, {
                importerAddress: babelHelpers.extends(
                  {},
                  rt == null ? void 0 : rt.importerAddress,
                ),
              });
            if (t === "countryCode") {
              var m = o("WAWebCountriesUtils").getCountryNameWithMap(
                n,
                o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
                ut,
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
              Qe(!0),
              ot(d));
          }),
          (a[94] = rt),
          (a[95] = ut),
          (a[96] = qt),
          (a[97] = jt),
          (a[98] = on))
        : (on = a[98]);
      var an = on,
        ln;
      a[99] !== rt || a[100] !== ut || a[101] !== jt
        ? ((ln = function (t, n) {
            var e,
              r = babelHelpers.extends({}, rt, {
                importerAddress: babelHelpers.extends(
                  {},
                  rt == null ? void 0 : rt.importerAddress,
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
                      ut,
                    )),
              (r.countryNameOrigin = e),
              (r.countryCodeOriginError = "")),
              t === "importerName" &&
                (r.importerNameError =
                  o("WAWebBizComplianceUtil").existsField(
                    n,
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  ) || !jt()
                    ? ""
                    : s._(/*BTDS*/ "Add an importer name")),
              n == null || n === "" ? delete r[t] : (r[t] = n),
              Qe(!0),
              ot(r));
          }),
          (a[99] = rt),
          (a[100] = ut),
          (a[101] = jt),
          (a[102] = ln))
        : (ln = a[102]);
      var sn = ln,
        un;
      a[103] !== rt || a[104] !== Ye || a[105] !== jt || a[106] !== Vt
        ? ((un = function () {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              t = jt() || o("WAWebBizGatingUtils").isCountryOfOriginEnabled();
            if (!t || !Ye) return !1;
            var n = babelHelpers.extends({}, rt, {
              importerAddress: babelHelpers.extends(
                {},
                rt == null ? void 0 : rt.importerAddress,
              ),
            });
            if (
              !o("WAWebBizComplianceUtil").existsField(
                n.countryCodeOrigin,
                e,
              ) ||
              (o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
                !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(
                  n.countryCodeOrigin,
                ))
            )
              return (
                (n.countryCodeOriginError = s._(
                  /*BTDS*/ "Add a country of origin",
                )),
                ot(n),
                !0
              );
            if (!Vt()) return !1;
            var r = n.importerAddress,
              a = n.importerName,
              i = r.city,
              l = r.countryCode,
              u = r.street1,
              c = !1;
            return (
              o("WAWebBizComplianceUtil").existsField(a, e) ||
                ((n.importerNameError = s._(/*BTDS*/ "Add an importer name")),
                (c = !0)),
              o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(u) ||
                ((n.importerAddress.street1Error = s._(
                  /*BTDS*/ "Add an importer address line 1",
                )),
                (c = !0)),
              o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i) ||
                ((n.importerAddress.cityError = s._(
                  /*BTDS*/ "Add an importer city",
                )),
                (c = !0)),
              o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(l) ||
                ((n.importerAddress.countryCodeError = s._(
                  /*BTDS*/ "Add an importer country",
                )),
                (c = !0)),
              c ? (ot(n), !0) : !1
            );
          }),
          (a[103] = rt),
          (a[104] = Ye),
          (a[105] = jt),
          (a[106] = Vt),
          (a[107] = un))
        : (un = a[107]);
      var cn = un,
        dn;
      a[108] !== p ||
      a[109] !== x ||
      a[110] !== cn ||
      a[111] !== rn ||
      a[112] !== Qt ||
      a[113] !== Zt ||
      a[114] !== Ke ||
      a[115] !== D ||
      a[116] !== A ||
      a[117] !== i.product
        ? ((dn = function () {
            var e = rn();
            cn() ||
              (!D &&
                o(
                  "WAWebCatalogLogEvents",
                ).logSMBAddEditProductDetailsSaveClicked(),
              o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
                newProduct: D,
                isModified: Ke,
                product: A,
                productChanges: e,
                catalog: p,
                context: x,
                imagePanelRef: $,
                setIsUpdating: Se,
                handleEditError: Qt,
                handleEditSuccess: Zt,
                propsProduct: i.product,
              }));
          }),
          (a[108] = p),
          (a[109] = x),
          (a[110] = cn),
          (a[111] = rn),
          (a[112] = Qt),
          (a[113] = Zt),
          (a[114] = Ke),
          (a[115] = D),
          (a[116] = A),
          (a[117] = i.product),
          (a[118] = dn))
        : (dn = a[118]);
      var mn = dn,
        pn = function () {
          if (ve || K.trim() === "" || Be === !1) return !1;
          var e = [Le, Ie, lt, xe, Ne, Ae];
          return (
            Vt() &&
              e.push(
                rt == null ? void 0 : rt.importerNameError,
                rt == null ? void 0 : rt.importerAddress.street1Error,
                rt == null ? void 0 : rt.importerAddress.cityError,
                rt == null ? void 0 : rt.importerAddress.countryCodeError,
              ),
            (jt() || o("WAWebBizGatingUtils").isCountryOfOriginEnabled()) &&
              e.push(rt == null ? void 0 : rt.countryCodeOriginError),
            e.every(b)
          );
        },
        _n = o("WAWebButton.react").Button,
        fn = "primary",
        gn = !pn(),
        hn;
      a[119] !== D
        ? ((hn = D ? s._(/*BTDS*/ "Add to catalog") : s._(/*BTDS*/ "Save")),
          (a[119] = D),
          (a[120] = hn))
        : (hn = a[120]);
      var yn;
      a[121] !== _n || a[122] !== mn || a[123] !== gn || a[124] !== hn
        ? ((yn = m.jsx(_n, {
            type: fn,
            onClick: mn,
            disabled: gn,
            testid: void 0,
            children: hn,
          })),
          (a[121] = _n),
          (a[122] = mn),
          (a[123] = gn),
          (a[124] = hn),
          (a[125] = yn))
        : (yn = a[125]);
      var Cn = yn,
        bn;
      a[126] !== D
        ? ((bn = D ? s._(/*BTDS*/ "Add new item") : s._(/*BTDS*/ "Edit item")),
          (a[126] = D),
          (a[127] = bn))
        : (bn = a[127]);
      var vn = bn,
        Sn;
      a[128] === Symbol.for("react.memo_cache_sentinel")
        ? ((Sn = { className: "x78zum5 x6s0dn4" }), (a[128] = Sn))
        : (Sn = a[128]);
      var Rn;
      a[129] !== vn
        ? ((Rn = m.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            level: "2",
            weight: "normal",
            size: "inherit",
            children: vn,
          })),
          (a[129] = vn),
          (a[130] = Rn))
        : (Rn = a[130]);
      var Ln;
      a[131] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ln = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.startAuto,
          )),
          (a[131] = Ln))
        : (Ln = a[131]);
      var En;
      a[132] !== Cn
        ? ((En = m.jsx("div", babelHelpers.extends({}, Ln, { children: Cn }))),
          (a[132] = Cn),
          (a[133] = En))
        : (En = a[133]);
      var kn;
      a[134] !== Rn || a[135] !== En
        ? ((kn = m.jsxs(
            "div",
            babelHelpers.extends({}, Sn, { children: [Rn, En] }),
          )),
          (a[134] = Rn),
          (a[135] = En),
          (a[136] = kn))
        : (kn = a[136]);
      var In = kn,
        Tn;
      a[137] !== Yt || a[138] !== D
        ? ((Tn = D
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
                      onClick: Yt,
                      testid: void 0,
                      children: s._(/*BTDS*/ "Delete item"),
                    }),
                  },
                ),
              )),
          (a[137] = Yt),
          (a[138] = D),
          (a[139] = Tn))
        : (Tn = a[139]);
      var Dn = Tn,
        xn;
      a[140] !== ve
        ? ((xn = (u || (u = r("stylex")))(
            y.productWrapper,
            o("WAWebUISpacing").uiMargin.horizAuto,
            o("WAWebUISpacing").uiMargin.vert0,
            ve && y.isSending,
          )),
          (a[140] = ve),
          (a[141] = xn))
        : (xn = a[141]);
      var $n = xn,
        Pn;
      a[142] !== Ue
        ? ((Pn = Ue ? m.jsx(r("WAWebDragAndDropMask.react"), {}) : null),
          (a[142] = Ue),
          (a[143] = Pn))
        : (Pn = a[143]);
      var Nn = Pn,
        Mn;
      a[144] !== ve
        ? ((Mn = ve
            ? m.jsx("div", {
                className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
                children: m.jsx(o("WAWebSpinner.react").Spinner, {
                  size: 50,
                  stroke: 3,
                }),
              })
            : null),
          (a[144] = ve),
          (a[145] = Mn))
        : (Mn = a[145]);
      var wn = Mn,
        An;
      a[146] === Symbol.for("react.memo_cache_sentinel")
        ? ((An = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.top10,
          )),
          (a[146] = An))
        : (An = a[146]);
      var Fn;
      a[147] !== $t || a[148] !== Ge
        ? ((Fn = m.jsx(o("WAWebCheckBox.react").CheckBox, {
            id: "product-hidden-check",
            onChange: $t,
            checked: Ge,
            disabled: !1,
          })),
          (a[147] = $t),
          (a[148] = Ge),
          (a[149] = Fn))
        : (Fn = a[149]);
      var On;
      a[150] === Symbol.for("react.memo_cache_sentinel")
        ? ((On = (u || (u = r("stylex"))).props([
            y.hiddenLabel,
            o("WAWebUISpacing").uiMargin.start10,
          ])),
          (a[150] = On))
        : (On = a[150]);
      var Bn, Wn;
      a[151] === Symbol.for("react.memo_cache_sentinel")
        ? ((Bn = m.jsx(
            "label",
            babelHelpers.extends({}, On, {
              htmlFor: "product-hidden-check",
              children: s._(/*BTDS*/ "Hide item"),
            }),
          )),
          (Wn = m.jsx(
            "div",
            babelHelpers.extends(
              {},
              (u || (u = r("stylex"))).props([
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
          )),
          (a[151] = Bn),
          (a[152] = Wn))
        : ((Bn = a[151]), (Wn = a[152]));
      var qn;
      a[153] !== Fn
        ? ((qn = m.jsxs(
            "div",
            babelHelpers.extends({}, An, { children: [Fn, Bn, Wn] }),
          )),
          (a[153] = Fn),
          (a[154] = qn))
        : (qn = a[154]);
      var Un = qn,
        Vn;
      a[155] !== Ce
        ? ((Vn =
            Ce !== ""
              ? o("WAWebCurrencyUtils").formatAmount1000ToParts(Ce, 0).symbol
              : ""),
          (a[155] = Ce),
          (a[156] = Vn))
        : (Vn = a[156]);
      var Hn = Vn,
        Gn;
      a[157] !== Hn
        ? ((Gn = s._(/*BTDS*/ "Price {currencySymbol} (Recommended)", [
            s._param("currencySymbol", Hn),
          ])),
          (a[157] = Hn),
          (a[158] = Gn))
        : (Gn = a[158]);
      var zn = Gn,
        jn;
      a[159] !== Ce
        ? ((jn =
            Ce !== ""
              ? o("WAWebCurrencyUtils").formatAmount1000ToParts(Ce, 0).symbol
              : ""),
          (a[159] = Ce),
          (a[160] = jn))
        : (jn = a[160]);
      var Kn = jn,
        Qn;
      a[161] !== Kn
        ? ((Qn = s._(/*BTDS*/ "Sale Price {currencySymbol}", [
            s._param("currencySymbol", Kn),
          ])),
          (a[161] = Kn),
          (a[162] = Qn))
        : (Qn = a[162]);
      var Xn = Qn,
        Yn = D ? "smb-catalog-create-product" : "smb-catalog-edit-product",
        Jn;
      a[163] !== Yn
        ? ((Jn = { surface: Yn }), (a[163] = Yn), (a[164] = Jn))
        : (Jn = a[164]);
      var Zn = Jn,
        er;
      a[165] !== C || a[166] !== E || a[167] !== In || a[168] !== vn
        ? ((er = m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: In,
            titleStr: vn,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: C,
            onCancel: E,
            focusBackOrCancel: !0,
          })),
          (a[165] = C),
          (a[166] = E),
          (a[167] = In),
          (a[168] = vn),
          (a[169] = er))
        : (er = a[169]);
      var tr;
      a[170] !== vt || a[171] !== Ae || a[172] !== A
        ? ((tr = m.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
            product: A,
            maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
            onChange: vt,
            ref: $,
            error: Ae,
          })),
          (a[170] = vt),
          (a[171] = Ae),
          (a[172] = A),
          (a[173] = tr))
        : (tr = a[173]);
      var nr;
      a[174] === Symbol.for("react.memo_cache_sentinel")
        ? ((nr = s._(/*BTDS*/ "Name")), (a[174] = nr))
        : (nr = a[174]);
      var rr;
      a[175] === Symbol.for("react.memo_cache_sentinel")
        ? ((rr = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (a[175] = rr))
        : (rr = a[175]);
      var or;
      a[176] === Symbol.for("react.memo_cache_sentinel")
        ? ((or = s._(/*BTDS*/ "Name")), (a[176] = or))
        : (or = a[176]);
      var ar;
      a[177] !== Dt || a[178] !== K || a[179] !== Le
        ? ((ar = m.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            value: K,
            placeholder: nr,
            onChange: Dt,
            theme: "small",
            showRemaining: !0,
            customStyleThemes: rr,
            maxLength: 150,
            error: Le,
            title: or,
          })),
          (a[177] = Dt),
          (a[178] = K),
          (a[179] = Le),
          (a[180] = ar))
        : (ar = a[180]);
      var ir;
      a[181] !== Ce ||
      a[182] !== Ft ||
      a[183] !== Ie ||
      a[184] !== zn ||
      a[185] !== pe
        ? ((ir =
            U(Ce) &&
            m.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              value: pe,
              placeholder: zn,
              onChange: Ft,
              theme: "small",
              maxLength: 30,
              customStyleThemes: [
                o("WAWebRichTextField.react").TextInputCustomStyleThemes
                  .Desaturated,
              ],
              error: Ie,
              title: s._(/*BTDS*/ "Price"),
            })),
          (a[181] = Ce),
          (a[182] = Ft),
          (a[183] = Ie),
          (a[184] = zn),
          (a[185] = pe),
          (a[186] = ir))
        : (ir = a[186]);
      var lr;
      a[187] !== Ce ||
      a[188] !== Bt ||
      a[189] !== at ||
      a[190] !== lt ||
      a[191] !== Xn ||
      a[192] !== he
        ? ((lr =
            U(Ce) &&
            o("WAWebBizGatingUtils").isCatalogProductSalePriceEnabled() &&
            m.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              readOnly: at,
              value: he,
              placeholder: Xn,
              onChange: Bt,
              theme: "small",
              maxLength: 30,
              customStyleThemes: at
                ? [
                    o("WAWebRichTextField.react").TextInputCustomStyleThemes
                      .Desaturated,
                    o("WAWebRichTextField.react").TextInputCustomStyleThemes
                      .DisabledLabel,
                  ]
                : [
                    o("WAWebRichTextField.react").TextInputCustomStyleThemes
                      .Desaturated,
                  ],
              error: lt,
              title: s._(/*BTDS*/ "Sale Price"),
            })),
          (a[187] = Ce),
          (a[188] = Bt),
          (a[189] = at),
          (a[190] = lt),
          (a[191] = Xn),
          (a[192] = he),
          (a[193] = lr))
        : (lr = a[193]);
      var sr;
      a[194] === Symbol.for("react.memo_cache_sentinel")
        ? ((sr = s._(/*BTDS*/ "Description (optional)")), (a[194] = sr))
        : (sr = a[194]);
      var ur;
      a[195] === Symbol.for("react.memo_cache_sentinel")
        ? ((ur = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (a[195] = ur))
        : (ur = a[195]);
      var cr;
      a[196] === Symbol.for("react.memo_cache_sentinel")
        ? ((cr = s._(/*BTDS*/ "Description")), (a[196] = cr))
        : (cr = a[196]);
      var dr;
      a[197] !== re || a[198] !== It
        ? ((dr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            value: re,
            placeholder: sr,
            onChange: It,
            theme: "small",
            showRemaining: !0,
            maxLength: 5e3,
            customStyleThemes: ur,
            multiline: !0,
            title: cr,
          })),
          (a[197] = re),
          (a[198] = It),
          (a[199] = dr))
        : (dr = a[199]);
      var mr;
      a[200] === Symbol.for("react.memo_cache_sentinel")
        ? ((mr = s._(/*BTDS*/ "Link (optional)")), (a[200] = mr))
        : (mr = a[200]);
      var pr;
      a[201] === Symbol.for("react.memo_cache_sentinel")
        ? ((pr = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (a[201] = pr))
        : (pr = a[201]);
      var _r;
      a[202] === Symbol.for("react.memo_cache_sentinel")
        ? ((_r = s._(/*BTDS*/ "Link")), (a[202] = _r))
        : (_r = a[202]);
      var fr;
      a[203] !== wt || a[204] !== Et || a[205] !== ie || a[206] !== xe
        ? ((fr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            value: ie,
            placeholder: mr,
            onChange: Et,
            onBlur: wt,
            theme: "small",
            customStyleThemes: pr,
            maxLength: 75,
            error: xe,
            managed: !0,
            title: _r,
          })),
          (a[203] = wt),
          (a[204] = Et),
          (a[205] = ie),
          (a[206] = xe),
          (a[207] = fr))
        : (fr = a[207]);
      var gr;
      a[208] === Symbol.for("react.memo_cache_sentinel")
        ? ((gr = s._(/*BTDS*/ "Item code (optional)")), (a[208] = gr))
        : (gr = a[208]);
      var hr;
      a[209] === Symbol.for("react.memo_cache_sentinel")
        ? ((hr = [
            o("WAWebRichTextField.react").TextInputCustomStyleThemes
              .Desaturated,
          ]),
          (a[209] = hr))
        : (hr = a[209]);
      var yr;
      a[210] === Symbol.for("react.memo_cache_sentinel")
        ? ((yr = s._(/*BTDS*/ "Item code")), (a[210] = yr))
        : (yr = a[210]);
      var Cr;
      a[211] !== Rt || a[212] !== ue || a[213] !== Ne
        ? ((Cr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            value: ue,
            placeholder: gr,
            onChange: Rt,
            theme: "small",
            customStyleThemes: hr,
            maxLength: 100,
            error: Ne,
            title: yr,
          })),
          (a[211] = Rt),
          (a[212] = ue),
          (a[213] = Ne),
          (a[214] = Cr))
        : (Cr = a[214]);
      var br;
      a[215] !== p.id ||
      a[216] !== rt ||
      a[217] !== ut ||
      a[218] !== sn ||
      a[219] !== an ||
      a[220] !== Nt ||
      a[221] !== et ||
      a[222] !== Ye ||
      a[223] !== M ||
      a[224] !== O ||
      a[225] !== Vt ||
      a[226] !== Gt
        ? ((br = o(
            "WAWebBizGatingUtils",
          ).showComplianceFieldsInEditProductDrawer(p.id)
            ? m.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
                isComplianceInfoAvailable: Ye,
                showComplianceInfoImporterAddress: Vt(),
                complianceInfo: rt,
                onComplianceInfoChange: sn,
                onComplianceInfoImporterAddressChange: an,
                lastUsedCountryCode: M,
                showComplianceInfoImporterNotApplicableToggle: Gt(),
                handleComplianceInfoImporterToggleChange: Nt,
                importerInformationNotApplicableEnabled: et,
                selfCountryCode: O,
                countriesMap: ut,
              })
            : null),
          (a[215] = p.id),
          (a[216] = rt),
          (a[217] = ut),
          (a[218] = sn),
          (a[219] = an),
          (a[220] = Nt),
          (a[221] = et),
          (a[222] = Ye),
          (a[223] = M),
          (a[224] = O),
          (a[225] = Vt),
          (a[226] = Gt),
          (a[227] = br))
        : (br = a[227]);
      var vr;
      a[228] !== Dn ||
      a[229] !== q ||
      a[230] !== wn ||
      a[231] !== tr ||
      a[232] !== ar ||
      a[233] !== ir ||
      a[234] !== lr ||
      a[235] !== dr ||
      a[236] !== fr ||
      a[237] !== Cr ||
      a[238] !== br ||
      a[239] !== Un ||
      a[240] !== $n
        ? ((vr = m.jsx(r("WAWebDrawerBody.react"), {
            children: m.jsxs("div", {
              ref: q,
              className: $n,
              children: [wn, tr, ar, ir, lr, dr, fr, Cr, br, Un, Dn],
            }),
          })),
          (a[228] = Dn),
          (a[229] = q),
          (a[230] = wn),
          (a[231] = tr),
          (a[232] = ar),
          (a[233] = ir),
          (a[234] = lr),
          (a[235] = dr),
          (a[236] = fr),
          (a[237] = Cr),
          (a[238] = br),
          (a[239] = Un),
          (a[240] = $n),
          (a[241] = vr))
        : (vr = a[241]);
      var Sr;
      return (
        a[242] !== Nn ||
        a[243] !== Ct ||
        a[244] !== ht ||
        a[245] !== l ||
        a[246] !== er ||
        a[247] !== vr ||
        a[248] !== Zn
          ? ((Sr = m.jsxs(
              r("WAWebDrawer.react"),
              {
                ref: l,
                theme: "catalog",
                onDrop: ht,
                onDragChange: Ct,
                tsNavigationData: Zn,
                children: [Nn, er, vr],
              },
              "catalog-link-drawer",
            )),
            (a[242] = Nn),
            (a[243] = Ct),
            (a[244] = ht),
            (a[245] = l),
            (a[246] = er),
            (a[247] = vr),
            (a[248] = Zn),
            (a[249] = Sr))
          : (Sr = a[249]),
        Sr
      );
    }
    function b(e) {
      return !e;
    }
    function v(e) {
      return e;
    }
    function S(e) {
      return !e;
    }
    function R(e) {
      return !e;
    }
    function L(e) {
      return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(
        e,
        o("WAWebBizGatingUtils").hideUnsupportedCurrency(),
      );
    }
    l.default = C;
  },
  226,
);
