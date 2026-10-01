__d(
  "WAWebContactManagerImportTemplateUtils",
  [
    "fbt",
    "WAWebContactImportTemplateParsingUtils",
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
      y = [
        s
          ._(/*BTDS*/ "Enter each customer's info on a separate row.")
          .toString(),
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
            [s._param("lead stage values", L())],
          )
          .toString(),
        s
          ._(/*BTDS*/ "Source must be one of: {source values}.", [
            s._param("source values", E()),
          ])
          .toString(),
        s
          ._(
            /*BTDS*/ "Lead stage and Source ignore capitalization. Anyone already saved as a customer is skipped.",
          )
          .toString(),
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
    function C(e) {
      return '"' + e.replace(/\"/g, '""') + '"';
    }
    var b = [
        "Ada Lovelace",
        "4155550123",
        "ada",
        "ada@example.com",
        C("12 Baker St, London"),
        C(
          o("WAWebLeadStageNames")
            .getLeadStageName(o("WAWebLeadStage").LeadStage.QUALIFIED)
            .toString(),
        ),
        C(
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
      ].join(","),
      v = [
        o("WAWebContactImportTemplateParsingUtils").FBT_NAME,
        o("WAWebContactImportTemplateParsingUtils").FBT_PHONE,
        c,
        d,
        m,
        p,
        _,
        f,
      ]
        .map(C)
        .join(","),
      S = y.map(C).join("\n") + "\n" + b + "\n\n" + v + "\n";
    function R() {
      return {
        download: "customer_manager_import_template.csv",
        href: "data:application/csv," + encodeURI(S),
      };
    }
    function L() {
      return o("WAWebLeadStage")
        .ALL_LEAD_STAGES.map(function (e) {
          return o("WAWebLeadStageNames").getLeadStageName(e).toString();
        })
        .join(", ");
    }
    function E() {
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
      (l.getTemplateLinkProps = R));
  },
  226,
);
