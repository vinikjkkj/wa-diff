__d(
  "WAWebBizBroadcastVerifyOnPhoneModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "WAWebModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebModalLoadable")(
        r("JSResourceForInteraction")(
          "WAWebBizBroadcastVerifyOnPhoneModal.react",
        ).__setRef("WAWebBizBroadcastVerifyOnPhoneModalLoadable"),
        "BizBroadcastVerifyOnPhoneModal",
        function (e) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            error: !!e.error,
            theme: o("WAWebModal.react").ModalTheme.BizBroadcastVerifyOnPhone,
          });
        },
      );
    l.WAWebBizBroadcastVerifyOnPhoneModalLoadable = u;
  },
  98,
);
