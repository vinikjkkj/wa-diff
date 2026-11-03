__d(
  "CometNMEEducationStrings",
  ["fbt", "FDSLink.react", "justknobx", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/help/196050490547892";
    function d() {
      return Object.freeze({
        getBBEducationPopoverText: function () {
          return s._(
            /*BTDS*/ "Accounts with a verified badge have been authenticated and can be Meta Verified subscribers or notable persons or brands.",
          );
        },
        getVerifiedSectionBody1: function () {
          return r("justknobx")._("2048")
            ? s._(
                /*BTDS*/ "The verified badge means an account has been verified based on their activity across our products and information or documents they provide. Some verified accounts are owned by a notable person, brand or entity, while others are Meta Verified.",
              )
            : s._(
                /*BTDS*/ "Accounts with a verified badge have been authenticated using trusted documentation. Some verified accounts are owned by a notable person, brand or entity, while others are Meta Verified.",
              );
        },
        getVerifiedSectionBody2: function () {
          return s._(
            /*BTDS*/ "With a Meta Verified subscription, you get a verified badge, proactive account protection, access to direct account support and increased prominence across Facebook and Instagram. {learn more link}",
            [
              s._param(
                "learn more link",
                u.jsx(r("FDSLink.react"), {
                  "aria-label": s._(/*BTDS*/ "Learn more about Meta Verified"),
                  href: c,
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        },
        getVerifiedSectionTitle: function () {
          return s._(/*BTDS*/ "Verified");
        },
      });
    }
    l.default = d;
  },
  226,
);
