__d(
  "WAWebRichResponseUnknownFragmentUtils",
  [
    "fbt",
    "WALogger",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebRichResponse.flow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(t, n) {
      var r = t.fragment,
        a = r.messageType;
      return a == null
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Empty rich response submessage type",
                ])),
            )
            .tags("wa-web-ai-logging")
            .sendLogs("Encountered empty rich response submessage type"),
          "")
        : c(a, n);
    }
    function c(e, t) {
      switch (e) {
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_CODE:
          return t ===
            o("WAWebRichResponse.flow").RichResponseParseState.Partial
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_GRID_IMAGE:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_INLINE_IMAGE:
          return t ===
            o("WAWebRichResponse.flow").RichResponseParseState.Partial
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE:
          return t ===
            o("WAWebRichResponse.flow").RichResponseParseState.Partial
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_DYNAMIC:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_UNKNOWN:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_LATEX:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_MAP:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_CONTENT_ITEMS:
          return t ===
            o("WAWebRichResponse.flow").RichResponseParseState.Partial
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
      }
    }
    l.getUnknownFragmentText = u;
  },
  226,
);
