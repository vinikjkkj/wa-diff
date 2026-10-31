__d(
  "WAWebSharableEventMapPickerStore",
  ["WAWebSharableEventCollection", "WAWebSharableEventMapMath"],
  function (t, n, r, o, a, i, l) {
    var e = 12,
      s = {
        center: { latitude: 20, longitude: 0 },
        zoom: o("WAWebSharableEventMapMath").MAP_MIN_ZOOM,
      },
      u = 17;
    function c(e) {
      var t = { camera: d(e), dropKey: 0, selection: { kind: "pin" } },
        n = new Set(),
        r = function (r) {
          ((t = r),
            n.forEach(function (e) {
              return e();
            }));
        };
      return {
        getState: function () {
          return t;
        },
        subscribe: function (t) {
          return (
            n.add(t),
            function () {
              n.delete(t);
            }
          );
        },
        moveCamera: function (n) {
          return r({
            camera: n,
            dropKey: t.dropKey + 1,
            selection: { kind: "pin" },
          });
        },
        select: function (n) {
          if (n.kind === "pin") {
            r(babelHelpers.extends({}, t, { selection: n }));
            return;
          }
          var e = n.place,
            o = e.latitude,
            a = e.longitude;
          r({
            camera: {
              center: { latitude: o, longitude: a },
              zoom: Math.max(t.camera.zoom, u),
            },
            dropKey: t.dropKey + 1,
            selection: n,
          });
        },
      };
    }
    function d(t) {
      var n = t == null ? void 0 : t.latitude,
        r = t == null ? void 0 : t.longitude;
      if (n != null && r != null)
        return { center: { latitude: n, longitude: r }, zoom: u };
      var o = m();
      return o == null ? s : { center: o, zoom: e };
    }
    function m() {
      var e,
        t = null;
      return (
        o("WAWebSharableEventCollection")
          .SharableEventCollection.getModelsArray()
          .forEach(function (e) {
            var n = e.locationLatitude,
              r = e.locationLongitude;
            n != null &&
              r != null &&
              (t == null || e.startTsSec > t.startTsSec) &&
              (t = {
                startTsSec: e.startTsSec,
                center: { latitude: n, longitude: r },
              });
          }),
        (e = t) == null ? void 0 : e.center
      );
    }
    l.createSharableEventMapPickerStore = c;
  },
  98,
);
