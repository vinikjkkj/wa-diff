__d(
  "WAWebWasaDebugActions",
  [
    "WABase64",
    "WAHex",
    "WAWebBotUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
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
      var e = y();
      return { enabled: e.enabled, stanzaId: e.stanzaId };
    }
    async function _(e, t) {
      var n = e.trim() === "" ? c : e.trim(),
        r = m(t);
      if (r == null) return "Invalid root_secret: must be hex or base64.";
      var a = y();
      return (
        a.stanzaId !== "" &&
          a.stanzaId !== n &&
          (await o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            a.stanzaId,
          )),
        await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(
          o("WAWebBotUtils").HATCH_BOT_FBID_WID,
          n,
          r,
        ),
        await o("WAWebWasaUserPrefs").setWasaActiveTargetId(
          o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
          n,
        ),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, {
          enabled: !0,
          stanzaId: n,
          rootSecret: o("WABase64").encodeB64(r),
        }),
        "Applied debug secret: stanza=" +
          C(n) +
          ", " +
          r.length +
          " bytes. Force-use ON."
      );
    }
    async function f(e) {
      var t = y();
      return t.rootSecret === ""
        ? "No debug secret set \u2014 apply one first."
        : (e
            ? (await o("WAWebWasaRootSecretDb").upsertWasaRootSecretForId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                t.stanzaId,
                new Uint8Array(o("WABase64").decodeB64(t.rootSecret)),
              ),
              await o("WAWebWasaUserPrefs").setWasaActiveTargetId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
                t.stanzaId,
              ))
            : (await o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                t.stanzaId,
              ),
              await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(
                o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
              )),
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            u,
            babelHelpers.extends({}, t, { enabled: e }),
          ),
          e ? "Force-use ON." : "Force-use OFF.");
    }
    async function g() {
      var e = y();
      return (
        e.stanzaId !== "" &&
          (await o("WAWebWasaRootSecretDb").removeWasaRootSecretForId(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            e.stanzaId,
          )),
        await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(
          o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
        ),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(u),
        "Cleaned up debug secret."
      );
    }
    async function h() {
      var e = y();
      if (e.rootSecret === "") return "No debug secret configured.";
      var t = await o("WAWebWasaRootSecretDb").getWasaRootSecretForId(
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
        C(e.stanzaId) +
        ", " +
        n +
        "."
      );
    }
    function y() {
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
    function C(e) {
      return e.slice(0, s) + "\u2026";
    }
    ((l.DEBUG_TARGET_ID_DEFAULT = c),
      (l.generateRandomKeyHex = d),
      (l.parseWasaSecretText = m),
      (l.getDebugWasaSecretState = p),
      (l.applyDebugWasaSecret = _),
      (l.applyDebugWasaForceUse = f),
      (l.cleanupDebugWasaSecret = g),
      (l.describeDebugWasaSecret = h));
  },
  98,
);
