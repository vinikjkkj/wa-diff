__d(
  "DOMEventListener",
  [
    "invariant",
    "dedupString",
    "emptyFunction",
    "passiveEventListenerUtil",
    "wrapFunction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("passiveEventListenerUtil").isPassiveEventListenerSupported,
      s,
      u;
    window.addEventListener
      ? ((s = function (r, o, a, i) {
          (i === void 0 && (i = !1),
            (a.wrapper = n("wrapFunction")(
              a,
              "entry",
              n("dedupString")("DOMEventListener.add " + o),
            )),
            r.addEventListener(o, a.wrapper, e ? i : !1));
        }),
        (u = function (n, r, o, a) {
          (a === void 0 && (a = !1),
            n.removeEventListener(r, o.wrapper, e ? a : !1));
        }))
      : window.attachEvent
        ? ((s = function (t, r, o, a) {
            (a === void 0 && (a = !1),
              (o.wrapper = n("wrapFunction")(
                o,
                "entry",
                "DOMEventListener.add " + r,
              )),
              t.attachEvent || l(0, 2798),
              t.attachEvent("on" + r, o.wrapper));
          }),
          (u = function (t, n, r, o) {
            (o === void 0 && (o = !1),
              t.detachEvent || l(0, 2799),
              t.detachEvent("on" + n, r.wrapper));
          }))
        : (u = s = n("emptyFunction"));
    var c = {
      add: function (t, n, r, o) {
        return (
          o === void 0 && (o = !1),
          s(t, n, r, o),
          {
            remove: function () {
              u(t, n, r, typeof o == "boolean" ? o : o.capture);
            },
          }
        );
      },
      remove: u,
    };
    a.exports = c;
  },
  null,
);
