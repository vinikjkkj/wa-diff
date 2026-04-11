__d(
  "WAWebQueryBusinessProfileWithCompliance",
  [
    "Promise",
    "WAWebBackendErrors",
    "WAWebMerchantComplianceJob",
    "WAWebQueryBusinessProfile",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = (e || (e = n("Promise")))
        .all([
          o("WAWebQueryBusinessProfile").queryBusinessProfile(t),
          o("WAWebMerchantComplianceJob").getMerchantCompliance(t),
        ])
        .then(u);
      return o("WAWebBackendErrors").attachErrorLogger(
        r,
        "Query business profile with compliance failed",
      );
    }
    function u(e) {
      var t = e[0],
        n = e[1];
      return t.map(function (e, t) {
        return babelHelpers.extends({}, e, {
          profile: babelHelpers.extends({}, e.profile, {
            legal_entity_details: n[t],
          }),
        });
      });
    }
    l.queryBusinessProfileWithCompliance = s;
  },
  98,
);
