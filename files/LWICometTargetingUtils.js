__d(
  "LWICometTargetingUtils",
  [
    "fbt",
    "$InternalEnum",
    "AdsUniqueMetricsHelpID",
    "CometLocalDate",
    "FBLogger",
    "FDSLink.react",
    "cr:6701",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = n("$InternalEnum")({
        AUDIENCE_NAME: "audience_name",
        AGE: "age",
        GENDERS: "genders",
        LOCATIONS: "locations",
        DETAILED_TARGETING: "detailed_targeting",
        AUDIENCE_FEEDBACK: "audience_feedback",
        ADVANTAGE_CUSTOM_AUDIENCE: "advantage_custom_audience",
        ADVANTAGE_PLUS_TOGGLE: "advantage_plus_toggle",
        CREATE_WITH_AI: "create_with_ai",
      }),
      d = new Set([
        "college_years",
        "education_statuses",
        "interested_in",
        "relationship_statuses",
      ]);
    function m(e) {
      return !d.has(e);
    }
    function p(e) {
      switch (e) {
        case "college_years":
        case "education_statuses":
        case "interested_in":
        case "relationship_statuses":
        case "interests":
        case "education_schools":
        case "education_majors":
        case "work_positions":
        case "work_employers":
        case "user_adclusters":
        case "excluded_user_adclusters":
        case "conjunctive_user_adclusters":
        case "family_statuses":
        case "industries":
        case "life_events":
        case "political_views":
        case "politics":
        case "behaviors":
        case "income":
        case "net_worth":
        case "home_type":
        case "home_ownership":
        case "home_value":
        case "ethnic_affinity":
        case "generation":
        case "household_composition":
        case "moms":
        case "office_type":
          return e;
        default:
          return null;
      }
    }
    function _(e) {
      switch (e) {
        case "college_years":
        case "education_statuses":
        case "interested_in":
        case "relationship_statuses":
          return null;
        default:
          return e;
      }
    }
    function f(e) {
      return Object.keys(e).reduce(function (t, n) {
        return (
          n !== "type" &&
            e[n] &&
            e[n].forEach(function (e) {
              m(n)
                ? typeof e == "object" &&
                  e != null &&
                  e.id != null &&
                  t.push({ id: String(e.id), name: e.name, type: n })
                : t.push({ id: e.toString(), type: n });
            }),
          t
        );
      }, []);
    }
    function g(e, t) {
      var n,
        o = (n = t[0]) != null ? n : {},
        a = e.rawData,
        i = a.id,
        l = a.targetType,
        s = p(l);
      if (s == null) {
        r("FBLogger")("pages_lwi").mustfix(
          'Invalid target type "%s" passed to flexible spec lwiCometTargetingFlexibleSpecReducer',
          l,
        );
        return;
      }
      var u = _(s),
        c = u != null ? u : s,
        d = o[c];
      if (!(d == null && ((o[c] = []), (d = o[c]), d == null))) {
        if (u == null) d.push(i);
        else {
          var m = e.rawData.name;
          if (
            d.findIndex(function (e) {
              return (
                typeof e == "object" && e != null && e.id === i && e.name === m
              );
            }) > -1
          )
            return;
          d.push({ id: i, name: m });
        }
        return ((t[0] = o), t);
      }
    }
    var h = [
        c.AGE,
        c.GENDERS,
        c.LOCATIONS,
        c.DETAILED_TARGETING,
        c.AUDIENCE_FEEDBACK,
      ],
      y = [c.CREATE_WITH_AI],
      C = {
        AUTO_LOOKALIKE: h,
        AUTO_TARGETING: [c.LOCATIONS],
        COUNTRY_AND_INTEREST: h,
        CUSTOM_AUDIENCE: h,
        DYNAMIC_TOFU_CUSTOM_AUDIENCE: h,
        FANS: [c.LOCATIONS],
        GROUPER: [c.LOCATIONS],
        HEC_AUDIENCE: h,
        MARKETPLACE_DEFAULT: [c.LOCATIONS, c.AUDIENCE_FEEDBACK],
        MARKETPLACE_NATIONWIDE_AUDIENCE: [c.LOCATIONS, c.AUDIENCE_FEEDBACK],
        MARKETPLACE_SAVED_AUDIENCE: [
          c.AUDIENCE_NAME,
          c.LOCATIONS,
          c.AUDIENCE_FEEDBACK,
        ],
        MULT_CUSTOM_AUDIENCES: [
          c.AGE,
          c.LOCATIONS,
          c.ADVANTAGE_CUSTOM_AUDIENCE,
        ],
        NCPP: h,
        SAVED_AUDIENCE: [c.AUDIENCE_NAME, c.ADVANTAGE_PLUS_TOGGLE].concat(h),
      };
    function b(e) {
      var t = C[e];
      return (
        (e === "MARKETPLACE_DEFAULT" ||
          e === "MARKETPLACE_NATIONWIDE_AUDIENCE" ||
          e === "MARKETPLACE_SAVED_AUDIENCE") &&
          (t = [].concat(t, [c.GENDERS])),
        t == null
          ? (r("FBLogger")("pages_lwi").mustfix(
              "audience option: %s is not supported in getTargetingModalConfig",
              e,
            ),
            null)
          : t
      );
    }
    function v(e) {
      var t = r("gkx")("7981");
      switch (e) {
        case "AUTO_TARGETING":
          return t
            ? s._(
                /*BTDS*/ "Details you add here help our system understand the type of people you want to reach. If you set a minimum age below 26 we\u2019ll use that as a requirement along with location. All other criteria will be used as suggestions to help find the best audience for your ad.",
              )
            : s._(
                /*BTDS*/ "Select the location of people you want to reach with your ad.",
              );
        case "FANS":
        case "GROUPER":
        case "MARKETPLACE_DEFAULT":
        case "MARKETPLACE_NATIONWIDE_AUDIENCE":
        case "MARKETPLACE_SAVED_AUDIENCE":
        case "MULT_CUSTOM_AUDIENCES":
          return s._(
            /*BTDS*/ "Select the location of people you want to reach with your ad.",
          );
        default:
          return s._(
            /*BTDS*/ "Select the location, age, gender and interests of {link to our people metrics explanation} you want to reach with your ad.",
            [
              s._param(
                "link to our people metrics explanation",
                u.jsx(r("FDSLink.react"), {
                  href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                  target: "_blank",
                  children:
                    n("cr:6701") != null
                      ? s._(/*BTDS*/ "Meta Accounts")
                      : s._(/*BTDS*/ "Accounts Center accounts"),
                }),
              ),
            ],
          );
      }
    }
    var S = s._(/*BTDS*/ "Create new"),
      R = s._(/*BTDS*/ "Create audience"),
      L = s._(/*BTDS*/ "Create audience manually"),
      E = s._(/*BTDS*/ "Edit audience"),
      k = s._(/*BTDS*/ "Edit audience manually"),
      I = s._(/*BTDS*/ "Customize audience with AI"),
      T = s._(/*BTDS*/ "Customize audience with AI"),
      D = s._(/*BTDS*/ "Customize audience with AI"),
      x = s._(
        /*BTDS*/ "Audience-{Current date to have in default audience name}",
        [
          s._param(
            "Current date to have in default audience name",
            r("CometLocalDate").fromDate().toISOString(),
          ),
        ],
      ),
      $ = s._(/*BTDS*/ "Save audience");
    ((l.LWICometTargetingModalSectionTypeEnum = c),
      (l.adsTargetingIsFlexibleSpecDescriptorType = m),
      (l.adsTargetingCoerceFlexibleSpecTargetType = p),
      (l.adsTargetingCoerceFlexibleSpecDescriptorType = _),
      (l.convertFlexibleItemSpecToEntries = f),
      (l.getFlexibleSpecFromEntry = g),
      (l.BASIC_SECTION_CONFIG = h),
      (l.CREATE_WITH_AI_SECTION_CONFIG = y),
      (l.getTargetingModalConfig = b),
      (l.getTargetingModalDescription = v),
      (l.CREATE_AUDIENCE_MANUALLY_OPEN_MODAL_BUTTON_LABEL = S),
      (l.CREATE_AUDIENCE_MANUALLY_MODE_MODAL_TITLE = R),
      (l.CREATE_AUDIENCE_MANUALLY_MODE_TOGGLE_LABEL = L),
      (l.EDIT_AUDIENCE_MANUALLY_MODE_MODAL_TITLE = E),
      (l.EDIT_AUDIENCE_MANUALLY_MODE_TOGGLE_LABEL = k),
      (l.CREATE_AUDIENCE_WITH_AI_MODE_MODAL_TITLE = I),
      (l.CREATE_AUDIENCE_WITH_AI_MODE_TOGGLE_LABEL = T),
      (l.CREATE_AUDIENCE_WITH_AI_OPEN_MODAL_BUTTON_LABEL = D),
      (l.DEFAULT_AUDIENCE_NAME = x),
      (l.SAVE_AUDIENCE_LABEL = $));
  },
  226,
);
