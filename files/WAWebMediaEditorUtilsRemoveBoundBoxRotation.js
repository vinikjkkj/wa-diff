__d(
  "WAWebMediaEditorUtilsRemoveBoundBoxRotation",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var r = (t + 360) % 360;
      if (!n && (r === 90 || r === 270)) {
        var o = e.height;
        ((e.height = e.width), (e.width = o));
      }
      if (
        ((r === 90 || r === 180) && (n ? (e.x += e.width) : (e.x -= e.width)),
        (r === 180 || r === 270) && (n ? (e.y += e.height) : (e.y -= e.height)),
        n && (r === 90 || r === 270))
      ) {
        var a = e.height;
        ((e.height = e.width), (e.width = a));
      }
    }
    i.default = e;
  },
  66,
);
