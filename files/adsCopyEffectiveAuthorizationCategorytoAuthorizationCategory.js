__d(
  "adsCopyEffectiveAuthorizationCategorytoAuthorizationCategory",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      e &&
        e.creative &&
        ((e.creative.authorization_category =
          e.creative.effective_authorization_category),
        delete e.creative.effective_authorization_category);
    }
    i.default = e;
  },
  66,
);
