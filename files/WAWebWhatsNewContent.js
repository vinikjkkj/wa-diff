__d(
  "WAWebWhatsNewContent",
  [
    "fbt",
    "WAWebEnvironment",
    "WDSIconIcDescription.react",
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
      u = {
        description: function () {
          return s._(
            /*BTDS*/ "Find photos, videos, links and docs from all your chats in the media tab.",
          );
        },
        Icon: r("WDSIconIcPermMedia.react"),
      },
      c = {
        description: function () {
          return s._(
            /*BTDS*/ "Make HD video calls with sharper, smoother quality.",
          );
        },
        Icon: r("WDSIconIcVideoCall.react"),
      };
    function d() {
      return r("justknobx")._("1516") >= 2;
    }
    function m() {
      return [].concat(e, [r("WAWebEnvironment").isWindows ? c : u]);
    }
    ((l.hasWhatsNewContent = d), (l.getWhatsNewFeatures = m));
  },
  226,
);
