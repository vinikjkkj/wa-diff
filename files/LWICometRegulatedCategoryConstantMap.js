__d(
  "LWICometRegulatedCategoryConstantMap",
  ["fbt", "ix", "fbicon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = {
        CREDIT: {
          icon: (e = o("fbicon"))._(u("578887"), 20),
          name: s._(/*BTDS*/ "Credit"),
          subText: s._(
            /*BTDS*/ "Ads for credit card offers, auto loans, long-term financing or other related opportunities.",
          ),
        },
        EDUCATION: {
          icon: e._(u("481938"), 20),
          name: s._(/*BTDS*/ "Education"),
          subText: s._(/*BTDS*/ "Ads for educational opportunities"),
        },
        EMPLOYMENT: {
          icon: e._(u("481908"), 20),
          name: s._(/*BTDS*/ "Employment"),
          subText: s._(
            /*BTDS*/ "Ads for job offers, internships, professional certification programs or other related opportunities.",
          ),
        },
        FINANCIAL_PRODUCTS_SERVICES: {
          icon: e._(u("688901"), 20),
          name: s._(/*BTDS*/ "Financial products and services"),
          subText: s._(
            /*BTDS*/ "Ads for credit cards, loans, bank accounts, investing, insurance and other financial products and services.",
          ),
        },
        HOUSING: {
          icon: e._(u("481930"), 20),
          name: s._(/*BTDS*/ "Housing"),
          subText: s._(
            /*BTDS*/ "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.",
          ),
        },
        ISSUES_ELECTIONS_POLITICS: {
          icon: e._(u("534265"), 20),
          name: s._(/*BTDS*/ "Social issues, elections or politics"),
          subText: s._(
            /*BTDS*/ "Ads about social issues (such as the economy, or civil and social rights), elections, or political figures or campaigns.",
          ),
        },
        NONE: {
          name: s._(/*BTDS*/ "No category selected"),
          subText: s._(/*BTDS*/ "No category selected"),
        },
      };
    l.ADS_REGULATED_CATEGORY_CONSTANT_MAP = c;
  },
  226,
);
