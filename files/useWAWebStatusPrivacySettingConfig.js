__d(
  "useWAWebStatusPrivacySettingConfig",
  [
    "WAWebCmd",
    "WAWebStatusPrivacySettingAction",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useMemo,
      d = s.useState;
    function m() {
      var e = o("react-compiler-runtime").c(20),
        t = d(),
        a = t[0],
        i = t[1],
        l = d(null),
        s = l[0],
        c = l[1],
        m = d(!1),
        f = m[0],
        g = m[1],
        h,
        y;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            var e = new AbortController();
            return (
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var t = yield r(
                  "WAWebStatusPrivacySettingAction",
                ).getStatusPrivacySetting();
                e.signal.aborted || (i(t), c(t));
              })(),
              function () {
                return e.abort();
              }
            );
          }),
          (y = []),
          (e[0] = h),
          (e[1] = y))
        : ((h = e[0]), (y = e[1])),
        u(h, y));
      var C;
      (e[2] !== (a == null ? void 0 : a.allowList) ||
      e[3] !== (a == null ? void 0 : a.denyList)
        ? ((C = function (t) {
            var e,
              n,
              r = t.setting,
              l = t.allowList,
              s = t.denyList,
              u = {
                setting: r,
                allowList:
                  r ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .AllowList
                    ? l
                    : (e = a == null ? void 0 : a.allowList) != null
                      ? e
                      : [],
                denyList:
                  r ===
                  o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                    .DenyList
                    ? s
                    : (n = a == null ? void 0 : a.denyList) != null
                      ? n
                      : [],
              };
            i(u);
          }),
          (e[2] = a == null ? void 0 : a.allowList),
          (e[3] = a == null ? void 0 : a.denyList),
          (e[4] = C))
        : (C = e[4]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "update_status_privacy_settings_from_bridge",
          C,
        ));
      var b;
      e: {
        if (s == null || a == null) {
          b = !1;
          break e;
        }
        var v = _,
          S = a.setting,
          R;
        e[5] !== S || e[6] !== s.allowList || e[7] !== a.allowList
          ? ((R =
              S ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .AllowList && !v(a.allowList, s.allowList)),
            (e[5] = S),
            (e[6] = s.allowList),
            (e[7] = a.allowList),
            (e[8] = R))
          : (R = e[8]);
        var L = R,
          E;
        e[9] !== S || e[10] !== s.denyList || e[11] !== a.denyList
          ? ((E =
              S ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType
                  .DenyList && !v(a.denyList, s.denyList)),
            (e[9] = S),
            (e[10] = s.denyList),
            (e[11] = a.denyList),
            (e[12] = E))
          : (E = e[12]);
        var k = E,
          I = S !== s.setting || L || k;
        b = I;
      }
      var T = b,
        D;
      e[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            g(!0);
          }),
          (e[13] = D))
        : (D = e[13]);
      var x = D,
        $ = p,
        P;
      e[14] !== f || e[15] !== T
        ? ((P = {
            statusAudienceSelectorClicked: f,
            statusAudienceSelectorUpdated: T,
          }),
          (e[14] = f),
          (e[15] = T),
          (e[16] = P))
        : (P = e[16]);
      var N;
      return (
        e[17] !== a || e[18] !== P
          ? ((N = {
              statusPostingPrivacyConfig: a,
              setStatusPostingPrivacyConfig: i,
              updateStatusPostingPrivacyConfig: $,
              audienceTracking: P,
              trackAudienceSelectorClicked: x,
            }),
            (e[17] = a),
            (e[18] = P),
            (e[19] = N))
          : (N = e[19]),
        N
      );
    }
    function p(e) {
      var t = e.allowList,
        n = e.denyList,
        r = e.setting;
      o("WAWebCmd").Cmd.updateStatusPrivacySettingsFromBridge({
        setting: r,
        allowList: t,
        denyList: n,
      });
    }
    function _(e, t) {
      if (e.length !== t.length) return !1;
      var n = new Set(e.map(f));
      return t.every(function (e) {
        return n.has(e.toString());
      });
    }
    function f(e) {
      return e.toString();
    }
    l.useWAWebStatusPrivacySettingConfig = m;
  },
  98,
);
