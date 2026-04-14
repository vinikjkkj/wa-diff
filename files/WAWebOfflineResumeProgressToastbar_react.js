__d(
  "WAWebOfflineResumeProgressToastbar.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebCmd",
    "WAWebFlex.react",
    "WAWebOfflineHandler",
    "WAWebProgressBar.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUISpacing",
    "react",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        wrapper: {
          minHeight: "x122xwht",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        progressWrapper: {
          position: "x10l6tqk",
          width: "xh8yej3",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          display: "x78zum5",
          $$css: !0,
        },
        textWrapper: { textAlign: "x2b8uid", $$css: !0 },
        textTitle: { fontSize: "x1pg5gke", $$css: !0 },
        textProgress: { fontSize: "x1ncwhqj", $$css: !0 },
      };
    function d() {
      var e = r("useWAWebEventTargetValue")(
          o("WAWebCmd").Cmd,
          "offline_progress_update_from_bridge",
          function () {
            return [
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getOfflineDeliveryProgress(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getOfflineMessageCount(),
            ];
          },
          [],
        ),
        t = e[0],
        n = e[1];
      return u.jsxs(r("WAWebToastbar.react"), {
        wrapperXstyle: [o("WAWebUISpacing").uiPadding.all0, c.wrapper],
        children: [
          u.jsx(r("WAWebBox.react"), {
            xstyle: c.progressWrapper,
            children: u.jsx(r("WAWebProgressBar.react"), {
              value: t,
              className: "x1280gxy x36qwtl",
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: c.textWrapper,
            children: [
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: c.textTitle,
                children: s._(/*BTDS*/ "Syncing chats..."),
              }),
              u.jsx(o("WAWebText.react").WAWebTextSmall, {
                xstyle: c.textProgress,
                children: s._(
                  /*BTDS*/ '_j{"*":{"*":{"*":"{processed-messages} of {total-messages} messages","_1":"{processed-messages} of {total-messages} message"}}}',
                  [
                    s._param(
                      "processed-messages",
                      Math.floor((t / 100) * n),
                      [0],
                    ),
                    s._param("total-messages", n, [0]),
                    s._plural(n),
                  ],
                ),
              }),
            ],
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
