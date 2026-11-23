__d(
  "MAIBARenderCTAButtonsComponent",
  [
    "AdAccountRecommendationRootCauseIdentifierLabel",
    "AdsALSurfaceMAIBAPlugin",
    "AdsGuidanceUnifiedEventsGuidanceName",
    "AdsGuidanceUnifiedEventsLoggingUtils",
    "AdsObjectTypes",
    "CometPlaceholder.react",
    "GeoFlexbox.react",
    "MAIBAChatAppUtils",
    "MAIBADeliveryErrorButton.react",
    "MAIBAGKUtils",
    "MAIBARenderCTAButtonsComponentFragment.graphql",
    "MAIBAUGPRecommendationLoggingUtils",
    "RelayHooks",
    "SYDGuidanceHubLoggingUtil",
    "SYDGuidanceHubUGPUtils",
    "SYDGuidanceHubV3LoggingComponentName",
    "XFBAdAccountRecommendationAdObjectLevelUtils.facebook",
    "geoMargin",
    "getJSEnumEnforce",
    "getJSEnumSafe",
    "react",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = {
        buttonContainer: { height: "xc9qbxq", $$css: !0 },
        roundedButtonOutlineOverlay: {
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          $$css: !0,
        },
        roundedButtonContainer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      m =
        e !== void 0
          ? e
          : (e = n("MAIBARenderCTAButtonsComponentFragment.graphql"));
    function p(e) {
      var t,
        n,
        a,
        l,
        u,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v = e.adAccount,
        S = e.adsDeliveryPreCreateRecommendationResultData,
        R = e.deliveryErrorRecommendation,
        L = e.deliveryInfo,
        E = e.maibaRenderCTAButtonComponent,
        k = e.plugin,
        I = e.recommendationType,
        T = e.requestId,
        D = e.useRecommendationCardTreatment,
        x = D === void 0 ? !1 : D,
        $ = r("useGeoTheme")(),
        P = $.selectBorderColor,
        N = $.selectBorderRadius,
        M = $.selectBorderWidth,
        w = o("RelayHooks").useFragment(m, E),
        A = o("SYDGuidanceHubUGPUtils").useUGPToGetCTAExtraData(
          w == null || (t = w.runtime_metadata) == null ? void 0 : t.metadata,
        ),
        F = "ads_ai",
        O =
          (n =
            w == null || (a = w.target) == null ? void 0 : a.ad_object_ids) !=
          null
            ? n
            : [],
        B =
          (l = w == null ? void 0 : w.recommendation_hash_string) != null
            ? l
            : "",
        W = w == null ? void 0 : w.recommendation_id,
        q = r("getJSEnumSafe")(
          r("AdAccountRecommendationRootCauseIdentifierLabel"),
          w == null ||
            (u = w.runtime_metadata) == null ||
            (u = u.root_cause_identifier) == null
            ? void 0
            : u.root_cause_identifier_label,
        ),
        U =
          w == null ||
          (p = w.runtime_metadata) == null ||
          (p = p.root_cause_identifier) == null ||
          (p = p.label_to_ad_object_ids) == null
            ? void 0
            : p.map(function (e) {
                return r("getJSEnumEnforce")(
                  r("AdAccountRecommendationRootCauseIdentifierLabel"),
                  e.key,
                );
              }),
        V =
          (_ =
            w == null || (f = w.target) == null || (f = f.levels) == null
              ? void 0
              : f[0]) != null
            ? _
            : "ADGROUP",
        H = o("XFBAdAccountRecommendationAdObjectLevelUtils.facebook").toJSEnum(
          V != null ? V : "",
        ),
        G = o("XFBAdAccountRecommendationAdObjectLevelUtils.facebook").toJSEnum(
          w == null || (g = w.target) == null || (g = g.levels) == null
            ? void 0
            : g[0],
        ),
        z = r("getJSEnumSafe")(
          r("AdsObjectTypes"),
          I === "delivery_error" ? H : G,
        ),
        j = function (t) {
          var e, n, a, i, l, s;
          o("AdsGuidanceUnifiedEventsLoggingUtils").logGuidanceEvent({
            adAccountID: (e = v.account_id) != null ? e : "",
            adObjectIDs: O != null ? O : [],
            adObjectLevel:
              (n = o(
                "AdsGuidanceUnifiedEventsLoggingUtils",
              ).convertAdObjectLevel(
                w == null || (a = w.target) == null || (a = a.levels) == null
                  ? void 0
                  : a[0],
              )) != null
                ? n
                : [],
            channel: o(
              "MAIBAUGPRecommendationLoggingUtils",
            ).getUGPLoggingDeliveryChannel(),
            component: "maiba_cta_button",
            event: "cta_click",
            eventCategory: "click_through",
            featureVariant: "MaibaCTAButton-" + t,
            message: JSON.stringify({
              widget: r("AdsALSurfaceMAIBAPlugin").key,
              component: "maiba_cta_button",
              button_variant: t,
              bot_request_id: T,
              recommendation_id: w == null ? void 0 : w.recommendation_id,
            }),
            recommendationSource: "ads_ai",
            recommendationHash:
              (i = w == null ? void 0 : w.recommendation_hash_string) != null
                ? i
                : "",
            recommendationType:
              (w == null ? void 0 : w.is_precreate) === !0
                ? "pre_create_guidance"
                : "mid_flight_recommendation",
            recommendationName:
              (l = r("AdsGuidanceUnifiedEventsGuidanceName").cast(I)) != null
                ? l
                : "not_applicable",
            surface: o(
              "MAIBAUGPRecommendationLoggingUtils",
            ).getUGPLoggingDeliverySurface(),
            widget: r("AdsALSurfaceMAIBAPlugin").key,
            wwwRequestID:
              (s = w == null ? void 0 : w.www_request_id) != null ? s : "",
          });
        };
      if (!o("MAIBAChatAppUtils").canRenderMAIBACTAWithRouting()) {
        var K;
        return (
          o("SYDGuidanceHubLoggingUtil").logError(
            r("SYDGuidanceHubV3LoggingComponentName").MAIBA_CTA_BUTTONS,
            "Cannot render MAIBARenderCTAButtonsComponent due to router constraints",
            "Recommendation id: " +
              ((K = w == null ? void 0 : w.recommendation_id) != null
                ? K
                : "") +
              ". Surface: " +
              o(
                "MAIBAUGPRecommendationLoggingUtils",
              ).getUGPLoggingDeliverySurface() +
              ",",
          ),
          null
        );
      }
      var Q = I === "delivery_error";
      if (Q && L)
        return c.jsx(r("MAIBADeliveryErrorButton.react"), {
          adAccount: v,
          adObjectIds: O,
          adObjectLevel: z,
          deliveryErrorRecommendation: R,
          deliveryInfo: L,
        });
      if ((w == null ? void 0 : w.is_precreate) === !0 && S !== null) {
        var X,
          Y,
          J = k.PrimaryResolutionButtonPCR,
          Z = {
            ad_object_ids:
              S == null || (X = S.target) == null ? void 0 : X.ad_object_ids,
            draft_stage_id: S == null ? void 0 : S.draft_stage_id,
            guidance_version: S == null ? void 0 : S.guidance_version,
            recommendation_hash_string:
              S == null ? void 0 : S.recommendation_hash_string,
            recommendation_id: S == null ? void 0 : S.recommendation_id,
            www_request_id: S == null ? void 0 : S.www_request_id,
            runtime_metadata:
              S == null || (Y = S.runtime_metadata) == null
                ? void 0
                : Y.metadata,
            recommendation_type: I,
          },
          ee =
            J != null
              ? c.jsx(J, {
                  adAccountID: v.account_id,
                  maibaBotResponseId: T,
                  recommendation: Z,
                  recommendationSource: F,
                })
              : null;
        return c.jsx(r("GeoFlexbox.react"), {
          justifyContent: "start",
          xstyle: [
            !o("MAIBAGKUtils").isMAIBADesignFixathonEnabled() &&
              !x &&
              r("geoMargin").start4,
            !x && r("geoMargin").vert8,
          ],
          children: c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (s || (s = r("stylex"))).props(
                d.buttonContainer,
                x && d.roundedButtonContainer,
                x && N({ context: "rounded" }),
              ),
              {
                "data-testid": void 0,
                children: c.jsx(r("CometPlaceholder.react"), {
                  fallback: null,
                  name: i.id,
                  children: ee,
                }),
              },
            ),
          ),
        });
      }
      var te = k.PrimaryResolutionButton,
        ne = k.SecondaryResolutionButton,
        re = c.jsx(te, {
          account: v,
          adObjectIDs: O,
          adObjectLevel: z != null ? z : void 0,
          clickLogger: function () {
            return j("PrimaryResolutionButton");
          },
          grow: "auto",
          recommendation: null,
          recommendationHash: B,
          recommendationId: W,
          recommendationSource: F,
          recommendationType: I,
          recommendationUGPExtraData: A,
          resolutionButtonVariant: "primary",
          rootCauseIdentifierLabel: q,
          rootCauseIdentifierLabels: U,
          ugpRecKey: w,
          worstPerformingCampaignIds:
            (h =
              w == null || (y = w.runtime_metadata) == null
                ? void 0
                : y.worst_performing_ad_object_ids) != null
              ? h
              : [],
          wwwRequestID: w == null ? void 0 : w.www_request_id,
        }),
        oe =
          ne != null
            ? c.jsx(ne, {
                account: v,
                adObjectIDs: O,
                adObjectLevel: z != null ? z : void 0,
                clickLogger: function () {
                  return j("SecondaryResolutionButton");
                },
                grow: "auto",
                recommendation: null,
                recommendationHash: B,
                recommendationId: W,
                recommendationSource: F,
                recommendationType: I,
                recommendationUGPExtraData: A,
                rootCauseIdentifierLabel: q,
                rootCauseIdentifierLabels: U,
                ugpRecKey: w,
                worstPerformingCampaignIds:
                  (C =
                    w == null || (b = w.runtime_metadata) == null
                      ? void 0
                      : b.worst_performing_ad_object_ids) != null
                    ? C
                    : [],
                wwwRequestID: w == null ? void 0 : w.www_request_id,
              })
            : null;
      return oe != null
        ? c.jsxs(r("GeoFlexbox.react"), {
            gap: 8,
            justifyContent: "start",
            xstyle: [
              !o("MAIBAGKUtils").isMAIBADesignFixathonEnabled() &&
                !x &&
                r("geoMargin").start4,
              r("geoMargin").end8,
              !x && r("geoMargin").vert8,
            ],
            children: [
              c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    d.buttonContainer,
                    x && d.roundedButtonContainer,
                    x && N({ context: "rounded" }),
                  ),
                  {
                    "data-testid": void 0,
                    children: c.jsx(r("CometPlaceholder.react"), {
                      fallback: null,
                      name: i.id,
                      children: re,
                    }),
                  },
                ),
              ),
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props(
                    d.buttonContainer,
                    x && d.roundedButtonContainer,
                    x && N({ context: "rounded" }),
                  ),
                  {
                    "data-testid": void 0,
                    children: [
                      c.jsx(r("CometPlaceholder.react"), {
                        fallback: null,
                        name: i.id,
                        children: oe,
                      }),
                      x
                        ? c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (s || (s = r("stylex"))).props(
                                d.roundedButtonOutlineOverlay,
                                P({ color: "element" }),
                                N({ context: "rounded" }),
                                M({ context: "control" }),
                              ),
                            ),
                          )
                        : null,
                    ],
                  },
                ),
              ),
            ],
          })
        : c.jsx(r("GeoFlexbox.react"), {
            justifyContent: "start",
            xstyle: [
              !o("MAIBAGKUtils").isMAIBADesignFixathonEnabled() &&
                !x &&
                r("geoMargin").start4,
              !x && r("geoMargin").vert8,
            ],
            children: c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (s || (s = r("stylex"))).props(
                  d.buttonContainer,
                  x && d.roundedButtonContainer,
                  x && N({ context: "rounded" }),
                ),
                {
                  "data-testid": void 0,
                  children: c.jsx(r("CometPlaceholder.react"), {
                    fallback: null,
                    name: i.id,
                    children: re,
                  }),
                },
              ),
            ),
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
