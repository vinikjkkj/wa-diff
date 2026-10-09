__d(
  "WAWebCustomerManagerImportExistingCustomerDetector",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerImportContactClassifier",
    "WAWebCustomerManagerImportErrorMessage",
    "WAWebCustomerManagerImportLidUtils",
    "WAWebCustomerManagerImportSavedDataLookup",
    "WAWebDBCustomerDataDatabaseApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = new Set(),
            r = [],
            a = new Set(),
            i = new Set(),
            l = new Map(),
            u = [],
            c = [],
            d = 0,
            m = 0;
          if (
            (t.forEach(function (e) {
              var t = _(e),
                s = e.phone.replace(/\D/g, "");
              if (t != null && s !== "") {
                var p = o("WAJids").interpretAndValidateJid(
                    o("WAJids").toPhoneUserJid(s),
                  ),
                  g = f(e.verifiedPhoneJid);
                if (
                  p.jidType !== "phoneUser" ||
                  (e.verifiedPhoneJid != null && g == null)
                ) {
                  (d++,
                    c.push(
                      C(
                        e,
                        o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError
                          .PHONE_DATA_OWNER_UNVERIFIED,
                      ),
                    ));
                  return;
                }
                if (g == null) {
                  (m++,
                    c.push(
                      C(
                        e,
                        o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError
                          .CUSTOMER_DATA_LOOKUP_FAILED,
                      ),
                    ));
                  return;
                }
                (l.set(e, [p.userJid, g]), a.add(s), i.add(g));
              }
              (u.push(e), t != null && !n.has(t) && (n.add(t), r.push(t)));
            }),
            d > 0 &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] verified phone identity malformed for ",
                      " rows; held for review",
                    ])),
                  d,
                )
                .sendLogs("cm-import-verified-phone-identity-malformed"),
            m > 0 &&
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] server-verified phone missing for ",
                      " rows; held for retry",
                    ])),
                  m,
                )
                .sendLogs("cm-import-verified-phone-identity-missing"),
            u.length === 0)
          )
            return {
              errorList: c.sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
              validContacts: [],
            };
          var p =
              r.length > 0
                ? yield o(
                    "WAWebCustomerManagerImportSavedDataLookup",
                  ).loadCustomerLookup(r, Array.from(a), Array.from(i))
                : {
                    complete: !1,
                    leadStagesByLid: new Map(),
                    legacyByLid: new Map(),
                    physicalNamesByPhoneJid: new Map(),
                    profiles: new Map(),
                    savedNamesByContactRowId: new Map(),
                  },
            h = yield o(
              "WAWebCustomerManagerImportContactClassifier",
            ).classifyContacts(u, p),
            y = yield g(h.validContacts, l);
          return {
            errorList: []
              .concat(c, h.errorList, y.errorList)
              .sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
            validContacts: y.validContacts,
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.lid != null ? o("WAJids").validateLidUserJid(e.lid) : null;
      return t != null
        ? o("WAWebCustomerManagerImportLidUtils").toBareLid(t)
        : null;
    }
    function f(e) {
      if (e == null) return null;
      var t = e.replace(/@c\.us$/, "@s.whatsapp.net"),
        n = o("WAJids").interpretAndValidateJid(t);
      return n.jidType === "phoneUser" ? n.userJid : null;
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Set(),
            a = 0;
          if (
            (e.forEach(function (e) {
              var r = t.get(e);
              r != null &&
                (a++,
                r.forEach(function (e) {
                  return n.add(e);
                }));
            }),
            n.size === 0)
          )
            return { errorList: [], validContacts: e };
          var i = Array.from(n),
            l;
          try {
            l = yield o(
              "WAWebDBCustomerDataDatabaseApi",
            ).getCustomerDataByChatJids(i);
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] phone customer data lookup failed for ",
                      " rows; held for retry",
                    ])),
                  a,
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("cm-import-pn-customer-data-lookup-failed"),
              y(
                e,
                t,
                null,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              )
            );
          }
          if (l.length !== i.length)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] phone customer data lookup incomplete for ",
                      " rows; held for retry",
                    ])),
                  a,
                )
                .sendLogs("cm-import-pn-customer-data-lookup-incomplete"),
              y(
                e,
                t,
                null,
                o("WAWebCustomerManagerImportErrorMessage")
                  .CustomerManagerImportConflictError
                  .CUSTOMER_DATA_LOOKUP_FAILED,
              )
            );
          var s = new Set();
          l.forEach(function (e, t) {
            e != null && s.add(i[t]);
          });
          var m = y(
            e,
            t,
            s,
            o("WAWebCustomerManagerImportErrorMessage")
              .CustomerManagerImportConflictError.PHONE_DATA_OWNER_UNVERIFIED,
          );
          return (
            m.errorList.length > 0 &&
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] saved phone customer data owner unverified for ",
                      " rows; held for review",
                    ])),
                  m.errorList.length,
                )
                .sendLogs("cm-import-pn-customer-data-owner-unverified"),
            m
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      var o = [],
        a = [];
      return (
        e.forEach(function (e) {
          var i = t.get(e);
          i != null &&
          (n == null ||
            i.some(function (e) {
              return n.has(e);
            }))
            ? o.push(C(e, r))
            : a.push(e);
        }),
        { errorList: o, validContacts: a }
      );
    }
    function C(e, t) {
      var n;
      return {
        contactIndex: null,
        errorType: t,
        rowData: babelHelpers.extends({}, (n = e.rawRow) != null ? n : {}),
        rowIndex: e.rowIndex,
        type: "error",
      };
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebContactManagerCustomerProfilesQuery",
          ).fetchCompleteCustomerProfileRecords({ candidateLids: e });
          if (t == null) return null;
          var n = new Set();
          return (
            t.forEach(function (e) {
              var t = o("WAWebCustomerManagerImportLidUtils").toBareLid(
                e.chatJid,
              );
              t != null && n.add(t);
            }),
            n
          );
        })),
        v.apply(this, arguments)
      );
    }
    ((l.detectExistingCustomers = m),
      (l.resolveBareLid = _),
      (l.fetchExistingProfileLids = b));
  },
  98,
);
