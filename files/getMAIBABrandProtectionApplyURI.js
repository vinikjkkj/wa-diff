__d(
  "getMAIBABrandProtectionApplyURI",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "/latest/brand_rights_protection/",
      l = "nav_ref=maiba_brp_apply_cta_button",
      s = "https://business.facebook.com",
      u = /^https:\/\/(?:business|www)\.((?:[a-z0-9-]+\.)*facebook\.com)$/;
    function c(t, n) {
      var r = d(t),
        o = n.match(u),
        a = o != null ? "https://business." + o[1] : s,
        i = r != null ? "business_id=" + r + "&" + l : l;
      return { businessID: r, uri: "" + a + e + "?" + i };
    }
    function d(e) {
      var t = e.split("#")[0],
        n = t.indexOf("?");
      if (n === -1) return null;
      var r = [];
      for (var o of t.slice(n + 1).split("&")) {
        var a = o.indexOf("=");
        a !== -1 && o.slice(0, a) === "business_id" && r.push(o.slice(a + 1));
      }
      var i = r[0];
      return i == null ||
        !/^\d+$/.test(i) ||
        r.some(function (e) {
          return e !== i;
        })
        ? null
        : i;
    }
    i.default = c;
  },
  66,
);
