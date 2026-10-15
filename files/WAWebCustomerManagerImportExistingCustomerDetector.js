__d(
  "WAWebCustomerManagerImportExistingCustomerDetector",
  [
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerImportContactClassifier",
    "WAWebCustomerManagerImportErrorMessage",
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
              var t = e.lid,
                s = e.phone.replace(/\D/g, "");
              if (t != null && s !== "") {
                var p = o("WAJids").interpretAndValidateJid(
                    o("WAJids").toPhoneUserJid(s),
                  ),
                  _ = e.verifiedPhoneJid;
                if (p.jidType !== "phoneUser") {
                  (d++,
                    c.push(
                      h(
                        e,
                        o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError
                          .PHONE_DATA_OWNER_UNVERIFIED,
                      ),
                    ));
                  return;
                }
                if (_ == null) {
                  (m++,
                    c.push(
                      h(
                        e,
                        o("WAWebCustomerManagerImportErrorMessage")
                          .CustomerManagerImportConflictError
                          .CUSTOMER_DATA_LOOKUP_FAILED,
                      ),
                    ));
                  return;
                }
                (l.set(e, [p.userJid, _]), a.add(s), i.add(_));
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
            f = yield o(
              "WAWebCustomerManagerImportContactClassifier",
            ).classifyContacts(u, p),
            g = yield _(f.validContacts, l);
          return {
            errorList: []
              .concat(c, f.errorList, g.errorList)
              .sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              }),
            validContacts: g.validContacts,
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              g(
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
              g(
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
          var m = g(
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
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r) {
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
            ? o.push(h(e, r))
            : a.push(e);
        }),
        { errorList: o, validContacts: a }
      );
    }
    function h(e, t) {
      var n;
      return {
        contactIndex: null,
        errorType: t,
        rowData: babelHelpers.extends({}, (n = e.rawRow) != null ? n : {}),
        rowIndex: e.rowIndex,
        type: "error",
      };
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebContactManagerCustomerProfilesQuery",
          ).fetchCompleteCustomerProfileRecords({
            candidateLids: e.map(o("WAJids").lidFromLidUserJid),
          });
          return t != null
            ? new Set(
                t.map(function (e) {
                  return e.chatJid;
                }),
              )
            : null;
        })),
        C.apply(this, arguments)
      );
    }
    ((l.detectExistingCustomers = m), (l.fetchExistingProfileLids = y));
  },
  98,
);
