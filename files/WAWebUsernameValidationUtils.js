__d(
  "WAWebUsernameValidationUtils",
  ["WAWebUsernameConstants"],
  function (t, n, r, o, a, i, l) {
    var e = new Set(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      ),
      s = new Set("0123456789".split("")),
      u = new Set([].concat(Array.from(e), Array.from(s), ["_", "."])),
      c = [
        ".com",
        ".org",
        ".net",
        ".int",
        ".edu",
        ".gov",
        ".mil",
        ".arpa",
        ".html",
        ".htm",
        ".txt",
        ".xml",
      ],
      d = ["whatsapp", "instagram", "facebook", "oculus"];
    function m(t) {
      var n = t.toLowerCase();
      return Array.from(t).every(function (e) {
        return u.has(e);
      })
        ? t.length < o("WAWebUsernameConstants").USERNAME_MIN_LENGTH ||
          t.length > o("WAWebUsernameConstants").USERNAME_MAX_LENGTH
          ? {
              isValid: !1,
              errorType: o("WAWebUsernameConstants").UsernameValidationErrorType
                .INVALID_LENGTH,
            }
          : Array.from(t).some(function (t) {
                return e.has(t);
              })
            ? t.startsWith(".") || t.endsWith(".") || t.includes("..")
              ? {
                  isValid: !1,
                  errorType: o("WAWebUsernameConstants")
                    .UsernameValidationErrorType.INVALID_PERIODS,
                }
              : n.startsWith("www.")
                ? {
                    isValid: !1,
                    errorType: o("WAWebUsernameConstants")
                      .UsernameValidationErrorType.INVALID_WWW_PREFIX,
                  }
                : c.some(function (e) {
                      return n.endsWith(e);
                    })
                  ? {
                      isValid: !1,
                      errorType: o("WAWebUsernameConstants")
                        .UsernameValidationErrorType.INVALID_DOMAIN_SUFFIX,
                    }
                  : d.some(function (e) {
                        return n.includes(e);
                      })
                    ? {
                        isValid: !1,
                        errorType: o("WAWebUsernameConstants")
                          .UsernameValidationErrorType.INVALID_WORD,
                      }
                    : { isValid: !0 }
            : {
                isValid: !1,
                errorType: o("WAWebUsernameConstants")
                  .UsernameValidationErrorType.INVALID_NO_LETTERS,
              }
        : {
            isValid: !1,
            errorType: o("WAWebUsernameConstants").UsernameValidationErrorType
              .INVALID_CHARACTER,
          };
    }
    l.validateUsernameLocally = m;
  },
  98,
);
