__d(
  "useWAWebHdImageChildMsg",
  [
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
    "react",
    "useWAWebAssociatedMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(e),
        n = s(
          function () {
            var e = t.find(function (e) {
              return (
                e.associationType ===
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .HD_IMAGE_DUAL_UPLOAD
              );
            });
            return e != null &&
              o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled()
              ? e
              : null;
          },
          [t],
        );
      return n;
    }
    l.useHdImageChildMsg = u;
  },
  98,
);
