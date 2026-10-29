__d(
  "WAWebSharableEventChangeFlags",
  ["WAWebSharableEventStorageEnums"],
  function (t, n, r, o, a, i, l) {
    var e = 1e-6;
    function s(e, t) {
      var n = [];
      if (e.startTsSec !== t.startTsSec) {
        var r = new Date(e.startTsSec * 1e3),
          a = new Date(t.startTsSec * 1e3);
        (r.toDateString() !== a.toDateString() &&
          n.push(
            o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
              .DateChanged,
          ),
          (r.getHours() !== a.getHours() ||
            r.getMinutes() !== a.getMinutes()) &&
            n.push(
              o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
                .TimeChanged,
            ));
      }
      return (
        u(e, t) ||
          n.push(
            o("WAWebSharableEventStorageEnums").SharableEventChangeFlag
              .LocationChanged,
          ),
        m(n)
      );
    }
    function u(e, t) {
      return (
        e.locationName === t.locationName &&
        e.locationAddress === t.locationAddress &&
        e.locationWebUrl === t.locationWebUrl &&
        c(e.locationLatitude, t.locationLatitude) &&
        c(e.locationLongitude, t.locationLongitude)
      );
    }
    function c(t, n) {
      return t == null || n == null
        ? t == null && n == null
        : Math.abs(t - n) < e;
    }
    function d(e, t) {
      return Math.floor(e / t) % 2 === 1;
    }
    function m(e) {
      var t = 0;
      for (var n of new Set(e)) t += n;
      return t;
    }
    function p(e, t) {
      return m(
        Array.from(
          o("WAWebSharableEventStorageEnums").SharableEventChangeFlag.members(),
        ).filter(function (n) {
          return d(e, n) || d(t, n);
        }),
      );
    }
    ((l.computeSharableEventChangeFlags = s),
      (l.hasSharableEventChangeFlag = d),
      (l.toSharableEventChangeFlags = m),
      (l.mergeSharableEventChangeFlags = p));
  },
  98,
);
