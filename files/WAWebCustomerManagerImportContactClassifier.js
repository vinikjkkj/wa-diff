__d(
  "WAWebCustomerManagerImportContactClassifier",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportConflictDetector",
    "WAWebCustomerManagerImportErrorMessage",
    "WAWebCustomerManagerImportLidUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 10;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = [],
            o = [],
            a = new Map(t.savedNamesByContactRowId);
          for (var i of t.physicalNamesByPhoneJid) {
            var l = i[0],
              s = i[1];
            a.set(l, s);
          }
          yield C(e, t, a, 0, o);
          for (var u of o)
            u.kind === "valid" ? n.push(u.contact) : r.push(u.error);
          return (h(o), { errorList: r, validContacts: n });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = new Map(),
        n = null;
      for (var r of e) {
        var o;
        if (!(r.kind !== "error" || r.diagnostic == null)) {
          var a = r.diagnostic;
          (t.set(a.reason, ((o = t.get(a.reason)) != null ? o : 0) + 1),
            a.reason === "saved-data-lookup-failed" &&
              n == null &&
              (n = a.error));
        }
      }
      y(t, n);
    }
    function y(t, n) {
      var r = function (n) {
          var e;
          return (e = t.get(n)) != null ? e : 0;
        },
        a = r("malformed-verified-jid"),
        i = r("malformed-verified-lid"),
        l = r("unowned-phone-note"),
        p = r("unresolved-lead-stage-owner"),
        _ = r("missing-lead-stage-result"),
        f = r("saved-data-lookup-failed");
      (a > 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] malformed server-verified phone identity for ",
                " rows; held for review",
              ])),
            a,
          )
          .sendLogs("cm-import-verified-phone-jid-malformed"),
        i > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] malformed verified LID for ",
                  " rows; held for review",
                ])),
              i,
            )
            .sendLogs("cm-import-verified-lid-malformed"),
        l > 0 &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved phone data owner unverified for ",
                  " rows; held for review",
                ])),
              l,
            )
            .sendLogs("cm-import-pn-data-owner-unverified"),
        p > 0 &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved Lead stage owner unverified for ",
                  " rows; held for review",
                ])),
              p,
            )
            .sendLogs("cm-import-lead-stage-owner-unverified"),
        _ > 0 &&
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved Lead stage result missing for ",
                  " rows; held for retry",
                ])),
              _,
            )
            .sendLogs("cm-import-lead-stage-result-missing"),
        n != null &&
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved customer data lookup failed for ",
                  " rows; held for retry",
                ])),
              f,
            )
            .catching(n)
            .sendLogs("cm-import-saved-data-lookup-failed"));
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, o, a) {
            if (!(o >= e.length)) {
              var i = yield (p || (p = n("Promise"))).all(
                e.slice(o, o + _).map(function (e) {
                  return v(e, t, r);
                }),
              );
              (a.push.apply(a, i), yield C(e, t, r, o + _, a));
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.lid != null ? o("WAJids").validateLidUserJid(e.lid) : null,
            i =
              a != null
                ? o("WAWebCustomerManagerImportLidUtils").toBareLid(a)
                : null;
          if (i == null)
            return e.lid == null
              ? { kind: "valid", contact: e }
              : {
                  kind: "error",
                  error: R(
                    e,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .PHONE_DATA_OWNER_UNVERIFIED,
                  ),
                  diagnostic: { reason: "malformed-verified-lid" },
                };
          if (!t.complete)
            return {
              kind: "error",
              error: R(
                e,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
            };
          var l = t.leadStagesByLid.get(i);
          if (l == null)
            return {
              kind: "error",
              error: R(
                e,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
              diagnostic: { reason: "missing-lead-stage-result" },
            };
          try {
            var s = t.profiles.get(i),
              u = yield o(
                "WAWebCustomerManagerImportConflictDetector",
              ).getConflictingCustomerFields(e, o("WAJids").toLidUserJid(i), {
                complete: t.complete,
                legacy: t.legacyByLid.get(i),
                localLeadStage: l,
                profile: s,
                savedNames: n,
              });
            return s == null && u.length === 0
              ? { kind: "valid", contact: e }
              : {
                  kind: "error",
                  error: R(
                    e,
                    u.length > 0
                      ? o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError.MERGE_CONFLICT
                      : o("WAWebContactImportTypedError").ExistingContactError
                          .ALREADY_EXISTS,
                    u,
                  ),
                };
          } catch (t) {
            return t instanceof
              o("WAWebCustomerManagerImportConflictDetector")
                .CustomerManagerImportPhoneDataOwnershipError
              ? {
                  kind: "error",
                  error: R(
                    e,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .PHONE_DATA_OWNER_UNVERIFIED,
                  ),
                  diagnostic: { reason: t.reason },
                }
              : {
                  kind: "error",
                  error: R(
                    e,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .CUSTOMER_DATA_LOOKUP_FAILED,
                  ),
                  diagnostic: {
                    reason: "saved-data-lookup-failed",
                    error: r("getErrorSafe")(t),
                  },
                };
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      var r;
      return babelHelpers.extends(
        {},
        n != null && n.length > 0 ? { conflictingFields: n } : {},
        {
          contactIndex: null,
          errorType: t,
          rowData: babelHelpers.extends({}, (r = e.rawRow) != null ? r : {}),
          rowIndex: e.rowIndex,
          type: "error",
        },
      );
    }
    l.classifyContacts = f;
  },
  98,
);
