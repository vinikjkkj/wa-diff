__d(
  "MAWDbMedia",
  ["MAWMsgType"],
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
    ((l.MEDIA_TYPE = s),
      (l.convertNumberToMediaId = u),
      (l.convertToMediaId64 = c));
  },
  98,
);
