__d(
  "WAWebNewsletterInviteFollowerButton.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebNewsletterFollowerSelectionFlow.react",
    "WAWebNewsletterGatingUtils",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "WDSIconIcPersonAddFilled.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["newsletterMetadata"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l;
      t[1] !== i
        ? ((l = function () {
            o(
              "WAWebNewsletterFollowerSelectionFlow.react",
            ).startFollowerInviteFlow({ chat: i });
          }),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var c = l;
      if (
        !o(
          "WAWebNewsletterGatingUtils",
        ).isChannelInviteContactsToFollowProducerEnabled()
      )
        return null;
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WAWebRoundShape.react"), {
            theme: "group-modal",
            children: u.jsx(r("WDSIconIcPersonAddFilled.react"), {
              directional: !0,
            }),
          })),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            children: s._(/*BTDS*/ "Invite followers"),
          })),
          (t[4] = p))
        : (p = t[4]);
      var _;
      return (
        t[5] !== c
          ? ((_ = u.jsx(r("WAWebCellV2.react"), {
              testid: void 0,
              detailLeft: m,
              primary: p,
              onClick: c,
              size: "medium",
              isRefresh: !0,
            })),
            (t[5] = c),
            (t[6] = _))
          : (_ = t[6]),
        _
      );
    }
    l.default = d;
  },
  226,
);
