__d(
  "WAWebRichResponseForwardText",
  [
    "WAWebBotUtils",
    "WAWebCodeFormatMutator",
    "WAWebCompactMapString",
    "WAWebFormatParse",
    "WAWebHeadingFormatMutator",
    "WAWebInlineCodeFormatMutator",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.richResponse;
      if (
        !s(e) ||
        t == null ||
        t.parseState !==
          o("WAWebRichResponse.flow").RichResponseParseState.Parsed ||
        t.fragments.length === 0 ||
        !t.fragments.every(c)
      )
        return null;
      var n = t.fragments.map(d);
      if (
        n.some(function (e) {
          return e.generatesCode;
        }) &&
        n.some(function (e) {
          return e.hasUnsafeTicks;
        })
      )
        return null;
      var a = r("WAWebCompactMapString")(n, function (e) {
        return e.text;
      });
      return a.length === 0 ? null : a.join("\n");
    }
    function s(e) {
      return (
        u(e) && e.unifiedResponse == null && e.unifiedResponseRawData == null
      );
    }
    function u(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return t != null && o("WAWebBotUtils").isHatchBot(t);
    }
    function c(e) {
      return (
        e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Text ||
        e.type === o("WAWebRichResponse.flow").RichResponseFragmentType.Table
      );
    }
    function d(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Text &&
          "text" in e
        ) {
          var t = e.text;
          return m(t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "type" in e &&
          e.type ===
            o("WAWebRichResponse.flow").RichResponseFragmentType.Table &&
          "table" in e
        ) {
          var n = e.table;
          return S(n);
        }
        return { text: "", generatesCode: !1, hasUnsafeTicks: !1 };
      })(e);
    }
    function m(e) {
      var t = o("WAWebFormatParse").parse(e, [
          [[o("WAWebCodeFormatMutator").Code, {}]],
          [[r("WAWebInlineCodeFormatMutator"), {}]],
          [[o("WAWebHeadingFormatMutator").Heading, {}]],
        ]),
        n = t.children;
      return { text: g(n), generatesCode: f(n), hasUnsafeTicks: p(e, n) };
    }
    function p(e, t) {
      var n = _(t),
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
    function _(e) {
      return e.flatMap(function (e) {
        return "type" in e
          ? []
          : e.mutator === o("WAWebCodeFormatMutator").Code ||
              e.mutator === o("WAWebHeadingFormatMutator").Heading
            ? [[e.match[0], e.match[3]]]
            : _(e.children);
      });
    }
    function f(e) {
      return e.some(function (e) {
        return "type" in e ||
          e.mutator !== o("WAWebHeadingFormatMutator").Heading
          ? !1
          : C(g(e.children));
      });
    }
    function g(e) {
      return e
        .map(function (t, n) {
          if ("type" in t) return h(t, e[n + 1]) ? "" : t.value;
          var r = g(t.children);
          return t.mutator === o("WAWebHeadingFormatMutator").Heading
            ? y(r)
            : r;
        })
        .join("");
    }
    function h(e, t) {
      return (
        e.type === "delimiter" &&
        t != null &&
        "mutator" in t &&
        t.mutator === o("WAWebHeadingFormatMutator").Heading
      );
    }
    function y(e) {
      var t = e.trim();
      if (t === "") return e;
      var n = e.indexOf(t),
        r = C(t) ? b(t) : "*" + t + "*";
      return "" + e.slice(0, n) + r + e.slice(n + t.length);
    }
    function C(e) {
      return /[*`]/.test(e) || /_[^\n]*_|~[^\n]*~/.test(e);
    }
    function b(e) {
      return "```\n" + v(e) + "\n```";
    }
    function v(e) {
      return e.replace(/`{3,}/g, function (e) {
        return e.split("").join("\u2060");
      });
    }
    function S(e) {
      var t = [],
        n = e
          .map(function (e) {
            return e.isHeading
              ? ((t = e.items), e.items.map(R).join(" | "))
              : e.items
                  .map(function (e, n) {
                    var r = t[n],
                      o = r != null && r.trim() !== "" ? r : "" + (n + 1);
                    return R(o) + ": " + R(e);
                  })
                  .join("\n");
          })
          .join("\n\n"),
        r = /\S/.test(n);
      return { text: r ? b(n) : "", generatesCode: r, hasUnsafeTicks: !1 };
    }
    function R(e) {
      return e.replace(/\r\n|\r|\n/g, "$&  ");
    }
    ((l.getRichResponseForwardText = e), (l.isHatchRichResponse = u));
  },
  98,
);
