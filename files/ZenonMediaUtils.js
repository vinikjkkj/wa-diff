__d(
  "ZenonMediaUtils",
  ["ZenonUIConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        convertToZenonImmutableMediaTrack: function (n, r, o, a) {
          var t,
            i = r.contentHint,
            l = r.isRemote,
            s = r.isUserMuted,
            u = r.stream,
            c = r.trackType,
            d = u != null ? u : e.createStreamWithTrack(n),
            m = c != null ? c : n.kind === "audio" ? "audio" : "video";
          return {
            contentHint: (t = i != null ? i : n.contentHint) != null ? t : "",
            contentType: m,
            displaySurface: n.getSettings().displaySurface,
            enabled: n.enabled,
            flags: Object.freeze({}),
            label: n.label,
            name: a != null ? a : "",
            pausedDownlink: !1,
            remote: l,
            trackId: o != null ? o : n.id,
            userMuted: s,
            webrtcStream: d,
            webrtcTrack: n,
          };
        },
        createSilentTrack: function () {
          var t = new (window.AudioContext || window.webkitAudioContext)(),
            n = t.createBuffer(1, t.sampleRate * 5, t.sampleRate),
            r = t.createBufferSource();
          ((r.buffer = n), (r.loop = !0));
          var a = t.createMediaStreamDestination();
          (r.connect(a), r.start());
          var i = a.stream.getAudioTracks()[0];
          return (
            (i.enabled = !1),
            babelHelpers.extends(
              {},
              e.convertToZenonImmutableMediaTrack(i, {
                isRemote: !1,
                isUserMuted: !0,
                stream: a.stream,
                trackType: "audio",
              }),
              { label: o("ZenonUIConstants").ZENON_SILENT_AUDIO },
            )
          );
        },
        createStreamWithTrack: function (t) {
          var e = new MediaStream();
          return (e.addTrack(t), e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
