__d(
  "GraphQLGender",
  ["GenderConst", "IntlVariations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.toIntlVariationsEnum = function () {
          var e = this.$1;
          if (e == null) return r("IntlVariations").GENDER_UNKNOWN;
          switch (e) {
            case "MALE":
              return r("IntlVariations").GENDER_MALE;
            case "FEMALE":
              return r("IntlVariations").GENDER_FEMALE;
            default:
              return r("IntlVariations").GENDER_UNKNOWN;
          }
        }),
        (t.toGenderConstEnum = function () {
          var e = this.$1,
            t = this.$2 || {},
            n = t.isPlural || !1,
            o = t.isGuess || !1;
          switch (e) {
            case "MALE":
              return n
                ? r("GenderConst").MALE_PLURAL
                : o
                  ? r("GenderConst").MALE_SINGULAR_GUESS
                  : r("GenderConst").MALE_SINGULAR;
            case "FEMALE":
              return n
                ? r("GenderConst").FEMALE_PLURAL
                : o
                  ? r("GenderConst").FEMALE_SINGULAR_GUESS
                  : r("GenderConst").FEMALE_SINGULAR;
            case "NEUTER":
              return n
                ? r("GenderConst").NEUTER_PLURAL
                : r("GenderConst").NEUTER_SINGULAR;
            default:
              return n
                ? r("GenderConst").UNKNOWN_PLURAL
                : r("GenderConst").UNKNOWN_SINGULAR;
          }
        }),
        (e.fromGenderConstEnum = function (n) {
          switch (n) {
            case r("GenderConst").FEMALE_SINGULAR:
              return new e("FEMALE");
            case r("GenderConst").MALE_SINGULAR:
              return new e("MALE");
            case r("GenderConst").FEMALE_SINGULAR_GUESS:
              return new e("FEMALE", { isGuess: !0 });
            case r("GenderConst").MALE_SINGULAR_GUESS:
              return new e("MALE", { isGuess: !0 });
            case r("GenderConst").NEUTER_SINGULAR:
              return new e("NEUTER");
            case r("GenderConst").UNKNOWN_SINGULAR:
              return new e("UNKNOWN");
            case r("GenderConst").FEMALE_PLURAL:
              return new e("FEMALE", { isPlural: !0 });
            case r("GenderConst").MALE_PLURAL:
              return new e("MALE", { isPlural: !0 });
            case r("GenderConst").NEUTER_PLURAL:
              return new e("NEUTER", { isPlural: !0 });
            case r("GenderConst").UNKNOWN_PLURAL:
              return new e("UNKNOWN", { isPlural: !0 });
            default:
              return new e("UNKNOWN");
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
