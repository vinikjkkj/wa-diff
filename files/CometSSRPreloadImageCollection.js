__d(
  "CometSSRPreloadImageCollection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = new Set();
    function s(t) {
      e.add(t);
    }
    function u() {
      e.clear();
    }
    function c() {
      if (!e || e.size === 0) return "";
      var t = [];
      return (
        e == null ||
          e.forEach(function (e) {
            l.has(e) ||
              (t.push('<link rel="preload" as="image" href="' + e + '" />'),
              l.add(e));
          }),
        t.join("\n")
      );
    }
    ((i.addImage = s),
      (i.clearImageCollection = u),
      (i.imagesToHTMLLinkString = c));
  },
  66,
);
