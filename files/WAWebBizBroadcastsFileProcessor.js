__d(
  "WAWebBizBroadcastsFileProcessor",
  [
    "WALogger",
    "WAWebBizBroadcastsCSVParsingUtils",
    "WAWebBizBroadcastsContactVerifier",
    "WAWebBizBroadcastsFileTypeValidator",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebBizBroadcastsTypedError",
    "WAWebBizBroadcastsXLSXParsingUtils",
    "WAWebBroadcastODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      var t,
        n = (t = o("WAWebBizBroadcastsFileTypeValidator")).isFileOfType(
          e,
          t.FileType.EXCEL,
        ),
        r = t.isFileOfType(e, t.FileType.CSV);
      if (!n && !r)
        throw new (o(
          "WAWebBizBroadcastsTypedError",
        ).WAWebBizBroadcastsTypedError)(
          o("WAWebBizBroadcastsTypedError").FileError.TYPE,
        );
    }
    function g(e) {
      var t = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
      if (e.length > t)
        throw new (o(
          "WAWebBizBroadcastsTypedError",
        ).WAWebBizBroadcastsTypedError)(
          o("WAWebBizBroadcastsTypedError").FileError.TOO_MANY_ITEMS,
        );
    }
    function h(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (
          n.some(o("WAWebBizBroadcastsTemplateParsingUtils").isPhoneFieldName)
        )
          return { data: n, index: t };
      }
    }
    function y(e) {
      var t = [],
        n = h(e);
      if (n == null)
        throw new (o(
          "WAWebBizBroadcastsTypedError",
        ).WAWebBizBroadcastsTypedError)(
          o("WAWebBizBroadcastsTypedError").FileError.FORMAT,
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
            n = yield o("WAWebBizBroadcastsXLSXParsingUtils").loadXLSX(t);
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
            n = yield o("WAWebBizBroadcastsCSVParsingUtils").loadPapaParse(t);
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
          var t = o("WAWebBizBroadcastsFileTypeValidator").isFileOfType(
            e,
            o("WAWebBizBroadcastsFileTypeValidator").FileType.EXCEL,
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
          return o("WAWebBizBroadcastsTemplateParsingUtils").parseContactData(
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return { contact: e, normalizedPhone: T(e.phone) };
            }),
            n = t.map(function (e) {
              var t = e.normalizedPhone;
              return t;
            }),
            r = yield o(
              "WAWebBizBroadcastsContactVerifier",
            ).verifyWhatsAppUsers(n),
            a = [],
            i = [];
          return (
            t.forEach(function (e) {
              var t = e.contact,
                n = e.normalizedPhone,
                l = r[n],
                s = (l == null ? void 0 : l.isWhatsAppUser) === !0;
              if (s && (l == null ? void 0 : l.lid) != null) {
                var u = babelHelpers.extends({}, t, { lid: l.lid });
                a.push(u);
              } else
                i.push({
                  errorType: o("WAWebBizBroadcastsTypedError").PhoneError
                    .NOT_WHATSAPP_USER,
                  rowData: {
                    firstName: t.firstName,
                    lastName: t.lastName,
                    phone: t.phone,
                  },
                  rowIndex: t.rowIndex,
                });
            }),
            { nonWhatsAppUserErrors: i, verifiedContacts: a }
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebBizBroadcastsFileTypeValidator").isFileOfType(
            t,
            o("WAWebBizBroadcastsFileTypeValidator").FileType.EXCEL,
          )
            ? "Excel"
            : "CSV";
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:file-processor] Starting file processing: ",
                " (",
                ", ",
                " bytes)",
              ])),
            t.name,
            r,
            t.size,
          ),
            o("WAWebBroadcastODS").logAudienceImport());
          try {
            (f(t),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:file-processor] File validation passed for ",
                    " file: ",
                    "",
                  ])),
                r,
                t.name,
              ));
            var a = yield R(t);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:file-processor] File parsing completed: ",
                  " rows extracted from ",
                  " file",
                ])),
              a.length,
              r,
            ),
              g(a),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:file-processor] row size \u2713 file=",
                    " rows=",
                    " limit=",
                    "",
                  ])),
                t.name,
                a.length,
                o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(),
              ));
            var i = yield E(a);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:file-processor] Contact data processing completed: ",
                  " valid, ",
                  " errors",
                ])),
              i.validContacts.length,
              i.errors.length,
            );
            var l = yield D(i.validContacts),
              h = l.nonWhatsAppUserErrors,
              y = l.verifiedContacts;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:file-processor] WA verify done: ",
                  "\u2713 ",
                  "\u2717",
                ])),
              y.length,
              h.length,
            );
            var C = I([].concat(i.errors, h)),
              b = C.map(function (e) {
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
                  "[broadcast:file-processor] processing done: ",
                  " contacts, ",
                  " errors",
                ])),
              y.length,
              b.length,
            ),
              o("WAWebBroadcastODS").logAudienceImportSuccess(),
              n.onComplete(y, b));
          } catch (e) {
            o("WAWebBroadcastODS").logAudienceImportError();
            var v = e instanceof Error ? e.name : typeof e,
              S = e instanceof Error ? e.message : String(e),
              L =
                e instanceof
                o("WAWebBizBroadcastsTypedError").WAWebBizBroadcastsTypedError
                  ? String(e.type)
                  : "none";
            (o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:file-processor] File processing failed for ",
                    " file ",
                    ": name=",
                    " message=",
                    " typedErrorType=",
                    "",
                  ])),
                r,
                t.name,
                v,
                S,
                L,
              )
              .verbose()
              .sendLogs("biz-broadcasts-file-processing-failed", {
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
