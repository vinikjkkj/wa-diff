__d(
  "WAWebBizAdCreationTargetingModalMainPage.react",
  [
    "fbt",
    "CometRelay",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationConsts",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationTargetingModalAgeComponent.react",
    "WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
    "WAWebBizAdCreationTargetingModalContext",
    "WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
    "WAWebBizAdCreationTargetingModalGenderComponent.react",
    "WAWebBizAdCreationTargetingModalInterestsUtils",
    "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebBizAdCreationTargetingModalSelectableRow.react",
    "WAWebBizAdCreationTargetingSpecContext",
    "WAWebBizAdCreationTargetingSpecHawkWidget.react",
    "WAWebBizAdLogger",
    "WAWebBizAdTargetingSpecLogData",
    "WAWebBizGatingUtils",
    "WAWebDivider.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebXIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "useWAWebEstimatedDailyReach",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.Suspense,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f = c.useState,
      g = {
        actionButtons: { columnGap: "x1amjocr", $$css: !0 },
        contentContainer: {
          justifyContent: "x1qughib",
          height: "x5yr21d",
          $$css: !0,
        },
        content: {
          rowGap: "x1j3ira4",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          $$css: !0,
        },
        name: { marginBottom: "xefnzgg", $$css: !0 },
        root: { rowGap: "x121sasi", $$css: !0 },
      };
    function h(e) {
      var t,
        n = e.audienceOption,
        o = e.optimizationGoalInput,
        a = m(r("WAWebBizAdCreationTargetingModalContext")),
        i = a.currency,
        l = a.dailyBudget,
        s = a.legacyAdAccountID,
        c = a.selectedPublisherPlatforms,
        d = m(r("WAWebBizAdCreationTargetingSpecContext")),
        p = (t = m(r("WAWebBizAdCreationConfigContext"))) != null ? t : {},
        _ = p.flow,
        f = p.flowID,
        g = r("useWAWebEstimatedDailyReach")({
          legacyAdAccountID: s,
          targetingSpecAudience: JSON.stringify(d),
          optimizationGoalInput: o,
          audienceOptionAudience: n,
          selectedPublisherPlatforms: c,
          currency: i,
          postID: null,
          flowID: f,
          flow: _,
          dailyBudget: l,
        });
      return u.jsx(r("WDSText.react"), {
        colorName: "contentDeemphasized",
        type: "Body2",
        children: g,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.adAccountID,
        n = e.audienceID,
        a = e.audienceOption,
        i = e.mode,
        l = e.onCancel,
        c = e.onNavigateToDeleteConfirmation,
        y = e.onNavigateToInterests,
        C = e.onNavigateToLocation,
        b = e.onSaveAudience,
        v = m(r("WAWebBizAdCreationTargetingSpecContext")),
        S = m(r("WAWebBizAdCreationConfigContext")),
        R = m(r("WAWebBizAdCreationTargetingModalContext")),
        L = R.audienceName,
        E = R.environment,
        k = R.setAudienceName,
        I = m(r("WAWebBizAdCreationLoggerContext")),
        T = _(!1);
      p(
        function () {
          if (I != null && !T.current) {
            T.current = !0;
            var e = r("WAWebBizAdTargetingSpecLogData")(v);
            r("WAWebBizAdLogger").log({
              event: "create_audience_impression",
              loggerContext: I,
              adAccountID: t,
              extra: babelHelpers.extends(
                {
                  mode: i,
                  audience_id: n,
                  audience_name: L,
                  audience_option: a,
                },
                e,
              ),
            });
          }
        },
        [t, n, L, a, I, i, v],
      );
      var D = f(!1),
        x = D[0],
        $ = D[1],
        P = a === "SAVED_AUDIENCE",
        N = L.trim(),
        M = P && N.length === 0,
        w = function () {
          (o("WAWebModalManager").ModalManager.close(), l == null || l());
        },
        A = function () {
          (I != null &&
            r("WAWebBizAdLogger").log({
              event: "save_audience_click",
              loggerContext: I,
              adAccountID: t,
              extra: { audience_id: n },
            }),
            $(!0),
            b({
              targetingSpec: v,
              audienceName: L,
              callback: function () {
                ($(!1), o("WAWebModalManager").ModalManager.close());
              },
              onError: function () {
                $(!1);
              },
            }));
        },
        F = S != null ? S : {},
        O = F.pageID,
        B = F.product,
        W = {
          objective: o("WAWebBizAdCreationConsts").WA_WEB_AD_OBJECTIVE,
          page_id: O,
          product: B != null ? B : "BOOSTED_MESSAGE",
        };
      return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
        xstyle: g.root,
        headerContent: u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebXIcon.react").XIcon,
              variant: "borderless",
              size: "medium",
              onPress: w,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children:
                i === "create"
                  ? s._(/*BTDS*/ "Create new audience")
                  : i === "edit"
                    ? s._(/*BTDS*/ "Edit audience")
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            i,
                        );
                      })(),
            }),
          ],
        }),
        children: [
          o(
            "WAWebBizGatingUtils",
          ).nativeAdsCreationTargetingModalHawkToolEnabled() &&
            u.jsx(r("WAWebBizAdCreationTargetingSpecHawkWidget.react"), {}),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            justify: "all",
            children: [
              u.jsx(r("WDSText.react"), {
                colorName: "contentDefault",
                type: "Body1Emphasized",
                children: s._(/*BTDS*/ "Estimated daily impressions"),
              }),
              u.jsx(d, {
                fallback: u.jsx(
                  o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                  { height: 20, width: 100 },
                ),
                children: u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: E,
                  children: u.jsx(h, {
                    audienceOption: a,
                    optimizationGoalInput: W,
                  }),
                }),
              }),
            ],
          }),
          P &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: g.name,
              align: "stretch",
              children: u.jsx(
                r(
                  "WAWebBizAdCreationTargetingModalAudienceNameComponent.react",
                ),
                { audienceName: L, onAudienceNameChange: k },
              ),
            }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: g.contentContainer,
            align: "stretch",
            children: [
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: g.content,
                align: "stretch",
                children: [
                  u.jsx(
                    r("WAWebBizAdCreationTargetingModalSelectableRow.react"),
                    {
                      title: s._(/*BTDS*/ "Locations"),
                      subtitle: o(
                        "WAWebBizAdCreationTargetingModalLocationDisplayUtils",
                      ).formatLocationDisplay(v.geo_locations),
                      onEditClick: C,
                      ariaLabel: s._(/*BTDS*/ "Edit locations"),
                    },
                  ),
                  u.jsx(
                    r("WAWebBizAdCreationTargetingModalSelectableRow.react"),
                    {
                      title: s._(/*BTDS*/ "Interests"),
                      subtitle: o(
                        "WAWebBizAdCreationTargetingModalInterestsUtils",
                      ).formatInterestsDisplayWithPlaceholder(v.flexible_spec),
                      onEditClick: y,
                      ariaLabel: s._(/*BTDS*/ "Edit interests"),
                    },
                  ),
                  u.jsx(
                    r("WAWebBizAdCreationTargetingModalAgeComponent.react"),
                    {},
                  ),
                  u.jsx(
                    r("WAWebBizAdCreationTargetingModalGenderComponent.react"),
                    {},
                  ),
                ],
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                gap: 16,
                children: [
                  u.jsx("div", {
                    className: "x1iolzdw xoyeui7 x1mii8t8",
                    children: u.jsx(r("WAWebDivider.react"), {
                      direction: "horizontal",
                    }),
                  }),
                  u.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "end",
                    xstyle: g.actionButtons,
                    children: [
                      n != null &&
                        a === "SAVED_AUDIENCE" &&
                        u.jsx(
                          r(
                            "WAWebBizAdCreationTargetingModalDeleteAudienceButton.react",
                          ),
                          {
                            adAccountID: t,
                            audienceID: n,
                            onNavigateToDeleteConfirmation:
                              c != null ? c : r("WAWebNoop"),
                          },
                        ),
                      u.jsx(r("WDSButton.react"), {
                        label: s._(/*BTDS*/ "Save"),
                        variant: "filled",
                        size: "medium",
                        onPress: A,
                        loading: x,
                        disabled: M,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
