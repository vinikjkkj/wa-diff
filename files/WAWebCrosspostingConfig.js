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
              { width: t.width, height: t.height, testid: void 0 },
              t.testid,
            );
          },
          getLabel: function () {
            return s._(/*BTDS*/ "Share to Facebook");
          },
          getSuccessToastMsg: function () {
            return s._(/*BTDS*/ "Status shared to your Facebook Story");
          },
          getFailureToastMsg: function () {
            return s._(/*BTDS*/ "Could not share status to Facebook");
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
              { width: t.width, height: t.height, testid: void 0 },
              t.testid,
            );
          },
          getLabel: function () {
            return s._(/*BTDS*/ "Share to Instagram");
          },
          getSuccessToastMsg: function () {
            return s._(/*BTDS*/ "Status shared to your Instagram Story");
          },
          getFailureToastMsg: function () {
            return s._(/*BTDS*/ "Could not share status to Instagram");
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
        ? s._(/*BTDS*/ "Sharing status to your Facebook and Instagram story...")
        : t
          ? s._(/*BTDS*/ "Sharing status to your Facebook story...")
          : s._(/*BTDS*/ "Sharing status to your Instagram story...");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.includes("F"),
        n = e.includes("I");
      return t && n
        ? s._(/*BTDS*/ "Could not share status to Facebook and Instagram")
        : t
          ? s._(/*BTDS*/ "Could not share status to Facebook")
          : s._(/*BTDS*/ "Could not share status to Instagram");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.includes("F"),
        n = e.includes("I");
      return t && n
        ? s._(
            /*BTDS*/ "Status sent and shared to your Facebook and Instagram story",
          )
        : t
          ? s._(/*BTDS*/ "Status sent and shared to your Facebook story")
          : s._(/*BTDS*/ "Status sent and shared to your Instagram story");
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
