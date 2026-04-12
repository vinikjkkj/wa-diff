__d(
  "WAWebStatusAttachMediaFlow.react",
  ["WAWebStatusPostingMediaPicker.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = e.isNewsletterStatus,
        n = t === void 0 ? !1 : t,
        o = e.newsletterWid,
        a = d();
      return (
        c(function () {
          var e;
          (e = a.current) == null || e.open();
        }, []),
        s.jsx(r("WAWebStatusPostingMediaPicker.react"), {
          mediaPickerRef: a,
          newsletterWid: o,
          isNewsletterStatus: n,
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
