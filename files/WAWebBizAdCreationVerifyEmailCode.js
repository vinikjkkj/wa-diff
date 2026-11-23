__d(
  "WAWebBizAdCreationVerifyEmailCode",
  [
    "fbt",
    "FBLogger",
    "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
    "WAWebBizAdCreationEmailVerificationStrings",
    "WAWebCommonAdsTypes",
    "WAWebFetchAdAccountToken",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    async function e(e) {
      try {
        var t = await o(
          "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
        ).sendGetAccessTokenAndSessionCookiesRPC({ codeElementValue: e });
        switch (t.name) {
          case "GetAccessTokenAndSessionCookiesResponseSuccess": {
            var n,
              a =
                ((n = t.value.tokenType) == null ? void 0 : n.elementValue) !==
                "Strong";
            if (a)
              return (
                r("FBLogger")("wa_ctwa_web").mustfix(
                  "verifyEmailCodeAndPersistToken received weak token after email verification",
                ),
                {
                  error: o(
                    "WAWebBizAdCreationEmailVerificationStrings",
                  ).getEmailVerificationGenericErrorText(),
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
            return {
              error: r("justknobx")._("8427")
                ? s._(/*BTDS*/ "")
                : s._(/*BTDS*/ ""),
              success: !1,
            };
          case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
            return {
              error: o(
                "WAWebBizAdCreationEmailVerificationStrings",
              ).getEmailVerificationGenericErrorText(),
              success: !1,
            };
          default:
            return {
              error: o(
                "WAWebBizAdCreationEmailVerificationStrings",
              ).getEmailVerificationGenericErrorText(),
              success: !1,
            };
        }
      } catch (e) {
        return (
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("verifyEmailCodeAndPersistToken RPC call failed"),
          {
            error: o(
              "WAWebBizAdCreationEmailVerificationStrings",
            ).getEmailVerificationGenericErrorText(),
            success: !1,
          }
        );
      }
    }
    l.verifyEmailCodeAndPersistToken = e;
  },
  226,
);
