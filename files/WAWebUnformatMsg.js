__d(
  "WAWebUnformatMsg",
  [
    "WAWebCodeFormatMutator",
    "WAWebCommonMsgUtils",
    "WAWebFormat",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebInlineCodeFormatMutator",
    "WAWebMiscGatingUtils",
    "WAWebMsgMentionMap",
    "WAWebPreviewFormatGating",
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
    function u(e, t, n) {
      var r = t != null ? t : "";
      if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) {
        var a = o("WAWebFormatConfiguration").RichResponse({
          links: [],
          parseHeadlessHeadings: !0,
          parseHeadings: !1,
        });
        return c(r, a, n);
      }
      var i = o("WAWebMsgMentionMap").calculateMsgMentionMap(e),
        l = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
      if (!i && !l) return c(r, s(), n);
      if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
        var u = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        if (u) {
          var d = o("WAWebFormatConfiguration").FormattedGroupNotification({
            mentions: i,
            groupMentions: l,
            groupMetadata: u,
          });
          return c(r, d, n);
        }
      }
      var m = o("WAWebFormatConfiguration").FormattedNotification({
        mentions: i,
        groupMentions: l,
      });
      return c(r, m, n);
    }
    function c(e, t, n) {
      if (n == null)
        return r("WAWebFormat")(e, t, r("WAWebUnformatSerializer"));
      var a = o("WAWebPreviewFormatGating").isPreviewRichFormatEnabled(),
        i = o("WAWebFormatConfiguration").NotificationSpoilerMask({
          parseBlockCode: a,
          parseInlineCode: a,
        }),
        l = [].concat(
          i,
          t.filter(function (e) {
            return (
              !a ||
              e.every(function (e) {
                var t = e[0];
                return (
                  t !== o("WAWebCodeFormatMutator").Code &&
                  t !== r("WAWebInlineCodeFormatMutator")
                );
              })
            );
          }),
        );
      return r("WAWebFormat")(e, l, r("WAWebUnformatSerializer"), {
        serializerOptions: { spoilerReplacement: n },
      });
    }
    l.default = u;
  },
  98,
);
