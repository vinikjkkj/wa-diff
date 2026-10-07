__d(
  "cometComposedTextV2GenAiSecureCredentialRequest",
  ["isStringNotNullAndNotWhitespaceOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        u(e.request_id) &&
        u(e.title) &&
        u(e.host) &&
        m(e.page_url) &&
        p(e.page_url, e.host) &&
        d(e.fields) &&
        c(e.status)
      );
    }
    function s(t) {
      var n,
        r = t.sections,
        o = r.map(f).find(function (t) {
          return t != null && e(t);
        });
      if (o == null) return t;
      var a = (n = o.subtitle) != null ? n : o.title,
        i = r.findIndex(function (e) {
          return g(e) === a;
        });
      return i === -1
        ? t
        : babelHelpers.extends({}, t, {
            sections: r.filter(function (e, t) {
              return t !== i;
            }),
          });
    }
    function u(e) {
      return (
        typeof e == "string" && r("isStringNotNullAndNotWhitespaceOnly")(e)
      );
    }
    function c(e) {
      return e === "PENDING";
    }
    function d(e) {
      return (
        Array.isArray(e) &&
        e.some(function (e) {
          return u(e == null ? void 0 : e.label);
        })
      );
    }
    function m(e) {
      if (typeof e != "string") return !1;
      try {
        var t = new URL(e),
          n = t.hostname,
          r = t.password,
          o = t.protocol,
          a = t.username;
        return o === "https:" && n !== "" && a === "" && r === "";
      } catch (e) {
        return !1;
      }
    }
    function p(e, t) {
      return _(new URL(e).hostname) === _(t);
    }
    function _(e) {
      return e
        .trim()
        .toLowerCase()
        .replace(/^www\./, "");
    }
    function f(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAISecureCredentialRequestPrimitive"
        ) {
          var t = e;
          return t;
        }
        return null;
      })(h(e));
    }
    function g(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAIMarkdownTextUXPrimitive" &&
          "text" in e
        ) {
          var t = e.text;
          return t;
        }
        return null;
      })(h(e));
    }
    function h(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          ((typeof e.view_model == "object" && e.view_model !== null) ||
            typeof e.view_model == "function") &&
          e.view_model.__typename === "GenAISingleLayoutViewModel" &&
          "primitive" in e.view_model
        ) {
          var t = e.view_model.primitive;
          return t;
        }
        return null;
      })(e);
    }
    ((l.isRenderableSecureCredentialRequest = e),
      (l.removeSecureCredentialStandInText = s));
  },
  98,
);
