__d(
  "WebBloksLocalState",
  ["WebBloksDataModule"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.setup = function (t, n, r) {
          var e = o("WebBloksDataModule").getDataEntryInitialValue(n, r);
          return {
            initialValue: e,
            commitToStore: function () {
              return null;
            },
          };
        }),
        e
      );
    })();
    l.WebBloksLocalStateDataModule = e;
  },
  98,
);
