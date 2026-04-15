__d(
  "WAWebReactionsBubbleWrapper.react",
  [
    "WAWebAddOnBubblesContainerConditions",
    "WAWebClassnames",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardListHotKeys.react",
    "WAWebMiscGatingUtils",
    "WAWebReactionsBubble.react",
    "WAWebReactionsUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { reactionBubbleContainer: { height: "xo0jvv6", $$css: !0 } };
    function d(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.closeDetailsPane,
        i = t.detailsPane,
        l = t.handlers,
        s = t.hasReaction,
        d = t.isFirstData,
        p = t.numberOfSenderReactions,
        _ = t.openDetailsPane,
        f = t.reactionArrayEmojis,
        g = t.reactionBubbleVisible,
        h = o("WAWebAddOnBubblesContainerConditions").hasHiddenSenderReactions(
          p,
          g,
        ),
        y;
      n[0] !== p || n[1] !== f
        ? ((y = o("WAWebReactionsUtils").reactionBubbleAriaLabelString(p, f)),
          (n[0] = p),
          (n[1] = f),
          (n[2] = y))
        : (y = n[2]);
      var C = y,
        b;
      n[3] !== a || n[4] !== i
        ? ((b =
            i &&
            u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "DetailsPane",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: a,
              children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: i }),
            })),
          (n[3] = a),
          (n[4] = i),
          (n[5] = b))
        : (b = n[5]);
      var v = b,
        S = null;
      if (h) {
        if (s) {
          var I;
          (n[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = u.jsx("div", { className: "xo0jvv6" })), (n[17] = I))
            : (I = n[17]),
            (S = I));
        }
      } else {
        var R;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
          var L;
          ((R = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((L = {}),
            (L[
              o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME
            ] = !o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()),
            L),
            (e || (e = r("stylex")))([c.reactionBubbleContainer]),
          )),
            (n[6] = R));
        } else R = n[6];
        var E;
        n[7] !== d || n[8] !== p || n[9] !== f
          ? ((E = u.jsx(r("WAWebReactionsBubble.react"), {
              reactions: f,
              reactionsAggregateCount: p,
              isFirstData: d,
            })),
            (n[7] = d),
            (n[8] = p),
            (n[9] = f),
            (n[10] = E))
          : (E = n[10]);
        var k;
        (n[11] !== l || n[12] !== _ || n[13] !== C || n[14] !== R || n[15] !== E
          ? ((k = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              "data-testid": void 0,
              onClick: _,
              onDoubleClick: m,
              handlers: l,
              component: "button",
              "aria-haspopup": !0,
              tabIndex: o(
                "WAWebMiscGatingUtils",
              ).messageListA11yRedesignEnabled()
                ? 0
                : null,
              "aria-label": C,
              className: R,
              children: E,
            })),
            (n[11] = l),
            (n[12] = _),
            (n[13] = C),
            (n[14] = R),
            (n[15] = E),
            (n[16] = k))
          : (k = n[16]),
          (S = k));
      }
      var T;
      return (
        n[18] !== S || n[19] !== v
          ? ((T = u.jsxs(u.Fragment, { children: [S, v] })),
            (n[18] = S),
            (n[19] = v),
            (n[20] = T))
          : (T = n[20]),
        T
      );
    }
    function m(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    l.default = d;
  },
  98,
);
