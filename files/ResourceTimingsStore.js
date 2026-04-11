__d(
  "ResourceTimingsStore",
  [
    "CircularBuffer",
    "ResourceTypes",
    "TimingAnnotations",
    "URI",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = 1e3,
      u = new (n("TimingAnnotations").EmptyTimingAnnotations)(),
      c = {},
      d = {};
    Object.keys(n("ResourceTypes")).forEach(function (e) {
      var t = n("ResourceTypes")[e],
        r = new (n("CircularBuffer"))(s),
        o = new Map();
      (r.onEvict(function (e) {
        o.delete(e);
      }),
        (c[t] = { idx: 1, entries: r }),
        (d[t] = o));
    });
    function m(t, r, o) {
      var a;
      switch (t) {
        case "css":
        case "js":
          var i = p.parseMakeHasteURL(r),
            l = i == null ? "unknown_resource" : i[0];
          a = o + "_" + l;
          break;
        case "xhr":
          var s = new (e || (e = n("URI")))(r).getQualifiedURI(),
            u = s.getDomain() + s.getPath();
          a = o + "_" + u;
          break;
        default:
          a = "never here";
      }
      return a;
    }
    var p = {
      getUID: function (t, n) {
        var e = c[t],
          r = m(t, n, e.idx);
        return (
          e.entries.write(r),
          d[t].set(r, { uri: n, uid: r }),
          e.idx++,
          r
        );
      },
      updateURI: function (t, n, r) {
        var e = d[t].get(n);
        e != null && (e.uri = r);
      },
      getMapFor: function (t) {
        return d[t];
      },
      parseMakeHasteURL: function (t) {
        var e = t.match(/\/rsrc\.php\/.*\/([^\?]+)/);
        if (!e) return null;
        var n = e[1],
          r = "",
          o = n.match(/\.(\w+)$/);
        return (o && (r = o[1]), [n, r]);
      },
      measureRequestSent: function (t, r) {
        var e = d[t],
          o = e.get(r);
        o == null ||
          o.requestSent != null ||
          (o.requestSent = (l || (l = n("performanceAbsoluteNow")))());
      },
      measureResponseReceived: function (t, r) {
        var e = d[t],
          o = e.get(r);
        o == null ||
          o.requestSent == null ||
          o.responseReceived != null ||
          (o.responseReceived = (l || (l = n("performanceAbsoluteNow")))());
      },
      annotate: function (t, r) {
        var e = d[t],
          o = e.get(r);
        if (o) {
          var a = o.annotations;
          if (a != null) return a;
          var i = new (n("TimingAnnotations"))();
          return ((o.annotations = i), i);
        } else return u;
      },
      getAnnotationsFor: function (t, n) {
        var e = d[t],
          r = e.get(n);
        if (r) {
          var o = r.annotations;
          return o != null ? o.prepareToSend() : null;
        } else return null;
      },
    };
    a.exports = p;
  },
  null,
);
