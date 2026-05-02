__d(
  "WAWebCustomerManagerImportTemplateUtils",
  ["fbt", "WAWebContactImportTemplateParsingUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = s._(/*BTDS*/ "Username").toString(),
      u = s._(/*BTDS*/ "Lead stage").toString(),
      c = s._(/*BTDS*/ "Acquisition source").toString(),
      d = s._(/*BTDS*/ "Notes").toString(),
      m = s
        ._(
          /*BTDS*/ "Enter each customer's info on a separate row. Full name and Phone number are required; the remaining columns are optional.",
        )
        .toString(),
      p =
        o("WAWebContactImportTemplateParsingUtils").FBT_NAME +
        "," +
        o("WAWebContactImportTemplateParsingUtils").FBT_PHONE +
        "," +
        e +
        "," +
        u +
        "," +
        c +
        "," +
        d,
      _ = m + "\n\n" + p + "\n";
    function f() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(_),
      };
    }
    l.getTemplateLinkProps = f;
  },
  226,
);
