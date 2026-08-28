__d(
  "ZenonMediaElementTracker",
  ["FBLogger", "ZenonReceiverRenderedResolutionManager", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = new Map(),
      c;
    function d(e, t) {
      (u.has(e) &&
        r("FBLogger")("rtc_www").warn(
          "ZenonMediaElementTracker already has a stream associated with the given element",
        ),
        u.set(e, t));
    }
    function m(e) {
      u.delete(e) ||
        r("FBLogger")("rtc_www").warn(
          "ZenonMediaElementTracker did not have a stream associated with the given element",
        );
    }
    function p(e) {
      var t = new Map();
      for (var n of u) {
        var o = n[0],
          a = n[1];
        for (var i of a.getTracks()) {
          var l = e.get(i.id);
          if (
            l != null &&
            i.kind === "video" &&
            o instanceof HTMLVideoElement
          ) {
            if (o.videoWidth === 0 || o.videoHeight === 0) continue;
            var s = o.getBoundingClientRect();
            ((l.renderedWidth = s.width), (l.renderedHeight = s.height));
            var d = s.width / o.videoWidth,
              m = s.height / o.videoHeight,
              p = getComputedStyle(o),
              _ = p.objectFit,
              f = 1,
              g = 1;
            switch (_) {
              case "cover":
                ((f = Math.max(d, m)),
                  (g =
                    (s.width * s.height) /
                    (f * f * o.videoWidth * o.videoHeight)));
                break;
              case "contain":
                f = Math.min(d, m);
                break;
              default:
                r("FBLogger")("rtc_www").warn("Unknown object-fit type %s", _);
            }
            ((l.scaleRatio = f * f), (l.croppingRatio = g));
            var h = l.contentType;
            t.set(i.id, {
              contentType: h || "video",
              renderHeight: s.height,
              renderWidth: s.width,
            });
          }
        }
      }
      c != null && c(t);
    }
    function _(e, t) {
      ((c = o(
        "ZenonReceiverRenderedResolutionManager",
      ).useReceiverRenderedResolutionManager()),
        s(
          function () {
            var n = e.current;
            if (!(!t || !n))
              return (
                d(n, t),
                function () {
                  m(n);
                }
              );
          },
          [e, t],
        ));
    }
    ((l.trackElement = d),
      (l.untrackElement = m),
      (l.updateStats = p),
      (l.useMediaElementTracker = _));
  },
  98,
);
