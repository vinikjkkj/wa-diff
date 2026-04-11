__d(
  "WAWebAiGroupOpenSecurityDrawerSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebErrorIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        r;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var a = s._(/*BTDS*/ "Security");
        ((r = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, {
          title: a,
        })),
          (t[0] = r));
      } else r = t[0];
      var i = r,
        l;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var c = s._(
          /*BTDS*/ "A group member added Meta AI to this chat. Meta can read new messages.",
        );
        ((l = u.jsx(
          o("WAWebChatInfoDrawerRow.react").DrawerRowSecondaryTitleRefreshed,
          { title: c },
        )),
          (t[1] = l));
      } else l = t[1];
      var d = l,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(o("WAWebErrorIcon.react").ErrorIcon, {})), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      return (
        t[3] !== n
          ? ((_ = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              { icon: p, onClick: n, title: i, secondaryTitle: d },
            )),
            (t[3] = n),
            (t[4] = _))
          : (_ = t[4]),
        _
      );
    }
    l.default = c;
  },
  226,
);
