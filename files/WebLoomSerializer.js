__d(
  "WebLoomSerializer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return !(!window.Uint8Array || !window.btoa);
    }
    function l(t, n, r, o) {
      var a = r.flushEvents();
      if (!e()) return null;
      var i = n.start_time_us,
        l = n.end_time_us,
        s = i / 1e3,
        u = l / 1e3;
      if (o != null) {
        var c = s - o.stats.timeOrigin,
          d = u - o.stats.timeOrigin;
        o.trace.samples = o.trace.samples.filter(function (e) {
          return e.timestamp >= c && e.timestamp <= d;
        });
      }
      var m =
          JSON.stringify(n) +
          "\n{}\n" +
          JSON.stringify(o || null).replace(/[^\x00-\x7F]/g, "") +
          "\n",
        p = 0;
      return (
        a.forEach(function (e) {
          var t = Math.round(e.timestamp * 1e3);
          if (!(t < i || t > l)) {
            var n = t - p;
            p = t;
            var r = e.event,
              o = [n, r.type];
            switch (r.type) {
              case "QPL_ANNOTATION":
                (o.push(r.markerId),
                  o.push(r.instanceKey),
                  o.push(r.annotationKey),
                  o.push(r.annotationValue));
                break;
              case "QPL_START":
                (o.push(r.markerId), o.push(r.instanceKey));
                break;
              case "QPL_END":
                (o.push(r.markerId), o.push(r.instanceKey), o.push(r.action));
                break;
              case "QPL_POINT":
                (o.push(r.markerId),
                  o.push(r.instanceKey),
                  o.push(r.name),
                  r.data != null && o.push(r.data));
                break;
              case "RESOURCE_TIMING_START":
                (o.push(r.resourceType),
                  o.push(r.resourceId),
                  o.push(r.resourceName),
                  o.push(r.encodedSize),
                  o.push(r.decodedSize),
                  o.push(r.transferSize),
                  o.push(r.responseStatus));
                break;
              case "RESOURCE_TIMING_END":
                (o.push(r.resourceType), o.push(r.resourceId));
                break;
              case "RESOURCE_TIMING_POINT":
                (o.push(r.resourceType),
                  o.push(r.resourceId),
                  o.push(r.pointName));
                break;
              case "INTERACTION_TRACE_START":
                (o.push(r.traceId),
                  o.push(r.execUnitName),
                  o.push(r.blockName),
                  o.push(r.blockType),
                  o.push(r.traceType));
                break;
              case "INTERACTION_TRACE_END":
                (o.push(r.traceId),
                  o.push(r.execUnitName),
                  o.push(r.blockName),
                  o.push(r.blockType),
                  o.push(r.traceType),
                  o.push(r.blockAnnotations));
                break;
              case "INTERACTION_TRACE_POINT":
                (o.push(r.traceId),
                  o.push(r.execUnitName),
                  o.push(r.blockName),
                  o.push(r.pointName),
                  o.push(r.pointAnnotations));
                break;
              case "VISUAL_COMPLETION_RECT":
                (o.push(r.elementType),
                  o.push(r.depth),
                  o.push(r.x),
                  o.push(r.y),
                  o.push(r.width),
                  o.push(r.height),
                  o.push(r.mutationType),
                  o.push(r.lateMutationType));
                break;
              case "VISUAL_COMPLETION_PROGRESS":
                o.push(r.progress);
                break;
              case "JS_SCHEDULER_QUEUE":
                (o.push(r.priority), o.push(r.queueSize));
                break;
            }
            m += JSON.stringify(o) + "\n";
          }
        }),
        t.compressStringToSnappy(m)
      );
    }
    ((i.isSupported = e), (i.serialize = l));
  },
  66,
);
