__d(
  "WebBloksLocalState",
  ["WebBloksDataModule"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.setup = function (t, n, r, a) {
          var e = o("WebBloksDataModule").getDataEntryInitialValue(n, a);
          return { initialValue: e };
        }),
        e
      );
    })();
    l.WebBloksLocalStateDataModule = e;
  },
  98,
);
