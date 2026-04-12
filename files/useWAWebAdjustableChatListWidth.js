__d(
  "useWAWebAdjustableChatListWidth",
  [
    "WAWebChatlistResizeHandle.react",
    "WAWebEnvironment",
    "WAWebLocalStorage",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = e.isEnabled,
        n = e.onResizeEnd,
        o = e.onResizeReset;
      return t
        ? s.jsx(r("WAWebChatlistResizeHandle.react"), {
            onResizeReset: o,
            onResizeEnd: n,
            minWidth: 265,
            maxWidth: Math.max(256, window.innerWidth * 0.5),
          })
        : null;
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      var e = r("WAWebEnvironment").isWindows,
        t = e,
        n = u(function () {
          var e =
            r("WAWebLocalStorage") == null
              ? void 0
              : r("WAWebLocalStorage").getItem("chatlist_custom_width");
          return e == null || !t ? null : e;
        }),
        o = n[0],
        a = n[1],
        i =
          o == null
            ? {}
            : { flex: "0 0 " + o, width: "" + o, maxWidth: "" + o },
        l =
          o == null ? {} : { borderLeft: "1px solid var(--WDS-lines-divider)" },
        d = function (t) {
          var e = window.innerWidth,
            n = ((t / e) * 100).toFixed(2) + "%";
          (a(n),
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem("chatlist_custom_width", n));
        },
        m = function () {
          (a(null),
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").removeItem("chatlist_custom_width"));
        };
      return {
        leftDrawerStyle: i,
        rightDrawerStyle: l,
        resizeHandle: s.jsx(c, {
          onResizeReset: m,
          isEnabled: t,
          onResizeEnd: d,
        }),
      };
    }
    l.useAdjustableChatListWidth = d;
  },
  98,
);
