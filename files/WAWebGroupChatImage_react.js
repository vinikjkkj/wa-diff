__d(
  "WAWebGroupChatImage.react",
  [
    "WAWebCommunitySpeakerIcon.react",
    "WAWebCommunitySubgroupImage.react",
    "WAWebDetailImage.react",
    "WAWebGroupType",
    "WAWebStackedCirclesImage.react",
    "WAWebTextSizeUtils",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.chat,
        a = e.isHovered,
        i = a === void 0 ? !1 : a,
        l = e.regularChatImage,
        u = e.selection,
        c = e.showCommunityInfo,
        d = e.showSpeakerForCag,
        m = e.size,
        p = e.theme,
        _ = o("useWAWebModelValues").useOptionalModelValues(n.groupMetadata, [
          "groupType",
          "participants",
          "terminated",
          "parentGroup",
        ]),
        f =
          (_ == null ? void 0 : _.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
          (_ == null ? void 0 : _.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP ||
          (_ == null ? void 0 : _.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        g = (t = n.groupMetadata) == null ? void 0 : t.getParentGroupChat();
      if (f && g) {
        if (
          (_ == null ? void 0 : _.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        )
          return d === !0
            ? s.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: m })
            : s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: g.id,
                shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                size:
                  m != null
                    ? m
                    : o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
                        .detailImageSize,
              });
        if (
          c &&
          p === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
        )
          return s.jsx(r("WAWebCommunitySubgroupImage.react"), {
            chat: n,
            parentGroupChat: g,
            selection: u,
            isHovered: i,
            size:
              m != null
                ? m
                : o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
                    .detailImageSize,
          });
      } else if (f)
        return s.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: m });
      return l;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
