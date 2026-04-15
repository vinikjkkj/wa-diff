__d(
  "WAWebStatusQuotedFlow.react",
  ["WAWebStatusViewer.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.msgKey,
        a = e.onClose,
        i = e.onMsgNotFound,
        l = e.rowIndex,
        u = e.rowSection,
        c = e.status,
        d;
      return (
        t[0] !== n ||
        t[1] !== a ||
        t[2] !== i ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== c
          ? ((d = s.jsx(r("WAWebStatusViewer.react"), {
              initialStatus: c,
              quotedMsgKey: n,
              closeStatusViewer: a,
              onMsgNotFound: i,
              rowSection: u,
              rowIdx: l,
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = u),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = u;
  },
  98,
);
