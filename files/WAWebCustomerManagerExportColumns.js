__d(
  "WAWebCustomerManagerExportColumns",
  [
    "fbt",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebCustomerManagerImportMappingUtils",
    "WAWebCustomerManagerImportTemplateUtils",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebCustomerProfileBirthday",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      return new Date(e * 1e3).toISOString().slice(0, 10);
    }
    function c(e) {
      return e.birthday == null
        ? ""
        : o("WAWebCustomerProfileBirthday").formatBirthdayToIso(
            e.birthday,
            e.birthdayIso,
          );
    }
    function d(e) {
      var t = o("WAWebLeadStage").getLeadStageFromNumber(e);
      return t == null
        ? ""
        : o("WAWebLeadStageNames").getLeadStageName(t).toString();
    }
    function m(e) {
      var t, n;
      return e == null
        ? ""
        : (t =
              (n = o(
                "WAWebCustomerProfileAcquisitionSourceNames",
              ).getProfileAcquisitionSourceLabel(e)) == null
                ? void 0
                : n.toString()) != null
          ? t
          : "";
    }
    var p = [
      {
        id: "fullName",
        header: o("WAWebContactImportTemplateParsingUtils").FBT_NAME,
        getValue: function (t) {
          return t.displayName;
        },
      },
      {
        id: "phone",
        header: o("WAWebContactImportTemplateParsingUtils").FBT_PHONE,
        getValue: function (t) {
          return t.phone;
        },
      },
      {
        id: "username",
        header: (e = o("WAWebCustomerManagerImportTemplateUtils")).FBT_USERNAME,
        getValue: function (t) {
          return t.username;
        },
      },
      {
        id: "email",
        header: e.FBT_EMAIL,
        getValue: function (t) {
          var e;
          return (e = t.email) != null ? e : "";
        },
      },
      {
        id: "leadStage",
        header: e.FBT_LEAD_STAGE,
        getValue: function (t) {
          return d(t.leadStage);
        },
      },
      {
        id: "acquisitionSource",
        header: e.FBT_ACQUISITION_SOURCE,
        getValue: function (t) {
          return m(t.acquisitionSource);
        },
      },
      {
        id: "notes",
        header: e.FBT_NOTES,
        getValue: function (t) {
          var e;
          return (e = t.notes) != null ? e : "";
        },
      },
      { id: "birthday", header: e.FBT_BIRTHDAY, getValue: c },
      {
        id: "lastOrder",
        header: e.FBT_LAST_ORDER,
        getValue: function (t) {
          return t.lastOrder == null ? "" : u(t.lastOrder);
        },
      },
      {
        id: "address",
        header: e.FBT_ADDRESS,
        getValue: function (t) {
          var e;
          return (e = t.address) != null ? e : "";
        },
      },
      {
        id: "altPhoneNumbers",
        header: s._(/*BTDS*/ "Alternate phone numbers").toString(),
        getValue: function (t) {
          var e;
          return (e = t.altPhoneNumbers) != null ? e : "";
        },
      },
      {
        id: "lists",
        header: s._(/*BTDS*/ "Lists").toString(),
        getValue: function (t) {
          return t.lists.join("; ");
        },
      },
      {
        id: "createdAt",
        header: s._(/*BTDS*/ "Created").toString(),
        getValue: function (t) {
          return u(t.createdAt);
        },
      },
      {
        id: "modifiedAt",
        header: s._(/*BTDS*/ "Last updated").toString(),
        getValue: function (t) {
          return u(t.modifiedAt);
        },
      },
      {
        id: "lastMessage",
        header: s._(/*BTDS*/ "Last message").toString(),
        getValue: function (t) {
          return t.lastMessage == null ? "" : u(t.lastMessage);
        },
      },
    ];
    function _(e) {
      return (
        e === void 0 && (e = p),
        e.map(function (e) {
          return e.header;
        })
      );
    }
    function f(e, t) {
      return (
        t === void 0 && (t = p),
        t.map(function (t) {
          return t.getValue(e);
        })
      );
    }
    function g(e) {
      var t = new Map();
      for (var n of e)
        for (var r of n.customFieldValues)
          t.has(r.fieldId) || t.set(r.fieldId, h(r));
      return Array.from(t.keys())
        .sort(C)
        .map(function (e) {
          var n;
          return {
            header: (n = t.get(e)) != null ? n : "",
            getValue: function (n) {
              var t, r;
              return (t =
                (r = n.customFieldValues.find(function (t) {
                  return t.fieldId === e;
                })) == null
                  ? void 0
                  : r.value) != null
                ? t
                : "";
            },
          };
        });
    }
    function h(e) {
      var t =
        e.currency != null
          ? e.fieldName + " (" + e.currency + ")"
          : e.fieldName;
      return y(t)
        ? s
            ._(/*BTDS*/ "{custom field name} (custom field)", [
              s._param("custom field name", t),
            ])
            .toString()
        : t;
    }
    function y(e) {
      return (
        _().includes(e) ||
        Object.values(
          o("WAWebCustomerManagerImportMappingUtils").suggestImportMapping([e]),
        ).some(function (e) {
          return e != null;
        })
      );
    }
    function C(e, t) {
      return e.length !== t.length
        ? e.length - t.length
        : e.localeCompare(t, "en");
    }
    function b(e) {
      var t = p.find(function (t) {
        return t.id === e;
      });
      if (t == null) throw r("err")("Unknown export column id");
      return t;
    }
    function v(e) {
      return e === "select" || e === "actions"
        ? null
        : e === "customer"
          ? "fullName"
          : e === "phone"
            ? "phone"
            : e === "username"
              ? "username"
              : e === "list"
                ? "lists"
                : e === "acquisitionSource"
                  ? "acquisitionSource"
                  : e === "email"
                    ? "email"
                    : e === "address"
                      ? "address"
                      : e === "birthday"
                        ? "birthday"
                        : e === "lastMessage"
                          ? "lastMessage"
                          : e === "lastOrder"
                            ? "lastOrder"
                            : e === "notes"
                              ? "notes"
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      e,
                                  );
                                })();
    }
    function S(e, t) {
      var n = new Set(t),
        r = ["customer"].concat(
          e.filter(function (e) {
            return e !== "customer" && e !== "select" && e !== "actions";
          }),
        ),
        o = [];
      for (var a of r)
        if (a === "customer" || n.has(a)) {
          var i = v(a);
          i != null && o.push(b(i));
        }
      return o;
    }
    ((l.EXPORT_COLUMNS = p),
      (l.getExportHeaders = _),
      (l.getExportRow = f),
      (l.getCustomFieldExportColumns = g),
      (l.getExportColumnById = b),
      (l.getVisibleExportColumns = S));
  },
  226,
);
