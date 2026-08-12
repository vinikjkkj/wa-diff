__d(
  "WAWebWamoPDFNGatingUtils",
  [
    "WAWebNewsletterGatingUtils",
    "WAWebPDFNCommonUtils",
    "WAWebWamoNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebPDFNCommonUtils").hasAcceptedTos(
          o("WAWebWamoNewsletterGatingUtils").getWamoLinkedTos(),
        ) ||
        o("WAWebPDFNCommonUtils").hasAcceptedTos(
          o("WAWebWamoNewsletterGatingUtils").getWamoUnlinkedTos(),
        )
      );
    }
    function s() {
      return o("WAWebWamoNewsletterGatingUtils").shouldUseWamoTos() && e();
    }
    function u() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebWamoNewsletterGatingUtils").getNewsletterConsumerNux(),
      );
    }
    function c() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterProducerNux(),
      );
    }
    function d() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
      );
    }
    function m() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
      );
    }
    function p() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebWamoNewsletterGatingUtils").getNewsletterAdminInviteNux(),
      );
    }
    function _() {
      return o("WAWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
      );
    }
    function f() {
      return (
        o(
          "WAWebWamoNewsletterGatingUtils",
        ).shouldShowNewsletterAdminInviteNux() && e()
      );
    }
    function g() {
      return s()
        ? parseInt(
            o("WAWebWamoNewsletterGatingUtils").getNewsletterConsumerNux(),
            10,
          )
        : parseInt(
            o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
            10,
          );
    }
    function h() {
      return b() || (v() && s());
    }
    function y() {
      return f()
        ? parseInt(
            o("WAWebWamoNewsletterGatingUtils").getNewsletterAdminInviteNux(),
            10,
          )
        : parseInt(
            o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
            10,
          );
    }
    function C() {
      return b() || (f() && v());
    }
    function b() {
      return d() || m() || _();
    }
    function v() {
      return u() || c() || p();
    }
    ((l.isWamoTosValid = s),
      (l.getNewsletterConsumerNuxOrTos = g),
      (l.hasAckedNewsletterConsumerNuxOrTos = h),
      (l.getNewsletterAdminInviteNuxOrTos = y),
      (l.hasAckedNewsletterAdminInviteNuxOrTos = C),
      (l.hasAcceptedAnyNewsletterTos = b));
  },
  98,
);
