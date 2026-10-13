__d(
  "WAWebStorageCmd",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      s = new e();
    function u(e, t) {
      e.on("versionchange", function () {
        s.trigger("idb_version_change", t);
      });
    }
    ((l.StorageCmd = s), (l.notifyOnVersionChange = u));
  },
  98,
);
