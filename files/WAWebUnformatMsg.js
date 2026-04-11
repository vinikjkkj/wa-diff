__d(
  "WAWebUnformatMsg",
  [
    "WAWebCommonMsgUtils",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebMiscGatingUtils",
    "WAWebUnformatSerializer",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (
        e || (e = o("WAWebFormatConfiguration").Unformat({ mentions: {} })),
        e
      );
    }
    function u(e, t) {
      var n = t != null ? t : "";
      if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) {
        var a = o("WAWebFormatConfiguration").RichResponse({
          links: [],
          parseHeadlessHeadings: !0,
          parseHeadings: !1,
        });
        return r("WAWebFormat")(n, a, r("WAWebUnformatSerializer"));
      }
      var i = e.mentionMap(),
        l = e.groupMentionMap();
      if (!i && !l) return c(n);
      if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
        var s = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        if (s) {
          var u = o("WAWebFormatConfiguration").FormattedGroupNotification({
            mentions: i,
            groupMentions: l,
            groupMetadata: s,
          });
          return r("WAWebFormat")(n, u, r("WAWebUnformatSerializer"));
        }
      }
      var d = o("WAWebFormatConfiguration").FormattedNotification({
        mentions: i,
        groupMentions: l,
      });
      return r("WAWebFormat")(n, d, r("WAWebUnformatSerializer"));
    }
    function c(e) {
      return r("WAWebFormat")(e, s(), r("WAWebUnformatSerializer"));
    }
    l.default = u;
  },
  98,
);
