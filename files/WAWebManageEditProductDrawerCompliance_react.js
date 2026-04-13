__d(
  "WAWebManageEditProductDrawerCompliance.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebCatalogLogEvents",
    "WAWebCheckBox.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebComplianceConstants",
    "WAWebComplianceInfo.react",
    "WAWebCountriesUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendCountriesUtils",
    "WAWebNoop",
    "WAWebRichTextField.react",
    "WAWebSpinner.react",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumSurfaceType",
    "fbs",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = {
        notApplicableLabel: { position: "x1n2onr6", top: "xnfr1j", $$css: !0 },
        notApplicableDescr: {
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "x9bq0rd",
          $$css: !0,
        },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.handleComplianceInfoImporterToggleChange,
        i = t.importerInformationNotApplicableEnabled,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.top40,
          )),
          (n[0] = l))
        : (l = n[0]);
      var u;
      n[1] !== a || n[2] !== i
        ? ((u = c.jsx(o("WAWebCheckBox.react").CheckBox, {
            id: "importer-information-not-applicable-check",
            onChange: a,
            checked: i,
            testid: void 0,
          })),
          (n[1] = a),
          (n[2] = i),
          (n[3] = u))
        : (u = n[3]);
      var d;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (e || (e = r("stylex"))).props([
            f.notApplicableLabel,
            o("WAWebUISpacing").uiMargin.start10,
          ])),
          (n[4] = d))
        : (d = n[4]);
      var m, p;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = c.jsx(
            "label",
            babelHelpers.extends({}, d, {
              htmlFor: "importer-information-not-applicable-check",
              children: s._(/*BTDS*/ "Importer information not applicable"),
            }),
          )),
          (p = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                f.notApplicableDescr,
                o("WAWebUISpacing").uiMargin.top5,
                o("WAWebUISpacing").uiMargin.bottom30,
                o("WAWebUISpacing").uiMargin.start28,
              ]),
              {
                children: s._(
                  /*BTDS*/ "Item is a service or non-physical good",
                ),
              },
            ),
          )),
          (n[5] = m),
          (n[6] = p))
        : ((m = n[5]), (p = n[6]));
      var _;
      return (
        n[7] !== u
          ? ((_ = c.jsxs(
              "div",
              babelHelpers.extends({}, l, { children: [u, m, p] }),
            )),
            (n[7] = u),
            (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    function h(e) {
      var t = e.complianceInfo,
        n = e.countriesMap,
        a = e.handleComplianceInfoImporterToggleChange,
        i = e.importerInformationNotApplicableEnabled,
        l = e.isComplianceInfoAvailable,
        u = e.lastUsedCountryCode,
        d = e.onComplianceInfoChange,
        f = e.onComplianceInfoImporterAddressChange,
        h = e.selfCountryCode,
        C = e.showComplianceInfoImporterAddress,
        b = e.showComplianceInfoImporterNotApplicableToggle,
        v = _([]),
        S = v[0],
        R = v[1],
        L = p(
          function () {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            if (
              o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
              S.length > 0
            ) {
              var n = [];
              return (
                (t == null ? void 0 : t.countryCodeOrigin) != null &&
                  n.push(t.countryCodeOrigin),
                o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(
                  S,
                  n,
                )
              );
            } else if (
              S.length > 0 &&
              o(
                "WAWebBizGatingUtils",
              ).canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(
                e,
              )
            )
              return o(
                "WAWebFrontendCountriesUtils",
              ).bubbleCountryOnListOfCountries(S, [
                o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA,
              ]);
            return S;
          },
          [S, t],
        ),
        E = p(
          function () {
            return o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
              u != null &&
              u !== h &&
              u !== (t == null ? void 0 : t.countryCodeOrigin)
              ? u
              : null;
          },
          [t, u, h],
        ),
        k = p(
          function () {
            var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            if (S.length > 0) {
              if (o("WAWebBizGatingUtils").isCountryOfOriginEnabled()) {
                var n = new Set();
                return (
                  r("isStringNullOrEmpty")(
                    t == null ? void 0 : t.countryCodeOrigin,
                  ) || n.add(t.countryCodeOrigin),
                  E != null && n.add(E),
                  h != null && n.add(h),
                  o(
                    "WAWebFrontendCountriesUtils",
                  ).bubbleCountryOnListOfCountries(S, Array.from(n))
                );
              } else if (
                o(
                  "WAWebBizGatingUtils",
                ).canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(
                  e,
                )
              ) {
                var a = [],
                  i = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
                return (
                  r("isStringNullOrEmpty")(
                    t == null ? void 0 : t.countryCodeOrigin,
                  ) || (i = t.countryCodeOrigin),
                  a.push(i),
                  o("WAWebFrontendCountriesUtils").formatCountriesOfOrigin(S, a)
                );
              }
            }
            return S;
          },
          [S, t == null ? void 0 : t.countryCodeOrigin, E, h],
        ),
        I = function (t) {
          return (
            t.toString() + " (" + s._(/*BTDS*/ "Optional").toString() + ")"
          );
        },
        T = function (n) {
          var e =
            !t ||
            Object.values(t.importerAddress).every(function (e) {
              return !e;
            });
          return e ? I(n) : n;
        };
      if (
        (m(
          function () {
            var e = !0,
              t = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
            if (
              o("WAWebBizGatingUtils").showComplianceFieldsInEditProductDrawer(
                t,
              )
            ) {
              var r = o("WAWebCountriesUtils").getCountriesWithMap({
                filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
                  .META_RECOGNIZED,
                countriesMap: n,
              });
              e && R(r);
            }
            return function () {
              e = !1;
            };
          },
          [n],
        ),
        !l || !S.length)
      )
        return c.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          children: c.jsx(r("WAWebFlexItem.react"), {
            children: c.jsx(o("WAWebSpinner.react").Spinner, {}),
          }),
        });
      var D;
      return (
        o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
          (D = s._(
            /*BTDS*/ "Select the country where the item was created. This helps us comply with WhatsApp\u2019s {commerce_policy_link}.",
            [
              s._param(
                "commerce_policy_link",
                c.jsx(r("WAWebClickableLink.react"), {
                  href: o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl(),
                  onClick: y,
                  children: r("fbs")._(/*BTDS*/ "Commerce Policy"),
                }),
              ),
            ],
          )),
        c.jsxs("div", {
          "data-testid": void 0,
          children: [
            c.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              value: t == null ? void 0 : t.countryNameOrigin,
              placeholder: s._(/*BTDS*/ "Country of Origin (required)"),
              onChange: r("WAWebNoop"),
              theme: "small",
              customStyleThemes: [
                o("WAWebRichTextField.react").TextInputCustomStyleThemes
                  .Desaturated,
              ],
              managed: !0,
              onFocus: function () {
                (o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
                  o("WAWebCatalogLogEvents").logAddEditCountryOfOriginViewed(),
                  o("WAWebCmd").Cmd.showCountrySelector(
                    s._(/*BTDS*/ "Country of origin"),
                    D,
                    t == null ? void 0 : t.countryCodeOrigin,
                    E,
                    k,
                    function (e) {
                      d("countryCodeOrigin", e);
                    },
                    o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY,
                  ));
              },
              error: t == null ? void 0 : t.countryCodeOriginError,
            }),
            b &&
              c.jsx(g, {
                handleComplianceInfoImporterToggleChange: a,
                importerInformationNotApplicableEnabled: i,
              }),
            C &&
              c.jsxs(c.Fragment, {
                children: [
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerName,
                    placeholder: T(s._(/*BTDS*/ "Importer name")),
                    onChange: function (t) {
                      d("importerName", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.IMPORTER_NAME,
                    error: t == null ? void 0 : t.importerNameError,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.street1,
                    placeholder: T(s._(/*BTDS*/ "Importer address line 1")),
                    onChange: function (t) {
                      f("street1", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.STREET1,
                    error: t == null ? void 0 : t.importerAddress.street1Error,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.street2,
                    placeholder: I(s._(/*BTDS*/ "Importer address line 2")),
                    onChange: function (t) {
                      f("street2", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.STREET2,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.city,
                    placeholder: T(s._(/*BTDS*/ "Importer city")),
                    onChange: function (t) {
                      f("city", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.CITY,
                    error: t == null ? void 0 : t.importerAddress.cityError,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.region,
                    placeholder: I(s._(/*BTDS*/ "Importer region")),
                    onChange: function (t) {
                      f("region", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.REGION,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.countryName,
                    placeholder: T(s._(/*BTDS*/ "Importer country")),
                    onChange: r("WAWebNoop"),
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    managed: !0,
                    onFocus: function () {
                      (o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
                        o(
                          "WAWebCatalogLogEvents",
                        ).logAddEditImporterCountryListViewed(),
                        o("WAWebCmd").Cmd.showCountrySelector(
                          s._(/*BTDS*/ "Importer country"),
                          void 0,
                          t == null ? void 0 : t.importerAddress.countryCode,
                          null,
                          L,
                          function (e) {
                            f("countryCode", e);
                          },
                          o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                            .IMPORTER_COUNTRY,
                        ));
                    },
                    error:
                      t == null ? void 0 : t.importerAddress.countryCodeError,
                  }),
                  c.jsx(o("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    value: t == null ? void 0 : t.importerAddress.postalCode,
                    placeholder: I(s._(/*BTDS*/ "Importer ZIP\/postal code")),
                    onChange: function (t) {
                      f("postalCode", t.text);
                    },
                    theme: "small",
                    customStyleThemes: [
                      o("WAWebRichTextField.react").TextInputCustomStyleThemes
                        .Desaturated,
                    ],
                    maxLength: o("WAWebComplianceConstants")
                      .COMPLIANCE_INFO_LENGTH.POSTAL_CODE,
                  }),
                  c.jsx(
                    o("WAWebComplianceInfo.react")
                      .ComplianceInfoHelpCenterBanner,
                    {
                      xstyle: [
                        o("WAWebUISpacing").uiPadding.top20,
                        o("WAWebUISpacing").uiPadding.bottom40,
                      ],
                    },
                  ),
                ],
              }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      (e.preventDefault(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl(),
        ));
    }
    l.default = h;
  },
  226,
);
