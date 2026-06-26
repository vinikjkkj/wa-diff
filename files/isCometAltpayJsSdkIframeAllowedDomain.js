__d(
  "isCometAltpayJsSdkIframeAllowedDomain",
  ["CometAltpayJsSdkIframeAllowedDomains.experimental", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze(r("CometAltpayJsSdkIframeAllowedDomains.experimental")),
      u = Object.freeze(s.allowed_domains);
    function c() {
      var t = new (e || (e = r("URI")))(window.location.href);
      if (u == null || u.length <= 0) return !1;
      var n = u.some(function (n) {
        var o = new (e || (e = r("URI")))(n);
        return o == null ? !1 : t.isSameOrigin(o);
      });
      return !!n;
    }
    l.default = c;
  },
  98,
);
