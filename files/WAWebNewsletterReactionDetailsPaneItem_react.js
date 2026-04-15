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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(55),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.count,
        m = l.emoji,
        p = l.facePileImages,
        h = l.firstMsg,
        y = l.multipleMsgs,
        C = l.offlineOrServerError,
        b = l.onClick,
        v = l.onCloseDetailsPane,
        S = l.parentMsgKey,
        R = S != null,
        L;
      n[3] !== S
        ? ((L =
            S != null ? o("WAWebMsgCollection").MsgCollection.get(S) : null),
          (n[3] = S),
          (n[4] = L))
        : (L = n[4]);
      var E = L,
        k;
      n[5] !== h || n[6] !== y
        ? ((k = o("WAWebMsgGetters").getIsMedia(h) && y),
          (n[5] = h),
          (n[6] = y),
          (n[7] = k))
        : (k = n[7]);
      var I = k,
        T;
      n[8] !== h || n[9] !== I || n[10] !== R
        ? ((T =
            o("WAWebMsgActionCapability").isNewsletterMsgOnServer(h) &&
            (R ||
              (!I &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterQuickReactionsEnabled()))),
          (n[8] = h),
          (n[9] = I),
          (n[10] = R),
          (n[11] = T))
        : (T = n[11]);
      var D = T,
        x = f(null),
        $;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            r("WAWebFocusTracer").focus(x.current);
          }),
          (n[12] = $))
        : ($ = n[12]);
      var P = $,
        N;
      (n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            return { focus: P };
          }),
          (n[13] = N))
        : (N = n[13]),
        _(i, N));
      var M;
      n[14] !== m || n[15] !== h.id || n[16] !== R || n[17] !== b || n[18] !== S
        ? ((M = function (t) {
            t.preventDefault();
            var e = R ? o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT : m;
            b(S != null ? S : h.id, e);
          }),
          (n[14] = m),
          (n[15] = h.id),
          (n[16] = R),
          (n[17] = b),
          (n[18] = S),
          (n[19] = M))
        : (M = n[19]);
      var w = M,
        A;
      n[20] !== w
        ? ((A = { enter: w, space: w }), (n[20] = w), (n[21] = A))
        : (A = n[21]);
      var F = A,
        O;
      n[22] !== R
        ? ((O = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.all5,
            R && g.myReactedEmoji,
          )),
          (n[22] = R),
          (n[23] = O))
        : (O = n[23]);
      var B;
      n[24] !== m
        ? ((B = d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
            scale: "list",
            size: "large",
            reaction: m,
          })),
          (n[24] = m),
          (n[25] = B))
        : (B = n[25]);
      var W;
      n[26] !== O || n[27] !== B
        ? ((W = d.jsx("div", babelHelpers.extends({}, O, { children: B }))),
          (n[26] = O),
          (n[27] = B),
          (n[28] = W))
        : (W = n[28]);
      var q = W,
        U;
      n[29] !== c || n[30] !== R || n[31] !== y
        ? ((U = R
            ? d.jsxs("span", {
                children: [
                  y
                    ? null
                    : d.jsxs(d.Fragment, {
                        children: [r("WAWebL10N").n(c), " "],
                      }),
                  s._(/*BTDS*/ "(You reacted)"),
                ],
              })
            : r("WAWebL10N").n(c)),
          (n[29] = c),
          (n[30] = R),
          (n[31] = y),
          (n[32] = U))
        : (U = n[32]);
      var V = U,
        H;
      n[33] !== D || n[34] !== R
        ? ((H = R && D ? s._(/*BTDS*/ "Click to remove") : null),
          (n[33] = D),
          (n[34] = R),
          (n[35] = H))
        : (H = n[35]);
      var G = H,
        z;
      n[36] !== p || n[37] !== C
        ? ((z =
            p.length > 0 && !C
              ? d.jsx(r("WAWebFacePile.react"), {
                  idsOrUrls: p,
                  borderColor: g.facePile,
                  xstyle: o("WAWebUISpacing").uiMargin.end8,
                })
              : null),
          (n[36] = p),
          (n[37] = C),
          (n[38] = z))
        : (z = n[38]);
      var j = z,
        K;
      n[39] !== m || n[40] !== I || n[41] !== v || n[42] !== E
        ? ((K =
            I && E != null
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
                          msg: E,
                          onCloseDetailsPane: v,
                          reactionText: m,
                          showReactionText: !1,
                        },
                      ),
                    },
                  ),
                )
              : null),
          (n[39] = m),
          (n[40] = I),
          (n[41] = v),
          (n[42] = E),
          (n[43] = K))
        : (K = n[43]);
      var Q = K,
        X = R ? "button" : "listitem",
        Y = D ? w : null,
        J = Q != null ? Q : j,
        Z = R ? "newsletter-reaction-by-me" : "newsletter-reaction-by-others",
        ee;
      n[44] !== q ||
      n[45] !== V ||
      n[46] !== G ||
      n[47] !== Y ||
      n[48] !== J ||
      n[49] !== Z
        ? ((ee = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: d.jsx(o("WAWebFlex.react").FlexItem, {
              grow: 2,
              children: d.jsx(r("WAWebCellFrame.react"), {
                onClick: Y,
                image: q,
                primary: V,
                secondary: G,
                detail: J,
                theme: Z,
                focusable: !0,
              }),
            }),
          })),
          (n[44] = q),
          (n[45] = V),
          (n[46] = G),
          (n[47] = Y),
          (n[48] = J),
          (n[49] = Z),
          (n[50] = ee))
        : (ee = n[50]);
      var te;
      return (
        n[51] !== F || n[52] !== X || n[53] !== ee
          ? ((te = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              role: X,
              ref: x,
              handlers: F,
              children: ee,
            })),
            (n[51] = F),
            (n[52] = X),
            (n[53] = ee),
            (n[54] = te))
          : (te = n[54]),
        te
      );
    }
    l.default = h;
  },
  226,
);
