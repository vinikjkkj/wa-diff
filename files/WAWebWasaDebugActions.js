__d(
  "WAWebWasaDebugActions",
  [
    "WABase64",
    "WAHex",
    "WAWebBotUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWasaRootSecretWriter",
    "WAWebWasaUserPrefs",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 32,
      s = 16,
      u = "WAWasaDebugSecretOverride",
      c = "WASADEV3EB0DEADBEEFCAFEBABE";
    function d() {
      return o("WAHex")
        .toHex(self.crypto.getRandomValues(new Uint8Array(e)))
        .toLowerCase();
    }
    function m(e) {
      var t = e.trim();
      if (t === "") return null;
      if (/^[0-9a-f]+$/i.test(t) && t.length % 2 === 0) {
        for (var n = new Uint8Array(t.length / 2), r = 0; r < n.length; r++)
          n[r] = parseInt(t.slice(r * 2, r * 2 + 2), 16);
        return n;
      }
      try {
        return new Uint8Array(o("WABase64").decodeB64(t));
      } catch (e) {
        return null;
      }
    }
    function p() {
      var e = S();
      return { enabled: e.enabled, stanzaId: e.stanzaId };
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.trim() === "" ? c : e.trim(),
            r = m(t);
          if (r == null) return "Invalid root_secret: must be hex or base64.";
          var a = S();
          return (
            a.stanzaId !== "" &&
              a.stanzaId !== n &&
              (yield o("WAWebWasaRootSecretWriter").removeWasaRootSecretForId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                a.stanzaId,
              )),
            yield o("WAWebWasaRootSecretWriter").upsertWasaRootSecretForId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              n,
              r,
            ),
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
              n,
            ),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, {
              enabled: !0,
              stanzaId: n,
              rootSecret: o("WABase64").encodeB64(r),
            }),
            "Applied debug secret: stanza=" +
              R(n) +
              ", " +
              r.length +
              " bytes. Force-use ON."
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = S();
          return t.rootSecret === ""
            ? "No debug secret set \u2014 apply one first."
            : (e
                ? (yield o(
                    "WAWebWasaRootSecretWriter",
                  ).upsertWasaRootSecretForId(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                    t.stanzaId,
                    new Uint8Array(o("WABase64").decodeB64(t.rootSecret)),
                  ),
                  yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
                    t.stanzaId,
                  ))
                : (yield o(
                    "WAWebWasaRootSecretWriter",
                  ).removeWasaRootSecretForId(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                    t.stanzaId,
                  ),
                  yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
                  )),
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                u,
                babelHelpers.extends({}, t, { enabled: e }),
              ),
              e ? "Force-use ON." : "Force-use OFF.");
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = S();
          return (
            e.stanzaId !== "" &&
              (yield o("WAWebWasaRootSecretWriter").removeWasaRootSecretForId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                e.stanzaId,
              )),
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
            ),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(u),
            "Cleaned up debug secret."
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = S();
          if (e.rootSecret === "") return "No debug secret configured.";
          var t = yield o("WAWebWasaRootSecretWriter").getWasaRootSecretForId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              e.stanzaId,
            ),
            n =
              t == null
                ? "hidden message MISSING"
                : "hidden message present (" + t.length + " bytes)";
          return (
            "Force-use " +
            (e.enabled ? "ON" : "OFF") +
            ", stanza=" +
            R(e.stanzaId) +
            ", " +
            n +
            "."
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e,
        t,
        n,
        r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u);
      return {
        enabled: (e = r == null ? void 0 : r.enabled) != null ? e : !1,
        stanzaId: (t = r == null ? void 0 : r.stanzaId) != null ? t : c,
        rootSecret: (n = r == null ? void 0 : r.rootSecret) != null ? n : "",
      };
    }
    function R(e) {
      return e.slice(0, s) + "\u2026";
    }
    ((l.DEBUG_TARGET_ID_DEFAULT = c),
      (l.generateRandomKeyHex = d),
      (l.parseWasaSecretText = m),
      (l.getDebugWasaSecretState = p),
      (l.applyDebugWasaSecret = _),
      (l.applyDebugWasaForceUse = g),
      (l.cleanupDebugWasaSecret = y),
      (l.describeDebugWasaSecret = b));
  },
  98,
);
