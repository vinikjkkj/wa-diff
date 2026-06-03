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
                      error: s._(
                        /*BTDS*/ "Something went wrong. Please try again later.",
                      ),
                      success: !1,
                    }
                  );
                var i = {
                  bp_id: t.value.businessPersonId,
                  token: t.value.accessTokenElementValue,
                  tokenStrength: o("WAWebCommonAdsTypes")
                    .WAAIdentityTokenStrengthEnum.STRONG,
                  type: "WAA",
                };
                return (
                  o("WAWebFetchAdAccountToken").setToken(i),
                  { success: !0, token: i }
                );
              }
              case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
                return { error: s._(/*BTDS*/ "Invalid code"), success: !1 };
              case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
                return {
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                  success: !1,
                };
              default:
                return {
                  error: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                  success: !1,
                };
            }
          } catch (e) {
            return (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("verifyEmailCodeAndPersistToken RPC call failed"),
              {
                error: s._(
                  /*BTDS*/ "Something went wrong. Please try again later.",
                ),
                success: !1,
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
