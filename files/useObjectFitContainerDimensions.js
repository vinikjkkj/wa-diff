__d(
  "useObjectFitContainerDimensions",
  [
    "CometObjectFitContainer.react",
    "react",
    "react-compiler-runtime",
    "useCometSize_DO_NOT_USE",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 584;
    function c(e) {
      return e === "video_home_inline" || e === "inline"
        ? { height: u, width: u }
        : { height: 1080, width: 1920 };
    }
    function d(e, t, n) {
      var a = o("react-compiler-runtime").c(8),
        i = r("useCometSize_DO_NOT_USE")(
          t != null ? t : !1,
          n != null ? n : !1,
        ),
        l = i[0],
        u = i[1],
        d;
      a[0] !== u || a[1] !== e
        ? ((d = u != null ? u : c(e)), (a[0] = u), (a[1] = e), (a[2] = d))
        : (d = a[2]);
      var m = d,
        p;
      a[3] !== l
        ? ((p = function (t) {
            return s.jsx(r("CometObjectFitContainer.react"), {
              debugRole: null,
              objectFitMode: "CONTAINER_SIZE",
              ref: l,
              children: t,
            });
          }),
          (a[3] = l),
          (a[4] = p))
        : (p = a[4]);
      var _;
      return (
        a[5] !== m || a[6] !== p
          ? ((_ = [m, p]), (a[5] = m), (a[6] = p), (a[7] = _))
          : (_ = a[7]),
        _
      );
    }
    l.default = d;
  },
  98,
);
