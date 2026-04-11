__d(
  "WAWebCoexCallingSMBFirstTimeModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.onConfirm,
        r = d,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Continue")), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] !== n
        ? ((l = function () {
            (n(), o("WAWebModalManager").ModalManager.close("none"));
          }),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { onClick: r, text: s._(/*BTDS*/ "Learn more") }), (t[3] = m))
        : (m = t[3]);
      var p = m,
        _,
        f,
        g,
        h;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx("strong", { children: s._(/*BTDS*/ "About this call") })),
          (f = u.jsx("br", {})),
          (g = u.jsx("br", {})),
          (h = s._(
            /*BTDS*/ "Your business uses a secure service from Meta to manage this call.",
          )),
          (t[4] = _),
          (t[5] = f),
          (t[6] = g),
          (t[7] = h))
        : ((_ = t[4]), (f = t[5]), (g = t[6]), (h = t[7]));
      var y;
      return (
        t[8] !== c
          ? ((y = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              onOK: c,
              buttonsDirection: "horizontal",
              okText: i,
              type: o("WAWebModal.react").ModalTheme.Multiline,
              extraButtonProps: p,
              children: [_, f, g, h],
            })),
            (t[8] = c),
            (t[9] = y))
          : (y = t[9]),
        y
      );
    }
    function d() {
      (o("WAWebModalManager").ModalManager.close("none"),
        self.setTimeout(m, 10));
    }
    function m() {
      return o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getFirstTimeSMBCoexCallingLearnMoreUrl(),
      );
    }
    l.default = c;
  },
  226,
);
