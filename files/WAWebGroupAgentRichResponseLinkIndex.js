__d(
  "WAWebGroupAgentRichResponseLinkIndex",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebLinkify",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /\{\{([^\s}]+)\}\}[\s\S]*?\{\{\/\1\}\}/g;
    function s(e, t) {
      var n = e.author,
        a = e.richResponse,
        i = e.unifiedResponse;
      return e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE ||
        !r("WAWebWid").isGroup(t) ||
        n == null ||
        !o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? !1
        : (i != null && d(u(i))) || (a != null && d(c(a)));
    }
    function u(e) {
      var t = [];
      for (var n of e.sections)
        for (var r of o("WAWebUnifiedResponseUtils").getPrimitives(
          n.view_model,
        )) {
          var a = (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.__typename === "GenAIMarkdownTextUXPrimitive" &&
              "text" in e &&
              "inline_entities" in e
            ) {
              var t = e.text,
                n = e.inline_entities;
              return m(t, n != null ? n : []);
            }
            return null;
          })(r);
          a != null && t.push(a);
        }
      return t.join("\n");
    }
    function c(e) {
      var t = [];
      for (var n of e.fragments)
        if (
          n.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text
        )
          t.push(n.text);
        else if (
          n.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table
        )
          for (var r of n.table) t.push("| " + r.items.join(" | ") + " |");
      return t.join("\n");
    }
    function d(e) {
      return (
        e !== "" &&
        o("WAWebLinkify").findLink({ httpOnly: !0, text: e }) != null
      );
    }
    function m(t, n) {
      return t.replace(e, function (e, t) {
        var r;
        return (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.__typename === "GenAIInlineLinkItem" &&
            "url" in e
          ) {
            var t = e.url;
            return " " + t + " ";
          }
          return " ";
        })(
          (r = n.find(function (e) {
            return e.key === t;
          })) == null
            ? void 0
            : r.metadata,
        );
      });
    }
    ((l.shouldIndexGroupAgentRichResponseLink = s),
      (l.getUnifiedResponseLinkSourceText = u),
      (l.getRichResponseLinkSourceText = c));
  },
  98,
);
