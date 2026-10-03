__d(
  "WAWebHatchNoiseIngressUrl",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 255,
      s = "wss://hatch.metaaivm.com/v1/noise",
      u = "<redacted>";
    function c(t) {
      var n = t.trim();
      if (n === "") throw r("err")("WAWebHatchNoiseIngressUrl: missing VM id");
      if (n.length > e)
        throw r("err")("WAWebHatchNoiseIngressUrl: invalid VM id");
      return n;
    }
    function d(e) {
      var t = new URLSearchParams();
      return (
        t.append("vm_id", c(e.vmId)),
        t.append("auth_token", e.abraToken),
        t.append("notary_token", e.notaryToken),
        t.append("app_id", e.appId),
        t.append("request_id", e.requestId),
        s + "?" + t.toString()
      );
    }
    function m(e) {
      try {
        var t = new URL(e);
        for (var n of ["auth_token", "notary_token"])
          t.searchParams.has(n) && t.searchParams.set(n, u);
        return t.toString();
      } catch (t) {
        return e.replace(/([?&](?:auth_token|notary_token)=)[^&#]*/g, "$1" + u);
      }
    }
    ((l.buildNoiseWsUrl = d), (l.redactTokens = m));
  },
  98,
);
