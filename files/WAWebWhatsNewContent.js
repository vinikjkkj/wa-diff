__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "WAWebVoipGatingUtils",
    "WDSIconIcDescription.react",
    "WDSIconIcDownload.react",
    "WDSIconIcHistory.react",
    "WDSIconIcMood.react",
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
            /*BTDS*/ "Export a chat as a file to save or share a copy of your conversation.",
          );
        },
        Icon: r("WDSIconIcDownload.react"),
      },
      C = {
        description: function () {
          return s._(
            /*BTDS*/ "Write and edit broadcast messages faster with AI-powered suggestions.",
          );
        },
        Icon: r("WDSIconWdsIcPencilAi.react"),
      };
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_content_version",
      );
    }
    function v() {
      return b() >= 2;
    }
    function S() {
      return b() >= 3;
    }
    function R() {
      return b() === 3;
    }
    function L(e) {
      var t = e.bizAgentEligible,
        n = b();
      return n >= 4
        ? E()
        : n === 3
          ? T(t)
          : [].concat(u, [r("WAWebEnvironment").isWindows ? d : c]);
    }
    function E() {
      var e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? I(e) : k(e);
    }
    function k(e) {
      return e ? [m, y, p, f] : [y, p, f, _];
    }
    function I(e) {
      return e ? [m, C, y, p] : [C, y, p, f];
    }
    function T(e) {
      var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? x(t, e) : D(t);
    }
    function D(t) {
      return t ? [m, p, _, f] : [p, _, f, e];
    }
    function x(t, n) {
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
    ((l.hasWhatsNewContent = v),
      (l.hasSmbWhatsNewContent = S),
      (l.hasBizAgentWhatsNewHighlight = R),
      (l.getWhatsNewFeatures = L));
  },
  226,
);
