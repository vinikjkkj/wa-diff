__d(
  "EntrypointA2UIStatusIcon",
  ["EntrypointA2UITypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { error: "error", warning: "warning" },
      s = "chat";
    function u(t) {
      var n,
        r = o("EntrypointA2UITypes").asString(t);
      return (n = r != null ? e[r] : null) != null ? n : "error";
    }
    function c(t) {
      var n = o("EntrypointA2UITypes").asString(t);
      return n != null && e[n] != null;
    }
    ((l.CHAT_ICON_TOKEN = s),
      (l.coerceStatusIconColor = u),
      (l.isStatusIconToken = c));
  },
  98,
);
