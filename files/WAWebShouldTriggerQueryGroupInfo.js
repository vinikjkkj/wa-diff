__d(
  "WAWebShouldTriggerQueryGroupInfo",
  [
    "WAWebIsAddressingModeMismatch",
    "WAWebSchemaGroupMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.disableForCAGs,
            r = e.groupWid,
            a = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(r.toString());
          if (a == null) return !1;
          var i = (a == null ? void 0 : a.defaultSubgroup) === !0;
          return i && n
            ? !1
            : o("WAWebIsAddressingModeMismatch").isAddressingModeMismatch(a, t);
        })),
        s.apply(this, arguments)
      );
    }
    l.shouldTriggerQueryGroupInfo = e;
  },
  98,
);
