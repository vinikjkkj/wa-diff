__d(
  "WAWebAccessibility.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        r;
      return (
        t[0] !== n
          ? ((r = s.jsx("span", { "aria-label": n })), (t[0] = n), (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function p(e) {
      var t = e.assertive,
        n = t === void 0 ? !1 : t,
        r = e.startWithText,
        o = r === void 0 ? !1 : r,
        a = e.text,
        i = d(o ? a : ""),
        l = i[0],
        u = i[1];
      return (
        c(
          function () {
            window.setTimeout(function () {
              u(a);
            }, 10);
          },
          [a],
        ),
        s.jsx("span", {
          "aria-live": n ? "assertive" : "polite",
          "aria-atomic": "true",
          className:
            "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
          children: l,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = function (t) {
      var e = t.disabled,
        n = t.onClick,
        r = function (t) {
          return n == null ? void 0 : n(t);
        },
        o = function (n) {
          e !== !0 && r(n);
        },
        a = function (t) {
          var e =
            t.key === "Enter" ||
            t.key === " " ||
            t.key === "Spacebar" ||
            t.which === 13 ||
            t.which === 32;
          e && (t.preventDefault(), r(t));
        };
      return {
        onClick: o,
        onKeyPress: a,
        disabled: e,
        tabIndex: e === !0 ? -1 : 0,
        role: "button",
      };
    };
    ((l.InvisibleLabel = m),
      (l.InvisibleAnnouncement = p),
      (l.accessibleClickableButtonProps = _));
  },
  98,
);
