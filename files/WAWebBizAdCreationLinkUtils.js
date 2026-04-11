__d(
  "WAWebBizAdCreationLinkUtils",
  ["WAWebLinkify"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebLinkify").findLinks(e);
      if (t.length === 0) return null;
      var n = t[t.length - 1],
        r = n.index + n.url.length,
        a = e.substring(r).trim();
      if (a.length > 0) return null;
      var i = e.substring(0, n.index).trim();
      return { textBeforeLink: i, linkUrl: n.href, linkText: n.url };
    }
    l.extractTrailingLink = e;
  },
  98,
);
