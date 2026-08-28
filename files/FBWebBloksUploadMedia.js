__d(
  "FBWebBloksUploadMedia",
  ["cr:15977"],
  function (t, n, r, o, a, i, l) {
    var e = "&",
      s = ")";
    function u(t, r, o, a) {
      var i = a == null ? void 0 : a.get(s),
        l = a == null ? void 0 : a.get(e);
      if (o == null || o === "" || !o.startsWith("blob:")) {
        l != null &&
          t.execute(l, ['Invalid media URI. Expected "blob:" received "' + o]);
        return;
      }
      if (n("cr:15977") == null) {
        l != null && t.execute(l, ["Upload is not supported on this platform"]);
        return;
      }
      window
        .fetch(o)
        .then(function (e) {
          return e.blob();
        })
        .then(function (e) {
          var o = new File([e], "upload.jpg", { type: e.type });
          n("cr:15977")(t, o, i, l, r);
        })
        .catch(function () {
          l != null && t.execute(l, ["Failed to read selected image"]);
        })
        .finally(function () {
          URL.revokeObjectURL(o);
        });
    }
    l.default = u;
  },
  98,
);
