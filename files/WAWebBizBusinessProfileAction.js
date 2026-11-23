__d(
  "WAWebBizBusinessProfileAction",
  [
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessProfileCategoriesBridge",
    "WAWebGraphQLProductCatalogGetPublicKeyJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryBusinessProfile",
    "WAWebQueryBusinessProfileWithCompliance",
    "WAWebQueryGetSignedUserInfoJob",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = t
        ? await o(
            "WAWebQueryBusinessProfileWithCompliance",
          ).queryBusinessProfileWithCompliance(e)
        : await o("WAWebQueryBusinessProfile").queryBusinessProfile(e);
      return n;
    }
    function s(e, t) {
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
    function u(e) {
      return o("WAWebRestOperations").runJobsManagerFreeOperation(
        o("WAWebScheduledOperations").ScheduledOperation.GET_PUBLIC_KEY,
        function () {
          return o("WAWebGraphQLProductCatalogGetPublicKeyJob").getPublicKey(e);
        },
        function () {
          return o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilCompleted(
              o("WAWebPersistedJobDefinitions").jobSerializers.getPublicKey(e),
            );
        },
      );
    }
    async function c(e) {
      var t = await o("WAWebRestOperations").runJobsManagerFreeOperation(
          o("WAWebScheduledOperations").ScheduledOperation.GET_SIGNED_USER_INFO,
          function () {
            return o("WAWebQueryGetSignedUserInfoJob").querySignedUserInfo({
              businessJid: e.toString(),
            });
          },
          function () {
            return o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilCompleted(
                o(
                  "WAWebPersistedJobDefinitions",
                ).jobSerializers.getSignedUserInfo(e),
              );
          },
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
    }
    ((l.queryBusinessProfile = e),
      (l.queryBusinessCategories = s),
      (l.queryBusinessPublicKey = u),
      (l.querySignedUserInfo = c));
  },
  98,
);
