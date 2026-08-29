__d(
  "WAWebSessionScopeWamUtils",
  [
    "WAWebSessionScope",
    "WAWebStatusSessionGatingUtils",
    "WAWebWamEnumSessionScopeType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebSessionScope").SessionScope.DEFAULT
        ? o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.DEFAULT
        : e === o("WAWebSessionScope").SessionScope.STATUS
          ? o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.STATUS
          : e === o("WAWebSessionScope").SessionScope.PQ
            ? o("WAWebWamEnumSessionScopeType").SESSION_SCOPE_TYPE.DEFAULT
            : e == null
              ? void 0
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function s(e) {
      var t = e.from,
        n = e.isGroupStatus,
        r = e.isSkdm,
        a = e.metaSessionScope;
      if (r === !0)
        return c({ from: t, isGroupStatus: n }) &&
          o(
            "WAWebStatusSessionGatingUtils",
          ).shouldUseStatusSessionForIncomingMessage(a)
          ? o("WAWebSessionScope").SessionScope.STATUS
          : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    function u(e) {
      return c(e) ? s(e) : void 0;
    }
    function c(e) {
      var t = e.from,
        n = e.isGroupStatus;
      return t.isStatus() || n === !0;
    }
    ((l.sessionScopeToWamType = e),
      (l.getIncomingSkdmSessionScope = s),
      (l.getIncomingSkdmSessionScopeForMessageReceive = u));
  },
  98,
);
