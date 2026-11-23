__d(
  "WAFlowsNativeExperienceUtils",
  ["$InternalEnum", "WAFlowsMediaPicker.react"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["BYTES", "KB", "MB"]),
      s = 1024,
      u = 1024;
    function c(e, t) {
      var n = d(e, t);
      return n.fileSize + " " + n.unit;
    }
    function d(t, n) {
      var r = t;
      switch (n) {
        case e.BYTES:
          r = t / s;
          break;
        case e.KB:
          r = t;
          break;
        case e.MB:
          r = t * u;
          break;
      }
      if (r < u) return { fileSize: p(r), unit: e.KB };
      var o = r / u;
      return { fileSize: p(o), unit: e.MB };
    }
    function m(e) {
      var t,
        n = (t = e == null ? void 0 : e.lastIndexOf(".")) != null ? t : -1;
      return n === -1 ? "" : e.substring(n + 1);
    }
    function p(e) {
      return e % 1 === 0 ? e : parseFloat(e.toFixed(2));
    }
    function _(e) {
      return (
        e !== null &&
        typeof e == "object" &&
        !Array.isArray(e) &&
        "__wa_flows_native_component_hint__" in e &&
        "__wa_flows_uploaded_media__" in e &&
        e.__wa_flows_native_component_hint__ ===
          o("WAFlowsMediaPicker.react").NATIVE_COMPONENTS_ID
      );
    }
    ((l.Units = e),
      (l.BYTES_PER_KB = s),
      (l.formatFileSize = c),
      (l.getFileSizeUnit = d),
      (l.getMediaExtn = m),
      (l.isMediaPickerFormValue = _));
  },
  98,
);
