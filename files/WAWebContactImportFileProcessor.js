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
    var e, s, u, c, d, m, p, _;
    function f(e) {
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
    function g(e, t) {
      if (e.length > t)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS,
        );
    }
    function h(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.some(t)) return { data: r, index: n };
      }
    }
    function y(e, t) {
      var n = [],
        r = h(e, t);
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.arrayBuffer(),
            r = yield o("WAWebContactImportXLSXParsingUtils").loadXLSX(n);
          return y(r, t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield e.text(),
            r = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(n);
          return y(r.data, t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebContactImportFileTypeValidator").isFileOfType(
            e,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          );
          return n ? C(e, t) : v(e, t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return typeof e == "string" && e.trim() !== "";
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0) return e;
          var n = Object.keys(e[0].data),
            r = e.map(function (e) {
              return n.map(function (t) {
                var n;
                return (n = e.data[t]) != null ? n : "";
              });
            }),
            a = o("WAWebContactImportSmartColumnDetection").smartDetectColumns(
              n,
              r,
            ),
            i = yield T(a, n, r, t);
          if (i == null)
            throw new (o(
              "WAWebContactImportTypedError",
            ).WAWebContactImportTypedError)(
              o("WAWebContactImportTypedError").FileError.FORMAT,
            );
          var l = o(
            "WAWebContactImportSmartColumnDetection",
          ).applyColumnMapping(
            e.map(function (e) {
              return e.data;
            }),
            i,
          );
          return l.map(function (t, n) {
            return { data: t, originalRowIndex: e[n].originalRowIndex };
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o,
              a = (o = e.phoneColumn) == null ? void 0 : o.confidence;
            if (e.phoneColumn != null && a === "high") return e;
            if (r == null)
              return e.phoneColumn == null || a === "low" ? null : e;
            var i = yield r(e, t, n.slice(0, 3));
            return i == null ? null : x(t, i);
          },
        )),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function M(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return { contact: e, normalizedPhone: M(e.phone) };
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
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
            (f(t),
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
                ? E
                : o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName,
              h = yield R(t, l);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] parsed: ",
                  " rows (",
                  ")",
                ])),
              h.length,
              a,
            ),
              g(h, r.recipientLimit),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import] rows ok: ",
                    "/",
                    "",
                  ])),
                h.length,
                r.recipientLimit,
              ));
            var y = i ? yield k(h, n.onConfirmDetection) : h,
              C = yield $(y);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] processed: ",
                  "+ ",
                  "-",
                ])),
              C.validContacts.length,
              C.errors.length,
            );
            var b = yield w(C.validContacts, r.verifyOptions),
              v = b.nonWhatsAppUserErrors,
              S = b.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import] verified: ",
                  "+ ",
                  "-",
                ])),
              S.length,
              v.length,
            );
            var L = N([].concat(C.errors, v)),
              I = L.map(function (e) {
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
              S.length,
              I.length,
            ),
              n.onComplete(S, I));
          } catch (e) {
            var T = e instanceof Error ? e.name : typeof e,
              D = e instanceof Error ? e.message : String(e),
              x =
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
                D,
                x,
              )
              .verbose()
              .sendLogs("contact-import-file-processing-failed", {
                sampling: 1,
              }),
              n.onError(e));
          }
        })),
        O.apply(this, arguments)
      );
    }
    ((l.normalizePhoneNumber = M), (l.processFile = F));
  },
  98,
);
