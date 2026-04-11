__d(
  "WAWebFormatTemplateButtonReplyMsgText",
  ["WAWebUnformatMsg"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.msg,
        o = e.options.unformat;
      return o === !0
        ? r("WAWebUnformatMsg")(n, n.body)
        : (t = n.body) != null
          ? t
          : "";
    }
    l.default = e;
  },
  98,
);
