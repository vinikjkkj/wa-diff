__d(
  "WAWebContactManagerImportTemplateUtils",
  ["fbt", "WAWebContactImportTemplateParsingUtils"],
  function (t, n, r, o, a, i, l, s) {
    var e = s._(/*BTDS*/ "Username").toString(),
      u = s._(/*BTDS*/ "Email").toString(),
      c = s._(/*BTDS*/ "Lead stage").toString(),
      d = s._(/*BTDS*/ "Source").toString(),
      m = s._(/*BTDS*/ "Notes").toString(),
      p = s
        ._(
          /*BTDS*/ "Enter each customer's info on a separate row. Full name and Phone number are required; the remaining columns are optional. Phone number can be in local format (e.g. 4155551234) or international format with country code (e.g. +14155551234). Lead stage must be one of: None, Intake, Qualified, Converted, Lost, Not qualified. Source must be one of: CTWA Ad, Organic - FB, Organic - IG, Word of mouth, Referral.",
        )
        .toString(),
      _ =
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
        d +
        "," +
        m,
      f = p + "\n\n" + _ + "\n";
    function g() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(f),
      };
    }
    ((l.FBT_USERNAME = e),
      (l.FBT_EMAIL = u),
      (l.FBT_LEAD_STAGE = c),
      (l.FBT_ACQUISITION_SOURCE = d),
      (l.FBT_NOTES = m),
      (l.getTemplateLinkProps = g));
  },
  226,
);
