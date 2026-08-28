__d(
  "AdsODAXObjectiveStrings",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsAPIObjectives",
    "ads-objectives",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      switch (e) {
        case o("AdsAPIObjectives").LINK_CLICKS:
          return s._(/*BTDS*/ "traffic");
        case o("AdsAPIObjectives").OUTCOME_AWARENESS:
          return s._(/*BTDS*/ "awareness");
        case o("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(/*BTDS*/ "Leads");
        case o("AdsAPIObjectives").OUTCOME_SALES:
          return s._(/*BTDS*/ "sales");
        case o("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(/*BTDS*/ "engagement");
        case o("AdsAPIObjectives").APP_INSTALLS:
          return s._(/*BTDS*/ "app promotion");
        case o("ads-objectives").KPIObjectives.MIXED:
          return s._(/*BTDS*/ "mixed objectives");
        default:
          return "";
      }
    }
    function d(e, t, n) {
      switch ((t === void 0 && (t = !0), n === void 0 && (n = !1), e)) {
        case o("AdsAPIObjectives").LINK_CLICKS:
          return s._(/*BTDS*/ "Traffic");
        case o("AdsAPIObjectives").OUTCOME_AWARENESS:
          return n === !0
            ? s._(/*BTDS*/ "Awareness and Sales")
            : s._(/*BTDS*/ "Awareness");
        case o("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(/*BTDS*/ "Leads");
        case o("AdsAPIObjectives").OUTCOME_SALES:
          return s._(/*BTDS*/ "Sales");
        case o("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(/*BTDS*/ "Engagement");
        case o("AdsAPIObjectives").APP_INSTALLS:
          return t
            ? s._(/*BTDS*/ "App promotion")
            : s._(/*BTDS*/ "App installs");
        case o("ads-objectives").KPIObjectives.MIXED:
          return s._(/*BTDS*/ "Mixed objectives");
        default:
          return "";
      }
    }
    function m(e) {
      switch (e) {
        case o("AdsAPIObjectives").LINK_CLICKS:
          return s._(/*BTDS*/ "Online traffic");
        case o("AdsAPIObjectives").OUTCOME_AWARENESS:
          return s._(/*BTDS*/ "Awareness of your brand or location");
        case o("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(/*BTDS*/ "Leads");
        case o("AdsAPIObjectives").OUTCOME_SALES:
          return s._(/*BTDS*/ "Online sales");
        case o("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(/*BTDS*/ "Messages and engagement");
        case o("AdsAPIObjectives").APP_INSTALLS:
          return s._(/*BTDS*/ "More people using your app");
        default:
          return "";
      }
    }
    function p(e) {
      switch (e) {
        case o("AdsAPIObjectives").LINK_CLICKS:
          return s._(/*BTDS*/ "Get more web traffic");
        case o("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return s._(/*BTDS*/ "Get more messages and engagement");
        case o("AdsAPIObjectives").OUTCOME_LEADS:
          return s._(/*BTDS*/ "Get more leads");
        case o("AdsAPIObjectives").OUTCOME_AWARENESS:
          return s._(/*BTDS*/ "Drive awareness");
        case o("AdsAPIObjectives").OUTCOME_SALES:
          return s._(/*BTDS*/ "Grow sales");
        case o("AdsAPIObjectives").APP_INSTALLS:
          return s._(/*BTDS*/ "Promote your app");
        default:
          return d(e);
      }
    }
    function _(e, t, n, a) {
      if (
        !t ||
        n !== o("AdsAPIObjectives").OUTCOME_SALES ||
        !r("gkx")("21436") ||
        a
      )
        return null;
      var i = s._(/*BTDS*/ "{=m0}", [
          s._implicitParam(
            "=m0",
            u.jsx("strong", {
              children: s._(/*BTDS*/ "Meta Pixel or App Events required"),
            }),
          ),
        ]),
        l = e
          ? s._(
              /*BTDS*/ "To publish a sales campaign, you\u2019ll need to set up {=m1} or app events. Choose the engagement objective if your goal is to use messages to drive sales.",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID: "742478679120153",
                    children: s._(/*BTDS*/ "Meta Pixel"),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "To publish a sales campaign, you\u2019ll need to set up {=m1} or app events.",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID: "742478679120153",
                    children: s._(/*BTDS*/ "Meta Pixel"),
                  }),
                ),
              ],
            );
      return u.jsxs(u.Fragment, { children: [i, u.jsx("br", {}), l] });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getObjectiveNameLowerCase = c),
      (l.getObjectiveName = d),
      (l.getGuidedOnboardingObjectiveName = m),
      (l.getLWIGraduationObjectiveName = p),
      (l.getThaiMissingPixelWarning = _));
  },
  226,
);
