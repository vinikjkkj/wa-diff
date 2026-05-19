__d(
  "CometLoggedOutCTAStrings",
  ["fbt", "FDSLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = Object.freeze({
        createNewAccountText: s._(/*BTDS*/ "Create new account"),
        emailText: s._(/*BTDS*/ "Email or phone number"),
        footerTitle: s._(
          /*BTDS*/ "Log in or sign up for Facebook to connect with friends, family and people you know. ",
        ),
        forgotPasswordText: s._(/*BTDS*/ "Forgot password?"),
        getCASMTTextWithUrl: function (t) {
          return s._(
            /*BTDS*/ "In California, you can create a detailed report for content that contains intimate imagery, bullying and more. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  color_DEPRECATED: "highlight",
                  href: t,
                  target: "_blank",
                  testid: void 0,
                  children: s._(/*BTDS*/ "Fill in form"),
                }),
              ),
            ],
          );
        },
        getCPATextWithUrl: function (t) {
          return s._(/*BTDS*/ "You can also {=m1} without logging in.", [
            s._implicitParam(
              "=m1",
              u.jsx(r("FDSLink.react"), {
                color_DEPRECATED: "highlight",
                href: t,
                target: "_blank",
                children: s._(
                  /*BTDS*/ "report content you believe is unlawful under the Communications Platforms Act (CPA)",
                ),
              }),
            ),
          ]);
        },
        getDSATextWithUrl: function (t) {
          return s._(/*BTDS*/ "You can also {=m1} without logging in.", [
            s._implicitParam(
              "=m1",
              u.jsx(r("FDSLink.react"), {
                color_DEPRECATED: "highlight",
                href: t,
                target: "_blank",
                testid: void 0,
                children: s._(
                  /*BTDS*/ "report content you believe is unlawful in your country",
                ),
              }),
            ),
          ]);
        },
        getFrenchLawTextWithUrl: function (t) {
          return s._(/*BTDS*/ "You can also {=m1} without logging in.", [
            s._implicitParam(
              "=m1",
              u.jsx(r("FDSLink.react"), {
                color_DEPRECATED: "highlight",
                href: t,
                target: "_blank",
                children: s._(
                  /*BTDS*/ "report content that you believe is unlawful under the French Law Reinforcing the Republican Principles (Law n\u00b0 2021-1109)",
                ),
              }),
            ),
          ]);
        },
        getJapanIDPATextWithUrl: function (t) {
          return s._(
            /*BTDS*/ "In Japan, you can create a detailed report for content that you believe is unlawful under specific local laws. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  color_DEPRECATED: "highlight",
                  href: t,
                  target: "_blank",
                  testid: void 0,
                  children: s._(/*BTDS*/ "Fill in form"),
                }),
              ),
            ],
          );
        },
        getNetzdgTextWithUrl: function (t) {
          return s._(/*BTDS*/ "You can also {=m1} without logging in.", [
            s._implicitParam(
              "=m1",
              u.jsx(r("FDSLink.react"), {
                color_DEPRECATED: "highlight",
                href: t,
                target: "_blank",
                children: s._(
                  /*BTDS*/ "report content you believe is unlawful under the Network Enforcement Act (NetzDG)",
                ),
              }),
            ),
          ]);
        },
        getPopupTitleForProfile: function (t) {
          return s._(/*BTDS*/ "See more from {profilename}", [
            s._param("profilename", t),
          ]);
        },
        getUKOSATextWithUrl: function (t) {
          return s._(
            /*BTDS*/ "In the UK, you can create a detailed report for something that breaks the law. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(r("FDSLink.react"), {
                  color_DEPRECATED: "highlight",
                  href: t,
                  target: "_blank",
                  testid: void 0,
                  children: s._(/*BTDS*/ "Fill in form"),
                }),
              ),
            ],
          );
        },
        passwordText: s._(/*BTDS*/ "Password"),
        popupTitle: s._(/*BTDS*/ "See more on Facebook"),
      });
    l.default = c;
  },
  226,
);
