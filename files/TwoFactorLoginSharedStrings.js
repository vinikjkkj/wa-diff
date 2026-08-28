__d(
  "TwoFactorLoginSharedStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        codeLabel: s._(/*BTDS*/ "Code"),
        passwordLabel: s._(/*BTDS*/ "Password"),
        tryAnotherWay: s._(/*BTDS*/ "Try another way"),
      },
      d = {
        newCodeTimerCountdown: function (t) {
          return s._(/*BTDS*/ "We can send a new code in {=m2}", [
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "{countdown}", [
                  s._param("countdown", t),
                ]),
              }),
            ),
          ]);
        },
        resendCodeTimerCountdown: function (t) {
          return s._(
            /*BTDS*/ "If you didn't receive a code, you can resend it in {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{countdown}", [
                    s._param("countdown", t),
                  ]),
                }),
              ),
            ],
          );
        },
      };
    ((l.TwoFactorLoginSharedStrings = c),
      (l.TwoFactorLoginMethodSMSStringsProviderShared = d));
  },
  226,
);
