__d(
  "WAWebHatchSecureCredentialInput",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 256,
      l = 1024;
    function s(e) {
      var t,
        n = e.trim();
      if (n === "" || /\s/.test(n) || n.includes("\\")) return null;
      var r = /^[a-z][a-z0-9+.-]*:\/\//i.test(n) ? n : "https://" + n,
        o =
          (t = r.slice(r.indexOf("://") + 3).split(/[/?#]/, 1)[0]) != null
            ? t
            : "";
      if (o === "" || o.includes("@")) return null;
      var a;
      try {
        a = new URL(r);
      } catch (e) {
        return null;
      }
      return a.protocol !== "https:" || a.hostname === "" ? null : r;
    }
    function u(t) {
      return m(t) > e;
    }
    function c(e) {
      return m(e) > l;
    }
    function d(e) {
      var t = e[0];
      if (t == null) return null;
      try {
        return new URL(t).hostname.replace(/^www\./, "");
      } catch (e) {
        return t;
      }
    }
    function m(e) {
      return new TextEncoder().encode(e).length;
    }
    ((i.normalizeHatchSecureCredentialWebsite = s),
      (i.isHatchSecureCredentialUsernameTooLong = u),
      (i.isHatchSecureCredentialPasswordTooLong = c),
      (i.hatchSecureCredentialHost = d));
  },
  66,
);
