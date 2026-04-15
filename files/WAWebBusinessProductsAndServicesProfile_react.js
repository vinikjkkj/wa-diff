__d(
  "WAWebBusinessProductsAndServicesProfile.react",
  [
    "WALogger",
    "WAWebBizGetPriceTiersQuery",
    "WAWebBusinessProductsAndServicesView.react",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebBusinessServiceField.react",
    "WAWebCatalogCollection",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebPriceRangeDropdown.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = {
        container: {
          paddingInlineStart: "xdx6fka",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.bizProfileValues,
        a = e.businessProfile,
        i = e.isPriceTierEnabled,
        l = e.isServiceOfferingsEnabled,
        s = e.isV2Enabled,
        c = e.onFieldChange,
        m = i === void 0 ? !1 : i,
        f = l === void 0 ? !1 : l,
        h = s === void 0 ? !1 : s,
        C = p(null),
        b = C[0],
        v = C[1],
        S;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = []), (t[0] = S))
        : (S = t[0]);
      var R = p(S),
        L = R[0],
        E = R[1],
        k = p(null),
        I = k[0],
        T = k[1],
        D;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = r("WAWebL10N").getLocale()), (t[1] = D))
        : (D = t[1]);
      var x = D,
        $,
        P;
      (t[2] !== h
        ? (($ = function () {
            h &&
              o("WAWebBizGetPriceTiersQuery")
                .getPriceTiers(x)
                .then(function (e) {
                  e.type === "success" && T(e.priceTiers);
                })
                .catch(y);
          }),
          (P = [h, x]),
          (t[2] = h),
          (t[3] = $),
          (t[4] = P))
        : (($ = t[3]), (P = t[4])),
        d($, P));
      var N;
      t[5] !== a
        ? ((N = function () {
            a != null &&
              a.id &&
              o("WAWebCatalogCollection")
                .CatalogCollection.find(a.id)
                .then(function (e) {
                  v(e);
                  var t = e.productCollection.getProductModels(!0);
                  E(t);
                })
                .catch(r("WAWebNoop"));
          }),
          (t[5] = a),
          (t[6] = N))
        : (N = t[6]);
      var M = a == null ? void 0 : a.id,
        w;
      (t[7] !== M ? ((w = [M]), (t[7] = M), (t[8] = w)) : (w = t[8]), d(N, w));
      var A;
      t[9] !== a
        ? ((A = function () {
            a != null &&
              a.id &&
              o("WAWebCatalogCollection")
                .CatalogCollection.find(a.id)
                .then(function (e) {
                  var t = e.productCollection.getProductModels(!0);
                  E(t);
                })
                .catch(r("WAWebNoop"));
          }),
          (t[9] = a),
          (t[10] = A))
        : (A = t[10]);
      var F = A;
      a == null || a.offerings;
      var O;
      e: {
        var B = a == null ? void 0 : a.offerings;
        if (B == null || B.length === 0) {
          O = null;
          break e;
        }
        var W;
        t[11] !== B
          ? ((W = B.flatMap(g)), (t[11] = B), (t[12] = W))
          : (W = t[12]);
        var q = W;
        O = q.length > 0 ? q : null;
      }
      var U = O,
        V;
      if (
        t[13] !== n ||
        t[14] !== m ||
        t[15] !== h ||
        t[16] !== c ||
        t[17] !== I
      ) {
        var H;
        ((V =
          h &&
          m &&
          u.jsx(r("WAWebPriceRangeDropdown.react"), {
            dynamicOptions: I,
            label: o("WAWebBusinessProfileLabels").getPriceRangeLabel(),
            onChange: c,
            onOpen: function () {
              var e =
                (n == null ? void 0 : n.priceTier) != null &&
                n.priceTier !== "" &&
                n.priceTier !== "0";
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.clickPriceRange(e);
            },
            value: (H = n == null ? void 0 : n.priceTier) != null ? H : "",
          })),
          (t[13] = n),
          (t[14] = m),
          (t[15] = h),
          (t[16] = c),
          (t[17] = I),
          (t[18] = V));
      } else V = t[18];
      var G = L.length > 0,
        z;
      t[19] !== b || t[20] !== F || t[21] !== L || t[22] !== G
        ? ((z = u.jsx(r("WAWebBusinessProductsAndServicesView.react"), {
            catalog: b,
            fetchProducts: F,
            products: L,
            hasProducts: G,
          })),
          (t[19] = b),
          (t[20] = F),
          (t[21] = L),
          (t[22] = G),
          (t[23] = z))
        : (z = t[23]);
      var j;
      t[24] !== f || t[25] !== h || t[26] !== U
        ? ((j =
            h &&
            f &&
            u.jsx(
              o("WAWebBusinessServiceField.react").WAWebBusinessServiceField,
              { services: U },
            )),
          (t[24] = f),
          (t[25] = h),
          (t[26] = U),
          (t[27] = j))
        : (j = t[27]);
      var K;
      return (
        t[28] !== V || t[29] !== z || t[30] !== j
          ? ((K = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 12,
              xstyle: _.container,
              children: [V, z, j],
            })),
            (t[28] = V),
            (t[29] = z),
            (t[30] = j),
            (t[31] = K))
          : (K = t[31]),
        K
      );
    }
    function g(e) {
      return e.offerings.map(h);
    }
    function h(e) {
      return {
        id: e.id,
        is_offered: e.is_offered,
        localized_display_name: e.localized_display_name,
      };
    }
    function y(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "getPriceTiers: fetch failed",
          ])),
      );
    }
    l.default = f;
  },
  98,
);
