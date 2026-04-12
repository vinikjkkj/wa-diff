__d(
  "WAWebStatusQuotedFlow.react",
  ["WAWebStatusViewer.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msgKey,
        n = e.onClose,
        o = e.onMsgNotFound,
        a = e.rowIndex,
        i = e.rowSection,
        l = e.status;
      return s.jsx(r("WAWebStatusViewer.react"), {
        initialStatus: l,
        quotedMsgKey: t,
        closeStatusViewer: n,
        onMsgNotFound: o,
        rowSection: i,
        rowIdx: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
