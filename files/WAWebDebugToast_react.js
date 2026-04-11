__d(
  "WAWebDebugToast.react",
  ["WAWebToast.react", "WAWebToastManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      (e === void 0 && (e = "Something you just did actually happened"),
        o("WAWebToastManager").ToastManager.open(
          s.jsx(o("WAWebToast.react").Toast, {
            msg: e,
            duration: t,
            action: [
              { actionText: "Action", dismiss: !0 },
              { actionText: "Dismiss", dismiss: !0 },
            ],
          }),
        ));
    }
    u.doc = "Render a basic toast";
    var c = { renderToast: u };
    l.default = c;
  },
  98,
);
