__d(
  "WAWebCustomerManagerImportTargets",
  [
    "fbt",
    "WAWebContactImportSmartColumnDetection",
    "WAWebCustomerManagerImportTemplateUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = {
        acquisitionSource: {
          aliases: f([
            (e = o("WAWebCustomerManagerImportTemplateUtils"))
              .FBT_ACQUISITION_SOURCE,
            "source",
            "acquisition source",
            "acquisition",
            "origen",
            "origem",
            "fonte",
          ]),
          canonicalHeader: "Source",
          getLabel: function () {
            return s._(/*BTDS*/ "Acquisition source");
          },
        },
        address: {
          aliases: f([
            e.FBT_ADDRESS,
            "address",
            "direccion",
            "direcci\xF3n",
            "endereco",
            "endere\xE7o",
            "adresse",
            "alamat",
          ]),
          canonicalHeader: "Address",
          getLabel: function () {
            return s._(/*BTDS*/ "Address");
          },
        },
        birthday: {
          aliases: f([
            e.FBT_BIRTHDAY,
            "birthday",
            "birth date",
            "birthdate",
            "date of birth",
            "dob",
          ]),
          canonicalHeader: "Birthday",
          getLabel: function () {
            return s._(/*BTDS*/ "Birthday");
          },
        },
        email: {
          aliases: f([
            e.FBT_EMAIL,
            "email",
            "e-mail",
            "e mail",
            "email address",
            "e mail address",
            "e-mail address",
            "correo",
            "correo electronico",
          ]),
          canonicalHeader: "Email",
          getLabel: function () {
            return s._(/*BTDS*/ "Email");
          },
        },
        firstName: {
          aliases: (u = o("WAWebContactImportSmartColumnDetection"))
            .FIRST_NAME_HEADER_ALIASES,
          canonicalHeader: "First name",
          getLabel: function () {
            return s._(/*BTDS*/ "First name");
          },
        },
        fullName: {
          aliases: u.FULL_NAME_HEADER_ALIASES,
          canonicalHeader: "Full name",
          getLabel: function () {
            return s._(/*BTDS*/ "Full name");
          },
        },
        lastName: {
          aliases: u.LAST_NAME_HEADER_ALIASES,
          canonicalHeader: "Last name",
          getLabel: function () {
            return s._(/*BTDS*/ "Last name");
          },
        },
        lastOrder: {
          aliases: f([
            e.FBT_LAST_ORDER,
            "last order",
            "last order date",
            "date of last order",
            "last purchase",
            "last purchase date",
          ]),
          canonicalHeader: "Last order",
          getLabel: function () {
            return s._(/*BTDS*/ "Last order");
          },
        },
        leadStage: {
          aliases: f([
            e.FBT_LEAD_STAGE,
            "lead stage",
            "leadstage",
            "stage",
            "etapa",
            "fase",
          ]),
          canonicalHeader: "Lead stage",
          getLabel: function () {
            return s._(/*BTDS*/ "Lead stage");
          },
        },
        notes: {
          aliases: f([
            e.FBT_NOTES,
            "notes",
            "note",
            "remark",
            "remarks",
            "comment",
            "comments",
            "nota",
            "notas",
            "observaciones",
            "observacao",
          ]),
          canonicalHeader: "Notes",
          getLabel: function () {
            return s._(/*BTDS*/ "Notes");
          },
        },
        phone: {
          aliases: u.PHONE_HEADER_ALIASES,
          canonicalHeader: "Phone number",
          getLabel: function () {
            return s._(/*BTDS*/ "Phone number (required)");
          },
        },
      },
      d = [
        "fullName",
        "firstName",
        "lastName",
        "phone",
        "leadStage",
        "email",
        "address",
        "notes",
        "acquisitionSource",
        "birthday",
        "lastOrder",
      ],
      m = [
        "fullName",
        "firstName",
        "lastName",
        "phone",
        "leadStage",
        "email",
        "address",
        "acquisitionSource",
        "notes",
        "birthday",
        "lastOrder",
      ],
      p = [
        "phone",
        "firstName",
        "fullName",
        "lastName",
        "leadStage",
        "email",
        "address",
        "notes",
        "acquisitionSource",
        "birthday",
        "lastOrder",
      ];
    function _(e) {
      return c[e];
    }
    function f(e) {
      return new Set(
        e.map(o("WAWebContactImportSmartColumnDetection").normalizeHeader),
      );
    }
    ((l.TARGET_ORDER = d),
      (l.DISPLAY_TARGET_ORDER = m),
      (l.MATCH_TARGET_ORDER = p),
      (l.getImportTarget = _));
  },
  226,
);
