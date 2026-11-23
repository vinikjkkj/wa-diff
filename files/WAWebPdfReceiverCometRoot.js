__d(
  "WAWebPdfReceiverCometRoot",
  [
    "WAWebPdfReceiverApp.react",
    "WAWebReceiverAppRoot.react",
    "buildWAWebCometRoot",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(o("WAWebReceiverAppRoot.react").WAWebReceiverAppRoot, {
        children: s.jsx(r("WAWebPdfReceiverApp.react"), {}),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      r("buildWAWebCometRoot")(u, e);
    }
    l.init = c;
  },
  98,
);
