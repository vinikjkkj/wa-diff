__d(
  "WAWebFetchAdAccountToken",
  [
    "WAResolvable",
    "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCommonAdsTypes",
    "WAWebFailureErrorCodes",
    "WAWebGraphQLServerError",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsCTWA",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(1029388606, "2771");
    function s(e) {
      switch (e == null ? void 0 : e.elementValue) {
        case "Weak":
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
        case "Strong":
        default:
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
      }
    }
    var u = null,
      c = 1;
    function d(t) {
      if (u != null) {
        if (t !== !0) return u.promise;
        u = null;
      }
      var n = (u = new (o("WAResolvable").Resolvable)()),
        r = o("WAWebUserPrefsCTWA").getAdAccountToken();
      return r != null && r.bp_id !== "" && t !== !0
        ? (n.resolve({ type: "success", token: r }), n.promise)
        : (o("WAWebQplFlowWrapper").QPL.markerStart(e),
          o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_token_start"),
          f(c)
            .then(function (e) {
              (e.type === "success"
                ? o("WAWebUserPrefsCTWA").setAdAccountToken(e.token)
                : (e.type, (u = null)),
                n.resolve(e));
            })
            .catch(function (e) {
              ((u = null), n.reject(e));
            }),
          n.promise);
    }
    function m() {
      ((u = null), o("WAWebUserPrefsCTWA").clearAdAccountToken());
    }
    function p(e) {
      o("WAWebUserPrefsCTWA").setAdAccountToken(e);
      var t = new (o("WAResolvable").Resolvable)();
      (t.resolve({ type: "success", token: e }), (u = t));
    }
    function _(e) {
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
        var t = e.source.errors.some(function (e) {
          return (
            o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e.code) ===
              o("WAWebGraphQLServerError").GraphQLErrorCode
                .INVALID_ACCESS_TOKEN ||
            e.code ===
              o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE
          );
        });
        return t;
      }
      return !1;
    }
    function f(e) {
      return o("WAWebCTWABizAccessTokenNonceManager")
        .fetchNonce()
        .then(function (t) {
          switch (t.type) {
            case "error":
            case "recovery-required":
              return t;
            default:
              return (
                t.type,
                g(t.nonce).then(function (t) {
                  return t.type === "incorrect-nonce" && e > 0
                    ? f(e - 1).then(function (e) {
                        return e.type === "success" ? e : (e.type, t);
                      })
                    : t;
                })
              );
          }
        });
    }
    function g(e) {
      return (
        o("WAWebCTWABizAccessTokenNonceManager").markNonceAsUsed(),
        o("WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC")
          .sendGetAccessTokenAndSessionCookiesRPC({ codeElementValue: e })
          .then(function (e) {
            switch (e.name) {
              case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
                return (C(), { type: "too-many-attempts" });
              case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
                return (C(), { type: "incorrect-nonce" });
              case "GetAccessTokenAndSessionCookiesResponseError":
                return (C(), { type: "error" });
              default:
                return (
                  e.name,
                  y(),
                  {
                    type: "success",
                    token: o("WAWebCommonAdsTypes").asAdAccountToken(
                      e.value.accessTokenElementValue,
                      e.value.businessPersonId,
                      "WAA",
                      s(e.value.tokenType),
                    ),
                  }
                );
            }
          })
          .catch(function (e) {
            throw (C(), e);
          })
      );
    }
    function h(t) {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_token_end"),
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, t));
    }
    function y() {
      h(2);
    }
    function C() {
      h(3);
    }
    function b() {
      return (
        o(
          "WAWebCTWABizAccessTokenNonceManager",
        ).getMaximumNonceFetchTimeoutSeconds() *
        (c + 1)
      );
    }
    ((l.FETCH_AD_ACCOUNT_TOKEN_MAX_RETRIES = c),
      (l.fetchToken = d),
      (l.markTokenAsInvalid = m),
      (l.setToken = p),
      (l.hasGraphQLAuthError = _),
      (l.getMaximumAdAccountFetchTimeoutSeconds = b));
  },
  98,
);
