__d(
  "WAWebSignalSessionDiffResolver",
  [
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebWidFactory",
    "WAWebWidFromSignalAddress",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.map(function (e) {
        var t = u(e.address);
        return babelHelpers.extends({ change: e.change }, t);
      });
    }
    function s(e) {
      return e.map(function (e) {
        var t = c(e.address);
        return babelHelpers.extends({ change: e.change }, t);
      });
    }
    function u(e) {
      try {
        var t,
          n,
          r,
          a,
          i = o("WAWebWidFromSignalAddress").widFromSignalAddress(e),
          l = String((t = i.device) != null ? t : 0),
          s = i.user + "@" + i.server,
          u = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebWidFactory").createWid(s),
          ),
          c =
            (n =
              u != null
                ? o("WAWebContactGetters").getName(u) ||
                  o("WAWebContactGetters").getPushname(u)
                : null) != null
              ? n
              : "\u2014",
          d =
            (r =
              u == null || (a = u.phoneNumber) == null
                ? void 0
                : a.toString()) != null
              ? r
              : "\u2014";
        return { rawAddress: e, deviceId: l, phoneNumber: d, displayName: c };
      } catch (t) {
        return {
          rawAddress: e,
          deviceId: "\u2014",
          phoneNumber: "\u2014",
          displayName: "\u2014",
        };
      }
    }
    function c(e) {
      try {
        var t,
          n,
          r,
          a,
          i = o("WAWebWidFactory").createWid(e),
          l = String((t = i.device) != null ? t : 0),
          s = i.user + "@" + i.server,
          u = o("WAWebContactCollection").ContactCollection.get(
            o("WAWebWidFactory").createWid(s),
          ),
          c =
            (n =
              u != null
                ? o("WAWebContactGetters").getName(u) ||
                  o("WAWebContactGetters").getPushname(u)
                : null) != null
              ? n
              : "\u2014",
          d =
            (r =
              u == null || (a = u.phoneNumber) == null
                ? void 0
                : a.toString()) != null
              ? r
              : "\u2014";
        return { rawAddress: e, deviceId: l, phoneNumber: d, displayName: c };
      } catch (t) {
        return {
          rawAddress: e,
          deviceId: "\u2014",
          phoneNumber: "\u2014",
          displayName: "\u2014",
        };
      }
    }
    ((l.resolveAllDiffEntries = e), (l.resolveAllWidEntries = s));
  },
  98,
);
