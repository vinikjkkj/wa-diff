__d(
  "WAWebVoipGridTileList",
  [
    "WAWebUserPrefsMeUser",
    "WAWebVoipScreenShareStreamKey",
    "WAWebVoipVideoRendererInterface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = [];
      for (var a of e) {
        var i = t != null && a.equals(t),
          l = i && n,
          s = a.toString();
        if (
          (r.push({
            forceVideoOn: !1,
            isScreenShare: i && !l,
            jid: a,
            key: s,
            peerJid: o("WAWebUserPrefsMeUser").isMeAccount(a)
              ? o("WAWebVoipVideoRendererInterface").selfPreviewJid
              : s,
            pinStream: l ? "camera" : null,
          }),
          l)
        ) {
          var u = o("WAWebVoipScreenShareStreamKey").getScreenShareStreamKey(s);
          r.push({
            forceVideoOn: !0,
            isScreenShare: !0,
            jid: a,
            key: u,
            peerJid: u,
            pinStream: "screen",
          });
        }
      }
      return r;
    }
    l.buildGridTiles = e;
  },
  98,
);
