__d(
  "AdsOsmipChatXFACUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
      /<xfac-challenge\s+display_text=\"([^\"]*)\"\s+challenge_id=\"([^\"]*)\"\s*(?:enrollment_context_enc=\"([^\"]*)\")?\s*\/>/g;
    function l(t) {
      if (t == null || t === "") return null;
      var n = [],
        r = t,
        o = 0;
      e.lastIndex = 0;
      for (var a = e.exec(t); a != null; ) {
        var i = a[0],
          l = a[1],
          s = a[2],
          u = a[3],
          c = a.index,
          d = c - o,
          m = {
            __typename: "XFBXFACGenAIChallengeObject",
            challenge_id: s,
            disabled_cta_tooltip_label: null,
            display_text: l,
            enrollment_context_enc: u != null ? u : null,
          };
        (n.push({ entity: m, length: l.length, offset: d }),
          (r = r.substring(0, d) + r.substring(d + i.length - o)),
          (o += i.length),
          (a = e.exec(t)));
      }
      return n.length === 0 ? null : { cleanText: r, entityRanges: n };
    }
    i.parseXFACChallengesFromText = l;
  },
  66,
);
