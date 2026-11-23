__d(
  "WAWebAeaIdentityChangeBaseline",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      var t = _(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function _(e, t) {
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
    async function f(t) {
      if (o("WAWebAeaRollout").isAeaMonitoringEnabled())
        try {
          var n,
            a = await g(t),
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
          var d = await o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getIdentityWithRowId(E(t)),
            m = L();
          (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .AEA_IDENTITY_CHANGE_BASELINES,
            babelHelpers.extends(
              {},
              m,
              ((n = {}),
              (n[E(t)] = {
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
    }
    async function g(e) {
      var t = await o("WAWebAeaAccountStateStore").readAeaStoredAccount(e),
        n = v(e);
      if (n == null) return { stored: t, baseline: null };
      if (t.identityKey == null) return { stored: t, baseline: n };
      var a = t.identityKey === n.identityKey,
        i = a && t.rawAccountState == null;
      try {
        var l = "superseded";
        if (i) {
          var s = await o(
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
          a && (await R(e)),
          await o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
          await S(e),
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
            stored: await o("WAWebAeaAccountStateStore").readAeaStoredAccount(
              e,
            ),
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
    }
    function h(e) {
      var t;
      return o("WAWebSignalCommonUtils").createSignalAddress(e).toString() ===
        E(e)
        ? (t = L()[E(e)]) == null
          ? void 0
          : t.identityKey
        : null;
    }
    function y(e) {
      return b(E(e));
    }
    async function C() {
      await Promise.all(Object.keys(L()).map(b));
    }
    async function b(e) {
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
        var n = L(),
          a = n[e],
          i = babelHelpers.objectWithoutPropertiesLoose(n, [e].map(p));
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .AEA_IDENTITY_CHANGE_BASELINES,
          i,
        );
        return;
      }
      try {
        await g(t);
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
    }
    function v(e) {
      var t = L()[E(e)];
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
    async function S(e, t) {
      var n;
      t != null &&
        ((n = L()[E(e)]) == null ? void 0 : n.identityKey) === t &&
        (await R(e),
        await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode());
      var r = L(),
        a = E(e),
        i = r[a],
        l = babelHelpers.objectWithoutPropertiesLoose(r, [a].map(p));
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.AEA_IDENTITY_CHANGE_BASELINES,
        l,
      );
    }
    async function R(e) {
      var t = L()[E(e)];
      if (t != null) {
        var n = t.identityKey,
          r = t.rowId,
          a = t.sentAddonRowId,
          i = o("WAWebSignalProtocolStore").getPersistSignalProtocolStore(),
          l = [E(e)];
        (r != null &&
          (await i.updateIdentityRangeAfterEncryption("rowId", r, l, n)),
          a != null &&
            (await i.updateIdentityRangeAfterEncryption(
              "sentAddonRowId",
              a,
              l,
              n,
            )));
      }
    }
    function L() {
      var e;
      return (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.AEA_IDENTITY_CHANGE_BASELINES,
      )) != null
        ? e
        : {};
    }
    function E(e) {
      return o("WAWebSignalCommonUtils")
        .createSignalAddress(o("WAWebWidFactory").asUserWidOrThrow(e))
        .toString();
    }
    ((l.saveAeaIdentityChangeBaseline = f),
      (l.readAeaStoredAccountAfterIdentityChange = g),
      (l.readAeaIdentityChangeBaselineKey = h),
      (l.restoreAeaIdentityChangeBaseline = y),
      (l.restoreAeaIdentityChangeBaselines = C),
      (l.readAeaIdentityChangeBaseline = v),
      (l.clearAeaIdentityChangeBaseline = S));
  },
  98,
);
