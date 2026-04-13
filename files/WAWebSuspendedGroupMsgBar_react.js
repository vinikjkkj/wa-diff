__d(
  "WAWebSuspendedGroupMsgBar.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebMsgBarActions",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.entityId,
        r;
      t[0] !== n
        ? ((r = function () {
            return o("WAWebMsgBarActions").handleContactUs(n);
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1ph7ams" }), (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "WhatsApp Support")), (t[3] = i))
        : (i = t[3]);
      var l;
      t[4] !== r
        ? ((l = u.jsx(
            "span",
            babelHelpers.extends({ role: "button", onClick: r }, a, {
              "data-testid": void 0,
              children: i,
            }),
          )),
          (t[4] = r),
          (t[5] = l))
        : (l = t[5]);
      var c = l,
        d;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "x126k92a" }), (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== c
          ? ((m = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: u.jsx(
                "span",
                babelHelpers.extends({}, d, {
                  children: s._(
                    /*BTDS*/ "This group is no longer available. Please contact {support} for help.",
                    [s._param("support", c)],
                  ),
                }),
              ),
            })),
            (t[7] = c),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    l.default = c;
  },
  226,
);
