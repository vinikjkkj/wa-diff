__d(
  "HostnameRewriter",
  ["ConstUriUtils", "Env", "URI", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t) {
        return String(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
      },
      c = null,
      d = new RegExp("^www\\.(|.*\\.)facebook\\.com$"),
      m = null,
      p = "facebook.com",
      _ = null,
      f = null,
      g = new RegExp("^www\\."),
      h = new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$", "i");
    function y() {
      c = null;
      var e = "(^|\\.)";
      m = e + u(p) + "$";
    }
    function C() {
      return m == null ? null : c || ((c = new RegExp(m, "i")), c);
    }
    function b() {
      if (f != null || ((f = new Map()), _ == null)) return f;
      var e = "(^|\\.)";
      for (var t of _) {
        var n = t[0],
          r = t[1],
          o = u(n),
          a = new RegExp(o + "$", "i"),
          i = new RegExp(e + o + "$", "i");
        f.set(r, { forReplace: a, forTest: i });
      }
      return f;
    }
    function v(e) {
      var t = b();
      for (var n of t) {
        var r = n[0],
          o = n[1];
        if (o.forTest.test(e)) return e.replace(o.forReplace, r);
      }
      return e;
    }
    function S(e) {
      return d.test(e) ? e.replace(g, "web.") : e;
    }
    function R(t) {
      return function (n) {
        var o = new (e || (e = r("URI")))(n);
        return (o.setDomain(t(o.getDomain())), o);
      };
    }
    function L(t, n) {
      ((p = t),
        (_ = n),
        y(),
        r("isFacebookURI").setRegex(C()),
        (e || (e = r("URI"))).registerFilter(R(v)),
        o("ConstUriUtils").registerDomainFilter(v));
    }
    function E(t, n) {
      ((p = t), (e || (e = r("URI"))).registerFilter(R(S)));
    }
    function k() {
      var e = (s || (s = r("Env"))).hostnameRewriterConfig;
      if (e != null)
        switch (e.site) {
          case "onion":
            L(e.inboundName, e.rewriteMappings);
            break;
        }
    }
    function I() {
      r("isFacebookURI").setRegex(h);
    }
    ((l.registerDomainsForRewrite = L),
      (l.registerInternetDotOrgFilters = E),
      (l.maybeRegisterFilters = k),
      (l.treatWorkplaceAsFacebookURI = I));
  },
  98,
);
