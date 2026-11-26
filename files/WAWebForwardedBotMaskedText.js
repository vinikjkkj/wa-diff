__d(
  "WAWebForwardedBotMaskedText",
  ["fbt", "WAWebForwardedBotMessageUtils", "WAWebMsgType"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u(t) {
      return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebForwardedBotMessageUtils").isMaskedForwardedBotCopy(t)
        ? null
        : e().toString();
    }
    ((l.getForwardedBotMaskedWarning = e),
      (l.getMaskedForwardedBotCopyText = u));
  },
  226,
);
