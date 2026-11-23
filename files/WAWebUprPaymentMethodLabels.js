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
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.QR_CODE, c.UprIdentifierType.QRIS)] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.ID_ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.MOBILE_MONEY,
            c.UprIdentifierType.PHONE_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.EMAIL)] =
          {
            label: function () {
              return s._(/*BTDS*/ "");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "");
            },
          }),
        (e[
          d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.EMAIL)
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.IBAN)] =
          {
            label: function () {
              return s._(/*BTDS*/ "");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "");
            },
          }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.ID_ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.DIGITAL_WALLET,
            c.UprIdentifierType.ACCOUNT_NUMBER,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.FPSID)] =
          {
            label: function () {
              return s._(/*BTDS*/ "");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "");
            },
          }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CBU)] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.DIGITAL_WALLET, c.UprIdentifierType.CVU)] =
          {
            label: function () {
              return s._(/*BTDS*/ "");
            },
            copyLabel: function () {
              return s._(/*BTDS*/ "");
            },
            copySuccessToast: function () {
              return s._(/*BTDS*/ "");
            },
          }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.CCI)] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.DOCUMENT_ID,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.NATIONAL_ID,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[
          d(
            c.UprPaymentAccountType.BANK_ACCOUNT,
            c.UprIdentifierType.BRANCH_CODE,
          )
        ] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.RUC)] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        (e[d(c.UprPaymentAccountType.BANK_ACCOUNT, c.UprIdentifierType.RUT)] = {
          label: function () {
            return s._(/*BTDS*/ "");
          },
          copyLabel: function () {
            return s._(/*BTDS*/ "");
          },
          copySuccessToast: function () {
            return s._(/*BTDS*/ "");
          },
        }),
        e),
      p = new Set();
    function _(e, t) {
      var n = t.toLowerCase(),
        r = d(e, n),
        a = m[r];
      return a != null
        ? a
        : (p.has(r) ||
            (p.add(r),
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[UPR] rendering unregistered payment method combo: ",
                    "",
                  ])),
                r,
              )
              .sendLogs("upr-unregistered-method-combo")),
          f(n));
    }
    function f(e) {
      var t = g(e),
        n = t.label,
        r = t.sentence;
      return {
        label: function () {
          return s._(/*BTDS*/ "", [s._param("method", n)]);
        },
        copyLabel: function () {
          return s._(/*BTDS*/ "", [s._param("method", r)]);
        },
        copySuccessToast: function () {
          return s._(/*BTDS*/ "", [s._param("method", r)]);
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
