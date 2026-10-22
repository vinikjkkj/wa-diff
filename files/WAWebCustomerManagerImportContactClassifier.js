__d(
  "WAWebCustomerManagerImportContactClassifier",
  [
    "Promise",
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebCustomerManagerImportConflictDetector",
    "WAWebCustomerManagerImportErrorMessage",
    "WAWebCustomerManagerImportProfileMerge",
    "WAWebCustomerManagerImportRecordInput",
    "asyncToGeneratorRuntime",
    "err",
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
                  return C({ contact: e, lookup: t, savedNames: r });
                }),
              );
              (a.push.apply(a, i), yield h(e, t, r, o + m, a));
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contact,
            n = e.lookup,
            a = e.savedNames,
            i = t.lid;
          if (i == null) return { kind: "valid", contact: t };
          if (!n.complete)
            return {
              kind: "error",
              error: R(
                t,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
            };
          var l = n.leadStagesByLid.get(i);
          if (l == null)
            return {
              kind: "error",
              error: R(
                t,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              ),
              diagnostic: { reason: "missing-lead-stage-result" },
            };
          try {
            var s = n.profiles.get(i),
              u = yield o(
                "WAWebCustomerManagerImportConflictDetector",
              ).readImportedCustomerMergeState(t, i, {
                complete: n.complete,
                legacy: n.legacyByLid.get(i),
                localLeadStage: l,
                profile: s,
                savedNames: a,
              }),
              c = u.conflictingFields,
              d = u.hasMissingNote,
              m =
                s != null && c.length === 0
                  ? yield v(t, s, n.legacyByLid.get(i), l.stage, a.get(i), d)
                  : { conflictingFields: c, hasMissingData: s == null };
            return m.conflictingFields.length === 0 && m.hasMissingData
              ? { kind: "valid", contact: t }
              : {
                  kind: "error",
                  error: R(
                    t,
                    m.conflictingFields.length > 0
                      ? o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError.MERGE_CONFLICT
                      : o("WAWebContactImportTypedError").ExistingContactError
                          .ALREADY_EXISTS,
                    m.conflictingFields,
                  ),
                };
          } catch (e) {
            return e instanceof
              o("WAWebCustomerManagerImportConflictDetector")
                .CustomerManagerImportPhoneDataOwnershipError
              ? {
                  kind: "error",
                  error: R(
                    t,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .PHONE_DATA_OWNER_UNVERIFIED,
                  ),
                  diagnostic: { reason: e.reason },
                }
              : {
                  kind: "error",
                  error: R(
                    t,
                    o("WAWebCustomerManagerImportErrorMessage")
                      .CustomerManagerImportConflictError
                      .CUSTOMER_DATA_LOOKUP_FAILED,
                  ),
                  diagnostic: {
                    reason: "saved-data-lookup-failed",
                    error: r("getErrorSafe")(e),
                  },
                };
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = o(
                "WAWebCustomerManagerImportRecordInput",
              ).buildCustomerRecordInput(e),
              u = {
                canBackfillLeadStage: s.leadStage != null && a != null,
                leadStageToBackfill: a != null ? a : s.leadStage,
                profileName:
                  i != null
                    ? i
                    : o(
                        "WAWebCustomerManagerImportRecordInput",
                      ).getImportedCustomerName(e),
              };
            if (
              !l &&
              !o(
                "WAWebCustomerManagerImportProfileMerge",
              ).hasPotentialImportedProfileFields(s, t, u)
            )
              return { conflictingFields: [], hasMissingData: !1 };
            var c = yield o(
              "WAWebContactManagerCustomerProfileQuery",
            ).fetchCustomerProfile(s.chatJid);
            if (c == null)
              throw r("err")(
                "[cm:import] existing customer profile unavailable",
              );
            var d = o(
              "WAWebCustomerManagerImportConflictDetector",
            ).getConflictingCustomerFieldsByValue(e, c, n, a);
            if (d.length > 0)
              return { conflictingFields: d, hasMissingData: !1 };
            var m = o(
              "WAWebCustomerManagerImportProfileMerge",
            ).getMissingImportedProfileFields(s, c, u);
            return {
              conflictingFields: d,
              hasMissingData:
                l ||
                Object.values(m).some(function (e) {
                  return e != null;
                }),
            };
          },
        )),
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
    l.classifyContacts = p;
  },
  98,
);
