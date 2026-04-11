__d(
  "WAFlowsDomainUtils",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = function () {
        return r("gkx")("5897") && !s();
      },
      s = function () {
        return (
          window.location.href.search(
            /https:\/\/(flows(\.my-od|\.\d+\.od)?)\.whatsapp\.net\/flows-v2\/wa-web/,
          ) !== -1
        );
      },
      u = function () {
        return e();
      },
      c = function () {
        return (
          window.location.href.search(
            /https:\/\/(flows\.)?intern.whatsapp\.net\/(flows|flows-v2)/,
          ) !== -1
        );
      },
      d = function () {
        return window.location.href.search(/https:\/\/(business\.)/) !== -1;
      },
      m = function () {
        return (
          window.location.href.search(
            /https:\/\/(business\.)?[0-9]{2,15}\.od\.facebook\.com/,
          ) !== -1
        );
      },
      p = function () {
        return (
          window.location.href.search(/(flows|flows-v2)\/component/) !== -1
        );
      },
      _ = function () {
        return u() && !f();
      },
      f = function () {
        return /android|iphone/i.test(navigator.userAgent);
      };
    ((l.isWAWebDevUrl = s),
      (l.isOndemandFlowsUrl = u),
      (l.isInternFlowsUrl = c),
      (l.isBusinessUrl = d),
      (l.isOndemandBusinessUrl = m),
      (l.isComponentUrl = p),
      (l.isOndemandFlowsInDesktopBrowser = _),
      (l.isSupportedMobileBrowser = f));
  },
  98,
);
