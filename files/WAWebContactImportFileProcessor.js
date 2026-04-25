__d(
  "WAWebContactImportFileProcessor",
  [
    "WALogger",
    "WAWebContactImportCSVParsingUtils",
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileTypeValidator",
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
    function h(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (
          n.some(o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName)
        )
          return { data: n, index: t };
      }
    }
    function y(e) {
      var t = [],
        n = h(e);
      if (n == null)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.FORMAT,
        );
      for (var r = n.index + 1; r < e.length; r++) {
        var a = e[r];
        if (
          !a.every(function (e) {
            return e == null || (typeof e == "string" && e.trim() === "");
          })
        ) {
          for (
            var i = { data: {}, originalRowIndex: r }, l = 0;
            l < n.data.length;
            l++
          )
            if (n.data[l]) {
              var s = a[l];
              i.data[n.data[l]] = s != null ? String(s) : "";
            }
          t.push(i);
        }
      }
      return t;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.arrayBuffer(),
            n = yield o("WAWebContactImportXLSXParsingUtils").loadXLSX(t);
          return y(n);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.text(),
            n = yield o("WAWebContactImportCSVParsingUtils").loadPapaParse(t);
          return y(n.data);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebContactImportFileTypeValidator").isFileOfType(
            e,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          );
          return t ? C(e) : v(e);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function T(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return { contact: e, normalizedPhone: T(e.phone) };
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = o("WAWebContactImportFileTypeValidator").isFileOfType(
            t,
            o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
          )
            ? "Excel"
            : "CSV";
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import:file-processor] Starting file processing: ",
                " (",
                ", ",
                " bytes)",
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
                    "[contact-import:file-processor] File validation passed for ",
                    " file: ",
                    "",
                  ])),
                a,
                t.name,
              ));
            var i = yield R(t);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import:file-processor] File parsing completed: ",
                  " rows extracted from ",
                  " file",
                ])),
              i.length,
              a,
            ),
              g(i, r.recipientLimit),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import:file-processor] row size \u2713 file=",
                    " rows=",
                    " limit=",
                    "",
                  ])),
                t.name,
                i.length,
                r.recipientLimit,
              ));
            var l = yield E(i);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import:file-processor] Contact data processing completed: ",
                  " valid, ",
                  " errors",
                ])),
              l.validContacts.length,
              l.errors.length,
            );
            var h = yield D(l.validContacts, r.verifyOptions),
              y = h.nonWhatsAppUserErrors,
              C = h.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[contact-import:file-processor] WA verify done: ",
                  "\u2713 ",
                  "\u2717",
                ])),
              C.length,
              y.length,
            );
            var b = I([].concat(l.errors, y)),
              v = b
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
                  "[contact-import:file-processor] processing done: ",
                  " contacts, ",
                  " errors",
                ])),
              C.length,
              v.length,
            ),
              n.onComplete(C, v));
          } catch (e) {
            var S = e instanceof Error ? e.name : typeof e,
              L = e instanceof Error ? e.message : String(e),
              k =
                e instanceof
                o("WAWebContactImportTypedError").WAWebContactImportTypedError
                  ? String(e.type)
                  : "none";
            (o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact-import:file-processor] File processing failed for ",
                    " file ",
                    ": name=",
                    " message=",
                    " typedErrorType=",
                    "",
                  ])),
                a,
                t.name,
                S,
                L,
                k,
              )
              .verbose()
              .sendLogs("contact-import-file-processing-failed", {
                sampling: 1,
              }),
              n.onError(e));
          }
        })),
        P.apply(this, arguments)
      );
    }
    ((l.normalizePhoneNumber = T), (l.processFile = $));
  },
  98,
);
