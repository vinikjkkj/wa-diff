__d(
  "ReactKeyboardEvent.react",
  ["ReactUseEvent.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = { passive: !0 };
    function c(e, t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.disabled,
        i = t.onKeyDown,
        l = t.onKeyUp,
        c = a === void 0 ? !1 : a,
        d = r("ReactUseEvent.react")("keydown"),
        m = r("ReactUseEvent.react")("keyup", u),
        p,
        _;
      (n[0] !== c ||
      n[1] !== d ||
      n[2] !== m ||
      n[3] !== i ||
      n[4] !== l ||
      n[5] !== e
        ? ((p = function () {
            var t = e.current;
            t !== null &&
              (d.setListener(t, (!c && i) || null),
              m.setListener(t, (!c && l) || null));
          }),
          (_ = [c, i, d, m, e, l]),
          (n[0] = c),
          (n[1] = d),
          (n[2] = m),
          (n[3] = i),
          (n[4] = l),
          (n[5] = e),
          (n[6] = p),
          (n[7] = _))
        : ((p = n[6]), (_ = n[7])),
        s(p, _));
    }
    l.useKeyboard = c;
  },
  98,
);
