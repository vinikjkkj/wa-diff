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
      var n = t.children,
        a = t.displayType,
        i = t.hideCaption,
        l = i === void 0 ? !1 : i,
        s = t.hideMeta,
        d = s === void 0 ? !1 : s,
        m = t.msg,
        p = t.quotedMsg,
        _ = t.showAuthor,
        f = _ === void 0 ? !1 : _,
        g = t.trusted,
        h = o("useWAWebMsgValues").useMsgValues(m.id, [
          o("WAWebMsgGetters").getCaption,
          o("WAWebFrontendMsgGetters").getDir,
          o("WAWebMsgGetters").getFooter,
          o("WAWebMsgGetters").getIsFromTemplate,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getSupportsMessageFooter,
          o("WAWebMsgGetters").getType,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = f,
        I = !l && !!y,
        T = o("WAWebMsgSelectors").showForwarded(m);
      return u.jsxs(u.Fragment, {
        children: [
          k
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    c.author,
                    o("WAWebUISpacing").uiPadding.horiz6,
                    o("WAWebUISpacing").uiPadding.bottom5,
                    T && o("WAWebUISpacing").uiPadding.bottom0,
                  ),
                  {
                    children: u.jsx(r("WAWebMessageAuthor.react"), {
                      msg: m,
                      contact: R,
                      displayType: a,
                    }),
                  },
                ),
              )
            : null,
          T
            ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
                msg: m.unsafe(),
                className: (e || (e = r("stylex")))(
                  c.forwardedIndicator,
                  o("WAWebUISpacing").uiPadding.end0,
                  o("WAWebUISpacing").uiPadding.bottom3,
                  o("WAWebUISpacing").uiPadding.start6,
                  k && o("WAWebUISpacing").uiPadding.top0,
                ),
              })
            : null,
          p != null
            ? u.jsx("div", { className: "xidp8sz", children: p })
            : null,
          n,
          I
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
                      msg: m.unsafe(),
                      trusted: g,
                      spacer: !b,
                    }),
                  },
                ),
              )
            : null,
          L
            ? u.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir: C,
                footer: b,
                isShown: L,
                msg: m.unsafe(),
                rtl: S,
                type: E,
                trusted: g,
              })
            : null,
          !d &&
            u.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x10l6tqk x1d37e2g x7308am" },
                  1: { className: "x10l6tqk x1d37e2g xy1j3rs" },
                }[!!I << 0],
                {
                  children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msg: m,
                    displayType: a,
                    theme:
                      a === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY
                        ? "date"
                        : void 0,
                  }),
                },
              ),
            ),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
