__d(
  "WAWebOpenBotGroupOpenAddedModal.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        headerText: { textAlign: "x2b8uid", $$css: !0 },
        sectionTitle: { width: "xdzyupr", lineHeight: "x1o2sk6j", $$css: !0 },
      };
    function m() {
      var t = o("react-compiler-runtime").c(15),
        n = p,
        a = r("useWAWebFocusOnMount")(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "A group member added Meta AI to this chat")),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Learn more")), (t[1] = u))
        : (u = t[1]);
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Close")), (t[2] = m))
        : (m = t[2]);
      var _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [
            o("WAWebUISpacing").uiMargin.vertAuto,
            o("WAWebUISpacing").uiPadding.bottom16,
          ]),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = c.jsx(r("WAWebBox.react"), {
            xstyle: [
              d.headerText,
              o("WAWebUISpacing").uiMargin.horiz8,
              o("WAWebUISpacing").uiMargin.top16,
              o("WAWebUISpacing").uiMargin.bottom8,
            ],
            children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "bold",
              children: l,
            }),
          })),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiMargin.horiz8,
            o("WAWebUISpacing").uiMargin.vert16,
          )),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [o("WAWebUISpacing").uiPadding.horiz8, d.sectionTitle]),
          (t[6] = h))
        : (h = t[6]);
      var y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "Meta AI is a member"),
          })),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsx(o("WAWebFlex.react").FlexRow, {
            className: g,
            children: c.jsxs(o("WAWebFlex.react").FlexItem, {
              xstyle: h,
              children: [
                y,
                c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: s._(
                    /*BTDS*/ "Meta AI can read and respond to new messages in this chat, and Meta can access these messages.",
                  ),
                }),
              ],
            }),
          })),
          (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e || (e = r("stylex")))(
            o("WAWebUISpacing").uiMargin.horiz8,
            o("WAWebUISpacing").uiMargin.vert16,
          )),
          (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [o("WAWebUISpacing").uiPadding.horiz8, d.sectionTitle]),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = c.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "Group admins are in control"),
          })),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: _,
            children: [
              f,
              C,
              c.jsx(o("WAWebFlex.react").FlexRow, {
                className: b,
                children: c.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: v,
                  children: [
                    S,
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: s._(
                        /*BTDS*/ "Admins can remove Meta AI from the group at any time.",
                      ),
                    }),
                  ],
                }),
              }),
            ],
          })),
          (t[12] = R))
        : (R = t[12]);
      var L;
      return (
        t[13] !== a
          ? ((L = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              okText: u,
              onOK: n,
              cancelText: m,
              onCancel: o("WAWebModalManager").closeModalManager,
              type: o("WAWebModal.react").ModalTheme.Promote,
              ref: a,
              children: R,
            })),
            (t[13] = a),
            (t[14] = L))
          : (L = t[14]),
        L
      );
    }
    function p() {
      (o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getOpenGroupLearnMoreUrl(),
      ),
        o("WAWebModalManager").ModalManager.close());
    }
    l.default = m;
  },
  226,
);
