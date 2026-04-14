__d(
  "WAWebCommentSendFailIcon.react",
  [
    "fbt",
    "WAWebDisplayType",
    "WAWebFailIcon.react",
    "WAWebMsgSendFailIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.comment,
        n = s._(/*BTDS*/ "Something went wrong. Click to learn more."),
        a = function () {
          o("WAWebMsgSendFailIcon.react").showResendDialog({
            messagesToResend: [],
            reactionsToResend: [],
            votesToResend: [],
            pinsToResend: [],
            eventResponsesToResend: [],
            commentsToResend: [t],
          });
        };
      return t.isFailed
        ? u.jsx(r("WAWebFailIcon.react"), {
            displayType: o("WAWebDisplayType").DISPLAY_TYPE.COMMENT,
            tooltip: n,
            ariaLabel: n,
            fromMe: t.id.fromMe,
            onClick: a,
            isGroupChatProfilePictureDisplayed: !0,
          })
        : null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
