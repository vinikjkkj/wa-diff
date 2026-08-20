__d(
  "WAWebContactImportFileProcessor",
  [
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportSmartColumnDetection",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "WAWebContactImportXLSXParsingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 5242880,
      g = 100;
    function h(e) {
      var t,
        n = (t = o("WAWebContactImportFileTypeValidator")).isFileOfType(
          e,
          t.FileType.EXCEL,
        ),
        r = t.isFileOfType(e, t.FileType.CSV);
      if (!n && !r)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.TYPE,
        );
    }
    function y(e, t) {
      if (e.length > t)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS,
        );
    }
    function C(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.some(t)) return { data: r, index: n };
      }
    }
    var b = 5;
    function v(e) {
      for (var t = null, n = Math.min(e.length, b), r = 0; r < n; r++) {
        var a = e[r],
          i = 0;
        for (var l of a)
          typeof l == "string" &&
            (o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
              l,
              o("WAWebContactImportSmartColumnDetection").PHONE_HEADER_ALIASES,
            ) ||
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                l,
                o("WAWebContactImportSmartColumnDetection")
                  .FULL_NAME_HEADER_ALIASES,
              ) ||
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                l,
                o("WAWebContactImportSmartColumnDetection")
                  .FIRST_NAME_HEADER_ALIASES,
              ) ||
              o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(
                l,
                o("WAWebContactImportSmartColumnDetection")
                  .LAST_NAME_HEADER_ALIASES,
              )) &&
            i++;
        i > 0 &&
          (t == null || i > t.matches) &&
          (t = { data: a, index: r, matches: i });
      }
      return t != null ? { data: t.data, index: t.index } : C(e, x);
    }
    function S(e, t) {
      var n = [],
        r = t(e);
      if (r == null)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.FORMAT,
        );
      for (var a = r.index + 1; a < e.length; a++) {
        var i = e[a];
        if (
          !i.every(function (e) {
            return e == null || (typeof e == "string" && e.trim() === "");
          })
        ) {
          for (
            var l = { data: {}, originalRowIndex: a }, s = 0;
            s < r.data.length;
            s++
          )
            if (r.data[s]) {
              var u = i[s];
              l.data[r.data[s]] = u != null ? String(u) : "";
            }
          n.push(l);
        }
      }
      return n;
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            r = yield o("WAWebContactImportXLSXParsingUtils").loadXLSX(n);
          return S(r, t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n);
          return S(r.data, t);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return n === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
            ? R(e, t)
            : E(e, t);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return t != null
        ? t
        : o("WAWebContactImportFileTypeValidator").isFileOfType(
              e,
              o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
            )
          ? o("WAWebContactImportFileTypeValidator").FileType.EXCEL
          : o("WAWebContactImportFileTypeValidator").FileType.CSV;
    }
    function x(e) {
      return typeof e == "string" && e.trim() !== "";
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0) return e;
          var n = Object.keys(e[0].data),
            r = e.map(function (e) {
              return n.map(function (t) {
                var n;
                return (n = e.data[t]) != null ? n : "";
              });
            }),
            a = r.slice(0, g),
            i = o("WAWebContactImportSmartColumnDetection").smartDetectColumns(
              n,
              a,
            ),
            l = yield N(i, n, a, t.onConfirmDetection);
          if (l == null)
            throw new (o(
              "WAWebContactImportTypedError",
            ).WAWebContactImportTypedError)(
              o("WAWebContactImportTypedError").FileError.FORMAT,
            );
          var s = l.columnSelectionSource,
            u = l.detection;
          t.onSmartDetectionComplete != null &&
            t.onSmartDetectionComplete({
              columnSelectionSource: s,
              detection: u,
              headerRow: n,
              rawRows: e.map(function (e) {
                return { rowData: e.data, rowIndex: e.originalRowIndex };
              }),
              sampleRows: a,
            });
          var c = o(
            "WAWebContactImportSmartColumnDetection",
          ).applyColumnMapping(
            e.map(function (e) {
              return e.data;
            }),
            u,
          );
          return c.map(function (t, n) {
            return { data: t, originalRowIndex: e[n].originalRowIndex };
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o,
              a = (o = e.phoneColumn) == null ? void 0 : o.confidence;
            if (e.phoneColumn != null && a === "high")
              return { columnSelectionSource: "auto", detection: e };
            if (r == null)
              return e.phoneColumn == null || a === "low"
                ? null
                : { columnSelectionSource: "auto", detection: e };
            var i = yield r(e, t, n.slice(0, 3));
            return i == null
              ? null
              : { columnSelectionSource: "user", detection: w(t, i) };
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      var n = {
          header: t.phoneHeader,
          columnIndex: e.indexOf(t.phoneHeader),
          confidence: "high",
          matchedBy: "header",
        },
        r =
          t.nameHeader == null
            ? null
            : {
                header: t.nameHeader,
                columnIndex: e.indexOf(t.nameHeader),
                confidence: "high",
                matchedBy: "header",
              };
      return {
        phoneColumn: n,
        fullNameColumn: r,
        firstNameColumn: null,
        lastNameColumn: null,
      };
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            return Object.keys(e.data).reduce(
              function (t, n) {
                return ((t[n] = e.data[n]), t);
              },
              { originalRowIndex: e.originalRowIndex },
            );
          });
          return o("WAWebContactImportTemplateParsingUtils").parseContactData(
            t,
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function B(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return { contact: e, normalizedPhone: B(e.phone) };
            }),
            r = n.map(function (e) {
              var t = e.normalizedPhone;
              return t;
            }),
            a = yield o(
              "WAWebContactImportContactVerifier",
            ).verifyWhatsAppUsers(r, t),
            i = [],
            l = [];
          return (
            n.forEach(function (e) {
              var t = e.contact,
                n = e.normalizedPhone,
                r = a[n],
                s = (r == null ? void 0 : r.isWhatsAppUser) === !0;
              if (s && (r == null ? void 0 : r.lid) != null) {
                var u = babelHelpers.extends({}, t, { lid: r.lid });
                i.push(u);
              } else
                l.push({
                  errorType: o("WAWebContactImportTypedError").PhoneError
                    .NOT_WHATSAPP_USER,
                  rowData: {
                    firstName: t.firstName,
                    lastName: t.lastName,
                    phone: t.phone,
                  },
                  rowIndex: t.rowIndex,
                });
            }),
            { nonWhatsAppUserErrors: l, verifiedContacts: i }
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = D(t, r.forceFileType),
            i =
              a === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
                ? "Excel"
                : "CSV";
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import] processing: ",
                " (",
                ", ",
                "B)",
              ])),
            t.name,
            i,
            t.size,
          );
          try {
            var l;
            (h(t),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] file valid: ",
                    " ",
                    "",
                  ])),
                i,
                t.name,
              ));
            var f = r.smartColumnDetectionEnabled === !0,
              g = f
                ? v
                : function (e) {
                    return C(
                      e,
                      o("WAWebContactImportTemplateParsingUtils")
                        .isPhoneFieldName,
                    );
                  },
              b = yield I(t, g, a);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] parsed: ",
                  " rows (",
                  ")",
                ])),
              b.length,
              i,
            );
            var S = (l = r.fileRowLimit) != null ? l : r.recipientLimit;
            (y(b, S),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] rows ok: ",
                    "/",
                    "",
                  ])),
                b.length,
                S,
              ));
            var R = f ? yield $(b, n) : b,
              L = yield A(R);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] processed: ",
                  "+ ",
                  "-",
                ])),
              L.validContacts.length,
              L.errors.length,
            );
            var E =
                r.skipWhatsAppVerification === !0
                  ? {
                      nonWhatsAppUserErrors: [],
                      verifiedContacts: L.validContacts,
                    }
                  : yield W(L.validContacts, r.verifyOptions),
              k = E.nonWhatsAppUserErrors,
              T = E.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] verified: ",
                  "+ ",
                  "-",
                ])),
              T.length,
              k.length,
            );
            var x = O([].concat(L.errors, k)),
              P = x
                .map(function (e) {
                  return babelHelpers.extends({}, e, {
                    contactIndex: null,
                    type: "error",
                  });
                })
                .sort(function (e, t) {
                  return e.rowIndex - t.rowIndex;
                });
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] done: ",
                  "+ ",
                  "-",
                ])),
              T.length,
              P.length,
            ),
              n.onComplete(T, P));
          } catch (e) {
            var N = e instanceof Error ? e.name : typeof e,
              M = e instanceof Error ? e.message : String(e),
              w =
                e instanceof
                o("WAWebContactImportTypedError").WAWebContactImportTypedError
                  ? String(e.type)
                  : "none";
            (o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] failed: ",
                    " ",
                    " err=",
                    " msg=",
                    " type=",
                    "",
                  ])),
                i,
                t.name,
                N,
                M,
                w,
              )
              .verbose()
              .sendLogs("contact-import-file-processing-failed", {
                sampling: 1,
              }),
              n.onError(e));
          }
        })),
        V.apply(this, arguments)
      );
    }
    ((l.MAX_UNSUBSCRIBE_RECIPIENT_FILE_SIZE_BYTES = f),
      (l.normalizePhoneNumber = B),
      (l.processFile = U));
  },
  98,
);
