__d(
  "WAWebDropdown.react",
  [
    "cx",
    "$InternalEnum",
    "WANullthrows",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebCompatibility",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebNoop",
    "WAWebUISpacing",
    "WDSVars.stylex",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useLayoutEffect,
      f = m.useMemo,
      g = m.useRef,
      h = m.useState,
      y = 388,
      C = 573,
      b = C,
      v = y,
      S = 32,
      R = 32,
      L = 10,
      E = n("$InternalEnum").Mirrored([
        "Dropdown",
        "DropdownMenu",
        "DropdownText",
        "AttachMenu",
        "Picker",
        "EmojiPicker",
        "StickerPicker",
        "ColorPicker",
        "LabelColorPicker",
        "Tooltip",
        "ReactionDetailsPane",
        "ReactionSendTray",
        "ReactionPicker",
        "DatePicker",
        "Suggestions",
        "AttachMenuPopup",
        "ExpressionsPanel",
        "EventsRSVPPopup",
        "NewsletterWamoSubMessageTypePopup",
        "DropdownMenuPopup",
        "BusinessProfileDropdown",
      ]),
      k = n("$InternalEnum").Mirrored(["Default", "Highlight"]),
      I = n("$InternalEnum").Mirrored(["LEFT", "CENTER", "RIGHT"]),
      T = n("$InternalEnum").Mirrored(["TOP", "BOTTOM"]),
      D = {
        eventsRSVPPopup: {
          boxSizing: "x9f619",
          borderStartStartRadius: "x1rsuxf0",
          borderStartEndRadius: "xcgujcq",
          borderEndEndRadius: "x1igtfuo",
          borderEndStartRadius: "x13up0n2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        attachMenu: {
          position: "x10l6tqk",
          bottom: "x1ey2m1c",
          zIndex: "xfo81ep",
          boxSizing: "x1afcbsf",
          width: "x19ueb17",
          pointerEvents: "x71s49j",
          cursor: "xt0e3qv",
          $$css: !0,
        },
        attachMenuPopup: {
          bottom: "xacj9c0",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
        newsletterWamoSubMessageTypePopup: {
          bottom: "xacj9c0",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
        dropdownMenuPopup: {
          width: "x17q7fqb",
          maxWidth: "xwcfh7u",
          $$css: !0,
        },
        businessProfileDropdown: {
          width: "x1czfd9k",
          maxWidth: "x1x1rfll",
          $$css: !0,
        },
      };
    function x(e) {
      switch (e) {
        case E.AttachMenu:
          return [
            D.attachMenu,
            o("WAWebUISpacing").uiPadding.top0,
            o("WAWebUISpacing").uiPadding.horiz10,
            o("WAWebUISpacing").uiPadding.bottom7,
          ];
        case E.EventsRSVPPopup:
          return [D.eventsRSVPPopup, o("WAWebUISpacing").uiPadding.vert0];
        case E.AttachMenuPopup:
          return [D.attachMenuPopup];
        case E.NewsletterWamoSubMessageTypePopup:
          return [D.newsletterWamoSubMessageTypePopup];
        case E.DropdownMenuPopup:
          return [D.dropdownMenuPopup];
        case E.BusinessProfileDropdown:
          return [D.businessProfileDropdown];
        default:
          return [];
      }
    }
    function $(e) {
      switch (e) {
        case I.RIGHT:
          return I.LEFT;
        case I.LEFT:
          return I.RIGHT;
        case I.CENTER:
          return I.CENTER;
      }
    }
    function P(e, t, n) {
      var o = n && r("WAWebL10N").isRTL() ? $(e) : e;
      return [o, t];
    }
    function N(e, t) {
      var n = $(e),
        r = t === T.TOP ? T.BOTTOM : T.TOP;
      return r + " " + n;
    }
    function M(e, t, n, r) {
      var o,
        a,
        i = {};
      switch (e) {
        case I.RIGHT:
          i.left = Math.min(
            window.innerWidth -
              ((o = r == null ? void 0 : r.offsetWidth) != null ? o : 0) -
              R,
            n.x,
          );
          break;
        case I.LEFT:
          i.right = window.innerWidth - n.x;
          break;
        case I.CENTER:
          ((i.left =
            n.x -
            ((a = r == null ? void 0 : r.offsetWidth) != null ? a : 0) / 2),
            (i.marginLeft = 0),
            (i.marginRight = 0));
          break;
      }
      switch (t) {
        case T.BOTTOM: {
          i.top = n.y;
          var l = r == null ? void 0 : r.offsetHeight;
          if (l != null) {
            var s = window.innerHeight - l - S;
            ((i.top = Math.min(s, n.y)),
              i.top < 0 &&
                ((i.top = 0),
                (i.height = window.innerHeight - S),
                (i.overflowY = "auto")));
          }
          break;
        }
        case T.TOP: {
          i.bottom = window.innerHeight - n.y;
          break;
        }
      }
      return i;
    }
    function w(e, t, n) {
      return e !== I.CENTER || t == null || n == null
        ? null
        : { left: t.offsetWidth / 2 - n.offsetWidth / 2 };
    }
    function A(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.type,
        s = l === void 0 ? E.Dropdown : l,
        c = i.dirX,
        m = c === void 0 ? I.RIGHT : c,
        y = i.dirY,
        C = y === void 0 ? T.BOTTOM : y,
        b = i.children,
        v = i.flipOnRTL,
        S = i.origin,
        R = i.style,
        D = i.horizontal,
        $ = i.isTemporaryRender,
        A = i.autoFocus,
        O = i.findFirstItem,
        B = i.onDefault,
        W = i.testid,
        q = i.tooltipColorScheme,
        U = h(!1),
        V = U[0],
        H = U[1],
        G = h(null),
        z = G[0],
        j = G[1],
        K = h(!1),
        Q = K[0],
        X = K[1],
        Y = g(null),
        J = g(),
        Z = g(),
        ee = r("useMergeRefs")(a, Y),
        te = r("useWAWebUIM")();
      _(
        function () {
          Y.current != null && !Q && X(!0);
        },
        [Q],
      );
      var ne = f(
        function () {
          return (
            s !== E.EmojiPicker &&
            s !== E.Suggestions &&
            s !== E.ReactionDetailsPane &&
            s !== E.ReactionSendTray &&
            s !== E.StickerPicker &&
            s !== E.DatePicker &&
            s !== E.ColorPicker &&
            s !== E.LabelColorPicker &&
            s !== E.ReactionPicker &&
            s !== E.DropdownText
          );
        },
        [s],
      );
      (p(function () {
        if (ne)
          if (A === !0) {
            var e,
              t =
                (e = Z.current) == null
                  ? void 0
                  : e.querySelector("[tabindex]"),
              n;
            ((O === !0 && t) ||
            (Z.current && Z.current.firstChild instanceof HTMLDivElement && t)
              ? (n = t)
              : Z.current &&
                Z.current.children.length > 0 &&
                (n = Z.current.children[0]),
              r("WAWebFocusTracer").focus(n),
              H(!0),
              j(n));
          } else r("WAWebFocusTracer").focus(Y.current);
      }, []),
        p(
          function () {
            !Z.current ||
              !Y.current ||
              $ === !0 ||
              o("WAWebCmd").Cmd.floaterEscapeOverlap(Y.current, L);
          },
          [$],
        ));
      var re = f(
          function () {
            var e = {
                borderRadius: o("WDSVars.stylex").WDSVars.borderRadiusDouble,
              },
              t = R != null ? R : {},
              n = P(m, C, v),
              r = n[0],
              a = n[1];
            if (
              ((e[o("WAWebCompatibility").compatPrefix("transformOrigin")] = N(
                r,
                a,
              )),
              !S)
            )
              return babelHelpers.extends({}, t, e);
            var i = M(r, a, S, Y.current);
            return babelHelpers.extends({}, t, e, i);
          },
          [m, C, v, Q, S, R],
        ),
        oe = function (t) {
          (r("WAWebFocusTracer").focus(Y.current), H(!1));
        },
        ae = function (t, n) {
          var e = (n < 0 ? t.length - 1 : n) % t.length;
          (r("WAWebFocusTracer").focus(t[e]), H(!0), j(t[e]));
        },
        ie = function () {
          var e = Array.from(
            r("WANullthrows")(Z.current).querySelectorAll(
              "li:not(.dropdown-item-disabled)",
            ),
          );
          return {
            activeChildren: e,
            currentlyFocusedIndex: z == null ? -1 : e.indexOf(z),
          };
        },
        le = function (t) {
          F(t);
          var e = ie(),
            n = e.activeChildren,
            r = e.currentlyFocusedIndex;
          n.length !== 0 && ae(n, r - 1);
        },
        se = function (t) {
          F(t);
          var e = ie(),
            n = e.activeChildren,
            r = e.currentlyFocusedIndex;
          n.length !== 0 && ae(n, r + 1);
        },
        ue = function (t) {
          F(t);
          var e = ie(),
            n = e.activeChildren,
            r = e.currentlyFocusedIndex;
          if (n.length !== 0) {
            if (n.length > 12 || n.length === 6) {
              se(t);
              return;
            }
            var o,
              a = (n.length - 2) / 2,
              i = 0,
              l = a - 1,
              s = a,
              u = n.length - 3;
            (r === -1
              ? (o = i)
              : r >= s && r <= u
                ? (o = r - a)
                : r >= i && r <= l
                  ? (o = r)
                  : (o = s),
              ae(n, o));
          }
        },
        ce = function (t) {
          F(t);
          var e = ie(),
            n = e.activeChildren,
            r = e.currentlyFocusedIndex;
          if (n.length !== 0) {
            if (n.length > 12 || n.length === 6) {
              le(t);
              return;
            }
            var o,
              a = (n.length - 2) / 2,
              i = 0,
              l = a - 1,
              s = a,
              u = n.length - 3;
            (r >= s && r <= u
              ? (o = u + 1)
              : r >= i && r <= l
                ? (o = r + a)
                : (o = r),
              ae(n, o));
          }
        },
        de = function (t) {
          (t.preventDefault(), te == null || te.requestDismiss());
        },
        me = function (t) {
          B && (te == null || te.requestDismiss(), B(t));
        },
        pe = function (t) {
          (t.stopPropagation(),
            r("WAWebFocusTracer").focus(Y.current),
            j(void 0));
        },
        _e = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((n = {}),
          (n._ak4w =
            s === E.Dropdown ||
            s === E.DropdownMenu ||
            s === E.DropdownMenuPopup ||
            s === E.EmojiPicker ||
            s === E.StickerPicker ||
            s === E.ColorPicker ||
            s === E.LabelColorPicker ||
            s === E.ReactionDetailsPane ||
            s === E.ReactionSendTray ||
            s === E.ReactionPicker ||
            s === E.DatePicker ||
            s === E.Suggestions ||
            s === E.DropdownText ||
            s === E.AttachMenuPopup ||
            s === E.ExpressionsPanel ||
            s === E.EventsRSVPPopup ||
            s === E.NewsletterWamoSubMessageTypePopup ||
            s === E.BusinessProfileDropdown),
          (n._ak4x =
            s === E.DropdownMenu ||
            s === E.DropdownMenuPopup ||
            s === E.BusinessProfileDropdown),
          (n._ak4z = s === E.Picker),
          (n["_ak4-"] = s === E.EmojiPicker),
          (n._asag = s === E.EmojiPicker),
          (n._ak4_ = s === E.StickerPicker),
          (n._ak50 = s === E.ColorPicker),
          (n._aozv = s === E.LabelColorPicker),
          (n._ak51 = s === E.ReactionDetailsPane),
          (n._ak52 = s === E.ReactionSendTray),
          (n._ak53 = s === E.ReactionPicker),
          (n._aos4 = s === E.DatePicker),
          (n._ak54 = s === E.Suggestions),
          (n._alox = s === E.ExpressionsPanel),
          (n._as8u = s === E.ExpressionsPanel),
          (n._ao_l = s === E.ExpressionsPanel),
          (n._ak55 = s === E.DropdownText),
          (n._ak56 = s === E.Tooltip),
          (n._ak57 = q === k.Highlight),
          (n._ak58 =
            (s === E.Picker ||
              s === E.EmojiPicker ||
              s === E.StickerPicker ||
              s === E.ColorPicker ||
              s === E.LabelColorPicker ||
              s === E.ReactionDetailsPane ||
              s === E.ReactionSendTray ||
              s === E.ReactionPicker ||
              s === E.DatePicker ||
              s === E.DropdownText ||
              s === E.Tooltip) &&
            m === I.LEFT),
          (n._ak59 =
            (s === E.EmojiPicker ||
              s === E.StickerPicker ||
              s === E.ColorPicker ||
              s === E.LabelColorPicker ||
              s === E.ReactionDetailsPane ||
              s === E.ReactionSendTray ||
              s === E.ReactionPicker ||
              s === E.DatePicker ||
              s === E.DropdownText) &&
            C === T.TOP),
          (n["_ap4-"] = !0),
          (n._ap4_ =
            s === E.Dropdown ||
            s === E.DropdownMenu ||
            s === E.DropdownMenuPopup ||
            s === E.BusinessProfileDropdown),
          n),
        ),
        fe = x(s),
        ge =
          s === E.Picker ||
          s === E.EmojiPicker ||
          s === E.StickerPicker ||
          s === E.LabelColorPicker ||
          s === E.DropdownText ||
          s === E.Tooltip
            ? d.jsx("div", {
                "data-testid": void 0,
                ref: J,
                className: "_ak5a",
                "data-animate-dropdown-nib": !0,
                style: w(m, Y.current, J.current),
              })
            : null;
      if (ne) {
        var he = {
            enter: me,
            tab: F,
            "shift+tab": F,
            up: r("WAWebNoop"),
            down: r("WAWebNoop"),
          },
          ye,
          Ce;
        if (
          (o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() &&
          s === E.Picker
            ? r("WAWebL10N").isRTL()
              ? ((ye = ce), (Ce = ue))
              : ((ye = ue), (Ce = ce))
            : ((ye = le), (Ce = se)),
          D)
        ) {
          var be;
          ((he[(be = r("WAWebL10N")).LR("left", "right")] = le),
            (he[be.LR("right", "left")] = se),
            (he[be.LR("up", "down")] = ye),
            (he[be.LR("down", "up")] = Ce));
        } else
          (s === E.AttachMenu
            ? ((he.up = se), (he.down = le))
            : ((he.up = le), (he.down = se)),
            s !== E.ExpressionsPanel &&
              ((he[r("WAWebL10N").LR("left", "right")] = de),
              (he[r("WAWebL10N").LR("right", "left")] = me)));
        return d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: ee,
          handlers: he,
          role: "application",
          className: _e + " " + (u || (u = r("stylex")))(fe),
          style: re,
          onMouseMove: V ? oe : null,
          onMouseUp: pe,
          children: [
            d.jsx(
              "ul",
              babelHelpers.extends(
                { "data-testid": void 0, ref: Z },
                { 0: {}, 1: { className: "x78zum5 x3ieub6" } }[
                  (s === E.AttachMenu) << 0
                ],
                { children: b },
              ),
            ),
            ge,
          ],
        });
      }
      return d.jsxs("div", {
        ref: ee,
        className: _e,
        style: re,
        "data-testid": void 0,
        children: [b, ge],
      });
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    ((l.EMOJI_PICKER_WIDTH = b),
      (l.REACTIONS_PANEL_WIDTH = v),
      (l.MenuType = E),
      (l.TooltipColorScheme = k),
      (l.DirX = I),
      (l.DirY = T),
      (l.Dropdown = A));
  },
  98,
);
