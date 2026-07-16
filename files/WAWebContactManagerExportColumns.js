__d(
  "WAWebContactManagerExportColumns",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactManagerImportTemplateUtils",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      return new Date(e * 1e3).toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    }
    function c(e) {
      return new Date(e * 1e3).toLocaleDateString(void 0, {
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    }
    function d(e) {
      var t = o("WAWebLeadStage").getLeadStageFromNumber(e);
      return t == null || t === o("WAWebLeadStage").LeadStage.NONE
        ? ""
        : o("WAWebLeadStageNames").getLeadStageName(t).toString();
    }
    function m(e) {
      var t, n;
      return e == null
        ? ""
        : (t =
              (n = o(
                "WAWebAcquisitionSourceNames",
              ).getAcquisitionSourceDisplayName(e)) == null
                ? void 0
                : n.toString()) != null
          ? t
          : "";
    }
    var p = [
      {
        header: o("WAWebContactImportTemplateParsingUtils").FBT_NAME,
        getValue: function (t) {
          return t.displayName;
        },
      },
      {
        header: o("WAWebContactImportTemplateParsingUtils").FBT_PHONE,
        getValue: function (t) {
          return t.phone;
        },
      },
      {
        header: (e = o("WAWebContactManagerImportTemplateUtils")).FBT_USERNAME,
        getValue: function (t) {
          return t.username;
        },
      },
      {
        header: e.FBT_EMAIL,
        getValue: function (t) {
          var e;
          return (e = t.email) != null ? e : "";
        },
      },
      {
        header: e.FBT_LEAD_STAGE,
        getValue: function (t) {
          return d(t.leadStage);
        },
      },
      {
        header: e.FBT_ACQUISITION_SOURCE,
        getValue: function (t) {
          return m(t.acquisitionSource);
        },
      },
      {
        header: e.FBT_NOTES,
        getValue: function (t) {
          var e;
          return (e = t.notes) != null ? e : "";
        },
      },
      {
        header: s._(/*BTDS*/ "Birthday").toString(),
        getValue: function (t) {
          return t.birthday == null ? "" : c(t.birthday);
        },
      },
      {
        header: s._(/*BTDS*/ "Last order").toString(),
        getValue: function (t) {
          return t.lastOrder == null ? "" : u(t.lastOrder);
        },
      },
      {
        header: s._(/*BTDS*/ "Address").toString(),
        getValue: function (t) {
          var e;
          return (e = t.address) != null ? e : "";
        },
      },
      {
        header: s._(/*BTDS*/ "Alternate phone numbers").toString(),
        getValue: function (t) {
          var e;
          return (e = t.altPhoneNumbers) != null ? e : "";
        },
      },
      {
        header: s._(/*BTDS*/ "Lists").toString(),
        getValue: function (t) {
          return t.lists.join("; ");
        },
      },
      {
        header: s._(/*BTDS*/ "Created").toString(),
        getValue: function (t) {
          return u(t.createdAt);
        },
      },
      {
        header: s._(/*BTDS*/ "Last updated").toString(),
        getValue: function (t) {
          return u(t.modifiedAt);
        },
      },
    ];
    function _() {
      return p.map(function (e) {
        return e.header;
      });
    }
    function f(e) {
      return p.map(function (t) {
        return t.getValue(e);
      });
    }
    ((l.EXPORT_COLUMNS = p), (l.getExportHeaders = _), (l.getExportRow = f));
  },
  226,
);
