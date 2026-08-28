__d(
  "AdsManagerOpportunityScorePillConstants",
  [
    "fbt",
    "AdsGuidanceOpportunityScoreLearnMoreLink.react",
    "GeoFlexbox.react",
    "SVPerformanceScoreConfig",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return (
        e === !0 &&
        t != null &&
        r("SVPerformanceScoreConfig").new_campaign_creation.includes(t)
      );
    }
    var d = function (t, n, o, a) {
      var e = c(n, t),
        i = function () {
          return a === "CAMPAIGN"
            ? s._(
                /*BTDS*/ "The total points for all recommendations in this campaign. Points are personalized based on how valuable a recommendation may be for your ad account. Points are based on factors like your campaign objective, business profile, campaign characteristics and budget allocation.",
              )
            : a === "PCR"
              ? s._(
                  /*BTDS*/ "The total points for all account or campaign setup recommendations. Points are personalized based on how valuable a recommendation may be for your ad account. Points are based on factors like your campaign objective, business profile, campaign characteristics and budget allocation.",
                )
              : a === "SAVED"
                ? s._(
                    /*BTDS*/ "The total points for all saved recommendations. Points are personalized based on how valuable a recommendation may be for your ad account. Points are based on factors like your campaign objective, business profile, campaign characteristics and budget allocation.",
                  )
                : s._(
                    /*BTDS*/ "Points are personalized based on how valuable a recommendation may be for your ad account. Points are based on factors like your campaign objective, business profile, campaign characteristics and budget allocation.",
                  );
        };
      return u.jsxs(r("GeoFlexbox.react"), {
        direction: "column",
        gap: 8,
        children: [
          e && o != null
            ? u.jsx("div", {
                children: s._(
                  /*BTDS*/ '_j{"*":"This recommendation can help you earn {number} points after your campaign is active.","_1":"This recommendation can help you earn 1 point after your campaign is active."}',
                  [s._plural(o, "number")],
                ),
              })
            : null,
          u.jsx("div", { children: i() }),
          u.jsx("div", {
            children: s._(
              /*BTDS*/ "Potential outcomes are based on our experimentation and may vary across advertisers.",
            ),
          }),
          u.jsx(r("AdsGuidanceOpportunityScoreLearnMoreLink.react"), {
            isError: !0,
          }),
        ],
      });
    };
    l.getOSScorePillHoverFbtV2 = d;
  },
  226,
);
