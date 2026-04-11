__d(
  "WAWebRichResponseParseUtils",
  [
    "WALogger",
    "WAWebProtobufsAICommonDeprecated.pb",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return {
        type: o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown,
        fragment: e,
      };
    }
    function d(e, t) {
      return {
        parseState: o("WAWebRichResponse.flow").RichResponseParseState.Unparsed,
        type: e,
        fragments: t.map(c),
      };
    }
    function m(e) {
      try {
        var t = e.fragments,
          n = e.type,
          r = p(n),
          o = t.map(f);
        return E(r, o);
      } catch (t) {
        return e;
      }
    }
    function p(e) {
      return typeof e == "string" ? e : _(e);
    }
    function _(e) {
      switch (e) {
        case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseMessageType
          .AI_RICH_RESPONSE_TYPE_STANDARD:
          return o("WAWebRichResponse.flow").ParsedRichResponseType.Standard;
        case o("WAWebProtobufsAICommonDeprecated.pb").AIRichResponseMessageType
          .AI_RICH_RESPONSE_TYPE_UNKNOWN:
          throw r("err")("parseRichResponseType: Unknown rich response type");
      }
    }
    function f(e) {
      if (
        e.type !== o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown
      )
        return e;
      try {
        return g(e.fragment);
      } catch (t) {
        return e;
      }
    }
    function g(t) {
      if (t.messageType == null)
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Empty rich response submessage type",
                ])),
            )
            .tags("wa-web-ai-logging")
            .sendLogs("empty-rich-response-submessage-type", {
              sampling: 0.001,
            }),
          r("err")(
            "getRichResponseFragmentFromSubmessage: Missing message type",
          )
        );
      switch (t.messageType) {
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT:
          return b(t);
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_CODE:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_DYNAMIC:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_GRID_IMAGE:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_INLINE_IMAGE:
          break;
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE:
          return v(t);
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_CONTENT_ITEMS:
          return R(t);
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_UNKNOWN:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_LATEX:
        case o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_MAP:
          break;
      }
      throw r("err")("Unsupported rich response fragment type");
    }
    function h(e) {
      return (
        e.type !== o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown
      );
    }
    function y(e) {
      return (
        e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Unknown
      );
    }
    function C(e, t) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Unknown rich response submessage was of type ",
              "",
            ])),
          t,
        )
        .tags("wa-web-ai-logging")
        .sendLogs("missing-rich-submessage-" + t + "-type-" + t, {
          sampling: 0.001,
        });
    }
    function b(e) {
      var t = e.messageText;
      if (t == null)
        throw (
          C(e, "text"),
          r("err")("parseRichResponseTextSubmessage: Missing message text")
        );
      return {
        type: o("WAWebRichResponse.flow").RichResponseFragmentType.Text,
        text: t,
      };
    }
    function v(e) {
      var t = e.tableMetadata;
      if (t == null) throw r("err")("Missing table");
      var n = t.rows.map(function (e) {
        var t;
        return {
          isHeading: (t = e.isHeading) != null ? t : !1,
          items: e.items,
        };
      });
      return {
        type: o("WAWebRichResponse.flow").RichResponseFragmentType.Table,
        table: n,
      };
    }
    function S(e, t) {
      var n = t.profileIconUrl,
        o = t.thumbnailUrl,
        a = t.title,
        i = t.videoUrl;
      if (a == null || n == null || o == null || i == null)
        throw (
          C(e, "Inline Reels - Missing fields"),
          r("err")("Missing reel item fields")
        );
      return { title: a, profileIconUrl: n, thumbnailUrl: o, videoUrl: i };
    }
    function R(e) {
      var t = e.contentItemsMetadata;
      if (t == null) throw r("err")("Missing content items");
      var n = r("compactMap")(t.itemsMetadata, function (t) {
        var n = t.reelItem;
        if (n != null) return S(e, n);
      });
      if (n == null || n.length === 0)
        throw r("err")("Unsupported ContentItems Type");
      return {
        type: o("WAWebRichResponse.flow").RichResponseFragmentType.ContentItems,
        contentItem: {
          type: o("WAWebRichResponse.flow").RichResponseContentItemsType
            .Carousel,
          items: n,
        },
      };
    }
    function L(e) {
      return e.reduce(function (e, t) {
        return (h(t) && e.push(t), e);
      }, []);
    }
    function E(e, t) {
      if (t.every(y)) throw r("err")("No fragments parsed");
      return t.every(h)
        ? {
            parseState: o("WAWebRichResponse.flow").RichResponseParseState
              .Parsed,
            type: e,
            fragments: L(t),
          }
        : {
            parseState: o("WAWebRichResponse.flow").RichResponseParseState
              .Partial,
            type: e,
            fragments: t,
          };
    }
    function k(e) {
      if (e == null || e.data == null) return null;
      var t = e.data.byteLength,
        n = new (o("WAWebUnifiedResponseUtils").UnifiedResponseQPLLogger)();
      n.markerStart({ int: { data_size_bytes: t } });
      try {
        n.markerPoint("decode_start");
        var a = new TextDecoder("utf-8"),
          i = a.decode(e.data);
        (n.markerPoint("decode_end"), n.markerPoint("json_parse_start"));
        var l = JSON.parse(i);
        return (n.markerPoint("json_parse_end"), n.markerEnd(2), l);
      } catch (e) {
        throw (
          n.markerEnd(3),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Error parsing unified response: ",
                  "",
                ])),
              e,
            )
            .tags("wa-web-ai-logging")
            .sendLogs("unified-response-parsing-error"),
          r("err")("parseUnifiedResponse: Error parsing unified response: " + e)
        );
      }
    }
    ((l.generateFutureproofRichResponse = d),
      (l.parseRichResponse = m),
      (l.parseUnifiedResponse = k));
  },
  98,
);
