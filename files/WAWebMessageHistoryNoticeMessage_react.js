__d(
  "WAWebMessageHistoryNoticeMessage.react",
  [
    "WAWebFormatMessageHistoryNoticeBody",
    "WAWebSystemMessageWithSingleCTA.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        r = e.ref,
        a;
      t[0] !== n
        ? ((a = o(
            "WAWebFormatMessageHistoryNoticeBody",
          ).formatMessageHistoryNoticeBody(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== r || t[3] !== a
          ? ((i = s.jsx(
              o("WAWebSystemMessageWithSingleCTA.react")
                .SystemMessageWithSingleCTA,
              {
                bodyText: a,
                ctaText: null,
                icon: null,
                onClick: null,
                onclickRef: r,
                testid: void 0,
              },
            )),
            (t[2] = r),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    l.default = u;
  },
  98,
);
