__d(
  "WAWebVoipVideoEncoderType",
  ["$InternalEnum", "WAWebVoipWebCodecsEncoderState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      WEBCODECS_H264: "webcodecs_h264",
      OPENH264: "openh264",
    });
    function s() {
      var t =
          o("WAWebVoipWebCodecsEncoderState").getAllWebCodecsEncodeParams()
            .size > 0,
        n = o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled();
      return t || n ? e.WEBCODECS_H264 : null;
    }
    ((l.VideoEncoderType = e), (l.getActiveVideoEncoderType = s));
  },
  98,
);
