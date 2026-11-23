__d(
  "AdsPlayableHeatmapCanvasAdapter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new WeakMap();
      function n(e) {
        var n = {
          addColorStop: function (n, r) {
            return e.addColorStop(n, r);
          },
        };
        return (t.set(n, e), n);
      }
      return {
        arc: function (n, r, o, a, i) {
          return e.arc(n, r, o, a, i);
        },
        beginPath: function () {
          return e.beginPath();
        },
        clearRect: function (n, r, o, a) {
          return e.clearRect(n, r, o, a);
        },
        createLinearGradient: function (r, o, a, i) {
          return n(e.createLinearGradient(r, o, a, i));
        },
        createRadialGradient: function (r, o, a, i, l, s) {
          return n(e.createRadialGradient(r, o, a, i, l, s));
        },
        fill: function () {
          return e.fill();
        },
        fillRect: function (n, r, o, a) {
          return e.fillRect(n, r, o, a);
        },
        mutateImageData: function (n, r, o, a, i) {
          var t = e.getImageData(n, r, o, a);
          (i(t.data), e.putImageData(t, n, r));
        },
        readImageData: function (n, r, o, a) {
          return e.getImageData(n, r, o, a).data;
        },
        setFillStyle: function (r) {
          if (typeof r == "string") {
            e.fillStyle = r;
            return;
          }
          var n = t.get(r);
          n != null && (e.fillStyle = n);
        },
      };
    }
    i.adaptCanvasContext = e;
  },
  66,
);
