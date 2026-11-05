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
    "WAWebCustomerManagerImportTargets",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3;
    function u(e) {
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
    function c(e) {
      return o("WAWebCustomerManagerImportTargets").getImportTarget(e)
        .canonicalHeader;
    }
    function d(e) {
      return e === "fullName"
        ? ["firstName", "lastName"]
        : e === "firstName" || e === "lastName"
          ? ["fullName"]
          : [];
    }
    function m() {
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
    function p(e) {
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
          for (var f of o("WAWebCustomerManagerImportTargets")
            .MATCH_TARGET_ORDER)
            if (
              p[f] == null &&
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                _,
                o("WAWebCustomerManagerImportTargets").getImportTarget(f)
                  .aliases,
              )
            ) {
              p[f] = _;
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
    function _(e) {
      return e.phone != null && e.phone.trim() !== "";
    }
    function f(e) {
      return e != null && String(e).trim() !== "";
    }
    function g(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return e != null ? String(e) : "";
          })
        : null;
    }
    function h(e, t) {
      for (var n = [], r = t + 1; r < e.length && n.length < s; r++) {
        var o = g(e[r]);
        o != null && o.some(f) && n.push(o);
      }
      return n;
    }
    function y(e) {
      for (var t = 0; t < e.length; t++) {
        var n = g(e[t]);
        if (
          n != null &&
          n.some(function (e) {
            return o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName(
              e,
            );
          })
        )
          return { headerIndex: t, headers: n, sampleRows: h(e, t) };
      }
      for (var r = 0; r < e.length; r++) {
        var a = g(e[r]);
        if (a != null && a.some(f))
          return { headerIndex: r, headers: a, sampleRows: h(e, r) };
      }
      return null;
    }
    var C = 2;
    function b(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var o = g(e[r]);
        if (o != null) {
          var a = p(o);
          if (
            o.length >= C &&
            a.phone != null &&
            (S(o) ||
              (t != null &&
                n !== !0 &&
                v({
                  data: e,
                  delimiter: t,
                  headerIndex: r,
                  headerWidth: o.length,
                })))
          )
            return { data: o, index: r };
        }
      }
      return null;
    }
    function v(e) {
      var t = e.data,
        n = e.delimiter,
        r = e.headerIndex,
        o = e.headerWidth;
      return t.slice(r + 1).some(function (e) {
        return (
          e.length === o &&
          e.some(function (e) {
            return e.includes(n);
          })
        );
      });
    }
    function S(e) {
      var t = [];
      for (var n of e) t.push.apply(t, n.split(/[;\t]/));
      var r = p(t);
      return o("WAWebCustomerManagerImportTargets").TARGET_ORDER.some(
        function (e) {
          return e !== "phone" && r[e] != null;
        },
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            if (
              u(t) === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
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
              return y(s);
            }
            var c = yield t.text(),
              d = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(c),
              m = yield o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(c, d, b, { fullFileProbe: !0 }),
              p = m.result;
            o("WAWebContactImportCSVValidation").validateCSVParseResult(c, p);
            var _ = y(p.data);
            return (
              _ != null &&
                o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
                  c,
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = new Map();
      for (var r of o("WAWebCustomerManagerImportTargets").TARGET_ORDER) {
        var a = t[r];
        a != null && a !== "" && n.set(a, c(r));
      }
      return n.size === 0
        ? [].concat(e)
        : e.map(function (e) {
            var t = n.get(e);
            return t != null
              ? t
              : o(
                    "WAWebContactImportTemplateParsingUtils",
                  ).isParsedNameOrPhoneFieldName(e) || k(e)
                ? ""
                : e;
          });
    }
    function k(e) {
      return o("WAWebCustomerManagerImportTargets").MATCH_TARGET_ORDER.some(
        function (t) {
          return o(
            "WAWebContactImportSmartColumnDetection",
          ).matchHeaderToAliases(
            e,
            o("WAWebCustomerManagerImportTargets").getImportTarget(t).aliases,
          );
        },
      );
    }
    function I(e) {
      return /[\",\n\r]/.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e;
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n),
            a = yield o(
              "WAWebContactImportCSVValidation",
            ).recoverUndetectableCSVDelimiter(n, r, b, { fullFileProbe: !0 }),
            i = a.result;
          o("WAWebContactImportCSVValidation").validateCSVParseResult(n, i);
          var l = i.data.map(function (e) {
              return e.map(function (e) {
                return e != null ? String(e) : "";
              });
            }),
            s = y(l);
          if (s == null) return e;
          (o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            n,
            i,
            s.headerIndex,
            a.separator,
          ),
            (l[s.headerIndex] = [].concat(E(l[s.headerIndex], t))));
          var u = l
            .map(function (e) {
              return e.map(I).join(",");
            })
            .join("\n");
          return new File([u], e.name, { type: "text/csv" });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            d = y(c);
          if (d == null) return e;
          o.utils.sheet_add_aoa(l, [[].concat(E(c[d.headerIndex], t))], {
            origin: { c: u.c, r: u.r + d.headerIndex },
          });
          var m = o.write(a, { bookType: "xlsx", type: "array" });
          return new File([m], e.name, {
            type:
              e.type ||
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          });
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
          return u(e) ===
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? x(e, t)
            : T(e, t);
        })),
        N.apply(this, arguments)
      );
    }
    ((l.TARGET_ORDER = o("WAWebCustomerManagerImportTargets").TARGET_ORDER),
      (l.getCustomerManagerImportFileType = u),
      (l.canonicalHeaderFor = c),
      (l.conflictingNameTargets = d),
      (l.emptyMapping = m),
      (l.suggestImportMapping = p),
      (l.isMappingComplete = _),
      (l.findHeaderRowInMatrix = y),
      (l.findCustomerManagerHeaderRowForDelimiterRecovery = b),
      (l.extractImportHeaders = R),
      (l.renameHeaderRow = E),
      (l.applyMappingToFile = P));
  },
  98,
);
