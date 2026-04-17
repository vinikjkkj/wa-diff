__d(
  "CometHighlightTransform",
  ["baseTextTransformAllStrings", "escapeRegex", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        color: { color: "x1fey0fg", $$css: !0 },
        highlight: { backgroundColor: "xv78j7m", $$css: !0 },
        searchedTermHighlight: {
          backgroundColor: "xtvsq51",
          borderStartStartRadius: "x13t61ll",
          borderStartEndRadius: "x1kchd1x",
          borderEndEndRadius: "x1u0fnx4",
          borderEndStartRadius: "xbxn0j6",
          color: "xmorvov",
          fontWeight: "x1s688f",
          paddingTop: "x4p5aij",
          paddingBottom: "x1j85h84",
          paddingInlineStart: "xaso8d8",
          paddingInlineEnd: "x1gabggj",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = e === void 0 ? {} : e,
        n = t.matchSubstrings,
        o = n === void 0 ? !1 : n,
        a = t.matches,
        i = a === void 0 ? [] : a,
        l = t.colorText,
        s = l === void 0 ? !1 : l,
        u = t.highlightCommentSearchedTerms,
        c = u === void 0 ? !1 : u,
        m = 0,
        p = i
          .map(function (e) {
            return e.trim();
          })
          .filter(Boolean);
      return function (e) {
        return r("baseTextTransformAllStrings")(e, function (e, t) {
          return d(p, o, e, t + ":" + String(m++), s, c);
        });
      };
    }
    function d(e, t, n, a, i, l) {
      (i === void 0 && (i = !1), l === void 0 && (l = !1));
      var c = [];
      return (
        d(n),
        s.jsx(
          o("react-strict-dom").html.span,
          { children: c },
          "highlight_container_" + a,
        )
      );
      function d(n, m) {
        if ((m === void 0 && (m = 0), n.length !== 0)) {
          var p = null,
            _ = null;
          if (
            (e.forEach(function (e) {
              var o;
              if (t) o = n.search(new RegExp(r("escapeRegex")(e), "i"));
              else {
                var a =
                    "(\\s|$|^|[" +
                    r("escapeRegex")(",<>.?/;:'\"{}[]-_+=`~!@#$%^&*()") +
                    "])",
                  i = new RegExp(a + r("escapeRegex")(e) + a, "i");
                if (((o = n.search(i)), o > -1)) {
                  var l = n.match(i);
                  l != null &&
                    (o += l[0].search(new RegExp(r("escapeRegex")(e), "i")));
                }
              }
              o > -1 &&
                (p == null ||
                  o < p ||
                  (_ != null && o === p && e.length > _.length)) &&
                ((p = o), (_ = n.slice(o, o + e.length)));
            }),
            p !== null && _ !== null)
          ) {
            var f = l ? u.searchedTermHighlight : i ? u.color : u.highlight,
              g = s.jsx(
                o("react-strict-dom").html.span,
                { style: f, children: _ },
                "h_" + a + "_" + m,
              ),
              h = s.jsx(
                o("react-strict-dom").html.span,
                { children: n.slice(0, p) },
                "bh_" + a + "_" + m,
              );
            (p > 0 && c.push(h), c.push(g));
            var y = n.slice(p + _.length);
            d(y, m + 1);
          } else {
            var C = s.jsx(
              o("react-strict-dom").html.span,
              { children: n },
              "rt_" + a + "_" + m,
            );
            c = [].concat(c, [C]);
          }
        }
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
