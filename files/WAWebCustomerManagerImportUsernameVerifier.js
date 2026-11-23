__d(
  "WAWebCustomerManagerImportUsernameVerifier",
  [
    "WALogger",
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerManagerUsernamesQuery",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.map(c),
        a = [],
        i = new Set();
      if (
        (n.forEach(function (e) {
          e != null &&
            !i.has(e.lid) &&
            (i.add(e.lid), a.push({ lid: e.lid, expectedUsername: e.typed }));
        }),
        a.length === 0)
      )
        return { errorList: [], validContacts: t };
      var l;
      try {
        l = await o("WAWebCustomerManagerUsernamesQuery").fetchUsernamesByLid(
          a,
        );
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[cm:import] username lookup failed for ",
                  " rows; importing without username verification",
                ])),
              a.length,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("cm-import-username-lookup-failed"),
          { errorList: [], validContacts: t }
        );
      }
      var s = [],
        m = [];
      return (
        t.forEach(function (e, t) {
          var r,
            a = n[t];
          if (a == null || !l.has(a.lid)) {
            s.push(e);
            return;
          }
          var i = l.get(a.lid);
          if (i != null && d(i) === d(a.typed)) {
            s.push(u(e, i));
            return;
          }
          m.push({
            errorType: o("WAWebContactImportTypedError").UsernameError.MISMATCH,
            rowData: babelHelpers.extends({}, (r = e.rawRow) != null ? r : {}),
            rowIndex: e.rowIndex,
            contactIndex: null,
            type: "error",
          });
        }),
        { errorList: m, validContacts: s }
      );
    }
    function u(e, t) {
      var n,
        r = e.rawRow;
      if (r == null) return e;
      var a = Object.keys(r).find(function (e) {
        var t = e.toLowerCase();
        return (
          t === "username" ||
          t ===
            o(
              "WAWebCustomerManagerImportTemplateUtils",
            ).FBT_USERNAME.toLowerCase()
        );
      });
      return a == null || r[a] === t
        ? e
        : babelHelpers.extends({}, e, {
            rawRow: babelHelpers.extends({}, r, ((n = {}), (n[a] = t), n)),
          });
    }
    function c(e) {
      var t = o(
          "WAWebCustomerManagerImportTemplateUtils",
        ).readCustomerManagerImportColumn(e, "username"),
        n = e.lid;
      return t == null || n == null ? null : { lid: n, typed: t };
    }
    function d(e) {
      return e.trim().replace(/^@/, "").toLowerCase();
    }
    l.detectUsernameMismatches = s;
  },
  98,
);
