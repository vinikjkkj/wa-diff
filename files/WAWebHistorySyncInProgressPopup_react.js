__d(
  "WAWebHistorySyncInProgressPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProgressBar.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "x1gnekcx-B",
      d = {
        body: {
          fontWeight: "xo1l8bm",
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x19q65qo",
          $$css: !0,
        },
      };
    function m() {
      var e = o("react-compiler-runtime").c(9),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [o("WAWebHistorySyncProgressGetters").getProgress]), (e[0] = t))
        : (t = e[0]);
      var n = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues(t),
        r = n[0],
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { surface: "unknown", viewName: "history-sync-in-progress" }),
          (e[1] = a))
        : (a = e[1]);
      var i, l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o(
            "WAWebHistorySyncUIText",
          ).SYNCING_OLDER_MESSAGES_MODAL_TITLE()),
          (l = s._(/*BTDS*/ "Learn more")),
          (e[2] = i),
          (e[3] = l))
        : ((i = e[2]), (l = e[3]));
      var c;
      e[4] !== r
        ? ((c = u.jsx(p, { progress: r })), (e[4] = r), (e[5] = c))
        : (c = e[5]);
      var m;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: d.body,
            children: o(
              "WAWebHistorySyncUIText",
            ).SYNCING_OLDER_MESSAGES_MODAL_TEXT(),
          })),
          (e[6] = m))
        : (m = e[6]);
      var _;
      return (
        e[7] !== c
          ? ((_ = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: a,
              type: o("WAWebModal.react").ModalTheme.HistorySyncProgress,
              title: i,
              cancelText: l,
              onOK: o("WAWebModalManager").closeModalManager,
              onCancel: f,
              children: [c, m],
            })),
            (e[7] = c),
            (e[8] = _))
          : (_ = e[8]),
        _
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.progress,
        a = n,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "xz9dl7a xod5an3 x78zum5 xdt5ytf" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = u.jsx(
            "div",
            babelHelpers.extends({}, i, {
              children:
                a == null
                  ? u.jsx(_, {})
                  : u.jsx(r("WAWebProgressBar.react"), { value: a, max: 100 }),
            }),
          )),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = "x1kpxq89 xieb3on"), (t[3] = s))
        : (s = t[3]);
      var c;
      t[4] !== a
        ? ((c =
            a == null
              ? ""
              : o(
                  "WAWebHistorySyncUIText",
                ).SYNCING_OLDER_MESSAGES_MODAL_PERCENT(a)),
          (t[4] = a),
          (t[5] = c))
        : (c = t[5]);
      var d;
      t[6] !== c
        ? ((d = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            color: "dark",
            size: "12",
            className: s,
            children: c,
          })),
          (t[6] = c),
          (t[7] = d))
        : (d = t[7]);
      var m;
      return (
        t[8] !== l || t[9] !== d
          ? ((m = u.jsxs(u.Fragment, { children: [l, d] })),
            (t[8] = l),
            (t[9] = d),
            (t[10] = m))
          : (m = t[10]),
        m
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx("div", {
              className: "x1izncso x7t6ubo xa4qsjk xc0ps8e xgbwgrv xuoj239",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f() {
      window.open(o("WAWebFaqUrl").getMessageHistoryOnLinkedDevicesFAQUrl());
    }
    l.default = m;
  },
  226,
);
