__d(
  "oz-player/utils/OzUrlHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e,
        n = t.indexOf("://"),
        r = t.indexOf("/", n + 3);
      return (r > n && (t = t.substring(r)), t);
    }
    function l(e) {
      var t = e,
        n = t.lastIndexOf("/"),
        r = t.lastIndexOf("://");
      return (n > r + 2 && (t = t.substring(0, n + 1)), t);
    }
    function s(e) {
      var t = e;
      return (
        (t = l(t)),
        t.endsWith("/") ? l(t.substring(0, t.length - 1)) : t
      );
    }
    function u(e, t) {
      for (var n = l(e), r = t; r.length; )
        if (r.startsWith("./")) r = r.substring(2);
        else if (r.startsWith("../"))
          ((r = r.substring(3)),
            (n = s(n)),
            n.endsWith("/") && (n = n.substring(0, n.length - 1)));
        else if (r.startsWith("..")) ((r = r.substring(2)), (n = s(n)));
        else if (r.startsWith(".")) r = r.substring(1);
        else break;
      return (r && r.length && (n.endsWith("/") || (n += "/"), (n += r)), n);
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (!t || !t.length) return "";
      if (t.length === 1) return t[0];
      for (var r = t.shift(); t.length > 0; ) r = u(r, t.shift());
      return r;
    }
    function d(e, t) {
      return m(t) ? t : c(e, t);
    }
    function m(e) {
      var t = /^https?:\/\//i;
      return t.test(e);
    }
    ((i.stripToPathAndQueryOnly = e),
      (i.joinRelativeUrlPaths = c),
      (i.joinUrlPaths = d));
  },
  66,
);
