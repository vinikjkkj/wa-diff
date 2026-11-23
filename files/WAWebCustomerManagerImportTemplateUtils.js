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
      c = s._(/*BTDS*/ "").toString(),
      d = s._(/*BTDS*/ "").toString(),
      m = s._(/*BTDS*/ "").toString(),
      p = s._(/*BTDS*/ "").toString(),
      _ = s._(/*BTDS*/ "").toString(),
      f = s._(/*BTDS*/ "").toString(),
      g = s._(/*BTDS*/ "").toString(),
      h = s._(/*BTDS*/ "").toString(),
      y = {
        acquisitionSource: ["Source", _, "Acquisition source"],
        address: ["Address", m],
        birthday: ["Birthday", g],
        email: ["Email", d],
        lastOrder: ["Last order", h],
        leadStage: ["Lead stage", p],
        note: ["Notes", f],
        username: ["Username", c],
      },
      C = {
        acquisitionSource: [
          _,
          "Source",
          "source",
          "Acquisition source",
          "acquisition source",
        ],
        leadStage: [p, "Lead stage", "lead stage"],
        note: [f, "Notes", "notes"],
        username: [c, "Username", "username"],
      };
    function b(e, t) {
      return v(e.rawRow, t);
    }
    function v(e, t) {
      return o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
        e,
        y[t],
      );
    }
    function S(e, t) {
      for (var n of C[t]) {
        var r = e[n];
        if (typeof r == "string" && r.length > 0) return r;
      }
      return "";
    }
    function R() {
      return s
        ._(/*BTDS*/ "", [
          s._param("Birthday column header", g),
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
        ])
        .toString();
    }
    function L() {
      return s
        ._(/*BTDS*/ "", [
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
        ])
        .toString();
    }
    var E = [
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "", [s._param("lead stage values", $())]).toString(),
      s._(/*BTDS*/ "", [s._param("source values", P())]).toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      R(),
      L(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
    ];
    function k(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    var I = [
        "Ada Lovelace",
        "4155550123",
        "ada",
        "ada@example.com",
        k("12 Baker St, London"),
        k(
          o("WAWebLeadStageNames")
            .getLeadStageName(o("WAWebLeadStage").LeadStage.QUALIFIED)
            .toString(),
        ),
        k(
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
        "Two pizzas on Oct 3",
      ].join(","),
      T = [
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
        .map(k)
        .join(","),
      D = E.map(k).join("\n") + "\n" + I + "\n\n" + T + "\n";
    function x() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(D),
      };
    }
    function $() {
      return o("WAWebLeadStage")
        .ALL_LEAD_STAGES.map(function (e) {
          return o("WAWebLeadStageNames").getLeadStageName(e).toString();
        })
        .join(", ");
    }
    function P() {
      return o("WAWebCustomerProfileAcquisitionSource")
        .PROFILE_ACQUISITION_SOURCE_ORDER.map(function (e) {
          var t;
          return (t = o(
            "WAWebCustomerProfileAcquisitionSourceNames",
          ).getProfileAcquisitionSourceLabel(e)) == null
            ? void 0
            : t.toString();
        })
        .filter(function (e) {
          return e != null;
        })
        .join(", ");
    }
    ((l.FBT_USERNAME = c),
      (l.FBT_EMAIL = d),
      (l.FBT_ADDRESS = m),
      (l.FBT_LEAD_STAGE = p),
      (l.FBT_ACQUISITION_SOURCE = _),
      (l.FBT_NOTES = f),
      (l.FBT_BIRTHDAY = g),
      (l.FBT_LAST_ORDER = h),
      (l.readCustomerManagerImportColumn = b),
      (l.readCustomerManagerImportRawRowColumn = v),
      (l.readCustomerManagerImportDisplayColumn = S),
      (l.getCustomerManagerImportDateFormatInstruction = R),
      (l.getCustomerManagerImportBirthdayFormatInstruction = L),
      (l.getTemplateLinkProps = x));
  },
  226,
);
