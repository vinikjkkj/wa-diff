__d(
  "DOMEventListener",
  [
    "invariant",
    "dedupString",
    "emptyFunction",
    "passiveEventListenerUtil",
    "wrapFunction",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    window.addEventListener
      ? ((e = function (t, n, a, i) {
          (i === void 0 && (i = !1),
            (a.wrapper = r("wrapFunction")(
              a,
              "entry",
              r("dedupString")("DOMEventListener.add " + n),
            )),
            t.addEventListener(
              n,
              a.wrapper,
              o("passiveEventListenerUtil").isPassiveEventListenerSupported
                ? i
                : !1,
            ));
        }),
        (u = function (t, n, r, a) {
          (a === void 0 && (a = !1),
            t.removeEventListener(
              n,
              r.wrapper,
              o("passiveEventListenerUtil").isPassiveEventListenerSupported
                ? a
                : !1,
            ));
        }))
      : window.attachEvent
        ? ((e = function (t, n, o, a) {
            (a === void 0 && (a = !1),
              (o.wrapper = r("wrapFunction")(
                o,
                "entry",
                "DOMEventListener.add " + n,
              )),
              t.attachEvent || s(0, 2798),
              t.attachEvent("on" + n, o.wrapper));
          }),
          (u = function (t, n, r, o) {
            (o === void 0 && (o = !1),
              t.detachEvent || s(0, 2799),
              t.detachEvent("on" + n, r.wrapper));
          }))
        : (u = e = r("emptyFunction"));
    var c = {
      add: function (n, r, o, a) {
        return (
          a === void 0 && (a = !1),
          e(n, r, o, a),
          {
            remove: function () {
              u(n, r, o, typeof a == "boolean" ? a : a.capture);
            },
          }
        );
      },
      remove: u,
    };
    i.exports = c;
  },
  34,
);
