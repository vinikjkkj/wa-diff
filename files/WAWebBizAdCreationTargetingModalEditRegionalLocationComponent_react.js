__d(
  "WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationTargetingModalLocationConflictUtils",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalLocationItem.react",
    "WAWebBizAdCreationTargetingModalLocationSpecParsers",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdLogger",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSearchInput",
    "WDSButton.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "useWAWebBizAdCreationSearchRegionalLocations",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useState,
      _ = {
        bottomActions: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          paddingTop: "x1p57kb1",
          $$css: !0,
        },
        emptyStateText: { marginBottom: "x1ua1l7f", $$css: !0 },
        sectionsContainer: { rowGap: "x1f0uite", $$css: !0 },
        sectionHeader: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function f(e) {
      var t = e.header,
        n = e.locations,
        a = e.onToggle,
        i = e.showSubtitle;
      return n.length === 0
        ? null
        : u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "contentDeemphasized",
                xstyle: _.sectionHeader,
                children: t,
              }),
              n.map(function (e) {
                var t = typeof i == "function" ? i(e) : i;
                return u.jsx(
                  r("WAWebBizAdCreationTargetingModalLocationItem.react"),
                  { isSelected: !0, location: e, onToggle: a, showSubtitle: t },
                  e.key,
                );
              }),
            ],
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.adAccountID,
        n = e.environment,
        a = e.onBack,
        i = e.onNext,
        l = m(r("WAWebBizAdCreationTargetingSpecContext")),
        c = p(""),
        g = c[0],
        y = c[1],
        C = p(0),
        b = C[0],
        v = C[1],
        S = m(r("WAWebBizAdCreationLoggerContext")),
        R = d(
          function () {
            S != null &&
              r("WAWebBizAdLogger").log({
                event: "location_selection_error",
                loggerContext: S,
                adAccountID: t,
                extra: { location_type: "regional" },
              });
          },
          [t, S],
        ),
        L = r("useWAWebBizAdCreationSearchRegionalLocations")(n, R),
        E = L.fetchLocations,
        k = L.isLoading,
        I = L.locations,
        T = o(
          "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
        ).isLocalFlowSelection(l.geo_locations),
        D = T
          ? []
          : o(
              "WAWebBizAdCreationTargetingModalLocationSpecParsers",
            ).convertGeoLocationsToSearchResults(l.geo_locations),
        x = p(D),
        $ = x[0],
        P = x[1],
        N = g.trim().length > 0,
        M = d(
          function (e, t) {
            if (t) {
              var n = I.find(function (t) {
                return t.key === e;
              });
              if (n != null) {
                var r = o(
                  "WAWebBizAdCreationTargetingModalLocationConflictUtils",
                ).findConflictingLocations($, n);
                P(function (e) {
                  var t = e.filter(function (e) {
                    return !r.some(function (t) {
                      return t.key === e.key;
                    });
                  });
                  return [].concat(t, [n]);
                });
              }
            } else
              P(function (t) {
                return t.filter(function (t) {
                  return t.key !== e;
                });
              });
          },
          [I, $],
        ),
        w = d(
          function () {
            if (N) {
              (y(""),
                v(function (e) {
                  return e + 1;
                }));
              return;
            }
            i($);
          },
          [i, $, N],
        ),
        A = o("useWAWebTimeout").useManualTimeout(function () {
          E(g);
        }),
        F = A[0],
        O = A[1],
        B = d(
          function (e) {
            (y(e), O(), F(300));
          },
          [O, F],
        ),
        W = d(
          function (e) {
            return $.some(function (t) {
              return t.key === e.key;
            });
          },
          [$],
        ),
        q = $.filter(function (e) {
          return e.type === "ZIP";
        }),
        U = $.filter(function (e) {
          return e.type === "COUNTRY_GROUP";
        }),
        V = $.filter(function (e) {
          return e.type === "COUNTRY" || e.type === "REGION";
        }),
        H = $.filter(function (e) {
          return e.type === "NEIGHBORHOOD";
        }),
        G = $.filter(function (e) {
          return (
            e.type === "CITY" || e.type === "PLACE" || e.type === "SUBCITY"
          );
        }),
        z = $.filter(function (e) {
          return e.type === "CUSTOM_LOCATION";
        }),
        j =
          k &&
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WDSSpinner.react"), { size: 40 }),
          }),
        K =
          !k &&
          !N &&
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: _.emptyStateText,
                children: s._(
                  /*BTDS*/ "Add a broad range of locations to cover the largest surrounding areas.",
                ),
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: _.sectionsContainer,
                children: [
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Continents"),
                    locations: U,
                    onToggle: M,
                    showSubtitle: !1,
                  }),
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Postcodes"),
                    locations: q,
                    onToggle: M,
                    showSubtitle: !0,
                  }),
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Countries or regions"),
                    locations: V,
                    onToggle: M,
                    showSubtitle: h,
                  }),
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Neighborhoods"),
                    locations: H,
                    onToggle: M,
                    showSubtitle: !0,
                  }),
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Towns or cities"),
                    locations: G,
                    onToggle: M,
                    showSubtitle: !0,
                  }),
                  u.jsx(f, {
                    header: s._(/*BTDS*/ "Addresses"),
                    locations: z,
                    onToggle: M,
                    showSubtitle: !1,
                  }),
                ],
              }),
            ],
          }),
        Q =
          !k &&
          N &&
          I.length > 0 &&
          I.map(function (e) {
            var t =
              e.type === "CITY" || e.type === "REGION" || e.type === "SUBCITY";
            return u.jsx(
              r("WAWebBizAdCreationTargetingModalLocationItem.react"),
              { isSelected: W(e), location: e, onToggle: M, showSubtitle: t },
              e.key,
            );
          }),
        X = function () {
          return u.jsxs(u.Fragment, { children: [j, K, Q] });
        };
      return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
        headerContent: u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebBackIcon.react").BackIcon,
              variant: "borderless",
              size: "medium",
              onPress: a,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Edit location"),
            }),
          ],
        }),
        children: [
          u.jsx(
            o("WAWebSearchInput").SearchInput,
            {
              onSearch: B,
              placeholder: s._(
                /*BTDS*/ "Search for cities, countries, or regions",
              ),
              padding: 0,
            },
            b,
          ),
          u.jsx("div", {
            className: "x98rzlu x1ua1l7f x98l61r x6ikm8r",
            children: X(),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: _.bottomActions,
            children: u.jsx(r("WDSButton.react"), {
              label: r("WAWebFbtCommon")("Next"),
              variant: "filled",
              size: "medium",
              onPress: w,
              disabled: $.length === 0,
            }),
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return e.type === "REGION";
    }
    l.default = g;
  },
  226,
);
