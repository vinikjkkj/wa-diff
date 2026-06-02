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
    async function C(e) {
      var t = await e.arrayBuffer(),
        n = await o("WAWebContactImportXLSXParsingUtils").loadXLSX(t);
      return y(n);
    }
    async function b(e) {
      var t = await e.text(),
        n = await o("WAWebContactImportCSVParsingUtils").loadPapaParse(t);
      return y(n.data);
    }
    async function v(e) {
      var t = o("WAWebContactImportFileTypeValidator").isFileOfType(
        e,
        o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
      );
      return t ? C(e) : b(e);
    }
    async function S(e) {
      var t = e.map(function (e) {
        return Object.keys(e.data).reduce(
          function (t, n) {
            return ((t[n] = e.data[n]), t);
          },
          { originalRowIndex: e.originalRowIndex },
        );
      });
      return o("WAWebContactImportTemplateParsingUtils").parseContactData(t);
    }
    function R(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function L(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    async function E(e, t) {
      var n = e.map(function (e) {
          return { contact: e, normalizedPhone: L(e.phone) };
        }),
        r = n.map(function (e) {
          var t = e.normalizedPhone;
          return t;
        }),
        a = await o("WAWebContactImportContactVerifier").verifyWhatsAppUsers(
          r,
          t,
        ),
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
    }
    async function k(t, n, r) {
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
        var i = await v(t);
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] parsed: ",
              " rows (",
              ")",
            ])),
          i.length,
          a,
        ),
          g(i, r.recipientLimit),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import] rows ok: ",
                "/",
                "",
              ])),
            i.length,
            r.recipientLimit,
          ));
        var l = await S(i);
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] processed: ",
              "+ ",
              "-",
            ])),
          l.validContacts.length,
          l.errors.length,
        );
        var h = await E(l.validContacts, r.verifyOptions),
          y = h.nonWhatsAppUserErrors,
          C = h.verifiedContacts;
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] verified: ",
              "+ ",
              "-",
            ])),
          C.length,
          y.length,
        );
        var b = R([].concat(l.errors, y)),
          L = b
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
          C.length,
          L.length,
        ),
          n.onComplete(C, L));
      } catch (e) {
        var k = e instanceof Error ? e.name : typeof e,
          I = e instanceof Error ? e.message : String(e),
          T =
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
            k,
            I,
            T,
          )
          .verbose()
          .sendLogs("contact-import-file-processing-failed", { sampling: 1 }),
          n.onError(e));
      }
    }
    ((l.normalizePhoneNumber = L), (l.processFile = k));
  },
  98,
);
