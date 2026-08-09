__d(
  "MAWDbMedia",
  ["MAWMsgType", "WAMediaUtils", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        DOCUMENT_FILE: (e = o("MAWMsgType")).MSG_TYPE.DOCUMENT_FILE,
        GIF: e.MSG_TYPE.GIF,
        IMAGE: e.MSG_TYPE.IMAGE,
        PTT: e.MSG_TYPE.PTT,
        STICKER: e.MSG_TYPE.STICKER,
        VIDEO: e.MSG_TYPE.VIDEO,
      };
    function u(e) {
      return e;
    }
    function c(e) {
      return e;
    }
    function d(e, t) {
      var n = e.mediaEntries.get(t);
      if (n == null)
        return o("WAResultOrError").makeError("missing-media-entry");
      var r = o("WAMediaUtils").decodeMediaEntryData(n),
        a = r.serverMediaType;
      return a == null
        ? o("WAResultOrError").makeError("missing-server-media-type")
        : o("WAResultOrError").makeResult(a);
    }
    ((l.MEDIA_TYPE = s),
      (l.convertNumberToMediaId = u),
      (l.convertToMediaId64 = c),
      (l.getServerMediaType = d));
  },
  98,
);
