__d(
  "WAWebFormatBizContentPlaceholderMsgText",
  ["fbt", "WAWebBizContentPlaceholderMsgData.flow"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = t.bizContentPlaceholderType;
      if (n == null) return s._(/*BTDS*/ "");
      switch (n) {
        case o("WAWebBizContentPlaceholderMsgData.flow")
          .BizContentPlaceholderType.MASK_LINKED_DEVICES:
          return s._(/*BTDS*/ "");
      }
      return s._(/*BTDS*/ "");
    }
    l.default = e;
  },
  226,
);
