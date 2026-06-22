__d(
  "WAWebContactImportFileProcessor",
  [
    "WALogger",
    "WAWebABProps",
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
      f = 100;
    function g(e) {
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
    function h(e, t) {
      if (e.length > t)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS,
        );
    }
    function y(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.some(t)) return { data: r, index: n };
      }
    }
    var C = 5;
    function b(e) {
      for (var t = null, n = Math.min(e.length, C), r = 0; r < n; r++) {
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
      return t != null ? { data: t.data, index: t.index } : y(e, T);
    }
    function v(e, t) {
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
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            r = yield o("WAWebContactImportXLSXParsingUtils").loadXLSX(n);
          return v(r, t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n);
          return v(r.data, t);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebContactImportFileTypeValidator").isFileOfType(
            e,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          );
          return n ? S(e, t) : L(e, t);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return typeof e == "string" && e.trim() !== "";
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0) return e;
          var n = Object.keys(e[0].data),
            r = e.map(function (e) {
              return n.map(function (t) {
                var n;
                return (n = e.data[t]) != null ? n : "";
              });
            }),
            a = r.slice(0, f),
            i = o("WAWebContactImportSmartColumnDetection").smartDetectColumns(
              n,
              a,
            ),
            l = yield $(i, n, a, t.onConfirmDetection);
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              : { columnSelectionSource: "user", detection: N(t, i) };
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function F(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return { contact: e, normalizedPhone: F(e.phone) };
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
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = o("WAWebContactImportFileTypeValidator").isFileOfType(
            t,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          )
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
            a,
            t.size,
          );
          try {
            (g(t),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] file valid: ",
                    " ",
                    "",
                  ])),
                a,
                t.name,
              ));
            var i = o("WAWebABProps").getABPropConfigValue(
                "smbw_business_broadcast_smart_column_detection_enabled",
              ),
              l = i
                ? b
                : function (e) {
                    return y(
                      e,
                      o("WAWebContactImportTemplateParsingUtils")
                        .isPhoneFieldName,
                    );
                  },
              f = yield k(t, l);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] parsed: ",
                  " rows (",
                  ")",
                ])),
              f.length,
              a,
            ),
              h(f, r.recipientLimit),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] rows ok: ",
                    "/",
                    "",
                  ])),
                f.length,
                r.recipientLimit,
              ));
            var C = i ? yield D(f, n) : f,
              v = yield M(C);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] processed: ",
                  "+ ",
                  "-",
                ])),
              v.validContacts.length,
              v.errors.length,
            );
            var S = yield O(v.validContacts, r.verifyOptions),
              R = S.nonWhatsAppUserErrors,
              L = S.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] verified: ",
                  "+ ",
                  "-",
                ])),
              L.length,
              R.length,
            );
            var E = A([].concat(v.errors, R)),
              I = E.map(function (e) {
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
              L.length,
              I.length,
            ),
              n.onComplete(L, I));
          } catch (e) {
            var T = e instanceof Error ? e.name : typeof e,
              x = e instanceof Error ? e.message : String(e),
              $ =
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
                a,
                t.name,
                T,
                x,
                $,
              )
              .verbose()
              .sendLogs("contact-import-file-processing-failed", {
                sampling: 1,
              }),
              n.onError(e));
          }
        })),
        q.apply(this, arguments)
      );
    }
    ((l.normalizePhoneNumber = F), (l.processFile = W));
  },
  98,
);
