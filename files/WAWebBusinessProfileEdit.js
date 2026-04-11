__d(
  "WAWebBusinessProfileEdit",
  [
    "WAWebBizLogQplEvents",
    "WAWebBusinessProfileJob",
    "WAWebMerchantComplianceJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        o("WAWebBizLogQplEvents").qplPointProfileSave("datasource_start");
        var e = o("WAWebBusinessProfileJob").editBusinessProfile(t),
          n = e.then(function (e) {
            return (
              o("WAWebBizLogQplEvents").qplPointProfileSave("datasource_end"),
              e
            );
          });
        return n;
      },
      s = function (t) {
        return o("WAWebMerchantComplianceJob").setMerchantCompliance(t);
      };
    ((l.editBusinessProfile = e), (l.editBusinessCompliance = s));
  },
  98,
);
