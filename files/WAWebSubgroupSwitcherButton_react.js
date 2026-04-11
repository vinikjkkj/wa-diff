__d(
  "WAWebSubgroupSwitcherButton.react",
  [
    "fbt",
    "WAWebCommunityFeatureUsageWamEvent",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunitySubgroupSwitcher.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumCommunityFeatureUiActionTakenType",
    "WAWebWamEnumCommunityUiFeatureType",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcArrowDropDown.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        buttonMargin: { marginInlineStart: "x150mmf0", $$css: !0 },
        parentGroupImage: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        menuBarBtnContainer: {
          display: "x78zum5",
          position: "x1n2onr6",
          height: "x5yr21d",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          transitionProperty: "x15406qy",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          "@media screen and (max-width: 720px)_paddingTop": "xj8bxqt",
          "@media screen and (max-width: 720px)_paddingInlineEnd": "xe3rdy5",
          "@media screen and (max-width: 720px)_paddingBottom": "xpbnuc5",
          "@media screen and (max-width: 720px)_paddingInlineStart": "x1gzssx3",
          "@media screen and (max-width: 720px)_marginTop": "x86at4b",
          "@media screen and (max-width: 720px)_marginInlineEnd": "x1ua388o",
          "@media screen and (max-width: 720px)_marginBottom": "x1ad89wd",
          "@media screen and (max-width: 720px)_marginInlineStart": "x1rs47hk",
          $$css: !0,
        },
        hoverBg: { ":hover_backgroundColor": "x17gydlx", $$css: !0 },
        iconGroup: { color: "x14ug900", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.parentGroupId,
        r = e.size,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = c.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n,
              size: r,
              shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
              xstyle: d.parentGroupImage,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function p(t) {
      var n,
        a = o("react-compiler-runtime").c(13),
        i = t.chat,
        l = (n = i.groupMetadata) == null ? void 0 : n.parentGroup;
      if (l == null) return null;
      var u;
      a[0] !== i || a[1] !== l
        ? ((u = function (t) {
            (t == null || t.stopPropagation(),
              new (o(
                "WAWebCommunityFeatureUsageWamEvent",
              ).CommunityFeatureUsageWamEvent)({
                communityId: l.toString(),
                communityUiAction: o(
                  "WAWebWamEnumCommunityFeatureUiActionTakenType",
                ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
                communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
                  .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
              }).commit(),
              new (o(
                "WAWebCommunityGroupJourneyEventImpl",
              ).CommunityGroupJourneyEvent)({
                action: o("WAWebWamEnumChatFilterActionTypes")
                  .CHAT_FILTER_ACTION_TYPES.SUBGROUP_SWITCHER_CLICK,
                surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                chat: i,
              }).commit(),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { chat: i }),
              ));
          }),
          (a[0] = i),
          (a[1] = l),
          (a[2] = u))
        : (u = a[2]);
      var p = u,
        _;
      a[3] !== l
        ? ((_ = c.jsx(m, { parentGroupId: l, size: 28 })),
          (a[3] = l),
          (a[4] = _))
        : (_ = a[4]);
      var f = _,
        g;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Subgroup switcher")), (a[5] = g))
        : (g = a[5]);
      var h = g,
        y;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e || (e = r("stylex"))).props(
            d.menuBarBtnContainer,
            d.buttonMargin,
            o("WAWebUISpacing").uiPadding.horiz10,
            o("WAWebUISpacing").uiPadding.top8,
            o("WAWebUISpacing").uiPadding.bottom5,
            d.hoverBg,
            o("WAWebUISpacing").uiPadding.start12,
            o("WAWebUISpacing").uiPadding.end6,
            o("WAWebUISpacing").uiPadding.top6,
            o("WAWebUISpacing").uiPadding.bottom6,
          )),
          (a[6] = y))
        : (y = a[6]);
      var C;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsx(r("WDSIconIcArrowDropDown.react"), {
            xstyle: o("WAWebUISpacing").uiMargin.start4,
            width: 20,
            height: 20,
          })),
          (a[7] = C))
        : (C = a[7]);
      var b;
      a[8] !== f
        ? ((b = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: d.iconGroup,
            children: [f, C],
          })),
          (a[8] = f),
          (a[9] = b))
        : (b = a[9]);
      var v;
      if (a[10] !== p || a[11] !== b) {
        var S = c.jsx(
          "div",
          babelHelpers.extends({}, y, {
            children: c.jsx(r("WAWebUnstyledButton.react"), {
              testid: void 0,
              "aria-label": h,
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              onClick: p,
              children: b,
            }),
          }),
        );
        ((v = c.jsx(r("WDSTooltip.react"), { label: h, children: S })),
          (a[10] = p),
          (a[11] = b),
          (a[12] = v));
      } else v = a[12];
      return v;
    }
    l.default = p;
  },
  226,
);
