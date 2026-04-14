__d(
  "WAWebGroupInfoDescriptionSection.react",
  [
    "fbt",
    "WAWebCommonGroupInfoDescriptionSection.react",
    "WAWebGroupType",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, [
          "groupType",
        ]),
        a;
      return (
        (n == null ? void 0 : n.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? (a = u.jsx("div", {
              className: "x14ug900 x1jchvi3",
              children: s._(
                /*BTDS*/ "Get the latest announcements from the admins of this community.",
              ),
            }))
          : (a = s._(/*BTDS*/ "Add group description")),
        u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
          isRefresh: e.isRefresh,
          chat: e.chat,
          showFullDescription: e.showFullDescription,
          editRestrictionText: s._(
            /*BTDS*/ "Only admins can edit this group's info",
          ),
          testid: void 0,
          containerTestId: "group-info-drawer-description-container",
          emptyValuePlaceholder: a,
          focusOnMount: e.focusOnMount,
        })
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
