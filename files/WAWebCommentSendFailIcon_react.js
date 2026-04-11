__d(
  "WAWebCommentSendFailIcon.react",
  [
    "fbt",
    "WAWebDisplayType",
    "WAWebFailIcon.react",
    "WAWebMsgSendFailIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.comment,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Something went wrong. Click to learn more.")),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] !== n
        ? ((l = function () {
            o("WAWebMsgSendFailIcon.react").showResendDialog({
              messagesToResend: [],
              reactionsToResend: [],
              votesToResend: [],
              pinsToResend: [],
              eventResponsesToResend: [],
              commentsToResend: [n],
            });
          }),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        d;
      return (
        t[3] !== n.id || t[4] !== n.isFailed || t[5] !== c
          ? ((d = n.isFailed
              ? u.jsx(r("WAWebFailIcon.react"), {
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.COMMENT,
                  tooltip: i,
                  ariaLabel: i,
                  fromMe: n.id.fromMe,
                  onClick: c,
                  isGroupChatProfilePictureDisplayed: !0,
                })
              : null),
            (t[3] = n.id),
            (t[4] = n.isFailed),
            (t[5] = c),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = c;
  },
  226,
);
