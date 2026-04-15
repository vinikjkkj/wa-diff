__d(
  "WAWebUsePdfLinkDialog",
  [
    "WAWebModalManager",
    "WAWebPdfLinkDialog.react",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        a;
      (t[0] !== e
        ? ((n = function () {
            if (e) {
              var t = null,
                n = function () {
                  t != null &&
                    (o("WAWebModalManager").ModalManager.off(
                      "close_support",
                      t,
                    ),
                    o("WAWebModalManager").ModalManager.off("close_modal", t),
                    (t = null));
                },
                a = e.listen("SHOW_LINK_DIALOG", function (a) {
                  var i = a.url.replace(/\/$/, "");
                  r("WAWebURLUtils").hasValidUrlScheme(i) &&
                    (n(),
                    o("WAWebModalManager").ModalManager.openSupportModal(
                      s.jsx(r("WAWebPdfLinkDialog.react"), { url: i }),
                    ),
                    (t = function () {
                      (n(), e.publish("LINK_DIALOG_CLOSED", {}));
                    }),
                    o("WAWebModalManager").ModalManager.on("close_support", t),
                    o("WAWebModalManager").ModalManager.on("close_modal", t));
                });
              return function () {
                (a(), n());
              };
            }
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2])),
        u(n, a));
    }
    function d(e) {
      var t = e.viewer;
      return (c(t), null);
    }
    l.default = d;
  },
  98,
);
