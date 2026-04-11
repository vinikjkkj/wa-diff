__d(
  "useWAWebLexicalTypeAhead",
  [
    "Lexical",
    "WAWebEmoji",
    "WAWebLexicalUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n) {
      var a = o("react-compiler-runtime").c(35),
        i;
      a[0] !== n
        ? ((i = n != null ? n : {}), (a[0] = n), (a[1] = i))
        : (i = a[1]);
      var l = i,
        s = l.boundary,
        d = l.enabled,
        m = l.maxQueryLength,
        p = l.minQueryLength,
        _ = s === void 0 ? !1 : s,
        g = d === void 0 ? !0 : d,
        h = p === void 0 ? 0 : p,
        y = c(),
        v = y[0],
        S = y[1],
        R = c(0),
        L = R[0],
        E = R[1],
        k = c(),
        I = k[0],
        T = k[1],
        D,
        x;
      (a[2] !== _ || a[3] !== e || a[4] !== g || a[5] !== m || a[6] !== t
        ? ((D = function () {
            if (g) {
              var n = function () {
                  e.getEditorState().read(function () {
                    var n;
                    if (!e.isComposing()) {
                      var r = C(t, { boundary: _, maxQueryLength: m });
                      (S(r == null ? void 0 : r.query),
                        E(
                          (n = r == null ? void 0 : r.leadOffset) != null
                            ? n
                            : 0,
                        ));
                    }
                  });
                },
                r = e.registerUpdateListener(n);
              return (n(), r);
            }
          }),
          (x = [e, t, g, _, m]),
          (a[2] = _),
          (a[3] = e),
          (a[4] = g),
          (a[5] = m),
          (a[6] = t),
          (a[7] = D),
          (a[8] = x))
        : ((D = a[7]), (x = a[8])),
        u(D, x));
      var $;
      a[9] !== _ || a[10] !== e || a[11] !== g || a[12] !== t
        ? (($ = function () {
            g &&
              e.update(function () {
                var e = b(t, { boundary: _ });
                e == null || e.remove();
              });
          }),
          (a[9] = _),
          (a[10] = e),
          (a[11] = g),
          (a[12] = t),
          (a[13] = $))
        : ($ = a[13]);
      var P = r("useWAWebStableCallback")($),
        N;
      a[14] !== _ || a[15] !== e || a[16] !== g || a[17] !== t
        ? ((N = function (r, a) {
            var n = a === void 0 ? {} : a;
            g &&
              e.update(function () {
                var e = b(t, { boundary: _ });
                if (e) {
                  var a = n.leadingSpace,
                    i = n.select,
                    l = n.trailingSpace,
                    s = a === void 0 ? !1 : a,
                    u = i === void 0 ? !1 : i,
                    c = l === void 0 ? !1 : l,
                    d =
                      typeof r == "string"
                        ? new (o("Lexical").TextNode)(r)
                        : r();
                  (o("WAWebLexicalUtils").$replaceTextNode(e, d),
                    s && o("WAWebLexicalUtils").$insertLeadingSpace(d),
                    c &&
                      o("WAWebLexicalUtils").$insertTrailingSpace(d, {
                        moveCaret: !0,
                      }),
                    u && d.select(0, d.getTextContent().length));
                }
              });
          }),
          (a[14] = _),
          (a[15] = e),
          (a[16] = g),
          (a[17] = t),
          (a[18] = N))
        : (N = a[18]);
      var M = r("useWAWebStableCallback")(N),
        w;
      a[19] !== g || a[20] !== v
        ? ((w = function () {
            g && T(v);
          }),
          (a[19] = g),
          (a[20] = v),
          (a[21] = w))
        : (w = a[21]);
      var A = r("useWAWebStableCallback")(w),
        F;
      a[22] !== _ || a[23] !== P || a[24] !== e || a[25] !== g || a[26] !== t
        ? ((F = function (r) {
            g &&
              (e.focus(),
              P(),
              e.update(function () {
                var e = o("WAWebLexicalUtils").$getRangeSelection();
                if (e) {
                  var n = t + r;
                  if (_) {
                    var a = e.anchor.offset,
                      i = e.anchor.getNode().getTextContent(),
                      l = i[a - 1];
                    l && !f(l) && (n = " " + n);
                  }
                  e.insertText(n);
                }
              }));
          }),
          (a[22] = _),
          (a[23] = P),
          (a[24] = e),
          (a[25] = g),
          (a[26] = t),
          (a[27] = F))
        : (F = a[27]);
      var O = r("useWAWebStableCallback")(F);
      ((v == null && I != null) ||
        (I != null && v != null && !v.startsWith(I))) &&
        T(null);
      var B = g && I == null && v != null && v.length >= h,
        W = B ? v : null,
        q;
      return (
        a[28] !== P ||
        a[29] !== L ||
        a[30] !== A ||
        a[31] !== M ||
        a[32] !== O ||
        a[33] !== W
          ? ((q = {
              query: W,
              leadOffset: L,
              clearQuery: P,
              setQuery: O,
              replaceQuery: M,
              omitQuery: A,
            }),
            (a[28] = P),
            (a[29] = L),
            (a[30] = A),
            (a[31] = M),
            (a[32] = O),
            (a[33] = W),
            (a[34] = q))
          : (q = a[34]),
        q
      );
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
