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
        "birthday",
        "lastOrder",
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
        birthday: "Birthday",
        lastOrder: "Last order",
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
      b = _([
        s.FBT_BIRTHDAY,
        "birthday",
        "birth date",
        "birthdate",
        "date of birth",
        "dob",
      ]),
      v = _([
        s.FBT_LAST_ORDER,
        "last order",
        "last order date",
        "date of last order",
        "last purchase",
        "last purchase date",
      ]),
      S = [
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
        { aliases: b, key: "birthday" },
        { aliases: v, key: "lastOrder" },
      ];
    function R(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function L() {
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
    function E(e) {
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
          for (var f of S)
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
    function k(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function I(e) {
      return e != null && String(e).trim() !== "";
    }
    function T(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function D(e) {
      for (var t = 0; t < e.length; t++) {
        var n = T(e[t]);
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
        var a = T(e[r]);
        if (a != null && a.some(I)) return { headerIndex: r, headers: a };
      }
      return null;
    }
    var x = 2;
    function $(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var o = T(e[r]);
        if (o != null) {
          var a = E(o);
          if (
            o.length >= x &&
            a.phone != null &&
            (N(o) || (t != null && n !== !0 && P(e, r, o.length, t)))
          )
            return { data: o, index: r };
        }
      }
      return null;
    }
    function P(e, t, n, r) {
      return e.slice(t + 1).some(function (e) {
        return (
          e.length === n &&
          e.some(function (e) {
            return e.includes(r);
          })
        );
      });
    }
    function N(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = E(t);
      return d.some(function (e) {
        return e !== "phone" && r[e] != null;
      });
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              c(t) === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
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
              return D(s);
            }
            var u = yield t.text(),
              d = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(u),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(u, d, $, { fullFileProbe: !0 }),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(u, p);
            var _ = D(p.data);
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
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
                  ).isParsedNameOrPhoneFieldName(e) || F(e)
                ? ""
                : e;
          });
    }
    function F(e) {
      return S.some(function (t) {
        var n = t.aliases;
        return o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
          e,
          n,
        );
      });
    }
    function O(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, $, { fullFileProbe: !0 }),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = D(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat(A(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(O).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            d = D(c);
          if (d == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(A(c[d.headerIndex], t))], {
            origin: { c: u.c, r: u.r + d.headerIndex },
          });
          var m = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([m], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
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
          return c(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? q(e, t)
            : B(e, t);
        })),
        H.apply(this, arguments)
      );
    }
    ((l.getCustomerManagerImportFileType = c),
      (l.TARGET_ORDER = d),
      (l.canonicalHeaderFor = p),
      (l.conflictingNameTargets = R),
      (l.emptyMapping = L),
      (l.suggestImportMapping = E),
      (l.isMappingComplete = k),
      (l.findHeaderRowInMatrix = D),
      (l.findCustomerManagerHeaderRowForDelimiterRecovery = $),
      (l.extractImportHeaders = M),
      (l.renameHeaderRow = A),
      (l.applyMappingToFile = V));
  },
  98,
);
