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
      var t = e.msg;
      return (
        r("vulture")("r-PX8ADOUipQGfgrTjiBioWAC3g="),
        u.jsx(o("WAWebModal.react").Modal, {
          type: o("WAWebModal.react").ModalTheme.MessageEdit,
          children: u.jsx(r("WAWebDrawer.react"), {
            xstyle: c.drawer,
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-ai-teach-detail",
            },
            children: u.jsxs(r("WAWebDrawerBody.react"), {
              className: "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x2lwn1j xeuugli",
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: c.paddingTop20,
                  children: [
                    u.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: o("WAWebModalManager").closeModalManager,
                      children: u.jsx(
                        o("WAWebMediaCancelIcon.react").MediaCancelIcon,
                        {},
                      ),
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexColumn, {
                      children: [
                        u.jsx(o("WAWebText.react").WAWebTextTitle, {
                          weight: "bold",
                          children: s._(/*BTDS*/ "Teach your AI"),
                        }),
                        u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                          children: s._(
                            /*BTDS*/ "Teach your AI how to respond next time. Past responses won\u2019t change.",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx(o("WAWebMessageEditComposer.react").MessageEditComposer, {
                  msg: t,
                  onInputChange: r("WAWebNoop"),
                  onLinkPreviewChange: r("WAWebNoop"),
                  onConfirm: r("WAWebNoop"),
                  disableConfirmButton: !1,
                }),
              ],
            }),
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
