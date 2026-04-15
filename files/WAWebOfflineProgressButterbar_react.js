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
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = 120 * 1e3;
    function m() {
      var e = o("react-compiler-runtime").c(9),
        t = c(0),
        n = t[0],
        r = t[1],
        a = c(!1),
        i = a[0],
        l = a[1],
        m;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function () {
            r(
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.getOfflineDeliveryProgress(),
            );
          }),
          (e[0] = m))
        : (m = e[0]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "offline_progress_update_from_bridge",
          m,
        ),
        new (o("WAShiftTimer").ShiftTimer)(function () {
          l(!0);
        }).onOrAfter(d));
      var p;
      e[1] !== n
        ? ((p = s._(
            /*BTDS*/ '_j{"*":"Loading messages ({percentage}\\u0025)"}',
            [s._param("percentage", n, [0])],
          )),
          (e[1] = n),
          (e[2] = p))
        : (p = e[2]);
      var _ = p,
        f;
      e[3] !== i
        ? ((f = i
            ? s._(
                /*BTDS*/ "Messages are still loading. You can continue to wait, or log out and relink with your phone.",
              )
            : ""),
          (e[3] = i),
          (e[4] = f))
        : (f = e[4]);
      var g = f,
        h;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            icon: o("WAWebOfflineMessageLoadIcon.react").OfflineMessageLoadIcon,
          }),
          (e[5] = h))
        : (h = e[5]);
      var y;
      return (
        e[6] !== g || e[7] !== _
          ? ((y = u.jsx(o("WAWebBanner.react").WAWebBanner, {
              title: _,
              text: g,
              type: "default",
              icon: h,
            })),
            (e[6] = g),
            (e[7] = _),
            (e[8] = y))
          : (y = e[8]),
        y
      );
    }
    l.default = m;
  },
  226,
);
