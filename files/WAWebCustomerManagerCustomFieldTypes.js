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
    ((i.CUSTOM_FIELD_TYPES = e),
      (i.toCustomFieldType = l),
      (i.compareFieldIds = s),
      (i.MAX_CUSTOM_FIELD_NAME_LENGTH = u),
      (i.MAX_CUSTOM_FIELD_ENUM_VALUES = c),
      (i.MAX_CUSTOM_FIELD_ENUM_VALUE_LENGTH = d),
      (i.CUSTOM_FIELD_KEY_PREFIX = m),
      (i.customFieldKey = p),
      (i.customFieldIdFromKey = _));
  },
  66,
);
