__d(
  "WAWebSuspendedGroupMediaDownloadFailureModal.react",
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
      var e = o("react-compiler-runtime").c(2),
        t = d,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            surface: "unknown",
            viewName: "suspended-group-download-failure",
          }),
          (e[0] = n))
        : (n = e[0]);
      var r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: n,
              onOK: t,
              title: s._(/*BTDS*/ "Download failed"),
              children: s._(/*BTDS*/ "Media no longer available"),
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function d() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
