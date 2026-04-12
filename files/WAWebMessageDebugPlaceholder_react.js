__d(
  "WAWebMessageDebugPlaceholder.react",
  [
    "fbt",
    "WAWebAlertErrorIcon.react",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebStateUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg;
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: o("WAWebStateUtils").unproxy(t),
        displayAuthor: !0,
        children: u.jsx(r("WAWebMessagePlaceholder.react"), {
          Icon: u.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
            width: 20,
            height: 20,
          }),
          msg: t.unsafe(),
          children: s._(
            /*BTDS*/ "This message was dropped due to error ({errorCode}). Please report the problem by selecting 'Report Issue' from the context menu of the message if you are in dev env. Or report the bug via Settings -> Report a bug if using a production app.",
            [s._param("errorCode", t.body)],
          ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
