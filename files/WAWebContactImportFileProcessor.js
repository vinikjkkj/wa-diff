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
      f,
      g = 5242880,
      h = 100;
    function y(e) {
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
    function C(e, t) {
      if (e.length > t)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS,
        );
    }
    function b(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.some(t)) return { data: r, index: n };
      }
    }
    var v = 5;
    function S(e) {
      for (var t = null, n = Math.min(e.length, v), r = 0; r < n; r++) {
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
      return t != null ? { data: t.data, index: t.index } : b(e, D);
    }
    function R(e, t, n) {
      n === void 0 && (n = 0);
      var r = [];
      if (t == null)
        throw new (o(
          "WAWebContactImportTypedError",
        ).WAWebContactImportTypedError)(
          o("WAWebContactImportTypedError").FileError.FORMAT,
        );
      for (var a = 0, i = t.index + 1; i < e.length; i++) {
        var l = e[i],
          s = L(l);
        if (s !== 0) {
          a = Math.max(a, s);
          for (
            var u = { data: {}, originalRowIndex: n + i }, c = 0;
            c < t.data.length;
            c++
          )
            if (t.data[c]) {
              var d = l[c];
              u.data[t.data[c]] = d != null ? String(d) : "";
            }
          r.push(u);
        }
      }
      return { rows: r, shape: { headerRow: t.data, maxPopulatedRowWidth: a } };
    }
    function L(e) {
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n != null && (typeof n != "string" || n.trim() !== ""))
          return t + 1;
      }
      return 0;
    }
    async function E(e, t, n) {
      var r = await e.arrayBuffer(),
        a = await o("WAWebContactImportXLSXParsingUtils").loadXLSX(r),
        i = a.data,
        l = a.rowOffset;
      return R(i, t(i), n ? l : 0);
    }
    async function k(e, t, n, r, a) {
      var i = await e.text(),
        l = await o("WAWebContactImportCSVParsingUtils").loadPapaParse(i),
        s = l,
        u = null;
      if (n) {
        var c =
          r == null
            ? { result: l, separator: null }
            : await o(
                "WAWebContactImportCSVValidation",
              ).recoverUndetectableCSVDelimiter(i, l, r, { fullFileProbe: a });
        ((s = c.result),
          (u = c.separator),
          o("WAWebContactImportCSVValidation").validateCSVParseResult(i, s));
      }
      var d = t(s.data);
      return (
        n &&
          d != null &&
          o("WAWebContactImportCSVValidation").validateCSVColumnCounts(
            i,
            s,
            d.index,
            u,
          ),
        R(s.data, d)
      );
    }
    async function I(e, t, n, r, a, i, l) {
      return n === o("WAWebContactImportFileTypeValidator").FileType.EXCEL
        ? E(e, t, r)
        : k(e, t, a, i, l);
    }
    function T(e, t) {
      return t != null
        ? t
        : o("WAWebContactImportFileTypeValidator").isFileOfType(
              e,
              o("WAWebContactImportFileTypeValidator").FileType.EXCEL,
            )
          ? o("WAWebContactImportFileTypeValidator").FileType.EXCEL
          : o("WAWebContactImportFileTypeValidator").FileType.CSV;
    }
    function D(e) {
      return typeof e == "string" && e.trim() !== "";
    }
    async function x(e, t) {
      if (e.length === 0) return e;
      var n = Object.keys(e[0].data),
        r = e.map(function (e) {
          return n.map(function (t) {
            var n;
            return (n = e.data[t]) != null ? n : "";
          });
        }),
        a = r.slice(0, h),
        i = o("WAWebContactImportSmartColumnDetection").smartDetectColumns(
          n,
          a,
        ),
        l = await $(i, n, a, t.onConfirmDetection);
      if (l == null) return null;
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
      var c = o("WAWebContactImportSmartColumnDetection").applyColumnMapping(
        e.map(function (e) {
          return e.data;
        }),
        u,
      );
      return c.map(function (t, n) {
        return { data: t, originalRowIndex: e[n].originalRowIndex };
      });
    }
    async function $(e, t, n, r) {
      var a,
        i = (a = e.phoneColumn) == null ? void 0 : a.confidence;
      if (e.phoneColumn != null && i === "high")
        return { columnSelectionSource: "auto", detection: e };
      if (r == null) {
        if (e.phoneColumn == null || i === "low")
          throw new (o(
            "WAWebContactImportTypedError",
          ).WAWebContactImportTypedError)(
            o("WAWebContactImportTypedError").FileError.FORMAT,
          );
        return { columnSelectionSource: "auto", detection: e };
      }
      var l = await r(e, t, n.slice(0, 3));
      return l == null
        ? null
        : { columnSelectionSource: "user", detection: P(t, l) };
    }
    function P(e, t) {
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
    async function N(e, t, n) {
      var r = e.map(function (e) {
          return Object.keys(e.data).reduce(
            function (t, n) {
              return ((t[n] = e.data[n]), t);
            },
            { originalRowIndex: e.originalRowIndex },
          );
        }),
        a =
          n == null
            ? o("WAWebContactImportTemplateParsingUtils").parseContactData(r)
            : o("WAWebContactImportTemplateParsingUtils").parseContactData(
                r,
                n,
              );
      if (!t) return a;
      var i = function (n) {
        var t, r;
        return (t = (r = e[n]) == null ? void 0 : r.originalRowIndex) != null
          ? t
          : n;
      };
      return {
        errors: a.errors.map(function (e) {
          return babelHelpers.extends({}, e, { rowIndex: i(e.rowIndex) });
        }),
        validContacts: a.validContacts.map(function (e) {
          return babelHelpers.extends({}, e, { rowIndex: i(e.rowIndex) });
        }),
      };
    }
    function M(e) {
      return e.map(function (e) {
        return {
          errorType: e.errorType,
          parsedContact: e.parsedContact,
          rowData: e.rowData || {},
          rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0,
        };
      });
    }
    function w(e) {
      return e.replace(/^\+/, "").replace(/\D/g, "");
    }
    async function A(e, t) {
      var n = e.map(function (e) {
          return { contact: e, normalizedPhone: w(e.phone) };
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
            var u = babelHelpers.extends(
              {},
              t,
              { lid: r.lid },
              r.verifiedPhoneJid != null
                ? { verifiedPhoneJid: r.verifiedPhoneJid }
                : {},
            );
            i.push(u);
          } else
            l.push({
              errorType: o("WAWebContactImportTypedError").PhoneError
                .NOT_WHATSAPP_USER,
              parsedContact: {
                firstName: t.firstName,
                lastName: t.lastName,
                phone: t.phone,
              },
              rowData:
                t.rawRow != null
                  ? babelHelpers.extends({}, t.rawRow)
                  : {
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
    async function F(t, n, r) {
      var a = T(t, r.forceFileType),
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
        var l, g;
        (y(t),
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
        var h = r.smartColumnDetectionEnabled === !0,
          v = h
            ? S
            : function (e) {
                return b(
                  e,
                  o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName,
                );
              },
          R = await I(
            t,
            v,
            a,
            r.preserveSourceRows === !0,
            r.rejectMalformedCSV === !0,
            (l = r.findCSVHeaderForDelimiterRecovery) != null ? l : null,
            r.fullFileCSVDelimiterProbe === !0,
          ),
          L = R.rows,
          E = R.shape;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] parsed: ",
              " rows (",
              ")",
            ])),
          L.length,
          i,
        ),
          n.onFileShape == null || n.onFileShape(E));
        var k = (g = r.fileRowLimit) != null ? g : r.recipientLimit;
        (C(L, k),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import] rows ok: ",
                "/",
                "",
              ])),
            L.length,
            k,
          ));
        var D = h ? await x(L, n) : L;
        if (D == null) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import] cancelled at column selection: ",
                "",
              ])),
            i,
          );
          return;
        }
        var $ = await N(D, r.preserveSourceRows === !0, r.validateRow);
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] processed: ",
              "+ ",
              "-",
            ])),
          $.validContacts.length,
          $.errors.length,
        );
        var P =
            r.skipWhatsAppVerification === !0
              ? { nonWhatsAppUserErrors: [], verifiedContacts: $.validContacts }
              : await A($.validContacts, r.verifyOptions),
          w = P.nonWhatsAppUserErrors,
          F = P.verifiedContacts;
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] verified: ",
              "+ ",
              "-",
            ])),
          F.length,
          w.length,
        );
        var O = M([].concat($.errors, w)),
          B = O.map(function (e) {
            return babelHelpers.extends({}, e, {
              contactIndex: null,
              type: "error",
            });
          }).sort(function (e, t) {
            return e.rowIndex - t.rowIndex;
          });
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[contact-import] done: ",
              "+ ",
              "-",
            ])),
          F.length,
          B.length,
        ),
          n.onComplete(F, B));
      } catch (e) {
        var W = e instanceof Error ? e.name : typeof e,
          q = e instanceof Error ? e.message : String(e),
          U =
            e instanceof
            o("WAWebContactImportTypedError").WAWebContactImportTypedError
              ? String(e.type)
              : "none";
        (o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[contact-import] failed: ",
                " ",
                " err=",
                " msg=",
                " type=",
                "",
              ])),
            i,
            t.name,
            W,
            q,
            U,
          )
          .verbose()
          .sendLogs("contact-import-file-processing-failed", { sampling: 1 }),
          n.onError(e));
      }
    }
    ((l.MAX_UNSUBSCRIBE_RECIPIENT_FILE_SIZE_BYTES = g),
      (l.normalizePhoneNumber = w),
      (l.processFile = F));
  },
  98,
);
