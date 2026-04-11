__d(
  "WAWebBizAiMuteUnmuteErrorDrawer.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "biz-ai-mute-error",
              },
              title: s._(
                /*BTDS*/ "AI responses are not available for this chat.",
              ),
              okText: s._(/*BTDS*/ "OK"),
              onOK: o("WAWebModalManager").closeModalManager,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = c;
  },
  226,
);
