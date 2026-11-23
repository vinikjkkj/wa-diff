__d(
  "WAWebBizBroadcastProUnsubscribeCSVParser",
  [
    "$InternalEnum",
    "Promise",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactImportFileProcessor",
    "WAWebContactImportFileTypeValidator",
    "WAWebContactImportTemplateParsingUtils",
    "WAWebContactImportTypedError",
    "WAWebContactImportValidationUtils",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [".xls", ".xlsx"],
      u = n("$InternalEnum")({
        FILE_TOO_LARGE: "file_too_large",
        MALFORMED_SCHEMA: "malformed_schema",
        MISSING_COUNTRY_CODE: "missing_country_code",
        MISSING_PHONE_COLUMN: "missing_phone_column",
        NO_VALID_PHONE_NUMBERS: "no_valid_phone_numbers",
        TOO_MANY_RECIPIENTS: "too_many_recipients",
        UNREADABLE_FILE: "unreadable_file",
        UNSUPPORTED_FILE_TYPE: "unsupported_file_type",
      }),
      c = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "UnsubscribeCSVError"),
            (n.code = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function d(t) {
      try {
        m(t);
      } catch (t) {
        return (e || (e = n("Promise"))).reject(t);
      }
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = null;
        o("WAWebContactImportFileProcessor").processFile(
          t,
          {
            onComplete: function (o, a) {
              try {
                e(p(o, a, r));
              } catch (e) {
                n(C(e));
              }
            },
            onError: function (t) {
              n(C(t));
            },
            onFileShape: function (t) {
              r = t;
            },
          },
          {
            forceFileType: o("WAWebContactImportFileTypeValidator").FileType
              .CSV,
            recipientLimit: o("WAWebBizBroadcastRecipientLimitCommon")
              .BB_PRO_RECIPIENTS_LIMIT,
            skipWhatsAppVerification: !0,
            verifyOptions: {
              errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_BROADCAST,
            },
          },
        );
      });
    }
    function m(e) {
      var t = e.name.toLowerCase();
      if (
        s.some(function (e) {
          return t.endsWith(e);
        })
      )
        throw new c(u.UNSUPPORTED_FILE_TYPE);
      if (
        e.size >
        o("WAWebContactImportFileProcessor")
          .MAX_UNSUBSCRIBE_RECIPIENT_FILE_SIZE_BYTES
      )
        throw new c(u.FILE_TOO_LARGE);
    }
    function p(e, t, n) {
      if (n == null) throw new c(u.UNREADABLE_FILE);
      if (!g(n)) throw new c(u.MALFORMED_SCHEMA);
      var a = e.filter(h),
        i = a.map(function (e) {
          return { e164: y(e), rowIndex: e.rowIndex };
        }),
        l = f(
          t,
          new Set(
            i.map(function (e) {
              return e.e164;
            }),
          ),
        ),
        s = e.length - a.length + l.missingCountryCodeCount,
        d = [].concat(i, l.promotedEntries).sort(function (e, t) {
          return e.rowIndex - t.rowIndex;
        }),
        m = [].concat(i, l.displayEntries).sort(function (e, t) {
          return e.rowIndex - t.rowIndex;
        });
      if (d.length === 0)
        throw s > 0
          ? new c(u.MISSING_COUNTRY_CODE)
          : new c(u.NO_VALID_PHONE_NUMBERS);
      var p = Math.max(
        0,
        r("countWhere")(t, function (e) {
          return (
            e.errorType ===
            o("WAWebContactImportTypedError").PhoneError.DUPLICATE
          );
        }) -
          l.promotedEntries.length -
          l.missingCountryCodeCount,
      );
      return {
        displayPhoneNumbers: m.map(function (e) {
          return e.e164;
        }),
        duplicateEntriesCount: p,
        malformedEntriesCount:
          r("countWhere")(t, function (e) {
            return (
              e.errorType ===
              o("WAWebContactImportTypedError").PhoneError.INVALID
            );
          }) + s,
        validPhoneNumbers: d.map(function (e) {
          return e.e164;
        }),
      };
    }
    function _(e) {
      return e.trim().startsWith("+");
    }
    function f(e, t) {
      var n = new Set(t),
        r = [],
        a = [],
        i = 0;
      for (var l of e)
        if (
          l.errorType === o("WAWebContactImportTypedError").PhoneError.DUPLICATE
        ) {
          var s = o("WAWebContactImportTemplateParsingUtils").extractPhone(
            l.rowData,
          );
          if (!_(s)) {
            i++;
            continue;
          }
          var u = o(
            "WAWebContactImportValidationUtils",
          ).validateAndFormatPhoneNumber(s);
          if (
            !(
              u.status !==
                o("WAWebContactImportValidationUtils").ValidationStatus.VALID ||
              u.value == null
            )
          ) {
            var c =
                "+" +
                o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                  u.value,
                ),
              d = { e164: c, rowIndex: l.rowIndex };
            (r.push(d), !n.has(c) && (a.push(d), n.add(c)));
          }
        }
      return {
        displayEntries: r,
        missingCountryCodeCount: i,
        promotedEntries: a,
      };
    }
    function g(e) {
      var t = e.headerRow.filter(function (e) {
        return e !== "";
      }).length;
      return t <= 1 && e.maxPopulatedRowWidth <= 1;
    }
    function h(e) {
      var t,
        n = e.rawRow;
      if (n == null) return !1;
      var r = Object.keys(n).filter(
        o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName,
      );
      return _(
        (t = o("WAWebContactImportTemplateParsingUtils").readRawRowColumn(
          n,
          r,
        )) != null
          ? t
          : "",
      );
    }
    function y(e) {
      return (
        "+" + o("WAWebContactImportFileProcessor").normalizePhoneNumber(e.phone)
      );
    }
    function C(e) {
      if (e instanceof c) return e;
      if (
        e instanceof
        o("WAWebContactImportTypedError").WAWebContactImportTypedError
      ) {
        var t = o("WAWebContactImportTypedError").FileError.cast(e.type);
        if (t != null)
          return new c(
            t === o("WAWebContactImportTypedError").FileError.TYPE
              ? u.UNSUPPORTED_FILE_TYPE
              : t === o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS
                ? u.TOO_MANY_RECIPIENTS
                : t === o("WAWebContactImportTypedError").FileError.FORMAT
                  ? u.MISSING_PHONE_COLUMN
                  : t ===
                      o("WAWebContactImportTypedError").FileError
                        .TOO_MANY_ERRORS
                    ? u.UNREADABLE_FILE
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })(),
          );
      }
      return new c(u.UNREADABLE_FILE);
    }
    ((l.UnsubscribeCSVErrorCode = u),
      (l.UnsubscribeCSVError = c),
      (l.parseUnsubscribeRecipientsCSV = d));
  },
  98,
);
