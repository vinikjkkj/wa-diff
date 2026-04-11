__d(
  "WAWebMessageDebugPlaceholder.react",
  [
    "fbt",
    "WAWebAlertErrorIcon.react",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebStateUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = o("WAWebStateUtils").unproxy(n)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
            width: 20,
            height: 20,
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] !== n ? ((l = n.unsafe()), (t[3] = n), (t[4] = l)) : (l = t[4]);
      var c;
      t[5] !== n.body
        ? ((c = s._(
            /*BTDS*/ "This message was dropped due to error ({errorCode}). Please report the problem by selecting 'Report Issue' from the context menu of the message if you are in dev env. Or report the bug via Settings -> Report a bug if using a production app.",
            [s._param("errorCode", n.body)],
          )),
          (t[5] = n.body),
          (t[6] = c))
        : (c = t[6]);
      var d;
      t[7] !== l || t[8] !== c
        ? ((d = u.jsx(r("WAWebMessagePlaceholder.react"), {
            Icon: i,
            msg: l,
            children: c,
          })),
          (t[7] = l),
          (t[8] = c),
          (t[9] = d))
        : (d = t[9]);
      var m;
      return (
        t[10] !== a || t[11] !== d
          ? ((m = u.jsx(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: !0,
              children: d,
            })),
            (t[10] = a),
            (t[11] = d),
            (t[12] = m))
          : (m = t[12]),
        m
      );
    }
    l.default = c;
  },
  226,
);
