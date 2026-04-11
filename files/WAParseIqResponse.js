__d(
  "WAParseIqResponse",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.content;
      if (r && Array.isArray(r) && r[0]) {
        var a = r[0];
        if (a.tag === "error") {
          var i = a.attrs || {},
            l;
          n && (typeof n == "function" ? (l = n(e)) : (l = n.parseOrThrow(a)));
          var u = l;
          return {
            success: !1,
            errorCode: parseInt(i.code, 10),
            errorText: o("WAWap").decodeAsString(i.text) || "",
            errorType: o("WAWap").decodeAsString(i.type) || "",
            errorBackoff: parseInt(i.backoff, 10),
            toString: s,
            customError: u,
          };
        }
      }
      return typeof t == "function"
        ? { success: !0, result: t(e) }
        : { success: !0, result: t.parseOrThrow(e) };
    }
    function s() {
      return "IqError " + this.errorCode + ": " + this.errorText;
    }
    l.parseIqResponse = e;
  },
  98,
);
