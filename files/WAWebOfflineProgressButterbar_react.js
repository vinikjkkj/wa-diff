__d(
  "WAWebOfflineProgressButterbar.react",
  [
    "fbt",
    "WAShiftTimer",
    "WAWebBanner.react",
    "WAWebCmd",
    "WAWebOfflineHandler",
    "WAWebOfflineMessageLoadIcon.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = 120 * 1e3;
    function m() {
      var e = c(0),
        t = e[0],
        n = e[1],
        r = c(!1),
        a = r[0],
        i = r[1];
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "offline_progress_update_from_bridge",
        function () {
          n(
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.getOfflineDeliveryProgress(),
          );
        },
      ),
        new (o("WAShiftTimer").ShiftTimer)(function () {
          i(!0);
        }).onOrAfter(d));
      var l = s._(/*BTDS*/ '_j{"*":"Loading messages ({percentage}\\u0025)"}', [
          s._param("percentage", t, [0]),
        ]),
        m = a
          ? s._(
              /*BTDS*/ "Messages are still loading. You can continue to wait, or log out and relink with your phone.",
            )
          : "";
      return u.jsx(o("WAWebBanner.react").WAWebBanner, {
        title: l,
        text: m,
        type: "default",
        icon: {
          icon: o("WAWebOfflineMessageLoadIcon.react").OfflineMessageLoadIcon,
        },
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
