__d(
  "WAProtoEntryLimitError",
  ["WACustomError"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = "repeated_field_entry_limit_exceeded:" + t;
        return (
          (n = e.call(this, r) || this),
          (n.name = "ProtobufEntryLimitError"),
          (n.field = t),
          (n.code = r),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WACustomError").CustomError);
    l.ProtobufEntryLimitError = e;
  },
  98,
);
