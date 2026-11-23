__d(
  "adsMAIBAValidateBoostWebsiteUrl",
  ["fbt", "ConstUriUtils", "ads-lib-urllib"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(["itunes.apple.com", "apps.apple.com", "play.google.com"]),
      u = [/^\/iw\//, /^\/pages\/platform\/first-party-cta\//, /.*\/menu\//];
    function c(e) {
      try {
        return r("ads-lib-urllib").isUrl(e)
          ? o("ConstUriUtils").getUri(r("ads-lib-urllib").normalize(e))
          : o("ConstUriUtils").getUri(e);
      } catch (e) {
        return null;
      }
    }
    function d(t) {
      return e.has(t.getDomain());
    }
    function m(e) {
      var t = e.getDomain();
      return t === "facebook.com" || t.endsWith(".facebook.com");
    }
    function p(e, t) {
      var n = r("ads-lib-urllib").isUrl(t) && !d(e);
      return n && !t.includes("fb.com/messenger_doc");
    }
    function _(e) {
      if (!m(e)) return !1;
      var t = e.getPath();
      return u.some(function (e) {
        return e.test(t);
      });
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g(e) {
      if (e == null) return null;
      var t = e.trim();
      if (t === "") return null;
      var n = c(t);
      return n == null
        ? f()
        : _(n)
          ? null
          : p(n, t)
            ? m(n)
              ? s._(/*BTDS*/ "")
              : null
            : f();
    }
    l.default = g;
  },
  226,
);
