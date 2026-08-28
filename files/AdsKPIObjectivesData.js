__d(
  "AdsKPIObjectivesData",
  [
    "fbt",
    "ix",
    "AHGHelpTrayLink2.react",
    "AdsAPIObjectives",
    "AdsConvergenceObjectiveTooltipsStrings",
    "AdsODAXObjectiveStrings",
    "AdsPromotedObjectTypes",
    "AdsTargetingPotentialReachConstant",
    "AdsUniqueMetricsHelpID",
    "AdsUniqueMetricsID",
    "GeoLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = c || (c = o("react")),
      m = "202557046540920",
      p = "1629235777115312",
      _ = "686575801517987",
      f = "666398006849003",
      g = "175683976191028",
      h = "301780226847564",
      y = {
        name: s._(/*BTDS*/ "Link clicks"),
        lowercaseName: s._(/*BTDS*/ "link clicks"),
        conversionUnit: s._(/*BTDS*/ "link click"),
        conversionUnits: s._(/*BTDS*/ "link clicks"),
        englishName: "Clicks to Website",
        shortName: s._(/*BTDS*/ "Website clicks"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_TRAFFIC_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Increase the number of visits to a destination on or off Meta technologies.",
          );
        },
        iconReskinV1: u("22397"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to encourage {=m2} to visit your website.",
            [
              s._implicitParam(
                "=m2",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the link clicks objective to send people to a destination on or off Meta technologies.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a website"),
      },
      C = babelHelpers.extends({}, y, {
        name: s._(/*BTDS*/ "Traffic"),
        lowercaseName: s._(/*BTDS*/ "traffic"),
        englishName: "Traffic",
        shortName: s._(/*BTDS*/ "Traffic"),
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Send more {Meta Accounts} to a destination on or off Facebook.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Send more {Meta Accounts} to a destination on or off Facebook.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Send more {Meta Accounts} to a destination on or off Facebook.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Send more {Meta Accounts} to a destination on or off Facebook.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
      }),
      b = function (t) {
        var e = t.AdsLearnMore;
        return s._(
          /*BTDS*/ "Send more people to a destination such as a website, app or Messenger conversation. {Learn more}",
          [s._param("Learn more", d.jsx(e, { cmsID: h }))],
        );
      },
      v = function () {
        return s._(
          /*BTDS*/ "Get more {=m1} to send messages to your business on Messenger and Instagram Direct.",
          [
            s._implicitParam(
              "=m1",
              d.jsx(r("GeoLink.react"), {
                href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                target: "_blank",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        );
      },
      S = babelHelpers.extends({}, C, {
        descReskinV1: b,
        selectorTooltip: b,
        selectorTooltipReskinV1: b,
        selectorTooltipForShortName: b,
      }),
      R = {
        name: s._(/*BTDS*/ "Conversions"),
        lowercaseName: s._(/*BTDS*/ "conversions"),
        conversionUnit: s._(/*BTDS*/ "conversion"),
        conversionUnits: s._(/*BTDS*/ "conversions"),
        englishName: "Conversions",
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_CONVERSIONS_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get {=m1} to take valuable actions on your website, app or in Messenger, such as adding payment info or making a purchase. Use the Meta Pixel or app events to track and measure conversions.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        iconReskinV1: u("22398"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that get more activity on your website or app.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the conversions objective to increase engagement on your website or in your app.",
          );
        },
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Drive valuable actions on your website, app or in Messenger.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a website"),
        typeaheadSubtitleForPromotedObjectType:
          ((e = {}),
          (e[r("AdsPromotedObjectTypes").MOBILE_APP] = s._(
            /*BTDS*/ "Enter a URL for an app",
          )),
          e),
      },
      L = babelHelpers.extends({}, R, {
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Drive valuable actions on your website, on your app or offline.",
          );
        },
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get {Meta Accounts} to take valuable actions on your website, app or offline, such as making a purchase. Use the Meta Pixel, app events or offline events to track and measure conversions.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
      }),
      E = {
        name: s._(/*BTDS*/ "Engagement"),
        lowercaseName: s._(/*BTDS*/ "engagement"),
        englishName: "Engagement",
        descConvergence: function () {
          return o("AdsConvergenceObjectiveTooltipsStrings")
            .CONVERGENCE_ENGAGEMENT_TOOLTIP;
        },
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more {=m1} to see and engage with your post or Page. Engagement can include comments, shares, likes, event responses and offer claims.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        iconReskinV1: u("22391"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Get more post engagements, Page likes, event responses or offer claims.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more post engagements, Page likes, event responses or offer claims.",
          );
        },
        selectorTooltipForShortName: function (t) {
          var e = t.AdsLearnMore;
          return s._(
            /*BTDS*/ "Get more post engagements, Page likes, event responses or offer claims. {Learn more}",
            [s._param("Learn more", d.jsx(e, { cmsID: f }))],
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for an app"),
      },
      k = babelHelpers.extends({}, E, { iconReskinV1: u("377143") }),
      I = {
        name: s._(/*BTDS*/ "Page post engagement"),
        lowercaseName: s._(/*BTDS*/ "page post engagement"),
        conversionUnit: s._(/*BTDS*/ "engagement"),
        conversionUnits: s._(/*BTDS*/ "post engagement"),
        englishName: "Page Post Engagement",
        shortName: s._(/*BTDS*/ "Post engagement"),
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more people to see and engage with your Page posts.",
          );
        },
        iconReskinV1: u("22391"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that boost your posts and increase likes, comments, shares, video plays and photo views.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the Page post engagement objective to boost your post.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a Page or Page post"),
      },
      T = babelHelpers.extends({}, I, {
        name: s._(/*BTDS*/ "Post engagement"),
        lowercaseName: s._(/*BTDS*/ "post engagement"),
        englishName: "Post engagement",
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more {Meta Accounts} to see and engage with your posts.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Boost your Page posts to get more engagement with your content.",
          );
        },
      }),
      D = {
        name: s._(/*BTDS*/ "Reach"),
        lowercaseName: s._(/*BTDS*/ "reach"),
        englishName: "Reach",
        shortName: s._(/*BTDS*/ "Reach"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_REACH_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Show your ad to the maximum number of {Meta Accounts}.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        iconReskinV1: u("22393"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create adverts that reach many {Meta Accounts}.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the reach objective to show your ad to the maximum number of {Meta Accounts}.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipForShortName: function (t) {
          var e = t.AdsLearnMore;
          return s._(
            /*BTDS*/ "Show your ad to the maximum number of {Meta Accounts}. {Learn more}",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
              s._param("Learn more", d.jsx(e, { cmsID: _ })),
            ],
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a Page"),
      },
      x = {
        name: s._(/*BTDS*/ "Page likes"),
        lowercaseName: s._(/*BTDS*/ "page likes"),
        englishName: "Page Likes",
        descReskinV1: function () {
          return s._(/*BTDS*/ "Connect more people with your Page.");
        },
        iconReskinV1: u("22390"),
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Create ads to build your audience on Facebook.");
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the Page likes objective to promote your Facebook Page.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a Page"),
      },
      $ = {
        name: s._(/*BTDS*/ "Profile followers"),
        lowercaseName: s._(/*BTDS*/ "profile followers"),
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the profile followers objective to promote your professional profile.",
          );
        },
      },
      P = {
        name: s._(/*BTDS*/ "app installs"),
        lowercaseName: s._(/*BTDS*/ "app promotion"),
        englishName: "App Installs",
        conversionUnit: s._(/*BTDS*/ "install"),
        conversionUnits: s._(/*BTDS*/ "app installs"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_APP_INSTALLS_TOOLTIP,
        descReskinV1: function (t) {
          var e = t.AdsLearnMore;
          return s._(
            /*BTDS*/ "Send people to the app store where they can download your app. {Learn more}",
            [s._param("Learn more", d.jsx(e, { cmsID: m }))],
          );
        },
        iconReskinV1: u("22384"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to encourage people to install your app.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app installs objective to get {=m2} to install your app.",
            [
              s._implicitParam(
                "=m2",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        selectorTooltipForShortName: function () {
          return s._(/*BTDS*/ "Get more {Meta Accounts} to install your app.", [
            s._param(
              "Meta Accounts",
              o("AdsTargetingPotentialReachConstant")
                .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
            ),
          ]);
        },
        typeaheadSubtitle: s._(
          /*BTDS*/ "Enter a URL for a mobile or desktop app",
        ),
      },
      N = {
        name: s._(/*BTDS*/ "Desktop app installs"),
        lowercaseName: s._(/*BTDS*/ "desktop app installs"),
        englishName: "Desktop App Installs",
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to encourage people to install your desktop app.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app installs objective to get {=m1} to install your app.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a desktop app"),
      },
      M = {
        name: s._(/*BTDS*/ "Mobile app installs"),
        lowercaseName: s._(/*BTDS*/ "mobile app installs"),
        englishName: "Mobile App Installs",
        conversionUnit: s._(/*BTDS*/ "install"),
        conversionUnits: s._(/*BTDS*/ "app installs"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to encourage {=m1} to install your mobile app.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app installs objective to get {=m1} to install your app.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        selectorTooltipForShortName: function () {
          return s._(/*BTDS*/ "Get more {Meta Accounts} to install your app.", [
            s._param(
              "Meta Accounts",
              o("AdsTargetingPotentialReachConstant")
                .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
            ),
          ]);
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a mobile app"),
      },
      w = {
        name: s._(/*BTDS*/ "App engagement"),
        lowercaseName: s._(/*BTDS*/ "app engagement"),
        englishName: "App Engagement",
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more people to use your Facebook or mobile app.",
          );
        },
        iconReskinV1: u("22383"),
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Create ads that get more activity on your app.");
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app engagement objective to increase engagement in your app.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for an app"),
      },
      A = {
        name: s._(/*BTDS*/ "Desktop app engagement"),
        lowercaseName: s._(/*BTDS*/ "desktop app engagement"),
        englishName: "Desktop App Engagement",
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that get more activity on your desktop app.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app engagement objective to increase engagement in your app.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a desktop app"),
      },
      F = {
        name: s._(/*BTDS*/ "In-app engagement"),
        lowercaseName: s._(/*BTDS*/ "in-app engagement"),
        englishName: "Mobile App Engagement",
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that get more activity on your mobile app.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the app engagement objective to increase engagement in your app.",
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a mobile app"),
      },
      O = {
        name: s._(/*BTDS*/ "Offer claims"),
        lowercaseName: s._(/*BTDS*/ "offer claims"),
        englishName: "Offer Claims",
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Promote timely discounts or other deals for people to claim in your store.",
          );
        },
        iconReskinV1: u("22389"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to promote offers you created. You'll need to use an offer you've created on Meta or create a new one right here.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the offer claims objective to promote your offer.",
          );
        },
        typeaheadSubtitle: s._(
          /*BTDS*/ "Enter a URL for a Page or offer on Facebook",
        ),
      },
      B = {
        name: s._(/*BTDS*/ "Event responses"),
        lowercaseName: s._(/*BTDS*/ "event responses"),
        englishName: "Event Responses",
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Promote your Facebook event to increase your attendance.",
          );
        },
        iconReskinV1: u("22386"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to increase the attendance of your Facebook event.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use this objective to get more {=m1} to see and respond to your event.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Choose an event or enter the URL"),
      },
      W = {
        name: s._(/*BTDS*/ "Store traffic"),
        lowercaseName: s._(/*BTDS*/ "store traffic"),
        englishName: "Store Traffic",
        shortName: s._(/*BTDS*/ "Store traffic"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_STORE_TRAFFIC_TOOLTIP,
        descReskinV1: function (t) {
          var e = t.AdsLearnMore;
          return s._(
            /*BTDS*/ "If you have multiple stores, restaurants or other physical business locations, encourage visits and sales by showing ads to people who are nearby. {Learn more}",
            [s._param("Learn more", d.jsx(e, { cmsID: g }))],
          );
        },
        iconReskinV1: u("22394"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Use the store traffic objective to promote multiple business locations to people nearby.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the store traffic objective to promote multiple business locations to people nearby.",
          );
        },
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Drive visits to your physical stores by showing ads to people who are nearby.",
          );
        },
        typeaheadSubtitle: "",
      },
      q = {
        name: s._(/*BTDS*/ "Video views"),
        lowercaseName: s._(/*BTDS*/ "video views"),
        englishName: "Video Views",
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_VIDEO_VIEWS_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Promote videos that show behind-the-scenes footage, product launches or customer stories to raise awareness about your brand.",
          );
        },
        iconReskinV1: u("22395"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that get more {=m1} to view a video.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Use the video views objective to get people to watch your video.",
          );
        },
        selectorTooltipForShortName: function () {
          return s._(/*BTDS*/ "Get more people to view your video content.");
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a Page"),
      },
      U = {
        name: s._(/*BTDS*/ "Product catalog sales"),
        lowercaseName: s._(/*BTDS*/ "product catalog sales"),
        englishName: "Product Catalog Sales",
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Create ads that automatically show products from your catalog based on your target audience",
          );
        },
        iconReskinV1: u("22392"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that automatically show products from your catalog based on your target audience.",
          );
        },
      },
      V = babelHelpers.extends({}, U, {
        name: s._(/*BTDS*/ "Catalog sales"),
        lowercaseName: s._(/*BTDS*/ "catalog sales"),
        englishName: "Catalog Sales",
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_CATALOG_SALES_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Create ads that automatically show products from your catalog based on your target audience.",
          );
        },
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads that automatically show products from your catalog based on your target audience.",
          );
        },
      }),
      H = {
        name: s._(/*BTDS*/ "Lead generation"),
        lowercaseName: s._(/*BTDS*/ "lead generation"),
        conversionUnit: s._(/*BTDS*/ "lead"),
        conversionUnits: s._(/*BTDS*/ "leads"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_LEAD_GENERATION_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Collect lead information from {=m1} interested in your business.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
        englishName: "Lead Generation",
        iconReskinV1: u("22387"),
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Drive more sales leads, such as email addresses, from {Meta Accounts} interested in your brand or business.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipForShortName: function () {
          return s._(
            /*BTDS*/ "Drive more sales leads, such as email addresses, from {Meta Accounts} interested in your brand or business.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Collect lead information from {=m1} interested in your business.",
            [
              s._implicitParam(
                "=m1",
                d.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          );
        },
      },
      G = {
        name: s._(/*BTDS*/ "Brand awareness"),
        lowercaseName: s._(/*BTDS*/ "brand awareness"),
        englishName: "Brand Awareness",
        iconReskinV1: u("22385"),
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_BRAND_AWARENESS_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Reach people more likely to pay attention to your ads and increase awareness for your brand.",
          );
        },
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Create ads to reach people more likely to pay attention to them and increase awareness for your brand.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Reach people more likely to pay attention to your ads and increase awareness for your brand.",
          );
        },
        selectorTooltipForShortName: function (t) {
          var e = t.AdsLearnMore;
          return s._(
            /*BTDS*/ "Increase awareness for your brand by reaching people who are more likely to be interested in it. {Learn more}",
            [s._param("Learn more", d.jsx(e, { cmsID: p }))],
          );
        },
        typeaheadSubtitle: s._(/*BTDS*/ "Enter a URL for a Page"),
      },
      z = {
        name: s._(/*BTDS*/ "Messages"),
        lowercaseName: s._(/*BTDS*/ "messages"),
        englishName: "Messages",
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_MESSAGES_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more {Meta Accounts} to have conversations with your business in Messenger to complete purchases, answer questions or offer support.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        iconReskinV1: u("377142"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Get more {Meta Accounts} to send messages to your business in Messenger.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more {Meta Accounts} to send messages to your business in Messenger.",
            [
              s._param(
                "Meta Accounts",
                o("AdsTargetingPotentialReachConstant")
                  .ACCOUNT_CENTER_ACCOUNTS_LINK_TO_UNIQUE_METRICS_ARTICLE,
              ),
            ],
          );
        },
      },
      j = babelHelpers.extends({}, z, {
        descConvergence: o("AdsConvergenceObjectiveTooltipsStrings")
          .CONVERGENCE_MESSAGES_TOOLTIP,
        descReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more people to have conversations with your business in Messenger, WhatsApp or Instagram Direct to complete purchases, answer questions or offer support.",
          );
        },
        iconReskinV1: u("377142"),
        selectorTooltip: function () {
          return s._(
            /*BTDS*/ "Get more people to send messages to your business in Messenger, WhatsApp or Instagram Direct.",
          );
        },
        selectorTooltipReskinV1: function () {
          return s._(
            /*BTDS*/ "Get more people to send messages to your business in Messenger, WhatsApp or Instagram Direct.",
          );
        },
      }),
      K = babelHelpers.extends({}, z, {
        descConvergence: v,
        descReskinV1: v,
        iconReskinV1: u("377142"),
        selectorTooltip: v,
        selectorTooltipReskinV1: v,
      }),
      Q = {
        name: s._(/*BTDS*/ "No objective"),
        lowercaseName: s._(/*BTDS*/ "no objective"),
        englishName: "No Objective",
        selectorTooltip: function () {
          return s._(/*BTDS*/ "No objective will be selected");
        },
      },
      X = {
        name: o("AdsODAXObjectiveStrings").getObjectiveName(
          r("AdsAPIObjectives").OUTCOME_LEADS,
        ),
        lowercaseName: s._(/*BTDS*/ "leads"),
        englishName: "Outcome Leads",
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Leads marketing goal");
        },
      },
      Y = {
        name: o("AdsODAXObjectiveStrings").getObjectiveName(
          r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
        ),
        lowercaseName: s._(/*BTDS*/ "engagement"),
        englishName: "Outcome Engagement",
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Engagement marketing goal");
        },
      },
      J = {
        name: o("AdsODAXObjectiveStrings").getObjectiveName(
          r("AdsAPIObjectives").OUTCOME_SALES,
        ),
        lowercaseName: s._(/*BTDS*/ "sales"),
        englishName: "Outcome Sales",
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Sales marketing goal");
        },
      },
      Z = {
        name: o("AdsODAXObjectiveStrings").getObjectiveName(
          r("AdsAPIObjectives").OUTCOME_AWARENESS,
        ),
        lowercaseName: s._(/*BTDS*/ "awareness"),
        englishName: "Outcome Awareness",
        selectorTooltip: function () {
          return s._(/*BTDS*/ "Awareness marketing goal");
        },
      },
      ee = {
        name: s._(/*BTDS*/ "Mixed objectives"),
        lowercaseName: s._(/*BTDS*/ "mixed objectives"),
        englishName: "Mixed Objectives",
      },
      te = {
        LINK_CLICKS: y,
        TRAFFIC_GENERATION: C,
        LINK_CLICKS_MESSENGER_OBJECTIVE: S,
        CONVERSIONS: R,
        OFFLINE_CONVERSIONS: L,
        SOCIAL_INTERACTION: E,
        NEW_SOCIAL_INTERACTION_OBJECTIVE: k,
        POST_ENGAGEMENT: I,
        NEW_POST_ENGAGEMENT: T,
        REACH: D,
        PAGE_LIKES: x,
        PROFILE_FOLLOWERS: $,
        APP_INSTALLS: P,
        CANVAS_APP_INSTALLS: N,
        MOBILE_APP_INSTALLS: M,
        APP_ENGAGEMENT: w,
        CANVAS_APP_ENGAGEMENT: A,
        MOBILE_APP_ENGAGEMENT: F,
        OFFER_CLAIMS: O,
        EVENT_RESPONSES: B,
        STORE_VISITS: W,
        VIDEO_VIEWS: q,
        PRODUCT_CATALOG_SALES: U,
        NEW_CATALOG_SALES: V,
        LEAD_GENERATION: H,
        BRAND_AWARENESS: G,
        MESSAGES: z,
        MESSAGES_WITH_INSTAGRAM_AND_WHATSAPP: j,
        MESSAGES_WITH_INSTAGRAM: K,
        NONE: Q,
        OUTCOME_LEADS: X,
        OUTCOME_ENGAGEMENT: Y,
        OUTCOME_SALES: J,
        OUTCOME_AWARENESS: Z,
        MIXED: ee,
      };
    l.default = te;
  },
  226,
);
