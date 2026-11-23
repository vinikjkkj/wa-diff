__d(
  "maybeConvertMessageTextMentionsV2ToV1",
  ["WACommon.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        e == null ||
        e.text == null ||
        e.mentions == null ||
        e.mentions.length === 0
      )
        return e;
      var t = e.text,
        n = [],
        r = [],
        a = 0;
      for (var i of e.mentions) {
        var l = i.length,
          s = i.mentionedJid,
          u = i.mentionType,
          c = i.offset;
        u !== o("WACommon.pb").MENTION_MENTION_TYPE.PROFILE ||
          c == null ||
          l == null ||
          s == null ||
          (r.push(s + "@msgr"),
          n.push(t.substring(a, c)),
          n.push("@" + s + "@msgr"),
          (a = c + l));
      }
      return r.length === 0
        ? e
        : (n.push(t.substring(a)),
          babelHelpers.extends({}, e, {
            text: n.join(""),
            mentionedJid: r,
            mentions: [],
          }));
    }
    l.default = e;
  },
  98,
);
