__d(
  "MAIBAMemoryImportPendingPaste",
  ["CurrentUser", "WebStorage", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useSyncExternalStore,
      m = "maiba_memory_import_pending_paste",
      p = 1,
      _ = "option1-2026-11",
      f = 4320 * 60 * 1e3,
      g = new Set(),
      h = new Set();
    function y() {
      g.forEach(function (e) {
        return e();
      });
    }
    function C() {
      var t,
        n =
          (t = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
            ? void 0
            : t.getItem(m);
      if (n == null || n === "") return null;
      var o = null;
      try {
        o = JSON.parse(n);
      } catch (e) {
        return null;
      }
      if (o == null || typeof o != "object" || Array.isArray(o)) return null;
      var a = o.v,
        i = o.promptVersion,
        l = o.adAccountID,
        s = o.copiedAtMs,
        u = o.userID;
      return a !== p ||
        i !== _ ||
        typeof l != "string" ||
        typeof s != "number" ||
        typeof u != "string"
        ? null
        : { adAccountID: l, copiedAtMs: s, userID: u };
    }
    function b(e) {
      var t = C();
      if (t == null) return null;
      var n = e - t.copiedAtMs;
      return n < 0 || n > f ? null : t;
    }
    function v() {
      var t = (e || (e = r("WebStorage"))).getLocalStorage();
      if (t != null)
        try {
          t.removeItem(m);
        } catch (e) {}
    }
    function S(t, n) {
      var o = r("CurrentUser").getID();
      if (!(o === "0" || t === "")) {
        h.add(t);
        var a = (e || (e = r("WebStorage"))).getLocalStorage();
        if (a == null) {
          y();
          return;
        }
        (e.setItemGuarded(
          a,
          m,
          JSON.stringify({
            adAccountID: t,
            copiedAtMs: n,
            promptVersion: _,
            userID: o,
            v: p,
          }),
        ),
          y());
      }
    }
    function R(e) {
      var t = C();
      e == null ||
        t == null ||
        t.userID !== r("CurrentUser").getID() ||
        t.adAccountID !== e ||
        (v(), y());
    }
    function L(e, t) {
      if (e == null || e === "") return !1;
      var n = b(t);
      return (
        n != null &&
        n.userID === r("CurrentUser").getID() &&
        n.adAccountID === e
      );
    }
    function E(e, t) {
      return e != null && !h.has(e) && L(e, t);
    }
    function k(t, n) {
      var o;
      return (
        ((o = (e || (e = r("WebStorage"))).getLocalStorageForRead()) == null
          ? void 0
          : o.getItem(m)) != null &&
          b(n) == null &&
          v(),
        g.add(t),
        function () {
          g.delete(t);
        }
      );
    }
    function I(e) {
      var t = c(function (e) {
          return k(e, Date.now());
        }, []),
        n = c(
          function () {
            return E(e, Date.now());
          },
          [e],
        );
      return d(t, n, function () {
        return !1;
      });
    }
    ((l.MAIBA_MEMORY_IMPORT_PROMPT_VERSION = _),
      (l.MAIBA_MEMORY_IMPORT_PENDING_PASTE_TTL_MS = f),
      (l.recordMAIBAMemoryImportPromptCopied = S),
      (l.clearMAIBAMemoryImportPendingPaste = R),
      (l.hasMAIBAMemoryImportPendingPaste = L),
      (l.isMAIBAMemoryImportPasteReminderDue = E),
      (l.useMAIBAMemoryImportPasteReminderDue = I));
  },
  98,
);
