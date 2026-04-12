__d(
  "useWAWebStaticButtonA11y",
  ["WAWebKeyboardIsKeyActivation", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef;
    function u(e) {}
    function c(e, t) {
      var n,
        o,
        a = s(),
        i = function (t) {
          a.current = t;
        },
        l = function (t) {
          if (r("WAWebKeyboardIsKeyActivation")(t)) {
            var e;
            (t.stopPropagation(),
              t.preventDefault(),
              (e = a.current) == null || e.click());
          }
        },
        c = (t == null ? void 0 : t.disabled) === !0,
        d = c ? u : e;
      return [
        i,
        {
          "aria-disabled":
            (n = t == null ? void 0 : t.disabled) != null ? n : void 0,
          onClick: d,
          onKeyPress: l,
          role: "button",
          tabIndex: c
            ? -1
            : (o = t == null ? void 0 : t.tabIndex) != null
              ? o
              : 0,
        },
      ];
    }
    l.default = c;
  },
  98,
);
