__d(
  "WAWebUserPrefsNuxPreferences",
  [
    "WAWebBizGatingUtils",
    "WAWebEventEmitter",
    "WAWebNux",
    "WAWebNuxSyncKey",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.handleNuxChange = function (t) {
            this.trigger(t);
          }),
          (n.close = function (t) {
            this.trigger("close_nux", t);
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    function u(e) {
      var t = o("WAWebNuxSyncKey").getNuxSyncKey(e);
      if (t != null && C(t)) return !1;
      var n = c(e);
      return n ? n.views < v(e) : !0;
    }
    function c(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      if (t == null || typeof t != "object") return null;
      var n = t.views;
      return typeof n == "number" ? { views: n } : null;
    }
    function d(e, t) {
      (r("WAWebUserPrefsStore").setUser(e, t), s.handleNuxChange(e));
    }
    function m(e) {
      (r("WAWebUserPrefsStore").setUser(e), s.handleNuxChange(e));
    }
    function p() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.NUX_LIST,
      );
      return e instanceof Array
        ? e.filter(function (e) {
            return typeof e == "string";
          })
        : [];
    }
    function _() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.NUX_DATA,
      );
      if (e != null && typeof e == "object" && !Array.isArray(e)) {
        var t = {};
        for (var n in e) {
          var a = e[n];
          a != null &&
            typeof a == "object" &&
            typeof a.acknowledged == "boolean" &&
            (t[n] = {
              acknowledged: a.acknowledged,
              timestamp: typeof a.timestamp == "number" ? a.timestamp : void 0,
            });
        }
        return t;
      }
      var i = p(),
        l = {};
      return (
        i.forEach(function (e) {
          l[e] = { acknowledged: !0 };
        }),
        i.length > 0 &&
          r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.NUX_DATA,
            l,
          ),
        l
      );
    }
    function f(e) {
      var t = _(),
        n = t[e];
      return (n == null ? void 0 : n.acknowledged) === !0 ? n.timestamp : null;
    }
    function g(e) {
      var t = new Set(p()),
        n = _();
      (e.forEach(function (e) {
        var r = e.acknowledged,
          o = e.nuxKey,
          a = e.timestamp;
        r
          ? (t.add(o), (n[o] = { acknowledged: !0, timestamp: a }))
          : (t.delete(o), (n[o] = { acknowledged: !1, timestamp: a }));
      }),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.NUX_LIST,
          Array.from(t),
        ),
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, n),
        e.forEach(function (e) {
          var t = e.nuxKey,
            n = b(t);
          n != null && s.handleNuxChange(n);
        }));
    }
    function h() {
      (r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_LIST, []),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.NUX_DATA,
          {},
        ));
    }
    function y(e) {
      m(e);
      var t = p().filter(function (t) {
          return t !== e;
        }),
        n = _();
      (delete n[e],
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_LIST, t),
        r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.NUX_DATA, n));
    }
    function C(e) {
      return p().includes(e);
    }
    function b(e) {
      return e === "message_label_deprecation_migrated"
        ? o("WAWebNux").NUX.MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT
        : e === "meta_ai_cta_banner"
          ? o("WAWebNux").NUX.META_AI_CTA_BANNER
          : e === "newsletter_questions_response_privacy_banner"
            ? o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER
            : e === "newsletter_questions_privacy_banner"
              ? o("WAWebNux").NUX.NEWSLETTER_QUESTIONS_PRIVACY_BANNER
              : null;
    }
    function v(e) {
      switch (e) {
        case "message_label_deprecation_migrated_permanent":
        case "desktop_upsell":
          return Number.POSITIVE_INFINITY;
        case "chat_assignment":
          return o("WAWebBizGatingUtils").chatAssignmentMaxNuxImpressions();
        case "status_quick_replies":
          return 3;
        case "web_ui_refresh":
          return 2;
        default:
          return 1;
      }
    }
    ((l.NuxPrefsEvent = s),
      (l.shouldShowNUX = u),
      (l.getNUX = c),
      (l.setNUX = d),
      (l.removeNUX = m),
      (l.getNuxSyncList = p),
      (l.getNuxAcknowledgedTimestamp = f),
      (l.updateNuxSyncList = g),
      (l.removeAllNuxSync = h),
      (l.resetNux = y),
      (l.nuxExistsInNuxSync = C),
      (l.getNuxMaxViews = v));
  },
  98,
);
