__d(
  "WAWebExpandableText.react",
  [
    "fbt",
    "WAUnicodeUtils",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebExpandableTextContext",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.memo,
      m = c.useContext,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = c.useState,
      g = "read-more-button",
      h = 3072,
      y = 0.1;
    function C(e) {
      var t = e.children,
        n = e.ref,
        a = e.text,
        i = e.textLimit,
        l = _(a),
        c = f(function () {
          return b({ pageSize: i, text: a, textLimit: i }) ? i : 1 / 0;
        }),
        d = c[0],
        y = c[1],
        C = m(r("WAWebExpandableTextContext")),
        v = f(!1),
        S = v[0],
        R = v[1];
      (p(n, function () {
        return { isExpanded: S };
      }),
        l.current !== a &&
          ((l.current = a),
          y(b({ pageSize: i, text: a, textLimit: i }) ? i : 1 / 0),
          R(!1)));
      var L = function () {
        (C(), R(!0));
        var e = d + h;
        y(b({ pageSize: h, text: a, textLimit: e }) ? e : 1 / 0);
      };
      return u.jsxs(u.Fragment, {
        children: [
          t({ textLimit: d }),
          d !== 1 / 0
            ? u.jsxs(u.Fragment, {
                children: [
                  " ",
                  u.jsx(o("WAWebClickable.react").Clickable, {
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease(
                      "xuxw1ft x1ypdohk x1rg5ohu xo1mcw5 x1xlr1w8 x1hl2dhg xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt",
                      g,
                    ),
                    dataTestId: "caption-read-more-button",
                    preventDefaultKeyboard: !0,
                    onClick: L,
                    children: s._(/*BTDS*/ "Read more"),
                  }),
                ],
              })
            : null,
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.pageSize,
        n = e.text,
        r = e.textLimit;
      return o("WAUnicodeUtils").numCodepoints(n) - r > t * y;
    }
    var v = d(C);
    l.ExpandableText = v;
  },
  226,
);
