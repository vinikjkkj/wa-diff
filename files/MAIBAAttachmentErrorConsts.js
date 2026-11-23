__d(
  "MAIBAAttachmentErrorConsts",
  ["fbt", "$InternalEnum", "MAIBAMediaAttachmentConstants"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("MAIBAMediaAttachmentConstants").MAX_FILE_SIZE_KB / 1024,
      u = n("$InternalEnum").Mirrored([
        "ALLOWED_FILE_TYPES_ERROR_MESSAGE",
        "ATTACHMENT_NOT_ADDED_ERROR_MESSAGE",
        "FILE_TOO_LARGE_ERROR_MESSAGE",
        "GENERIC_ERROR_MESSAGE",
      ]);
    function c(e, t) {
      switch ((t === void 0 && (t = !1), e)) {
        case u.ALLOWED_FILE_TYPES_ERROR_MESSAGE:
          return s._(/*BTDS*/ "");
        case u.ATTACHMENT_NOT_ADDED_ERROR_MESSAGE:
          return s._(/*BTDS*/ "");
        case u.FILE_TOO_LARGE_ERROR_MESSAGE:
          return t ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
        case u.GENERIC_ERROR_MESSAGE:
          return s._(/*BTDS*/ "");
      }
    }
    function d(t, n, r) {
      switch ((n === void 0 && (n = !1), r === void 0 && (r = !1), t)) {
        case u.ALLOWED_FILE_TYPES_ERROR_MESSAGE:
          return n
            ? r
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case u.ATTACHMENT_NOT_ADDED_ERROR_MESSAGE:
          return s._(/*BTDS*/ "");
        case u.FILE_TOO_LARGE_ERROR_MESSAGE:
          return n
            ? s._(/*BTDS*/ "", [s._param("maximum file size in megabytes", e)])
            : s._(/*BTDS*/ "", [s._param("maximum file size in megabytes", e)]);
        case u.GENERIC_ERROR_MESSAGE:
          return n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      }
    }
    ((l.MAIBAAttachmentErrors = u),
      (l.getErrorHeader = c),
      (l.getErrorMessage = d));
  },
  226,
);
