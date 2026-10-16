__d(
  "WAWebCustomerManagerImportSavedDataLookup",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebContactImportFileProcessor",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerImportLeadStageLookup",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
          var o, a;
          r === void 0 && (r = []);
          var i = h(r),
            l = yield y(e),
            s =
              l != null
                ? yield (_ || (_ = n("Promise"))).all([b(e, t, i), S(e), L(e)])
                : [null, null, null],
            u = s[0],
            c = s[1],
            d = s[2],
            m = new Map(
              (l != null ? l : []).map(function (e) {
                return [e.chatJid, e];
              }),
            );
          return {
            complete: l != null && u != null && c != null && d != null,
            leadStagesByLid: d != null ? d : new Map(),
            legacyByLid: c != null ? c : new Map(),
            physicalNamesByPhoneJid:
              (o = u == null ? void 0 : u.physicalNamesByPhoneJid) != null
                ? o
                : new Map(),
            profiles: m,
            savedNamesByContactRowId:
              (a = u == null ? void 0 : u.savedNamesByContactRowId) != null
                ? a
                : new Map(),
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return e.flatMap(function (e) {
        var t = o("WAWebWidFactory").createUserWidOrThrow(e);
        return [t.toJid(), t.toString()];
      });
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
            ).fetchCompleteCustomerProfileRecords({
              candidateLids: t.map(o("WAJids").lidFromLidUserJid),
            });
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
            var i = new Set();
            for (var l of t) {
              var s = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                l,
              );
              if (s !== "") {
                var d = o("WAWebWidFactory").createUserWidOrThrow(
                  o("WAJids").toPhoneUserJid(s),
                );
                (i.add(d.toJid()), i.add(d.toString()));
              }
            }
            for (var m of a) i.add(m);
            var p = Array.from(i),
              f = yield (_ || (_ = n("Promise"))).all([
                r("WAWebLidAwareContactsDB").bulkGet(e),
                r("WAWebLidAwareContactsDB").bulkGetPhysicalPhoneRows(p),
              ]),
              g = f[0],
              h = f[1];
            if (g.length !== e.length || h.length !== p.length)
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
            var y = new Map();
            g.forEach(function (t, n) {
              var r,
                o =
                  t == null || (r = t.name) == null
                    ? void 0
                    : r.trim().replace(/\s+/g, " ");
              o != null && o !== "" && y.set(e[n], o);
            });
            var C = new Map();
            return (
              h.forEach(function (e, t) {
                var n,
                  r =
                    e == null || (n = e.name) == null
                      ? void 0
                      : n.trim().replace(/\s+/g, " ");
                r != null && r !== "" && C.set(p[t], r);
              }),
              { physicalNamesByPhoneJid: C, savedNamesByContactRowId: y }
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
            ).getCustomerDataByChatJids(e);
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
