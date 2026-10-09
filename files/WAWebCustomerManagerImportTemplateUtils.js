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
      h = s._(/*BTDS*/ "Last order").toString(),
      y = {
        acquisitionSource: ["Source", _, "Acquisition source"],
        address: ["Address", m],
        birthday: ["Birthday", g],
        email: ["Email", d],
        lastOrder: ["Last order", h],
        leadStage: ["Lead stage", p],
        note: ["Notes", f],
        username: ["Username", c],
      };
    function C(e, t) {
      return b(e.rawRow, t);
    }
    function b(e, t) {
      return o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e,
        y[t],
      );
    }
    function v() {
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
    function S() {
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
    var R = [
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
          [s._param("lead stage values", D())],
        )
        .toString(),
      s
        ._(/*BTDS*/ "Source must be one of: {source values}.", [
          s._param("source values", x()),
        ])
        .toString(),
      s
        ._(
          /*BTDS*/ "Lead stage and Source ignore capitalization. Anyone already saved as a customer is skipped.",
        )
        .toString(),
      v(),
      S(),
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
    function L(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    var E = [
        "Ada Lovelace",
        "4155550123",
        "ada",
        "ada@example.com",
        L("12 Baker St, London"),
        L(
          o("WAWebLeadStageNames")
            .getLeadStageName(o("WAWebLeadStage").LeadStage.QUALIFIED)
            .toString(),
        ),
        L(
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
      k = [
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
        .map(L)
        .join(","),
      I = R.map(L).join("\n") + "\n" + E + "\n\n" + k + "\n";
    function T() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(I),
      };
    }
    function D() {
      return o("WAWebLeadStage")
        .ALL_LEAD_STAGES.map(function (e) {
          return o("WAWebLeadStageNames").getLeadStageName(e).toString();
        })
        .join(", ");
    }
    function x() {
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
      (l.readCustomerManagerImportColumn = C),
      (l.readCustomerManagerImportRawRowColumn = b),
      (l.getCustomerManagerImportDateFormatInstruction = v),
      (l.getCustomerManagerImportBirthdayFormatInstruction = S),
      (l.getTemplateLinkProps = T));
  },
  226,
);
