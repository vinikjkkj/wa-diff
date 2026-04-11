__d(
  "WAWebStatusAttachMediaFlow.react",
  ["WAWebStatusPostingMediaPicker.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.isNewsletterStatus,
        a = e.newsletterWid,
        i = n === void 0 ? !1 : n,
        l = d(),
        u,
        m;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function () {
            var e;
            (e = l.current) == null || e.open();
          }),
          (m = []),
          (t[0] = u),
          (t[1] = m))
        : ((u = t[0]), (m = t[1])),
        c(u, m));
      var p;
      return (
        t[2] !== i || t[3] !== a
          ? ((p = s.jsx(r("WAWebStatusPostingMediaPicker.react"), {
              mediaPickerRef: l,
              newsletterWid: a,
              isNewsletterStatus: i,
            })),
            (t[2] = i),
            (t[3] = a),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    l.default = m;
  },
  98,
);
