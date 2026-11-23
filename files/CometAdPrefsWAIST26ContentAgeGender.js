__d(
  "CometAdPrefsWAIST26ContentAgeGender",
  [
    "fbt",
    "AdsPrefsWAISTGender",
    "AdsPrefsWAISTSingularGender$FbtEnum",
    "CometAdPrefsWAIST26ContentUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, r) {
        var e = o("CometAdPrefsWAIST26ContentUtils").GENDER_TYPE_MAPPING[r],
          a =
            n === o("CometAdPrefsWAIST26ContentUtils").MAX_AGE_INDEX ? null : n,
          i =
            t === o("CometAdPrefsWAIST26ContentUtils").MIN_AGE_INDEX ? null : t;
        return a === i && i != null
          ? m(e, i)
          : i != null && a != null
            ? p(e, i, a)
            : a != null
              ? _(e, a)
              : f(
                  e,
                  i != null
                    ? i
                    : o("CometAdPrefsWAIST26ContentUtils").MIN_AGE_INDEX,
                );
      },
      u = function (t, n) {
        var e = r("getJSEnumSafe")(r("AdsPrefsWAISTGender"), t);
        return e === "people" && n == null
          ? null
          : s._(/*BTDS*/ "", [
              s._param("gender paragraph", c(t)),
              s._param("age paragraph", d(n)),
              s._param(
                "learn more link",
                o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
                  "learn_more_age_gender",
                ),
              ),
            ]);
      },
      c = function (t) {
        var e = r("getJSEnumSafe")(r("AdsPrefsWAISTGender"), t);
        return e === "people"
          ? null
          : s._(/*BTDS*/ "", [
              s._enum(e, { females: "female", males: "male" }),
            ]);
      },
      d = function (t) {
        return t == null ? null : s._(/*BTDS*/ "", [s._param("birthday", t)]);
      },
      m = function (t, n) {
        return t === r("AdsPrefsWAISTSingularGender$FbtEnum").people
          ? s._(/*BTDS*/ "", [
              s._param(
                "target age",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._enum(t, r("AdsPrefsWAISTSingularGender$FbtEnum")),
              s._param(
                "target age",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ]);
      },
      p = function (t, n, a) {
        return t === r("AdsPrefsWAISTSingularGender$FbtEnum").people
          ? s._(/*BTDS*/ "", [
              s._param(
                "target age min",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
              s._param(
                "target age max",
                a + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._enum(t, r("AdsPrefsWAISTSingularGender$FbtEnum")),
              s._param(
                "target age min",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
              s._param(
                "target age max",
                a + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ]);
      },
      _ = function (t, n) {
        return t === r("AdsPrefsWAISTSingularGender$FbtEnum").people
          ? s._(/*BTDS*/ "", [
              s._param(
                "target age max",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._enum(t, r("AdsPrefsWAISTSingularGender$FbtEnum")),
              s._param(
                "target age max",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ]);
      },
      f = function (t, n) {
        return t === r("AdsPrefsWAISTSingularGender$FbtEnum").people
          ? s._(/*BTDS*/ "", [
              s._param(
                "target age min",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ])
          : s._(/*BTDS*/ "", [
              s._enum(t, r("AdsPrefsWAISTSingularGender$FbtEnum")),
              s._param(
                "target age min",
                n + o("CometAdPrefsWAIST26ContentUtils").AGE_INDEX_OFFSET,
              ),
            ]);
      };
    ((l.getLandingPageAgeOrAgeRangeGenderTitle = e),
      (l.getAgeGenderDetailsParagraph = u));
  },
  226,
);
