__d(
  "WAWebHatchJarvisDocumentText",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = 280;
    function s(e) {
      var t = new DOMParser().parseFromString(e, "text/html");
      for (var n of t.querySelectorAll("script, style, noscript")) n.remove();
      var r = t.body;
      if (r == null) return "";
      for (
        var o = t.createTreeWalker(r, NodeFilter.SHOW_TEXT), a = [];
        o.nextNode() != null;
      ) {
        var i;
        a.push((i = o.currentNode.textContent) != null ? i : "");
      }
      var s = a.join(" ").replace(/\s+/g, " ").trim();
      return s.length > l ? s.slice(0, l).trimEnd() + "\u2026" : s;
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new FileReader();
        ((r.onload = function () {
          return e(typeof r.result == "string" ? r.result : "");
        }),
          (r.onerror = function () {
            return n(r.error);
          }),
          r.readAsText(t));
      });
    }
    ((i.htmlBodyText = s), (i.readBlobText = u));
  },
  66,
);
