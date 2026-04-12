__d(
  "WAWebNewsletterReactionDetailsPaneItem.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionCellDetailThumb.react",
    "WAWebReactionEmoji.react",
    "WAWebReactionsBEUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = {
        myReactedEmoji: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        facePile: {
          borderTopColor: "x19bsprb",
          borderInlineEndColor: "x2cy9dh",
          borderBottomColor: "x1eeqclz",
          borderInlineStartColor: "x1mx0rqa",
          $$css: !0,
        },
      };
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.count,
        l = a.emoji,
        c = a.facePileImages,
        m = a.firstMsg,
        h = a.multipleMsgs,
        y = a.offlineOrServerError,
        C = a.onClick,
        b = a.onCloseDetailsPane,
        v = a.parentMsgKey,
        S = v != null,
        R = v != null ? o("WAWebMsgCollection").MsgCollection.get(v) : null,
        L = o("WAWebMsgGetters").getIsMedia(m) && h,
        E =
          o("WAWebMsgActionCapability").isNewsletterMsgOnServer(m) &&
          (S ||
            (!L &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterQuickReactionsEnabled())),
        k = f(null),
        I = function () {
          r("WAWebFocusTracer").focus(k.current);
        };
      _(n, function () {
        return { focus: I };
      });
      var T = p(
          function (e) {
            e.preventDefault();
            var t = S ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : l;
            C(v != null ? v : m.id, t);
          },
          [C, l, m.id, S, v],
        ),
        D = { enter: T, space: T },
        x = d.jsx(
          "div",
          babelHelpers.extends(
            {},
            (u || (u = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.all5,
              S && g.myReactedEmoji,
            ),
            {
              children: d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                scale: "list",
                size: "large",
                reaction: l,
              }),
            },
          ),
        ),
        $ = S
          ? d.jsxs("span", {
              children: [
                h
                  ? null
                  : d.jsxs(d.Fragment, {
                      children: [r("WAWebL10N").n(i), " "],
                    }),
                s._(/*BTDS*/ "(You reacted)"),
              ],
            })
          : r("WAWebL10N").n(i),
        P = S && E ? s._(/*BTDS*/ "Click to remove") : null,
        N =
          c.length > 0 && !y
            ? d.jsx(r("WAWebFacePile.react"), {
                idsOrUrls: c,
                borderColor: g.facePile,
                xstyle: o("WAWebUISpacing").uiMargin.end8,
              })
            : null,
        M =
          L && R != null
            ? d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    o("WAWebUISpacing").uiMargin.end16,
                    o("WAWebUISpacing").uiMargin.top4,
                  ),
                  {
                    children: d.jsx(
                      o("WAWebReactionCellDetailThumb.react")
                        .ReactionCellDetailThumb,
                      {
                        msg: R,
                        onCloseDetailsPane: b,
                        reactionText: l,
                        showReactionText: !1,
                      },
                    ),
                  },
                ),
              )
            : null;
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: S ? "button" : "listitem",
        ref: k,
        handlers: D,
        children: d.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: d.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 2,
            children: d.jsx(r("WAWebCellFrame.react"), {
              onClick: E ? T : null,
              image: x,
              primary: $,
              secondary: P,
              detail: M != null ? M : N,
              theme: S
                ? "newsletter-reaction-by-me"
                : "newsletter-reaction-by-others",
              focusable: !0,
            }),
          }),
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
