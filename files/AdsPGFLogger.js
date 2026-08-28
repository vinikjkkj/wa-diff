__d(
  "AdsPGFLogger",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    function e(e) {}
    function s(e) {}
    function u(e, t) {}
    function c() {}
    function d(e) {}
    function m(e, t) {}
    function p(e) {}
    function _(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "ads_pgf_event_accordion_click",
        data: ((n = {}), (n.event_source = e), (n.message = t), n),
      });
    }
    function f(e, t) {}
    function g() {}
    function h(e) {}
    function y(e) {}
    ((l.logFlyoutImpression = e),
      (l.logFlyoutClose = s),
      (l.logPGFClick = u),
      (l.logPGFAutoExpand = c),
      (l.logPGFEventCardClick = d),
      (l.logEventCTAClick = m),
      (l.logFlyoutVisibleDuration = p),
      (l.logEventAccordionClick = _),
      (l.logEventResourceHelperClick = f),
      (l.logTipsLoadCalled = g),
      (l.logLoadTipsError = h),
      (l.logTipsDispatched = y));
  },
  98,
);
