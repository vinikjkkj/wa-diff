__d(
  "cometComposerValidateVideoFile",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      if ((n === void 0 && (n = !1), e.type === "image/gif")) return null;
      if (e.size < t.min_size) {
        var r = Math.round(t.min_size / 1024);
        return {
          error: s._(
            /*BTDS*/ "The video file you tried to upload is too small. The minimum size for a video file is {min-size} KB. Please try again with a larger file.",
            [s._param("min-size", r)],
          ),
          errorDescription: "video_validation_rejected_min_size",
        };
      }
      if (e.size > t.max_size) {
        var o = Math.floor(t.max_size / 1024 / 1024);
        return {
          error: s._(
            /*BTDS*/ "The video file you tried to upload is too large. The maximum size for a video file is {max-size} MB. Please try again with a smaller file.",
            [s._param("max-size", o)],
          ),
          errorDescription: "video_validation_rejected_max_size",
        };
      }
      var a = e.name,
        i = a.lastIndexOf(".");
      if (i !== -1) {
        var l = a.slice(i + 1).toLowerCase();
        if (l !== "" && t.extensions[l] == null)
          return {
            error: n
              ? s._(/*BTDS*/ "Unsupported file type")
              : s._(
                  /*BTDS*/ "Sorry, the file you selected is in a format that we don't support. Please use one of our recommended formats for video files.",
                ),
            errorDescription: "video_validation_rejected_extension",
          };
      }
      return null;
    }
    l.default = e;
  },
  226,
);
