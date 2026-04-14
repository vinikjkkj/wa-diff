__d(
  "useWAWebLexicalTypeAhead",
  [
    "Lexical",
    "WAWebEmoji",
    "WAWebLexicalUtils",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n) {
      var a = n != null ? n : {},
        i = a.boundary,
        l = i === void 0 ? !1 : i,
        s = a.enabled,
        d = s === void 0 ? !0 : s,
        m = a.maxQueryLength,
        p = a.minQueryLength,
        _ = p === void 0 ? 0 : p,
        g = c(),
        h = g[0],
        y = g[1],
        v = c(0),
        S = v[0],
        R = v[1],
        L = c(),
        E = L[0],
        k = L[1];
      u(
        function () {
          if (d) {
            var n = function () {
                e.getEditorState().read(function () {
                  var n;
                  if (!e.isComposing()) {
                    var r = C(t, { boundary: l, maxQueryLength: m });
                    (y(r == null ? void 0 : r.query),
                      R(
                        (n = r == null ? void 0 : r.leadOffset) != null ? n : 0,
                      ));
                  }
                });
              },
              r = e.registerUpdateListener(n);
            return (n(), r);
          }
        },
        [e, t, d, l, m],
      );
      var I = r("useWAWebStableCallback")(function () {
          d &&
            e.update(function () {
              var e = b(t, { boundary: l });
              e == null || e.remove();
            });
        }),
        T = r("useWAWebStableCallback")(function (n, r) {
          (r === void 0 && (r = {}),
            d &&
              e.update(function () {
                var e = b(t, { boundary: l });
                if (e) {
                  var a = r,
                    i = a.leadingSpace,
                    s = i === void 0 ? !1 : i,
                    u = a.select,
                    c = u === void 0 ? !1 : u,
                    d = a.trailingSpace,
                    m = d === void 0 ? !1 : d,
                    p =
                      typeof n == "string"
                        ? new (o("Lexical").TextNode)(n)
                        : n();
                  (o("WAWebLexicalUtils").$replaceTextNode(e, p),
                    s && o("WAWebLexicalUtils").$insertLeadingSpace(p),
                    m &&
                      o("WAWebLexicalUtils").$insertTrailingSpace(p, {
                        moveCaret: !0,
                      }),
                    c && p.select(0, p.getTextContent().length));
                }
              }));
        }),
        D = r("useWAWebStableCallback")(function () {
          d && k(h);
        }),
        x = r("useWAWebStableCallback")(function (n) {
          d &&
            (e.focus(),
            I(),
            e.update(function () {
              var e = o("WAWebLexicalUtils").$getRangeSelection();
              if (e) {
                var r = t + n;
                if (l) {
                  var a = e.anchor.offset,
                    i = e.anchor.getNode().getTextContent(),
                    s = i[a - 1];
                  s && !f(s) && (r = " " + r);
                }
                e.insertText(r);
              }
            }));
        });
      ((h == null && E != null) ||
        (E != null && h != null && !h.startsWith(E))) &&
        k(null);
      var $ = d && E == null && h != null && h.length >= _;
      return {
        query: $ ? h : null,
        leadOffset: S,
        clearQuery: I,
        setQuery: x,
        replaceQuery: T,
        omitQuery: D,
      };
    }
    function m(e) {
      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    var p = /\W/,
      _ = /[\/:]+/;
    function f(e) {
      return o("WAWebEmoji").EmojiUtil.isEmoji(e) || (p.test(e) && !_.test(e));
    }
    var g = 25,
      h = /[\s()[\]{}<>]/;
    function y(e) {
      return h.test(e);
    }
    function C(e, t) {
      var n,
        r = t != null ? t : {},
        a = r.boundary,
        i = a === void 0 ? !1 : a,
        l = r.maxQueryLength,
        s = l === void 0 ? g : l,
        u = "",
        c = o("WAWebLexicalUtils").$getRangeSelection();
      if (c == null || !c.isCollapsed()) return null;
      u = (n = o("WAWebLexicalUtils").$getTextUpToAnchor()) != null ? n : "";
      var d = m(e),
        p = u.match("(.?)" + d + ("([^" + d + "]{0," + s + "})$"));
      if (!p) return null;
      var _ = p[1],
        h = p[2];
      if (i && _ && !f(_)) return null;
      if (i) {
        for (var C = 0; C < h.length; C++) if (y(h[C])) return null;
      }
      var b = u.length - h.length - e.length;
      return { query: h, leadOffset: b };
    }
    function b(e, t) {
      var n = t != null ? t : {},
        r = n.boundary,
        a = r === void 0 ? !1 : r,
        i = C(e, { boundary: a });
      if (i != null) {
        var l = i.query,
          s,
          u = o("WAWebLexicalUtils").$getTextAnchor();
        if (u) {
          var c = u.point.offset - l.length - e.length,
            d = u.node.splitText(c, u.point.offset);
          return (c === 0 ? (s = d[0]) : (s = d[1]), s.selectNext(0, 0), s);
        }
      }
    }
    l.useTypeAhead = d;
  },
  98,
);
