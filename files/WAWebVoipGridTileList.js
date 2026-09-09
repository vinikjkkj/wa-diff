__d(
  "WAWebVoipGridTileList",
  ["WAWebUserPrefsMeUser", "WAWebVoipVideoRenderSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = [];
      for (var a of e) {
        var i = t != null && a.equals(t),
          l = i && n,
          s = o("WAWebUserPrefsMeUser").isMeAccount(a)
            ? o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
                o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .CAMERA,
              )
            : o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.peer(
                a,
                o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
                  .CAMERA,
              );
        if (
          (r.push({
            forceVideoOn: !1,
            isScreenShare: i && !l,
            jid: a,
            key: a.toString(),
            pinStream: l ? "camera" : null,
            renderSource: s,
          }),
          l)
        ) {
          var u = o(
            "WAWebVoipVideoRenderSource",
          ).WAWebVoipVideoRenderSource.peer(
            a,
            o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream
              .SCREEN_SHARE,
          );
          r.push({
            forceVideoOn: !0,
            isScreenShare: !0,
            jid: a,
            key: u.key,
            pinStream: "screen",
            renderSource: u,
          });
        }
      }
      return r;
    }
    l.buildGridTiles = e;
  },
  98,
);
