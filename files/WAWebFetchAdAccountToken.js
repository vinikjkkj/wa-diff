__d(
  "WAWebFetchAdAccountToken",
  [
    "Promise",
    "WACustomError",
    "WAPromiseTimeout",
    "WAResolvable",
    "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCommonAdsTypes",
    "WAWebFailureErrorCodes",
    "WAWebGraphQLServerError",
    "WAWebNoop",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsCTWA",
    "justknobx",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("qpl")._(1029388606, "2771");
    function u(e) {
      switch (e == null ? void 0 : e.elementValue) {
        case "Weak":
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
        case "Strong":
        default:
          return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
      }
    }
    var c = null,
      d = null,
      m = null,
      p = 0,
      _ = 1;
    function f(e) {
      if (c != null && e !== !0) return c.promise;
      var t = d;
      if (t != null && v()) return t;
      var n = new (o("WAResolvable").Resolvable)();
      c = n;
      var r = o("WAWebUserPrefsCTWA").getAdAccountToken();
      return e !== !0 && r != null && r.bp_id !== ""
        ? ((m = r), n.resolve({ token: r, type: "success" }), n.promise)
        : (g(n), n.promise);
    }
    function g(e) {
      var t = e.promise,
        n = p;
      d = t;
      var a = function () {
        d === t && (d = null);
      };
      (o("WAPromiseTimeout")
        .promiseTimeout(t.then(r("WAWebNoop"), r("WAWebNoop")), M())
        .catch(function (t) {
          t instanceof o("WACustomError").TimeoutError && (a(), v() && h(e, n));
        }),
        o("WAWebQplFlowWrapper").QPL.markerStart(s),
        o("WAWebQplFlowWrapper").QPL.markerPoint(s, "request_token_start"));
      var i = { retriedAfterIncorrectNonce: !1 };
      T(_, i)
        .then(function (t) {
          (a(), y(e, t, i, n));
        })
        .catch(function (t) {
          (a(), C(e, t));
        });
    }
    function h(e, t) {
      var n = p !== t ? m : null;
      if ((b(e), n == null)) {
        (N("timeout"), e.resolve({ type: "error" }));
        return;
      }
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
        bool: { timed_out: !0 },
      }),
        P(),
        e.resolve({ token: n, type: "success" }));
    }
    function y(e, t, n, r) {
      var a = c == null || c === e;
      if (e.isSettled) {
        t.type === "success" && a && p === r && E(t.token);
        return;
      }
      (x(t, n),
        t.type === "success"
          ? a &&
            (o("WAWebUserPrefsCTWA").setAdAccountToken(t.token),
            (m = t.token),
            p++,
            (c = e))
          : (t.type, b(e)),
        e.resolve(t));
    }
    function C(e, t) {
      e.isSettled || (N("error"), b(e), e.reject(t));
    }
    function b(e) {
      c === e && (c = null);
    }
    function v() {
      return r("justknobx")._("6864");
    }
    function S(t) {
      if (!v()) return (L(), f(!0));
      var r = R(t);
      return r != null
        ? (e || (e = n("Promise"))).resolve(r)
        : (L(),
          f(!0).then(
            function (e) {
              var n;
              return (n = R(t)) != null ? n : e;
            },
            function (e) {
              var n = R(t);
              if (n == null) throw e;
              return n;
            },
          ));
    }
    function R(e) {
      var t = m;
      return t != null && t.bp_id === e.bp_id && t.token !== e.token
        ? { token: t, type: "success" }
        : null;
    }
    function L() {
      ((c = null), (m = null), o("WAWebUserPrefsCTWA").clearAdAccountToken());
    }
    function E(e) {
      (o("WAWebUserPrefsCTWA").setAdAccountToken(e), (m = e), p++);
      var t = new (o("WAResolvable").Resolvable)();
      (t.resolve({ token: e, type: "success" }), (c = t));
    }
    function k(e) {
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
    function I(e) {
      return e instanceof o("WAWebGraphQLServerError").GraphQLServerError
        ? e.source.errors.some(function (e) {
            var t = o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e.code);
            return (
              t ===
                o("WAWebGraphQLServerError").GraphQLErrorCode
                  .BUSINESS_BANHAMMERED ||
              t ===
                o("WAWebGraphQLServerError").GraphQLErrorCode
                  .AD_ACCOUNT_LINKING_DISABLED
            );
          })
        : !1;
    }
    function T(e, t) {
      return o("WAWebCTWABizAccessTokenNonceManager")
        .fetchNonce()
        .then(function (n) {
          switch (n.type) {
            case "error":
            case "recovery-required":
              return n;
            default:
              return (
                n.type,
                D(n.nonce).then(function (n) {
                  return n.type === "incorrect-nonce" && e > 0
                    ? ((t.retriedAfterIncorrectNonce = !0),
                      T(e - 1, t).then(function (e) {
                        return e.type === "success" ? e : (e.type, n);
                      }))
                    : n;
                })
              );
          }
        });
    }
    function D(e) {
      return (
        o("WAWebCTWABizAccessTokenNonceManager").markNonceAsUsed(),
        o("WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC")
          .sendGetAccessTokenAndSessionCookiesRPC({ codeElementValue: e })
          .then(function (e) {
            switch (e.name) {
              case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
                return { type: "too-many-attempts" };
              case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
                return { type: "incorrect-nonce" };
              case "GetAccessTokenAndSessionCookiesResponseError":
                return { type: "error" };
              default:
                return (
                  e.name,
                  {
                    token: o("WAWebCommonAdsTypes").asAdAccountToken({
                      bp_id: e.value.businessPersonId,
                      token: e.value.accessTokenElementValue,
                      tokenStrength: u(e.value.tokenType),
                      type: "WAA",
                    }),
                    type: "success",
                  }
                );
            }
          })
      );
    }
    function x(e, t) {
      (t.retriedAfterIncorrectNonce &&
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
          bool: { incorrect_nonce_retried: !0 },
        }),
        e.type === "success" ? P() : N(e.type));
    }
    function $(e) {
      (o("WAWebQplFlowWrapper").QPL.markerPoint(s, "request_token_end"),
        o("WAWebQplFlowWrapper").QPL.markerEnd(s, e));
    }
    function P() {
      $(2);
    }
    function N(e) {
      (o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
        string: { failure_reason: e },
      }),
        $(3));
    }
    function M() {
      return 2 * w() * 1e3;
    }
    function w() {
      return (
        o(
          "WAWebCTWABizAccessTokenNonceManager",
        ).getMaximumNonceFetchTimeoutSeconds() *
        (_ + 1)
      );
    }
    ((l.FETCH_AD_ACCOUNT_TOKEN_MAX_RETRIES = _),
      (l.fetchToken = f),
      (l.refreshRejectedToken = S),
      (l.markTokenAsInvalid = L),
      (l.setToken = E),
      (l.hasGraphQLAuthError = k),
      (l.hasTerminalIntegrityDenial = I),
      (l.getMaximumAdAccountFetchTimeoutSeconds = w));
  },
  98,
);
