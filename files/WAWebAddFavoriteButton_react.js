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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebAddToFavoritesModal.react"), {
              onClose: o("WAWebModalManager").closeModalManager,
            }),
          );
        },
        t = r("WDSIconIcPersonAddFilled.react"),
        n = u.jsx(r("WAWebRoundShape.react"), {
          theme: "compact",
          children: u.jsx(t, { directional: !0 }),
        }),
        a = s._(/*BTDS*/ "Add favorite");
      return u.jsx(r("WAWebCellV2.react"), {
        testid: void 0,
        detailLeft: n,
        primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
          children: a,
        }),
        onClick: e,
        size: "medium",
        isRefresh: !0,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
