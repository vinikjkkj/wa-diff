__d(
  "WAWebCommunityRestrictedGroupActionModal.react",
  [
    "fbt",
    "WAWebCommunityRemoveSubgroup",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebGroupMetadataCollection",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWarningIcon.react",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebIAmCommunityAdmin",
    "useWAWebModelValues",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        icon: { color: "x17k9de1", $$css: !0 },
        marginTop20: { marginTop: "x1nmyh1g", $$css: !0 },
      };
    function m(e) {
      var t = e.chat;
      r("vulture")("ZbQiIcEXg_r5a6426FZml_IxvMI=");
      var n = o("useWAWebModelValues").useModelValues(t, [
          "groupMetadata",
          "id",
          "formattedTitle",
        ]),
        a = n.formattedTitle,
        i = n.groupMetadata,
        l = n.id,
        m = i == null ? void 0 : i.parentGroup,
        p;
      m != null && (p = r("WAWebGroupMetadataCollection").get(m.toString()));
      var _ = r("useWAWebIAmCommunityAdmin")(p),
        f = !!r("useWAWebEventTargetValue")(
          i == null ? void 0 : i.participants,
          ["bulk_add", "bulk_remove"],
          function () {
            return i == null ? void 0 : i.participants.iAmAdmin();
          },
        ),
        g = c(!1),
        h = g[0],
        y = g[1];
      if (m == null || p == null || (!_ && !f)) return null;
      var C = function () {
          h ||
            o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
              parentId: m,
              removedSubgroupWid: l,
              removedSubgroupTitle: a,
              setLoading: y,
              iAmCommunityAdmin: _,
            });
        },
        b = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          children: u.jsx(o("WAWebWarningIcon.react").WarningIcon, {
            width: 48,
            height: 48,
            iconXstyle: d.icon,
          }),
        }),
        v = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: d.marginTop20,
            children: s._(/*BTDS*/ "This action is not available"),
          }),
        }),
        S = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          margin: 16,
          children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "This group is a part of the community that's no longer available. You can remove this group from the community to gain full access.",
            ),
          }),
        }),
        R = s._(/*BTDS*/ "Remove group");
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOK: C,
        okText: R,
        onCancel: o("WAWebModalManager").closeModalManager,
        okDisabled: h,
        children: [b, v, S],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
