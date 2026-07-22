__d(
  "WAWebHatchApprovalArtifact",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^space\.(.+)\.reader$/;
    function l(e) {
      var t = c(e.spaceDisplayName);
      if (t != null) return t;
      var n = u(e.policySubject);
      if (n != null) return s(n);
      var r = c(e.workload);
      return r != null ? s(r) : null;
    }
    function s(e) {
      return e
        .split(/[\s._-]+/)
        .filter(function (e) {
          return e !== "";
        })
        .map(function (e) {
          return e.charAt(0).toLocaleUpperCase() + e.slice(1);
        })
        .join(" ");
    }
    function u(t) {
      var n = c(t);
      if (n == null) return null;
      var r = e.exec(n);
      return r != null ? r[1] : null;
    }
    function c(e) {
      if (e == null) return null;
      var t = e.trim();
      return t === "" ? null : t;
    }
    i.default = l;
  },
  66,
);
