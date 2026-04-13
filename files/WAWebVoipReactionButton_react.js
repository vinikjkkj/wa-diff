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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(23),
        n = e.ariaLabel,
        a = e.buttonRef,
        i = e.isActive,
        l = e.isDisabled,
        u = e.isExpanded,
        d = e.onPress,
        m = e.selfReaction,
        p;
      t[0] !== m
        ? ((p =
            m != null && m !== ""
              ? o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(m)
              : null),
          (t[0] = m),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] !== _
        ? ((f =
            _ != null
              ? s._(/*BTDS*/ "{emoji}", [
                  s._param(
                    "emoji",
                    c.jsx(r("WAWebEmoji.react"), {
                      emoji: _,
                      xstyle: y.reactionEmoji,
                    }),
                  ),
                ])
              : null),
          (t[2] = _),
          (t[3] = f))
        : (f = t[3]);
      var g = f;
      if (g != null) {
        var h = i && y.reactionButtonActive,
          C;
        t[4] !== h
          ? ((C = [y.reactionButton, y.withEmojiLabel, h]),
            (t[4] = h),
            (t[5] = C))
          : (C = t[5]);
        var b;
        return (
          t[6] !== n ||
          t[7] !== a ||
          t[8] !== g ||
          t[9] !== l ||
          t[10] !== u ||
          t[11] !== d ||
          t[12] !== C
            ? ((b = c.jsx(r("WDSButton.react"), {
                ref: a,
                type: "media",
                testid: void 0,
                variant: "borderless",
                disabled: l,
                onPress: d,
                label: g,
                size: "medium",
                "aria-label": n,
                "aria-expanded": u,
                xstyle: C,
              })),
              (t[6] = n),
              (t[7] = a),
              (t[8] = g),
              (t[9] = l),
              (t[10] = u),
              (t[11] = d),
              (t[12] = C),
              (t[13] = b))
            : (b = t[13]),
          b
        );
      }
      var v = i && y.reactionButtonActive,
        S;
      t[14] !== v
        ? ((S = [y.reactionButton, v]), (t[14] = v), (t[15] = S))
        : (S = t[15]);
      var R;
      return (
        t[16] !== n ||
        t[17] !== a ||
        t[18] !== l ||
        t[19] !== u ||
        t[20] !== d ||
        t[21] !== S
          ? ((R = c.jsx(r("WDSButton.react"), {
              ref: a,
              testid: void 0,
              variant: "borderless",
              disabled: l,
              onPress: d,
              Icon: r("WDSIconIcMood.react"),
              size: "medium",
              "aria-label": n,
              "aria-expanded": u,
              xstyle: S,
            })),
            (t[16] = n),
            (t[17] = a),
            (t[18] = l),
            (t[19] = u),
            (t[20] = d),
            (t[21] = S),
            (t[22] = R))
          : (R = t[22]),
        R
      );
    }
    function b(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(51),
        l = t.isDisabled,
        u = t.onReactionSelect,
        d = t.selfReaction,
        b = l === void 0 ? !1 : l,
        v = m(r("WAWebVoipUiPopoutWindowContext")),
        S =
          v.isContextInPopoutWindow && v.windowEl != null ? v.windowEl : void 0,
        R = _(null),
        L = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        E = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(),
        k = _(null),
        I = f(!1),
        T = I[0],
        D = I[1],
        x = f(!1),
        $ = x[0],
        P = x[1],
        N = _(!1),
        M = T || $ || (d != null && d !== ""),
        w = r("useWAWebVoipWindowPopoutTooltipProps")(),
        A = w.tooltipAnchorRef,
        F = w.tooltipOwnerDocument,
        O,
        B;
      (i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            return function () {
              k.current != null && window.clearTimeout(k.current);
            };
          }),
          (B = []),
          (i[0] = O),
          (i[1] = B))
        : ((O = i[0]), (B = i[1])),
        p(O, B));
      var W;
      i[2] !== u
        ? ((W = function (t) {
            u == null || u(t);
          }),
          (i[2] = u),
          (i[3] = W))
        : (W = i[3]);
      var q = W,
        U;
      i[4] !== q || i[5] !== L
        ? ((U = function (t) {
            if (t === o("WAWebSendReactionsTray.react").MORE_REACTIONS) {
              var e;
              ((N.current = !0), (e = L.current) == null || e.hidePopover());
            } else {
              var n;
              ((n = L.current) == null || n.hidePopover(), q(t));
            }
          }),
          (i[4] = q),
          (i[5] = L),
          (i[6] = U))
        : (U = i[6]);
      var V = U,
        H;
      i[7] !== E
        ? ((H = function () {
            (D(!1),
              N.current &&
                ((N.current = !1),
                (k.current = window.setTimeout(function () {
                  var e;
                  (e = E.current) == null || e.showPopover();
                }, h))));
          }),
          (i[7] = E),
          (i[8] = H))
        : (H = i[8]);
      var G = H,
        z;
      i[9] !== E || i[10] !== q
        ? ((z = function (t) {
            var e;
            ((e = E.current) == null || e.hidePopover(), q(t));
          }),
          (i[9] = E),
          (i[10] = q),
          (i[11] = z))
        : (z = i[11]);
      var j = z,
        K;
      i[12] !== L
        ? ((K = function () {
            var e;
            (e = L.current) == null || e.showPopover();
          }),
          (i[12] = L),
          (i[13] = K))
        : (K = i[13]);
      var Q = K,
        X;
      i[14] !== d
        ? ((X =
            d != null
              ? o("WAWebDefaultReactions").DEFAULT_REACTIONS.indexOf(d)
              : null),
          (i[14] = d),
          (i[15] = X))
        : (X = i[15]);
      var Y = X,
        J = Y != null && Y >= 0 ? Y : null,
        Z;
      i[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = s._(/*BTDS*/ "React")), (i[16] = Z))
        : (Z = i[16]);
      var ee = Z,
        te = T || $,
        ne;
      i[17] !== Q || i[18] !== M || i[19] !== b || i[20] !== d || i[21] !== te
        ? ((ne = c.jsx(C, {
            ariaLabel: ee,
            buttonRef: R,
            isActive: M,
            isDisabled: b,
            isExpanded: te,
            onPress: Q,
            selfReaction: d,
          })),
          (i[17] = Q),
          (i[18] = M),
          (i[19] = b),
          (i[20] = d),
          (i[21] = te),
          (i[22] = ne))
        : (ne = i[22]);
      var re;
      i[23] !== ne || i[24] !== A || i[25] !== F
        ? ((re = c.jsx(r("WDSTooltip.react"), {
            label: ee,
            ownerAnchorRef: A,
            ownerDocument: F,
            delayTooltipMs: g,
            children: ne,
          })),
          (i[23] = ne),
          (i[24] = A),
          (i[25] = F),
          (i[26] = re))
        : (re = i[26]);
      var oe = (n = v.popoverPortalEl) != null ? n : void 0,
        ae;
      i[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = function () {
            return D(!0);
          }),
          (i[27] = ae))
        : (ae = i[27]);
      var ie;
      i[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = (e || (e = r("stylex"))).props(
            o("WDSThemes").WDSDarkTheme,
            y.reactionTrayWrapper,
          )),
          (i[28] = ie))
        : (ie = i[28]);
      var le;
      i[29] !== V || i[30] !== J
        ? ((le = c.jsx(
            "div",
            babelHelpers.extends({}, ie, {
              children: c.jsx(
                o("WAWebSendReactionsTray.react").SendReactionsTray,
                {
                  isInlineMode: !0,
                  reactions: o("WAWebDefaultReactions").DEFAULT_REACTIONS,
                  selectedIndex: J,
                  showMoreOption: !0,
                  isParentMsgSentByMe: !1,
                  selectedCallback: V,
                },
              ),
            }),
          )),
          (i[29] = V),
          (i[30] = J),
          (i[31] = le))
        : (le = i[31]);
      var se;
      i[32] !== G || i[33] !== L || i[34] !== oe || i[35] !== le
        ? ((se = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: oe,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            controllerRef: L,
            target: R,
            onOpen: ae,
            onClose: G,
            xstyle: y.transparentDropdownContainer,
            children: le,
          })),
          (i[32] = G),
          (i[33] = L),
          (i[34] = oe),
          (i[35] = le),
          (i[36] = se))
        : (se = i[36]);
      var ue = (a = v.popoverPortalEl) != null ? a : void 0,
        ce,
        de;
      i[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = function () {
            P(!0);
          }),
          (de = function () {
            P(!1);
          }),
          (i[37] = ce),
          (i[38] = de))
        : ((ce = i[37]), (de = i[38]));
      var me;
      i[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = (e || (e = r("stylex"))).props(
            o("WDSThemes").WDSDarkTheme,
            y.emojiPickerContainer,
          )),
          (i[39] = me))
        : (me = i[39]);
      var pe;
      i[40] !== j || i[41] !== S
        ? ((pe = c.jsx("div", {
            className: "dark color-refresh",
            children: c.jsx(
              "div",
              babelHelpers.extends({}, me, {
                children: c.jsx(r("WAWebEmojiPanel.react"), {
                  onEmoji: j,
                  displayLocation: o("WAWebPanelsDisplayLocation")
                    .DisplayLocation.Reactions,
                  width: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
                  targetWindow: S,
                }),
              }),
            ),
          })),
          (i[40] = j),
          (i[41] = S),
          (i[42] = pe))
        : (pe = i[42]);
      var _e;
      i[43] !== E || i[44] !== ue || i[45] !== pe
        ? ((_e = c.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            popoverPortal: ue,
            position: o("WAWebDropdownV2.react").PopoverPosition.Top,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
            controllerRef: E,
            target: R,
            initHandling: "controllable",
            onOpen: ce,
            onClose: de,
            minWidth: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
            xstyle: y.transparentDropdownContainer,
            children: pe,
          })),
          (i[43] = E),
          (i[44] = ue),
          (i[45] = pe),
          (i[46] = _e))
        : (_e = i[46]);
      var fe;
      return (
        i[47] !== re || i[48] !== se || i[49] !== _e
          ? ((fe = c.jsxs("div", { children: [re, se, _e] })),
            (i[47] = re),
            (i[48] = se),
            (i[49] = _e),
            (i[50] = fe))
          : (fe = i[50]),
        fe
      );
    }
    l.default = b;
  },
  226,
);
