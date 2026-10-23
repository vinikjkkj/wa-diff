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
    "isArrayNullOrEmpty",
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
      var a = t != null ? t : "";
      if (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type)) {
        var i = o("WAWebFormatConfiguration").RichResponse({
          links: [],
          parseHeadlessHeadings: !0,
          parseHeadings: !1,
        });
        return c(a, i, n);
      }
      var l = o("WAWebMsgMentionMap").calculateKnownMsgMentions(e, a),
        u = l.mentions,
        d = l.text,
        m = o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(e);
      if (r("isArrayNullOrEmpty")(e.mentionedJidList) && !m)
        return c(d, s(), n);
      if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
        var p = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata;
        if (p) {
          var _ = o("WAWebFormatConfiguration").FormattedGroupNotification({
            mentions: u,
            groupMentions: m,
            groupMetadata: p,
          });
          return c(d, _, n);
        }
      }
      var f = o("WAWebFormatConfiguration").FormattedNotification({
        mentions: u,
        groupMentions: m,
      });
      return c(d, f, n);
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
