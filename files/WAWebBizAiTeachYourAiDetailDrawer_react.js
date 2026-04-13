__d(
  "WAWebBizAiTeachYourAiDetailDrawer.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFlex.react",
    "WAWebMediaCancelIcon.react",
    "WAWebMessageEditComposer.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        drawer: { position: "x1n2onr6", $$css: !0 },
        paddingTop20: { paddingTop: "x1h678fw", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msg;
      r("vulture")("r-PX8ADOUipQGfgrTjiBioWAC3g=");
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { surface: "unknown", viewName: "biz-ai-teach-detail" }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli"), (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: o("WAWebModalManager").closeModalManager,
            children: u.jsx(
              o("WAWebMediaCancelIcon.react").MediaCancelIcon,
              {},
            ),
          })),
          (t[2] = l))
        : (l = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            weight: "bold",
            children: s._(/*BTDS*/ "Teach your AI"),
          })),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.paddingTop20,
            children: [
              l,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                children: [
                  d,
                  u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                    children: s._(
                      /*BTDS*/ "Teach your AI how to respond next time. Past responses won\u2019t change.",
                    ),
                  }),
                ],
              }),
            ],
          })),
          (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== n
          ? ((p = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.MessageEdit,
              children: u.jsx(r("WAWebDrawer.react"), {
                xstyle: c.drawer,
                tsNavigationData: a,
                children: u.jsxs(r("WAWebDrawerBody.react"), {
                  className: i,
                  children: [
                    m,
                    u.jsx(
                      o("WAWebMessageEditComposer.react").MessageEditComposer,
                      {
                        msg: n,
                        onInputChange: r("WAWebNoop"),
                        onLinkPreviewChange: r("WAWebNoop"),
                        onConfirm: r("WAWebNoop"),
                        disableConfirmButton: !1,
                      },
                    ),
                  ],
                }),
              }),
            })),
            (t[5] = n),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    l.default = d;
  },
  226,
);
