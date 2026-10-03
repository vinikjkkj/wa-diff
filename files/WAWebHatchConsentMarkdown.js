__d(
  "WAWebHatchConsentMarkdown",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /\[([^\]]+)\]\(([^)\s]+)\)/g;
    function s(t) {
      var n = [],
        o = 0;
      for (var a of t.matchAll(e)) {
        var i = a.index,
          l = a[2];
        i == null ||
          r("WAWebURLUtils").isHttps(l) !== !0 ||
          (u(n, t.slice(o, i)),
          n.push({ type: "link", text: a[1], url: l }),
          (o = i + a[0].length));
      }
      return (u(n, t.slice(o)), n);
    }
    function u(e, t) {
      t !== "" && e.push({ type: "text", text: t });
    }
    l.parseHatchConsentParagraph = s;
  },
  98,
);
