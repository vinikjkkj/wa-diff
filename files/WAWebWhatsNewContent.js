__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatThemeGatingUtils",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebPollsGatingUtils",
    "WAWebQuickActionGatingUtils",
    "WAWebStatusGatingUtils",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcEdit.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMood.react",
    "WDSIconIcPalette.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcLogoMetaAi.react",
    "WDSIconWdsIcPencilAi.react",
    "WDSIconWdsIcPoll.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcDescription.react"),
      },
      u = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcVideocam.react"),
      },
      c = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      d = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcMood.react"),
      },
      m = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconWdsIcLogoMetaAi.react"),
      },
      p = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconWdsIcAi.react"),
      },
      _ = {
        description: function () {
          return r("WAWebEnvironment").isWindows
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      f = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcPalette.react"),
      },
      g = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      h = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconWdsIcPencilAi.react"),
      },
      y = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      C = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcFavorite.react"),
      },
      b = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      v = [d, e],
      S = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcFastForward.react"),
      },
      R = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconWdsIcPoll.react"),
      },
      L = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcEdit.react"),
      },
      E = {
        description: function () {
          return s._(/*BTDS*/ "");
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      k = 4;
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_content_version",
      );
    }
    function T() {
      return I() >= 2;
    }
    function D() {
      var e = I();
      return e === 3 || e === 4;
    }
    function x(e) {
      var t = e.bizAgentEligible,
        n = I();
      return n >= 6 ? $() : n === 5 ? P() : n === 4 ? N() : A(t);
    }
    function $() {
      var e = k - 1,
        t = [].concat(
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_forward_add_message_enabled",
          ) === !0
            ? [S]
            : [],
          o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled()
            ? [R]
            : [],
          o("WAWebQuickActionGatingUtils").isQuickActionsEnabled("status")
            ? [L]
            : [],
        );
      return (
        t.length < e &&
          o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
          t.push(f),
        t.length < e &&
          o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() &&
          t.push(C),
        [].concat([].concat(t, [b], v).slice(0, e), [E])
      );
    }
    function P() {
      var e = [y].concat(
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? [f] : [],
        o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() ? [C] : [],
        [b],
      );
      return [].concat(e, v).slice(0, k);
    }
    function N() {
      var e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? w(e) : M(e);
    }
    function M(e) {
      return o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
        ? e
          ? [f, u, c, m]
          : [f, c, m, d]
        : e
          ? [u, g, c, m]
          : [g, c, m, d];
    }
    function w(e) {
      return e ? [u, h, g, c] : [h, g, c, m];
    }
    function A(e) {
      var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? O(t, e) : F(t);
    }
    function F(t) {
      return t ? [u, c, d, m] : [c, d, m, e];
    }
    function O(t, n) {
      var r = t ? [u, p, _, c] : [p, _, c, m];
      return n
        ? r
        : [].concat(
            r.filter(function (e) {
              return e !== p;
            }),
            [e],
          );
    }
    ((l.hasWhatsNewContent = T),
      (l.hasSmbWhatsNewContent = D),
      (l.getWhatsNewFeatures = x));
  },
  226,
);
