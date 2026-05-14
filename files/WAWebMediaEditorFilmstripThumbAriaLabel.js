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
        ? s._(
            /*BTDS*/ '_j{"audio":"Audio thumbnail, {filename}, item {position} of {total}","document":"Document thumbnail, {filename}, item {position} of {total}","gif":"GIF thumbnail, {filename}, item {position} of {total}","image":"Image thumbnail, {filename}, item {position} of {total}","video":"Video thumbnail, {filename}, item {position} of {total}"}',
            [
              s._enum(i, {
                audio: "Audio",
                document: "Document",
                gif: "GIF",
                image: "Image",
                video: "Video",
              }),
              s._param("filename", t),
              s._param("position", n),
              s._param("total", o),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"audio":"Audio thumbnail, item {position} of {total}","document":"Document thumbnail, item {position} of {total}","gif":"GIF thumbnail, item {position} of {total}","image":"Image thumbnail, item {position} of {total}","video":"Video thumbnail, item {position} of {total}"}',
            [
              s._enum(i, {
                audio: "Audio",
                document: "Document",
                gif: "GIF",
                image: "Image",
                video: "Video",
              }),
              s._param("position", n),
              s._param("total", o),
            ],
          );
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
