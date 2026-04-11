__d(
  "WAWebMediaMsgTooLargeFailIcon.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFailIcon.react",
    "WAWebL10nFilesize",
    "WAWebMediaGatingUtils",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebServerPropConstants",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.displayType,
        a = e.mediaType;
      r("vulture")("7i2IRZAIHBeSZEKDcErvcDNj9xA=");
      var i, l, s, c;
      t[0] !== n || t[1] !== a
        ? ((l = d(a)),
          (i = r("WAWebFailIcon.react")),
          (s = n),
          (c = m.bind(null, l)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = c))
        : ((i = t[2]), (l = t[3]), (s = t[4]), (c = t[5]));
      var p;
      return (
        t[6] !== i || t[7] !== l || t[8] !== s || t[9] !== c
          ? ((p = u.jsx(i, {
              displayType: s,
              onClick: c,
              tooltip: l,
              ariaLabel: l,
            })),
            (t[6] = i),
            (t[7] = l),
            (t[8] = s),
            (t[9] = c),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function d(e) {
      var t = o("WAWebL10nFilesize").getL10nFilesize(
        o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES,
      );
      switch (e) {
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return s._(
            /*BTDS*/ "This audio is too large. You can send audio up to {maxSize}.",
            [
              s._param(
                "maxSize",
                o("WAWebL10nFilesize").getL10nFilesize(
                  o("WAWebMediaGatingUtils").getUploadLimit("audio"),
                ),
              ),
            ],
          );
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return s._(
            /*BTDS*/ "This image is too large. You can send images up to {maxSize}.",
            [
              s._param(
                "maxSize",
                o("WAWebL10nFilesize").getL10nFilesize(
                  o("WAWebMediaGatingUtils").getUploadLimit("image"),
                ),
              ),
            ],
          );
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return s._(
            /*BTDS*/ "This video is too large. You can send videos up to {maxSize}.",
            [
              s._param(
                "maxSize",
                o("WAWebL10nFilesize").getL10nFilesize(
                  o("WAWebMediaGatingUtils").getUploadLimit("video"),
                ),
              ),
            ],
          );
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return s._(
            /*BTDS*/ "This document is too large. You can send documents up to {maxSize}.",
            [s._param("maxSize", t)],
          );
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
        default:
          return s._(
            /*BTDS*/ "This file is too large. You can send files up to {maxSize}.",
            [s._param("maxSize", t)],
          );
      }
    }
    function m(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: e,
        }),
      );
    }
    l.default = c;
  },
  226,
);
