__d(
  "LSServerProgramHardening",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[A-Za-z_][A-Za-z0-9_]*$/;
    function s() {
      return r("justknobx")._("8595");
    }
    function u() {
      return s() ? (r("justknobx")._("8596") ? "enforce" : "log") : null;
    }
    function c(t) {
      return e.test(t);
    }
    function d() {
      return s() ? (r("justknobx")._("8652") ? "enforce" : "log") : null;
    }
    function m() {
      return s() ? (r("justknobx")._("8653") ? "enforce" : "log") : null;
    }
    ((l.isServerProgramHardeningEnabled = s),
      (l.getRestrictedOpsMode = u),
      (l.isCanonicalCallableName = c),
      (l.getKeyReturningSprocsMode = d),
      (l.getSecureKeyReturningSprocsMode = m));
  },
  98,
);
