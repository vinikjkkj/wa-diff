__d(
  "WASmaxInCoexistenceProductSurfaceMixin",
  ["WAResultOrError", "WASmaxInCoexistenceEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "product_surface",
        o("WASmaxInCoexistenceEnums")
          .ENUM_AIFROMMETA_AUTOMATION_BUSINESSPLATFORM,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ productSurface: t.value })
        : t;
    }
    l.parseProductSurfaceMixin = e;
  },
  98,
);
