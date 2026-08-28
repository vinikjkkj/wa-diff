__d(
  "ZenonSpeakerTracker",
  ["ZenonCallsHooks", "ZenonLayout", "ZenonRenderedView", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = null,
      c = [],
      d = [];
    function m(e, t, n) {
      ((u = e), (c = t), (d = n));
    }
    function p(e, t) {
      for (var n of e)
        if (n.remote) {
          var o = t.get(n.trackId);
          if (
            o &&
            ((o.isDominantSpeaker = c.indexOf(n.trackId) !== -1), u != null)
          )
            switch (u) {
              case r("ZenonLayout").Grid:
                o.renderedView = r("ZenonRenderedView").GRID;
                break;
              case r("ZenonLayout").DominantSpeaker: {
                var a = d.indexOf(n.trackId) !== -1;
                o.renderedView = a
                  ? r("ZenonRenderedView").PINNED
                  : r("ZenonRenderedView").THUMBNAIL;
                break;
              }
            }
        }
    }
    function _(e, t, n) {
      var o,
        a,
        i,
        l,
        u =
          (o = r("ZenonCallsHooks").useLiveMediaTrack(
            t != null ? t : "",
            "video",
          )) == null
            ? void 0
            : o.trackId,
        c =
          (a = r("ZenonCallsHooks").useLiveMediaTrack(
            t != null ? t : "",
            "audio",
          )) == null
            ? void 0
            : a.trackId,
        d =
          (i = r("ZenonCallsHooks").useLiveMediaTrack(
            n != null ? n : "",
            "video",
          )) == null
            ? void 0
            : i.trackId,
        p =
          (l = r("ZenonCallsHooks").useLiveMediaTrack(
            n != null ? n : "",
            "audio",
          )) == null
            ? void 0
            : l.trackId;
      s(
        function () {
          m(e, [u, c], [d, p]);
        },
        [d, p, e, u, c],
      );
    }
    ((l.updateLayout = m),
      (l.updateStats = p),
      (l.useUpdateSpeakerTracker = _));
  },
  98,
);
