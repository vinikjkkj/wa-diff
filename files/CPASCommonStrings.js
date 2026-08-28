__d(
  "CPASCommonStrings",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsFetaStatusData",
    "AdsUniqueMetricsID",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return r("AdsFetaStatusData").is_feta_account
        ? s._(/*BTDS*/ "{=m0}", [
            s._implicitParam(
              "=m0",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                children: s._(/*BTDS*/ "Meta Accounts"),
              }),
            ),
          ])
        : s._(/*BTDS*/ "{=m0}", [
            s._implicitParam(
              "=m0",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                children: s._(/*BTDS*/ "Accounts Center accounts"),
              }),
            ),
          ]);
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.metaAccountsLink = c));
  },
  226,
);
