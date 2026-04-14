__d(
  "WAWebStatusViewerCell.react",
  [
    "WAWebChatGroupMsgInfoCell.react",
    "WAWebStatusViewerInfoCellImage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.viewerData,
        n = t.participant,
        o = t.reactionText,
        a = s.jsx(r("WAWebStatusViewerInfoCellImage.react"), {
          contact: n.contact,
          reactionText: o,
        });
      return s.jsx(r("WAWebChatGroupMsgInfoCell.react"), {
        msgInfoParticipant: n,
        contact: n.contact,
        image: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
