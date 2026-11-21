__d(
  "WAWebHatchPeerPairingUrl",
  ["WAWebHatchUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["muse.ai", "meta.ai", "museai.com"],
      s = new Set(["/peer/accept", "/hatch/peer/accept"]);
    function u(t) {
      var n = o("WAWebHatchUrl").toWebUrl(t);
      if (n == null) return !1;
      var r = new URL(n),
        a = r.hash,
        i = r.hostname,
        l = r.pathname,
        u = i.replace(/\.+$/, "");
      return (
        a.length > 1 &&
        s.has(l.replace(/\/+$/, "")) &&
        e.some(function (e) {
          return u === e || u.endsWith("." + e);
        })
      );
    }
    l.isHatchPeerPairingInvitationUrl = u;
  },
  98,
);
