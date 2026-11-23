__d(
  "WAWebMediaEditorFilmstripThumbAriaLabel",
  ["fbt", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.filename,
        n = e.index,
        r = e.isGif,
        o = e.totalCount,
        a = e.type,
        i = u(a, r);
      return t != null && t !== ""
        ? s._(/*BTDS*/ "", [
            s._enum(i, {
              audio: "audio",
              document: "document",
              gif: "GIF",
              image: "photo",
              video: "video",
            }),
            s._param("filename", t),
            s._param("position", n),
            s._param("total", o),
          ])
        : s._(/*BTDS*/ "", [
            s._enum(i, {
              audio: "audio",
              document: "document",
              gif: "GIF",
              image: "photo",
              video: "video",
            }),
            s._param("position", n),
            s._param("total", o),
          ]);
    }
    function u(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.VIDEO && t
        ? "gif"
        : e === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? "video"
          : e === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? "image"
            : e === o("WAWebMsgType").MSG_TYPE.AUDIO
              ? "audio"
              : "document";
    }
    l.getThumbAriaLabel = e;
  },
  226,
);
