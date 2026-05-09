__d(
  "WAWebStatusNavigateToNewsletterUtils",
  [
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (o("WAWebCmd").Cmd.closeStatusViewer(),
        o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
          identifier: e.toString(),
          identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType
            .Id,
          type: "view",
          chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
            .NewsletterCTAOnStatus,
          discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW,
        }));
    }
    l.navigateToNewsletter = e;
  },
  98,
);
