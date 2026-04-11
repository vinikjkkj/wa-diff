__d(
  "WAWamEntrypoint",
  ["Promise", "WAWamManager", "WAWamUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1,
      u = !1,
      c = null;
    function d() {
      return (c || (c = new (o("WAWamManager").WamManager)()), c);
    }
    function m() {
      u = !0;
    }
    function p(e, t, n, r, o) {
      d().initialize(n, e, t, r, o);
    }
    function _() {
      d().deinitialize();
    }
    function f(e, t, n, r, a, i, l) {
      i === void 0 && (i = s);
      var c = Date.now();
      (u && l != null,
        d().enqueueEvent(e, t, c, n, o("WAWamUtils").appendRawFields(r, a), i));
    }
    function g(t, r, a, i, l, c, m) {
      c === void 0 && (c = s);
      var p = Date.now();
      return (
        u && m != null,
        new (e || (e = n("Promise")))(function (e) {
          d().enqueueEvent(
            t,
            r,
            p,
            a,
            o("WAWamUtils").appendRawFields(i, l),
            c,
            e,
          );
        })
      );
    }
    function h(e, t) {
      var n = o("WAWamUtils").getDeltaFromAttributes(e);
      if (n != null) {
        var r = n.deltaPrivate,
          a = n.deltaRegular;
        (u && t != null,
          a.size > 0 && d().enqueueAttributesUpdate("regular", a),
          r.size > 0 && d().enqueueAttributesUpdate("private", r));
      }
    }
    function y(e) {
      d().updatePrivateStatsIds(e);
    }
    function C() {
      d().forceFlushBuffers();
    }
    function b() {
      d().rotateBuffers();
    }
    ((l.enableDebugMode = m),
      (l.initializeWAM = p),
      (l.deinitializeWAM = _),
      (l.log = f),
      (l.logAsync = g),
      (l.logAttributes = h),
      (l.updatePrivateStatsIds = y),
      (l.forceFlushBuffers = C),
      (l.rotateBuffers = b));
  },
  98,
);
