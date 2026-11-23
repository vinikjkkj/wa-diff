__d(
  "CometAdPrefsWAIST26ContentUtils",
  [
    "fbt",
    "AdsPrefsWAISTSingularGender$FbtEnum",
    "CometAdPrefsWAISTTargetWithClickLogger.react",
    "FDSLink.react",
    "FDSText.react",
    "XCometVanityURLControllerRouteBuilder",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        EDU_ASSOCIATE_DEGREE: "associate",
        EDU_COLLEGE_ALUMNUS: "bachelor",
        EDU_DOCTORATE_DEGREE: "doctorate",
        EDU_MASTER_DEGREE: "master",
        EDU_PROFESSIONAL_DEGREE: "professional",
      },
      d = {
        ANY: r("AdsPrefsWAISTSingularGender$FbtEnum").people,
        FEMALE: r("AdsPrefsWAISTSingularGender$FbtEnum").female,
        MALE: r("AdsPrefsWAISTSingularGender$FbtEnum").male,
      },
      m = "/help/794535777607370?ref=learn_more_ipl",
      p = "/help/597339877966751?ref=learn_more_ipl",
      _ = 12,
      f = 1,
      g = 53,
      h = function (t) {
        return u.jsx("span", {
          className:
            "x1rg5ohu x16em4ew x6ikm8r x10wlt62 xlyipyv x3ajldb xuxw1ft",
          title: t,
          children: t,
        });
      };
    function y(e, t, n) {
      var o = r("XCometVanityURLControllerRouteBuilder").buildURL({
        vanity: t,
      });
      return u.jsx(r("CometAdPrefsWAISTTargetWithClickLogger.react"), {
        entity: "open_advertiser_page_link",
        entityID: t,
        parentEntity: "detail_page",
        targetingType: n,
        url: o,
        children: u.jsx(r("FDSText.react"), {
          color: "primary",
          type: "bodyLink4",
          children: e,
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = function (t) {
        switch (t) {
          case "learn_more_bct":
          case "learn_more_actionable_insights":
          case "learn_more_interest":
            return "#interest";
          case "learn_more_dfca":
            return "#lists";
          case "learn_more_dpa":
          case "learn_more_wca":
            return "#website";
          case "learn_more_offline_conversion":
            return "#offline";
          case "learn_more_lookalike":
            return "#lookalike";
          case "learn_more_location":
            return "#location";
          default:
            return "";
        }
      },
      b = function (t) {
        var e = m + C(t);
        return u.jsx(r("FDSLink.react"), {
          href: e,
          target: "_blank",
          children: u.jsx(r("FDSText.react"), {
            color: "blueLink",
            type: "body4",
            children: s._(/*BTDS*/ ""),
          }),
        });
      },
      v = function (t, n) {
        var e = m + C(t);
        return u.jsx(r("FDSLink.react"), {
          href: e,
          target: "_blank",
          children:
            n === "body4"
              ? u.jsx(r("FDSText.react"), {
                  color: "blueLink",
                  type: "body4",
                  children: s._(/*BTDS*/ ""),
                })
              : u.jsx(r("FDSText.react"), {
                  color: "blueLink",
                  type: "body3",
                  children: s._(/*BTDS*/ ""),
                }),
        });
      };
    ((l.EDUSTATUS_TYPE_MAPPING = c),
      (l.GENDER_TYPE_MAPPING = d),
      (l.HELP_CENTER_PATH = m),
      (l.HASHED_LIST_HELP_CENTER_PATH = p),
      (l.AGE_INDEX_OFFSET = _),
      (l.MIN_AGE_INDEX = f),
      (l.MAX_AGE_INDEX = g),
      (l.getTruncatedAdvertiserName = h),
      (l.getAdvertiserPageLink = y),
      (l.getLearnHowWeUseTheseListsInFbt = b),
      (l.getLearnMoreLinkInFbt = v));
  },
  226,
);
