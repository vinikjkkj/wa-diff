__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
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
                  /*BTDS*/ "Post statuses and crosspost to Facebook or Instagram right from Web.",
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
          return s._(
            /*BTDS*/ "Download customer form responses as CSV directly from Web.",
          );
        },
        Icon: r("WDSIconIcDownload.react"),
      };
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_content_version",
      );
    }
    function C() {
      return y() >= 2;
    }
    function b() {
      return y() >= 3;
    }
    function v(e) {
      var t = e.bizAgentEligible;
      return y() >= 3
        ? S(t)
        : [].concat(u, [r("WAWebEnvironment").isWindows ? d : c]);
    }
    function S(e) {
      var t =
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_whats_new_modal_update_enabled",
        ) === !0;
      return o("WAWebMobilePlatforms").isSMB() ? L(t, e) : R(t);
    }
    function R(t) {
      return t ? [m, p, _, f] : [p, _, f, e];
    }
    function L(t, n) {
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
    ((l.hasWhatsNewContent = C),
      (l.hasSmbWhatsNewContent = b),
      (l.getWhatsNewFeatures = v));
  },
  226,
);
