__d(
  "WAWebWasaRootSecretWriter",
  [
    "WALogger",
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
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[wasa] root secret recovery: reading sync store for ",
                  " target ",
                  "",
                ])),
              t,
              n,
            )
            .sendLogs("wasa-root-secret-recovery-attempt");
          try {
            var a = yield C(t, n);
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a =
              '["' +
              o("WAWebSyncdConst").Actions.WasaRootSecret +
              '","' +
              e.toJid() +
              '"]',
            i = yield o("WAWebSyncdDb").getSyncAction(a);
          if ((i == null ? void 0 : i.binarySyncData) == null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] root secret recovery: no stored sync action at ",
                      "",
                    ])),
                  a,
                )
                .sendLogs("wasa-root-secret-recovery-no-action"),
              null
            );
          var l =
              (n = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                i.binarySyncData,
              ).value) == null
                ? void 0
                : n.wasaRootSecretAction,
            s = (r = l == null ? void 0 : l.secrets) != null ? r : [],
            u = s.find(function (e) {
              return e.id === t;
            });
          if (u == null)
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] root secret recovery: ",
                      " stored entries, none match ",
                      "",
                    ])),
                  s.length,
                  t,
                )
                .sendLogs("wasa-root-secret-recovery-no-match"),
              null
            );
          var p = u.id,
            _ = u.rootSecret;
          return p == null || _ == null
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
            : { stanzaId: p, secret: new Uint8Array(_) };
        })),
        b.apply(this, arguments)
      );
    }
    ((l.applyWasaRootSecretForId = p),
      (l.clearWasaRootSecret = f),
      (l.maybeRecoverWasaRootSecretFromStore = h));
  },
  98,
);
