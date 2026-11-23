__d(
  "WAWebCrosspostingConfig",
  [
    "fbt",
    "WAWebCrossposting.flow",
    "WDSIconWdsIcLogoFacebook.react",
    "WDSIconWdsIcLogoFacebookFill.react",
    "WDSIconWdsIcLogoInstagram.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = [
        {
          destination: o("WAWebCrossposting.flow").CrosspostingDestination
            .FACEBOOK,
          gqlValue: o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
            .FACEBOOK,
          keySuffix: "fb",
          getIcon: function () {
            return u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {});
          },
          getFilledIcon: function (t) {
            return u.jsx(
              r("WDSIconWdsIcLogoFacebookFill.react"),
              { width: t.width, height: t.height, testid: t.testid },
              t.testid,
            );
          },
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getSuccessToastMsg: function () {
            return s._(/*BTDS*/ "");
          },
          getFailureToastMsg: function () {
            return s._(/*BTDS*/ "");
          },
        },
        {
          destination: o("WAWebCrossposting.flow").CrosspostingDestination
            .INSTAGRAM,
          gqlValue: o("WAWebCrossposting.flow").CrosspostingDestinationGQLValue
            .INSTAGRAM,
          keySuffix: "ig",
          getIcon: function () {
            return u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {});
          },
          getFilledIcon: function (t) {
            return u.jsx(
              r("WDSIconWdsIcLogoInstagram.react"),
              { width: t.width, height: t.height, testid: t.testid },
              t.testid,
            );
          },
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getSuccessToastMsg: function () {
            return s._(/*BTDS*/ "");
          },
          getFailureToastMsg: function () {
            return s._(/*BTDS*/ "");
          },
        },
      ];
    function d(e, t) {
      var n = e == null ? void 0 : e.get(t);
      return (
        (n == null ? void 0 : n.crosspostingState) ===
        o("WAWebCrossposting.flow").CrosspostingState.SUCCESS
      );
    }
    function m(e, t) {
      var n = e == null ? void 0 : e.get(t);
      return (
        (n == null ? void 0 : n.crosspostingState) ===
        o("WAWebCrossposting.flow").CrosspostingState.PENDING
      );
    }
    function p(e) {
      var t = e.includes("F"),
        n = e.includes("I");
      return t && n
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.includes("F"),
        n = e.includes("I");
      return t && n
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.includes("F"),
        n = e.includes("I");
      return t && n
        ? s._(/*BTDS*/ "")
        : t
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.CROSSPOSTING_DESTINATION_CONFIG = c),
      (l.isCrosspostedToDestination = d),
      (l.isPendingCrosspostingToDestination = m),
      (l.getAutoCrosspostPendingToastMsg = p),
      (l.getAutoCrosspostFailureToastMsg = _),
      (l.getAutoCrosspostSuccessToastMsg = f));
  },
  226,
);
