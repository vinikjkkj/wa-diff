__d(
  "WAWebMmSignalSharingContextInfo",
  ["WAWebMmSignalSharingGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
    function s(t) {
      return e(t) != null;
    }
    function u(e) {
      var t;
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? e == null || (t = e.urlTrackingMap) == null
          ? void 0
          : t.urlTrackingMapElements
        : null;
    }
    function c(e) {
      return u(e) != null;
    }
    ((l.getMmSignalSharingContextInfoDisclosureFlag = e),
      (l.existsMmSignalSharingContextInfoDisclosureFlag = s),
      (l.getMmSignalSharingURLTrackingMapElements = u),
      (l.existsMmSignalSharingURlTrackingMapElements = c));
  },
  98,
);
