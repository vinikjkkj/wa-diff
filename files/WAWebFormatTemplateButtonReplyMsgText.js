__d(
  "WAWebFormatTemplateButtonReplyMsgText",
  ["WAWebFormatMsgTextUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = e.options;
      if (n.unformat !== !0) {
        var r;
        return (r = t.body) != null ? r : "";
      }
      return o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
        t,
        t.body,
        n,
      );
    }
    l.default = e;
  },
  98,
);
