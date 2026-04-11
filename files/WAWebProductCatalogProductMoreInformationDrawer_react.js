__d(
  "WAWebProductCatalogProductMoreInformationDrawer.react",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebCatalogCollection",
    "WAWebComplianceConstants",
    "WAWebComplianceInfo.react",
    "WAWebCountriesUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebStateUtils",
    "WAWebSyntheticCountryCode",
    "WAWebUISpacing",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m.useState,
      f = [
        o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
        o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
      ];
    function g(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = i.onBack,
        m = o("useWAWebModelValues").useModelValues(i.product, [
          "id",
          "catalogWid",
        ]),
        g = _({}),
        h = g[0],
        y = g[1],
        C = _(""),
        b = C[0],
        v = C[1],
        S = _(""),
        R = S[0],
        L = S[1],
        E = _(!0),
        k = E[0],
        I = E[1],
        T = function (t) {
          var e, a;
          return ((e = t.complianceInfo) == null
            ? void 0
            : e.countryCodeOrigin) ===
            String(
              o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable,
            )
            ? (d || (d = n("Promise"))).resolve(
                p.jsxs("div", {
                  children: [
                    p.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (c || (c = r("stylex"))).props(
                          o("WAWebUISpacing").uiMargin.bottom6,
                        ),
                        { children: s._(/*BTDS*/ "Not applicable") },
                      ),
                    ),
                    p.jsx("div", {
                      children: s._(
                        /*BTDS*/ "Item is a service or non-physical good",
                      ),
                    }),
                  ],
                }),
              )
            : o("WAWebCountriesUtils").getCountryNameFromCountryCode(
                (a = t.complianceInfo) == null ? void 0 : a.countryCodeOrigin,
                o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
              );
        };
      r("useWAWebRenderCallbacks")({
        onMount: function () {
          function t() {
            return a.apply(this, arguments);
          }
          function a() {
            return (
              (a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebCatalogCollection").CatalogCollection.findProduct(
                  {
                    catalogWid: m.catalogWid,
                    productId: m.id.toString(),
                    productMsgMediaData:
                      o("WAWebStateUtils").unproxy(m).productMsgMediaData,
                    shouldFetchComplianceFields: !0,
                  },
                );
                var t = o("WAWebCatalogCollection").CatalogCollection.get(
                    m.catalogWid,
                  ),
                  n = r("WANullthrows")(t).productCollection.get(m.id);
                if (n) {
                  var a,
                    i,
                    l,
                    s,
                    u,
                    c,
                    d,
                    p,
                    _ = yield T(n),
                    f = yield o(
                      "WAWebCountriesUtils",
                    ).getCountryNameFromCountryCode(
                      (a = n.complianceInfo) == null ||
                        (a = a.importerAddress) == null
                        ? void 0
                        : a.countryCode,
                      o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                        .META_RECOGNIZED,
                    ),
                    g = {
                      importerName:
                        ((i = n.complianceInfo) == null
                          ? void 0
                          : i.importerName) || "",
                      countryCodeOrigin:
                        ((l = n.complianceInfo) == null
                          ? void 0
                          : l.countryCodeOrigin) || "",
                      importerAddress: {
                        street1:
                          ((s = n.complianceInfo) == null ||
                          (s = s.importerAddress) == null
                            ? void 0
                            : s.street1) || "",
                        street2:
                          ((u = n.complianceInfo) == null ||
                          (u = u.importerAddress) == null
                            ? void 0
                            : u.street2) || "",
                        city:
                          ((c = n.complianceInfo) == null ||
                          (c = c.importerAddress) == null
                            ? void 0
                            : c.city) || "",
                        region:
                          ((d = n.complianceInfo) == null ||
                          (d = d.importerAddress) == null
                            ? void 0
                            : d.region) || "",
                        postalCode:
                          ((p = n.complianceInfo) == null ||
                          (p = p.importerAddress) == null
                            ? void 0
                            : p.postalCode) || "",
                      },
                    };
                  (y(g), I(!1), v(_), L(f));
                } else
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to fetch compliance for product: ",
                        "",
                      ])),
                    m.id,
                  );
              })),
              a.apply(this, arguments)
            );
          }
          t();
        },
      });
      var D = function () {
          return l();
        },
        x = h.countryCodeOrigin,
        $ = h.importerAddress,
        P = h.importerName;
      return p.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: a,
          onDrop: D,
          theme: "striped",
          tsNavigationData: {
            surface: "unknown",
            viewName: "catalog-product-more-info",
          },
          children: [
            p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: s._(/*BTDS*/ "More information"),
              onBack: D,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            p.jsx(r("WAWebDrawerBody.react"), {
              theme: k ? "center-content" : void 0,
              children: k
                ? p.jsx(
                    o("WAWebComplianceInfo.react").ComplianceInfoLoading,
                    {},
                  )
                : p.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, {
                    children: [
                      p.jsx(
                        o("WAWebComplianceInfo.react")
                          .ComplianceInfoPrimitiveField,
                        { value: b, label: s._(/*BTDS*/ "Country of origin") },
                      ),
                      x && !f.includes(x)
                        ? p.jsxs(p.Fragment, {
                            children: [
                              p.jsx(
                                o("WAWebComplianceInfo.react")
                                  .ComplianceInfoPrimitiveField,
                                {
                                  value: P,
                                  label: s._(/*BTDS*/ "Name of importer"),
                                },
                              ),
                              p.jsx(
                                o("WAWebComplianceInfo.react")
                                  .ComplianceInfoStructuralField,
                                {
                                  valuesMap: babelHelpers.extends(
                                    { importerAddressCountryNameOrigin: R },
                                    $,
                                  ),
                                  keys: [
                                    "street1",
                                    "street2",
                                    "city",
                                    "region",
                                    "postalCode",
                                    "importerAddressCountryNameOrigin",
                                  ],
                                  label: s._(/*BTDS*/ "Address of importer"),
                                },
                              ),
                            ],
                          })
                        : null,
                    ],
                  }),
            }),
          ],
        },
        "product-details-drawer",
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
