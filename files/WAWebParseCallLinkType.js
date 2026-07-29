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
    function m(t, n) {
      var r;
      n === void 0 && (n = !1);
      var a = (r = t.match(e)) != null ? r : t.match(s);
      return (
        a == null && o("WAWebCurrentUser").isEmployee() && (a = t.match(u)),
        a == null || (!n && !o("WAWebVoipGatingUtils").callLinksEnabled())
          ? null
          : a[1].toLowerCase() === "video"
            ? "video"
            : "voice"
      );
    }
    l.default = m;
  },
  98,
);
