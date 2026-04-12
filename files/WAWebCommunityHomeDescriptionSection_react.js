__d(
  "WAWebCommunityHomeDescriptionSection.react",
  ["fbt", "WAWebCommonGroupInfoDescriptionSection.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.showFullDescription,
        o = s._(
          /*BTDS*/ "What's this community for? It's helpful to add rules for your members.",
        );
      return u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
        chat: t,
        showFullDescription: n,
        editRestrictionText: s._(
          /*BTDS*/ "Only admins can edit this community's info",
        ),
        testid: void 0,
        containerTestId: "community-home-drawer-description",
        emptyValuePlaceholder: o,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
