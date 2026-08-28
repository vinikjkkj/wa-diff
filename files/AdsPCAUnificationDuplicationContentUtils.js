__d(
  "AdsPCAUnificationDuplicationContentUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = function () {
        return s._(
          /*BTDS*/ "You can use the new test experience for ad creation",
        );
      },
      u = function () {
        return s._(
          /*BTDS*/ "With the new test experience, some settings during ad creation will be different. Ad spend up to a certain amount will be reimbursed.",
        );
      },
      c = function () {
        return s._(/*BTDS*/ "Use the new test experience");
      },
      d = function () {
        return s._(/*BTDS*/ "You cannot duplicate into the test campaign");
      },
      m = function (t) {
        return s._(
          /*BTDS*/ '_j{"ad":"This campaign can\\u2019t be selected because it has a different catalog setup from your ad.","ad_set":"This campaign can\\u2019t be selected because it has a different catalog setup from your ad set."}',
          [s._enum(t ? "ad_set" : "ad", { ad: "ad", ad_set: "ad set" })],
        );
      },
      p = function () {
        return s._(
          /*BTDS*/ "This campaign can\u2019t be selected because it uses a different catalog than your ad.",
        );
      },
      _ = function () {
        return s._(/*BTDS*/ "Ad creation will be different");
      },
      f = function () {
        return s._(
          /*BTDS*/ "From now on, catalog selection will only happen for your campaign and product set selection will only happen for your ad.",
        );
      },
      g = function () {
        return s._(
          /*BTDS*/ "These ads can\u2019t be duplicated together because they use different catalog setups.",
        );
      };
    ((l.adsPCAUnificationDuplicationOptInCardHeader = e),
      (l.adsPCAUnificationDuplicationOptinCardBody = u),
      (l.adsPCAUnificationDuplicationOptinCardButton = c),
      (l.adsPCAUnificationDisableNonUnifiedToUnifiedReparentingLegacyTooltip =
        d),
      (l.adsPCAUnificationDisableNonUnifiedToUnifiedReparentingTooltip = m),
      (l.adsPCAUnificationDisableUnifiedToDifferentCatalogReparentingTooltip =
        p),
      (l.adsPCAUnificationDuplicationMigrationHeader = _),
      (l.adsPCAUnificationDuplicationMigrationBody = f),
      (l.adsPCAUnificationDuplicationNotAllowedForMultipleSelection = g));
  },
  226,
);
