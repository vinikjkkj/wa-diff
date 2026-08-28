__d(
  "KFMat2d",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e = window.Float32Array ? new Float32Array(6) : new Array(6);
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = 0),
        (e[5] = 0),
        e
      );
    }
    function l(e) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = 0),
        (e[5] = 0),
        e
      );
    }
    function s(e, t, n) {
      var r = t[0],
        o = t[1],
        a = t[2],
        i = t[3],
        l = t[4],
        s = t[5],
        u = n[0],
        c = n[1],
        d = n[2],
        m = n[3],
        p = n[4],
        _ = n[5];
      return (
        (e[0] = r * u + a * c),
        (e[1] = o * u + i * c),
        (e[2] = r * d + a * m),
        (e[3] = o * d + i * m),
        (e[4] = r * p + a * _ + l),
        (e[5] = o * p + i * _ + s),
        e
      );
    }
    function u(e, t, n) {
      var r = t[0],
        o = t[1],
        a = t[2],
        i = t[3],
        l = t[4],
        s = t[5],
        u = Math.sin(n),
        c = Math.cos(n);
      return (
        (e[0] = r * c + a * u),
        (e[1] = o * c + i * u),
        (e[2] = r * -u + a * c),
        (e[3] = o * -u + i * c),
        (e[4] = l),
        (e[5] = s),
        e
      );
    }
    function c(e, t, n) {
      var r = t[0],
        o = t[1],
        a = t[2],
        i = t[3],
        l = t[4],
        s = t[5],
        u = n[0],
        c = n[1];
      return (
        (e[0] = r * u),
        (e[1] = o * u),
        (e[2] = a * c),
        (e[3] = i * c),
        (e[4] = l),
        (e[5] = s),
        e
      );
    }
    function d(e, t, n) {
      var r = t[0],
        o = t[1],
        a = t[2],
        i = t[3],
        l = t[4],
        s = t[5],
        u = n[0],
        c = n[1];
      return (
        (e[0] = r),
        (e[1] = o),
        (e[2] = a),
        (e[3] = i),
        (e[4] = r * u + a * c + l),
        (e[5] = o * u + i * c + s),
        e
      );
    }
    function m(e, t) {
      return (
        (e[0] = 1),
        (e[1] = 0),
        (e[2] = 0),
        (e[3] = 1),
        (e[4] = t[0]),
        (e[5] = t[1]),
        e
      );
    }
    ((i.identity = l),
      (i.multiply = s),
      (i.translate = d),
      (i.rotate = u),
      (i.scale = c),
      (i.fromTranslation = m),
      (i.createMat2d = e));
  },
  66,
);
