__d(
  "WAWebRichResponseGenerateUtils",
  ["WALogger", "WAWebProtobufsAICommonDeprecated.pb", "WAWebRichResponse.flow"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.richResponse;
      if (n != null && n.fragments.length > 0) {
        var r = [];
        for (var a of n.fragments) {
          var i = u(a);
          i != null && r.push(i);
        }
        if (r.length > 0) return r;
      }
      var l = t.body;
      return typeof l == "string" && l !== ""
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[rich-response-forward] no fragments -> text fallback",
                ])),
            )
            .sendLogs("rich-response-forward-text-fallback"),
          [
            {
              messageType: o("WAWebProtobufsAICommonDeprecated.pb")
                .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT,
              messageText: l,
            },
          ])
        : [];
    }
    function u(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Text &&
          "text" in e
        ) {
          var t = e.text;
          return c(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Table &&
          "table" in e
        ) {
          var n = e.table;
          return d(n);
        }
        return null;
      })(e);
    }
    function c(e) {
      return {
        messageType: o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TEXT,
        messageText: e,
      };
    }
    function d(e) {
      return {
        messageType: o("WAWebProtobufsAICommonDeprecated.pb")
          .AIRichResponseSubMessageType.AI_RICH_RESPONSE_TABLE,
        tableMetadata: {
          rows: e.map(function (e) {
            return { items: e.items, isHeading: e.isHeading };
          }),
        },
      };
    }
    function m(e) {
      var t = e.botSignatureVerificationMetadata,
        n = p(e);
      if (t == null && n == null) return null;
      var r = {};
      return (
        t != null && (r.verificationMetadata = t),
        n != null && (r.pluginMetadata = n),
        { botMetadata: r }
      );
    }
    function p(e) {
      var t = e.botPluginType,
        n = e.botPluginSearchProvider,
        r = e.botPluginSearchUrl,
        o = e.botPluginSearchQuery,
        a = e.botPluginMaybeParent;
      if (t == null && n == null && r == null && o == null && a !== !0)
        return null;
      var i = {};
      return (
        t != null && (i.pluginType = t),
        n != null && (i.provider = n),
        r != null && (i.searchProviderUrl = r),
        o != null && (i.searchQuery = o),
        i
      );
    }
    ((l.buildRichResponseSubmessages = s),
      (l.buildForwardedRichResponseMessageContextInfo = m));
  },
  98,
);
