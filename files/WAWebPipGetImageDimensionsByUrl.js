__d(
  "WAWebPipGetImageDimensionsByUrl",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = document.createElement("img");
      return ((t.src = e), { width: t.naturalWidth, height: t.naturalHeight });
    }
    i.default = e;
  },
  66,
);
