__d(
  "WAWebContactManagerImportUsernameVerifier",
  [
    "WALogger",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "WAWebContactManagerImportTemplateUtils",
    "WAWebContactManagerUsernamesQuery",
    "WAWebWidFactory",
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
          var t = e.map(m),
            n = [],
            a = new Set();
          if (
            (t.forEach(function (e) {
              e != null && !a.has(e.lid) && (a.add(e.lid), n.push(e.lid));
            }),
            n.length === 0)
          )
            return { errorList: [], validContacts: e };
          var i;
          try {
            i = yield o(
              "WAWebContactManagerUsernamesQuery",
            ).fetchUsernamesByLid(n);
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] username lookup failed for ",
                      " rows; importing without username verification",
                    ])),
                  n.length,
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-username-lookup-failed"),
              { errorList: [], validContacts: e }
            );
          }
          var l = [],
            u = [];
          e.forEach(function (e, n) {
            var r,
              a = t[n];
            if (a == null || !i.has(a.lid)) {
              l.push(e);
              return;
            }
            var s = i.get(a.lid);
            if (s != null && p(s) === p(a.typed)) {
              l.push(d(e, s));
              return;
            }
            u.push({
              errorType: o("WAWebContactImportTypedError").UsernameError
                .MISMATCH,
              rowData: babelHelpers.extends(
                {},
                (r = e.rawRow) != null ? r : {},
              ),
              rowIndex: e.rowIndex,
            });
          });
          var c = u.map(function (e) {
            return babelHelpers.extends({}, e, {
              contactIndex: null,
              type: "error",
            });
          });
          return { errorList: c, validContacts: l };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n,
        r = e.rawRow;
      if (r == null) return e;
      var a = Object.keys(r).find(function (e) {
        var t = e.toLowerCase();
        return (
          t === "username" ||
          t ===
            o(
              "WAWebContactManagerImportTemplateUtils",
            ).FBT_USERNAME.toLowerCase()
        );
      });
      return a == null || r[a] === t
        ? e
        : babelHelpers.extends({}, e, {
            rawRow: babelHelpers.extends({}, r, ((n = {}), (n[a] = t), n)),
          });
    }
    function m(t) {
      var n = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
          t.rawRow,
          [
            "Username",
            o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME,
          ],
        ),
        a = t.lid;
      if (n == null || a == null) return null;
      try {
        o("WAWebWidFactory").createUserWidOrThrow(a);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] username check skipped: unparseable lid",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("cm-import-username-bad-lid"),
          null
        );
      }
      return { lid: a, typed: n };
    }
    function p(e) {
      return e.trim().replace(/^@/, "").toLowerCase();
    }
    l.detectUsernameMismatches = u;
  },
  98,
);
