__d(
  "WAWebUsePdfLinkDialog",
  ["WAWebModalManager", "WAWebPdfLinkDialog.react", "WAWebURLUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      u(
        function () {
          if (!e) return;
          var t = null;
          function n() {
            t != null &&
              (o("WAWebModalManager").ModalManager.off("close_support", t),
              o("WAWebModalManager").ModalManager.off("close_modal", t),
              (t = null));
          }
          var a = e.listen("SHOW_LINK_DIALOG", function (a) {
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
        },
        [e],
      );
    }
    function d(e) {
      var t = e.viewer;
      return (c(t), null);
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
