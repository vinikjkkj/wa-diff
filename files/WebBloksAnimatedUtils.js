__d(
  "WebBloksAnimatedUtils",
  ["WebBloksAnimationsSet"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return (n = e.bloksContext.bkContextKeyAnimations.get(t)) != null
        ? n
        : null;
    }
    function s(e, t) {
      return e.bloksContext.bkContextKeyAnimations.has(t);
    }
    function u(t, n) {
      var r = e(t, n);
      r == null || r.play(t.bloksContext.bkContextKeyAnimations, n);
    }
    function c(t, n) {
      var r = e(t, n);
      return (
        r == null || r.cancel(),
        t.bloksContext.bkContextKeyAnimations.delete(n)
      );
    }
    function d(e, t, n, r) {
      if (
        (r === void 0 && (r = !0),
        e.bloksContext.bkContextKeyAnimations.set(t, n),
        r)
      ) {
        var o = function () {
          c(e, t);
        };
        n.addOnCompleteListener(o);
      }
      return n;
    }
    function m(e) {
      var t = e.constructor.name;
      if (e instanceof o("WebBloksAnimationsSet").WebBloksAnimationsSet)
        for (var n of e.animations) t += m(n);
      return t;
    }
    ((l.getAnimationWithToken = e),
      (l.hasAnimationWithToken = s),
      (l.startAnimationWithToken = u),
      (l.deleteAnimationWithToken = c),
      (l.associateAnimationWithToken = d),
      (l.getIDTokenForLegacyAnimation = m));
  },
  98,
);
