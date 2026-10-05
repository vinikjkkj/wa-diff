__d(
  "WAWebCustomerManagerImportExistingCustomerDetector",
  [
    "WAJids",
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(p),
            n = new Set(),
            r = [];
          if (
            (t.forEach(function (e) {
              e != null && !n.has(e) && (n.add(e), r.push(e));
            }),
            r.length === 0)
          )
            return { errorList: [], validContacts: e };
          var a = yield d(r);
          if (a == null) return { errorList: [], validContacts: e };
          var i = [],
            l = [];
          e.forEach(function (e, n) {
            var r,
              s = t[n];
            if (s == null || !a.has(s)) {
              i.push(e);
              return;
            }
            l.push({
              errorType: o("WAWebContactImportTypedError").ExistingContactError
                .ALREADY_EXISTS,
              rowData: babelHelpers.extends(
                {},
                (r = e.rawRow) != null ? r : {},
              ),
              rowIndex: e.rowIndex,
            });
          });
          var s = l.map(function (e) {
            return babelHelpers.extends({}, e, {
              contactIndex: null,
              type: "error",
            });
          });
          return { errorList: s, validContacts: i };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield f(e);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] existing-customer lookup failed for ",
                      " candidates; importing without duplicate detection",
                    ])),
                  e.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-existing-customer-lookup-failed"),
              null
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      if (t.lid == null) return null;
      var n;
      try {
        n = o("WAWebWidToJid").widToChatJid(
          o("WAWebWidFactory").createUserWidOrThrow(t.lid),
        );
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] failed to derive chatJid from lid=",
                  "",
                ])),
              t.lid,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("cm-import-existing-customer-bad-lid"),
          null
        );
      }
      return _(n);
    }
    function _(e) {
      var t = String(e);
      return t.endsWith(o("WAJids").LID_DOMAIN)
        ? t.slice(0, -o("WAJids").LID_DOMAIN.length)
        : null;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebContactManagerCustomerProfilesQuery",
          ).fetchCompleteCustomerProfileRecords({ candidateLids: e });
          if (t == null) return null;
          var n = new Set();
          return (
            t.forEach(function (e) {
              var t = _(e.chatJid);
              t != null && n.add(t);
            }),
            n
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.detectExistingCustomers = u),
      (l.resolveBareLid = p),
      (l.fetchExistingProfileLids = f));
  },
  98,
);
