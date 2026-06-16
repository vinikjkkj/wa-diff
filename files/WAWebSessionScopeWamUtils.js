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
        r = e.isSkmsg,
        a = e.metaSessionScope,
        i = t.isStatus() || n === !0;
      if (!(!i || r))
        return o(
          "WAWebStatusSessionGatingUtils",
        ).shouldUseStatusSessionForIncomingMessage(a)
          ? o("WAWebSessionScope").SessionScope.STATUS
          : o("WAWebSessionScope").SessionScope.DEFAULT;
    }
    ((l.sessionScopeToWamType = e), (l.getIncomingStatusSkdmScope = s));
  },
  98,
);
