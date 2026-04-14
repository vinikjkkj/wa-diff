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
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = { reactionBubbleContainer: { height: "xo0jvv6", $$css: !0 } };
    function d(t) {
      var n = t.closeDetailsPane,
        a = t.detailsPane,
        i = t.handlers,
        l = t.hasReaction,
        s = t.isFirstData,
        d = t.numberOfSenderReactions,
        p = t.openDetailsPane,
        _ = t.reactionArrayEmojis,
        f = t.reactionBubbleVisible,
        g = o("WAWebAddOnBubblesContainerConditions").hasHiddenSenderReactions(
          d,
          f,
        ),
        h = o("WAWebReactionsUtils").reactionBubbleAriaLabelString(d, _),
        y =
          a &&
          u.jsx(o("WAWebUimUie.react").UIE, {
            displayName: "DetailsPane",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: n,
            children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: a }),
          }),
        C = null;
      if (g) l && (C = u.jsx("div", { className: "xo0jvv6" }));
      else {
        var b;
        C = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          "data-testid": void 0,
          onClick: p,
          onDoubleClick: m,
          handlers: i,
          component: "button",
          "aria-haspopup": !0,
          tabIndex: o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
            ? 0
            : null,
          "aria-label": h,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((b = {}),
            (b[
              o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME
            ] = !o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()),
            b),
            (e || (e = r("stylex")))([c.reactionBubbleContainer]),
          ),
          children: u.jsx(r("WAWebReactionsBubble.react"), {
            reactions: _,
            reactionsAggregateCount: d,
            isFirstData: s,
          }),
        });
      }
      return u.jsxs(u.Fragment, { children: [C, y] });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      (e.preventDefault(), e.stopPropagation());
    }
    l.default = d;
  },
  98,
);
