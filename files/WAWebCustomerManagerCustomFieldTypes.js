__d(
  "WAWebCustomerManagerCustomFieldTypes",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["TEXT", "NUMERIC", "MONEY", "DATE", "ENUM"];
    function l(e) {
      return e === "NUMERIC"
        ? "NUMERIC"
        : e === "MONEY"
          ? "MONEY"
          : e === "TEXT"
            ? "TEXT"
            : e === "DATE"
              ? "DATE"
              : e === "ENUM"
                ? "ENUM"
                : null;
    }
    function s(e, t) {
      return e.length !== t.length
        ? e.length - t.length
        : e.localeCompare(t, "en");
    }
    var u = 50,
      c = 50,
      d = 50,
      m = "custom:";
    function p(e) {
      return m + e;
    }
    function _(e) {
      return e.startsWith(m) && e.length > m.length ? e.slice(m.length) : null;
    }
    var f = 100,
      g = Math.pow(2, 31) - 1,
      h = 1e4,
      y = Math.pow(2, 53) - 1,
      C = /^(\d{4})-(\d{2})-(\d{2})$/;
    function b(e) {
      var t = C.exec(e);
      if (t == null) return !1;
      var n = Number(t[1]),
        r = Number(t[2]),
        o = Number(t[3]);
      if (n < 1 || n > 32767) return !1;
      var a = new Date(0);
      return (
        a.setUTCFullYear(n, r - 1, o),
        a.getUTCFullYear() === n &&
          a.getUTCMonth() === r - 1 &&
          a.getUTCDate() === o
      );
    }
    var v = /^-?(\d+(\.\d*)?|\.\d+)$/;
    function S(e) {
      if (!v.test(e)) return null;
      var t = Number(e);
      return t === 0 ? 0 : t;
    }
    function R(e) {
      if (!Number.isFinite(e)) return !1;
      var t = e * h;
      if (Math.abs(t) > y) return !1;
      var n = Math.sign(t) * Math.round(Math.abs(t));
      return n / h === e;
    }
    function L(e, t) {
      var n, r;
      if (t == null) return null;
      var o = e.match(/^(\d*)(?:\.(\d*))?$/),
        a = (n = o == null ? void 0 : o[1]) != null ? n : "",
        i = (r = o == null ? void 0 : o[2]) != null ? r : "";
      if (o == null || (a === "" && i === "")) return null;
      var l = Number(a + i.padEnd(t, "0").slice(0, t));
      return !Number.isSafeInteger(l) || l > g ? null : l;
    }
    function E(e, t) {
      var n = t.trim();
      if (n === "") return null;
      var r = e.id;
      e: {
        if (e.type === "TEXT")
          return new TextEncoder().encode(n).length <= f
            ? { custom_field_id: r, text_value: n }
            : null;
        if (e.type === "DATE")
          return b(n) ? { custom_field_id: r, date_value: n } : null;
        if (e.type === "NUMERIC") {
          var o = S(n);
          return o != null && R(o)
            ? { custom_field_id: r, numeric_value: o }
            : null;
        }
        if (e.type === "MONEY") {
          var a = L(n, e.currencyDecimalPlaces);
          return a == null ? null : { custom_field_id: r, money_amount: a };
        }
        if (e.type === "ENUM")
          return e.enumOptionKeys.includes(n)
            ? { custom_field_id: r, enum_option_key: n }
            : null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.type,
        );
      }
    }
    ((i.CUSTOM_FIELD_TYPES = e),
      (i.toCustomFieldType = l),
      (i.compareFieldIds = s),
      (i.MAX_CUSTOM_FIELD_NAME_LENGTH = u),
      (i.MAX_CUSTOM_FIELD_ENUM_VALUES = c),
      (i.MAX_CUSTOM_FIELD_ENUM_VALUE_LENGTH = d),
      (i.CUSTOM_FIELD_KEY_PREFIX = m),
      (i.customFieldKey = p),
      (i.customFieldIdFromKey = _),
      (i.MAX_CUSTOM_FIELD_TEXT_LENGTH = f),
      (i.MAX_CUSTOM_FIELD_MONEY_AMOUNT = g),
      (i.CUSTOM_FIELD_NUMERIC_SCALE = h),
      (i.MAX_CUSTOM_FIELD_NUMERIC_SCALED = y),
      (i.toServerCustomFieldFilter = E));
  },
  66,
);
