__d(
  "WAWebRichResponseCopyText",
  [
    "WAWebBotBaseGating",
    "WAWebCompactMapString",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !!(
        (e.richResponse != null &&
          e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed &&
          o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()) ||
        o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)
      );
    }
    function s(e) {
      return e.table
        .map(function (e) {
          return "| " + e.items.join(" | ") + " |";
        })
        .join("\n");
    }
    function u(e) {
      var t = r("WAWebCompactMapString")(e.fragments, function (e) {
        return e.type ===
          o("WAWebRichResponse.flow").RichResponseFragmentType.Text
          ? e.text
          : e.type ===
              o("WAWebRichResponse.flow").RichResponseFragmentType.Table
            ? s(e)
            : null;
      });
      return t.length === 0 ? null : t.join("\n");
    }
    ((l.canCopyRichResponseMessage = e), (l.getRichResponseCopyText = u));
  },
  98,
);
