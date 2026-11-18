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
      S = {
        description: function () {
          return s._(
            /*BTDS*/ "You can include a message when forwarding something to another chat.",
          );
        },
        Icon: r("WDSIconIcFastForward.react"),
      },
      R = {
        description: function () {
          return s._(/*BTDS*/ "Links in polls are now clickable.");
        },
        Icon: r("WDSIconWdsIcPoll.react"),
      },
      L = {
        description: function () {
          return s._(
            /*BTDS*/ "Use the shortcuts on the Status tab to post text, photos or videos.",
          );
        },
        Icon: r("WDSIconIcEdit.react"),
      },
      E = {
        description: function () {
          return s._(
            /*BTDS*/ "When you add new members to a group you can send them message history.",
          );
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
    function x() {
      return I() === 3;
    }
    function $(e) {
      var t = e.bizAgentEligible,
        n = I();
      return n >= 6 ? P() : n === 5 ? N() : n === 4 ? M() : F(t);
    }
    function P() {
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
    function N() {
      var e = [y].concat(
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? [f] : [],
        o("WAWebStatusGatingUtils").isStatusLikesSendEnabled() ? [C] : [],
        [b],
      );
      return [].concat(e, v).slice(0, k);
    }
    function M() {
      var e = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? A(e) : w(e);
    }
    function w(e) {
      return o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
        ? e
          ? [f, u, c, m]
          : [f, c, m, d]
        : e
          ? [u, g, c, m]
          : [g, c, m, d];
    }
    function A(e) {
      return e ? [u, h, g, c] : [h, g, c, m];
    }
    function F(e) {
      var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
      return o("WAWebMobilePlatforms").isSMB() ? B(t, e) : O(t);
    }
    function O(t) {
      return t ? [u, c, d, m] : [c, d, m, e];
    }
    function B(t, n) {
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
      (l.hasBizAgentWhatsNewHighlight = x),
      (l.getWhatsNewFeatures = $));
  },
  226,
);
