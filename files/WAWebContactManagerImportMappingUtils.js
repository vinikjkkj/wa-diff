__d(
  "WAWebContactManagerImportMappingUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportCSVValidation",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "WAWebContactManagerImportTemplateUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = e.name.toLowerCase();
      return t.endsWith(".csv")
        ? o("WAWebContactImportFileTypeValidator").FileType.CSV
        : t.endsWith(".xls") ||
            t.endsWith(".xlsx") ||
            o("WAWebContactImportFileTypeValidator").isFileOfType(
              e,
              o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
            )
          ? o("WAWebContactImportFileTypeValidator").FileType.EXCEL
          : o("WAWebContactImportFileTypeValidator").FileType.CSV;
    }
    var d = [
        "fullName",
        "firstName",
        "lastName",
        "phone",
        "leadStage",
        "email",
        "address",
        "notes",
        "acquisitionSource",
      ],
      m = {
        acquisitionSource: "Source",
        address: "Address",
        email: "Email",
        firstName: "First name",
        fullName: "Full name",
        lastName: "Last name",
        leadStage: "Lead stage",
        notes: "Notes",
        phone: "Phone number",
      };
    function p(e) {
      return m[e];
    }
    function _(e) {
      var t = new Set();
      for (var n of e)
        t.add(o("WAWebContactImportSmartColumnDetection").normalizeHeader(n));
      return t;
    }
    var f = _([
        (s = o("WAWebContactManagerImportTemplateUtils")).FBT_EMAIL,
        "email",
        "e-mail",
        "e mail",
        "email address",
        "e mail address",
        "e-mail address",
        "correo",
        "correo electronico",
      ]),
      g = _([
        s.FBT_ADDRESS,
        "address",
        "direccion",
        "direcci\xF3n",
        "endereco",
        "endere\xE7o",
        "adresse",
        "alamat",
      ]),
      h = _([
        s.FBT_LEAD_STAGE,
        "lead stage",
        "leadstage",
        "stage",
        "etapa",
        "fase",
      ]),
      y = _([
        s.FBT_NOTES,
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
      C = _([
        s.FBT_ACQUISITION_SOURCE,
        "source",
        "acquisition source",
        "acquisition",
        "origen",
        "origem",
        "fonte",
      ]),
      b = [
        {
          aliases: (u = o("WAWebContactImportSmartColumnDetection"))
            .PHONE_HEADER_ALIASES,
          key: "phone",
        },
        { aliases: u.FIRST_NAME_HEADER_ALIASES, key: "firstName" },
        { aliases: u.FULL_NAME_HEADER_ALIASES, key: "fullName" },
        { aliases: u.LAST_NAME_HEADER_ALIASES, key: "lastName" },
        { aliases: h, key: "leadStage" },
        { aliases: f, key: "email" },
        { aliases: g, key: "address" },
        { aliases: y, key: "notes" },
        { aliases: C, key: "acquisitionSource" },
      ];
    function v(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function S() {
      return {
        acquisitionSource: null,
        address: null,
        email: null,
        firstName: null,
        fullName: null,
        lastName: null,
        leadStage: null,
        notes: null,
        phone: null,
      };
    }
    function R(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d = {};
      for (var m of e)
        if (m.trim() !== "") {
          for (var p of b)
            if (
              d[p.key] == null &&
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                m,
                p.aliases,
              )
            ) {
              d[p.key] = m;
              break;
            }
        }
      var _ = d.firstName != null || d.lastName != null;
      return {
        acquisitionSource: (t = d.acquisitionSource) != null ? t : null,
        address: (n = d.address) != null ? n : null,
        email: (r = d.email) != null ? r : null,
        firstName: (a = d.firstName) != null ? a : null,
        fullName: _ ? null : (i = d.fullName) != null ? i : null,
        lastName: (l = d.lastName) != null ? l : null,
        leadStage: (s = d.leadStage) != null ? s : null,
        notes: (u = d.notes) != null ? u : null,
        phone: (c = d.phone) != null ? c : null,
      };
    }
    function L(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function E(e) {
      return e != null && String(e).trim() !== "";
    }
    function k(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function I(e) {
      for (var t = 0; t < e.length; t++) {
        var n = k(e[t]);
        if (
          n != null &&
          n.some(function (e) {
            return (
              typeof e == "string" &&
              o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName(e)
            );
          })
        )
          return { headerIndex: t, headers: n };
      }
      for (var r = 0; r < e.length; r++) {
        var a = k(e[r]);
        if (a != null && a.some(E)) return { headerIndex: r, headers: a };
      }
      return null;
    }
    function T(e) {
      for (var t = 0; t < e.length; t++) {
        var n = k(e[t]);
        if (n != null) {
          var r = R(n);
          if (r.phone != null && D(n)) return { data: n, index: t };
        }
      }
      return null;
    }
    function D(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = R(t);
      return d.some(function (e) {
        return e !== "phone" && r[e] != null;
      });
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              c(t) === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ) {
              var n = yield t.arrayBuffer(),
                a = yield r("JSResourceForInteraction")("xlsx")
                  .__setRef("WAWebContactManagerImportMappingUtils")
                  .load(),
                i = a.read(n, { type: "array" }),
                l = i.Sheets[i.SheetNames[0]],
                s = a.utils
                  .sheet_to_json(l, { header: 1, raw: !1 })
                  .map(function (e) {
                    return e.map(function (e) {
                      return e != null ? String(e) : "";
                    });
                  });
              return I(s);
            }
            var u = yield t.text(),
              d = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(u),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(u, d, T),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(u, p);
            var _ = I(p.data);
            return (
              _ != null &&
                o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
                  u,
                  p,
                  _.headerIndex,
                  m.separator,
                ),
              _
            );
          } catch (t) {
            if (
              t instanceof
              o("WAWebContactImportTypedError").WAWebContactImportTypedError
            )
              throw t;
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[cm:import] header extraction failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("cm-import-extract-headers-failed"),
              null
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var n = new Map();
      for (var r of d) {
        var a = t[r];
        a != null && a !== "" && n.set(a, m[r]);
      }
      return n.size === 0
        ? [].concat(e)
        : e.map(function (e) {
            var t = n.get(e);
            return t != null
              ? t
              : o(
                    "WAWebContactImportTemplateParsingUtils",
                  ).isParsedNameOrPhoneFieldName(e) || N(e)
                ? ""
                : e;
          });
    }
    function N(e) {
      return b.some(function (t) {
        var n = t.aliases;
        return o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          n,
        );
      });
    }
    function M(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, T),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = I(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat(P(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(M).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            o = yield r("JSResourceForInteraction")("xlsx")
              .__setRef("WAWebContactManagerImportMappingUtils")
              .load(),
            a = o.read(n, { type: "array" }),
            i = a.SheetNames[0],
            l = a.Sheets[i],
            s = o.utils
              .sheet_to_json(l, { header: 1, raw: !1 })
              .map(function (e) {
                return e.map(function (e) {
                  return e != null ? String(e) : "";
                });
              }),
            u = I(s);
          if (u == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(P(s[u.headerIndex], t))], {
            origin: { c: 0, r: u.headerIndex },
          });
          var c = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([c], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return c(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? F(e, t)
            : w(e, t);
        })),
        W.apply(this, arguments)
      );
    }
    ((l.getContactManagerImportFileType = c),
      (l.TARGET_ORDER = d),
      (l.canonicalHeaderFor = p),
      (l.conflictingNameTargets = v),
      (l.emptyMapping = S),
      (l.suggestImportMapping = R),
      (l.isMappingComplete = L),
      (l.findHeaderRowInMatrix = I),
      (l.findContactManagerHeaderRowForDelimiterRecovery = T),
      (l.extractImportHeaders = x),
      (l.renameHeaderRow = P),
      (l.applyMappingToFile = B));
  },
  98,
);
