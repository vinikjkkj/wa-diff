__d(
  "cometHandlerProvider",
  [
    "BizKitNotificationsThinClientConnectionHandler",
    "CometNewsFeedConnectionHandler",
    "CometNotificationsThinClientConnectionHandler",
    "FBLogger",
    "PinnedCommentEventsConnectionHandler",
    "UFI2CommentsConnectionHandler",
    "VideoTimestampedCommentsConnectionHandler",
    "WorkNotificationsThinClientConnectionHandler",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "connection":
          return o("relay-runtime").ConnectionHandler;
        case "video_timestamped_comments":
          return o("VideoTimestampedCommentsConnectionHandler");
        case "pinned_comment_events":
          return o("PinnedCommentEventsConnectionHandler");
        case "ufi2_comments":
          return o("UFI2CommentsConnectionHandler");
        case "comet_news_feed":
          return o("CometNewsFeedConnectionHandler");
        case "comet_notifications_thin_client":
          return o("CometNotificationsThinClientConnectionHandler");
        case "bizkit_notifications_thin_client":
          return o("BizKitNotificationsThinClientConnectionHandler");
        case "work_notifications_thin_client":
          return o("WorkNotificationsThinClientConnectionHandler");
        case "deleteRecord":
          return o("relay-runtime").MutationHandlers.DeleteRecordHandler;
        case "appendEdge":
          return o("relay-runtime").MutationHandlers.AppendEdgeHandler;
        case "prependEdge":
          return o("relay-runtime").MutationHandlers.PrependEdgeHandler;
        case "deleteEdge":
          return o("relay-runtime").MutationHandlers.DeleteEdgeHandler;
        case "appendNode":
          return o("relay-runtime").MutationHandlers.AppendNodeHandler;
        case "prependNode":
          return o("relay-runtime").MutationHandlers.PrependNodeHandler;
      }
      throw r("FBLogger")("comet_ui").mustfixThrow(
        "RelayCometEnvironment: No handler defined for `%s`.",
        e,
      );
    }
    l.default = e;
  },
  98,
);
