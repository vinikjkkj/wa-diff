__d(
  "MWBroadcastChannelLoggingShapesForSharing",
  ["ChannelShareDialogLoggingContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        action: 1,
        event: 12,
        parentSurface: d(e),
        source: 85,
        surface: 52,
      };
    }
    function s(e) {
      return {
        action: 1,
        event: 10,
        parentSurface: d(e),
        source: 10,
        surface: 52,
      };
    }
    function u(e) {
      return {
        action: 1,
        event: 17,
        parentSurface: d(e),
        source: 17,
        surface: 52,
      };
    }
    function c(e) {
      return {
        action: 2,
        event: 9,
        parentSurface: d(e),
        source:
          e === r("ChannelShareDialogLoggingContext").BROADCAST_CHANNEL_CREATION
            ? 84
            : 9,
        surface: 52,
      };
    }
    function d(e) {
      switch (e) {
        case r("ChannelShareDialogLoggingContext").BROADCAST_CHANNEL_CREATION:
          return 12;
        case r("ChannelShareDialogLoggingContext").THREAD_DETAILS_SHARE_ITEM:
          return 8;
        case r("ChannelShareDialogLoggingContext").THREAD_DETAILS_QUICK_ACTION:
          return 8;
        case r("ChannelShareDialogLoggingContext").CONTEXT_BANNER_QUICK_ACTION:
          return 7;
      }
    }
    ((l.getShareToFacebookFeedButtonClickLoggingShape = e),
      (l.getCopyLinkButtonClickLoggingShape = s),
      (l.getShareLinkToDirectUserButtonClickLoggingShape = u),
      (l.getShareDialogImpressionLoggingShape = c));
  },
  98,
);
