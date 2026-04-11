__d(
  "WAWebSearchCollection",
  ["compactMap"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.models = []), (this.models = e));
      }
      var t = e.prototype;
      return (
        (t.query = function (t, n) {
          var e;
          return (
            n != null &&
              n.pageLengthPerModel != null &&
              (e = {
                pagination: { pageLength: n.pageLengthPerModel, page: 0 },
              }),
            r("compactMap")(this.models, function (n) {
              var r = n.query(t, e);
              return r;
            })
          );
        }),
        e
      );
    })();
    l.SearchCollection = e;
  },
  98,
);
