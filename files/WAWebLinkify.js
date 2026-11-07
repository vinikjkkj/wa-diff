__d(
  "WAWebLinkify",
  [
    "WALinkify",
    "WALogger",
    "WASuspiciousLinks",
    "WAUrlSpoofChecksWasmInstance",
    "WAWebL10NCountryCodes",
    "WAWebL10NHelpers",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSuspiciousLinkMetrics",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsLocales",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      t === void 0 && (t = !1);
      var r = o("WALinkify").findLinks(e, t);
      return r.map(function (e) {
        return f(e, n != null);
      });
    }
    function u(e) {
      var t = e.httpOnly,
        n = t === void 0 ? !1 : t,
        r = e.sender,
        a = e.text,
        i = o("WALinkify").findLink(a, n);
      if (i != null) return f(i, r != null);
    }
    function c(e) {
      return e.body != null && u({ httpOnly: !0, text: e.body }) != null;
    }
    function d(e, t) {
      var n;
      return !t || !r("justknobx")._("7345")
        ? babelHelpers.extends({}, e, {
            suspiciousCharacters: void 0,
            suspiciousHostChecksPending: void 0,
          })
        : o("WAUrlSpoofChecksWasmInstance").isSuspiciousHostChecksInitialized()
          ? (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
              "attempt",
            ),
            babelHelpers.extends({}, e, {
              suspiciousCharacters: (n = g(e.domain)) != null ? n : void 0,
              suspiciousHostChecksPending: !1,
            }))
          : (o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
              "not-ready",
            ),
            babelHelpers.extends({}, e, {
              suspiciousCharacters: void 0,
              suspiciousHostChecksPending: !0,
            }));
    }
    function m(e) {
      return e.suspiciousHostChecksPending === !0 &&
        o("WAUrlSpoofChecksWasmInstance").isSuspiciousHostChecksInitialized()
        ? f(e, !0)
        : e;
    }
    var p;
    function _(t) {
      var n = r("getErrorSafe")(t);
      p !== n.message &&
        ((p = n.message),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Host classification failed",
              ])),
          )
          .catching(n)
          .sendLogs("suspicious-host-check-failed"));
    }
    function f(e, t) {
      try {
        return d(e, t);
      } catch (n) {
        return (
          o("WAWebSuspiciousLinkMetrics").recordSuspiciousLinkMetric(
            "exception",
          ),
          _(n),
          babelHelpers.extends({}, e, {
            suspiciousCharacters: void 0,
            suspiciousHostChecksPending: t,
          })
        );
      }
    }
    function g(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
      return o("WASuspiciousLinks").findSuspiciousCharacters(
        e,
        o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          t == null ? void 0 : t.user,
        ),
        h(),
      );
    }
    function h() {
      var e = o("WAWebRuntimeEnvironmentUtils").isWorker(),
        t = e
          ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").KEYS.LANG_FROM_PHONE,
            )
          : o("WAWebUserPrefsLocales").getPhoneLangPref();
      if (o("WAWebL10NHelpers").isLocalLanguageOverrideEnabled()) {
        var n = e
          ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").KEYS.LANG_FROM_USER,
            )
          : o("WAWebUserPrefsLocales").getUserLangPref();
        t = n != null ? n : t;
      }
      return (t != null ? t : "").split(/[-_]/)[0].toLowerCase();
    }
    ((l.findLinks = s),
      (l.findLink = u),
      (l.hasHttpLink = c),
      (l.reclassifySuspiciousLink = m),
      (l.logSuspiciousHostCheckFailure = _),
      (l.classifyLinkBestEffort = f));
  },
  98,
);
