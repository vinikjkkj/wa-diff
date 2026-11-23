__d(
  "WAWebOrgNetworkHomeStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e == null
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "", [s._plural(e, "count")]);
    }
    function u(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "count")]);
    }
    function c(e) {
      return s._(/*BTDS*/ "", [s._param("your name", e)]);
    }
    function d(e, t) {
      return e === !0 && t
        ? s._(/*BTDS*/ "")
        : e === !0
          ? s._(/*BTDS*/ "")
          : e === !1
            ? s._(/*BTDS*/ "")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.getOrgNetworkHomeRowSubtitle = e),
      (l.getOrgNetworkHomeShownCountLabel = u),
      (l.getOrgNetworkHomeViewerName = c),
      (l.getOrgNetworkHomeClearLabel = d));
  },
  226,
);
