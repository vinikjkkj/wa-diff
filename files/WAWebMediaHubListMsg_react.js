__d(
  "WAWebMediaHubListMsg.react",
  [
    "WAWebCheckBox.react",
    "WAWebClickable.react",
    "WAWebClock",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubMessageActionHandlers",
    "WAWebMediaHubMessageDropdownMenu.react",
    "WAWebMessageTooltip.react",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebStarFilledIcon.react",
    "WAWebTabOrder",
    "WAWebWamEnumActionCode",
    "WDSFocusStateStyles",
    "WDSIconIcBookmark.react",
    "WDSText.react",
    "fbs",
    "react",
    "useHoverState",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        rowRoot: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "x1co6499",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        rowRootFocused: { backgroundColor: "x4wrhlh", $$css: !0 },
        row: { alignItems: "x6s0dn4", $$css: !0 },
        rightContent: { minWidth: "x1hxoosp", $$css: !0 },
        checkbox: { minWidth: "xnei2rj", $$css: !0 },
        star: { color: "xhslqc4", $$css: !0 },
        actionButtons: { minWidth: "xktpd3l", $$css: !0 },
        clickablePart: {
          display: "x78zum5",
          flex: "x98rzlu",
          width: "xh8yej3",
          $$css: !0,
        },
      },
      d = s.createContext({ isHovered: !1 });
    function m(e) {
      var t,
        n,
        a = e.collection,
        i = e.endAction,
        l = e.link,
        m = e.msg,
        f = e.msgContent,
        g = e.onContentClick,
        h = e.ref,
        y = e.rightContent,
        C = e.searchType,
        b = e.shouldShowMsgBody,
        v = b === void 0 ? !0 : b,
        S = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        R = S.getMultiSelection,
        L = S.isSelectMode,
        E = S.onMessageSelect,
        k = S.searchQuery,
        I = S.setContextMenuMsg;
      o("useWAWebListener").useListener(m, "revoked", function () {
        a.remove(m);
      });
      var T = o("useWAWebMsgValues").useMsgValues(m.id, [
          o("WAWebFrontendMsgGetters").getRtl,
        ]),
        D = T[0],
        x = R(),
        $ = function (t) {
          (E(m, t), t.stopPropagation(), t.preventDefault());
        },
        P = r("useHoverState")(),
        N = P.isHovered,
        M = P.onMouseEnter,
        w = P.onMouseLeave,
        A = P.setIsHovered,
        F = u(
          function () {
            return { isHovered: N };
          },
          [N],
        ),
        O = (
          (t =
            (n = m.caption) != null
              ? n
              : o("WAWebFrontendMsgGetters").getText(m)) != null
            ? t
            : ""
        ).trim(),
        B = o("WAWebFormatConfiguration").SearchName({
          terms: [k],
          emojiXstyle: p.emojiSize,
        }),
        W = L
          ? void 0
          : function () {
              (o("WAWebMediaHubMessageActionHandlers").goToMessageFromModal(m),
                o("WAWebMediaHubLogger").logMediaHubAction({
                  action: o("WAWebWamEnumActionCode").ACTION_CODE.GO_TO_MESSAGE,
                }));
            };
      return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        name: "media-hub-list-msg",
        children: s.jsx(d.Provider, {
          value: F,
          children: s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: h,
            onMouseEnter: M,
            onMouseLeave: w,
            onFocus: function () {
              return A(!0);
            },
            onBlur: function () {
              return A(!1);
            },
            onContextMenu: function (t) {
              (t.preventDefault(), I({ msg: m, searchType: C, event: t }));
            },
            children: s.jsx(o("WAWebClickable.react").Clickable, {
              onClick: L ? $ : W,
              children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                gap: 40,
                grow: 1,
                tabIndex: 0,
                "data-tab": o("WAWebTabOrder").TAB_ORDER.TAB_HEADER,
                xstyle: [
                  c.row,
                  c.rowRoot,
                  N && c.rowRootFocused,
                  o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                ],
                "data-focusid": "media-hub-row-item",
                align: "center",
                children: [
                  s.jsx(o("WAWebFlex.react").FlexRow, {
                    gap: 8,
                    grow: 3,
                    shrink: 0,
                    basis: 0,
                    xstyle: c.row,
                    children: s.jsxs(o("WAWebClickable.react").Clickable, {
                      xstyle: [c.clickablePart, c.row],
                      onClick: g,
                      children: [
                        L &&
                          s.jsx(o("WAWebFlex.react").FlexRow, {
                            xstyle: c.checkbox,
                            marginEnd: 8,
                            children: s.jsx(o("WAWebCheckBox.react").CheckBox, {
                              checked: x.isSelected(m),
                              onChange: r("WAWebNoop"),
                            }),
                          }),
                        f,
                      ],
                    }),
                  }),
                  s.jsxs(o("WAWebFlex.react").FlexRow, {
                    grow: 2,
                    shrink: 0,
                    basis: 0,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexRow, {
                        grow: 1,
                        shrink: 1,
                        align: "center",
                        children: s.jsx(r("WAWebMessageTooltip.react"), {
                          isEnabled: !0,
                          msg: m,
                          children: s.jsx(r("WDSText.react"), {
                            type: "Body3",
                            colorName:
                              O === "" || !v
                                ? "contentDisabled"
                                : "contentDeemphasized",
                            maxLines: 2,
                            children: s.jsx(
                              o("WAWebEmojiText.react").EmojiText,
                              {
                                direction: "auto",
                                dirMismatch: D !== r("WAWebL10N").isRTL(),
                                text:
                                  O === "" || !v
                                    ? r("fbs")._(/*BTDS*/ "No caption")
                                    : '"' + O + '"',
                                formatters: B,
                              },
                            ),
                          }),
                        }),
                      }),
                      y != null &&
                        s.jsx(o("WAWebFlex.react").FlexRow, {
                          xstyle: [c.row, c.rightContent],
                          gap: 8,
                          justify: "end",
                          children: y,
                        }),
                    ],
                  }),
                  s.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    grow: 2,
                    shrink: 1,
                    basis: 0,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        shrink: 1,
                        children: s.jsx(_, { msg: m.safe() }),
                      }),
                      s.jsx(o("WAWebFlex.react").FlexRow, {
                        basis: 72,
                        gap: 8,
                        justify: "end",
                        align: "center",
                        shrink: 0,
                        xstyle: c.actionButtons,
                        children:
                          !L &&
                          s.jsxs(s.Fragment, {
                            children: [
                              i,
                              s.jsx(
                                o("WAWebMediaHubMessageDropdownMenu.react")
                                  .WAWebMediaHubMessageDropdownMenu,
                                { isHover: !0, msg: m, link: l, searchType: C },
                              ),
                            ],
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = {
      emojiSize: { zoom: "x1bn1iv9", verticalAlign: "xw8z9w8", $$css: !0 },
    };
    function _(e) {
      var t = e.msg,
        n = o("WAWebFrontendContactGetters").getFormattedName(t.senderObj),
        a = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getStar,
          o("WAWebMsgGetters").getIsKept,
        ]),
        i = a[0],
        l = a[1],
        u = o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
        d = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        m = d.searchQuery,
        _ =
          u.groupMetadata != null
            ? n +
              " \u2022 " +
              o("WAWebFrontendContactGetters").getFormattedName(
                o("WAWebFrontendMsgGetters").getChat(t.unsafe()).contact,
              )
            : n,
        f = o("WAWebFormatConfiguration").SearchName({
          terms: [m],
          emojiXstyle: p.emojiSize,
        });
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        gap: 8,
        align: "center",
        children: [
          s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: t.senderObj.id,
            size: 28,
            theme: "media_hub",
          }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            grow: 1,
            shrink: 1,
            basis: 0,
            children: [
              s.jsx(r("WDSText.react"), {
                type: "Body2",
                maxLines: 1,
                colorName: "contentDefault",
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: _,
                  direction: "auto",
                  titlify: !0,
                  emojiXstyle: p.emojiSize,
                  formatters: f,
                }),
              }),
              s.jsx(r("WDSText.react"), {
                type: "Body3",
                maxLines: 1,
                colorName: "contentDeemphasized",
                children: s.jsxs(o("WAWebFlex.react").FlexRow, {
                  gap: 4,
                  align: "center",
                  children: [
                    i
                      ? s.jsx(o("WAWebStarFilledIcon.react").StarFilledIcon, {
                          xstyle: c.star,
                          width: 10,
                          height: 10,
                        })
                      : null,
                    l
                      ? s.jsx(r("WDSIconIcBookmark.react"), {
                          xstyle: c.star,
                          width: 10,
                          height: 10,
                        })
                      : null,
                    o("WAWebClock").Clock.relativeDateAndTimeStr(t.t),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = 72;
    function g(e, t) {
      return (function (e) {
        if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !0)
          return f + 64;
        if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !1)
          return f + 84;
        if (Array.isArray(e) && e.length === 2) return f;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })([e, t]);
    }
    ((l.listRowContext = d),
      (l.WAWebMediaHubListMsg = m),
      (l.MEDIA_HUB_LIST_ROW_BASE_HEIGHT = f),
      (l.getMediaHubListRowHeight = g));
  },
  226,
);
