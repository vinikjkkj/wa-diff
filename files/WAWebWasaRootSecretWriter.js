__d(
  "WAWebWasaRootSecretWriter",
  [
    "WALogger",
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(e, t, n),
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t));
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
          var t = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
          (t != null &&
            (yield o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(e, t)),
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wasa] root secret recovery: reading sync store for ",
                " target ",
                "",
              ])),
            t,
            n,
          );
          try {
            var a = yield R(t, n);
            return a == null
              ? !1
              : (yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(
                  t,
                  a.stanzaId,
                  a.secret,
                ),
                o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[wasa] root secret recovery: rebuilt hidden row for ",
                        "",
                      ])),
                    n,
                  )
                  .sendLogs("wasa-root-secret-recovery-ok"),
                !0);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] maybeRecoverWasaRootSecretFromStore failed: ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("wasa-root-secret-recovery-failed"),
              !1
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield v(e),
              n = t.secret,
              a = t.stanzaId;
            return a == null || n == null
              ? (yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user),
                t)
              : (yield p(e, a, n), { reason: "recovered", stanzaId: a });
          } catch (e) {
            return {
              reason: "error: " + r("getErrorSafe")(e).message,
              stanzaId: null,
            };
          }
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
          var t = yield E(e);
          if (t == null) return { reason: "no-stored-action", stanzaId: null };
          var n = null,
            r = -1;
          for (var a of t) {
            var i,
              l = a.id,
              s = a.rootSecret;
            if (
              !(
                a.status !==
                  o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$WASARootSecretAction$RootSecretEntry$Status
                    .ACTIVE ||
                l == null ||
                l === "" ||
                s == null
              )
            ) {
              var u = (i = o("WALongInt").maybeNumber(a.epoch)) != null ? i : 0;
              (n == null || u > r) &&
                ((n = { stanzaId: l, secret: new Uint8Array(s) }), (r = u));
            }
          }
          return n == null
            ? {
                reason: "no-active-entry among " + t.length + " stored",
                stanzaId: null,
              }
            : { reason: "recovered", secret: n.secret, stanzaId: n.stanzaId };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield E(e);
          if (n == null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] root secret recovery: no stored sync action for ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("wasa-root-secret-recovery-no-action"),
              null
            );
          var r = n.find(function (e) {
            return e.id === t;
          });
          if (r == null)
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] root secret recovery: ",
                      " stored entries, none match ",
                      "",
                    ])),
                  n.length,
                  t,
                )
                .sendLogs("wasa-root-secret-recovery-no-match"),
              null
            );
          var a = r.id,
            i = r.rootSecret;
          return a == null || i == null
            ? (o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] root secret recovery: stored entry for ",
                      " is malformed",
                    ])),
                  t,
                )
                .sendLogs("wasa-root-secret-recovery-malformed"),
              null)
            : { stanzaId: a, secret: new Uint8Array(i) };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r =
              '["' +
              o("WAWebSyncdConst").Actions.WasaRootSecret +
              '","' +
              e.toJid() +
              '"]',
            a = yield o("WAWebSyncdDb").getSyncAction(r);
          return (a == null ? void 0 : a.binarySyncData) == null
            ? null
            : (t =
                  (n = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    a.binarySyncData,
                  ).value) == null || (n = n.wasaRootSecretAction) == null
                    ? void 0
                    : n.secrets) != null
              ? t
              : [];
        })),
        k.apply(this, arguments)
      );
    }
    ((l.applyWasaRootSecretForId = p),
      (l.clearWasaRootSecret = f),
      (l.maybeRecoverWasaRootSecretFromStore = h),
      (l.maybeRecoverWasaActiveTargetFromStore = C));
  },
  98,
);
