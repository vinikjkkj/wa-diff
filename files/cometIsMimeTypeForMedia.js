__d(
  "cometIsMimeTypeForMedia",
  ["FBLogger", "UFICommentFileInputAcceptValues.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { file: null, photo: null, video: null },
      s = { "image/gif": "video", "image/webp": "video" };
    function u(e) {
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .map(function (e) {
          return e.replace(/\/\*$/, "/");
        });
    }
    function c(t, n, o) {
      e[t] == null && (e[t] = u(o));
      var a = e[t];
      if (a == null)
        throw r("FBLogger")("ufi2").mustfixThrow(
          "CometIsMimeTypeForMedia prefixes can't be null",
        );
      var i = s[n];
      return i != null
        ? i === t
        : a.some(function (e) {
            return n.startsWith(e);
          });
    }
    function d(e) {
      return c(
        "photo",
        e,
        r("UFICommentFileInputAcceptValues.experimental").photos,
      );
    }
    function m(e) {
      return c(
        "video",
        e,
        r("UFICommentFileInputAcceptValues.experimental").videos,
      );
    }
    function p(e) {
      return c(
        "file",
        e,
        r("UFICommentFileInputAcceptValues.experimental").files,
      );
    }
    ((l.isMimeTypeForPhoto = d),
      (l.isMimeTypeForVideo = m),
      (l.isMimeTypeForFile = p));
  },
  98,
);
