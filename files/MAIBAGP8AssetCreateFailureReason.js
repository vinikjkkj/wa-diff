__d(
  "MAIBAGP8AssetCreateFailureReason",
  ["errorCode"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set([2859029, 2859042, 2859047]),
      u = new Set([1752141, 1752140, 1752002, 2455010, 2455008]),
      c = new Set([1752004, 1752005, 1752038]),
      d = new Set([3922001, 3922002, 1373107]),
      m = new Set([1752236, 1373034, 1690258]),
      p = new Set([2136001, 3490037, 2859009, 2859039]),
      _ = new Set([
        2859015, 2859043, 2446325, 3858570, 2859046, 2455030, 1373098, 2825051,
        3359001, 1690218, 1690140, 2859017, 2859050, 1752014, 1752069, 1340044,
        1373108, 1690203, 1690038, 1404163, 2859034, 2455033,
      ]),
      f = { field: null, reason: null };
    function g(e) {
      return { field: e, reason: "field" };
    }
    function h(e) {
      return { field: null, reason: e };
    }
    function y(t, n, r) {
      var o = r == null ? void 0 : r.toLowerCase();
      if (n != null && e.has(n)) return h("approval");
      if (n != null && p.has(n)) return h("blocked");
      if (t === "ad_account") {
        if (n != null && u.has(n)) return h("limit");
        if (o === "ad_account_timezone") return g("timezone");
        if (o === "ad_account_currency") return g("currency");
        if (n != null && c.has(n)) return h("blocked");
      } else {
        if (o === "page_name") return g("name");
        if (o === "page_category" || n === 1373038) return g("category");
        if (n != null && d.has(n)) return h("limit");
      }
      return n != null && m.has(n)
        ? h("permission")
        : n != null && _.has(n)
          ? h("blocked")
          : f;
    }
    l.default = y;
  },
  98,
);
