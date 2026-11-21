__d(
  "WAWebInboundMsgRowPlaceholder",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER
        ? { kind: "debug", nackReason: e.nackReason }
        : {
            kind: "ciphertext",
            placeholderAddReason: e.placeholderAddReason,
            placeholderType: e.placeholderType,
          };
    }
    function s(e, t, n) {
      return e.kind === "debug"
        ? {
            type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
            msgInfo: t,
            nackReason: e.nackReason,
          }
        : {
            type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
            msgInfo: t,
            msgMeta: n,
            placeholderAddReason: e.placeholderAddReason,
            placeholderType: e.placeholderType,
          };
    }
    ((l.toInboundMsgRowPlaceholder = e), (l.toPlaceholderParams = s));
  },
  98,
);
