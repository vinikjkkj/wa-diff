__d(
  "WAWebUnexpectedFatalErrorModal.react",
  [
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebCurrentUser",
    "WAWebFbtCommon",
    "WAWebSocketModel",
    "WAWebStopEvent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.bugReportDescription,
        n = e.children,
        a = e.reason;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        onOverlayClick: o("WAWebStopEvent").preventDefault,
        onOK: function () {
          o("WAWebSocketModel").Socket.logout(a);
        },
        okText: r("WAWebFbtCommon")("OK"),
        okButtonType: o("WAWebCurrentUser").isEmployee()
          ? "secondary"
          : "primary",
        buttonsDirection: "horizontal",
        extraButtonProps: o("WAWebCurrentUser").isEmployee()
          ? {
              text: "Report a bug (internal)",
              onClick: function () {
                o("WAWebCmd").Cmd.trigger(
                  "trigger_bugreport_v2",
                  t,
                  a == null ? "Unintended Logout" : "Unintended Logout: " + a,
                );
              },
              type: "primary",
            }
          : null,
        children: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
