__d(
  "MAWVault",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "MAWKeychainCrypto",
    "MAWKeychainNaClCrypto",
    "MAWODSProxy",
    "MAWVaultMaterials",
    "MAWVaultMaterialsStorageStatus",
    "WAOdsEnums",
    "err",
    "gkx",
    "hasMultipleTabs",
    "promiseDone",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Map();
    function c(e) {
      return new RegExp("^[0-9]{10}##[0-9]{10}.*[0-9]{10}##[0-9]{10}$").test(e);
    }
    var d = r("gkx")("23909");
    function m(e) {
      if (!d) return !1;
      var t = o("MAWVaultMaterials").getVaultPrefixAndSuffix(),
        n = t == null ? !1 : new RegExp(t + ".*" + t).test(e);
      return n;
    }
    function p(t, n) {
      if ((n === void 0 && (n = !1), !d)) return t;
      if (m(t)) {
        var a = o("MAWVaultMaterials").getVaultMaterials(),
          i = a.encryptionKey,
          l = a.prefixAndSuffix;
        if (l == null)
          throw (
            _("unvault", "prefix_null"),
            r("FBLogger")("messenger_web").mustfixThrow(
              "Vault prefix and suffix should not be null when unvaulting",
            )
          );
        var s = new RegExp(l + "(.*)" + l),
          u = t.match(s);
        if (u == null || u.length !== 2)
          throw (
            _("unvault", "value_null"),
            r("FBLogger")("messenger_web").mustfixThrow(
              "Could not retrieve inner value to unvault",
            )
          );
        if (i == null)
          throw (
            _("unvault", "key_null"),
            r("FBLogger")("messenger_web").mustfixThrow(
              "Vault encryption key was null before unvault",
            )
          );
        var p = u[1],
          f = "" + l + p + l,
          g = y(i, p);
        return t.replace(f, function () {
          return g;
        });
      }
      if (c(t)) {
        if ((_("unvault", "incorrect_key"), n))
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Encountered vaulted value with incorrect key.",
          );
        var h = r("err")("Encountered vaulted value with incorrect key");
        r("promiseDone")(
          o("hasMultipleTabs")
            .hasMultipleTabs()
            .then(function (t) {
              r("FBLogger")("messenger_web")
                .catching(h)
                .mustfix(
                  "Encountered vaulted value with incorrect key. Vault material source: %s, environment: %s, hasMultipleTabs: %s, isSharedWorker: %s, isCurrentContextHoldingLock: %s",
                  o("MAWVaultMaterials").getVaultMaterialsSource(),
                  (e || (e = r("ExecutionEnvironment"))).isInMainThread
                    ? "main"
                    : "worker",
                  t == null
                    ? "unknown_multi_tab"
                    : t
                      ? "multi_tab"
                      : "single_tab",
                  o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
                    ? "shared_worker"
                    : "dedicated_worker",
                  o(
                    "MAWVaultMaterialsStorageStatus",
                  ).isCurrentContextHoldingLock()
                    ? "holding_lock"
                    : "not_holding_lock",
                );
            }),
        );
      }
      return t;
    }
    function _(e, t) {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_VAULTING,
        key: "failure." + e + "." + t,
      });
    }
    function f(t) {
      if (t === "" || !d || !(e || (e = r("ExecutionEnvironment"))).isInBrowser)
        return t;
      if (!o("MAWVaultMaterials").hasVaultBeenSetup())
        return (
          _("vault", "has_not_been_setup"),
          r("FBLogger")("messenger_web").mustfix(
            "Attempted to vault value while materials were not setup",
          ),
          t
        );
      if (m(t))
        return (
          _("vault", "already_vaulted"),
          r("FBLogger")("messenger_web").warn(
            "Attempted to vault value that's already been vaulted",
          ),
          t
        );
      c(t) &&
        (_("vault", "already_vaulted_with_different_key"),
        r("FBLogger")("messenger_web").mustfix(
          "Attempted to vault value that's already been vaulted with a different key",
        ));
      var n = o("MAWVaultMaterials").getVaultMaterials(),
        a = n.encryptionKey,
        i = n.prefixAndSuffix;
      if (i == null || a == null)
        throw (
          _("vault", "prefix_or_key_null"),
          r("FBLogger")("messenger_web").mustfixThrow(
            "Cannot vault before vault materials are set",
          )
        );
      var l = h(a, t);
      return "" + i + l + i;
    }
    function g(e) {
      if (!d) return e;
      if (!m(e))
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "Value should be vaulted",
        );
      return p(e);
    }
    function h(e, t) {
      var n = s == null ? void 0 : s.get(t);
      if (n != null) return n;
      var r = new TextEncoder().encode(t).buffer,
        a = o("MAWKeychainNaClCrypto").encryptTweetNaCl(e, new Uint8Array(r));
      return (s == null || s.set(t, a), u == null || u.set(a, t), a);
    }
    function y(e, t) {
      var n = u == null ? void 0 : u.get(t);
      if (n != null) return n;
      var r = new TextDecoder().decode(
        o("MAWKeychainNaClCrypto").decryptTweetNaCl(
          e,
          t,
          void 0,
          o("MAWKeychainCrypto").ADDITIONAL_DATA.byteLength,
        ),
      );
      return (s == null || s.set(r, t), u == null || u.set(t, r), r);
    }
    ((l.isVaulted = m), (l.unvault = p), (l.vault = f), (l.unvaultOrThrow = g));
  },
  98,
);
