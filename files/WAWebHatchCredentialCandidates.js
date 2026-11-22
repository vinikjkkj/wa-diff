__d(
  "WAWebHatchCredentialCandidates",
  ["WAWebHatchDecisionKinds", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
          o("WAWebHatchJsonReaders").readBool(e, "ok") === !0
            ? o("WAWebHatchJsonReaders").readObject(e, "result")
            : e,
        n = o("WAWebHatchJsonReaders").readObject(
          o("WAWebHatchJsonReaders").readObject(t, "approval"),
          "browser_credential_selection",
        ),
        r = o("WAWebHatchJsonReaders").readArray(n, "candidates");
      return r == null
        ? null
        : {
            origin: o("WAWebHatchJsonReaders").trimToNull(
              o("WAWebHatchJsonReaders").readTrimmedString(n, "origin"),
            ),
            candidates: r.map(s).filter(Boolean),
          };
    }
    function s(e) {
      var t,
        n,
        r = (n = o("WAWebHatchJsonReaders")).trimToNull(
          n.readTrimmedString(e, "credential_id"),
        ),
        a = n.trimToNull(n.readTrimmedString(e, "label"));
      return r == null || a == null
        ? null
        : {
            credentialId: r,
            label: a,
            decisionKinds: new Set(
              ((t = o("WAWebHatchJsonReaders").readArray(
                e,
                "decision_options",
              )) != null
                ? t
                : []
              ).filter(function (e) {
                return typeof e == "string";
              }),
            ),
          };
    }
    function u(e, t) {
      var n = e.credentialSelection;
      return n == null || t == null
        ? e.decisionOptions
        : n.decisionOptions.filter(function (e) {
            return (
              o("WAWebHatchDecisionKinds").isHatchDenyKind(e.kind) ||
              t.decisionKinds.has(e.kind)
            );
          });
    }
    function c(e, t) {
      return t.some(function (t) {
        return (
          o("WAWebHatchDecisionKinds").isHatchAllowKind(t.kind) &&
          e.decisionKinds.has(t.kind)
        );
      });
    }
    ((l.decodeHatchCredentialCandidates = e),
      (l.hatchCredentialDecisionOptions = u),
      (l.hatchCredentialCanAllow = c));
  },
  98,
);
