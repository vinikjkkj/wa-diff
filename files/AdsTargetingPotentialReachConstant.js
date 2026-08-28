__d(
  "AdsTargetingPotentialReachConstant",
  [
    "fbt",
    "$InternalEnum",
    "AHGUtils",
    "AdsHelpTrayUIActions",
    "AdsUniqueMetricsID",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.jsx(r("GeoLink.react"), {
        onClick: function () {
          return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
            o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
          );
        },
        children: s._(/*BTDS*/ "people"),
      }),
      d = { message: s._(/*BTDS*/ "Accounts Center accounts") },
      m = { message: s._(/*BTDS*/ "Meta Accounts") },
      p = u.jsx(r("GeoLink.react"), {
        onClick: function () {
          return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
            o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
          );
        },
        children: s._(/*BTDS*/ "Accounts Center accounts"),
      }),
      _ = u.jsx(r("GeoLink.react"), {
        onClick: function () {
          return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
            o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
          );
        },
        children: s._(/*BTDS*/ "Meta Accounts"),
      }),
      f = function () {
        return u.jsx(r("GeoLink.react"), {
          display: "inline",
          href: o("AHGUtils").getHelpCenterURI(
            o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
          ),
          target: "_blank",
          children: d.message,
        });
      },
      g = function () {
        return u.jsx(r("GeoLink.react"), {
          display: "inline",
          href: o("AHGUtils").getHelpCenterURI(
            o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
          ),
          target: "_blank",
          children: m.message,
        });
      },
      h = s._(
        /*BTDS*/ "Estimated audience size is an estimate of how many {Accounts Center accounts} may meet your targeting criteria. It is based on factors such as targeting selections, ad placements and how many Accounts Center accounts were shown ads on Meta apps and services in the past 30 days.",
        [s._param("Accounts Center accounts", p)],
      ),
      y = s._(
        /*BTDS*/ "Estimated audience size is an estimate of how many {Meta Accounts} may meet your targeting criteria. It is based on factors such as targeting selections, ad placements and how many Meta Accounts were shown ads on Meta apps and services in the past 30 days.",
        [s._param("Meta Accounts", _)],
      ),
      C = s._(
        /*BTDS*/ "Estimated audience size is an estimate of the size of the audience that's eligible to see your ad. It's based on your targeting criteria, ad placements and how many {people} were shown ads on Meta apps and services in the past 30 days.",
        [s._param("people", c)],
      ),
      b = s._(
        /*BTDS*/ "This is not an estimate of how many people will see your ad and is not designed to match population or census data.",
      ),
      v = s._(
        /*BTDS*/ "This estimate is affected by the ad placements you selected:",
      ),
      S = s._(/*BTDS*/ "Audience definition"),
      R = s._(/*BTDS*/ "Estimated audience size"),
      L = s._(/*BTDS*/ "Potential audience size"),
      E = s._(/*BTDS*/ "Potential reach"),
      k = s._(/*BTDS*/ "Estimated audience size:"),
      I = s._(
        /*BTDS*/ "This is an estimate of the size of the audience that could see your ad. Campaigns with targeting criteria and placements similar to those you selected have reached audiences of this size, although their budgets may have been different from yours. This number is not a prediction of how many {=m2} your ad will reach, and it may change over time.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      T = s._(
        /*BTDS*/ "Estimates are based on the placements and targeting criteria you select and include factors like Facebook user behaviors, user demographics and location data. They're designed to estimate how many {=m2} in a given area could see an ad a business might run. They're not designed to match population or census estimates. Numbers may vary due to performance reasons.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(r("GeoLink.react"), {
              onClick: function () {
                return o("AdsHelpTrayUIActions").pushCMSIDToHistory(
                  o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                );
              },
              children: s._(/*BTDS*/ "people"),
            }),
          ),
        ],
      ),
      D = s._(/*BTDS*/ "How this number is estimated"),
      x = n("$InternalEnum").Mirrored(["Overview", "Details"]),
      $ = [
        { label: s._(/*BTDS*/ "Overview"), value: x.Overview },
        { label: s._(/*BTDS*/ "Details"), value: x.Details },
      ],
      P = s._(/*BTDS*/ "Unavailable"),
      N = s._(
        /*BTDS*/ "Estimates may vary significantly over time based on your targeting selections and available data.",
      ),
      M = s._(
        /*BTDS*/ "The size of the audience for your selected interests is now shown as a range. These numbers may change over time.",
      ),
      w = s._(
        /*BTDS*/ "Estimates may vary significantly over time based on your targeting selections and available data and do not reflect Advantage+ audience options.",
      ),
      A = s._(
        /*BTDS*/ "Your custom audience is too small which may affect the delivery of your ad.",
      ),
      F = s._(
        /*BTDS*/ "Your custom audience is too small which may affect the delivery of your marketing messages.",
      ),
      O = s._(/*BTDS*/ "Custom audience unavailable"),
      B = s._(
        /*BTDS*/ "This customer list is unavailable for ads about housing, employment and financial products and services.",
      ),
      W = s._(
        /*BTDS*/ "The audience definition scale is based on the audience targeting selections you are using for this ad set. When an audience is too narrow, ad delivery may be affected.",
      ),
      q = s._(/*BTDS*/ "About estimated audience size"),
      U = s._(
        /*BTDS*/ "Your estimated audience size is the number of {Accounts Center accounts} that could match your chosen audience and ad placement settings. It also takes into account how many Accounts Center accounts were shown ads on Meta technologies in the past 30 days.",
        [s._param("Accounts Center accounts", p)],
      ),
      V = s._(
        /*BTDS*/ "It's not a prediction of how many people will see your ads or a reflection of population or census data.",
      ),
      H = s._(/*BTDS*/ "About estimated audience size"),
      G = s._(/*BTDS*/ "Your estimated audience size is unavailable"),
      z = s._(
        /*BTDS*/ "Your estimated audience size is currently unavailable because one or more of your selected audiences is being updated.",
      ),
      j = s._(
        /*BTDS*/ "Potential reach estimates may not be available depending on your audience configuration.",
      ),
      K = s._(
        /*BTDS*/ "Reach new people who are similar to audiences you already care about. You can create a lookalike audience based on people who like your Page, conversion pixels or any of your existing custom audiences.",
      );
    ((l.LINK_TO_UNIQUE_METRICS_ARTICLE = c),
      (l.ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE = p),
      (l.META_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE = _),
      (l.ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE_NEW_TAB = f),
      (l.META_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE_NEW_TAB = g),
      (l.ESTIMATED_SIZE_EXPLANATION = h),
      (l.ESTIMATED_SIZE_EXPLANATION_META_ACCOUNTS = y),
      (l.ESTIMATED_SIZE_EXPLANATION_RANGES_MITIGATION = C),
      (l.ESTIMATED_SIZE_DISCLAIMER = b),
      (l.ESTIMATED_SIZE_PLACEMENT_TOOLTIP = v),
      (l.POTENTIAL_REACH_TITLE_IN_EDIT_FLOW = S),
      (l.POTENTIAL_REACH_TITLE_IN_EDIT_FLOW_REDESIGN = R),
      (l.MAX_LIFETIME_REACH_TITLE = L),
      (l.ESTIMATED_AUDIENCE_SIZE_TEXT = E),
      (l.ESTIMATED_AUDIENCE_SIZE_TITLE = k),
      (l.MAX_LIFETIME_REACH_CONTENT = I),
      (l.DEFAULT_CONTENT = T),
      (l.TITLE = D),
      (l.Tabs_Values = x),
      (l.TABS = $),
      (l.AUDIENCE_SIZE_UNAVAILABLE = P),
      (l.POTENTIAL_REACH_ESTIMATE_VARIATION_WARNING_BODY = N),
      (l.ESTIMATED_AUDIENCE_SIZE_NOTICE_BODY = M),
      (l.POTENTIAL_REACH_ESTIMATE_ADVANTAGE_VARIATION_WARNING_BODY = w),
      (l.ESTIMATED_AUDIENCE_SIZE_WARN_BODY = A),
      (l.ESTIMATED_AUDIENCE_SIZE_WARN_BODY_MARKETING_MESSAGES = F),
      (l.SAC_CAMPAIGN_INELIGIBILITY_INFO_HEADER = O),
      (l.SAC_CAMPAIGN_INELIGIBILITY_INFO_BODY = B),
      (l.AUDIENCE_DEFINITION_TOOLTIP_BODY_EAS_BETA = W),
      (l.EAS_REDESIGN_TOOLTIP_HEADING = q),
      (l.EAS_REDESIGN_TOOLTIP_BODY = U),
      (l.EAS_REDESIGN_TOOLTIP_DISCLAIMER = V),
      (l.EAS_REDESIGN_TOOLTIP_LINK_TEXT = H),
      (l.EAS_REDESIGN_UNAVAILABLE_TOOLTIP_HEADING = G),
      (l.EAS_REDESIGN_UNAVAILABLE_TOOLTIP_BODY = z),
      (l.EAS_REDESIGN_UNAVAILABLE_RATING_TOOLTIP_BODY = j),
      (l.AUDIENCE_DESCRIPTION = K));
  },
  226,
);
