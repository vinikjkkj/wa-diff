__d(
  "WAMaybeTranscodeOggOpusToWavForPlayback",
  [
    "FBLogger",
    "WABlobToArrayBuffer",
    "WAIsOgg",
    "WAOpusRecorderPlayer",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = function () {
        return r("FBLogger")("wmi").tags(["audio"]);
      },
      m = r("justknobx")._("4988"),
      p = new Audio().canPlayType("audio/ogg"),
      _ = p === "probably" || p === "maybe";
    async function f(t) {
      if (_)
        return (
          d().DEBUG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Ogg playback supported no need to transcode",
              ])),
          ),
          t
        );
      if (
        (d().DEBUG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Ogg playback is not supported. Start transcoding",
            ])),
        ),
        t.size > m)
      )
        return (
          d().MUSTFIX(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "blob size too large",
              ])),
          ),
          t
        );
      var n = await o("WABlobToArrayBuffer").blobToArrayBuffer(t);
      if (!o("WAIsOgg").isOgg(new Uint8Array(n)))
        return (
          d().DEBUG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "blob is not Ogg, skip transcode",
              ])),
          ),
          t
        );
      var a = new (r("WAOpusRecorderPlayer"))(t);
      return a.generateBlob();
    }
    ((l.isOggPlaybackSupported = _),
      (l.maybeTranscodeOggOpusToWavForPlayback = f));
  },
  98,
);
