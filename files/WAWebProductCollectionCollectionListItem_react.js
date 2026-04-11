__d(
  "WAWebProductCollectionCollectionListItem.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebClickableLink.react",
    "WAWebEmojiText.react",
    "WAWebProductCollection",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUtilsLogQplEvents",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { collectionName: { lineHeight: "xdod15v", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.name,
        a = e.onClick,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "xdod15v"), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = s._(/*BTDS*/ "Collection {collectionName}, see all", [
            s._param("collectionName", n),
          ])),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "See all")), (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== a || t[5] !== l
          ? ((d = u.jsx(r("WAWebClickableLink.react"), {
              onClick: a,
              className: i,
              title: l,
              tabIndex: 0,
              children: c,
            })),
            (t[4] = a),
            (t[5] = l),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.allItems,
        a = e.collection,
        i = e.onSeeAll,
        l,
        m;
      if (a) ((m = a.id), (l = a.name));
      else if (n) {
        var p;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "All items")), (t[0] = p))
          : (p = t[0]),
          (l = p));
      }
      var _;
      t[1] !== l
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            xstyle: c.collectionName,
            children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: l,
              ellipsify: !0,
              titlify: !0,
            }),
          })),
          (t[1] = l),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== a || t[4] !== i
        ? ((g = function (t) {
            (o("WAWebStopEvent").stopEvent(t),
              o("WAWebUtilsLogQplEvents").qplStartCollectionViewAll("Catalog"),
              i && a ? i(a) : i && i());
          }),
          (t[3] = a),
          (t[4] = i),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        y = void 0;
      if (a)
        switch (a.reviewStatus) {
          case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED: {
            var C;
            (t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((C = u.jsx("span", {
                  className: "x30a034",
                  children: s._(/*BTDS*/ "rejected"),
                })),
                (t[6] = C))
              : (C = t[6]),
              (y = C));
          }
        }
      var b = m,
        v = y,
        S;
      t[7] !== h || t[8] !== l
        ? ((S = u.jsx(d, { name: l, onClick: h })),
          (t[7] = h),
          (t[8] = l),
          (t[9] = S))
        : (S = t[9]);
      var R;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = "x1gx403c x1y332i5 x178xt8z x13fuv20 xx42vgk"), (t[10] = R))
        : (R = t[10]);
      var L;
      return (
        t[11] !== f || t[12] !== m || t[13] !== y || t[14] !== S
          ? ((L = u.jsx(
              r("WAWebCellFrame.react"),
              {
                primary: f,
                secondary: v,
                detail: S,
                theme: "collection-header",
                idle: !0,
                className: R,
              },
              b,
            )),
            (t[11] = f),
            (t[12] = m),
            (t[13] = y),
            (t[14] = S),
            (t[15] = L))
          : (L = t[15]),
        L
      );
    }
    l.default = m;
  },
  226,
);
