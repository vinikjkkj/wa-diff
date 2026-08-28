__d(
  "ZenonVideoConstraintUtils",
  ["RTCZenonExperimentPhonesNeedAlignment", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = f(1920, 1080, 30),
      s = {
        aspectRatio: 1920 / 1080,
        frameRate: 30,
        height: 1080,
        width: 1920,
      },
      u = { aspectRatio: 1280 / 720, frameRate: 30, height: 720, width: 1280 },
      c = f(u.width, u.height, u.frameRate),
      d = f(1280, 720, 15),
      m = f(640, 360, 15);
    function p() {
      var e = r("RTCZenonExperimentPhonesNeedAlignment").phoneNeedsAlignment;
      return e ? 64 : 0;
    }
    function _(e, t) {
      if (t > 0 && e > 0) {
        var n = Math.max(1, e / t);
        return t * Math.round(n);
      }
      return e;
    }
    function f(e, t, n) {
      if (e == null || t == null || n == null) return null;
      var r = p(),
        o = _(e, r),
        a = _(t, r),
        i = o / a;
      return {
        aspectRatio: { ideal: i },
        frameRate: { ideal: n },
        height: { ideal: a },
        width: { ideal: o },
      };
    }
    function g() {
      return m;
    }
    function h() {
      return b();
    }
    function y() {
      var e;
      return (e = b()) != null ? e : m;
    }
    function C() {
      return m;
    }
    function b() {
      return r("qex")._("1577") ? e : r("gkx")("25156") ? c : null;
    }
    ((l.CONSTRAINT_1080P = e),
      (l.CONSTRAINT_1080P_30FPS_CONFIG = s),
      (l.CONSTRAINT_720P_30FPS_CONFIG = u),
      (l.CONSTRAINT_720P_30FPS = c),
      (l.CONSTRAINT_720P = d),
      (l.CONSTRAINT_360P = m),
      (l.alignTo = _),
      (l.createConstraints = f),
      (l.getP2PVideoConstraints = g),
      (l.getMWVideoConstraints = h),
      (l.getMWVideoConstraintsRooms = y),
      (l.getMWebVideoConstraints = C));
  },
  98,
);
