__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatThemeGatingUtils",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebStatusGatingUtils",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMood.react",
    "WDSIconIcPalette.react",
    "WDSIconIcVideocam.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcLogoMetaAi.react",
    "WDSIconWdsIcPencilAi.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = {
        description: function () {
          return s._(
            /*BTDS*/ "Open and preview PDFs directly in your chats without downloading them.",
          );
        },
        Icon: r("WDSIconIcDescription.react"),
      },
      u = {
        description: function () {
          return s._(
            /*BTDS*/ "Voice and video calling is now available in chats or in the new Calls tab.",
          );
        },
        Icon: r("WDSIconIcVideocam.react"),
      },
      c = {
        description: function () {
          return s._(
            /*BTDS*/ "Share past messages with new group members so they never miss the context.",
          );
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      d = {
        description: function () {
          return s._(
            /*BTDS*/ "Express yourself with a dynamic status that contacts can reply to.",
          );
        },
        Icon: r("WDSIconIcMood.react"),
      },
      m = {
        description: function () {
          return s._(
            /*BTDS*/ "Share files with Meta AI to get summaries, answers, and ideas on the spot.",
          );
        },
        Icon: r("WDSIconWdsIcLogoMetaAi.react"),
      },
      p = {
        description: function () {
          return s._(
            /*BTDS*/ "Set up your Meta Business Agent to reply to customers automatically, 24\/7.",
          );
        },
        Icon: r("WDSIconWdsIcAi.react"),
      },
      _ = {
        description: function () {
          return r("WAWebEnvironment").isWindows
            ? s._(
                /*BTDS*/ "Download customer form responses as CSV directly from the app.",
              )
            : s._(
                /*BTDS*/ "Download customer form responses as CSV directly from WhatsApp Web.",
              );
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      f = {
        description: function () {
          return s._(
            /*BTDS*/ "Personalize your chats with colorful themes and custom wallpapers.",
          );
        },
        Icon: r("WDSIconIcPalette.react"),
      },
      g = {
        description: function () {
          return s._(
            /*BTDS*/ "Export a chat as a file to save or share a copy of your conversation.",
          );
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      h = {
        description: function () {
          return s._(
            /*BTDS*/ "Write and edit broadcast messages faster with AI-powered suggestions.",
          );
        },
        Icon: r("WDSIconWdsIcPencilAi.react"),
      },
      y = {
        description: function () {
          return s._(
            /*BTDS*/ "Now you can send message history to new group members.",
          );
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      C = {
        description: function () {
          return s._(
            /*BTDS*/ "Select the heart to like a status, just like on your phone.",
          );
        },
        Icon: r("WDSIconIcFavorite.react"),
      },
      b = {
        description: function () {
          return s._(/*BTDS*/ "Export a chat to save it as a file.");
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      v = [d, e],
      S = 4;
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_content_version",
      );
    }
    function L() {
      return R() >= 2;
    }
    function E() {
      var e = R();
      return e === 3 || e === 4;
    }
    function k() {
      return R() === 3;
    }
    function I(e) {
      var t = e.bizAgentEligible,
        n = R();
      return n >= 5 ? T() : n === 4 ? D() : P(t);
    }
    function T() {
      var e = [y].concat(
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? [f] : [],
        o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() ? [C] : [],
        [b],
      );
      return [].concat(e, v).slice(0, S);
    }
    function D() {
      var e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? $(e) : x(e);
    }
    function x(e) {
      return o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
        ? e
          ? [f, u, c, m]
          : [f, c, m, d]
        : e
          ? [u, g, c, m]
          : [g, c, m, d];
    }
    function $(e) {
      return e ? [u, h, g, c] : [h, g, c, m];
    }
    function P(e) {
      var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? M(t, e) : N(t);
    }
    function N(t) {
      return t ? [u, c, d, m] : [c, d, m, e];
    }
    function M(t, n) {
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
    ((l.hasWhatsNewContent = L),
      (l.hasSmbWhatsNewContent = E),
      (l.hasBizAgentWhatsNewHighlight = k),
      (l.getWhatsNewFeatures = I));
  },
  226,
);
