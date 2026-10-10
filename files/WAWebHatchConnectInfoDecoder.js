__d(
  "WAWebHatchConnectInfoDecoder",
  ["WAWebHatchConnectorsListDecoder", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["consent_only", "foa_auth", "messenger", "oauth"]);
    function s(e) {
      var t,
        n =
          (t = o("WAWebHatchJsonReaders").readObject(e, "result")) != null
            ? t
            : e,
        r = d(o("WAWebHatchJsonReaders").readObject(n, "action"));
      return r == null
        ? null
        : {
            action: r,
            consent: o(
              "WAWebHatchConnectorsListDecoder",
            ).decodeHatchConnectConsent(
              o("WAWebHatchJsonReaders").readObject(n, "consent"),
            ),
          };
    }
    function u(e) {
      var t, n;
      return (t = (n = s(e)) == null ? void 0 : n.action) != null ? t : null;
    }
    function c(e) {
      var t;
      try {
        t = new URL(e);
      } catch (e) {
        return !1;
      }
      return t.protocol === "https:" && t.username === "" && t.password === "";
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readTrimmedString(e, "type");
      if (o("WAWebHatchJsonReaders").isBlankText(t)) return null;
      if (t === "oauth") {
        var n = o("WAWebHatchJsonReaders").readTrimmedString(e, "url");
        return c(n)
          ? { kind: "oauth", url: n }
          : { kind: "unsupported", wireType: t };
      }
      return t === "foa_auth"
        ? { kind: "foa_auth" }
        : t === "consent_only"
          ? { kind: "consent_only" }
          : t === "messenger"
            ? { kind: "messenger" }
            : { kind: "unsupported", wireType: t };
    }
    ((l.RUNNABLE_CONNECT_ACTION_TYPES = e),
      (l.decodeHatchConnectInfo = s),
      (l.decodeHatchConnectAction = u),
      (l.isUsableHttpsUrl = c));
  },
  98,
);
