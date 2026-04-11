__d(
  "getPlainTextFromUnifiedResponse",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.code_blocks
        .map(function (e) {
          return e.content;
        })
        .join("");
    }
    function l(e) {
      return e.replace(/\{\{([^\s\}]+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, "$2");
    }
    function s(e) {
      return l(e.text);
    }
    function u(e) {
      return e.rows
        .map(function (e) {
          return e.cells.join(" | ");
        })
        .join("\n");
    }
    function c(e) {
      return e.item != null ? e.item.latex_expression : e.latex_expression;
    }
    function d(t) {
      switch (t.__typename) {
        case "GenAICodeUXPrimitive":
          return e(t);
        case "GenAIMarkdownTextUXPrimitive":
          return s(t);
        case "GenATableUXPrimitive":
          return u(t);
        case "GenAIBotProgressStatusPrimitive":
          return t.title;
        case "GenAILatexUXPrimitive":
          return c(t);
        case "FOATextPrimitive":
          return l(t.text);
        case "GenAIMetadataTextPrimitive":
          return t.text;
        case "GenAIBotThinkingStatusPrimitive":
          return t.title;
        case "GenAIProductItemCardPrimitive":
          return t.title;
        case "GenAIReelPrimitive":
        case "GenAIPostPrimitive":
        case "GenAIImaginePrimitive":
        case "GenAISearchResultPrimitive":
        case "FOABloksPrimitive":
        case "GenAIDividerPrimitive":
        case "GenAISpacerPrimitive":
          return "";
        default:
          return "";
      }
    }
    function m(e) {
      return e.__typename === "GenAISingleLayoutViewModel"
        ? [e.primitive]
        : e.__typename === "GenAIGridLayoutViewModel" ||
            e.__typename === "GenAIHScrollLayoutViewModel"
          ? e.primitives
          : [];
    }
    function p(e) {
      return m(e.view_model)
        .map(function (e) {
          return d(e);
        })
        .filter(function (e) {
          return e !== "";
        })
        .join("\n");
    }
    function _(e) {
      if (e == null) return "";
      var t = e.sections;
      return t
        .map(function (e) {
          return p(e);
        })
        .filter(function (e) {
          return e !== "";
        })
        .join("\n");
    }
    i.default = _;
  },
  66,
);
