__d(
  "WAWebRichResponseMsgUtils",
  ["WAWebBotBaseGating", "WAWebBotTypes", "WAWebRichResponse.flow", "sumBy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !o(
        "WAWebBotBaseGating",
      ).isRichStructuredResponseReceiverEnabled() ||
        e.parseState ===
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed
        ? 0
        : r("sumBy")(e.fragments, function (e) {
            return s(e);
          });
    }
    function s(e) {
      switch (e.type) {
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Text:
          return e.text.length;
        case o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown:
          return 0;
      }
      return 0;
    }
    function u(e) {
      return (
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
        e.richResponse.parseState ===
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed
      );
    }
    function c(e) {
      var t = e.reduce(
          function (e, t) {
            var n = e.filteredFragments,
              r = e.lastFragmentType,
              a = t.type;
            return a ===
              o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown &&
              a === r
              ? { filteredFragments: n, lastFragmentType: r }
              : (n.push(t), { filteredFragments: n, lastFragmentType: a });
          },
          { filteredFragments: [], lastFragmentType: null },
        ),
        n = t.filteredFragments;
      return n;
    }
    ((l.getRichResponseBodyLength = e),
      (l.isRichResponseMsgUnparsedAfterCompletion = u),
      (l.getBundledRichResponseFragments = c));
  },
  98,
);
