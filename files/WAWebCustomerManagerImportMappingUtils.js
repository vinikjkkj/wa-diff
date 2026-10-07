__d(
  "WAWebCustomerManagerImportMappingUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportCSVValidation",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "WAWebCustomerManagerImportTemplateUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3;
    function d(e) {
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
    var m = [
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
      p = {
        acquisitionSource: "Source",
        address: "Address",
        email: "Email",
        firstName: "First name",
        fullName: "Full name",
        lastName: "Last name",
        leadStage: "Lead stage",
        notes: "Notes",
        phone: "Phone number",
        birthday: "Birthday",
        lastOrder: "Last order",
      };
    function _(e) {
      return p[e];
    }
    function f(e) {
      var t = new Set();
      for (var n of e)
        t.add(o("WAWebContactImportSmartColumnDetection").normalizeHeader(n));
      return t;
    }
    var g = f([
        (s = o("WAWebCustomerManagerImportTemplateUtils")).FBT_EMAIL,
        "email",
        "e-mail",
        "e mail",
        "email address",
        "e mail address",
        "e-mail address",
        "correo",
        "correo electronico",
      ]),
      h = f([
        s.FBT_ADDRESS,
        "address",
        "direccion",
        "direcci\xF3n",
        "endereco",
        "endere\xE7o",
        "adresse",
        "alamat",
      ]),
      y = f([
        s.FBT_LEAD_STAGE,
        "lead stage",
        "leadstage",
        "stage",
        "etapa",
        "fase",
      ]),
      C = f([
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
      b = f([
        s.FBT_ACQUISITION_SOURCE,
        "source",
        "acquisition source",
        "acquisition",
        "origen",
        "origem",
        "fonte",
      ]),
      v = f([
        s.FBT_BIRTHDAY,
        "birthday",
        "birth date",
        "birthdate",
        "date of birth",
        "dob",
      ]),
      S = f([
        s.FBT_LAST_ORDER,
        "last order",
        "last order date",
        "date of last order",
        "last purchase",
        "last purchase date",
      ]),
      R = [
        {
          aliases: (u = o("WAWebContactImportSmartColumnDetection"))
            .PHONE_HEADER_ALIASES,
          key: "phone",
        },
        { aliases: u.FIRST_NAME_HEADER_ALIASES, key: "firstName" },
        { aliases: u.FULL_NAME_HEADER_ALIASES, key: "fullName" },
        { aliases: u.LAST_NAME_HEADER_ALIASES, key: "lastName" },
        { aliases: y, key: "leadStage" },
        { aliases: g, key: "email" },
        { aliases: h, key: "address" },
        { aliases: C, key: "notes" },
        { aliases: b, key: "acquisitionSource" },
        { aliases: v, key: "birthday" },
        { aliases: S, key: "lastOrder" },
      ];
    function L(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function E() {
      return {
        acquisitionSource: null,
        address: null,
        birthday: null,
        email: null,
        firstName: null,
        fullName: null,
        lastName: null,
        leadStage: null,
        notes: null,
        phone: null,
        lastOrder: null,
      };
    }
    function k(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p = {};
      for (var _ of e)
        if (_.trim() !== "") {
          for (var f of R)
            if (
              p[f.key] == null &&
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                _,
                f.aliases,
              )
            ) {
              p[f.key] = _;
              break;
            }
        }
      var g = p.firstName != null || p.lastName != null;
      return {
        acquisitionSource: (t = p.acquisitionSource) != null ? t : null,
        address: (n = p.address) != null ? n : null,
        birthday: (r = p.birthday) != null ? r : null,
        email: (a = p.email) != null ? a : null,
        firstName: (i = p.firstName) != null ? i : null,
        fullName: g ? null : (l = p.fullName) != null ? l : null,
        lastName: (s = p.lastName) != null ? s : null,
        leadStage: (u = p.leadStage) != null ? u : null,
        notes: (c = p.notes) != null ? c : null,
        phone: (d = p.phone) != null ? d : null,
        lastOrder: (m = p.lastOrder) != null ? m : null,
      };
    }
    function I(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function T(e) {
      return e != null && String(e).trim() !== "";
    }
    function D(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function x(e, t) {
      for (var n = [], r = t + 1; r < e.length && n.length < c; r++) {
        var o = D(e[r]);
        o != null && o.some(T) && n.push(o);
      }
      return n;
    }
    function $(e) {
      for (var t = 0; t < e.length; t++) {
        var n = D(e[t]);
        if (
          n != null &&
          n.some(function (e) {
            return (
              typeof e == "string" &&
              o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName(e)
            );
          })
        )
          return { headerIndex: t, headers: n, sampleRows: x(e, t) };
      }
      for (var r = 0; r < e.length; r++) {
        var a = D(e[r]);
        if (a != null && a.some(T))
          return { headerIndex: r, headers: a, sampleRows: x(e, r) };
      }
      return null;
    }
    var P = 2;
    function N(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var o = D(e[r]);
        if (o != null) {
          var a = k(o);
          if (
            o.length >= P &&
            a.phone != null &&
            (w(o) || (t != null && n !== !0 && M(e, r, o.length, t)))
          )
            return { data: o, index: r };
        }
      }
      return null;
    }
    function M(e, t, n, r) {
      return e.slice(t + 1).some(function (e) {
        return (
          e.length === n &&
          e.some(function (e) {
            return e.includes(r);
          })
        );
      });
    }
    function w(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = k(t);
      return m.some(function (e) {
        return e !== "phone" && r[e] != null;
      });
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              d(t) === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ) {
              var n = yield t.arrayBuffer(),
                a = yield r("JSResourceForInteraction")("xlsx")
                  .__setRef("WAWebCustomerManagerImportMappingUtils")
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
              return $(s);
            }
            var u = yield t.text(),
              c = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(u),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(u, c, N, { fullFileProbe: !0 }),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(u, p);
            var _ = $(p.data);
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
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      var n = new Map();
      for (var r of m) {
        var a = t[r];
        a != null && a !== "" && n.set(a, p[r]);
      }
      return n.size === 0
        ? [].concat(e)
        : e.map(function (e) {
            var t = n.get(e);
            return t != null
              ? t
              : o(
                    "WAWebContactImportTemplateParsingUtils",
                  ).isParsedNameOrPhoneFieldName(e) || B(e)
                ? ""
                : e;
          });
    }
    function B(e) {
      return R.some(function (t) {
        var n = t.aliases;
        return o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          n,
        );
      });
    }
    function W(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, N, { fullFileProbe: !0 }),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = $(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat(O(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(W).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            o = yield r("JSResourceForInteraction")("xlsx")
              .__setRef("WAWebCustomerManagerImportMappingUtils")
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
            d = $(c);
          if (d == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(O(c[d.headerIndex], t))], {
            origin: { c: u.c, r: u.r + d.headerIndex },
          });
          var m = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([m], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return d(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? V(e, t)
            : q(e, t);
        })),
        z.apply(this, arguments)
      );
    }
    ((l.getCustomerManagerImportFileType = d),
      (l.TARGET_ORDER = m),
      (l.canonicalHeaderFor = _),
      (l.conflictingNameTargets = L),
      (l.emptyMapping = E),
      (l.suggestImportMapping = k),
      (l.isMappingComplete = I),
      (l.findHeaderRowInMatrix = $),
      (l.findCustomerManagerHeaderRowForDelimiterRecovery = N),
      (l.extractImportHeaders = A),
      (l.renameHeaderRow = O),
      (l.applyMappingToFile = G));
  },
  98,
);
