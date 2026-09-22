__d(
  "WAWebContactManagerImportMappingUtils",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTemplateParsingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [
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
      c = {
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
    function d(e) {
      return c[e];
    }
    function m(e) {
      var t = new Set();
      for (var n of e)
        t.add(o("WAWebContactImportSmartColumnDetection").normalizeHeader(n));
      return t;
    }
    var p = m([
        "email",
        "e-mail",
        "e mail",
        "email address",
        "e mail address",
        "e-mail address",
        "correo",
        "correo electronico",
      ]),
      _ = m([
        "address",
        "direccion",
        "direcci\xF3n",
        "endereco",
        "endere\xE7o",
        "adresse",
        "alamat",
      ]),
      f = m(["lead stage", "leadstage", "stage", "etapa", "fase"]),
      g = m([
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
      h = m([
        "source",
        "acquisition source",
        "acquisition",
        "origen",
        "origem",
        "fonte",
      ]),
      y = [
        {
          aliases: (s = o("WAWebContactImportSmartColumnDetection"))
            .PHONE_HEADER_ALIASES,
          key: "phone",
        },
        { aliases: s.FIRST_NAME_HEADER_ALIASES, key: "firstName" },
        { aliases: s.FULL_NAME_HEADER_ALIASES, key: "fullName" },
        { aliases: s.LAST_NAME_HEADER_ALIASES, key: "lastName" },
        { aliases: f, key: "leadStage" },
        { aliases: p, key: "email" },
        { aliases: _, key: "address" },
        { aliases: g, key: "notes" },
        { aliases: h, key: "acquisitionSource" },
      ];
    function C(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function b() {
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
    function v(e) {
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
          for (var p of y)
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
    function S(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function R(e) {
      return e != null && String(e).trim() !== "";
    }
    function L(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function E(e) {
      for (var t = 0; t < e.length; t++) {
        var n = L(e[t]);
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
        var a = L(e[r]);
        if (a != null && a.some(R)) return { headerIndex: r, headers: a };
      }
      return null;
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              o("WAWebContactImportFileTypeValidator").isFileOfType(
                t,
                o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
              )
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
              return E(s);
            }
            var u = yield t.text(),
              c = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(u);
            return E(c.data);
          } catch (t) {
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = new Map();
      for (var r of u) {
        var a = t[r];
        a != null && a !== "" && n.set(a, c[r]);
      }
      if (n.size === 0) return [].concat(e);
      var i = new Set(n.values());
      return e.map(function (e) {
        var t = n.get(e);
        if (t != null) return t;
        if (
          o(
            "WAWebContactImportTemplateParsingUtils",
          ).isParsedNameOrPhoneFieldName(e)
        )
          return "";
        var r = e.trim().toLowerCase();
        for (var a of i) if (r !== "" && r === a.toLowerCase()) return "";
        return e;
      });
    }
    function D(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = r.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            i = E(a);
          if (i == null) return e;
          a[i.headerIndex] = [].concat(T(a[i.headerIndex], t));
          var l = a
            .map(function (e) {
              return e.map(D).join(",");
            })
            .join("\n");
          return new File([l], e.name, { type: e.type || "text/csv" });
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            u = E(s);
          if (u == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(T(s[u.headerIndex], t))], {
            origin: { c: 0, r: u.headerIndex },
          });
          var c = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([c], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebContactImportFileTypeValidator").isFileOfType(
            e,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          )
            ? P(e, t)
            : x(e, t);
        })),
        w.apply(this, arguments)
      );
    }
    ((l.TARGET_ORDER = u),
      (l.canonicalHeaderFor = d),
      (l.conflictingNameTargets = C),
      (l.emptyMapping = b),
      (l.suggestImportMapping = v),
      (l.isMappingComplete = S),
      (l.findHeaderRowInMatrix = E),
      (l.extractImportHeaders = k),
      (l.renameHeaderRow = T),
      (l.applyMappingToFile = M));
  },
  98,
);
