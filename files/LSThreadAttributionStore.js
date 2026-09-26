__d(
  "LSThreadAttributionStore",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(e, t) {
      var n,
        r,
        o =
          (n = (r = s.get(t)) != null ? r : e) != null
            ? n
            : { type: "MWLSEntrypoint", value: "unknown" };
      return (s.delete(t), o);
    }
    function c(e, t) {
      var n,
        r,
        o =
          (n = (r = s.get(t)) != null ? r : e) != null
            ? n
            : { type: "MWLSEntrypoint", value: "unknown" };
      return o;
    }
    function d(e, t) {
      s.set(e, { type: "MWLSEntrypoint", value: t });
    }
    function m(t, n) {
      var r = (e || (e = o("I64"))).of_string(n);
      s.set(t, { type: "LSThreadAttribution", value: r });
    }
    function p(e) {
      s.set("", { type: "MWLSEntrypoint", value: e });
    }
    function _() {
      var e = s.get("");
      return e == null || e.type === "LSThreadAttribution"
        ? "unknown"
        : e.value;
    }
    ((l.getSourceAndResetAttribution = u),
      (l.getSourceWithoutReset = c),
      (l.setSource = d),
      (l.setLSMessagingThreadAttribution = m),
      (l.setSourceForNewThread = p),
      (l.getSourceForNewThread = _));
  },
  98,
);
