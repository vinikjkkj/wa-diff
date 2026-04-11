__d(
  "WAWebNewsletterDirectoryCategoryUtils",
  ["$InternalEnum", "WALogger", "WAWebGetEnumValuesFromConfig"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        Business: 1,
        Entertainment: 2,
        Lifestyle: 3,
        News: 4,
        Organizations: 5,
        People: 6,
        Sports: 7,
        SpecialEvents: 8,
        SpecialEvents2: 9,
        SpecialEvents3: 10,
        SpecialEvents4: 11,
        SpecialEvents5: 12,
      });
    function u(e) {
      switch (e) {
        case s.Business:
          return "BUSINESS";
        case s.Entertainment:
          return "ENTERTAINMENT";
        case s.Lifestyle:
          return "LIFESTYLE";
        case s.News:
          return "NEWS";
        case s.Organizations:
          return "ORGANIZATIONS";
        case s.People:
          return "PEOPLE";
        case s.Sports:
          return "SPORTS";
        case s.SpecialEvents:
          return "SPECIAL_EVENTS";
        case s.SpecialEvents2:
          return "SPECIAL_EVENTS_2";
        case s.SpecialEvents3:
          return "SPECIAL_EVENTS_3";
        case s.SpecialEvents4:
          return "SPECIAL_EVENTS_4";
        case s.SpecialEvents5:
          return "SPECIAL_EVENTS_5";
      }
    }
    function c(e) {
      switch (e) {
        case "BUSINESS":
          return { type: s.Business, name: "Business" };
        case "ENTERTAINMENT":
          return { type: s.Entertainment, name: "Entertainment" };
        case "LIFESTYLE":
          return { type: s.Lifestyle, name: "Lifestyle" };
        case "NEWS":
          return { type: s.News, name: "News & Information" };
        case "ORGANIZATIONS":
          return { type: s.Organizations, name: "Organizations" };
        case "PEOPLE":
          return { type: s.People, name: "People" };
        case "SPORTS":
          return { type: s.Sports, name: "Sports" };
        case "SPECIAL_EVENTS":
          return { type: s.SpecialEvents, name: "Special Events" };
        case "SPECIAL_EVENTS_2":
          return { type: s.SpecialEvents2, name: "Special Events 2" };
        case "SPECIAL_EVENTS_3":
          return { type: s.SpecialEvents3, name: "Special Events 3" };
        case "SPECIAL_EVENTS_4":
          return { type: s.SpecialEvents4, name: "Special Events 4" };
        case "SPECIAL_EVENTS_5":
          return { type: s.SpecialEvents5, name: "Special Events 5" };
        case "EXPLORE":
        case "EXPLORE_MORE":
          return;
      }
    }
    function d(t) {
      switch (t) {
        case "BUSINESS":
          return s.Business;
        case "ENTERTAINMENT":
          return s.Entertainment;
        case "LIFESTYLE":
          return s.Lifestyle;
        case "NEWS":
          return s.News;
        case "ORGANIZATIONS":
          return s.Organizations;
        case "PEOPLE":
          return s.People;
        case "SPORTS":
          return s.Sports;
        case "SPECIAL_EVENTS":
          return s.SpecialEvents;
        case "SPECIAL_EVENTS_2":
          return s.SpecialEvents2;
        case "SPECIAL_EVENTS_3":
          return s.SpecialEvents3;
        case "SPECIAL_EVENTS_4":
          return s.SpecialEvents4;
        case "SPECIAL_EVENTS_5":
          return s.SpecialEvents5;
        default:
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected category: ",
                    "",
                  ])),
                t,
              )
              .tags("newsletter-directory-category")
              .sendLogs("Unexpected newsletter directory category"),
            s.Business
          );
      }
    }
    function m(e) {
      switch (e) {
        case s.Business:
          return "BUSINESS";
        case s.Entertainment:
          return "ENTERTAINMENT";
        case s.Lifestyle:
          return "LIFESTYLE";
        case s.News:
          return "NEWS";
        case s.Organizations:
          return "ORGANIZATIONS";
        case s.People:
          return "PEOPLE";
        case s.Sports:
          return "SPORTS";
        case s.SpecialEvents:
          return "SPECIAL_EVENTS";
        case s.SpecialEvents2:
          return "SPECIAL_EVENTS_2";
        case s.SpecialEvents3:
          return "SPECIAL_EVENTS_3";
        case s.SpecialEvents4:
          return "SPECIAL_EVENTS_4";
        case s.SpecialEvents5:
          return "SPECIAL_EVENTS_5";
      }
    }
    function p(e) {
      return o("WAWebGetEnumValuesFromConfig").getEnumValuesFromConfig({
        config: e,
        enumCastFunction: function (t) {
          return s.cast(t);
        },
      });
    }
    ((l.NewsletterDirectoryCategoryType = s),
      (l.getNewsletterSectionFromCategoryType = u),
      (l.getNewsletterCategoryFromSection = c),
      (l.getNewsletterDirectoryCategoryTypeFromValue = d),
      (l.getCategoryValueFromEnum = m),
      (l.getNewsletterDirectoryCategoryTypesFromConfig = p));
  },
  98,
);
