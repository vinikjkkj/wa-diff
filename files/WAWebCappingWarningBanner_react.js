__d(
  "WAWebCappingWarningBanner.react",
  [
    "fbt",
    "WAWebCappingWarningDetailModalLoadable.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebModalManager",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumSurfaceType",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.onClose,
        n = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).getCappingWarningLevel();
      c(function () {
        o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
          o("WAWebWamEnumSurfaceType").SURFACE_TYPE
            .CHAT_THREAD_CAPPING_ALERT_CARD,
          JSON.stringify(
            o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).getCappingData() || {},
          ),
          o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        );
      }, []);
      var a =
          n ===
          o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
            .SECOND_WARNING,
        i = a
          ? s._(/*BTDS*/ "You're close to your monthly limit of new chats.")
          : s._(
              /*BTDS*/ "There's now a monthly limit on the number of new chats you can start.",
            ),
        l = function () {
          (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .CHAT_THREAD_CAPPING_ALERT_CARD,
            "see_details",
            JSON.stringify(
              o(
                "WAWebIndividualNewChatMessageCappingLimitUtils",
              ).getCappingData() || {},
            ),
          ),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebCappingWarningDetailModalLoadable.react")
                  .CappingWarningDetailModalLoadable,
                {},
              ),
            ));
        };
      return u.jsx("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 x1xrf6ya xscbp6u xdx6fka xvtqlqk",
        children: u.jsxs("div", {
          className:
            "x78zum5 x6s0dn4 xrdqr27 x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i xkh2ocl x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x13ywik6",
          "data-testid": void 0,
          children: [
            u.jsx("div", {
              className: "x1iyjqo2 xs83m0k x1r8uery",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: i,
              }),
            }),
            u.jsxs("div", {
              className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x2lah0s",
              children: [
                u.jsx(r("WDSButton.react"), {
                  variant: "filled",
                  size: "small",
                  label: s._(/*BTDS*/ "See details"),
                  onPress: l,
                }),
                u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  size: "small",
                  label: s._(/*BTDS*/ "Dismiss"),
                  onPress: t,
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.CappingWarningBanner = d));
  },
  226,
);
