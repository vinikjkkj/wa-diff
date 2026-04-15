__d(
  "WAWebMmSignalSharingDisclosureRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingUIUtils",
    "WAWebSingleChevronInCircleIcon.react",
    "WAWebText.react",
    "WAWebWamEnumDisclosureEventType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.chat,
        r = e.isRefresh,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "This chat has offers and announcements"),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "Meta receives limited info, like if you visit a website or submit feedback about this business.",
            ),
          })),
          (t[1] = l))
        : (l = t[1]);
      var c = l,
        d;
      t[2] !== n
        ? ((d = {
            title: i,
            secondaryTitle: c,
            onClick: function () {
              return o(
                "WAWebMmSignalSharingUIUtils",
              ).openMmSignalSharingDisclosureModal({
                action: "learnMore",
                onLearnMore: function () {
                  return o(
                    "WAWebMmSignalSharingLoggingEvents",
                  ).logMmSignalSharingDisclosureLearnMoreEvent({
                    eventType: o("WAWebWamEnumDisclosureEventType")
                      .DISCLOSURE_EVENT_TYPE.DISCLOSURE_INFO_CLICK,
                    chat: n,
                  });
                },
              });
            },
          }),
          (t[2] = n),
          (t[3] = d))
        : (d = t[3]);
      var m = d,
        p;
      return (
        t[4] !== m || t[5] !== r
          ? ((p =
              r === !0
                ? u.jsx(
                    o("WAWebChatInfoDrawerRow.react")
                      .ChatInfoDrawerRowRefreshed,
                    babelHelpers.extends({}, m, {
                      icon: u.jsx(
                        o("WAWebSingleChevronInCircleIcon.react")
                          .SingleChevronInCircleIcon,
                        { viewBox: { x: 0, y: 0, width: 19, height: 19 } },
                      ),
                    }),
                  )
                : u.jsx(
                    o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow,
                    babelHelpers.extends({}, m, {
                      spaced: !1,
                      icon: u.jsx(
                        o("WAWebSingleChevronInCircleIcon.react")
                          .SingleChevronInCircleIcon,
                        { viewBox: { x: 0, y: 0, width: 22, height: 22 } },
                      ),
                    }),
                  )),
            (t[4] = m),
            (t[5] = r),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    l.default = c;
  },
  226,
);
