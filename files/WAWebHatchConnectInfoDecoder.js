__d(
  "WAWebHatchConnectInfoDecoder",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["oauth"]);
    function s(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
            ? t
            : e,
        r = o("WAWebHatchJsonReaders").readObject(n, "action"),
        a = o("WAWebHatchJsonReaders").readTrimmedString(r, "type");
      if (o("WAWebHatchJsonReaders").isBlankText(a)) return null;
      if (a !== "oauth") return { kind: "unsupported", wireType: a };
      var i = o("WAWebHatchJsonReaders").readTrimmedString(r, "url");
      return u(i)
        ? { kind: "oauth", url: i }
        : { kind: "unsupported", wireType: a };
    }
    function u(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      return t.protocol === "https:" && t.username === "" && t.password === "";
    }
    ((l.RUNNABLE_CONNECT_ACTION_TYPES = e),
      (l.decodeHatchConnectAction = s),
      (l.isUsableHttpsUrl = u));
  },
  98,
);
