__d(
  "WAWebBizAdCreationTargetingModalLocationComponent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationLocationMap.react",
    "WAWebBizAdCreationLocationTypeRadio.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalLocationSpecParsers",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdLogger",
    "WAWebCountryCenterCoordinates",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState,
      h = 160,
      y = {
        bottomActions: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          paddingTop: "x1p57kb1",
          $$css: !0,
        },
        locationHeading: { marginBottom: "x1ua1l7f", $$css: !0 },
        root: { rowGap: "x1j3ira4", columnGap: "xrdqr27", $$css: !0 },
      };
    function C(e) {
      var t,
        n,
        a = e.adAccountID,
        i = e.onBack,
        l = e.onEditLocalLocation,
        c = e.onEditRegionalLocation,
        h = m(r("WAWebBizAdCreationTargetingSpecContext")),
        C = m(r("WAWebBizAdCreationLoggerContext")),
        b = f(!1);
      p(
        function () {
          C != null &&
            !b.current &&
            ((b.current = !0),
            r("WAWebBizAdLogger").log({
              event: "add_location_impression",
              loggerContext: C,
              adAccountID: a,
              extra: {},
            }));
        },
        [a, C],
      );
      var v = o(
          "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
        ).isLocalFlowSelection(h.geo_locations),
        S = g(v ? "local" : "regional"),
        R = S[0],
        L = S[1],
        E = o(
          "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
        ).formatLocationDisplay(h.geo_locations),
        k = v ? E : s._(/*BTDS*/ "Set a radius around a chosen location"),
        I = r("justknobx")._("4853"),
        T = _(
          function () {
            if (!I || !v) return null;
            var e = o(
                "WAWebBizAdCreationTargetingModalLocationSpecParsers",
              ).convertGeoLocationsToSearchResults(h.geo_locations),
              t = e[0];
            return t == null || t.latitude == null || t.longitude == null
              ? null
              : t;
          },
          [I, v, h.geo_locations],
        ),
        D = _(function () {
          return o("WAWebCountryCenterCoordinates").getDefaultCenter();
        }, []),
        x = v ? s._(/*BTDS*/ "Search for cities, countries, or regions") : E,
        $ = d(
          function () {
            (C != null &&
              r("WAWebBizAdLogger").log({
                event: "location_type_selected",
                loggerContext: C,
                adAccountID: a,
                extra: { location_type: R },
              }),
              R === "local" ? l() : c());
          },
          [a, R, C, l, c],
        );
      return u.jsx(r("WAWebBizAdCreationTargetingModalPage.react"), {
        xstyle: y.root,
        headerContent: u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebBackIcon.react").BackIcon,
              variant: "borderless",
              size: "medium",
              onPress: i,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: s._(/*BTDS*/ "Add location"),
            }),
          ],
        }),
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          grow: 1,
          children: [
            u.jsx(r("WDSText.react"), {
              type: "Body1Emphasized",
              colorName: "contentDefault",
              xstyle: y.locationHeading,
              children: s._(/*BTDS*/ "Location"),
            }),
            u.jsx(r("WAWebBizAdCreationLocationTypeRadio.react"), {
              value: "regional",
              label: s._(/*BTDS*/ "Regional"),
              secondaryLabel: x,
              checked: R === "regional",
              onChange: function () {
                return L("regional");
              },
              onEditPress: c,
            }),
            u.jsx(r("WAWebBizAdCreationLocationTypeRadio.react"), {
              value: "local",
              label: s._(/*BTDS*/ "Local"),
              secondaryLabel: k,
              checked: R === "local",
              onChange: function () {
                return L("local");
              },
              onEditPress: l,
            }),
            I &&
              R === "local" &&
              u.jsx("div", {
                className: "x1ymw6g x1380le5",
                children: u.jsx(r("WAWebBizAdCreationLocationMap.react"), {
                  latitude:
                    (t = T == null ? void 0 : T.latitude) != null
                      ? t
                      : D.latitude,
                  longitude:
                    (n = T == null ? void 0 : T.longitude) != null
                      ? n
                      : D.longitude,
                  radiusMeters: T == null ? void 0 : T.radiusInMeters,
                  showPin: T != null,
                  zoom: T == null ? 4 : void 0,
                }),
              }),
            u.jsx("div", { className: "x98rzlu" }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: y.bottomActions,
              children: u.jsx(r("WDSButton.react"), {
                label: r("WAWebFbtCommon")("Next"),
                variant: "filled",
                size: "medium",
                onPress: $,
              }),
            }),
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
