__d(
  "MediaUploadVUShimSurface",
  [
    "MediaUploadFBDefaultSurfaceDefinition",
    "MediaUploadFBEntryPointID",
    "MediaUploadFBSDK",
    "MediaUploadVUShim",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("MediaUploadFBDefaultSurfaceDefinition"))(
        r("MediaUploadFBSDK"),
      );
    s.registerClientConfiguration({
      entryPoints: [
        new (e = r("MediaUploadFBEntryPointID"))("composer", "pages_feed"),
        new e("composer", "pages_feed_video_composer"),
        new e("newsfeed_composer", "feed"),
        new e("composer", "timeline"),
      ],
      eventHooks: {
        publishCallback: function (t, n) {
          return r("MediaUploadVUShim").triggerPublish(t, n);
        },
        eventSubscriber: function (t) {
          r("MediaUploadVUShim").setupEventSubscription(t);
        },
      },
    });
    var u = s.createSurface(),
      c = u;
    l.default = c;
  },
  98,
);
