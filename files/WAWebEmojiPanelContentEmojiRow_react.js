__d(
  "WAWebEmojiPanelContentEmojiRow.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebCmd",
    "WAWebDropdown.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiSkinTonePicker.react",
    "WAWebEmojiVariantCollection",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebReactionsSelectionContext",
    "WAWebRecentReactionsCollection",
    "WAWebStopEvent",
    "WAWebUimUie.react",
    "WAWebUimUieTooltip.react",
    "WAWebUimUtils",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useImperativeHandle,
      _ = d.useRef,
      f = d.useState,
      g = 250,
      h = 12,
      y = 44,
      C = 44;
    function b(t) {
      "use no forget";
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.allowVariantPrompt,
        s = i.displayLocation,
        u = i.emojis,
        d = i.focusAbove,
        h = i.focusBelow,
        y = i.numColumns,
        C = i.onEmoji,
        b = i.onEmojiFocus,
        v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        L = o("useWAWebListener").useAddListenerOnce(),
        E = L[0],
        k = _(null),
        I = _(null),
        T = _(null),
        D = _(null),
        x = _(!1),
        $ = _(null),
        P = f(null),
        N = P[0],
        M = P[1],
        w = s === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions,
        A = m(r("WAWebReactionsSelectionContext")),
        F = function (t, n) {
          var e = t;
          if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(e)) {
            var r = o(
              "WAWebEmojiVariantCollection",
            ).EmojiVariantCollection.getVariantIfExists(e);
            if (w)
              if (n != null) {
                var a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n);
                r = a != null ? a : e;
              } else {
                var i = R(t);
                i != null && (r = i);
              }
            if (r != null) e = r;
            else if (l) return !0;
          }
          C(e);
        },
        O = function (t, n, r) {
          (o("WAWebMiscGatingUtils").multiSkinToneEmojiPickerEnabled() &&
            M(null),
            o("WAWebStopEvent").stopEvent(t),
            w ||
              o(
                "WAWebEmojiVariantCollection",
              ).EmojiVariantCollection.setVariant(n, r),
            F(n, r));
        },
        B = function (t, n, a) {
          var e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t);
          e &&
            (($.current = t),
            (x.current = !0),
            M({
              menu: c.jsx(r("WAWebEmojiSkinTonePicker.react"), {
                base: e,
                action: O,
                unicode: t,
                preVariant: n.dataset.emoji,
              }),
              anchor: n,
              type: o("WAWebDropdown.react").MenuType.Picker,
              dirX: o("WAWebDropdown.react").DirX.RIGHT,
              dirY: o("WAWebDropdown.react").DirY.TOP,
              horizontal: !0,
              autoFocus: a,
              findFirstItem: !0,
            }));
        },
        W = o("useWAWebTimeout").useTimeout(function () {
          (T.current != null && D.current != null && B(T.current, D.current),
            E(
              o("WAWebCmd").Cmd,
              "window_click",
              o("WAWebStopEvent").stopEvent,
            ));
        }, g),
        q = W[0],
        U = W[1],
        V = function (t) {
          var e = parseInt(t.dataset.emojiIndex, 10);
          isNaN(e) ||
            (r("WAWebFocusTracer").focus(t, { preventScroll: !0 }),
            b(t),
            (I.current = t));
        },
        H = r("useWAWebStableCallback")(function () {
          x.current && (x.current = !1);
          var e = N == null ? void 0 : N.anchor;
          (e && e instanceof HTMLElement && V(e), M(null));
        }),
        G = function (t) {
          var e = S(t);
          if (e != null) {
            var n = u[e];
            return n || null;
          }
        },
        z = function (t) {
          var e = u.length - 1,
            n = Math.max(Math.min(t, e), 0);
          if (k.current != null) return k.current.children[n];
        },
        j = function (t, n) {
          ((T.current = t),
            (D.current = n),
            q(),
            E(window, "mouseup", U, { capture: !0 }));
        },
        K = function (t) {
          if (t != null) {
            var e = u[t];
            if (e) {
              var n = z(t);
              if (n) {
                U();
                var r = F(e);
                r && B(e, n, !0);
              }
            }
          }
        },
        Q = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          e != null && h && h(e);
        },
        X = function (t) {
          var e = z(t);
          e && V(e);
        },
        Y = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          if (e != null) {
            var n = e - 1;
            if (n < 0) {
              d(y - 1);
              return;
            }
            X(n);
          }
        },
        J = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          if (e != null) {
            var n = e + 1;
            if (n >= u.length) {
              h == null || h(0);
              return;
            }
            X(n);
          }
        },
        Z = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          e != null && d(e);
        },
        ee = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          K(e);
        },
        te = function (t) {
          r("WAWebL10N").isRTL() ? J(t) : Y(t);
        },
        ne = function (t) {
          r("WAWebL10N").isRTL() ? Y(t) : J(t);
        },
        re = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = S(t);
          G(t) != null && $.current != null && $.current !== G(t)
            ? (K(e), ($.current = G(t)), (x.current = !1))
            : x.current
              ? (x.current = !1)
              : K(e);
        },
        oe = function (t) {
          o("WAWebStopEvent").stopEvent(t);
          var e = G(t);
          e && t.target instanceof HTMLElement && B(e, t.target);
        },
        ae = function (t) {
          (o("WAWebStopEvent").stopEvent(t), M(null));
          var e = t.target;
          if (e instanceof HTMLElement) {
            var n = G(t);
            n && j(n, e);
          }
        },
        ie = function () {
          K(0);
        },
        le = function () {
          I.current && V(I.current);
        };
      (o("useWAWebListener").useListener(
        o("WAWebEmojiVariantCollection").EmojiVariantCollection,
        ["add", "remove", "change:variant"],
        v,
      ),
        p(a, function () {
          return { focusEmojiAt: X, selectFirstEmoji: ie, restoreFocus: le };
        }));
      var se;
      if (
        (N &&
          (se = c.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "SkinTonePicker",
            popable: !0,
            escapable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: H,
            requestRecentFocusOnUnmount: !1,
            children: c.jsx(r("WAWebUimUieTooltip.react"), { tooltip: N }),
          })),
        !u.length)
      )
        return null;
      var ue = null;
      return (
        A != null && (ue = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(A)),
        c.jsxs("div", {
          className: "xbmvrgn x1diwwjn",
          children: [
            c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              onMouseDown: ae,
              onClick: re,
              onContextMenu: oe,
              tabIndex: null,
              handlers: {
                up: Z,
                down: Q,
                left: te,
                right: ne,
                enter: ee,
                space: ee,
              },
              children: c.jsx("div", {
                ref: k,
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((n = {}),
                  (n._agwi =
                    s ===
                    o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions),
                  (n._agwh = !0),
                  n),
                ),
                role: "row",
                children: u.map(function (e, t) {
                  var n,
                    a = o(
                      "WAWebEmojiVariantCollection",
                    ).EmojiVariantCollection.getVariantIfExists(e),
                    i = !1;
                  if (w) {
                    i = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e) === ue;
                    var l = R(e);
                    l != null && (a = l);
                  }
                  var s = c.jsx(
                    r("WAWebEmoji.react"),
                    {
                      element: "span",
                      emoji: a || e,
                      size: "large",
                      tabIndex: -1,
                      "data-emoji-index": t,
                    },
                    e,
                  );
                  return w
                    ? c.jsx(
                        "div",
                        {
                          tabIndex: -1,
                          role: "gridcell",
                          "aria-label": e,
                          "data-emoji-index": t,
                          className: o(
                            "WAWebClassnames",
                          ).classnamesConvertMeToStylexPlease(
                            ((n = {}),
                            (n._amdp = i),
                            (n._agwl = !0),
                            (n._amdq = !i),
                            n),
                          ),
                          children: s,
                        },
                        e,
                      )
                    : s;
                }),
              }),
            }),
            se,
          ],
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = b;
    function S(e) {
      if (
        !(
          o("WAWebUimUtils").isCrossWindowHTMLElement(e.target) ||
          e.target instanceof HTMLElement
        )
      )
        return null;
      var t = parseInt(e.target.dataset.emojiIndex, 10);
      return isNaN(t) ? null : t;
    }
    function R(e) {
      var t = o("WAWebEmoji").EmojiUtil.getEmojiAggregate(e),
        n = o("WAWebRecentReactionsCollection").RecentReactionsCollection.get(
          t,
        );
      if (n)
        return o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(
          n.reactionText,
        );
    }
    ((l.SIDE_MARGIN = h),
      (l.EMOJI_HEIGHT = y),
      (l.EMOJI_WIDTH = C),
      (l.EmojiRow = v));
  },
  98,
);
