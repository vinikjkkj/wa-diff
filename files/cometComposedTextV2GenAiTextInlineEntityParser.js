__d(
  "cometComposedTextV2GenAiTextInlineEntityParser",
  [
    "FBLogger",
    "cometComposedTextV2GenAiDeeplinkItemParser",
    "cometComposedTextV2GenAiInlineLinkItemParser",
    "cometComposedTextV2GenAiLatexItemParser",
    "cometComposedTextV2GenAiSearchCitationItemParser",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if ((n === void 0 && (n = 0), e.__typename === "GenAILatexItem"))
        return [r("cometComposedTextV2GenAiLatexItemParser")(e)];
      if (e.__typename === "GenAISearchCitationItem")
        return r("cometComposedTextV2GenAiSearchCitationItemParser")(e, t);
      if (e.__typename === "GenAIInlineLinkItem")
        return r("cometComposedTextV2GenAiInlineLinkItemParser")(e, t);
      if (e.__typename === "GenAIDeeplinkItem")
        return r("cometComposedTextV2GenAiDeeplinkItemParser")(e, t);
      var a = e.__typename;
      s.has(a) ||
        (s.add(a),
        r("FBLogger")("comet_ur_parser").warn(
          "[CometURParser] Unsupported inline entity, rendering text: %s",
          a,
        ));
      var i = t.trim(),
        l = i !== "" ? i : u(e);
      return l !== ""
        ? [o("cometComposedTextV2NodeBuilders").buildTextNode(l, n)]
        : [];
    }
    var s = new Set();
    function u(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAISocialEntityItem"
        ) {
          var t,
            n,
            r = e;
          return (t = (n = r.entity_full_name) != null ? n : r.entity_name) !=
            null
            ? t
            : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIPlaceEntityItem"
        ) {
          var o,
            a = e;
          return (o = a.name) != null ? o : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIEventEntityItem"
        ) {
          var i,
            l = e;
          return (i = l.name) != null ? i : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIProductEntityItem"
        ) {
          var s,
            u = e;
          return (s = u.title) != null ? s : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIAdsReferenceItem"
        ) {
          var c,
            d = e;
          return (c = d.display_name) != null ? c : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAITopicLinkItem"
        ) {
          var m,
            p = e;
          return (m = p.entity) != null ? m : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIThreadSurfingItem"
        ) {
          var _,
            f = e;
          return (_ = f.entity) != null ? _ : "";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIIGCoachSuggestedPromptItem"
        ) {
          var g,
            h = e;
          return (g = h.text) != null ? g : "";
        }
        return "";
      })(e);
    }
    l.default = e;
  },
  98,
);
