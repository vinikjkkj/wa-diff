__d(
  "useWAWebConversationPanelMetrics",
  [
    "WAWebAppTracker",
    "WAWebChatGetters",
    "WAWebChatOpenMetricsStore",
    "WAWebGroupType",
    "WAWebQplFlowWrapper",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumUiActionChatType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamMsgUtils",
    "WAWebWamPrivateStatsUtils",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useWAWebRenderCallbacks",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = r("qpl")._(891425633, "3259");
    function c(e, t) {
      var n = o("react-compiler-runtime").c(3),
        a = s(null),
        i;
      (n[0] !== e || n[1] !== t
        ? ((i = {
            onMount: function () {
              var n,
                r = o("WAWebChatOpenMetricsStore").consumeChatOpenMetrics(e);
              if (r != null) {
                a.current = r;
                var i = r.instanceKey,
                  l = r.openEvent,
                  s = r.uiActionEvent,
                  c = t();
                (c != null && (l.webcRenderedMessageCount = c),
                  o("WAWebAppTracker").AppTracker.start(
                    o("WAWebAppTracker").AppTrackerType.SelectChat,
                  ),
                  l.markWebcChatOpenT(),
                  o("WAWebQplFlowWrapper").QPL.markerPoint(u, "chat_open", {
                    instanceKey: i,
                  }));
                var m = e.groupMetadata;
                if (o("WAWebChatGetters").getIsGroup(e) && m != null) {
                  if (
                    ((s.isLid = m.isLidAddressingMode === !0),
                    m.cachedDeviceSizeBucket != null)
                  ) {
                    s.sizeBucket = m.cachedDeviceSizeBucket;
                    var p = o(
                      "WAWebWamGroupMetricUtils",
                    ).getGroupCountMetricsFromGroupMetadata(m);
                    s.set(p);
                  }
                  var _ = o(
                    "WAWebWamAddressingModeUtils",
                  ).getAddressingModeMetricsFromGroupMetadata(m);
                  _ != null && (s.localAddressingMode = _);
                } else s.isLid = e.id.isLid();
                (e.id.isBot() &&
                  (s.agentEngagementType = o(
                    "WAWebWamEnumAgentEngagementEnumType",
                  ).AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT),
                  (s.botType = o("WAWebWamMsgUtils").getWamBotType(
                    e.id,
                    null,
                    (n = e.contact.businessProfile) == null
                      ? void 0
                      : n.automatedType,
                  )),
                  (s.uiActionChatType = d(e)),
                  o(
                    "WAWebWamPrivateStatsUtils",
                  ).logUiActionShadowPrivateStatsTestEvents());
              }
            },
            onBeforePaint: function () {
              var e = a.current;
              if (e != null) {
                var t = e.instanceKey,
                  n = e.openEvent,
                  r = e.uiActionEvent;
                (n.markWebcChatOpenBeforePaintT(),
                  r.markUiActionT(),
                  o("WAWebQplFlowWrapper").QPL.markerPoint(u, "painted_start", {
                    instanceKey: t,
                  }),
                  o("WAWebAppTracker").attachWAMAppContext(r, r.uiActionT),
                  r.commit());
              }
            },
            onAfterPaint: function () {
              var e = a.current;
              if (e != null) {
                var n = e.instanceKey,
                  r = e.openEvent,
                  i = t();
                (i != null &&
                  ((r.webcFinalRenderedMessageCount = i),
                  o("WAWebQplFlowWrapper").QPL.markerAnnotate(
                    u,
                    { int: { finalRenderedMessageCount: i } },
                    { instanceKey: n },
                  )),
                  o("WAWebAppTracker").AppTracker.stop(
                    o("WAWebAppTracker").AppTrackerType.SelectChat,
                  ),
                  r.markWebcChatOpenPaintedT(),
                  o("WAWebQplFlowWrapper").QPL.markerPoint(u, "painted_end", {
                    instanceKey: n,
                  }),
                  r.commit(),
                  o("WAWebQplFlowWrapper").QPL.markerEnd(u, 2, {
                    instanceKey: n,
                  }),
                  (a.current = null));
              }
            },
            onUnmount: function () {
              var e = a.current;
              if (e != null) {
                var t = e.instanceKey;
                (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 4, {
                  instanceKey: t,
                }),
                  (a.current = null));
              }
            },
            onError: function () {
              var e = a.current;
              if (e != null) {
                var t = e.instanceKey;
                (o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3, {
                  instanceKey: t,
                }),
                  (a.current = null));
              }
            },
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = i))
        : (i = n[2]),
        r("useWAWebRenderCallbacks")(i));
    }
    function d(e) {
      if (o("WAWebChatGetters").getIsGroup(e)) {
        var t, n;
        return ((t = e.groupMetadata) == null ? void 0 : t.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE
              .DEFAULT_SUBGROUP
          : ((n = e.groupMetadata) == null ? void 0 : n.groupType) ===
              o("WAWebGroupType").GroupType.LINKED_SUBGROUP
            ? o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.SUBGROUP
            : o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.GROUP;
      }
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.CHANNEL
        : o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE.INDIVIDUAL;
    }
    l.default = c;
  },
  98,
);
