__d(
  "WAWebBusinessProfileEdit",
  [
    "WAWebBizLogQplEvents",
    "WAWebBusinessProfileJob",
    "WAWebMerchantComplianceJob",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebBizLogQplEvents").qplPointProfileSave("datasource_start");
      var t = o("WAWebBusinessProfileJob").editBusinessProfile(e),
        n = t.then(function (e) {
          return (
            o("WAWebBizLogQplEvents").qplPointProfileSave("datasource_end"),
            e
          );
        });
      return n;
    }
    function s(e) {
      return o("WAWebMerchantComplianceJob").setMerchantCompliance(e);
    }
    ((l.editBusinessProfile = e), (l.editBusinessCompliance = s));
  },
  98,
);
