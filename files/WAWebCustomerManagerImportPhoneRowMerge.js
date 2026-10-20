__d(
  "WAWebCustomerManagerImportPhoneRowMerge",
  [
    "WAWebContactImportFileProcessor",
    "WAWebCustomerManagerImportEmailWarnings",
    "WAWebCustomerManagerImportRecordInput",
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
          var u = t[l];
          ((t[l] = babelHelpers.extends({}, u, s(u, e), {
            rawRow: d(u.rawRow, e.rawRow),
          })),
            r.set(u.rowIndex, ((a = r.get(u.rowIndex)) != null ? a : 1) + 1));
        }),
        { contacts: t, sourceRowCounts: r }
      );
    }
    function s(e, t) {
      return e.isNamePhoneFallback === !0
        ? u(
            o("WAWebCustomerManagerImportRecordInput").getImportedCustomerName(
              t,
            ) !== ""
              ? t
              : e,
          )
        : t.isNamePhoneFallback === !0
          ? u(
              o(
                "WAWebCustomerManagerImportRecordInput",
              ).getImportedCustomerName(e) !== ""
                ? e
                : t,
            )
          : {
              firstName: c(e.firstName, t.firstName),
              isNamePhoneFallback: e.isNamePhoneFallback,
              lastName: c(e.lastName, t.lastName),
            };
    }
    function u(e) {
      return {
        firstName: e.firstName,
        isNamePhoneFallback: e.isNamePhoneFallback,
        lastName: e.lastName,
      };
    }
    function c(e, t) {
      return e != null && e.trim() !== "" ? e : t;
    }
    function d(e, t) {
      var n = {},
        r = new Map();
      for (var a of [e, t]) {
        var i = a != null ? a : {};
        for (var l of Object.entries(i)) {
          var s = l[0],
            u = l[1],
            c = s.toLowerCase(),
            d =
              c ===
              o(
                "WAWebCustomerManagerImportTemplateUtils",
              ).FBT_EMAIL.toLowerCase()
                ? "email"
                : c,
            p = r.get(d);
          p == null ? ((n[s] = u), r.set(d, s)) : m(d, n[p], u) && (n[p] = u);
        }
      }
      return n;
    }
    function m(e, t, n) {
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
