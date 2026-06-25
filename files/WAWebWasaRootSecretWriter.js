__d(
  "WAWebWasaRootSecretWriter",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(e, t, n),
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
          (t != null &&
            (yield o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(e, t)),
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = yield _(t, n);
            return a == null
              ? !1
              : (yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(
                  t,
                  a.stanzaId,
                  a.secret,
                ),
                !0);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] maybeRecoverWasaRootSecretFromStore failed: ",
                      "",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("wasa-root-secret-recovery-failed"),
              !1
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a =
              '["' +
              o("WASyncdConst").Actions.WasaRootSecret +
              '","' +
              e.toJid() +
              '"]',
            i = yield o("WAWebSyncdDb").getSyncAction(a);
          if ((i == null ? void 0 : i.binarySyncData) == null) return null;
          var l =
              (n = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                i.binarySyncData,
              ).value) == null
                ? void 0
                : n.wasaRootSecretAction,
            s =
              l == null || (r = l.secrets) == null
                ? void 0
                : r.find(function (e) {
                    return e.id === t;
                  }),
            u = s == null ? void 0 : s.id,
            c = s == null ? void 0 : s.rootSecret;
          return u == null || c == null
            ? null
            : { stanzaId: u, secret: new Uint8Array(c) };
        })),
        f.apply(this, arguments)
      );
    }
    ((l.applyWasaRootSecretForId = s),
      (l.clearWasaRootSecret = c),
      (l.maybeRecoverWasaRootSecretFromStore = m));
  },
  98,
);
