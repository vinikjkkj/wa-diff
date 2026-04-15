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
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.chat,
        a = e.isHovered,
        i = e.regularChatImage,
        l = e.selection,
        u = e.showCommunityInfo,
        c = e.showSpeakerForCag,
        d = e.size,
        m = e.theme,
        p = a === void 0 ? !1 : a,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["groupType", "participants", "terminated", "parentGroup"]),
          (t[0] = _))
        : (_ = t[0]);
      var f = o("useWAWebModelValues").useOptionalModelValues(
          n.groupMetadata,
          _,
        ),
        g =
          (f == null ? void 0 : f.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_SUBGROUP ||
          (f == null ? void 0 : f.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP ||
          (f == null ? void 0 : f.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        h;
      if (t[1] !== n.groupMetadata) {
        var y;
        ((h = (y = n.groupMetadata) == null ? void 0 : y.getParentGroupChat()),
          (t[1] = n.groupMetadata),
          (t[2] = h));
      } else h = t[2];
      var C = h;
      if (g && C) {
        if (
          (f == null ? void 0 : f.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
        ) {
          if (c === !0) {
            var b;
            return (
              t[3] !== d
                ? ((b = s.jsx(r("WAWebCommunitySpeakerIcon.react"), {
                    size: d,
                  })),
                  (t[3] = d),
                  (t[4] = b))
                : (b = t[4]),
              b
            );
          }
          var v;
          t[5] !== d
            ? ((v =
                d != null
                  ? d
                  : o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
                      .detailImageSize),
              (t[5] = d),
              (t[6] = v))
            : (v = t[6]);
          var S;
          return (
            t[7] !== C.id || t[8] !== v
              ? ((S = s.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: C.id,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                  size: v,
                })),
                (t[7] = C.id),
                (t[8] = v),
                (t[9] = S))
              : (S = t[9]),
            S
          );
        }
        if (
          u &&
          m === o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_LIST
        ) {
          var R;
          t[10] !== d
            ? ((R =
                d != null
                  ? d
                  : o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
                      .detailImageSize),
              (t[10] = d),
              (t[11] = R))
            : (R = t[11]);
          var L;
          return (
            t[12] !== n ||
            t[13] !== p ||
            t[14] !== C ||
            t[15] !== l ||
            t[16] !== R
              ? ((L = s.jsx(r("WAWebCommunitySubgroupImage.react"), {
                  chat: n,
                  parentGroupChat: C,
                  selection: l,
                  isHovered: p,
                  size: R,
                })),
                (t[12] = n),
                (t[13] = p),
                (t[14] = C),
                (t[15] = l),
                (t[16] = R),
                (t[17] = L))
              : (L = t[17]),
            L
          );
        }
      } else if (g) {
        var E;
        return (
          t[18] !== d
            ? ((E = s.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: d })),
              (t[18] = d),
              (t[19] = E))
            : (E = t[19]),
          E
        );
      }
      return i;
    }
    l.default = u;
  },
  98,
);
