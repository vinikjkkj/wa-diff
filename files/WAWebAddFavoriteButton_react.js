__d(
  "WAWebAddFavoriteButton.react",
  [
    "fbt",
    "WAWebAddToFavoritesModal.react",
    "WAWebCellV2.react",
    "WAWebModalManager",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "WDSIconIcPersonAddFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(3),
        t = d,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(r("WAWebRoundShape.react"), {
            theme: "compact",
            children: u.jsx(r("WDSIconIcPersonAddFilled.react"), {
              directional: !0,
            }),
          })),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Add favorite")), (e[1] = i))
        : (i = e[1]);
      var l = i,
        c;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = u.jsx(r("WAWebCellV2.react"), {
              testid: void 0,
              detailLeft: a,
              primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                children: l,
              }),
              onClick: t,
              size: "medium",
              isRefresh: !0,
            })),
            (e[2] = c))
          : (c = e[2]),
        c
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebAddToFavoritesModal.react"), {
          onClose: o("WAWebModalManager").closeModalManager,
        }),
      );
    }
    l.default = c;
  },
  226,
);
