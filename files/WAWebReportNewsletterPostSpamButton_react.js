__d(
  "WAWebReportNewsletterPostSpamButton.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebReportNewsletterPostPopup.react",
    "WAWebSpamConstants",
    "WDSIconIcThumbDown.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.msg,
        a;
      t[0] !== n
        ? ((a = o("WAWebFrontendMsgGetters").getChat(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i || t[3] !== n
        ? ((l = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportNewsletterPostPopup.react"), {
                chat: i,
                msg: n,
                spamFlow: o("WAWebSpamConstants").SpamFlow.MediaViewer,
              }),
            );
          }),
          (t[2] = i),
          (t[3] = n),
          (t[4] = l))
        : (l = t[4]);
      var c = l,
        d,
        m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(r("WDSIconIcThumbDown.react"), {})),
          (m = s._(/*BTDS*/ "Report")),
          (t[5] = d),
          (t[6] = m))
        : ((d = t[5]), (m = t[6]));
      var p;
      return (
        t[7] !== c
          ? ((p = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
              action: c,
              icon: d,
              children: m,
            })),
            (t[7] = c),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  226,
);
