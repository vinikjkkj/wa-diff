__d(
  "CometAdPrefsWAIST30AdvertiserEducationDialogContent",
  [
    "fbt",
    "AdsPreferencesWAIST30EducationDialog",
    "FDSText.react",
    "FDSTextPairing.react",
    "meta-brand-bullhorn-filled-20",
    "meta-brand-person-circle-filled-20",
    "meta-brand-storefront-filled-20",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e,
        t = s._(/*BTDS*/ ""),
        n = s._(/*BTDS*/ ""),
        a = s._(/*BTDS*/ ""),
        i = [
          {
            color: "primary",
            icon: o("meta-brand-storefront-filled-20")
              .metaBrandStorefrontStoreFilled20,
            key: "store",
            text: u.jsx(r("FDSTextPairing.react"), {
              body: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  u.jsx((e = r("FDSText.react")), {
                    type: "bodyLink3",
                    children: s._(/*BTDS*/ ""),
                  }),
                ),
                s._implicitParam(
                  "=m4",
                  u.jsx(e, { type: "bodyLink3", children: s._(/*BTDS*/ "") }),
                ),
              ]),
              headline: null,
              level: 3,
            }),
          },
          {
            color: "primary",
            icon: o("meta-brand-person-circle-filled-20")
              .metaBrandPersonCircleProfileFilled20,
            key: "profile",
            text: u.jsx(r("FDSTextPairing.react"), {
              body: s._(/*BTDS*/ "", [
                s._implicitParam(
                  "=m2",
                  u.jsx(e, { type: "bodyLink3", children: s._(/*BTDS*/ "") }),
                ),
                s._implicitParam(
                  "=m5",
                  u.jsx(e, { type: "bodyLink3", children: s._(/*BTDS*/ "") }),
                ),
                s._implicitParam(
                  "=m8",
                  u.jsx(e, { type: "bodyLink3", children: s._(/*BTDS*/ "") }),
                ),
              ]),
              headline: null,
              level: 3,
            }),
          },
          {
            color: "blueLink",
            icon: o("meta-brand-bullhorn-filled-20")
              .metaBrandBullhornMegaphoneFilled20,
            key: "megaphone",
            text: u.jsx(r("FDSTextPairing.react"), {
              body: s._(/*BTDS*/ ""),
              headline: null,
              level: 3,
            }),
          },
        ];
      return u.jsx(r("AdsPreferencesWAIST30EducationDialog"), {
        educationSections: i,
        exampleText: a,
        headerText: n,
        headlineText: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
