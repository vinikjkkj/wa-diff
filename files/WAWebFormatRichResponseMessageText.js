__d(
  "WAWebFormatRichResponseMessageText",
  [
    "fbt",
    "WAWebBotUtils",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFormatMsgTextUtils",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebRichResponseMsgUtils",
    "WAWebRichResponsePreviewText",
    "WAWebRichResponseTableFragmentText.react",
    "WAWebRichResponseUnknownFragmentUtils",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        r = o("WAWebFrontendMsgGetters").getAsRichResponse(t),
        a = r == null ? void 0 : r.unifiedResponse;
      if (
        r != null &&
        a != null &&
        o("WAWebUnifiedResponseUtils").hasUnifiedResponseContent(a) &&
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(t)
      )
        return u(
          t,
          o("WAWebRichResponsePreviewText").getUnifiedResponsePreviewText(t, a),
          n.formatAsLastMsg === !0,
          n,
        );
      if (
        r == null ||
        o("WAWebRichResponseMsgUtils").isRichResponseMsgUnparsedAfterCompletion(
          r,
        )
      )
        return o("WAWebFormatUnknownMsg").formatUnknownMsgText(t);
      var i = r.richResponse,
        l = i.fragments,
        s = i.parseState,
        c = o("WAWebRichResponseMsgUtils")
          .getBundledRichResponseFragments(l)
          .map(function (e) {
            return d(e, s);
          })
          .join("\n");
      return c.trim() === ""
        ? o("WAWebFormatUnknownMsg").formatUnknownMsgText(t)
        : o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
            t,
            c,
            n,
          );
    }
    function u(e, t, n, r) {
      var a = t.trim() === "" && n ? c(e) : null;
      return a == null
        ? o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
            e,
            t,
            r,
          )
        : s._(/*BTDS*/ "A message from {agent name}", [
            s._param("agent name", a),
          ]);
    }
    function c(e) {
      if (
        o("WAWebMsgGetters").getIsSentByMe(e) ||
        !o("WAWebBotUtils").isHatchBot(e.id.remote)
      )
        return null;
      var t = o("WAWebContactCollection").ContactCollection.get(e.id.remote),
        n = t == null ? "" : o("WAWebContactGetters").getName(t);
      return n === "" ? null : n;
    }
    function d(e, t) {
      switch (e.type) {
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
          return e.text;
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Table:
          return o(
            "WAWebRichResponseTableFragmentText.react",
          ).getTableFragmentText(e);
        case o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems:
          return "";
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
          return o(
            "WAWebRichResponseUnknownFragmentUtils",
          ).getUnknownFragmentText(e, t);
      }
    }
    l.default = e;
  },
  226,
);
