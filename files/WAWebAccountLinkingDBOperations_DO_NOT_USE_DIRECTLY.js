__d(
  "WAWebAccountLinkingDBOperations_DO_NOT_USE_DIRECTLY",
  [
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingSchema",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebOpaqueDataEncryption",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAccountLinkingSchema").getTable().createOrReplace(e),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateAccountLinkingStatus",
              {
                isFBLinked: e.fbCrosspostingDestinationId != null,
                isIGLinked: e.igCrosspostingDestinationId != null,
                linkState: e.linkState,
              },
            ));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAccountLinkingSchema")
              .getTable()
              .get(o("WAWebAccountLinkingConstants").AccountLinkKey),
            n = babelHelpers.extends({}, t, { linkState: e });
          (yield o("WAWebAccountLinkingSchema").getTable().createOrReplace(n),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateAccountLinkingStatus",
              {
                isFBLinked: n.fbCrosspostingDestinationId != null,
                isIGLinked: n.igCrosspostingDestinationId != null,
                linkState: n.linkState,
              },
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebAccountLinkingSchema")
            .getTable()
            .get(o("WAWebAccountLinkingConstants").AccountLinkKey);
          if (n != null) {
            var r = babelHelpers.extends({}, n, { nonce: e, fbid: t });
            return (
              (r.accountLinkingOpaqueData = o(
                "WAWebOpaqueDataEncryption",
              ).moveEncFieldToOpaqueData(r)),
              o("WAWebAccountLinkingSchema").getTable().createOrReplace(r)
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield h();
          if (t != null) {
            var n = babelHelpers.extends({}, t, { accesstoken: e });
            return (
              (n.accountLinkingOpaqueData = o(
                "WAWebOpaqueDataEncryption",
              ).moveEncFieldToOpaqueData(n)),
              o("WAWebAccountLinkingSchema").getTable().createOrReplace(n)
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAccountLinkingSchema")
              .getTable()
              .get(o("WAWebAccountLinkingConstants").AccountLinkKey),
            n = e + Date.now() / 1e3,
            r = babelHelpers.extends({}, t, { pingInterval: n });
          return o("WAWebAccountLinkingSchema").getTable().createOrReplace(r);
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebAccountLinkingSchema")
              .getTable()
              .get("AccountLinkKey");
          if (((e = t) == null ? void 0 : e.accountLinkingOpaqueData) != null) {
            var n,
              r = o("WAWebOpaqueDataEncryption").moveOpaqueDataToEncField(
                (n = t) == null ? void 0 : n.accountLinkingOpaqueData,
              );
            t = babelHelpers.extends({}, t, {
              accesstoken: r.accesstoken,
              fbid: r.fbid,
              nonce: r.nonce,
            });
          }
          return t;
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield h();
          return e == null || e.pingInterval == null ? 0 : e.pingInterval;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["account-linking"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = yield n.get(
                        o("WAWebAccountLinkingConstants").AccountLinkKey,
                      );
                    if (r != null) {
                      var a = babelHelpers.extends({}, r, {
                        foAToWALinkEligibility: e.foAToWALinkEligibility,
                      });
                      (e.fbCrosspostingDestinationId != null &&
                        (a.fbCrosspostingDestinationId =
                          e.fbCrosspostingDestinationId),
                        e.igCrosspostingDestinationId != null &&
                          (a.igCrosspostingDestinationId =
                            e.igCrosspostingDestinationId),
                        yield n.createOrReplace(a),
                        o("WAWebBackendApi").frontendFireAndForget(
                          "updateAccountLinkingStatus",
                          {
                            isFBLinked: a.fbCrosspostingDestinationId != null,
                            isIGLinked: a.igCrosspostingDestinationId != null,
                            linkState: a.linkState,
                          },
                        ));
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["account-linking"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = yield n.get(
                        o("WAWebAccountLinkingConstants").AccountLinkKey,
                      );
                    if (r != null) {
                      var a = babelHelpers.extends({}, r);
                      (e.fbCrosspostingDestinationId != null &&
                        (a.fbCrosspostingDestinationId =
                          e.fbCrosspostingDestinationId),
                        e.igCrosspostingDestinationId != null &&
                          (a.igCrosspostingDestinationId =
                            e.igCrosspostingDestinationId),
                        yield n.createOrReplace(a),
                        o("WAWebBackendApi").frontendFireAndForget(
                          "updateAccountLinkingStatus",
                          {
                            isFBLinked: a.fbCrosspostingDestinationId != null,
                            isIGLinked: a.igCrosspostingDestinationId != null,
                            linkState: a.linkState,
                          },
                        ));
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebAccountLinkingSchema").getTable().clear(),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateAccountLinkingStatus",
              {
                isFBLinked: !1,
                isIGLinked: !1,
                linkState: o("WAWebAccountLinkingConstants").AccountLinkState
                  .Unlinked,
              },
            ));
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield h();
          return {
            isFBLinked:
              (t == null ? void 0 : t.fbCrosspostingDestinationId) != null,
            isIGLinked:
              (t == null ? void 0 : t.igCrosspostingDestinationId) != null,
            linkState:
              (e = t == null ? void 0 : t.linkState) != null
                ? e
                : o("WAWebAccountLinkingConstants").AccountLinkState.Unlinked,
          };
        })),
        T.apply(this, arguments)
      );
    }
    ((l.createOrUpdateAccountLinkingState = e),
      (l.updateAccountLinkingState = u),
      (l.updateAccountLinkingData = d),
      (l.updateAccesstoken = p),
      (l.updatePingInterval = f),
      (l.getAccountLinkingData = h),
      (l.getPingExpirationTime = C),
      (l.updateServiceData = v),
      (l.updateDestinationIdentities = R),
      (l.purgeWaffleData = E),
      (l.getAccountLinkingStatus = I));
  },
  98,
);
