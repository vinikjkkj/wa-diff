__d(
  "ResourceTimingsStore",
  [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 1e3,
      c = new (r("TimingAnnotations").EmptyTimingAnnotations)(),
      d = {},
      m = {};
    Object.keys(r("ResourceTypes")).forEach(function (e) {
      var t = r("ResourceTypes")[e],
        n = new (r("CircularBuffer"))(u),
        o = new Map();
      (n.onEvict(function (e) {
        o.delete(e);
      }),
        (d[t] = { idx: 1, entries: n }),
        (m[t] = o));
    });
    function p(t, n, o) {
      var a;
      switch (t) {
        case "css":
        case "js":
          var i = h(n),
            l = i == null ? "unknown_resource" : i[0];
          a = o + "_" + l;
          break;
        case "xhr":
          var s = new (e || (e = r("URI")))(n).getQualifiedURI(),
            u = s.getDomain() + s.getPath();
          a = o + "_" + u;
          break;
        default:
          a = "never here";
      }
      return a;
    }
    function _(e, t) {
      var n = d[e],
        r = p(e, t, n.idx);
      return (n.entries.write(r), m[e].set(r, { uri: t, uid: r }), n.idx++, r);
    }
    function f(e, t, n) {
      var r = m[e].get(t);
      r != null && (r.uri = n);
    }
    function g(e) {
      return m[e];
    }
    function h(e) {
      var t = e.match(/\/rsrc\.php\/.*\/([^\?]+)/);
      if (!t) return null;
      var n = t[1],
        r = "",
        o = n.match(/\.(\w+)$/);
      return (o && (r = o[1]), [n, r]);
    }
    function y(e, t) {
      var n = m[e],
        o = n.get(t);
      o == null ||
        o.requestSent != null ||
        (o.requestSent = (s || (s = r("performanceAbsoluteNow")))());
    }
    function C(e, t) {
      var n = m[e],
        o = n.get(t);
      o == null ||
        o.requestSent == null ||
        o.responseReceived != null ||
        (o.responseReceived = (s || (s = r("performanceAbsoluteNow")))());
    }
    function b(e, t) {
      var n = m[e],
        o = n.get(t);
      if (o) {
        var a = o.annotations;
        if (a != null) return a;
        var i = new (r("TimingAnnotations"))();
        return ((o.annotations = i), i);
      } else return c;
    }
    function v(e, t) {
      var n = m[e],
        r = n.get(t);
      if (r) {
        var o = r.annotations;
        return o != null ? o.prepareToSend() : null;
      } else return null;
    }
    ((l.getUID = _),
      (l.updateURI = f),
      (l.getMapFor = g),
      (l.parseMakeHasteURL = h),
      (l.measureRequestSent = y),
      (l.measureResponseReceived = C),
      (l.annotate = b),
      (l.getAnnotationsFor = v));
  },
  98,
);
