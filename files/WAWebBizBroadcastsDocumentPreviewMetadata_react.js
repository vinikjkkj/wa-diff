__d(
  "WAWebBizBroadcastsDocumentPreviewMetadata.react",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebL10nFilesize",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.documentData,
        r = n.fileExt,
        a = n.fileSize,
        i = n.mimetype,
        l = n.pageCount,
        u;
      t[0] !== r
        ? ((u = r == null ? void 0 : r.toUpperCase()), (t[0] = r), (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] !== a
        ? ((m = a != null ? o("WAWebL10nFilesize").getL10nFilesize(a) : null),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = i === "application/pdf",
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "x1bvqhpb x1ncwhqj x152skdk x1gxa6cn xa0aww2 xt1z7ec x1y04bub x1duis28",
          }),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== _ || t[6] !== l
        ? ((g =
            _ &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx("span", {
                  "data-testid": void 0,
                  className: "xlyipyv xuxw1ft xwcf1sq",
                  title: l.toString(),
                  children: o(
                    "WAWebBizBroadcastsCreationStrings",
                  ).getDocumentPreviewPagesCount(l),
                }),
                s.jsx(c, {}),
              ],
            })),
          (t[5] = _),
          (t[6] = l),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "xlyipyv xuxw1ft xwcf1sq" }), (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== d
        ? ((y = s.jsx(
            "span",
            babelHelpers.extends(
              { "data-testid": void 0, "data-meta-key": "type" },
              h,
              { title: d, children: d },
            ),
          )),
          (t[9] = d),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s.jsx(c, {})), (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "xlyipyv xuxw1ft xwcf1sq" }), (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== p
        ? ((v = s.jsx(
            "span",
            babelHelpers.extends({ "data-testid": void 0 }, b, {
              title: p,
              children: p,
            }),
          )),
          (t[13] = p),
          (t[14] = v))
        : (v = t[14]);
      var S;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s.jsx(c, {})), (t[15] = S))
        : (S = t[15]);
      var R;
      return (
        t[16] !== g || t[17] !== y || t[18] !== v
          ? ((R = s.jsxs(
              "div",
              babelHelpers.extends({}, f, { children: [g, y, C, v, S] }),
            )),
            (t[16] = g),
            (t[17] = y),
            (t[18] = v),
            (t[19] = R))
          : (R = t[19]),
        R
      );
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx("span", {
              className:
                "xlyipyv xuxw1ft xwcf1sq xdj266r x7g7pl8 xat24cr x1wbi8v6",
              children: "\u2022",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = u;
  },
  98,
);
