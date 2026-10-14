__d(
  "WAWebCustomerManagerImportPhoneRowMerge",
  [
    "WAWebContactImportFileProcessor",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n = new Map(),
        r = new Map();
      return (
        e.forEach(function (e) {
          var a,
            i = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
              e.phone,
            ),
            l = n.get(i);
          if (l == null) {
            (i !== "" && n.set(i, t.length), t.push(e), r.set(e.rowIndex, 1));
            return;
          }
          var c = t[l];
          ((t[l] = babelHelpers.extends({}, c, {
            firstName: s(c.firstName, e.firstName),
            lastName: s(c.lastName, e.lastName),
            rawRow: u(c.rawRow, e.rawRow),
          })),
            r.set(c.rowIndex, ((a = r.get(c.rowIndex)) != null ? a : 1) + 1));
        }),
        { contacts: t, sourceRowCounts: r }
      );
    }
    function s(e, t) {
      return e != null && e.trim() !== "" ? e : t;
    }
    function u(e, t) {
      var n = {},
        r = new Map();
      for (var a of [e, t]) {
        var i = a != null ? a : {};
        for (var l of Object.entries(i)) {
          var s = l[0],
            u = l[1],
            d = s.toLowerCase(),
            m =
              d ===
              o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).FBT_EMAIL.toLowerCase()
                ? "email"
                : d,
            p = r.get(m);
          p == null ? ((n[s] = u), r.set(m, s)) : c(m, n[p], u) && (n[p] = u);
        }
      }
      return n;
    }
    function c(e, t, n) {
      var r = t.trim(),
        a = n.trim();
      return r === ""
        ? a !== ""
        : e === "email" &&
            !o("WAWebCustomerManagerImportEmailWarnings").isValidImportEmail(
              r,
            ) &&
            o("WAWebCustomerManagerImportEmailWarnings").isValidImportEmail(a);
    }
    l.mergeImportedPhoneRows = e;
  },
  98,
);
