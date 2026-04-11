__d(
  "WAWebQplStorage",
  ["WAWeb-dexie", "WAWebDexieCastTypes"],
  function (t, n, r, o, a, i, l) {
    var e = "qpl-storage";
    function s() {
      return o("WAWebDexieCastTypes").dexieCastToPromise(
        new (r("WAWeb-dexie"))(e).delete(),
      );
    }
    l.destroy = s;
  },
  98,
);
