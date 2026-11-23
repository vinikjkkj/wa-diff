__d(
  "MAIBAPrewarmedConversationId",
  ["generateMAIBAExternalConversationId"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 48e4,
      s = null;
    function u(t) {
      return t != null && Date.now() - t.mintedAtMs < e;
    }
    function c(e, t) {
      return (e != null ? e : "") + "|" + (t != null ? t : "");
    }
    function d(e) {
      var t;
      return u(s) && ((t = s) == null ? void 0 : t.key) === e;
    }
    function m(e) {
      var t = r("generateMAIBAExternalConversationId")();
      return ((s = { ecid: t, key: e, mintedAtMs: Date.now() }), t);
    }
    function p(e) {
      var t;
      ((t = s) == null ? void 0 : t.ecid) === e && (s = null);
    }
    function _(e) {
      var t = s;
      return u(t)
        ? (t == null ? void 0 : t.key) !== e
          ? null
          : ((s = null), t == null ? void 0 : t.ecid)
        : ((s = null), null);
    }
    ((l.getMAIBAPrewarmKey = c),
      (l.hasFreshPrewarmedMAIBAConversationId = d),
      (l.mintPrewarmedMAIBAConversationId = m),
      (l.discardPrewarmedMAIBAConversationId = p),
      (l.claimPrewarmedMAIBAConversationId = _));
  },
  98,
);
