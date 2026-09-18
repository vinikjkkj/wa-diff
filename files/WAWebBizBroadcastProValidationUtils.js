__d(
  "WAWebBizBroadcastProValidationUtils",
  ["fbt", "$InternalEnum", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["VALID", "INVALID"]);
    function u(e) {
      return e == null
        ? !0
        : e.file != null &&
            (e.mediaType === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              e.mediaType === o("WAWebMsgType").MSG_TYPE.VIDEO);
    }
    function c(t) {
      return t === ""
        ? { status: e.VALID }
        : t === "." || !/^\d*\.?\d*$/.test(t)
          ? {
              status: e.INVALID,
              errorMessage: s._(/*BTDS*/ "Please enter a valid number"),
            }
          : { status: e.VALID };
    }
    function d(e, t) {
      return e != null && t != null && e > t;
    }
    ((l.ValidationStatus = e),
      (l.validateAttachmentData = u),
      (l.validateNumericInput = c),
      (l.isMaxBidOverCeiling = d));
  },
  226,
);
