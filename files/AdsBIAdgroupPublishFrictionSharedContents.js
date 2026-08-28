__d(
  "AdsBIAdgroupPublishFrictionSharedContents",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Authentication needed"),
      u = s._(/*BTDS*/ "Start authentication"),
      c = s._(
        /*BTDS*/ "Due to recent activity like login location, we think someone may have tried to access your account without permission. To be safe, please complete authentication to run this ad. Then, you\u2019ll need to review and publish it.",
      ),
      d = s._(/*BTDS*/ "Ad review needed"),
      m = s._(
        /*BTDS*/ "Although you\u2019re authenticated, it\u2019s still possible that someone suspicious tried to access your account. To be safe, please review and edit your ad(s) if needed, paying close attention to the budget, URLs, and start and end dates.",
      ),
      p = s._(/*BTDS*/ "Review and publish");
    ((l.TITLE_AUTH_REQUIRED_FBT = e),
      (l.CTA_START_AUTH_FBT = u),
      (l.DELIVERY_CELL_AUTH_REQUIRED_EXPLANATION_FBT = c),
      (l.HOVER_CARD_TITLE_REVIEW_ADGROUP_AFTER_AUTH = d),
      (l.HOVER_CARD_BODY_REVIEW_ADGROUP_AFTER_AUTH = m),
      (l.HOVER_CARD_CTA_LABEL_REVIEW_ADGROUP_AFTER_AUTH = p));
  },
  226,
);
