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
      if (n === "" || /^[/.?#]/.test(n) || n.includes("\\")) return null;
      var r = /^https?:\/\//i.test(n);
      if (!r && /^[a-z][a-z0-9+.-]*:(?!\d)/i.test(n)) return null;
      var o = r ? n : "https://" + n,
        a =
          (t = o.slice(o.indexOf("://") + 3).split(/[/?#]/, 1)[0]) != null
            ? t
            : "";
      if (a === "" || a.includes("@") || /\s/.test(a)) return null;
      var i;
      try {
        i = new URL(o);
      } catch (e) {
        return null;
      }
      return i.hostname === "" ||
        /^\.+$/.test(i.hostname) ||
        (!r && !i.hostname.includes("."))
        ? null
        : ((i.protocol = "https:"), i.href);
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
