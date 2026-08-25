__d(
  "WAWebCreateFile",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = n || {},
        o = new Blob(e, r),
        a = o;
      return ((a.name = t), a);
    }
    i.createFile = e;
  },
  66,
);
