__d(
  "isRoomsURI",
  [],
  function (t, n, r, o, a, i) {
    var e = ["https"];
    function l(t) {
      var n;
      if (t.isEmpty() && t.toString() !== "#") return !1;
      var r = (n = t.getDomain()) == null ? void 0 : n.toLowerCase();
      return !r && !t.getProtocol()
        ? !1
        : e.indexOf(t.getProtocol()) !== -1 &&
            (r === "msngr.com" ||
              r === "fbaud.io" ||
              r === "fb.audio" ||
              r.endsWith(".msngr.com") ||
              r.endsWith(".fbaud.io") ||
              r.endsWith(".fb.audio"));
    }
    i.default = l;
  },
  66,
);
