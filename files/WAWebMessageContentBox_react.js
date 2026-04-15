__d(
  "WAWebMessageContentBox.react",
  [
    "WAWebBizTemplateMessageFooter.react",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WAWebMsgSelectors",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        author: { paddingTop: "x1u9i22x", $$css: !0 },
        caption: { boxSizing: "x9f619", maxWidth: "x1d8l2j3", $$css: !0 },
        forwardedIndicator: { paddingTop: "x1u9i22x", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(39),
        a = t.children,
        i = t.displayType,
        l = t.hideCaption,
        s = t.hideMeta,
        d = t.msg,
        m = t.quotedMsg,
        p = t.showAuthor,
        _ = t.trusted,
        f = l === void 0 ? !1 : l,
        g = s === void 0 ? !1 : s,
        h = p === void 0 ? !1 : p,
        y;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var C;
        ((y = [
          (C = o("WAWebMsgGetters")).getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          C.getFooter,
          C.getIsFromTemplate,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          C.getSupportsMessageFooter,
          C.getType,
        ]),
          (n[0] = y));
      } else y = n[0];
      var b = o("useWAWebMsgValues").useMsgValues(d.id, y),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[4],
        E = b[5],
        k = b[6],
        I = b[7],
        T = h,
        D = !f && !!v,
        x,
        $;
      n[1] !== i || n[2] !== T || n[3] !== d || n[4] !== E
        ? ((x = o("WAWebMsgSelectors").showForwarded(d)),
          ($ = T
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.author,
                    o("WAWebUISpacing").uiPadding.horiz6,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    x && o("WAWebUISpacing").uiPadding.bottom0,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageAuthor.react"), {
                      msg: d,
                      contact: E,
                      displayType: i,
                    }),
                  },
                ),
              )
            : null),
          (n[1] = i),
          (n[2] = T),
          (n[3] = d),
          (n[4] = E),
          (n[5] = x),
          (n[6] = $))
        : ((x = n[5]), ($ = n[6]));
      var P;
      n[7] !== T || n[8] !== x || n[9] !== d
        ? ((P = x
            ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: d.unsafe(),
                className: (e || (e = r("stylex")))(
                  c.forwardedIndicator,
                  o("WAWebUISpacing").uiPadding.end0,
                  o("WAWebUISpacing").uiPadding.bottom3,
                  o("WAWebUISpacing").uiPadding.start6,
                  T && o("WAWebUISpacing").uiPadding.top0,
                ),
              })
            : null),
          (n[7] = T),
          (n[8] = x),
          (n[9] = d),
          (n[10] = P))
        : (P = n[10]);
      var N;
      n[11] !== m
        ? ((N =
            m != null
              ? u.jsx("div", { className: "xidp8sz", children: m })
              : null),
          (n[11] = m),
          (n[12] = N))
        : (N = n[12]);
      var M;
      n[13] !== R || n[14] !== D || n[15] !== d || n[16] !== _
        ? ((M = D
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.caption,
                    o("WAWebUISpacing").uiPadding.top7,
                    o("WAWebUISpacing").uiPadding.end4,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    o("WAWebUISpacing").uiPadding.start6,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageCaption.react"), {
                      msg: d.unsafe(),
                      trusted: _,
                      spacer: !R,
                    }),
                  },
                ),
              )
            : null),
          (n[13] = R),
          (n[14] = D),
          (n[15] = d),
          (n[16] = _),
          (n[17] = M))
        : (M = n[17]);
      var w;
      n[18] !== S ||
      n[19] !== R ||
      n[20] !== d ||
      n[21] !== L ||
      n[22] !== k ||
      n[23] !== _ ||
      n[24] !== I
        ? ((w = k
            ? u.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: S,
                footer: R,
                isShown: k,
                msg: d.unsafe(),
                rtl: L,
                type: I,
                trusted: _,
              })
            : null),
          (n[18] = S),
          (n[19] = R),
          (n[20] = d),
          (n[21] = L),
          (n[22] = k),
          (n[23] = _),
          (n[24] = I),
          (n[25] = w))
        : (w = n[25]);
      var A;
      n[26] !== i || n[27] !== D || n[28] !== g || n[29] !== d
        ? ((A =
            !g &&
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x10l6tqk x1d37e2g x7308am" },
                  1: { className: "x10l6tqk x1d37e2g xy1j3rs" },
                }[!!D << 0],
                {
                  children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msg: d,
                    displayType: i,
                    theme:
                      i === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY
                        ? "date"
                        : void 0,
                  }),
                },
              ),
            )),
          (n[26] = i),
          (n[27] = D),
          (n[28] = g),
          (n[29] = d),
          (n[30] = A))
        : (A = n[30]);
      var F;
      return (
        n[31] !== a ||
        n[32] !== A ||
        n[33] !== $ ||
        n[34] !== P ||
        n[35] !== N ||
        n[36] !== M ||
        n[37] !== w
          ? ((F = u.jsxs(u.Fragment, { children: [$, P, N, a, M, w, A] })),
            (n[31] = a),
            (n[32] = A),
            (n[33] = $),
            (n[34] = P),
            (n[35] = N),
            (n[36] = M),
            (n[37] = w),
            (n[38] = F))
          : (F = n[38]),
        F
      );
    }
    l.default = d;
  },
  98,
);
