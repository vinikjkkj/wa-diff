__d(
  "CometSSRPreloadImageCollection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      "'": "&#39;",
      '"': "&quot;",
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
    };
    function l(t) {
      return t.replace(/[\"&\'<>]/g, function (t) {
        return e[t];
      });
    }
    var s = new Set(),
      u = new Set();
    function c(e) {
      s.add(e);
    }
    function d() {
      s.clear();
    }
    function m() {
      if (!s || s.size === 0) return "";
      var e = [];
      return (
        s == null ||
          s.forEach(function (t) {
            u.has(t) ||
              (e.push('<link rel="preload" as="image" href="' + l(t) + '" />'),
              u.add(t));
          }),
        e.join("\n")
      );
    }
    ((i.addImage = c),
      (i.clearImageCollection = d),
      (i.imagesToHTMLLinkString = m));
  },
  66,
);
