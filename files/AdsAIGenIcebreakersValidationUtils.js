__d(
  "AdsAIGenIcebreakersValidationUtils",
  [
    "ClickToMessageAIGenEligibilityUtils",
    "isFalsey",
    "isStringNotNullAndNotWhitespaceOnly",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        s(e == null ? void 0 : e.icebreakers) &&
        r("isTruthy")(e == null ? void 0 : e.isEligible)
      );
    }
    function s(e) {
      return e === null;
    }
    function u(e, t) {
      return r("isFalsey")(e) && r("isTruthy")(t);
    }
    function c(e, t, n, a, i, l, s, c, d) {
      return (
        !r("isStringNotNullAndNotWhitespaceOnly")(e) ||
        u(i, l) ||
        !o("ClickToMessageAIGenEligibilityUtils").shouldEnableAIGenIcebreakers(
          a,
          n,
          t,
          s,
          null,
          d,
        ) ||
        r("isTruthy")(c)
      );
    }
    ((l.didIcebreakersFetchFailForEligible = e),
      (l.didIcebreakersFetchFailOrNotEligible = s),
      (l.isToggleTurnedOffDuringAIGenIBFetch = u),
      (l.didAIGenIBEligiblityChangeDuringAIGenIBFetch = c));
  },
  98,
);
