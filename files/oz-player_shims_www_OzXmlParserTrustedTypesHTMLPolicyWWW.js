__d(
  "oz-player/shims/www/OzXmlParserTrustedTypesHTMLPolicyWWW",
  ["TrustedTypes", "fb-error"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        createHTML: function (t) {
          if (
            t.startsWith('<?xml version="1.0"?>\n<') ||
            t.startsWith('<?xml version="1.0" encoding="UTF-8"?>\n<') ||
            t.startsWith('\n<MPD xmlns="urn:mpeg:dash:schema:mpd:2011"')
          )
            return t;
          throw r("fb-error").err(
            "Violating Trusted Type policies. Only works for XML.",
          );
        },
      },
      s = r("TrustedTypes").createPolicy("oz-player-xml", e);
    function u(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return s.createHTML.apply(s, [e].concat(n));
    }
    l.createTrustedHTMLForDOMParser = u;
  },
  98,
);
