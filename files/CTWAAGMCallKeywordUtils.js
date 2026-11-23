__d(
  "CTWAAGMCallKeywordUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        /\bcall us\b/,
        /\bcall now\b/,
        /\bcall\/whatsapp\b/,
        /\bcall or whatsapp\b/,
        /\bcall or message\b/,
        /\bcall us now\b/,
        /\bcall us today\b/,
        /\bgive us a call\b/,
        /\bphone\s?:/,
      ],
      l = [
        /\blast call\b/,
        /\bspam call\b/,
        /\bon call\b/,
        /\boncall\b/,
        /\bcall center\b/,
        /\bcall forwarding\b/,
        /\bcall of duty\b/,
        /\bcall her daddy\b/,
        /\banswer the call\b/,
      ];
    function s(t, n) {
      var r = [t, n].filter(Boolean).join(" ").toLowerCase();
      if (r === "") return !1;
      for (var o of l) if (o.test(r)) return !1;
      for (var a of e) if (a.test(r)) return !0;
      return !1;
    }
    i.hasCallKeywordIntent = s;
  },
  66,
);
