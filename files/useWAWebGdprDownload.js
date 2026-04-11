__d(
  "useWAWebGdprDownload",
  [
    "fbt",
    "WALogger",
    "WAWebChannelDyiWamEvent",
    "WAWebDyiReportDownloadWamEvent",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebGdprConstants",
    "WAWebGdprDownloadMedia",
    "WAWebWamEnumChannelDyiEventType",
    "WAWebWamEnumDyiReportTypeCode",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = (u || (u = o("react"))).useState;
    function d() {
      var t = c(!1),
        n = t[0],
        r = t[1];
      return [
        n,
        function (t, n) {
          n === o("WAWebGdprConstants").ReportType.Newsletters &&
            new (o("WAWebChannelDyiWamEvent").ChannelDyiWamEvent)({
              channelDyiEventType: o("WAWebWamEnumChannelDyiEventType")
                .CHANNEL_DYI_EVENT_TYPE.CHANNEL_REPORT_DOWNLOAD,
            }).commit();
          var a = !0,
            i =
              n === o("WAWebGdprConstants").ReportType.Newsletters
                ? o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                    .CHANNEL
                : o("WAWebWamEnumDyiReportTypeCode").DYI_REPORT_TYPE_CODE
                    .ACCOUNT;
          (r(!0),
            o("WAWebGdprDownloadMedia")
              .gdprDownloadMedia(t)
              .then(function (e) {
                return o("WAWebFileSaver").FileSaver.downloadData(
                  e,
                  String(s._(/*BTDS*/ "My account info")),
                  o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
                );
              })
              .catch(function (t) {
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "GDPR download failed: ",
                      "",
                    ])),
                  t,
                ),
                  (a = !1));
              })
              .finally(function () {
                (r(!1),
                  new (o(
                    "WAWebDyiReportDownloadWamEvent",
                  ).DyiReportDownloadWamEvent)({
                    dyiDownloadSucceeded: a,
                    dyiReportType: i,
                  }).commit());
              }));
        },
      ];
    }
    l.useGdprDownload = d;
  },
  226,
);
