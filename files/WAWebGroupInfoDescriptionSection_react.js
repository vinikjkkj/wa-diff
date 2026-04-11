__d(
  "WAWebGroupInfoDescriptionSection.react",
  [
    "fbt",
    "WAWebCommonGroupInfoDescriptionSection.react",
    "WAWebGroupType",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["groupType"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useOptionalModelValues(
          n.groupMetadata,
          a,
        ),
        l;
      if (
        (i == null ? void 0 : i.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var c;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = u.jsx("div", {
              className: "x14ug900 x1jchvi3",
              children: s._(
                /*BTDS*/ "Get the latest announcements from the admins of this community.",
              ),
            })),
            (t[1] = c))
          : (c = t[1]),
          (l = c));
      } else {
        var d;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s._(/*BTDS*/ "Add group description")), (t[2] = d))
          : (d = t[2]),
          (l = d));
      }
      var m = e.isRefresh,
        p = e.chat,
        _ = e.showFullDescription,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Only admins can edit this group's info")),
          (t[3] = f))
        : (f = t[3]);
      var g;
      return (
        t[4] !== l ||
        t[5] !== e.chat ||
        t[6] !== e.focusOnMount ||
        t[7] !== e.isRefresh ||
        t[8] !== e.showFullDescription
          ? ((g = u.jsx(r("WAWebCommonGroupInfoDescriptionSection.react"), {
              isRefresh: m,
              chat: p,
              showFullDescription: _,
              editRestrictionText: f,
              testid: void 0,
              containerTestId: "group-info-drawer-description-container",
              emptyValuePlaceholder: l,
              focusOnMount: e.focusOnMount,
            })),
            (t[4] = l),
            (t[5] = e.chat),
            (t[6] = e.focusOnMount),
            (t[7] = e.isRefresh),
            (t[8] = e.showFullDescription),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    l.default = c;
  },
  226,
);
