__d(
  "WAWebBizAdCreationVerifyEmailCode",
  [
    "fbt",
    "FBLogger",
    "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
    "WAWebCommonAdsTypes",
    "WAWebFetchAdAccountToken",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
              "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
            ).sendGetAccessTokenAndSessionCookiesRPC({ codeElementValue: e });
            switch (t.name) {
              case "GetAccessTokenAndSessionCookiesResponseSuccess": {
                var n,
                  a =
                    ((n = t.value.tokenType) == null
                      ? void 0
                      : n.elementValue) !== "Strong";
                if (a)
                  return (
                    r("FBLogger")("wa_ctwa_web").mustfix(
                      "verifyEmailCodeAndPersistToken received weak token after email verification",
                    ),
                    {
                      success: !1,
                      error: s._(
                        /*BTDS*/ "Something went wrong. Please try again later.",
                      ),
                    }
                  );
                var i = {
                  type: "WAA",
                  token: t.value.accessTokenElementValue,
                  bp_id: t.value.businessPersonId,
                  tokenStrength: o("WAWebCommonAdsTypes")
                    .WAAIdentityTokenStrengthEnum.STRONG,
                };
                return (
                  o("WAWebFetchAdAccountToken").setToken(i),
                  { success: !0, token: i }
                );
              }
              case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
                return { success: !1, error: s._(/*BTDS*/ "Invalid code") };
              case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
                return {
                  success: !1,
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                };
              default:
                return {
                  success: !1,
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                };
            }
          } catch (e) {
            return (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("verifyEmailCodeAndPersistToken RPC call failed"),
              {
                success: !1,
                error: s._(
                  /*BTDS*/ "Something went wrong. Please try again later.",
                ),
              }
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.verifyEmailCodeAndPersistToken = e;
  },
  226,
);
