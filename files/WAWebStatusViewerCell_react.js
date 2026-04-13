__d(
  "WAWebStatusViewerCell.react",
  [
    "WAWebChatGroupMsgInfoCell.react",
    "WAWebStatusViewerInfoCellImage.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.viewerData,
        a = n.participant,
        i = n.reactionText,
        l;
      t[0] !== a.contact || t[1] !== i
        ? ((l = s.jsx(r("WAWebStatusViewerInfoCellImage.react"), {
            contact: a.contact,
            reactionText: i,
          })),
          (t[0] = a.contact),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      return (
        t[3] !== a || t[4] !== u
          ? ((c = s.jsx(r("WAWebChatGroupMsgInfoCell.react"), {
              msgInfoParticipant: a,
              contact: a.contact,
              image: u,
            })),
            (t[3] = a),
            (t[4] = u),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = u;
  },
  98,
);
