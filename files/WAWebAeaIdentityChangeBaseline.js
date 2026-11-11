__d(
  "WAWebAeaIdentityChangeBaseline",
  [
    "Promise",
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaRollout",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebWidFactory",
    "WAWebWidFromSignalAddress",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      var t = f(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function f(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebAeaRollout").isAeaMonitoringEnabled())
            try {
              var n,
                a = yield y(t),
                i = a.stored,
                l = i.accountState,
                u = i.identityKey,
                c = i.rawAccountState;
              if (
                u == null ||
                c == null ||
                l === o("WAWebAeaAccountState").AeaAccountState.NOT_SET
              )
                return;
              var d = yield o("WAWebSignalProtocolStore")
                  .getPersistSignalProtocolStore()
                  .getIdentityWithRowId(P(t)),
                m = $();
              (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                  .AEA_IDENTITY_CHANGE_BASELINES,
                babelHelpers.extends(
                  {},
                  m,
                  ((n = {}),
                  (n[P(t)] = {
                    identityKey: u,
                    accountState: c,
                    rowId: d == null ? void 0 : d.rowId,
                    sentAddonRowId: d == null ? void 0 : d.sentAddonRowId,
                  }),
                  n),
                ),
              ),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] identity change baseline account=",
                      " action=saved state=",
                      "",
                    ])),
                  t.toLogString(),
                  l,
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to keep the account state across an identity change",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-identity-change-baseline-fail");
            }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
            n = k(e);
          if (n == null) return { stored: t, baseline: null };
          if (t.identityKey == null) return { stored: t, baseline: n };
          var a = t.identityKey === n.identityKey,
            i = a && t.rawAccountState == null;
          try {
            var l = "superseded";
            if (i) {
              var s = yield o(
                  "WAWebAeaAccountStateStore",
                ).compareAndSetAeaAccountState(
                  e,
                  t.identityKey,
                  null,
                  n.accountState,
                ),
                d = s.applied;
              l = d ? "restored" : "superseded";
            }
            return (
              a && (yield D(e)),
              yield o("WAWebSignalProtocolStore")
                .getPersistSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              yield I(e),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] identity change baseline account=",
                    " action=",
                    " state=",
                    "",
                  ])),
                e.toLogString(),
                l,
                n.accountState,
              ),
              {
                stored: yield o(
                  "WAWebAeaAccountStateStore",
                ).readAeaStoredAccount(e),
                baseline: null,
              }
            );
          } catch (a) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] identity change baseline account=",
                      " action=restore_failed still_used=",
                      "",
                    ])),
                  e.toLogString(),
                  String(i),
                )
                .catching(r("getErrorSafe")(a))
                .sendLogs("aea-identity-change-baseline-fail"),
              { stored: t, baseline: i ? n : null }
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t;
      return o("WAWebSignalCommonUtils").createSignalAddress(e).toString() ===
        P(e)
        ? (t = $()[P(e)]) == null
          ? void 0
          : t.identityKey
        : null;
    }
    function v(e) {
      return L(P(e));
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (p || (p = n("Promise"))).all(Object.keys($()).map(L));
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = o("WAWebWidFromSignalAddress").widFromSignalAddress(e);
          } catch (t) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] dropped an unusable identity-change baseline",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("aea-identity-change-baseline-fail");
            var n = $(),
              a = n[e],
              i = babelHelpers.objectWithoutPropertiesLoose(n, [e].map(_));
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
                .AEA_IDENTITY_CHANGE_BASELINES,
              i,
            );
            return;
          }
          try {
            yield y(t);
          } catch (e) {
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to restore an identity-change baseline",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-identity-change-baseline-fail");
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = $()[P(e)];
      if (t == null) return null;
      var n = o("WAWebAeaAccountState").AeaAccountState.cast(t.accountState);
      return n == null
        ? null
        : {
            identityKey: t.identityKey,
            accountState: n,
            rawAccountState: t.accountState,
          };
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          t != null &&
            ((n = $()[P(e)]) == null ? void 0 : n.identityKey) === t &&
            (yield D(e),
            yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var r = $(),
            a = P(e),
            i = r[a],
            l = babelHelpers.objectWithoutPropertiesLoose(r, [a].map(_));
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .AEA_IDENTITY_CHANGE_BASELINES,
            l,
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = $()[P(e)];
          if (t != null) {
            var n = t.identityKey,
              r = t.rowId,
              a = t.sentAddonRowId,
              i = o("WAWebSignalProtocolStore").getPersistSignalProtocolStore(),
              l = [P(e)];
            (r != null &&
              (yield i.updateIdentityRangeAfterEncryption("rowId", r, l, n)),
              a != null &&
                (yield i.updateIdentityRangeAfterEncryption(
                  "sentAddonRowId",
                  a,
                  l,
                  n,
                )));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.AEA_IDENTITY_CHANGE_BASELINES,
      )) != null
        ? e
        : {};
    }
    function P(e) {
      return o("WAWebSignalCommonUtils")
        .createSignalAddress(o("WAWebWidFactory").asUserWidOrThrow(e))
        .toString();
    }
    ((l.saveAeaIdentityChangeBaseline = g),
      (l.readAeaStoredAccountAfterIdentityChange = y),
      (l.readAeaIdentityChangeBaselineKey = b),
      (l.restoreAeaIdentityChangeBaseline = v),
      (l.restoreAeaIdentityChangeBaselines = S),
      (l.readAeaIdentityChangeBaseline = k),
      (l.clearAeaIdentityChangeBaseline = I));
  },
  98,
);
