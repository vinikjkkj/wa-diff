__d(
  "WAWebOrgAdminTableSort",
  [],
  function (t, n, r, o, a, i) {
    var e = { direction: "asc", key: "name" };
    function l(e, t, n, r) {
      var o = e.key === t ? e.direction : null;
      return {
        direction: o,
        onSort: function () {
          return n({ direction: o === "asc" ? "desc" : "asc", key: t });
        },
        testid: r + "_" + t,
      };
    }
    function s(e, t, n, r) {
      var o = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" }),
        a = t.direction === "asc" ? 1 : -1;
      return e
        .map(function (e) {
          return { name: r(e), row: e, value: n(e, t.key) };
        })
        .sort(function (e, t) {
          return u(e.value, t.value, a, o) || o.compare(e.name, t.name);
        })
        .map(function (e) {
          var t = e.row;
          return t;
        });
    }
    function u(e, t, n, r) {
      var o = c(e),
        a = c(t);
      return o || a
        ? Number(o) - Number(a)
        : typeof e == "number" && typeof t == "number"
          ? (e - t) * n
          : r.compare(String(e), String(t)) * n;
    }
    function c(e) {
      return e == null || (typeof e == "string" && e.trim() === "");
    }
    ((i.ORG_ADMIN_TABLE_NAME_SORT = e),
      (i.getOrgAdminTableColumnSort = l),
      (i.sortOrgAdminTableRows = s));
  },
  66,
);
