__d(
  "WAWebRichResponseForwardText",
  [
    "WAWebBotUtils",
    "WAWebCodeFormatMutator",
    "WAWebCompactMapString",
    "WAWebFormatParse",
    "WAWebHatchJarvisPayload",
    "WAWebHeadingFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "getPlainTextFromUnifiedResponse",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        o = (t = s(e)) != null ? t : (n = m(e)) == null ? void 0 : n.map(h);
      if (
        o == null ||
        (o.some(function (e) {
          return e.generatesCode;
        }) &&
          o.some(function (e) {
            return e.hasUnsafeTicks;
          }))
      )
        return null;
      var a = r("WAWebCompactMapString")(o, function (e) {
        return e.text;
      });
      return a.length === 0 ? null : a.join("\n");
    }
    function s(e) {
      var t = e.unifiedResponse;
      return t == null ||
        !(f(e) || o("WAWebHatchJarvisPayload").hasHatchJarvisPayload(t)) ||
        !o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e) ||
        !t.sections.some(function (e) {
          return u(e) != null;
        })
        ? null
        : t.sections.map(function (e) {
            return (function (n) {
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.__typename === "GenATableUXPrimitive"
              ) {
                var r = n;
                return T(
                  r.rows.map(function (e, t) {
                    var n;
                    return {
                      isHeading: !!((n = e.is_header) != null ? n : t === 0),
                      items: e.cells,
                    };
                  }),
                );
              }
              return ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
                n.__typename === "GenAICodeUXPrimitive"
                ? D(d(t, e))
                : y(d(t, e));
            })(c(e));
          });
    }
    function u(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenATableUXPrimitive"
        ) {
          var t = e;
          return t;
        }
        return null;
      })(c(e));
    }
    function c(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__typename === "GenAISingleLayoutViewModel" &&
          "primitive" in e
        ) {
          var t = e.primitive;
          return t;
        }
        return null;
      })(e.view_model);
    }
    function d(e, t) {
      return r("getPlainTextFromUnifiedResponse")(
        babelHelpers.extends({}, e, { sections: [t] }),
      );
    }
    function m(e) {
      var t = e.richResponse;
      return !p(e) ||
        t == null ||
        t.parseState !==
          o("WAWebRichResponse.flow").RichResponseParseState.Parsed ||
        t.fragments.length === 0 ||
        !t.fragments.every(g)
        ? null
        : t.fragments;
    }
    function p(e) {
      return (
        _(e) && e.unifiedResponse == null && e.unifiedResponseRawData == null
      );
    }
    function _(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE ? !1 : f(e);
    }
    function f(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function g(e) {
      return (
        e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text ||
        e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table
      );
    }
    function h(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Text &&
          "text" in e
        ) {
          var t = e.text;
          return y(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Table &&
          "table" in e
        ) {
          var n = e.table;
          return T(n);
        }
        return { text: "", generatesCode: !1, hasUnsafeTicks: !1 };
      })(e);
    }
    function y(e) {
      var t = o("WAWebFormatParse").parse(e, [
          [[o("WAWebCodeFormatMutator").Code, {}]],
          [[r("WAWebInlineCodeFormatMutator"), {}]],
          [[o("WAWebHeadingFormatMutator").Heading, {}]],
        ]),
        n = t.children;
      return { text: S(n), generatesCode: v(n), hasUnsafeTicks: C(e, n) };
    }
    function C(e, t) {
      var n = b(t),
        r = 0;
      for (var o of e.matchAll(/`{3,}/g)) {
        for (
          var a = o.index, i = a + o[0].length - 1;
          r < n.length && n[r][1] < a;
        )
          r++;
        var l = n[r];
        if (l == null || l[0] > a || l[1] < i) return !0;
      }
      return !1;
    }
    function b(e) {
      return e.flatMap(function (e) {
        return "type" in e
          ? []
          : e.mutator === o("WAWebCodeFormatMutator").Code ||
              e.mutator === o("WAWebHeadingFormatMutator").Heading
            ? [[e.match[0], e.match[3]]]
            : b(e.children);
      });
    }
    function v(e) {
      return e.some(function (e) {
        return "type" in e ||
          e.mutator !== o("WAWebHeadingFormatMutator").Heading
          ? !1
          : E(S(e.children));
      });
    }
    function S(e) {
      return e
        .map(function (t, n) {
          if ("type" in t) return R(t, e[n + 1]) ? "" : t.value;
          var r = S(t.children);
          return t.mutator === o("WAWebHeadingFormatMutator").Heading
            ? L(r)
            : r;
        })
        .join("");
    }
    function R(e, t) {
      return (
        e.type === "delimiter" &&
        t != null &&
        "mutator" in t &&
        t.mutator === o("WAWebHeadingFormatMutator").Heading
      );
    }
    function L(e) {
      var t = e.trim();
      if (t === "") return e;
      var n = e.indexOf(t),
        r = E(t) ? k(t) : "*" + t + "*";
      return "" + e.slice(0, n) + r + e.slice(n + t.length);
    }
    function E(e) {
      return /[*`]/.test(e) || /_[^\n]*_|~[^\n]*~/.test(e);
    }
    function k(e) {
      return "```\n" + I(e) + "\n```";
    }
    function I(e) {
      return e.replace(/`{3,}/g, function (e) {
        return e.split("").join("\u2060");
      });
    }
    function T(e) {
      var t = [],
        n = e
          .map(function (e) {
            return e.isHeading
              ? ((t = e.items), e.items.map(x).join(" | "))
              : e.items
                  .map(function (e, n) {
                    var r = t[n],
                      o = r != null && r.trim() !== "" ? r : "" + (n + 1);
                    return x(o) + ": " + x(e);
                  })
                  .join("\n");
          })
          .join("\n\n");
      return D(n);
    }
    function D(e) {
      var t = /\S/.test(e);
      return { text: t ? k(e) : "", generatesCode: t, hasUnsafeTicks: !1 };
    }
    function x(e) {
      return e.replace(/\r\n|\r|\n/g, "$&  ");
    }
    ((l.getRichResponseForwardText = e), (l.isHatchRichResponse = _));
  },
  98,
);
