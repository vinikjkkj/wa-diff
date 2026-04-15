__d(
  "WAWebCommunityHomeDescriptionSection.react",
  [
    "fbt",
    "WAWebCommonGroupInfoDescriptionSection.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        a = e.showFullDescription,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "What's this community for? It's helpful to add rules for your members.",
          )),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Only admins can edit this community's info")),
          (t[1] = c))
        : (c = t[1]);
      var d;
      return (
        t[2] !== n || t[3] !== a
          ? ((d = u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
              chat: n,
              showFullDescription: a,
              editRestrictionText: c,
              testid: void 0,
              containerTestId: "community-home-drawer-description",
              emptyValuePlaceholder: l,
            })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = c;
  },
  226,
);
