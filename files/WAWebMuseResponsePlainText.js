__d(
  "WAWebMuseResponsePlainText",
  ["WAWebHatchJarvisMarkdownText", "getPlainTextFromUnifiedResponse"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "XMSGGenAIJarvisPayload";
    function s(e) {
      return e != null && c(e) ? u(e) : null;
    }
    function u(e, t) {
      return r("getPlainTextFromUnifiedResponse")(
        babelHelpers.extends({}, e, {
          sections: e.sections.map(function (e) {
            return d(e, t);
          }),
        }),
      );
    }
    function c(t) {
      return (
        ((typeof t.passthrough_payload == "object" &&
          t.passthrough_payload !== null) ||
          typeof t.passthrough_payload == "function") &&
        "__typename" in t.passthrough_payload &&
        t.passthrough_payload.__typename === e
      );
    }
    function d(e, t) {
      return (function (n) {
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.__typename === "GenAISingleLayoutViewModel"
        ) {
          var r = n;
          return babelHelpers.extends({}, e, {
            view_model: babelHelpers.extends({}, r, {
              primitive: m(r.primitive, t),
            }),
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.__typename === "GenAIGridLayoutViewModel"
        ) {
          var o = n;
          return babelHelpers.extends({}, e, {
            view_model: babelHelpers.extends({}, o, {
              primitives: o.primitives.map(function (e) {
                return m(e, t);
              }),
            }),
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.__typename === "GenAIHScrollLayoutViewModel"
        ) {
          var a = n;
          return babelHelpers.extends({}, e, {
            view_model: babelHelpers.extends({}, a, {
              primitives: a.primitives.map(function (e) {
                return m(e, t);
              }),
            }),
          });
        }
        return e;
      })(e.view_model);
    }
    function m(e, t) {
      return (function (n) {
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.__typename === "GenAIMarkdownTextUXPrimitive"
        ) {
          var r = n;
          return babelHelpers.extends({}, r, {
            text: o(
              "WAWebHatchJarvisMarkdownText",
            ).getPlainTextFromJarvisMarkdown(r.text),
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.__typename === "GenAIFilePrimitive" &&
          "url" in n
        ) {
          var a,
            i = n.url;
          return (a = p(t == null ? void 0 : t(i))) != null ? a : e;
        }
        return e;
      })(e);
    }
    function p(e) {
      return e != null && e !== ""
        ? { __typename: "GenAIMarkdownTextUXPrimitive", text: e }
        : null;
    }
    ((l.getMuseResponsePlainText = s), (l.getResponsePlainText = u));
  },
  98,
);
