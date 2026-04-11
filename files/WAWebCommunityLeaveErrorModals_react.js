__d(
  "WAWebCommunityLeaveErrorModals.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "16",
                children: s._(
                  /*BTDS*/ "Something went wrong. Please try again later.",
                ),
              }),
            })),
            (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onOK,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Retry")), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            size: "16",
            children: s._(
              /*BTDS*/ "There was a problem leaving all groups in this community. Please try again.",
            ),
          })),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: n,
              okText: r,
              onCancel: o("WAWebModalManager").closeModalManager,
              children: a,
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: o("WAWebModalManager").closeModalManager,
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                size: "16",
                children: s._(
                  /*BTDS*/ "Could not leave all groups in this community.",
                ),
              }),
            })),
            (t[0] = n))
          : (n = t[0]),
        n
      );
    }
    ((l.CommunityLeaveTryAgainLaterError = c),
      (l.CommunityLeaveRetryError = d),
      (l.CommunityLeaveStandardError = m));
  },
  226,
);
