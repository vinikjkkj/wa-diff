__d(
  "WAWebCustomerManagerImportTemplateUtils",
  [
    "fbt",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerManagerImportDateParsingUtils",
    "WAWebCustomerProfileAcquisitionSource",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = s._(/*BTDS*/ "Username").toString(),
      d = s._(/*BTDS*/ "Email").toString(),
      m = s._(/*BTDS*/ "Address").toString(),
      p = s._(/*BTDS*/ "Lead stage").toString(),
      _ = s._(/*BTDS*/ "Source").toString(),
      f = s._(/*BTDS*/ "Notes").toString(),
      g = s._(/*BTDS*/ "Birthday").toString(),
      h = s._(/*BTDS*/ "Last order").toString();
    function y() {
      return s
        ._(
          /*BTDS*/ "For {Birthday column header} and {Last order column header}, use {recommended date format} (recommended). {month-first date format} (slashes) is month-first; {day-first date format} (hyphens) is day-first.",
          [
            s._param("Birthday column header", g),
            s._param("Last order column header", h),
            s._param(
              "recommended date format",
              o("WAWebCustomerManagerImportDateParsingUtils")
                .CUSTOMER_MANAGER_IMPORT_DATE_FORMATS.iso,
            ),
            s._param(
              "month-first date format",
              o("WAWebCustomerManagerImportDateParsingUtils")
                .CUSTOMER_MANAGER_IMPORT_DATE_FORMATS.monthFirst,
            ),
            s._param(
              "day-first date format",
              o("WAWebCustomerManagerImportDateParsingUtils")
                .CUSTOMER_MANAGER_IMPORT_DATE_FORMATS.dayFirst,
            ),
          ],
        )
        .toString();
    }
    function C() {
      return s
        ._(
          /*BTDS*/ "For {Birthday column header} only, you can omit the year with {slash month-day format} or {hyphen month-day format}.",
          [
            s._param("Birthday column header", g),
            s._param(
              "slash month-day format",
              o("WAWebCustomerManagerImportDateParsingUtils")
                .CUSTOMER_MANAGER_IMPORT_DATE_FORMATS.birthdayMonthDay,
            ),
            s._param(
              "hyphen month-day format",
              o("WAWebCustomerManagerImportDateParsingUtils")
                .CUSTOMER_MANAGER_IMPORT_DATE_FORMATS.birthdayIsoMonthDay,
            ),
          ],
        )
        .toString();
    }
    var b = [
      s._(/*BTDS*/ "Enter each customer's info on a separate row.").toString(),
      s
        ._(
          /*BTDS*/ "Phone number is required. Every other column can be left blank \u2014 a customer with no Full name is saved under their phone number.",
        )
        .toString(),
      s
        ._(
          /*BTDS*/ "Numbers can be local (4155551234) or international with a country code (+14155551234).",
        )
        .toString(),
      s
        ._(
          /*BTDS*/ "A username never replaces the number. It must belong to the same account as the number on its row, or the row is held back for you to review.",
        )
        .toString(),
      s
        ._(
          /*BTDS*/ "Lead stage must be one of: {lead stage values}. Leave it blank to import someone with no stage set.",
          [s._param("lead stage values", k())],
        )
        .toString(),
      s
        ._(/*BTDS*/ "Source must be one of: {source values}.", [
          s._param("source values", I()),
        ])
        .toString(),
      s
        ._(
          /*BTDS*/ "Lead stage and Source ignore capitalization. Anyone already saved as a customer is skipped.",
        )
        .toString(),
      y(),
      C(),
      s
        ._(
          /*BTDS*/ "Put double quotes around any value containing a comma, as in the address below.",
        )
        .toString(),
      s
        ._(
          /*BTDS*/ "Example row, shown for reference. Enter your own customers under the headings:",
        )
        .toString(),
    ];
    function v(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    var S = [
        "Ada Lovelace",
        "4155550123",
        "ada",
        "ada@example.com",
        v("12 Baker St, London"),
        v(
          o("WAWebLeadStageNames")
            .getLeadStageName(o("WAWebLeadStage").LeadStage.QUALIFIED)
            .toString(),
        ),
        v(
          (e =
            (u = o(
              "WAWebCustomerProfileAcquisitionSourceNames",
            ).getProfileAcquisitionSourceLabel(
              o("WAWebCustomerProfileAcquisitionSource")
                .PROFILE_ACQUISITION_SOURCE_REFERRAL,
            )) == null
              ? void 0
              : u.toString()) != null
            ? e
            : "",
        ),
        "Met at the trade show",
        "04/15/1990",
        "2025-06-01",
      ].join(","),
      R = [
        o("WAWebContactImportTemplateParsingUtils").FBT_NAME,
        o("WAWebContactImportTemplateParsingUtils").FBT_PHONE,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
      ]
        .map(v)
        .join(","),
      L = b.map(v).join("\n") + "\n" + S + "\n\n" + R + "\n";
    function E() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(L),
      };
    }
    function k() {
      return o("WAWebLeadStage")
        .ALL_LEAD_STAGES.map(function (e) {
          return o("WAWebLeadStageNames").getLeadStageName(e).toString();
        })
        .join(", ");
    }
    function I() {
      var e = [];
      return (
        o(
          "WAWebCustomerProfileAcquisitionSource",
        ).PROFILE_ACQUISITION_SOURCE_ORDER.forEach(function (t) {
          var n = o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceLabel(t);
          n != null && e.push(n.toString());
        }),
        e.join(", ")
      );
    }
    ((l.FBT_USERNAME = c),
      (l.FBT_EMAIL = d),
      (l.FBT_ADDRESS = m),
      (l.FBT_LEAD_STAGE = p),
      (l.FBT_ACQUISITION_SOURCE = _),
      (l.FBT_NOTES = f),
      (l.FBT_BIRTHDAY = g),
      (l.FBT_LAST_ORDER = h),
      (l.getCustomerManagerImportDateFormatInstruction = y),
      (l.getCustomerManagerImportBirthdayFormatInstruction = C),
      (l.getTemplateLinkProps = E));
  },
  226,
);
