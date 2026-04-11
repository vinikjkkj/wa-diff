__d(
  "MarkedTokenize",
  ["marked"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e;
        n === void 0 && (n = {});
        var r = (e = n.isOptimistic) != null ? e : !1,
          o = t.split("\n");
        if (r && o.length > 0) {
          var a = o[o.length - 1].replace(/\s+$/, "");
          a.length > 0 && ((a = m(a)), (a = d(a)), (o[o.length - 1] = a));
        }
        var i = new u(n),
          l = i.lex(o.join("\n"));
        if (r && l.length > 0) {
          var s = l[l.length - 1];
          s.raw.length > 0 &&
            ((s = f(s, n)), (s = _(s, n)), (l[l.length - 1] = s));
        }
        return l;
      },
      s =
        /^ {0,3}(`{3,}(?=[^\n`]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\S\s]*?)(?:\n|$))(?: {0,3}\1[`~]* *(?=\n|$)|$)/,
      u = (function (e) {
        function t(t) {
          var n, r, o;
          ((o = e.call(this) || this), (o.options = t));
          var a = {
            block: babelHelpers.extends({}, o.tokenizer.rules.block),
            inline: babelHelpers.extends({}, o.tokenizer.rules.inline),
          };
          return (
            ((n = t.rules) == null ? void 0 : n.inline) != null &&
              (a.inline = babelHelpers.extends({}, a.inline, t.rules.inline)),
            ((r = t.rules) == null ? void 0 : r.block) != null &&
              (a.block = babelHelpers.extends({}, a.block, t.rules.block)),
            t.breaks === !0 &&
              (a.inline = babelHelpers.extends({}, a.inline, {
                br: new RegExp(
                  a.inline.br.source.replace("{2,}", "*"),
                  a.inline.br.flags,
                ),
                text: new RegExp(
                  a.inline.text.source
                    .replace("\\b_", "\\b_| {2,}\\n")
                    .replace(/\{2,\}/g, "*"),
                  a.inline.text.flags,
                ),
              })),
            t.isOptimistic === !0 && (a.block.fences = s),
            (o.tokenizer = new c(t.plugins)),
            (o.tokenizer.rules = a),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("marked").Lexer),
      c = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this) || this), (n.plugins = t || {}), n);
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.em = function (n, r, o) {
            return (
              o === void 0 && (o = ""),
              this.plugins.em == null
                ? e.prototype.em.call(this, n, r, o)
                : this.plugins.em(this, n, r, o)
            );
          }),
          (n.strong = function (n, r, o) {
            return (
              o === void 0 && (o = ""),
              this.plugins.strong == null
                ? e.prototype.strong.call(this, n, r, o)
                : this.plugins.strong(this, n, r, o)
            );
          }),
          (n.escape = function (n) {
            var t, r, o;
            return (t =
              (r = (o = this.plugins).katexInline) == null
                ? void 0
                : r.call(o, n)) != null
              ? t
              : e.prototype.escape.call(this, n);
          }),
          (n.code = function (n) {
            for (
              var t,
                r,
                o,
                a,
                i,
                l,
                s,
                u = arguments.length,
                c = new Array(u > 1 ? u - 1 : 0),
                d = 1;
              d < u;
              d++
            )
              c[d - 1] = arguments[d];
            return (t =
              (r =
                (o = (a = this.plugins).katexBlock) == null
                  ? void 0
                  : o.call(a, n)) != null
                ? r
                : (i = (l = this.plugins).thinkingBlock) == null
                  ? void 0
                  : i.call(l, n)) != null
              ? t
              : (s = e.prototype.code).call.apply(s, [this, n].concat(c));
          }),
          (n.inlineText = function (n) {
            var t,
              r,
              o,
              a =
                (t = (r = this.plugins).urInlineEntity) == null
                  ? void 0
                  : t.call(r, n);
            if (a != null && a.type === "ur-inline-entity")
              return ((a.token = this.escape(a.text)), a);
            for (
              var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), s = 1;
              s < i;
              s++
            )
              l[s - 1] = arguments[s];
            return (o = e.prototype.inlineText).call.apply(
              o,
              [this, n].concat(l),
            );
          }),
          t
        );
      })(r("marked").Tokenizer);
    function d(e) {
      return e.replace(/!?\[([^\]]*)]?(?:\([^\s)]*)?$/, "");
    }
    function m(e) {
      var t = e.trimRight();
      return p.includes(t) ? "" : t;
    }
    var p = [
      "-",
      "*",
      "**",
      "***",
      "_",
      "__",
      "___",
      ">",
      "|",
      "`",
      "``",
      "```",
      "#",
      "##",
      "###",
    ];
    function _(e, t) {
      return (
        y(e, function (e) {
          var n = g(e),
            r = n.replace(/[*_`~]+$/, ""),
            o = C(r);
          if (o.length > 0 || n.length !== r) {
            var a = h(e).replace(/[*_`~]+$/, "") + o.toReversed().join(""),
              i = new u(t),
              l = i.inlineTokens(a, []),
              s = g(l),
              c = C(s);
            if (c.length <= o.length && s.length < n.length) return l;
          }
          return null;
        }),
        e
      );
    }
    function f(e, t) {
      var n, r;
      if (e.type !== "paragraph") return e;
      var o = (
        (n = e.raw.match(
          /^\|\s*(?:[^\n\r|]+?\s*\|?)+\s*(?:\n\|\s*(?::?-+:?\s*\|?\s*)*)?$/,
        )) != null
          ? n
          : []
      )[0];
      if (o == null) return e;
      var a = o.split("\n")[0].trimRight().replace(/\|$/, "") + "|",
        i = ((r = a.match(/\|/g)) != null ? r : []).length - 1,
        l = "|" + " - |".repeat(i),
        s = a + "\n" + l,
        c = new u(t),
        d = c.lex(s);
      return d.length === 1 && d[0].type === "table" ? d[0] : e;
    }
    function g(e) {
      var t = "";
      return (
        r("marked").walkTokens(e, function (e) {
          e.type === "text" && e.tokens == null && (t += e.raw);
        }),
        t
      );
    }
    function h(e) {
      return e
        .map(function (e) {
          return e.raw;
        })
        .join("");
    }
    function y(e, t) {
      var n, r;
      if (e.type === "code") return null;
      if (e.type === "table") {
        for (
          var o,
            a,
            i = (o = e.tokens.cells) != null ? o : [],
            l = (a = i[i.length - 1]) != null ? a : [],
            s = l.length - 1;
          s >= 0;
          s--
        )
          if (l[s].length > 0) {
            var u = t(l[s]);
            u != null && (l[s] = u);
            break;
          }
        return null;
      }
      if (e.type === "list") {
        var c = e.items,
          d = c[c.length - 1];
        return d == null ? null : y(d, t);
      }
      if (e.type === "list_item") {
        var m,
          p = (m = e.tokens) != null ? m : [],
          _ = p[p.length - 1];
        return _ == null ? null : y(_, t);
      }
      if (e.tokens == null) return null;
      var f = (n = e.tokens) != null ? n : [];
      return ((e.tokens = (r = t(f)) != null ? r : f), f);
    }
    function C(e) {
      var t;
      return (t = e.match(/[*_`~]/g)) != null ? t : [];
    }
    ((l.tokenize = e), (l.AMBIGUOUS_OPENING_TAGS = p));
  },
  98,
);
