__d(
  "WAWebFormatLocationMsgText",
  ["fbt", "WAWebFormatMsgTextUtils", "WAWebUnformatMsg"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = n.unformat,
        i = a === void 0 ? !0 : a;
      if (t.isFromTemplate || t.isDynamicReplyButtonsMsg) {
        var l = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
        return l != null
          ? i
            ? r("WAWebUnformatMsg")(t, l)
            : l
          : t.loc || s._(/*BTDS*/ "Location");
      }
      return t.isLive
        ? t.comment || s._(/*BTDS*/ "Live location")
        : t.loc || s._(/*BTDS*/ "Location");
    }
    l.default = e;
  },
  226,
);
