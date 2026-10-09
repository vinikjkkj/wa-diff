__d(
  "WAWebCustomerManagerImportSavedDataLookup",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerImportLeadStageLookup",
    "WAWebCustomerManagerImportLidUtils",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a, i;
          r === void 0 && (r = []);
          var l = h(r),
            s = yield y(e),
            u =
              s != null
                ? yield (_ || (_ = n("Promise"))).all([b(e, t, l), S(e), L(e)])
                : [null, null, null],
            c = u[0],
            d = u[1],
            m = u[2],
            p = new Map();
          for (var f of s != null ? s : []) {
            var g = o("WAWebCustomerManagerImportLidUtils").toBareLid(
              f.chatJid,
            );
            g != null && p.set(g, f);
          }
          return {
            complete: s != null && c != null && d != null && m != null,
            leadStagesByLid: m != null ? m : new Map(),
            legacyByLid: d != null ? d : new Map(),
            physicalNamesByPhoneJid:
              (a = c == null ? void 0 : c.physicalNamesByPhoneJid) != null
                ? a
                : new Map(),
            profiles: p,
            savedNamesByContactRowId:
              (i = c == null ? void 0 : c.savedNamesByContactRowId) != null
                ? i
                : new Map(),
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = [];
      for (var n of e) {
        var a = o("WAWebWidFactory").createUserWidOrThrow(n);
        if (a.isLid()) throw r("err")("Expected verified phone JID");
        t.push(a.toJid(), a.toString());
      }
      return t;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
              "WAWebContactManagerCustomerProfilesQuery",
            ).fetchCompleteCustomerProfileRecords({ candidateLids: t });
            return (
              n == null &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[cm:import] incomplete existing-customer lookup for ",
                        " candidates; verified rows require a retry",
                      ])),
                    t.length,
                  )
                  .sendLogs("cm-import-saved-data-profile-lookup-incomplete"),
              n
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] existing-customer lookup failed for ",
                      " candidates; verified rows require a retry",
                    ])),
                  t.length,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-saved-data-profile-lookup-failed"),
              null
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          try {
            var i = e.map(o("WAJids").toLidUserJid),
              l = new Set();
            for (var s of t) {
              var d = s.replace(/\D/g, "");
              if (d !== "") {
                var m = o("WAWebWidFactory").createUserWidOrThrow(
                  o("WAJids").toPhoneUserJid(d),
                );
                (l.add(m.toJid()), l.add(m.toString()));
              }
            }
            for (var p of a) l.add(p);
            var f = Array.from(l),
              g = yield (_ || (_ = n("Promise"))).all([
                r("WAWebLidAwareContactsDB").bulkGet(i),
                r("WAWebLidAwareContactsDB").bulkGetPhysicalPhoneRows(f),
              ]),
              h = g[0],
              y = g[1];
            if (h.length !== i.length || y.length !== f.length)
              return (
                o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[cm:import] incomplete saved contact lookup; verified rows require a retry",
                      ])),
                  )
                  .sendLogs("cm-import-saved-contact-lookup-incomplete"),
                null
              );
            var C = new Map();
            h.forEach(function (e, t) {
              var n,
                r =
                  e == null || (n = e.name) == null
                    ? void 0
                    : n.trim().replace(/\s+/g, " ");
              r != null && r !== "" && C.set(i[t], r);
            });
            var b = new Map();
            return (
              y.forEach(function (e, t) {
                var n,
                  r =
                    e == null || (n = e.name) == null
                      ? void 0
                      : n.trim().replace(/\s+/g, " ");
                r != null && r !== "" && b.set(f[t], r);
              }),
              { physicalNamesByPhoneJid: b, savedNamesByContactRowId: C }
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] saved contact lookup failed; verified rows require a retry",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-saved-contact-lookup-failed"),
              null
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
              "WAWebDBCustomerDataDatabaseApi",
            ).getCustomerDataByChatJids(e.map(o("WAJids").toLidUserJid));
            if (t.length !== e.length)
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[cm:import] incomplete legacy customer data lookup; verified rows require a retry",
                      ])),
                  )
                  .sendLogs("cm-import-legacy-data-lookup-incomplete"),
                null
              );
            var n = new Map();
            return (
              t.forEach(function (t, r) {
                t != null && n.set(e[r], t);
              }),
              n
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] legacy customer data lookup failed; verified rows require a retry",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-legacy-data-lookup-failed"),
              null
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o(
              "WAWebCustomerManagerImportLeadStageLookup",
            ).readCustomerManagerImportLeadStages(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] local Lead stage lookup failed; verified rows require a retry",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("cm-import-lead-stage-lookup-failed"),
              null
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    l.loadCustomerLookup = f;
  },
  98,
);
