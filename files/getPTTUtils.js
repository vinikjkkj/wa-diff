__d(
  "getPTTUtils",
  [
    "FBPayAuthLibraryCommon",
    "FBPayCometBase64URL",
    "GetServerEncryptionKey",
    "PaymentsCometServerEncryptionKeyCacheContext",
    "PaymentsCometTransactionHubStrings",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "react",
    "react-compiler-runtime",
    "usePaymentsCometGetServerEncryptionKeyMutation",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext,
      u = 3;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = r("usePaymentsCometGetServerEncryptionKeyMutation")(),
        a = s(r("PaymentsCometServerEncryptionKeyCacheContext")),
        i;
      return (
        t[0] !== a || t[1] !== n || t[2] !== e
          ? ((i = function (i, l, s, c, d, m, p, _, f, g, h) {
              f == null || f.logClientLoadPaysecInit("get_encryption_key");
              var t = {
                  actor_id: g,
                  client_mutation_id: r("uuidv4")(),
                  device_id: "device_id",
                  fetch_unified_wallet_key: h != null ? !0 : null,
                  fetch_unified_wallet_key_under_target_vc:
                    h != null ? !0 : null,
                  one_time_checkout_input: p,
                  payment_type: i != null ? i : "FBPAY_HUB",
                  receiver_id: d,
                  session_id: m,
                  target_account_id: l,
                  xe_profile_identifier: h,
                },
                y = function (l) {
                  n(
                    t,
                    function (n, i) {
                      r("promiseDone")(
                        o("FBPayAuthLibraryCommon").getCryptoKeyFromCert(
                          n,
                          e === !0 || i,
                          f,
                        ),
                        function (e) {
                          (f == null ||
                            f.logClientLoadPaysecSuccess(
                              "get_encryption_key",
                              void 0,
                              void 0,
                            ),
                            s(e));
                        },
                        function (e) {
                          if ((a.removeResult(t), l === 1)) {
                            var n = String(e);
                            (f == null ||
                              f.logClientLoadPaysecFail("get_encryption_key", {
                                error_message: "Retries all failed: " + n,
                              }),
                              c(
                                o(
                                  "PaymentsCometTransactionHubStrings",
                                ).convertGenericUserFacingError(e),
                              ));
                          } else y(l - 1);
                        },
                      );
                    },
                    function (e) {
                      if (
                        (_ == null ||
                          _.logClientAddDebugAtomic(
                            {
                              debug_step:
                                "usePaymentsCometGetServerPublicCryptoKey_fail",
                            },
                            { remainingTimes: String(l) },
                          ),
                        l === 1)
                      ) {
                        var t = {
                          error_code: String(e == null ? void 0 : e.error_code),
                          error_description: String(
                            e == null ? void 0 : e.error_description,
                          ),
                          error_title: String(
                            e == null ? void 0 : e.error_title,
                          ),
                          extra_data: String(e == null ? void 0 : e.extra_data),
                        };
                        (f == null ||
                          f.logClientLoadPaysecFail("get_encryption_key", {
                            error_message:
                              "Retries all failed at fetching server encryption key: " +
                              JSON.stringify(t),
                          }),
                          c(e));
                      } else y(l - 1);
                    },
                  );
                };
              y(u);
            }),
            (t[0] = a),
            (t[1] = n),
            (t[2] = e),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function d(e, t, n, o, a, i, l, s, u, c) {
      r("promiseDone")(
        p(o, a, n, s, u),
        function (n) {
          (c == null || c.logClientCreatePlatformtrusttokenSuccess(e, t), i(n));
        },
        function (n) {
          (c == null ||
            c.logClientCreatePlatformtrusttokenFail(
              e,
              babelHelpers.extends({}, t, { error: String(n) }),
            ),
            l(n));
        },
      );
    }
    function m(e, t, n, a, i, l, s, u, c, m, p, _, f, g, h, y, C, b, v) {
      var S = {
          ptt_auth_ticket_type: String(n.auth_ticket_type),
          ptt_capabilities: n.caps,
          ptt_operation: i,
        },
        R = babelHelpers.extends(
          { is_encryption_required: "true", is_legacy_ptt: "false" },
          n.c2c_account_id != null && {
            c2c_account_id: String(n.c2c_account_id),
          },
        );
      g == null || g.logClientCreatePlatformtrusttokenInit(S, R);
      var L = function (t) {
          (g == null ||
            g.logClientCreatePlatformtrusttokenFail(
              S,
              babelHelpers.extends({}, R, {
                error: "fetch server encryption key failed",
                error_description: String(
                  t == null ? void 0 : t.error_description,
                ),
              }),
            ),
            s(t));
        },
        E = function (r) {
          return d(
            S,
            R,
            t,
            n,
            i,
            l,
            s,
            { secretPayload: a, serverKeyObject: r },
            f,
            g,
          );
        };
      h
        ? h(e, y, E, L, u, c, m, p, g, _, v)
        : r("promiseDone")(
            o("GetServerEncryptionKey").getServerPublicCryptoKey(
              e,
              y,
              void 0,
              c != null ? c : void 0,
              E,
              L,
              g,
              C,
              v != null ? v : void 0,
              b,
            ),
          );
    }
    function p(e, t, n, r, o, a) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = {
                ptt_auth_ticket_type: String(e.auth_ticket_type),
                ptt_capabilities: e.caps,
                ptt_operation: t,
              },
              u = { is_encryption_required: "false", is_legacy_ptt: "false" };
            l == null || l.logClientCreatePlatformtrusttokenInit(s, u);
            try {
              var c = babelHelpers.extends({}, e);
              i != null && (c = babelHelpers.extends({}, e, { public_key: i }));
              var d = { data: c, nonce: r("uuidv4")(), op: t, ver: 1 },
                m = yield o("FBPayAuthLibraryCommon").createPttGeneric(
                  o("FBPayCometBase64URL").encode(JSON.stringify(d)),
                  a,
                  n,
                );
              return (
                l == null || l.logClientCreatePlatformtrusttokenSuccess(s, u),
                m
              );
            } catch (e) {
              throw (
                l == null ||
                  l.logClientCreatePlatformtrusttokenFail(
                    s,
                    babelHelpers.extends({}, u, { error: String(e) }),
                  ),
                e
              );
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    ((l.usePaymentsCometGetServerPublicCryptoKey = c),
      (l.getPTTInternalWithEncryption = m),
      (l.getPTTInternal = p));
  },
  98,
);
