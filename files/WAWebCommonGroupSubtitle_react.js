__d(
  "WAWebCommonGroupSubtitle.react",
  [
    "fbt",
    "WAWebChatContactUtils",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFbtIntlList",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      t === void 0 && (t = {});
      var n = t,
        a = n.formatString,
        i = a === void 0 ? "" : a,
        l = r("WAWebFbtIntlList")(
          e.map(function (e) {
            var t = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e),
              n = t
                ? o("WAWebChatContactUtils")
                    .getFormattedNotifyName(
                      o("WAWebContactGetters").getNotifyName(e),
                    )
                    .toString()
                : o("WAWebFrontendContactGetters").getFormattedName(e);
            return "" + i + n + i;
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        );
      return s._(
        /*BTDS*/ '_j{"*":"{contacts-list} are also in this group","_1":"{contacts-list} is also in this group"}',
        [s._plural(e.length), s._param("contacts-list", l)],
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.commonGroup,
        n = e.searchQuery,
        r = t[1],
        a = r.slice(0, 2),
        i = c(a, { formatString: "*" }),
        l = c(a).toString(),
        s = o("WAWebFormatConfiguration").Search({
          terms: [n == null ? void 0 : n.trimmed()],
        });
      return u.jsx(o("WAWebEmojiText.react").EmojiText, {
        text: i,
        formatters: s,
        titlify: !0,
        title: l,
        direction: "auto",
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
