__d(
  "WAWebCustomerManagerImportContactClassifier",
  [
    "Promise",
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportConflictDetector",
    "WAWebCustomerManagerImportErrorMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 10;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = [],
            o = [],
            a = new Map(t.savedNamesByContactRowId);
          for (var i of t.physicalNamesByPhoneJid) {
            var l = i[0],
              s = i[1];
            a.set(l, s);
          }
          yield h(e, t, a, 0, o);
          for (var u of o)
            u.kind === "valid" ? n.push(u.contact) : r.push(u.error);
          return (f(o), { errorList: r, validContacts: n });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
      g(t, n);
    }
    function g(t, n) {
      var r = function (n) {
          var e;
          return (e = t.get(n)) != null ? e : 0;
        },
        a = r("unowned-phone-note"),
        i = r("unresolved-lead-stage-owner"),
        l = r("missing-lead-stage-result"),
        d = r("saved-data-lookup-failed");
      (a > 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] saved phone data owner unverified for ",
                " rows; held for review",
              ])),
            a,
          )
          .sendLogs("cm-import-pn-data-owner-unverified"),
        i > 0 &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved Lead stage owner unverified for ",
                  " rows; held for review",
                ])),
              i,
            )
            .sendLogs("cm-import-lead-stage-owner-unverified"),
        l > 0 &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved Lead stage result missing for ",
                  " rows; held for retry",
                ])),
              l,
            )
            .sendLogs("cm-import-lead-stage-result-missing"),
        n != null &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] saved customer data lookup failed for ",
                  " rows; held for retry",
                ])),
              d,
            )
            .catching(n)
            .sendLogs("cm-import-saved-data-lookup-failed"));
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, o, a) {
            if (!(o >= e.length)) {
              var i = yield (d || (d = n("Promise"))).all(
                e.slice(o, o + m).map(function (e) {
                  return C(e, t, r);
                }),
              );
              (a.push.apply(a, i), yield h(e, t, r, o + m, a));
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.lid;
          if (a == null) return { kind: "valid", contact: e };
          if (!t.complete)
            return {
              kind: "error",
              error: v(
                e,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
            };
          var i = t.leadStagesByLid.get(a);
          if (i == null)
            return {
              kind: "error",
              error: v(
                e,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
              diagnostic: { reason: "missing-lead-stage-result" },
            };
          try {
            var l = t.profiles.get(a),
              s = yield o(
                "WAWebCustomerManagerImportConflictDetector",
              ).getConflictingCustomerFields(e, a, {
                complete: t.complete,
                legacy: t.legacyByLid.get(a),
                localLeadStage: i,
                profile: l,
                savedNames: n,
              });
            return l == null && s.length === 0
              ? { kind: "valid", contact: e }
              : {
                  kind: "error",
                  error: v(
                    e,
                    s.length > 0
                      ? o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError.MERGE_CONFLICT
                      : o("WAWebContactImportTypedError").ExistingContactError
                          .ALREADY_EXISTS,
                    s,
                  ),
                };
          } catch (t) {
            return t instanceof
              o("WAWebCustomerManagerImportConflictDetector")
                .CustomerManagerImportPhoneDataOwnershipError
              ? {
                  kind: "error",
                  error: v(
                    e,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .PHONE_DATA_OWNER_UNVERIFIED,
                  ),
                  diagnostic: { reason: t.reason },
                }
              : {
                  kind: "error",
                  error: v(
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
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
    l.classifyContacts = p;
  },
  98,
);
