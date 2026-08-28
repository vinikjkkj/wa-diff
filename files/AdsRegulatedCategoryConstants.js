__d(
  "AdsRegulatedCategoryConstants",
  [
    "fbt",
    "$InternalEnum",
    "AdsCertificationConstants",
    "AdsNoFrictionSACWorkstreamGK",
    "AdsRegulatedCategoriesSeeDetailSectionStatusEnum",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryContentUtils",
    "AdsRegulatedCategoryModalCategories",
    "AdsRegulatedCategoryModalSteps",
    "AdsUniqueMetricsID",
    "CROWAdDisapprovalReasons",
    "LocationConstants",
    "SAFRFrontendLogger",
    "immutable",
    "meta-brand-bank-building-outline-16",
    "meta-brand-bank-building-outline-24",
    "meta-brand-block-circle-outline-20",
    "meta-brand-bullhorn-outline-16",
    "meta-brand-bullhorn-outline-24",
    "meta-brand-cards-stacked-spades-outline-16",
    "meta-brand-cards-stacked-spades-outline-24",
    "meta-brand-credit-card-outline-16",
    "meta-brand-credit-card-outline-24",
    "meta-brand-diamond-tassel-outline-16",
    "meta-brand-diamond-tassel-outline-24",
    "meta-brand-discs-stacked-outline-16",
    "meta-brand-discs-stacked-outline-24",
    "meta-brand-house-outline-16",
    "meta-brand-house-outline-24",
    "meta-brand-rectangle-handle-outline-16",
    "meta-brand-rectangle-handle-outline-24",
    "meta-brand-scales-outline-16",
    "meta-brand-scales-outline-24",
    "meta-business-announcement-b4b-40-blue",
    "meta-business-budget-b4b-40-blue",
    "meta-business-credit-card-b4b-40-blue",
    "meta-business-housing-b4b-40-blue",
    "meta-business-job-post-b4b-40-blue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E =
        ((e = {}),
        (e[(L = r("AdsRegulatedCategory")).EMPLOYMENT] = s._(
          /*BTDS*/ "Employment",
        )),
        (e[L.HOUSING] = s._(/*BTDS*/ "Housing")),
        (e[L.CREDIT] = s._(/*BTDS*/ "Credit")),
        (e[L.ISSUES_ELECTIONS_POLITICS] = s._(
          /*BTDS*/ "Social issues, elections or politics",
        )),
        (e[L.EDUCATION] = s._(/*BTDS*/ "Education")),
        (e[L.ONLINE_GAMBLING_AND_GAMING] = s._(
          /*BTDS*/ "Online gambling and gaming",
        )),
        (e[L.SOCIAL_ISSUES] = s._(/*BTDS*/ "Social issues")),
        (e[L.ELECTIONS_POLITICS] = s._(/*BTDS*/ "Elections or politics")),
        (e[L.FINANCIAL_PRODUCTS_SERVICES] = s._(
          /*BTDS*/ "Financial products and services",
        )),
        (e[L.NONE] = s._(/*BTDS*/ "No categories declared")),
        e),
      k =
        ((u = {}),
        (u[L.EMPLOYMENT] = s._(/*BTDS*/ "employment")),
        (u[L.HOUSING] = s._(/*BTDS*/ "housing")),
        (u[L.CREDIT] = s._(/*BTDS*/ "credit")),
        (u[L.ISSUES_ELECTIONS_POLITICS] = s._(
          /*BTDS*/ "social issues, elections or politics",
        )),
        (u[L.EDUCATION] = s._(/*BTDS*/ "education")),
        (u[L.ONLINE_GAMBLING_AND_GAMING] = s._(
          /*BTDS*/ "online gambling and gaming",
        )),
        (u[L.SOCIAL_ISSUES] = s._(/*BTDS*/ "social issues")),
        (u[L.ELECTIONS_POLITICS] = s._(/*BTDS*/ "elections or politics")),
        (u[L.FINANCIAL_PRODUCTS_SERVICES] = s._(
          /*BTDS*/ "financial products and services",
        )),
        (u[L.NONE] = s._(/*BTDS*/ "no categories declared")),
        u),
      I =
        ((c = {}),
        (c[L.EMPLOYMENT] = (y =
          o("SAFRFrontendLogger")).PointName.CLICK_EMPLOYMENT_CATEGORY),
        (c[L.HOUSING] = y.PointName.CLICK_HOUSING_CATEGORY),
        (c[L.CREDIT] = y.PointName.CLICK_CREDIT_CATEGORY),
        (c[L.ISSUES_ELECTIONS_POLITICS] =
          y.PointName.CLICK_ISSUES_ELECTIONS_POLITICS_CATEGORY),
        (c[L.EDUCATION] = y.PointName.CLICK_EDUCATION_CATEGORY),
        (c[L.ONLINE_GAMBLING_AND_GAMING] =
          y.PointName.CLICK_ONLINE_GAMBLING_AND_GAMING_CATEGORY),
        (c[L.FINANCIAL_PRODUCTS_SERVICES] =
          y.PointName.CLICK_FINANCIAL_PRODUCTS_SERVICES_CATEGORY),
        (c[L.NONE] = y.PointName.CLICK_NONE_CATEGORY),
        c),
      T =
        ((d = {}),
        (d[(R = o("AdsCertificationConstants")).HUD_LINK] =
          y.PointName.CLICK_OTHER_RESOURCES_HUD_LINK),
        (d[R.NFHA_LINK] = y.PointName.CLICK_OTHER_RESOURCES_NFHA_LINK),
        (d[R.EEOC_LINK] = y.PointName.CLICK_OTHER_RESOURCES_EEOC_LINK),
        (d[R.CFPU_LINK] = y.PointName.CLICK_OTHER_RESOURCES_CFPU_LINK),
        d),
      D =
        ((m = {}),
        (m[L.EMPLOYMENT] = s._(
          /*BTDS*/ "Ads for job offers, internships, professional certification programs or other related opportunities.",
        )),
        (m[L.HOUSING] = s._(
          /*BTDS*/ "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.",
        )),
        (m[L.CREDIT] = s._(
          /*BTDS*/ "Ads for credit card offers, auto loans, long-term financing or other related opportunities.",
        )),
        (m[L.ISSUES_ELECTIONS_POLITICS] = s._(
          /*BTDS*/ "Ads about social issues (such as the economy, or civil and social rights), elections, or political figures or campaigns.",
        )),
        (m[L.EDUCATION] = s._(/*BTDS*/ "Ads for educational opportunities")),
        (m[L.ONLINE_GAMBLING_AND_GAMING] = s._(
          /*BTDS*/ "Ads that promote online gambling, and gaming where anything of monetary value is required to play and anything of monetary value forms part of the prize.",
        )),
        (m[L.SOCIAL_ISSUES] = s._(
          /*BTDS*/ "Ads about social issues (such as the economy, or civil and social rights)",
        )),
        (m[L.ELECTIONS_POLITICS] = s._(
          /*BTDS*/ "Ads about elections, political figures or campaigns",
        )),
        (m[L.FINANCIAL_PRODUCTS_SERVICES] = s._(
          /*BTDS*/ "Ads for credit cards, long-term financing, checking and savings accounts, investment services, insurance services, or other related financial opportunities.",
        )),
        (m[L.NONE] = s._(/*BTDS*/ "No categories declared")),
        m),
      x =
        ((p = {}),
        (p[L.EMPLOYMENT] = o(
          "meta-brand-rectangle-handle-outline-16",
        ).metaBrandRectangleHandleBriefcaseOutline16),
        (p[L.HOUSING] = o(
          "meta-brand-house-outline-16",
        ).metaBrandHouseOutline16),
        (p[L.CREDIT] = o(
          "meta-brand-credit-card-outline-16",
        ).metaBrandCreditCardOutline16),
        (p[L.ISSUES_ELECTIONS_POLITICS] = o(
          "meta-brand-bullhorn-outline-16",
        ).metaBrandBullhornOutline16),
        (p[L.EDUCATION] = o(
          "meta-brand-diamond-tassel-outline-16",
        ).metaBrandDiamondTasselOutline16),
        (p[L.ONLINE_GAMBLING_AND_GAMING] = o(
          "meta-brand-cards-stacked-spades-outline-16",
        ).metaBrandCardsStackedSpadesOutline16),
        (p[L.SOCIAL_ISSUES] = o(
          "meta-brand-scales-outline-16",
        ).metaBrandScalesOutline16),
        (p[L.ELECTIONS_POLITICS] = o(
          "meta-brand-bank-building-outline-16",
        ).metaBrandBankBuildingPoliticsOutline16),
        (p[L.FINANCIAL_PRODUCTS_SERVICES] = o(
          "meta-brand-discs-stacked-outline-16",
        ).metaBrandDiscsStackedOutline16),
        p),
      $ =
        ((_ = {}),
        (_[L.EMPLOYMENT] = o(
          "meta-brand-rectangle-handle-outline-24",
        ).metaBrandRectangleHandleBriefcaseOutline24),
        (_[L.HOUSING] = o(
          "meta-brand-house-outline-24",
        ).metaBrandHouseOutline24),
        (_[L.CREDIT] = o(
          "meta-brand-credit-card-outline-24",
        ).metaBrandCreditCardOutline24),
        (_[L.ISSUES_ELECTIONS_POLITICS] = o(
          "meta-brand-bullhorn-outline-24",
        ).metaBrandBullhornOutline24),
        (_[L.EDUCATION] = o(
          "meta-brand-diamond-tassel-outline-24",
        ).metaBrandDiamondTasselOutline24),
        (_[L.ONLINE_GAMBLING_AND_GAMING] = o(
          "meta-brand-cards-stacked-spades-outline-24",
        ).metaBrandCardsStackedSpadesOutline24),
        (_[L.SOCIAL_ISSUES] = o(
          "meta-brand-scales-outline-24",
        ).metaBrandScalesOutline24),
        (_[L.ELECTIONS_POLITICS] = o(
          "meta-brand-bank-building-outline-24",
        ).metaBrandBankBuildingPoliticsOutline24),
        (_[L.NONE] = o(
          "meta-brand-diamond-tassel-outline-24",
        ).metaBrandDiamondTasselOutline24),
        (_[L.FINANCIAL_PRODUCTS_SERVICES] = o(
          "meta-brand-discs-stacked-outline-24",
        ).metaBrandDiscsStackedOutline24),
        _),
      P =
        ((f = {}),
        (f[L.EMPLOYMENT] = (C = r(
          "AdsRegulatedCategoriesSeeDetailSectionStatusEnum",
        )).EMPLOYMENT),
        (f[L.HOUSING] = C.HOUSING),
        (f[L.CREDIT] = C.CREDIT),
        (f[L.ISSUES_ELECTIONS_POLITICS] = C.ISSUES_ELECTIONS_POLITICS),
        (f[L.ONLINE_GAMBLING_AND_GAMING] = C.ISSUES_ELECTIONS_POLITICS),
        (f[L.SOCIAL_ISSUES] = C.SOCIAL_ISSUES),
        (f[L.ELECTIONS_POLITICS] = C.ELECTIONS_POLITICS),
        (f[L.FINANCIAL_PRODUCTS_SERVICES] = C.FINANCIAL_PRODUCTS_SERVICES),
        f),
      N = r("immutable").Set([
        L.EMPLOYMENT,
        L.HOUSING,
        L.CREDIT,
        L.ISSUES_ELECTIONS_POLITICS,
        L.EDUCATION,
        L.ONLINE_GAMBLING_AND_GAMING,
        L.SOCIAL_ISSUES,
        L.ELECTIONS_POLITICS,
        L.FINANCIAL_PRODUCTS_SERVICES,
      ]),
      M = { ageMin: 18, ageMax: 65 },
      w = 15,
      A = 25,
      F = [
        (S = o("LocationConstants")).ELECTORAL_DISTRICTS,
        S.METRO_AREAS,
        S.NEIGHBORHOODS,
        S.POLITICAL_DISTRICTS,
        S.SMALL_GEO_AREAS,
        S.SUBCITIES,
        S.SUBNEIGHBORHOODS,
        S.ZIPS,
      ],
      O = [S.CITIES, S.CUSTOM_LOCATIONS, S.PLACES],
      B = s._(
        /*BTDS*/ "You need to verify your identity and create a disclaimer to run ads about social issues, elections or politics.",
      ),
      W = s._(
        /*BTDS*/ "Advantage+ placements are disabled for the selected Special Ad Categories",
      ),
      q = s._(/*BTDS*/ "Special Ad Category"),
      U = s._(/*BTDS*/ "Special Ad Categories");
    function V(e) {
      var t = e === !0 ? 1 : 0;
      return o(
        "AdsNoFrictionSACWorkstreamGK",
      ).getEligibleForNoFrictionSACWorkstream()
        ? s._(
            /*BTDS*/ '_j{"0":"Declare if your ads are related to financial products and services, employment, housing, social issues, elections or politics to help prevent ad rejections.","1":"Declare if your ads and marketing message are related to financial products and services, employment, housing, social issues, elections or politics to help prevent ad rejections."}',
            [s._enum(t, { 0: " ", 1: " and marketing message " })],
          )
        : s._(
            /*BTDS*/ '_j{"0":"Declare if your ads are related to financial products and services, employment, housing, social issues, elections or politics to help prevent ad rejections. Requirements differ by country.","1":"Declare if your ads and marketing message are related to financial products and services, employment, housing, social issues, elections or politics to help prevent ad rejections. Requirements differ by country."}',
            [s._enum(t, { 0: " ", 1: " and marketing message " })],
          );
    }
    var H = s._(
        /*BTDS*/ "Declare if you run ads related to financial products and services, employment, housing, social issues, elections, or politics to help prevent ad rejections.",
      ),
      G = s._(
        /*BTDS*/ "Declare if you run ads related to the categories below to comply with country-specific requirements and help prevent ad rejections.",
      ),
      z = s._(/*BTDS*/ "Declare category if applicable"),
      j = s._(/*BTDS*/ "See category requirements"),
      K = s._(
        /*BTDS*/ "Unavailable when running ads in this Special Ad Category.",
      ),
      Q = s._(/*BTDS*/ "Categories"),
      X = s._(
        /*BTDS*/ "Select the categories that best describe what this campaign will advertise.",
      ),
      Y = "298000447747885",
      J = "2220749868045706",
      Z = [
        (b = r("CROWAdDisapprovalReasons")).CREDIT_TARGETING,
        b.EMPLOYMENT_TARGETING,
        b.HOUSING_TARGETING,
      ],
      ee = [
        b.CREDIT_NON_SPECIALIZED,
        b.DISCRIMINATORYPRACTICES_CREDIT,
        b.EMPLOYMENT_NON_SPECIALIZED,
        b.DISCRIMINATORYPRACTICES_EMPLOYMENT,
        b.HOUSING_NON_SPECIALIZED,
        b.DISCRIMINATORYPRACTICES_HOUSING,
      ],
      te = {
        ADS_HOUSING_NON_SPECIALIZED: L.HOUSING,
        ADS_DISCRIMINATORYPRACTICES_HOUSING: L.HOUSING,
        ADS_EMPLOYMENT_NON_SPECIALIZED: L.EMPLOYMENT,
        ADS_DISCRIMINATORYPRACTICES_EMPLOYMENT: L.EMPLOYMENT,
        ADS_CREDIT_NON_SPECIALIZED: L.FINANCIAL_PRODUCTS_SERVICES,
        ADS_DISCRIMINATORYPRACTICES_CREDIT: L.FINANCIAL_PRODUCTS_SERVICES,
        ADS_FPS_CFPB: L.FINANCIAL_PRODUCTS_SERVICES,
      };
    function ne(e) {
      var t;
      return (t = te[e]) != null ? t : null;
    }
    var re = [b.USER_CERTIFICATION],
      oe = s._(/*BTDS*/ "Not available for the catalog sales objective"),
      ae = s._(
        /*BTDS*/ "If your ads are related to social issues, elections or politics, you cannot use a catalog. Turn off your catalog to use this Special Ad Category.",
      ),
      ie = s._(
        /*BTDS*/ "When using a Special Ad Category, all ads in a campaign must now share the same category. To designate this ad as about social issues, elections or politics: create a new campaign; turn on the Special Ad Category setting; then copy the ad to the new campaign.",
      ),
      le = "https://www.facebook.com/business/ads",
      se = "https://www.facebook.com/business/m/election-integrity",
      ue = s._(/*BTDS*/ "visit Facebook");
    function ce(e, t) {
      return s._(
        /*BTDS*/ "We presently only support running ads about social issues, elections or politics on Instagram from a Facebook ad account. Please {visit Facebook link} to create this type of ad. We're constantly working to increase ad transparency. {learn more link}.",
        [s._param("visit Facebook link", e), s._param("learn more link", t)],
      );
    }
    ce.displayName = ce.name + " [from " + i.id + "]";
    var de = s._(
        /*BTDS*/ "Some of the ad sets in this campaign do not comply with the requirements for this Special Ad Category.",
      ),
      me = {
        icon: o("meta-brand-block-circle-outline-20")
          .metaBrandBlockCircleStopOutline20,
        color: "error",
      },
      pe = s._(
        /*BTDS*/ "If none of the categories apply to your ad, you may not need to select a Special Ad Category. If you are unsure, you can also get help declaring categories.",
      ),
      _e = s._(/*BTDS*/ "Get help declaring categories");
    function fe(e, t) {
      switch (e) {
        case r("AdsRegulatedCategoryModalSteps").CREDIT:
          return t
            ? s._(/*BTDS*/ "Financial products and services")
            : s._(/*BTDS*/ "Credit");
        case r("AdsRegulatedCategoryModalSteps").EMPLOYMENT:
          return s._(/*BTDS*/ "Employment");
        case r("AdsRegulatedCategoryModalSteps").HOUSING:
          return s._(/*BTDS*/ "Housing");
        case r("AdsRegulatedCategoryModalSteps").ISSUES_ELECTIONS_POLITICS:
          return s._(/*BTDS*/ "Social issues, elections or politics");
        case r("AdsRegulatedCategoryModalSteps").REVIEW:
          return s._(/*BTDS*/ "Review");
      }
    }
    var ge = s._(/*BTDS*/ "Are your ads about credit?"),
      he = s._(
        /*BTDS*/ "Is any part of your ads about financial products and services?",
      ),
      ye = s._(/*BTDS*/ "Are your ads about employment?"),
      Ce = s._(/*BTDS*/ "Are your ads about housing?"),
      be = s._(
        /*BTDS*/ "Are your ads about social issues, elections or politics?",
      ),
      ve = s._(
        /*BTDS*/ "See if any part of your ads promote a product or service related to credit.",
      ),
      Se = s._(
        /*BTDS*/ "See if any part of your ads promote a product or service related to employment.",
      ),
      Re = s._(
        /*BTDS*/ "See if any part of your ads promote a product or service related to housing.",
      ),
      Le = s._(
        /*BTDS*/ "See if any part of your ads offer details about social issues, elections, or political opportunities.",
      ),
      Ee = s._(/*BTDS*/ "Yes, my ads promote one of the following:"),
      ke = s._(/*BTDS*/ "Yes, my ads are:"),
      Ie = s._(/*BTDS*/ "No, my ads promote one of the following:"),
      Te = s._(/*BTDS*/ "No, my ads offer:");
    function De(e, t) {
      switch (e) {
        case r("AdsRegulatedCategoryModalCategories").CREDIT:
          return t
            ? {
                assetSource: o("meta-business-budget-b4b-40-blue")
                  .metaBusinessBudgetB4b40Blue,
                footer: {
                  text: o(
                    "AdsRegulatedCategoryContentUtils",
                  ).getFPSCampaignWizardFooterContent(),
                },
                heading: he,
                noPrompt: Ie,
                yesPrompt: Ee,
                yesClickPoint:
                  o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_YES_FPS,
                noClickPoint:
                  o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_NO_FPS,
              }
            : {
                assetSource: o("meta-business-credit-card-b4b-40-blue")
                  .metaBusinessCreditCardB4b40Blue,
                description: ve,
                heading: ge,
                noPrompt: Ie,
                yesPrompt: Ee,
                yesClickPoint:
                  o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_YES_CREDIT,
                noClickPoint:
                  o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_NO_CREDIT,
              };
        case r("AdsRegulatedCategoryModalCategories").EMPLOYMENT:
          return {
            assetSource: o("meta-business-job-post-b4b-40-blue")
              .metaBusinessJobPostB4b40Blue,
            description: Se,
            heading: ye,
            noPrompt: Ie,
            yesPrompt: Ee,
            yesClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_YES_EMPLOYMENT,
            noClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_NO_EMPLOYMENT,
          };
        case r("AdsRegulatedCategoryModalCategories").HOUSING:
          return {
            assetSource: o("meta-business-housing-b4b-40-blue")
              .metaBusinessHousingB4b40Blue,
            description: Re,
            heading: Ce,
            noPrompt: Ie,
            yesPrompt: Ee,
            yesClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_YES_HOUSING,
            noClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_NO_HOUSING,
          };
        case r("AdsRegulatedCategoryModalCategories").ISSUES_ELECTIONS_POLITICS:
          return {
            assetSource: o("meta-business-announcement-b4b-40-blue")
              .metaBusinessAnnouncementB4bSiepAdvertisersGrowthFbCredit40Blue,
            description: Le,
            heading: be,
            noPrompt: Te,
            yesPrompt: ke,
            yesClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_YES_SIEP,
            noClickPoint:
              o("SAFRFrontendLogger").PointName.CLICK_RADIOBOX_NO_SIEP,
          };
      }
    }
    var xe = n("$InternalEnum")({
        RADIO_SELECTED_YES: "radioSelectedYes",
        RADIO_SELECTED_NO: "radioSelectedNo",
        CATEGORY_MULTISELECTOR_SELECTED: "categoryMultiselectorSelected",
      }),
      $e = {
        yesContent: [
          s._(/*BTDS*/ "Credit cards"),
          s._(/*BTDS*/ "Brand ads for credit cards, regardless of offer"),
          s._(/*BTDS*/ "Auto loans"),
          s._(/*BTDS*/ "Personal or business loans"),
          s._(/*BTDS*/ "Mortgage loans"),
          s._(/*BTDS*/ "Long-term financing"),
          s._(/*BTDS*/ "Debt recovery"),
        ],
        noContent: [
          s._(/*BTDS*/ "Unrelated activities"),
          s._(/*BTDS*/ "Gift cards"),
          s._(/*BTDS*/ "Store rewards"),
          s._(/*BTDS*/ "Debit accounts or services"),
          s._(/*BTDS*/ "Checking accounts or services"),
          s._(/*BTDS*/ "Savings accounts or services"),
        ],
      },
      Pe = {
        yesContent: [
          s._(/*BTDS*/ "Credit cards"),
          s._(/*BTDS*/ "Long-term financing"),
          s._(/*BTDS*/ "Checking and savings accounts"),
          s._(/*BTDS*/ "Investment services"),
          s._(/*BTDS*/ "Payment services"),
          s._(/*BTDS*/ "Insurance services"),
          s._(/*BTDS*/ "Other related financial opportunities"),
        ],
        noContent: [
          s._(/*BTDS*/ "Unrelated activities"),
          s._(/*BTDS*/ "Gift cards"),
          s._(/*BTDS*/ "Financial management education"),
          s._(/*BTDS*/ "Tax and accounting services"),
          s._(/*BTDS*/ "Store rewards"),
        ],
      },
      Ne = {
        yesContent: [
          s._(/*BTDS*/ "Full-time or part-time jobs"),
          s._(/*BTDS*/ "Freelance"),
          s._(/*BTDS*/ "Internships"),
          s._(/*BTDS*/ "Franchising opportunities"),
          s._(/*BTDS*/ "Apprenticeships"),
          s._(/*BTDS*/ "Professional certification programs"),
          s._(/*BTDS*/ "Job fairs"),
          s._(/*BTDS*/ "Job board or aggregation services"),
          s._(/*BTDS*/ "Guaranteed interviews or career placement"),
          s._(
            /*BTDS*/ "Promotion of company perks alongside employment opportunities",
          ),
        ],
        noContent: [
          s._(/*BTDS*/ "Unrelated activities"),
          s._(
            /*BTDS*/ "General advice on how to succeed at work unrelated to specific listings",
          ),
          s._(
            /*BTDS*/ "General advice for career development unrelated to specific listings",
          ),
          s._(
            /*BTDS*/ "Discussing a company without sharing employment opportunities or perks",
          ),
        ],
      },
      Me = {
        yesContent: [
          s._(/*BTDS*/ "Sale, rental, or temporary housing listings"),
          s._(
            /*BTDS*/ "Homeowners insurance offers (including insurance bundles)",
          ),
          s._(
            /*BTDS*/ "Renters insurance offers (including insurance bundles)",
          ),
          s._(
            /*BTDS*/ "Mortgage insurance offers (including insurance bundles)",
          ),
          s._(/*BTDS*/ "Financing options offers (including mortgage loans)"),
          s._(/*BTDS*/ "Home equity or appraisal services"),
          s._(/*BTDS*/ "Real estate and house hunting services"),
          s._(/*BTDS*/ "Aggregator services"),
        ],
        noContent: [
          s._(/*BTDS*/ "Unrelated activities"),
          s._(/*BTDS*/ "Hotels"),
          s._(/*BTDS*/ "Resorts"),
          s._(/*BTDS*/ "Retreats"),
          s._(/*BTDS*/ "Tips related to homeownership or home buying"),
          s._(
            /*BTDS*/ "Education for consumers or housing providers about their rights and responsibilities under fair housing laws",
          ),
        ],
      },
      we = {
        yesContent: [
          s._(
            /*BTDS*/ "Made by, on behalf of, or about a candidate for public office, a political figure, a political party, a political action committee or advocates for the outcome of an election to public office",
          ),
          s._(
            /*BTDS*/ 'About any election, referendum, or ballot initiative, including "go out and vote" or election campaigns',
          ),
          s._(/*BTDS*/ "Regulated as political advertising"),
          s._(/*BTDS*/ "Social issues"),
        ],
        noContent: [s._(/*BTDS*/ "Unrelated activities")],
      };
    function Ae(e, t) {
      switch (e) {
        case r("AdsRegulatedCategoryModalCategories").CREDIT:
          return t ? Pe : $e;
        case r("AdsRegulatedCategoryModalCategories").EMPLOYMENT:
          return Ne;
        case r("AdsRegulatedCategoryModalCategories").HOUSING:
          return Me;
        case r("AdsRegulatedCategoryModalCategories").ISSUES_ELECTIONS_POLITICS:
          return we;
      }
    }
    var Fe = {
        COMPLETED: "completed",
        INCOMPLETE: "incomplete",
        SKIPPED: "skipped",
        PENDING: "pending",
      },
      Oe =
        ((g = {}),
        (g[L.EMPLOYMENT] = {
          categoryAsset: o("meta-business-job-post-b4b-40-blue")
            .metaBusinessJobPostB4b40Blue,
          categoryTitleString: s._(/*BTDS*/ "Employment"),
        }),
        (g[L.HOUSING] = {
          categoryAsset: o("meta-business-housing-b4b-40-blue")
            .metaBusinessHousingB4b40Blue,
          categoryTitleString: s._(/*BTDS*/ "Housing"),
        }),
        (g[L.CREDIT] = {
          categoryAsset: o("meta-business-credit-card-b4b-40-blue")
            .metaBusinessCreditCardB4b40Blue,
          categoryTitleString: s._(/*BTDS*/ "Credit"),
        }),
        (g[L.FINANCIAL_PRODUCTS_SERVICES] = {
          categoryAsset: o("meta-business-budget-b4b-40-blue")
            .metaBusinessBudgetB4b40Blue,
          categoryTitleString: s._(/*BTDS*/ "Financial products and services"),
        }),
        (g[L.ISSUES_ELECTIONS_POLITICS] = {
          categoryAsset: o("meta-business-announcement-b4b-40-blue")
            .metaBusinessAnnouncementB4bSiepAdvertisersGrowthFbCredit40Blue,
          categoryTitleString: s._(
            /*BTDS*/ "Social issues, elections or politics",
          ),
        }),
        g),
      Be = s._(
        /*BTDS*/ "After declaring your category, you can opt out or change your category at any time.",
      ),
      We = s._(/*BTDS*/ "Based on your responses:"),
      qe = s._(/*BTDS*/ "Ad landing page"),
      Ue = s._(/*BTDS*/ "Ad images and videos"),
      Ve = s._(/*BTDS*/ "Ad headlines and text"),
      He = {
        CREDIT: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit. When you select \u2018Declare category\u2019, you will opt into credit.",
        ),
        EMPLOYMENT: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within employment. When you select \u2018Declare category\u2019, you will opt into employment.",
        ),
        HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within housing. When you select \u2018Declare category\u2019, you will opt into housing.",
        ),
        ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within social issues, elections or politics. When you select \u2018Declare category\u2019, you will opt into social issues, elections or politics.",
        ),
        CREDIT_EMPLOYMENT: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit and employment. When you select \u2018Declare category\u2019, you will opt into credit and employment.",
        ),
        CREDIT_HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit and housing. When you select \u2018Declare category\u2019, you will opt into credit and housing.",
        ),
        CREDIT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into credit and social issues, elections, or politics.",
        ),
        EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within employment and housing. When you select \u2018Declare category\u2019, you will opt into employment and housing.",
        ),
        EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within employment and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into employment and social issues, elections, or politics.",
        ),
        HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within housing and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into housing and social issues, elections, or politics.",
        ),
        CREDIT_EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit, employment, and housing. When you select \u2018Declare category\u2019, you will opt into credit, employment, and housing.",
        ),
        CREDIT_EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit, employment, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into credit, employment, and social issues, elections, or politics.",
        ),
        CREDIT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit, housing, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into credit, housing, and social issues, elections, or politics.",
        ),
        EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within employment, housing, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into employment, housing, and social issues, elections, or politics.",
        ),
        CREDIT_EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within credit, employment, housing, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into credit, employment, housing, and social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services. When you select \u2018Declare category\u2019, you will opt into Financial products and services.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services and employment. When you select \u2018Declare category\u2019, you will opt into Financial products and services and employment.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services and housing. When you select \u2018Declare category\u2019, you will opt into Financial products and services and housing.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into Financial products and services and social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services, employment, and housing. When you select \u2018Declare category\u2019, you will opt into Financial products and services, employment, and housing.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services, employment, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into Financial products and services, employment, and social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services, housing, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into Financial products and services, housing, and social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS:
          s._(
            /*BTDS*/ "You are likely promoting a product or service that falls within Financial products and services, employment, housing, and social issues, elections, or politics. When you select \u2018Declare category\u2019, you will opt into Financial products and services, employment, housing, and social issues, elections, or politics.",
          ),
      },
      Ge = {
        CREDIT: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit.",
        ),
        EMPLOYMENT: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within employment.",
        ),
        HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within housing.",
        ),
        ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within social issues, elections, or politics.",
        ),
        CREDIT_EMPLOYMENT: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit or employment.",
        ),
        CREDIT_HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit or housing.",
        ),
        CREDIT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit or social issues, elections, or politics.",
        ),
        EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within employment or housing.",
        ),
        EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within employment or social issues, elections, or politics.",
        ),
        HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within housing or social issues, elections, or politics.",
        ),
        CREDIT_EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit, employment, or housing.",
        ),
        CREDIT_EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit, employment, or social issues, elections, or politics.",
        ),
        CREDIT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit, housing, or social issues, elections, or politics.",
        ),
        EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within employment, housing, or social issues, elections, or politics.",
        ),
        CREDIT_EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within credit, employment, housing, or social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services or employment.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services or housing.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services or social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_HOUSING: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services, employment, or housing.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services, employment, or social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_HOUSING_ISSUES_ELECTIONS_POLITICS: s._(
          /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services, housing, or social issues, elections, or politics.",
        ),
        FINANCIAL_PRODUCTS_SERVICES_EMPLOYMENT_HOUSING_ISSUES_ELECTIONS_POLITICS:
          s._(
            /*BTDS*/ "You are likely not promoting a product or service that falls within Financial products and services, employment, housing, or social issues, elections, or politics.",
          ),
      };
    function ze(e, t) {
      var n = t
          ? o("SAFRFrontendLogger").PointName.CLICK_NEXT_BUTTON_FPS
          : o("SAFRFrontendLogger").PointName.CLICK_NEXT_BUTTON_CREDIT,
        a = t
          ? o("SAFRFrontendLogger").PointName.CLICK_X_OUT_FPS
          : o("SAFRFrontendLogger").PointName.CLICK_X_OUT_CREDIT,
        i = t
          ? o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_FPS
          : o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_CREDIT;
      switch (e) {
        case r("AdsRegulatedCategoryModalSteps").CREDIT:
          return {
            backButtonPoint: null,
            nextButtonPoint: n,
            xOutPoint: a,
            stepperNavPoint: i,
          };
        case r("AdsRegulatedCategoryModalSteps").EMPLOYMENT:
          return {
            backButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_BACK_BUTTON_EMPLOYMENT,
            nextButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_NEXT_BUTTON_EMPLOYMENT,
            xOutPoint: o("SAFRFrontendLogger").PointName.CLICK_X_OUT_EMPLOYMENT,
            stepperNavPoint:
              o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_EMPLOYMENT,
          };
        case r("AdsRegulatedCategoryModalSteps").HOUSING:
          return {
            backButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_BACK_BUTTON_HOUSING,
            nextButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_NEXT_BUTTON_HOUSING,
            xOutPoint: o("SAFRFrontendLogger").PointName.CLICK_X_OUT_HOUSING,
            stepperNavPoint:
              o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_HOUSING,
          };
        case r("AdsRegulatedCategoryModalSteps").ISSUES_ELECTIONS_POLITICS:
          return {
            backButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_BACK_BUTTON_SIEP,
            nextButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_NEXT_BUTTON_SIEP,
            xOutPoint: o("SAFRFrontendLogger").PointName.CLICK_X_OUT_SIEP,
            stepperNavPoint:
              o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_SIEP,
          };
        case r("AdsRegulatedCategoryModalSteps").REVIEW:
          return {
            backButtonPoint:
              o("SAFRFrontendLogger").PointName.CLICK_BACK_BUTTON_REVIEW,
            nextButtonPoint: null,
            xOutPoint: o("SAFRFrontendLogger").PointName.CLICK_X_OUT_REVIEW,
            stepperNavPoint:
              o("SAFRFrontendLogger").PointName.CLICK_STEPPER_NAV_REVIEW,
          };
      }
    }
    var je = [
        L.ISSUES_ELECTIONS_POLITICS,
        L.SOCIAL_ISSUES,
        L.ELECTIONS_POLITICS,
      ],
      Ke = { mixedStateEditable: !0 },
      Qe =
        ((h = {}),
        (h[L.EMPLOYMENT] = {
          linkText: s._(/*BTDS*/ "About ads for employment"),
          helpCenterID: (v = o("AdsUniqueMetricsID"))
            .ABOUT_SAC_HELP_CENTER_EMPLOYMENT_CMS_ID,
        }),
        (h[L.HOUSING] = {
          linkText: s._(/*BTDS*/ "About ads for housing"),
          helpCenterID: v.ABOUT_SAC_HELP_CENTER_HOUSING_CMS_ID,
        }),
        (h[L.ISSUES_ELECTIONS_POLITICS] = {
          linkText: s._(
            /*BTDS*/ "About ads for social issues, elections or politics",
          ),
          helpCenterID: v.ABOUT_SAC_HELP_CENTER_SIEP_CMS_ID,
        }),
        (h[L.FINANCIAL_PRODUCTS_SERVICES] = {
          linkText: s._(
            /*BTDS*/ "About ads for financial products and services",
          ),
          helpCenterID: v.ABOUT_SAC_HELP_CENTER_FPS_CMS_ID,
        }),
        h),
      Xe = s._(/*BTDS*/ "I may run ads in one or more of these categories."),
      Ye = s._(/*BTDS*/ "I will not run ads in any of these categories."),
      Je = s._(
        /*BTDS*/ "Do you plan to run ads about financial products and services, employment, housing, social issues, elections or politics?",
      );
    ((l.AdsRegulatedCategoryNameMap = E),
      (l.AdsRegulatedCategoryNameLowercaseMap = k),
      (l.AdsRegulatedCategorySeeDetailEventMap = I),
      (l.AdsRegulatedCategoryLinkTextDiscriminationEventMap = T),
      (l.AdsRegulatedCategorySubTextMap = D),
      (l.AdsRegulatedCategoryIconMap = x),
      (l.AdsRegulatedCategoryIconHeaderMap = $),
      (l.AdsRegulatedCategorySeeDetailModalStatusMap = P),
      (l.AdsRegulatedCategoryRestrictMap = N),
      (l.AgeRange = M),
      (l.REGULATED_CATEGORY_MIN_RADIUS_MILE = w),
      (l.REGULATED_CATEGORY_MIN_RADIUS_KILOMETER = A),
      (l.REGULATED_CATEGORY_GEO_LOCATIONS_BLOCKLIST = F),
      (l.REGULATED_CATEGORY_GEO_LOCATIONS_RADIUS = O),
      (l.POLITICAL_ADS_INLINE_ERROR_MESSAGE = B),
      (l.REGULATED_CATEGORY_AUTOMATIC_PLACEMENT_DISABLE_TOOLTIP = W),
      (l.REGULATED_CATEGORY_TITLE = q),
      (l.REGULATED_CATEGORIES_TITLE = U),
      (l.getRegulatedCategoriesDescriptionNonSACExperiment = V),
      (l.REGULATED_CATEGORIES_WIDGET_DESCRIPTION_WITH_FPS = H),
      (l.REGULATED_CATEGORIES_DETAILED_PANE_DESCRIPTION = G),
      (l.CAMPAIGN_WIZARD_MULTISELECTOR_PLACEHOLDER = z),
      (l.REGULATED_CATEGORY_LEARN_MORE_LABEL = j),
      (l.REGULATED_CATEGORY_DISABLED_SELECTOR_VALUE_TOOLTIP = K),
      (l.SELECTOR_LABEL = Q),
      (l.SELECTOR_TOOL_TIP = X),
      (l.DEFAULT_CATEGORY = L.HOUSING),
      (l.REGULATED_CATEGORY_HELP_CMS = Y),
      (l.REGULATED_CATEGORY_HELP_TARGETING = J),
      (l.REGULATED_CATEGORY_VALIDATION_DISAPPROVAL_REASONS = Z),
      (l.REGULATED_CATEGORY_DISAPPROVAL_REASONS = ee),
      (l.getHECCategoryFromViolationType = ne),
      (l.HEC_CERTIFICATION_DISAPPROVAL_REASONS = re),
      (l.SIEP_DISABLE_MESSAGE_CATALOG_SALES = oe),
      (l.SIEP_DISABLE_MESSAGE_SALES_WITH_CATALOG = ae),
      (l.SIEP_DISABLE_MESSAGE_MIXED_POLITICAL_CAMPAIGN = ie),
      (l.SIEP_DISABLE_MESSAGE_IG_LOGIN_VISIT_FB_LINK = le),
      (l.SIEP_DISABLE_MESSAGE_IG_LOGIN_LEARN_MORE_LINK = se),
      (l.SIEP_DISABLE_MESSAGE_IG_LOGIN_VISIT_FB = ue),
      (l.getSIEPDisabledMessageIGLogin = ce),
      (l.INVALID_NON_SPEND_CAMPAIGN_INFO_STATUS_TEXT = de),
      (l.INVALID_NON_SPEND_CAMPAIGN_INFO_STATUS_ICON = me),
      (l.REGULATED_CATEGORY_MAY_NOT_APPLY_LABEL = pe),
      (l.REGULATED_CATEGORY_HELP_DECLARING_CATEGORIES_LABEL = _e),
      (l.AdsRegulatedCategoryHelpDeclaringModalStepLabels = fe),
      (l.AdsRegulatedCategoryHelpDeclaringModalRadioboxPageMap = De),
      (l.AdsRegulatedCategoryHelpDeclaringCategoryValue = xe),
      (l.AdsRegulatedCategoryHelpDeclaringModalPageContentMap = Ae),
      (l.AdsRegulatedCategoryModalStepCompletionStatusMap = Fe),
      (l.AdsRegulatedCategoryHelpDeclaringModalDeclarationObjectMap = Oe),
      (l.REGULATED_CATEGORY_HELP_DECLARING_REVIEW_PAGE_SUGGESTED_CATEGORIES_DISCLAIMER =
        Be),
      (l.BASED_ON_YOUR_RESPONSES_HEADER = We),
      (l.AD_LANDING_PAGE_ICON_TEXT = qe),
      (l.AD_IMAGES_VIDEOS_ICON_TEXT = Ue),
      (l.AD_HEADLINES_TEXTS_ICON_TEXT = Ve),
      (l.AdsRegulatedCategoryHelpDeclaringReviewPageSuggestedYesCategories =
        He),
      (l.AdsRegulatedCategoryHelpDeclaringReviewPageSuggestedNoCategories = Ge),
      (l.AdsRegulatedCategoryHelpDeclaringPagePointsMap = ze),
      (l.AdsRegulatedCategorySIEPCategories = je),
      (l.AudienceEditorRegulatedCategoryProperties = Ke),
      (l.AdsRegulatedCategoryLinkTextMap = Qe),
      (l.AD_RUNS_IN_REGULATED_CATEGORIES_TEXT = Xe),
      (l.AD_DOES_NOT_RUN_IN_REGULATED_CATEGORIES_TEXT = Ye),
      (l.REGULATED_CATEGORIES_DECLARATION_PROMPT = Je));
  },
  226,
);
