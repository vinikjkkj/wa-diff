__d(
  "WAWebBugReportFlowAttachMediaFlow.react",
  ["WAWebBugReportFlowMediaPicker.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.customCloseMediaModal,
        n = e.customOpenMediaModal,
        o = e.mediaPayload,
        a = e.onSend;
      return s.jsx(r("WAWebBugReportFlowMediaPicker.react"), {
        mediaPayload: o,
        onSend: a,
        customOpenMediaModal: n,
        customCloseMediaModal: t,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
