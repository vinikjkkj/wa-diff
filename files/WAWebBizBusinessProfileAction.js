__d(
  "WAWebBizBusinessProfileAction",
  [
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessProfileCategoriesBridge",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryBusinessProfile",
    "WAWebQueryBusinessProfileWithCompliance",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t
            ? yield o(
                "WAWebQueryBusinessProfileWithCompliance",
              ).queryBusinessProfileWithCompliance(e)
            : yield o("WAWebQueryBusinessProfile").queryBusinessProfile(e);
          return n;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return e ===
        o("WAWebBusinessCategoriesResultModel").BUSINESS_CATEGORY_EMPTY_STR_ID
        ? o("WAWebBusinessProfileCategoriesBridge").queryBusinessCategories(
            "",
            t,
          )
        : o("WAWebBusinessProfileCategoriesBridge").queryBusinessCategories(
            e,
            t,
          );
    }
    function c(e) {
      return o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .waitUntilCompleted(
          o("WAWebPersistedJobDefinitions").jobSerializers.getPublicKey(e),
        );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilCompleted(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.getSignedUserInfo(e),
              ),
            n = t.businessDomain,
            a = t.phoneNumber,
            i = t.phoneNumberSignature,
            l = t.phoneNumberSignatureExpiration;
          if (a == null || l == null || i == null || n == null)
            throw r("err")("Unexpected null or undefined");
          return {
            phoneNumber: a,
            phoneNumberSignature: i,
            phoneNumberSignatureExpiration: l,
            businessDomain: n,
          };
        })),
        m.apply(this, arguments)
      );
    }
    ((l.queryBusinessProfile = e),
      (l.queryBusinessCategories = u),
      (l.queryBusinessPublicKey = c),
      (l.querySignedUserInfo = d));
  },
  98,
);
