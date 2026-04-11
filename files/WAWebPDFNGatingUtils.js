__d(
  "WAWebPDFNGatingUtils",
  [
    "WATimeUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebTos",
    "WAWebWamoPDFNGatingUtils",
    "WaWebPDFNCommonUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("gkx")("26256")
        ? !0
        : o("WAWebWamoPDFNGatingUtils").hasAcceptedAnyNewsletterTos();
    }
    function s() {
      return o("WaWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
      );
    }
    function u() {
      return o("WaWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
      );
    }
    function c() {
      return o("WaWebPDFNCommonUtils").hasAcceptedTos(
        o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
      );
    }
    function d() {
      return e() || o("WAWebWamoPDFNGatingUtils").isWamoTosValid()
        ? parseInt(
            o("WAWebNewsletterGatingUtils").getNewsletterProducerNux(),
            10,
          )
        : parseInt(
            o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
            10,
          );
    }
    function m() {
      return o("WAWebWamoPDFNGatingUtils").getNewsletterConsumerNuxOrTos();
    }
    function p() {
      return r("gkx")("26256")
        ? !0
        : o("WAWebWamoPDFNGatingUtils").hasAckedNewsletterConsumerNuxOrTos();
    }
    function _(t) {
      if (!e()) return !1;
      var n = f(o("WATimeUtils").castToUnixTime(t - 1));
      return n < t;
    }
    function f(e) {
      var t = [];
      if (s()) {
        var n;
        t.push(
          (n = o("WAWebTos").TosManager.getLastAcceptedTime(
            o("WAWebNewsletterGatingUtils").getNewsletterConsumerTos(),
          )) != null
            ? n
            : e,
        );
      }
      if (u()) {
        var r;
        t.push(
          (r = o("WAWebTos").TosManager.getLastAcceptedTime(
            o("WAWebNewsletterGatingUtils").getNewsletterProducerTos(),
          )) != null
            ? r
            : e,
        );
      }
      if (c()) {
        var a;
        t.push(
          (a = o("WAWebTos").TosManager.getLastAcceptedTime(
            o("WAWebNewsletterGatingUtils").getNewsletterAdminInviteTos(),
          )) != null
            ? a
            : e,
        );
      }
      var i = Math.max.apply(Math, t.concat([e]));
      return o("WATimeUtils").castToUnixTime(i);
    }
    ((l.hasAcceptedNewsletterTos = e),
      (l.hasAcceptedNewsletterAdminInviteTos = c),
      (l.getNewsletterProducerDisclosureId = d),
      (l.getNewsletterNuxOrTos = m),
      (l.hasAckedNewsletterNuxOrTos = p),
      (l.hasAcceptedNewsletterTosBefore = _));
  },
  98,
);
