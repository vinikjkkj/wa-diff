__d(
  "WAWebAltDeviceLinkingQpl",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      e != null && (e.end(105), (e = null));
    }
    function u(t) {
      var n;
      (n = e) == null || n.addPoint(t);
    }
    function c() {
      var t;
      ((t = e) == null || t.end(2), (e = null));
    }
    ((i.setCurrentMarker = l),
      (i.clearCurrentMarker = s),
      (i.addPointToCurrentMarker = u),
      (i.endCurrentMarkerSuccess = c));
  },
  66,
);
