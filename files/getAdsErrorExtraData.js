__d(
  "getAdsErrorExtraData",
  [
    "errorCode",
    "AdsAIUtils",
    "AdsAPIAdgroupPaths",
    "AdsDraftForceDraftSyncDataAction",
    "AdsErrorCodeToExtraDataMap",
    "AdsErrorsCTAStrings",
    "AdsPageStore",
    "AdsStackedErrorsCardUtils",
    "AllowErrorCodesMAIBASitevarConfig.experimental",
    "BusinessIntegrityIGUserFeatureLimitedUtils",
    "JSResource",
    "MessagePageCTAUtils",
    "UsabilityFlow63Utils",
    "adsStorePromiseAsyncGetForSyncStore",
    "gkx",
    "immutable",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("immutable").Map();
    function d(e, t) {
      c = c.merge(
        e.map(function (e) {
          return { errorDetails: e, condition: t };
        }),
      );
    }
    d(
      r("immutable").Map([
        [
          1815199,
          { path: r("AdsAPIAdgroupPaths").CREATIVE.INSTAGRAM_ACTOR_ID },
        ],
        [
          1341012,
          { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PAGE_ID },
        ],
        [
          3858749,
          { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PAGE_ID },
        ],
        [
          1885499,
          { path: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PAGE_ID },
        ],
      ]),
      function () {
        return !0;
      },
    );
    var m = function (t) {
      var e,
        n,
        a,
        l = (e = t.pageIDs) == null ? void 0 : e[0],
        s = (n = t.adgroup) == null ? void 0 : n.id,
        u = (a = t.campaignGroup) == null ? void 0 : a.id;
      l != null &&
        r("adsStorePromiseAsyncGetForSyncStore")(
          r("AdsPageStore"),
          function () {
            return r("AdsPageStore").get(l.toString());
          },
        )
          .then(function (e) {
            if (e != null) {
              var t = e.access_token;
              if (t != null)
                return o("MessagePageCTAUtils").enableMessaging(
                  l.toString(),
                  t,
                );
            }
          })
          .then(function () {
            var e = [s, u].filter(Boolean);
            e.length > 0 &&
              r("AdsDraftForceDraftSyncDataAction").dispatch(
                { ids: e },
                {
                  line: "108",
                  module: "getAdsErrorExtraData.js",
                  moduleID: i.id,
                },
              );
          })
          .catch(function () {});
    };
    (d(
      r("immutable").Map([
        [
          1885187,
          {
            cta: r("AdsErrorsCTAStrings").ENABLE_PAGE_MESSAGING_CTA,
            customCTA: m,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
        [
          1885186,
          {
            cta: r("AdsErrorsCTAStrings").ENABLE_PAGE_MESSAGING_CTA,
            customCTA: m,
            customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
              .ONE_CLICK,
          },
        ],
      ]),
      function () {
        return r("gkx")("3647");
      },
    ),
      d(
        o("BusinessIntegrityIGUserFeatureLimitedUtils")
          .AdsErrorCodeToIGFeatureLimited,
        function () {
          return r("gkx")("25352");
        },
      ),
      d(
        r("immutable").Map([
          [
            2446458,
            {
              cta: r("AdsErrorsCTAStrings").ADD_URL_CTA,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OMNICHANNEL_LINK_SPEC.WEB
                .URL,
            },
          ],
          [
            2446461,
            {
              cta: r("AdsErrorsCTAStrings").ADD_URL_CTA,
              path: r("AdsAPIAdgroupPaths").CREATIVE.OMNICHANNEL_LINK_SPEC.WEB
                .URL,
            },
          ],
        ]),
        o("UsabilityFlow63Utils").is3COWebURLErrorImprovementsEnabled,
      ));
    function p(e) {
      var t,
        n,
        a,
        i =
          (t = r("AdsErrorCodeToExtraDataMap").get(e)) != null
            ? t
            : (n = c.get(e)) != null && n.condition()
              ? (a = c.get(e)) == null
                ? void 0
                : a.errorDetails
              : null,
        l =
          (i == null ? void 0 : i.secondaryCTA) == null &&
          typeof e == "number" &&
          r(
            "AllowErrorCodesMAIBASitevarConfig.experimental",
          ).error_codes.includes(e) &&
          o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
            "getAdsErrorExtraData",
          ) &&
          r("gkx")("19379");
      return l
        ? babelHelpers.extends({}, i != null ? i : {}, {
            secondaryCTA: r("AdsErrorsCTAStrings").GET_HELP,
            secondaryCTARenderer: function (t) {
              var e = t.accountID,
                n = t.adgroup,
                o = t.adObjectLevel,
                a = t.campaignGroup,
                i = t.ctaVariant,
                l = t.error,
                s = t.inReviewMode,
                c = t.onBeforeActivation,
                d = t.pageIDs,
                m = r("lazyLoadComponent")(
                  r("JSResource")(
                    "AdsHelpTrayAdvertiserAIGetHelpCTA.react",
                  ).__setRef("getAdsErrorExtraData"),
                );
              return u.jsx(m, {
                accountID: e,
                adObjectLevel: o,
                adgroup: n,
                campaignGroup: a,
                ctaVariant: i,
                error: l,
                inReviewMode: s,
                onBeforeActivation: c,
                pageIDs: d,
              });
            },
          })
        : i;
    }
    ((l.createConditionalMapping = d), (l.getAdsErrorExtraData = p));
  },
  98,
);
