__d(
  "fileSliceName",
  ["UserAgent_DEPRECATED"],
  function (t, n, r, o, a, i, l) {
    var e = "slice",
      s;
    (s = o("UserAgent_DEPRECATED").chrome())
      ? s < 21 && (e = "webkitSlice")
      : (s = o("UserAgent_DEPRECATED").firefox())
        ? s < 13 && (e = "mozSlice")
        : (s = o("UserAgent_DEPRECATED").safari()) ||
          (o("UserAgent_DEPRECATED").webkit() && (e = "webkitSlice"));
    var u = e;
    l.default = u;
  },
  98,
);
