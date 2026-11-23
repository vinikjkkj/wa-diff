__d(
  "WAWebFormatLocationMsgText",
  ["fbt", "WAWebFormatMsgTextUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        r = n.unformat,
        a = r === void 0 ? !0 : r;
      if (t.isFromTemplate || t.isDynamicReplyButtonsMsg) {
        var i = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
        return i != null
          ? a
            ? o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
                t,
                i,
                n,
              )
            : i
          : t.loc || s._(/*BTDS*/ "");
      }
      return t.isLive
        ? t.comment != null && t.comment !== ""
          ? t.comment
          : s._(/*BTDS*/ "")
        : t.loc || s._(/*BTDS*/ "");
    }
    l.default = e;
  },
  226,
);
