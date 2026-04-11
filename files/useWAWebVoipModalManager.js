__d(
  "useWAWebVoipModalManager",
  [
    "WAWebModalManager",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipUiPopoutWindowContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext;
    function d() {
      var e = o("react-compiler-runtime").c(9),
        t = c(r("WAWebVoipUiPopoutWindowContext")),
        n = t.isDocPip || t.isContextInPopoutWindow,
        a;
      e[0] !== n || e[1] !== t.documentEl
        ? ((a = function (r, a) {
            n && t.documentEl != null
              ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.open(
                  r,
                  a,
                )
              : o("WAWebModalManager").ModalManager.open(r, a);
          }),
          (e[0] = n),
          (e[1] = t.documentEl),
          (e[2] = a))
        : (a = e[2]);
      var i = a,
        l;
      e[3] !== n || e[4] !== t.documentEl
        ? ((l = function () {
            n && t.documentEl != null
              ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager.close()
              : o("WAWebModalManager").ModalManager.close();
          }),
          (e[3] = n),
          (e[4] = t.documentEl),
          (e[5] = l))
        : (l = e[5]);
      var s = l,
        u;
      return (
        e[6] !== s || e[7] !== i
          ? ((u = { openModal: i, closeModal: s }),
            (e[6] = s),
            (e[7] = i),
            (e[8] = u))
          : (u = e[8]),
        u
      );
    }
    l.default = d;
  },
  98,
);
