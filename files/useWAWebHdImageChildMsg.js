__d(
  "useWAWebHdImageChildMsg",
  [
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
    "react",
    "react-compiler-runtime",
    "useWAWebAssociatedMessages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(e),
        r;
      t[0] !== n ? ((r = n.find(c)), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a = r,
        i;
      t[2] !== a
        ? ((i =
            a != null &&
            o("WAWebMediaGatingUtils").isHdImageDualUploadConsumptionEnabled()
              ? a
              : null),
          (t[2] = a),
          (t[3] = i))
        : (i = t[3]);
      var l = i;
      return l;
    }
    function c(e) {
      return (
        e.associationType ===
        o("WAWebMessageAssociation.flow").MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD
      );
    }
    l.useHdImageChildMsg = u;
  },
  98,
);
