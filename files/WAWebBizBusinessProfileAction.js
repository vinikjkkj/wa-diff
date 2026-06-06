__d(
  "WAWebBizBusinessProfileAction",
  [
    "WAPromiseDelays",
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessProfileCategoriesBridge",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileJob",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryBusinessProfile",
    "WAWebQueryBusinessProfileWithCompliance",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "cr:3128",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!r("gkx")("26258")) {
            var a,
              i =
                (a =
                  n("cr:3128") == null
                    ? void 0
                    : n("cr:3128").debugSmbConfigs.delayBusinessProfileQuery) !=
                null
                  ? a
                  : 0;
            i && (yield o("WAPromiseDelays").delayMs(i * 1e3));
          }
          var l = t
            ? yield o(
                "WAWebQueryBusinessProfileWithCompliance",
              ).queryBusinessProfileWithCompliance(e)
            : yield o("WAWebQueryBusinessProfile").queryBusinessProfile(e);
          if (!r("gkx")("26258")) {
            var s,
              u =
                n("cr:3128") == null
                  ? void 0
                  : n("cr:3128").debugSmbConfigs.mockBusinessProfileId,
              c =
                n("cr:3128") == null ||
                (s = n("cr:3128").debugSmbConfigs) == null
                  ? void 0
                  : s.mockBusinessProfileQueryPayload;
            c &&
              l[0].wid.equals(u) &&
              (l[0].profile = babelHelpers.extends({}, l[0].profile, c));
          }
          return l;
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
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebBusinessProfileJob").updateCartEnabled(e),
            n = o(
              "WAWebBusinessProfileCollection",
            ).BusinessProfileCollection.getValid(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            ),
            r = n == null ? void 0 : n.profileOptions;
          n &&
            r &&
            ((r.cartEnabled = t),
            o("WAWebBusinessProfileCollection").BusinessProfileCollection.add(
              n,
              { merge: !0 },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .waitUntilCompleted(
          o("WAWebPersistedJobDefinitions").jobSerializers.getPublicKey(e),
        );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    ((l.queryBusinessProfile = e),
      (l.queryBusinessCategories = u),
      (l.updateCartEnabled = c),
      (l.queryBusinessPublicKey = m),
      (l.querySignedUserInfo = p));
  },
  98,
);
