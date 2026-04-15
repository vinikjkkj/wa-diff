__d(
  "WAWebGlobalChatThemeDrawer.react",
  ["WAWebChatThemeDrawer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onClose,
        a = e.ref,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(r("WAWebChatThemeDrawer.react"), {
              chat: null,
              onClose: n,
              ref: a,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
