__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebEnvironment",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcDescription.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcFilter.react",
    "WDSIconIcLabel.react",
    "WDSIconIcPermMedia.react",
    "WDSIconIcShare.react",
    "WDSIconIcVideoCall.react",
    "WDSIconWdsIcLogoMetaAi.react",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        {
          description: function () {
            return s._(
              /*BTDS*/ "Find all your photos, video and GIFs in the media library.",
            );
          },
          Icon: r("WDSIconIcFilter.react"),
        },
        {
          description: function () {
            return s._(
              /*BTDS*/ "Your profile and app settings are now in one place in the You tab.",
            );
          },
          Icon: r("WDSIconIcAccountCircle.react"),
        },
        {
          description: function () {
            return s._(
              /*BTDS*/ "Share your role, title or how you\u2019re known in groups with group member labels.",
            );
          },
          Icon: r("WDSIconIcLabel.react"),
        },
        {
          description: function () {
            return s._(
              /*BTDS*/ "Forward messages from chats and groups to your WhatsApp Status.",
            );
          },
          Icon: r("WDSIconIcFastForward.react"),
        },
      ],
      u = [
        {
          description: function () {
            return s._(
              /*BTDS*/ "Ask Meta AI questions, brainstorm ideas, or create images in your chats.",
            );
          },
          Icon: r("WDSIconWdsIcLogoMetaAi.react"),
        },
        {
          description: function () {
            return s._(
              /*BTDS*/ "Open and preview PDFs directly in your chats without downloading them.",
            );
          },
          Icon: r("WDSIconIcDescription.react"),
        },
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
      };
    function m() {
      return [].concat(u, [r("WAWebEnvironment").isWindows ? d : c]);
    }
    function p() {
      var t = r("justknobx")._("1516");
      return t >= 2 ? m() : e;
    }
    ((l.WHATS_NEW_FEATURES = e), (l.getWhatsNewFeatures = p));
  },
  226,
);
