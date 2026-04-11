__d(
  "WAWebBugReportFlowAttachMediaFlow.react",
  ["WAWebBugReportFlowMediaPicker.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.customCloseMediaModal,
        a = e.customOpenMediaModal,
        i = e.mediaPayload,
        l = e.onSend,
        u;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
          ? ((u = s.jsx(r("WAWebBugReportFlowMediaPicker.react"), {
              mediaPayload: i,
              onSend: l,
              customOpenMediaModal: a,
              customCloseMediaModal: n,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
