__d(
  "useWAWebVoipModalManager",
  [
    "WAWebModalManager",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d() {
      var e = c(r("WAWebVoipUiPopoutWindowContext")),
        t = e.isDocPip || e.isContextInPopoutWindow,
        n = u(
          function (n, r) {
            t && e.documentEl != null
              ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.open(
                  n,
                  r,
                )
              : o("WAWebModalManager").ModalManager.open(n, r);
          },
          [t, e.documentEl],
        ),
        a = u(
          function () {
            t && e.documentEl != null
              ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close()
              : o("WAWebModalManager").ModalManager.close();
          },
          [t, e.documentEl],
        );
      return { openModal: n, closeModal: a };
    }
    l.default = d;
  },
  98,
);
