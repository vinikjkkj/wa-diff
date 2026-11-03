__d(
  "WAWebSharableEventMapPickerStore",
  [
    "WAWebSharableEventCollection",
    "WAWebSharableEventExternalStore",
    "WAWebSharableEventMapMath",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 12,
      s = {
        center: { latitude: 20, longitude: 0 },
        zoom: o("WAWebSharableEventMapMath").MAP_MIN_ZOOM,
      },
      u = 17;
    function c(e) {
      var t = o("WAWebSharableEventExternalStore").createSharableEventStore({
        camera: d(e),
        dropKey: 0,
        selection: { kind: "pin" },
      });
      return {
        getState: t.get,
        subscribe: t.subscribe,
        moveCamera: function (n) {
          return t.set({
            camera: n,
            dropKey: t.get().dropKey + 1,
            selection: { kind: "pin" },
          });
        },
        select: function (n) {
          var e = t.get();
          if (n.kind === "pin") {
            t.set(babelHelpers.extends({}, e, { selection: n }));
            return;
          }
          var r = n.place,
            o = r.latitude,
            a = r.longitude;
          t.set({
            camera: {
              center: { latitude: o, longitude: a },
              zoom: Math.max(e.camera.zoom, u),
            },
            dropKey: e.dropKey + 1,
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
