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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        c(p, t));
      var n = m,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(
            /*BTDS*/ "See Meta's terms and privacy policy to send business broadcasts.",
          )),
          (e[1] = a))
        : (a = e[1]);
      var i;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                textAlign: "center",
                children: [
                  a,
                  " ",
                  u.jsx(r("WDSTextualLink.react"), {
                    onClick: n,
                    children: s._(/*BTDS*/ "Review"),
                  }),
                ],
              }),
            })),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    function m() {
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
    }
    function p() {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.tosReviewBannerViewed();
    }
    l.default = d;
  },
  226,
);
