__d(
  "WAWebContactImportFileProcessor",
  [
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportCSVValidation",
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
      return t != null ? { data: t.data, index: t.index } : C(e, $);
    }
    function S(e, t) {
      var n = [];
      if (t == null)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.FORMAT,
        );
      for (var r = 0, a = t.index + 1; a < e.length; a++) {
        var i = e[a],
          l = R(i);
        if (l !== 0) {
          r = Math.max(r, l);
          for (
            var s = { data: {}, originalRowIndex: a }, u = 0;
            u < t.data.length;
            u++
          )
            if (t.data[u]) {
              var c = i[u];
              s.data[t.data[u]] = c != null ? String(c) : "";
            }
          n.push(s);
        }
      }
      return { rows: n, shape: { headerRow: t.data, maxPopulatedRowWidth: r } };
    }
    function R(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n != null && (typeof n != "string" || n.trim() !== ""))
          return t + 1;
      }
      return 0;
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            r = yield o("WAWebContactImportXLSXParsingUtils").loadXLSX(n);
          return S(r, t(r));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield e.text(),
              i = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(a),
              l = i,
              s = null;
            if (n) {
              var u =
                r == null
                  ? { result: i, separator: null }
                  : yield o(
                      "WAWebContactImportCSVValidation",
                    ).recoverUndetectableCSVDelimiter(a, i, r);
              ((l = u.result),
                (s = u.separator),
                o("WAWebContactImportCSVValidation").validateCSVParseResult(
                  a,
                  l,
                ));
            }
            var c = t(l.data);
            return (
              n &&
                c != null &&
                o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
                  a,
                  l,
                  c.index,
                  s,
                ),
              S(l.data, c)
            );
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r, o) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            return n === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
              ? L(e, t)
              : k(e, t, r, a);
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return t != null
        ? t
        : o("WAWebContactImportFileTypeValidator").isFileOfType(
              e,
              o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
            )
          ? o("WAWebContactImportFileTypeValidator").FileType.EXCEL
          : o("WAWebContactImportFileTypeValidator").FileType.CSV;
    }
    function $(e) {
      return typeof e == "string" && e.trim() !== "";
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            l = yield M(i, n, a, t.onConfirmDetection);
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
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              : { columnSelectionSource: "user", detection: A(t, i) };
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
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
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function W(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return { contact: e, normalizedPhone: W(e.phone) };
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
        U.apply(this, arguments)
      );
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = x(t, r.forceFileType),
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
            var l, f;
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
            var g = r.smartColumnDetectionEnabled === !0,
              b = g
                ? v
                : function (e) {
                    return C(
                      e,
                      o("WAWebContactImportTemplateParsingUtils")
                        .isPhoneFieldName,
                    );
                  },
              S = yield T(
                t,
                b,
                a,
                r.rejectMalformedCSV === !0,
                (l = r.findCSVHeaderForDelimiterRecovery) != null ? l : null,
              ),
              R = S.rows,
              L = S.shape;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] parsed: ",
                  " rows (",
                  ")",
                ])),
              R.length,
              i,
            ),
              n.onFileShape == null || n.onFileShape(L));
            var E = (f = r.fileRowLimit) != null ? f : r.recipientLimit;
            (y(R, E),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] rows ok: ",
                    "/",
                    "",
                  ])),
                R.length,
                E,
              ));
            var k = g ? yield P(R, n) : R,
              I = yield F(k);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] processed: ",
                  "+ ",
                  "-",
                ])),
              I.validContacts.length,
              I.errors.length,
            );
            var D =
                r.skipWhatsAppVerification === !0
                  ? {
                      nonWhatsAppUserErrors: [],
                      verifiedContacts: I.validContacts,
                    }
                  : yield q(I.validContacts, r.verifyOptions),
              $ = D.nonWhatsAppUserErrors,
              N = D.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] verified: ",
                  "+ ",
                  "-",
                ])),
              N.length,
              $.length,
            );
            var M = B([].concat(I.errors, $)),
              w = M.map(function (e) {
                return babelHelpers.extends({}, e, {
                  contactIndex: null,
                  type: "error",
                });
              }).sort(function (e, t) {
                return e.rowIndex - t.rowIndex;
              });
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] done: ",
                  "+ ",
                  "-",
                ])),
              N.length,
              w.length,
            ),
              n.onComplete(N, w));
          } catch (e) {
            var A = e instanceof Error ? e.name : typeof e,
              O = e instanceof Error ? e.message : String(e),
              W =
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
                A,
                O,
                W,
              )
              .verbose()
              .sendLogs("contact-import-file-processing-failed", {
                sampling: 1,
              }),
              n.onError(e));
          }
        })),
        H.apply(this, arguments)
      );
    }
    ((l.MAX_UNSUBSCRIBE_RECIPIENT_FILE_SIZE_BYTES = f),
      (l.normalizePhoneNumber = W),
      (l.processFile = V));
  },
  98,
);
