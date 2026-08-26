__d(
  "WAWebUprPaymentMethodLabels",
  ["fbt", "WALogger", "WAWebUprConstants"],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c;
    function d(e, t) {
      return e + "/" + t;
    }
    var m =
        ((e = {}),
        (e[
          d(
            (c = o("WAWebUprConstants")).UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.CLABE,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "CLABE");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy CLABE");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "CLABE copied");
          },
        }),
        (e[d(c.UprPaymentAccountType.QR_CODE, c.UprIdentifierType.QRIS)] = {
          label: function () {
            return s._(/*BTDS*/ "QRIS");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy QR code");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "QR code copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Phone number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy phone number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Phone number copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.ID_ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Account number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy account number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Account number copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Phone number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy phone number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Phone number copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.MOBILE_MONEY,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Phone number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy phone number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Phone number copied");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.EMAIL)] =
          {
            label: function () {
              return s._(/*BTDS*/ "Email");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "Copy email");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "Email copied");
            },
          }),
        (e[
          d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.EMAIL)
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Email");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy email");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Email copied");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.IBAN)] =
          {
            label: function () {
              return s._(/*BTDS*/ "IBAN");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "Copy IBAN");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "IBAN copied");
            },
          }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Account number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy account number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Account number copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.ID_ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Account number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy account number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Account number copied");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "Account number");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy account number");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "Account number copied");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.FPSID)] =
          {
            label: function () {
              return s._(/*BTDS*/ "FPS ID");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "Copy FPS ID");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "FPS ID copied");
            },
          }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CBU)] = {
          label: function () {
            return s._(/*BTDS*/ "CBU");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy CBU");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "CBU copied");
          },
        }),
        (e[d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.CVU)] =
          {
            label: function () {
              return s._(/*BTDS*/ "CVU");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "Copy CVU");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "CVU copied");
            },
          }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CCI)] = {
          label: function () {
            return s._(/*BTDS*/ "CCI");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "Copy CCI");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "CCI copied");
          },
        }),
        e),
      p = new Set();
    function _(e, t) {
      var n = d(e, t),
        r = m[n];
      return r != null
        ? r
        : (p.has(n) ||
            (p.add(n),
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[UPR] rendering unregistered payment method combo: ",
                    "",
                  ])),
                n,
              )
              .sendLogs("upr-unregistered-method-combo")),
          f(t));
    }
    function f(e) {
      var t = g(e),
        n = t.label,
        r = t.sentence;
      return {
        label: function () {
          return s._(/*BTDS*/ "{method}", [s._param("method", n)]);
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "Copy {method}", [s._param("method", r)]);
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "{method} copied", [s._param("method", r)]);
        },
      };
    }
    function g(e) {
      var t = e.includes("_")
        ? e.split("_").join(" ").toLowerCase()
        : e.toUpperCase();
      return { label: t.charAt(0).toUpperCase() + t.slice(1), sentence: t };
    }
    ((l.methodKey = d), (l.getUprMethodLabels = _));
  },
  226,
);
