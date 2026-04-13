__d(
  "WAWebMessageContainer.react",
  [
    "cx",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebWrapperConstants",
    "WAWebWrapperGetTailIcon",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        r = e.isSentByMe,
        a = !r,
        i;
      if (t[0] !== r || t[1] !== a) {
        var l;
        ((i = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((l = { "message-out": r, "message-in": a }), (l._aml0 = !0), l),
        )),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i));
      } else i = t[2];
      var s = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_amk4",
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_highlight_me_mention",
            ) && "_avau",
            "_amk5",
            "tail-override-left",
          )),
          (t[3] = c))
        : (c = t[3]);
      var d = c,
        m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebWrapperGetTailIcon").getTailIcon(
            o("WAWebWrapperConstants").MSG_DIRECTION.IN,
          )),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx("div", {
            className: "_amk7",
            "aria-hidden": "true",
            children: u.jsx(p, {}),
          })),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== n
        ? ((f = u.jsx("div", {
            className: d,
            children: u.jsxs("div", { className: "_amk6", children: [_, n] }),
          })),
          (t[6] = n),
          (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== f || t[9] !== s
          ? ((g = u.jsx("div", { className: s, children: f })),
            (t[8] = f),
            (t[9] = s),
            (t[10] = g))
          : (g = t[10]),
        g
      );
    }
    l.default = c;
  },
  98,
);
