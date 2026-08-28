__d(
  "AdsVerificationNoticeContentUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e.hasPageAdminPermissions,
        n = e.pageName,
        r = e.type;
      return d({ hasPageAdminPermissions: t, pageName: n, type: r });
    }
    function u(e) {
      return e === "beneficiary"
        ? s._(/*BTDS*/ "Verify new advertiser")
        : s._(/*BTDS*/ "Verify new payer");
    }
    function c(e) {
      var t = e.type;
      return t === "beneficiary"
        ? s._(
            /*BTDS*/ "Before you can publish your ads, you need to verify the advertiser.",
          )
        : s._(
            /*BTDS*/ "Before you can publish your ads, you need to verify the payer.",
          );
    }
    function d(e) {
      var t = e.hasPageAdminPermissions,
        n = e.pageName,
        r = e.type;
      return t
        ? r === "beneficiary"
          ? s._(
              /*BTDS*/ "Due to Taiwan regulations, verified advertiser and payer information is required to run ads in Taiwan. Start verifying the advertiser in Page setup.",
            )
          : s._(
              /*BTDS*/ "Due to Taiwan regulations, verified advertiser and payer information is required to run ads in Taiwan. Start verifying the payer in Page setup.",
            )
        : r === "beneficiary"
          ? s._(
              /*BTDS*/ "Due to Taiwan regulations, verified advertiser and payer information is required to run ads in Taiwan. Contact an admin of the {pageName} Facebook Page to verify the advertiser.",
              [s._param("pageName", n)],
            )
          : s._(
              /*BTDS*/ "Due to Taiwan regulations, verified advertiser and payer information is required to run ads in Taiwan. Contact an admin of the {pageName} Facebook Page to verify the payer.",
              [s._param("pageName", n)],
            );
    }
    ((l.getVerificationNoticeContent = e),
      (l.getVerifyNewIdentityButtonContent = u),
      (l.getTaiwanFinservContent = c));
  },
  226,
);
