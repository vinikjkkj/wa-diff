__d(
  "WAWebVoipReactionButton.react",
  [
    "fbt",
    "WAWebDefaultReactions",
    "WAWebDropdown.react",
    "WAWebDropdownV2.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiPanel.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPopoverContext.react",
    "WAWebSendReactionsTray.react",
    "WAWebVoipUiPopoutWindowContext",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "WDSThemes",
    "WDSTooltip.react",
    "react",
    "stylex",
    "useWAWebVoipWindowPopoutTooltipProps",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = 1e3,
      h = 400,
      y = {
        emojiPickerContainer: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          $$css: !0,
        },
        reactionButtonActive: { backgroundColor: "x1od0jb8", $$css: !0 },
        reactionButton: {
          width: "x1useyqa",
          height: "xsdox4t",
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        withEmojiLabel: {
          minWidth: "x900493",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          $$css: !0,
        },
        reactionEmoji: { fontSize: "xngnso2", $$css: !0 },
        transparentDropdownContainer: {
          backgroundColor: "xjbqb8w",
          boxShadow: "x1gnnqk1",
          borderStartStartRadius: "x1bczwif",
          borderStartEndRadius: "x17un8ov",
          borderEndEndRadius: "x1e7945m",
          borderEndStartRadius: "x11o6v7j",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          $$css: !0,
        },
        reactionTrayWrapper: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x1qjc9v5",
          $$css: !0,
        },
      };
    function C(e) {
      var t = e.ariaLabel,
        n = e.buttonRef,
        a = e.isActive,
        i = e.isDisabled,
        l = e.isExpanded,
        u = e.onPress,
        d = e.selfReaction,
        m =
          d != null && d !== ""
            ? o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d)
            : null,
        p =
          m != null
            ? s._(/*BTDS*/ "{emoji}", [
                s._param(
                  "emoji",
                  c.jsx(r("WAWebEmoji.react"), {
                    emoji: m,
                    xstyle: y.reactionEmoji,
                  }),
                ),
              ])
            : null;
      return p != null
        ? c.jsx(r("WDSButton.react"), {
            ref: n,
            type: "media",
            testid: void 0,
            variant: "borderless",
            disabled: i,
            onPress: u,
            label: p,
            size: "medium",
            "aria-label": t,
            "aria-expanded": l,
            xstyle: [
              y.reactionButton,
              y.withEmojiLabel,
              a && y.reactionButtonActive,
            ],
          })
        : c.jsx(r("WDSButton.react"), {
            ref: n,
            testid: void 0,
            variant: "borderless",
            disabled: i,
            onPress: u,
            Icon: r("WDSIconIcMood.react"),
            size: "medium",
            "aria-label": t,
            "aria-expanded": l,
            xstyle: [y.reactionButton, a && y.reactionButtonActive],
          });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n,
        a,
        i = t.isDisabled,
        l = i === void 0 ? !1 : i,
        u = t.onReactionSelect,
        d = t.selfReaction,
        b = m(r("WAWebVoipUiPopoutWindowContext")),
        v =
          b.isContextInPopoutWindow && b.windowEl != null ? b.windowEl : void 0,
        S = _(null),
        R = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        L = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        E = _(null),
        k = f(!1),
        I = k[0],
        T = k[1],
        D = f(!1),
        x = D[0],
        $ = D[1],
        P = _(!1),
        N = I || x || (d != null && d !== ""),
        M = r("useWAWebVoipWindowPopoutTooltipProps")(),
        w = M.tooltipAnchorRef,
        A = M.tooltipOwnerDocument;
      p(function () {
        return function () {
          E.current != null && window.clearTimeout(E.current);
        };
      }, []);
      var F = function (t) {
          u == null || u(t);
        },
        O = function (t) {
          if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
            var e;
            ((P.current = !0), (e = R.current) == null || e.hidePopover());
          } else {
            var n;
            ((n = R.current) == null || n.hidePopover(), F(t));
          }
        },
        B = function () {
          (T(!1),
            P.current &&
              ((P.current = !1),
              (E.current = window.setTimeout(function () {
                var e;
                (e = L.current) == null || e.showPopover();
              }, h))));
        },
        W = function (t) {
          var e;
          ((e = L.current) == null || e.hidePopover(), F(t));
        },
        q = function () {
          var e;
          (e = R.current) == null || e.showPopover();
        },
        U =
          d != null
            ? o("WAWebDefaultReactions").DEFAULT_REACTIONS.indexOf(d)
            : null,
        V = U != null && U >= 0 ? U : null,
        H = s._(/*BTDS*/ "React");
      return c.jsxs("div", {
        children: [
          c.jsx(r("WDSTooltip.react"), {
            label: H,
            ownerAnchorRef: w,
            ownerDocument: A,
            delayTooltipMs: g,
            children: c.jsx(C, {
              ariaLabel: H,
              buttonRef: S,
              isActive: N,
              isDisabled: l,
              isExpanded: I || x,
              onPress: q,
              selfReaction: d,
            }),
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: (n = b.popoverPortalEl) != null ? n : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            controllerRef: R,
            target: S,
            onOpen: function () {
              return T(!0);
            },
            onClose: B,
            xstyle: y.transparentDropdownContainer,
            children: c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WDSThemes").WDSDarkTheme,
                  y.reactionTrayWrapper,
                ),
                {
                  children: c.jsx(
                    o("WAWebSendReactionsTray.react").SendReactionsTray,
                    {
                      isInlineMode: !0,
                      reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                      selectedIndex: V,
                      showMoreOption: !0,
                      isParentMsgSentByMe: !1,
                      selectedCallback: O,
                    },
                  ),
                },
              ),
            ),
          }),
          c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: (a = b.popoverPortalEl) != null ? a : void 0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            controllerRef: L,
            target: S,
            initHandling: "controllable",
            onOpen: function () {
              $(!0);
            },
            onClose: function () {
              $(!1);
            },
            minWidth: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
            xstyle: y.transparentDropdownContainer,
            children: c.jsx("div", {
              className: "dark color-refresh",
              children: c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSThemes").WDSDarkTheme, y.emojiPickerContainer),
                  {
                    children: c.jsx(r("WAWebEmojiPanel.react"), {
                      onEmoji: W,
                      displayLocation: o("WAWebPanelsDisplayLocation")
                        .DisplayLocation.Reactions,
                      width: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
                      targetWindow: v,
                    }),
                  },
                ),
              ),
            }),
          }),
        ],
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
