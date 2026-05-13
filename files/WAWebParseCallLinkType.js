__d(
  "WAWebParseCallLinkType",
  ["WAWebCurrentUser", "WAWebVoipGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^https:\/\/call\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      s =
        /^https:\/\/web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      u =
        /^https:\/\/dev-web\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      c =
        /^https:\/\/call\.[^/]+\.whatsapp\.com\/(video|voice)\/(\w+)(?:\?.*)?$/i,
      d =
        /^https:\/\/dev-web\.[^/]+\.whatsapp\.com\/call\/(video|voice)\/(\w+)(?:\?.*)?$/i;
    function m(t) {
      var n,
        r = (n = t.match(e)) != null ? n : t.match(s);
      return (
        r == null && o("WAWebCurrentUser").isEmployee() && (r = t.match(u)),
        r == null || !o("WAWebVoipGatingUtils").callLinksEnabled()
          ? null
          : r[1].toLowerCase() === "video"
            ? "video"
            : "voice"
      );
    }
    l.default = m;
  },
  98,
);
