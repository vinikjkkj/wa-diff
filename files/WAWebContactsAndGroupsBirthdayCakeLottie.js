__d(
  "WAWebContactsAndGroupsBirthdayCakeLottie",
  [
    "WAWeb-lottie-light",
    "WAWebContactsAndGroupsBirthdayCakeAnimationData",
    "WAWebStructuredClone",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 223,
      s = null;
    function u(e, t) {
      var n = r("WAWeb-lottie-light").loadAnimation({
        animationData: r("WAWebStructuredClone")(
          r("WAWebContactsAndGroupsBirthdayCakeAnimationData"),
        ),
        autoplay: t,
        container: e,
        loop: !1,
        renderer: "svg",
      });
      return (n.setSubframe(!1), n);
    }
    function c() {
      if (s == null) {
        var t,
          n,
          r = document.createElement("div"),
          o = u(r, !1);
        o.goToAndStop(e, !0);
        var a =
          (t = (n = r.querySelector("svg")) == null ? void 0 : n.outerHTML) !=
          null
            ? t
            : "";
        (o.destroy(),
          (s = URL.createObjectURL(new Blob([a], { type: "image/svg+xml" }))));
      }
      return s;
    }
    ((l.createBirthdayCakeAnimation = u), (l.getRestingBirthdayCakeUrl = c));
  },
  98,
);
