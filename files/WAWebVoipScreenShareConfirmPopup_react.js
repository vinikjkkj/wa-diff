__d(
  "WAWebVoipScreenShareConfirmPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebVoipStackInterface",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        a = e.closeModal,
        i = e.message,
        l = e.okText,
        c = e.onOK,
        d = a != null ? a : o("WAWebModalManager").closeModalManager,
        m;
      t[0] !== d || t[1] !== c
        ? ((m = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (c) yield c();
              else {
                var e = yield o(
                  "WAWebVoipStackInterface",
                ).getVoipStackInterface();
                (e == null ? void 0 : e.type) === "web" &&
                  (yield e.requestVideoUpgrade());
              }
              d();
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = d),
          (t[1] = c),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] !== d
        ? ((_ = function () {
            d();
          }),
          (t[3] = d),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] !== l
        ? ((g = l != null ? l : s._(/*BTDS*/ "Switch")), (t[5] = l), (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Cancel")), (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== i
        ? ((y =
            i != null
              ? i
              : s._(/*BTDS*/ "Switch to video call to share your screen.")),
          (t[8] = i),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== y
        ? ((C = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2",
            children: y,
          })),
          (t[10] = y),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== f || t[13] !== p || t[14] !== g || t[15] !== C
          ? ((b = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              onOK: p,
              onCancel: f,
              okText: g,
              cancelText: h,
              children: C,
            })),
            (t[12] = f),
            (t[13] = p),
            (t[14] = g),
            (t[15] = C),
            (t[16] = b))
          : (b = t[16]),
        b
      );
    }
    l.WAWebVoipScreenShareConfirmPopup = c;
  },
  226,
);
