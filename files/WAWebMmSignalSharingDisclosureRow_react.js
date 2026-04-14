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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.isRefresh,
        r = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          children: s._(/*BTDS*/ "This chat has offers and announcements"),
        }),
        a = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "Meta receives limited info, like if you visit a website or submit feedback about this business.",
          ),
        }),
        i = {
          title: r,
          secondaryTitle: a,
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
                  chat: t,
                });
              },
            });
          },
        };
      return n === !0
        ? u.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
            babelHelpers.extends({}, i, {
              icon: u.jsx(
                o("WAWebSingleChevronInCircleIcon.react")
                  .SingleChevronInCircleIcon,
                { viewBox: { x: 0, y: 0, width: 19, height: 19 } },
              ),
            }),
          )
        : u.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow,
            babelHelpers.extends({}, i, {
              spaced: !1,
              icon: u.jsx(
                o("WAWebSingleChevronInCircleIcon.react")
                  .SingleChevronInCircleIcon,
                { viewBox: { x: 0, y: 0, width: 22, height: 22 } },
              ),
            }),
          );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
