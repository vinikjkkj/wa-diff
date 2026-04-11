__d(
  "WAWebStartup.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebDebouncedLoadingScreen.react",
    "WAWebSocketModel",
    "WAWebStreamModel",
    "react",
    "useWAWebForceUpdate",
    "useWAWebInterval",
    "useWAWebListener",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = c.useEffect;
    function p(t) {
      "use no forget";
      var n = t.initialLoadState,
        a = t.onReady,
        i = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        l,
        s;
      o("useWAWebListener").useListener(
        o("WAWebStreamModel").Stream,
        "change:displayInfo",
        i,
      );
      var c = r("useWAWebInterval")(i, 1e3),
        p = c[0],
        _ = o("useWAWebTimeout").useTimeout(p, 6e3),
        f = _[0],
        g = o("WAWebStreamModel").Stream.displayInfo;
      m(function () {
        f();
      }, []);
      var h = function () {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Startup: user selected logout",
            ])),
        ),
          o("WAWebSocketModel").Socket.logout());
      };
      switch (g) {
        case o("WAWebStreamModel").StreamInfo.OPENING:
        case o("WAWebStreamModel").StreamInfo.PAIRING:
          ((l = u._(/*BTDS*/ "Connecting to WhatsApp")),
            (s = u._(
              /*BTDS*/ "Make sure your computer has an active internet connection.",
            )));
          break;
        case o("WAWebStreamModel").StreamInfo.SYNCING:
        case o("WAWebStreamModel").StreamInfo.CONNECTING:
          return d.jsx(r("WAWebDebouncedLoadingScreen.react"), {
            initialLoadState: n,
            onReady: a,
            onLogout: h,
          });
        default:
          return o("WAWebStreamModel").Stream.mode ===
            o("WAWebStreamModel").StreamMode.MAIN
            ? d.jsx(r("WAWebDebouncedLoadingScreen.react"), {
                initialLoadState: n,
                onReady: a,
                onLogout: h,
              })
            : null;
      }
      return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        cover: !0,
        title: l,
        cancelText: u._(/*BTDS*/ "Log out"),
        onCancel: h,
        children: [
          d.jsx("hr", { className: "_ari3" }),
          d.jsx("div", { className: "_ari0", children: s }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
