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
    function f(t) {
      var n,
        a = t.bizProfileValues,
        i = t.businessProfile,
        l = t.isPriceTierEnabled,
        s = l === void 0 ? !1 : l,
        c = t.isServiceOfferingsEnabled,
        f = c === void 0 ? !1 : c,
        g = t.isV2Enabled,
        h = g === void 0 ? !1 : g,
        y = t.onFieldChange,
        C = p(null),
        b = C[0],
        v = C[1],
        S = p([]),
        R = S[0],
        L = S[1],
        E = p(null),
        k = E[0],
        I = E[1],
        T = r("WAWebL10N").getLocale();
      (d(
        function () {
          h &&
            o("WAWebBizGetPriceTiersQuery")
              .getPriceTiers(T)
              .then(function (e) {
                e.type === "success" && I(e.priceTiers);
              })
              .catch(function (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getPriceTiers: fetch failed",
                    ])),
                );
              });
        },
        [h, T],
      ),
        d(
          function () {
            i != null &&
              i.id &&
              o("WAWebCatalogCollection")
                .CatalogCollection.find(i.id)
                .then(function (e) {
                  v(e);
                  var t = e.productCollection.getProductModels(!0);
                  L(t);
                })
                .catch(r("WAWebNoop"));
          },
          [i == null ? void 0 : i.id],
        ));
      var D = function () {
          i != null &&
            i.id &&
            o("WAWebCatalogCollection")
              .CatalogCollection.find(i.id)
              .then(function (e) {
                var t = e.productCollection.getProductModels(!0);
                L(t);
              })
              .catch(r("WAWebNoop"));
        },
        x = m(
          function () {
            var e = i == null ? void 0 : i.offerings;
            if (e == null || e.length === 0) return null;
            var t = e.flatMap(function (e) {
              return e.offerings.map(function (e) {
                return {
                  id: e.id,
                  is_offered: e.is_offered,
                  localized_display_name: e.localized_display_name,
                };
              });
            });
            return t.length > 0 ? t : null;
          },
          [i == null ? void 0 : i.offerings],
        );
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        gap: 12,
        xstyle: _.container,
        children: [
          h &&
            s &&
            u.jsx(r("WAWebPriceRangeDropdown.react"), {
              dynamicOptions: k,
              label: o("WAWebBusinessProfileLabels").getPriceRangeLabel(),
              onChange: y,
              onOpen: function () {
                var e =
                  (a == null ? void 0 : a.priceTier) != null &&
                  a.priceTier !== "" &&
                  a.priceTier !== "0";
                o(
                  "WAWebBusinessProfileSMBUserJourneyLogger",
                ).BusinessProfileUserJourneyLogger.clickPriceRange(e);
              },
              value: (n = a == null ? void 0 : a.priceTier) != null ? n : "",
            }),
          u.jsx(r("WAWebBusinessProductsAndServicesView.react"), {
            catalog: b,
            fetchProducts: D,
            products: R,
            hasProducts: R.length > 0,
          }),
          h &&
            f &&
            u.jsx(
              o("WAWebBusinessServiceField.react").WAWebBusinessServiceField,
              { services: x },
            ),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
