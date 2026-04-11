__d(
  "WAWebHistorySyncLogUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r, o, a;
      if (e == null) return "";
      var i = (e.msgKey || "").split("_")[2],
        s = l(e.syncType, e.chunkOrder, e.isReupload),
        u =
          (r =
            (o = e.downloadOptions.filehash) == null
              ? void 0
              : o.slice(0, 10)) != null
            ? r
            : (a = e.filehash) == null
              ? void 0
              : a.slice(0, 10);
      return (
        " " +
        s +
        ", id: " +
        i +
        " ## msgCount: " +
        (t != null ? t : "-") +
        ", ## chatCount: " +
        (n != null ? n : "-") +
        ", ## downloadStr: " +
        (u != null ? u : "") +
        " "
      );
    }
    function l(e, t, n) {
      return (
        "type_" +
        (e != null ? e : "none") +
        "_order_" +
        (t != null ? t : "none") +
        "_isReupload_" +
        (n || 0)
      );
    }
    ((i.getHistorySyncLogDetailsString = e),
      (i.getHistorySyncBasicChunkInfoString = l));
  },
  66,
);
