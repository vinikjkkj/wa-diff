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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(12),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]);
      var n = r("useWAWebEventTargetValue")(
          o("WAWebCmd").Cmd,
          "offline_progress_update_from_bridge",
          m,
          t,
        ),
        a = n[0],
        i = n[1],
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebUISpacing").uiPadding.all0, c.wrapper]), (e[1] = l))
        : (l = e[1]);
      var d;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = "x1280gxy x36qwtl"), (e[2] = d))
        : (d = e[2]);
      var p;
      e[3] !== a
        ? ((p = u.jsx(r("WAWebBox.react"), {
            xstyle: c.progressWrapper,
            children: u.jsx(r("WAWebProgressBar.react"), {
              value: a,
              className: d,
            }),
          })),
          (e[3] = a),
          (e[4] = p))
        : (p = e[4]);
      var _;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: c.textTitle,
            children: s._(/*BTDS*/ "Syncing chats..."),
          })),
          (e[5] = _))
        : (_ = e[5]);
      var f;
      e[6] !== i || e[7] !== a
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: c.textWrapper,
            children: [
              _,
              u.jsx(o("WAWebText.react").WAWebTextSmall, {
                xstyle: c.textProgress,
                children: s._(
                  /*BTDS*/ '_j{"*":{"*":{"*":"{processed-messages} of {total-messages} messages","_1":"{processed-messages} of {total-messages} message"}}}',
                  [
                    s._param(
                      "processed-messages",
                      Math.floor((a / 100) * i),
                      [0],
                    ),
                    s._param("total-messages", i, [0]),
                    s._plural(i),
                  ],
                ),
              }),
            ],
          })),
          (e[6] = i),
          (e[7] = a),
          (e[8] = f))
        : (f = e[8]);
      var g;
      return (
        e[9] !== p || e[10] !== f
          ? ((g = u.jsxs(r("WAWebToastbar.react"), {
              wrapperXstyle: l,
              children: [p, f],
            })),
            (e[9] = p),
            (e[10] = f),
            (e[11] = g))
          : (g = e[11]),
        g
      );
    }
    function m() {
      return [
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.getOfflineDeliveryProgress(),
        o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineMessageCount(),
      ];
    }
    l.default = d;
  },
  226,
);
