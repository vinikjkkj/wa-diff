__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatThemeGatingUtils",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMood.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPermMedia.react",
    "WDSIconIcShare.react",
    "WDSIconIcVideoCall.react",
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
      u = [
        {
          description: function () {
            return s._(
              /*BTDS*/ "Ask Meta AI questions, brainstorm ideas, or create images in your chats.",
            );
          },
          Icon: r("WDSIconWdsIcLogoMetaAi.react"),
        },
        e,
        {
          description: function () {
            return r("WAWebEnvironment").isWindows
              ? s._(
                  /*BTDS*/ "Post statuses and crosspost to Facebook or Instagram right from the app.",
                )
              : s._(
                  /*BTDS*/ "Post statuses and crosspost to Facebook or Instagram right from WhatsApp Web.",
                );
          },
          Icon: r("WDSIconIcShare.react"),
        },
      ],
      c = {
        description: function () {
          return s._(
            /*BTDS*/ "Find photos, videos, links and docs from all your chats in the media tab.",
          );
        },
        Icon: r("WDSIconIcPermMedia.react"),
      },
      d = {
        description: function () {
          return s._(
            /*BTDS*/ "Make HD video calls with sharper, smoother quality.",
          );
        },
        Icon: r("WDSIconIcVideoCall.react"),
      },
      m = {
        description: function () {
          return s._(
            /*BTDS*/ "Voice and video calling is now available in chats or in the new Calls tab.",
          );
        },
        Icon: r("WDSIconIcVideocam.react"),
      },
      p = {
        description: function () {
          return s._(
            /*BTDS*/ "Share past messages with new group members so they never miss the context.",
          );
        },
        Icon: r("WDSIconIcHistory.react"),
      },
      _ = {
        description: function () {
          return s._(
            /*BTDS*/ "Express yourself with a dynamic status that contacts can reply to.",
          );
        },
        Icon: r("WDSIconIcMood.react"),
      },
      f = {
        description: function () {
          return s._(
            /*BTDS*/ "Share files with Meta AI to get summaries, answers, and ideas on the spot.",
          );
        },
        Icon: r("WDSIconWdsIcLogoMetaAi.react"),
      },
      g = {
        description: function () {
          return s._(
            /*BTDS*/ "Set up your Meta Business Agent to reply to customers automatically, 24\/7.",
          );
        },
        Icon: r("WDSIconWdsIcAi.react"),
      },
      h = {
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
      y = {
        description: function () {
          return s._(
            /*BTDS*/ "Personalize your chats with colorful themes and custom wallpapers.",
          );
        },
        Icon: r("WDSIconIcPalette.react"),
      },
      C = {
        description: function () {
          return s._(
            /*BTDS*/ "Export a chat as a file to save or share a copy of your conversation.",
          );
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      b = {
        description: function () {
          return s._(
            /*BTDS*/ "Write and edit broadcast messages faster with AI-powered suggestions.",
          );
        },
        Icon: r("WDSIconWdsIcPencilAi.react"),
      };
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_content_version",
      );
    }
    function S() {
      return v() >= 2;
    }
    function R() {
      return v() >= 3;
    }
    function L() {
      return v() === 3;
    }
    function E(e) {
      var t = e.bizAgentEligible,
        n = v();
      return n >= 4
        ? k()
        : n === 3
          ? D(t)
          : [].concat(u, [r("WAWebEnvironment").isWindows ? d : c]);
    }
    function k() {
      var e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? T(e) : I(e);
    }
    function I(e) {
      return o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
        ? e
          ? [y, m, p, f]
          : [y, p, f, _]
        : e
          ? [m, C, p, f]
          : [C, p, f, _];
    }
    function T(e) {
      return e ? [m, b, C, p] : [b, C, p, f];
    }
    function D(e) {
      var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? $(t, e) : x(t);
    }
    function x(t) {
      return t ? [m, p, _, f] : [p, _, f, e];
    }
    function $(t, n) {
      var r = t ? [m, g, h, p] : [g, h, p, f];
      return n
        ? r
        : [].concat(
            r.filter(function (e) {
              return e !== g;
            }),
            [e],
          );
    }
    ((l.hasWhatsNewContent = S),
      (l.hasSmbWhatsNewContent = R),
      (l.hasBizAgentWhatsNewHighlight = L),
      (l.getWhatsNewFeatures = E));
  },
  226,
);
