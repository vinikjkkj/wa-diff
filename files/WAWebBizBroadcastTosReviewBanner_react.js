__d(
  "WAWebBizBroadcastTosReviewBanner.react",
  [
    "fbt",
    "WAWebBizBroadcastTosModal.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebWamEnumEntryPoint",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d() {
      c(function () {
        o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.tosReviewBannerViewed();
      }, []);
      var e = function () {
        (o(
          "WAWebBusinessBroadcastUserJourneyLogger",
        ).BusinessBroadcastUserJourneyLogger.tosReviewBannerClicked(),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebBizBroadcastTosModal.react"), {
              entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              onAccept: o("WAWebModalManager").closeModalManager,
              onDismiss: o("WAWebModalManager").closeModalManager,
            }),
            { transition: "modal-flow" },
          ));
      };
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: u.jsxs(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          textAlign: "center",
          children: [
            s._(
              /*BTDS*/ "See Meta's terms and privacy policy to send business broadcasts.",
            ),
            " ",
            u.jsx(r("WDSTextualLink.react"), {
              onClick: e,
              children: s._(/*BTDS*/ "Review"),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
