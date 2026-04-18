__d(
  "WAWebRecUnitProductCooldownManager",
  ["WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "recunit_product_cooldowns";
    function s() {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "string") return {};
      try {
        var n = JSON.parse(t);
        return n == null || typeof n != "object" ? {} : n;
      } catch (e) {
        return {};
      }
    }
    function u(t) {
      r("WAWebUserPrefsStore").setUser(e, JSON.stringify(t));
    }
    function c(e, t) {
      var n = s(),
        r = n[e];
      if (r == null || typeof r != "number") return !1;
      var o = Math.floor(Date.now() / 1e3);
      return o - r < t;
    }
    function d(e) {
      var t = s();
      ((t[e] = Math.floor(Date.now() / 1e3)), u(t));
    }
    function m() {
      r("WAWebUserPrefsStore").setUser(e, "{}");
    }
    ((l.isProductOnCooldown = c),
      (l.startProductCooldown = d),
      (l.clearAllCooldowns = m));
  },
  98,
);
