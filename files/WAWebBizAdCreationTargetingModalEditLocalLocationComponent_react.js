__d(
  "WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationLocationMap.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationTargetingModalLocationItem.react",
    "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebBizAdLogger",
    "WAWebCountryCenterCoordinates",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSearchInput",
    "WDSButton.react",
    "WDSSlider.react",
    "WDSSpinner.react",
    "WDSText.react",
    "justknobx",
    "react",
    "useWAWebBizAdCreationSearchLocalLocations",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = c.useMemo,
      _ = c.useState,
      f = {
        bottomActions: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          paddingTop: "x1p57kb1",
          $$css: !0,
        },
      };
    function g(e, t) {
      return e.length <= t ? e : e.substring(0, t) + "\u2026";
    }
    function h(e) {
      var t,
        n,
        a = e.adAccountID,
        i = e.environment,
        l = e.initialLocation,
        c = e.onBack,
        h = e.onNext,
        y = _(""),
        C = y[0],
        b = y[1],
        v = _(0),
        S = v[0],
        R = v[1],
        L = _(l != null ? l : null),
        E = L[0],
        k = L[1],
        I = _(function () {
          return (l == null ? void 0 : l.radiusInMeters) != null
            ? o(
                "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
              ).convertMetersToRadiusStep(
                l.radiusInMeters,
                l.type,
                o(
                  "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
                ).usesImperialUnits(l.countryCode),
              )
            : 3;
        }),
        T = I[0],
        D = I[1],
        x = m(r("WAWebBizAdCreationLoggerContext")),
        $ = d(
          function () {
            x != null &&
              r("WAWebBizAdLogger").log({
                event: "location_selection_error",
                loggerContext: x,
                adAccountID: a,
                extra: { location_type: "local" },
              });
          },
          [a, x],
        ),
        P = r("useWAWebBizAdCreationSearchLocalLocations")(i, $),
        N = P.clearLocations,
        M = P.fetchLocations,
        w = P.isLoading,
        A = P.locations,
        F = p(
          function () {
            return o(
              "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
            ).usesImperialUnits(E == null ? void 0 : E.countryCode);
          },
          [E],
        ),
        O = p(
          function () {
            return o(
              "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
            ).formatRadiusLabel(T, E == null ? void 0 : E.type, F);
          },
          [T, E, F],
        ),
        B = r("justknobx")._("4853"),
        W = E != null && E.latitude != null && E.longitude != null,
        q = p(function () {
          return o("WAWebCountryCenterCoordinates").getDefaultCenter();
        }, []),
        U = p(
          function () {
            if (E != null)
              return o(
                "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
              ).convertRadiusStepToMeters(T, E.type, F);
          },
          [T, E, F],
        ),
        V = C.trim().length > 0,
        H = d(
          function (e, t) {
            if (t) {
              var n = A.find(function (t) {
                return t.key === e;
              });
              n != null &&
                (k(n),
                b(""),
                R(function (e) {
                  return e + 1;
                }),
                N());
            } else k(null);
          },
          [A, N],
        ),
        G = d(function (e) {
          D(e[0]);
        }, []),
        z = d(
          function () {
            if (V) {
              (b(""),
                R(function (e) {
                  return e + 1;
                }),
                N());
              return;
            }
            E != null &&
              h(
                E,
                o(
                  "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
                ).convertRadiusStepToMeters(T, E.type, F),
              );
          },
          [E, T, F, h, V, N],
        ),
        j = o("useWAWebTimeout").useManualTimeout(function () {
          M(C);
        }),
        K = j[0],
        Q = j[1],
        X = d(
          function (e) {
            (b(e), Q(), K(300));
          },
          [Q, K],
        ),
        Y =
          w &&
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WDSSpinner.react"), { size: 40 }),
          }),
        J =
          !w &&
          V &&
          A.length > 0 &&
          A.map(function (e) {
            return u.jsx(
              r("WAWebBizAdCreationTargetingModalLocationItem.react"),
              { isSelected: !1, location: e, onToggle: H, showSubtitle: !0 },
              e.key,
            );
          }),
        Z =
          !B &&
          !w &&
          !V &&
          E != null &&
          u.jsx(r("WAWebBizAdCreationTargetingModalLocationItem.react"), {
            isSelected: !0,
            location: E,
            onToggle: H,
            showSubtitle: !0,
          }),
        ee = function () {
          return u.jsxs(u.Fragment, { children: [Y, J, Z] });
        };
      return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
        headerContent: u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebBackIcon.react").BackIcon,
              variant: "borderless",
              size: "medium",
              onPress: c,
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
              onSearch: X,
              placeholder:
                B && (E == null ? void 0 : E.name) != null
                  ? g(E.name, 45)
                  : s._(/*BTDS*/ "Search for an address or place"),
              padding: 0,
            },
            S,
          ),
          (V || !B) &&
            u.jsx("div", {
              className:
                "x98rzlu x1ua1l7f x98l61r x1odjw0f x1b73lln x78zum5 xdt5ytf",
              children: ee(),
            }),
          B &&
            !V &&
            u.jsx("div", {
              className: "x98rzlu x1ua1l7f x1380le5 x2lwn1j",
              children: u.jsx(r("WAWebBizAdCreationLocationMap.react"), {
                latitude:
                  (t = E == null ? void 0 : E.latitude) != null
                    ? t
                    : q.latitude,
                longitude:
                  (n = E == null ? void 0 : E.longitude) != null
                    ? n
                    : q.longitude,
                radiusMeters: W ? U : void 0,
                showPin: W,
                zoom: W ? void 0 : 4,
              }),
            }),
          !w &&
            !V &&
            E != null &&
            u.jsx("div", {
              className: "x1ua1l7f",
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                gap: 8,
                children: [
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    gap: 8,
                    align: "center",
                    children: [
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ "Radius:"),
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: O,
                      }),
                    ],
                  }),
                  u.jsx(r("WDSSlider.react"), {
                    values: [T],
                    min: 0,
                    max: 7,
                    step: 1,
                    onChangeSettled: G,
                    startEndLabels: "minMax",
                    displayValueText: function (t) {
                      return o(
                        "WAWebBizAdCreationTargetingModalLocationRadiusUtils",
                      ).formatRadiusLabel(t, E == null ? void 0 : E.type, F);
                    },
                  }),
                ],
              }),
            }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: f.bottomActions,
            gap: 8,
            children: [
              u.jsx(r("WDSButton.react"), {
                label: r("WAWebFbtCommon")("Cancel"),
                variant: "outline",
                size: "medium",
                onPress: c,
              }),
              u.jsx(r("WDSButton.react"), {
                label: r("WAWebFbtCommon")("Next"),
                variant: "filled",
                size: "medium",
                onPress: z,
                disabled: E == null,
              }),
            ],
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
