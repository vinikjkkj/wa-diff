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
    var e = { update: o("VideoTimestampedCommentsConnectionHandler").update },
      s = { update: o("PinnedCommentEventsConnectionHandler").update },
      u = { update: o("UFI2CommentsConnectionHandler").update },
      c = { update: o("CometNewsFeedConnectionHandler").update },
      d = { update: o("CometNotificationsThinClientConnectionHandler").update },
      m = {
        update: o("BizKitNotificationsThinClientConnectionHandler").update,
      },
      p = { update: o("WorkNotificationsThinClientConnectionHandler").update };
    function _(t) {
      switch (t) {
        case "connection":
          return o("relay-runtime").ConnectionHandler;
        case "video_timestamped_comments":
          return e;
        case "pinned_comment_events":
          return s;
        case "ufi2_comments":
          return u;
        case "comet_news_feed":
          return c;
        case "comet_notifications_thin_client":
          return d;
        case "bizkit_notifications_thin_client":
          return m;
        case "work_notifications_thin_client":
          return p;
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
        t,
      );
    }
    l.default = _;
  },
  98,
);
