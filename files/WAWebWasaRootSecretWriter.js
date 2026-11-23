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
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(e, t, n) {
      (await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(e, t, n),
        await o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t));
    }
    async function _(t, n) {
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
        var a = await h(t, n);
        return a == null
          ? !1
          : (await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(
              t,
              a.stanzaId,
              a.secret,
            ),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[wasa] root secret recovery: rebuilt hidden row for ",
                  "",
                ])),
              n,
            ),
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
    }
    async function f(e) {
      try {
        var t = await g(e),
          n = t.secret,
          a = t.stanzaId;
        return a == null || n == null
          ? (await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user), t)
          : (await p(e, a, n), { reason: "recovered", stanzaId: a });
      } catch (e) {
        return {
          reason: "error: " + r("getErrorSafe")(e).message,
          stanzaId: null,
        };
      }
    }
    async function g(e) {
      var t = await y(e);
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
    }
    async function h(e, t) {
      var n = await y(e);
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
    }
    async function y(e) {
      var t,
        n,
        r =
          '["' +
          o("WAWebSyncdConst").Actions.WasaRootSecret +
          '","' +
          e.toJid() +
          '"]',
        a = await o("WAWebSyncdDb").getSyncAction(r);
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
    }
    ((l.applyWasaRootSecretForId = p),
      (l.maybeRecoverWasaRootSecretFromStore = _),
      (l.maybeRecoverWasaActiveTargetFromStore = f));
  },
  98,
);
