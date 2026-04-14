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
      var t = e.parentGroupId,
        n = e.size;
      return c.jsx(o("WAWebDetailImage.react").DetailImage, {
        id: t,
        size: n,
        shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
        xstyle: d.parentGroupImage,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n,
        a = t.chat,
        i = (n = a.groupMetadata) == null ? void 0 : n.parentGroup;
      if (i == null) return null;
      var l = function (t) {
          (t == null || t.stopPropagation(),
            new (o(
              "WAWebCommunityFeatureUsageWamEvent",
            ).CommunityFeatureUsageWamEvent)({
              communityId: i.toString(),
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
              chat: a,
            }).commit(),
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { chat: a }),
            ));
        },
        u = c.jsx(m, { parentGroupId: i, size: 28 }),
        p = s._(/*BTDS*/ "Subgroup switcher"),
        _ = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
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
            ),
            {
              children: c.jsx(r("WAWebUnstyledButton.react"), {
                testid: void 0,
                "aria-label": p,
                dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
                onClick: l,
                children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: d.iconGroup,
                  children: [
                    u,
                    c.jsx(r("WDSIconIcArrowDropDown.react"), {
                      xstyle: o("WAWebUISpacing").uiMargin.start4,
                      width: 20,
                      height: 20,
                    }),
                  ],
                }),
              }),
            },
          ),
        );
      return c.jsx(r("WDSTooltip.react"), { label: p, children: _ });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
