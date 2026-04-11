__d(
  "sanitizeURIStringForLoom",
  ["WebLoomStaticResourceFileTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = 0,
      u = /(\d{4,})/gm,
      c = /([a-f0-9]{8,})/gm;
    function d(e) {
      var t = e.replace(u, "{N}");
      return t.replace(c, "{N}");
    }
    function m(e) {
      var t = e.getPath(),
        n = t.lastIndexOf(".");
      return n === -1 ? "" : t.substring(n + 1);
    }
    function p() {
      return s++;
    }
    function _(e) {
      if (e.getProtocol() !== "http" && e.getProtocol() !== "https") return !1;
      var t = Number(e.getPort());
      return t && t !== 80 && t !== 443
        ? !1
        : !!e.isSubdomainOfDomain("fbcdn.net");
    }
    function f(e, t) {
      var n = new t.URI(e),
        r = m(n);
      if (
        (n.setQueryString(""),
        n.setFragment(""),
        r === "" || r === "php" || r === "ico")
      ) {
        var a = d(n.getPath());
        a !== n.getPath() && n.setPath(a + "/sanitized-" + p());
      } else
        o("WebLoomStaticResourceFileTypes").isStaticResourceFileType(r) ||
          n.setPath("/sanitized" + (_(n) ? "-cdn" : "") + "-" + p() + "." + r);
      return n.toString();
    }
    function g(t, n) {
      return n.isBrowser("IE")
        ? ""
        : (e.has(t) || e.set(t, f(t, n)), e.get(t) || "");
    }
    l.default = g;
  },
  98,
);
