__d(
  "WAWebContactManagerImportExistingCustomerDetector",
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
          var t = e.map(d),
            n = new Set(),
            r = [];
          if (
            (t.forEach(function (e) {
              e != null && !n.has(e) && (n.add(e), r.push(e));
            }),
            r.length === 0)
          )
            return { errorList: [], validContacts: e };
          var a = yield p(r);
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
    function d(t) {
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
      return m(n);
    }
    function m(e) {
      var t = String(e);
      return t.endsWith(o("WAJids").LID_DOMAIN)
        ? t.slice(0, -o("WAJids").LID_DOMAIN.length)
        : null;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
                "WAWebContactManagerCustomerProfilesQuery",
              ).fetchCustomerProfileRecords({ candidateLids: e }),
              n = new Set();
            return (
              t.forEach(function (e) {
                var t = m(e.chatJid);
                t != null && n.add(t);
              }),
              n
            );
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
        _.apply(this, arguments)
      );
    }
    l.detectExistingCustomers = u;
  },
  98,
);
