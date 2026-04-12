__d(
  "WAWebMessageHistoryNoticeMessage.react",
  [
    "WAWebFormatMessageHistoryNoticeBody",
    "WAWebSystemMessageWithSingleCTA.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = e.ref;
      return s.jsx(
        o("WAWebSystemMessageWithSingleCTA.react").SystemMessageWithSingleCTA,
        {
          bodyText: o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(t),
          ctaText: null,
          icon: null,
          onClick: null,
          onclickRef: n,
          testid: void 0,
        },
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
