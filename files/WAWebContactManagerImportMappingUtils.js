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
      b = _([s.FBT_BIRTHDAY, s.FBT_LAST_ORDER, "Birthday", "Last order"]),
      v = [
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
    function S(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function R() {
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
    function L(e) {
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
          for (var p of v)
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
    function E(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function k(e) {
      return e != null && String(e).trim() !== "";
    }
    function I(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function T(e) {
      for (var t = 0; t < e.length; t++) {
        var n = I(e[t]);
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
        var a = I(e[r]);
        if (a != null && a.some(k)) return { headerIndex: r, headers: a };
      }
      return null;
    }
    function D(e) {
      for (var t = 0; t < e.length; t++) {
        var n = I(e[t]);
        if (n != null) {
          var r = L(n);
          if (r.phone != null && x(n)) return { data: n, index: t };
        }
      }
      return null;
    }
    function x(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = L(t);
      return d.some(function (e) {
        return e !== "phone" && r[e] != null;
      });
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
              return T(s);
            }
            var u = yield t.text(),
              d = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(u),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(u, d, D),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(u, p);
            var _ = T(p.data);
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
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
                  ).isParsedNameOrPhoneFieldName(e) || M(e)
                ? ""
                : e;
          });
    }
    function M(e) {
      return (
        v.some(function (t) {
          var n = t.aliases;
          return o(
            "WAWebContactImportSmartColumnDetection",
          ).matchHeaderToAliases(e, n);
        }) ||
        o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(e, b)
      );
    }
    function w(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, D),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = T(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat(N(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(w).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            o = yield r("JSResourceForInteraction")("xlsx")
              .__setRef("WAWebContactManagerImportMappingUtils")
              .load(),
            a = o.read(n, { type: "array" }),
            i = a.SheetNames[0],
            l = a.Sheets[i],
            s = l["!ref"],
            u =
              typeof s == "string" ? o.utils.decode_range(s).s : { c: 0, r: 0 },
            c = o.utils
              .sheet_to_json(l, { header: 1, raw: !1 })
              .map(function (e) {
                return e.map(function (e) {
                  return e != null ? String(e) : "";
                });
              }),
            d = T(c);
          if (d == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(N(c[d.headerIndex], t))], {
            origin: { c: u.c, r: u.r + d.headerIndex },
          });
          var m = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([m], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return c(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? O(e, t)
            : A(e, t);
        })),
        q.apply(this, arguments)
      );
    }
    ((l.getContactManagerImportFileType = c),
      (l.TARGET_ORDER = d),
      (l.canonicalHeaderFor = p),
      (l.conflictingNameTargets = S),
      (l.emptyMapping = R),
      (l.suggestImportMapping = L),
      (l.isMappingComplete = E),
      (l.findHeaderRowInMatrix = T),
      (l.findContactManagerHeaderRowForDelimiterRecovery = D),
      (l.extractImportHeaders = $),
      (l.renameHeaderRow = N),
      (l.applyMappingToFile = W));
  },
  98,
);
