__d(
  "WAWebMmSignalSharingContextInfo",
  ["WALogger", "WAWebMmSignalSharingGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32;
    function u(e) {
      return e == null ||
        e.length <= s ||
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingContextInfoMaxArrayLengthCapEnabled()
        ? e
        : e.slice(0, s);
    }
    function c(t) {
      var n = t.urlTrackingMap,
        r = n == null ? void 0 : n.urlTrackingMapElements;
      return n == null ||
        r == null ||
        r.length <= s ||
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingContextInfoMaxArrayLengthCapEnabled()
        ? t
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mmSignalSharing] URL tracking map over protocol limit: ",
                  "",
                ])),
              r.length,
            )
            .sendLogs("wa-mm-signal-sharing-url-tracking-map-over-limit"),
          babelHelpers.extends({}, t, {
            urlTrackingMap: babelHelpers.extends({}, n, {
              urlTrackingMapElements: r.slice(0, s),
            }),
          }));
    }
    function d(e) {
      var t;
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return e == null || (t = e.dataSharingContext) == null
          ? void 0
          : t.dataSharingFlags;
    }
    function m(e) {
      return d(e) != null;
    }
    function p(e) {
      var t;
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? u(
            e == null || (t = e.urlTrackingMap) == null
              ? void 0
              : t.urlTrackingMapElements,
          )
        : null;
    }
    function _(e) {
      return p(e) != null;
    }
    ((l.MAX_URL_TRACKING_MAP_ELEMENTS = s),
      (l.getCappedMmSignalSharingURLTrackingMapElements = u),
      (l.getCappedMmSignalSharingContextInfo = c),
      (l.getMmSignalSharingContextInfoDisclosureFlag = d),
      (l.existsMmSignalSharingContextInfoDisclosureFlag = m),
      (l.getMmSignalSharingURLTrackingMapElements = p),
      (l.existsMmSignalSharingURlTrackingMapElements = _));
  },
  98,
);
