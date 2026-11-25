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
    function v(e, t) {
      var n,
        r = {};
      for (var o of Object.entries(e)) {
        var a = o[0],
          i = o[1];
        typeof i == "string" && (r[a] = i);
      }
      return (n = b(r, t)) != null ? n : "";
    }
    function S() {
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
    function R() {
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
    var L = [
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "", [s._param("lead stage values", x())]).toString(),
      s._(/*BTDS*/ "", [s._param("source values", $())]).toString(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
      S(),
      R(),
      s._(/*BTDS*/ "").toString(),
      s._(/*BTDS*/ "").toString(),
    ];
    function E(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    var k = [
        "Ada Lovelace",
        "4155550123",
        "ada",
        "ada@example.com",
        E("12 Baker St, London"),
        E(
          o("WAWebLeadStageNames")
            .getLeadStageName(o("WAWebLeadStage").LeadStage.QUALIFIED)
            .toString(),
        ),
        E(
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
      I = [
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
        .map(E)
        .join(","),
      T = L.map(E).join("\n") + "\n" + k + "\n\n" + I + "\n";
    function D() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(T),
      };
    }
    function x() {
      return o("WAWebLeadStage")
        .ALL_LEAD_STAGES.map(function (e) {
          return o("WAWebLeadStageNames").getLeadStageName(e).toString();
        })
        .join(", ");
    }
    function $() {
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
      (l.readCustomerManagerImportColumn = C),
      (l.readCustomerManagerImportRawRowColumn = b),
      (l.readCustomerManagerImportDisplayColumn = v),
      (l.getCustomerManagerImportDateFormatInstruction = S),
      (l.getCustomerManagerImportBirthdayFormatInstruction = R),
      (l.getTemplateLinkProps = D));
  },
  226,
);
