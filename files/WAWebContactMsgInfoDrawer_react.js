__d(
  "WAWebContactMsgInfoDrawer.react",
  [
    "fbt",
    "WAWebAgentCollection",
    "WAWebBizAgentAction",
    "WAWebBizGatingUtils",
    "WAWebChatContactMsgInfoCell.react",
    "WAWebChatPreferenceCollection",
    "WAWebDisplayType",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEphemeralFbtKic",
    "WAWebFeatureFlagName",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatIcon.react",
    "WAWebLabelsInfoDrawerLabelWell.react",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebMicIcon.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoCollection",
    "WAWebMsgPreview.react",
    "WAWebMsgType",
    "WAWebMultiDeviceIcon.react",
    "WAWebQplFlowWrapper",
    "WAWebSpinner.react",
    "WAWebStatusDblcheckIcon.react",
    "WAWebStatusVideoIcon.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUiActionWamEvent",
    "WAWebViewOnceViewedIcon.react",
    "WAWebWamEnumUiActionType",
    "WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE",
    "WAWebWamMsgUtils",
    "WAWebWamPrivateStatsUtils",
    "qpl",
    "react",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebGetFeatureFlag",
    "useWAWebListener",
    "useWAWebMsgValues",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = {
        svg: { width: "x1xp8n7a", height: "xmix8c7", $$css: !0 },
        statusBlue: { color: "xy5zui7", $$css: !0 },
        ack: { color: "x1rv0e52", $$css: !0 },
      },
      g = r("qpl")._(701177629, "3415");
    function h(t) {
      "use no forget";
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.msg,
        d = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          (a = o("WAWebMsgGetters")).getId,
          a.getStar,
          a.getType,
          a.getIsGif,
          a.getIsViewOnce,
          a.getLabels,
          a.getNumTimesForwarded,
          a.getIsFrequentlyForwarded,
          a.getAgendId,
          a.getT,
          a.getIsMdHistoryMsg,
          a.getKicSender,
          a.getKicTimestampMs,
          a.getIsKept,
          a.getLatestEditMsgKey,
        ]),
        h = d[0],
        y = d[1],
        C = d[2],
        b = d[3],
        v = d[4],
        S = d[5],
        R = d[6],
        L = d[7],
        E = d[8],
        k = d[9],
        I = d[10],
        T = d[11],
        D = d[12],
        x = d[13],
        $ = d[14],
        P = o("WAWebFrontendMsgGetters").getChat(u),
        N = r("useWAWebUIM")(),
        M = r("useWAWebUnmountSignal")(),
        w = p(null),
        A = p(null),
        F = !!((n = P.groupMetadata) != null && n.isLidAddressingMode),
        O = o("WAWebWamMsgUtils").msgIsLid(u, P.id, F),
        B = r("useLazyRef")(function () {
          return new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
            uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
              .MSG_INFO_OPEN,
            uiActionPreloaded: !0,
            isLid: O,
          });
        }),
        W = _(void 0),
        q = W[0],
        U = W[1],
        V = _(!1),
        H = V[0],
        G = V[1],
        z = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (o("useWAWebListener").useListener(
        q == null ? void 0 : q.played,
        ["add", "remove"],
        z,
      ),
        o("useWAWebListener").useListener(
          q == null ? void 0 : q.read,
          ["add", "remove"],
          z,
        ),
        o("useWAWebListener").useListener(
          q == null ? void 0 : q.delivery,
          ["add", "remove"],
          z,
        ),
        o("useWAWebListener").useListener(u, "revoked", function () {
          N == null || N.requestDismiss();
        }),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          function (e) {
            e.id.equals(h) && (N == null || N.requestDismiss());
          },
        ),
        o("useWAWebListener").useListener(
          u,
          "change:latestEditMsgKey",
          function () {
            return N == null ? void 0 : N.requestDismiss();
          },
        ));
      var j = r("useWAWebGetFeatureFlag")(
        o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
      ).enabled;
      (m(
        function () {
          var e;
          (o("WAWebQplFlowWrapper").QPL.markerStart(g, {
            annotations: { bool: { is_premium_subscriber: j } },
          }),
            o("WAWebQplFlowWrapper").QPL.markerPoint(g, "datasource_start"),
            o("WAWebMsgInfoCollection")
              .MsgInfoCollection.find(h)
              .then(function (e) {
                if (
                  (o("WAWebQplFlowWrapper").QPL.markerPoint(
                    g,
                    "datasource_end",
                  ),
                  M.aborted)
                ) {
                  o("WAWebQplFlowWrapper").QPL.markerEnd(g, 4);
                  return;
                }
                (U(e), o("WAWebQplFlowWrapper").QPL.markerEnd(g, 2));
              })
              .catch(function () {
                (o("WAWebQplFlowWrapper").QPL.markerEnd(g, 3),
                  G(!0),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Couldn't display message info. Try again later.",
                      ),
                      id: o("WAWebToast.react").genId("msg_info_failed"),
                    }),
                  ));
              }));
          var t = (e = w.current) == null ? void 0 : e.getContainer();
          C === o("WAWebMsgType").MSG_TYPE.IMAGE &&
            t &&
            (t.scrollTop = t.scrollHeight);
        },
        [$],
      ),
        m(function () {
          var e = B.current;
          if (e) {
            var t = o(
              "WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE",
            ).getGroupCountMetricsFromChatWid(P == null ? void 0 : P.id);
            (t != null && e.set(t),
              e.markUiActionT(),
              e.commit(),
              (B.current = void 0));
          }
          (o(
            "WAWebWamPrivateStatsUtils",
          ).logUiActionShadowPrivateStatsTestEvents(),
            o("WAWebBizAgentAction").logMessageInfo(E));
        }, []));
      var K = function (t, n) {
          var e;
          return (
            n === void 0 && (n = !1),
            t === h &&
              (n
                ? !0
                : (e = A.current) == null
                  ? void 0
                  : e.getMsgComponentRef())
          );
        },
        Q = function () {
          N == null || N.requestDismiss();
        },
        X,
        Y;
      if (q) {
        var J = [];
        if (x && T != null && D != null) {
          var Z = D / 1e3,
            ee = o("WAWebEphemeralFbtKic").getKeptByString(T),
            te = c.jsx("span", {
              className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
              children: c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
                iconXstyle: f.svg,
              }),
            });
          J.push(
            c.jsx(
              r("WAWebChatContactMsgInfoCell.react"),
              { title: ee, t: Z, icon: te },
              "keep-in-chat",
            ),
          );
        }
        if (!I) {
          var ne = o("WAWebMsgGetters").getIsAckPlayable(u);
          if (ne || v) {
            Y = ne ? s._(/*BTDS*/ "Seen") : s._(/*BTDS*/ "Seen");
            var re = q.played.head(),
              oe = re == null ? void 0 : re.t,
              ae = c.jsx(
                o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                { xstyle: f.statusBlue, iconXstyle: f.svg },
              );
            ne &&
              !v &&
              (u.type === o("WAWebMsgType").MSG_TYPE.PTT
                ? (ae = c.jsx(o("WAWebMicIcon.react").MicIcon, {
                    xstyle: f.statusBlue,
                    iconXstyle: f.svg,
                  }))
                : u.type === o("WAWebMsgType").MSG_TYPE.PTV &&
                  (ae = c.jsx(o("WAWebStatusVideoIcon.react").StatusVideoIcon, {
                    xstyle: f.statusBlue,
                    iconXstyle: f.svg,
                  })));
            var ie = c.jsx("span", {
              className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
              children: ae,
            });
            J.push(
              c.jsx(
                r("WAWebChatContactMsgInfoCell.react"),
                {
                  title:
                    ne && !v ? s._(/*BTDS*/ "Played") : s._(/*BTDS*/ "Opened"),
                  t: oe,
                  icon: ie,
                },
                "played",
              ),
            );
          }
          var le = q.read.head(),
            se = le == null ? void 0 : le.t,
            ue = c.jsx("span", {
              className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
              children: c.jsx(
                o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
                { xstyle: f.ack, iconXstyle: f.svg },
              ),
            });
          ((Y = Y != null ? Y : s._(/*BTDS*/ "Read")),
            J.push(
              c.jsx(
                r("WAWebChatContactMsgInfoCell.react"),
                { title: Y, t: se, icon: ue },
                "read",
              ),
            ));
          var ce = q.delivery.head(),
            de = ce == null ? void 0 : ce.t,
            me = c.jsx("span", {
              className: "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
              children: c.jsx(
                o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon,
                { iconXstyle: f.svg },
              ),
            });
          J.push(
            c.jsx(
              r("WAWebChatContactMsgInfoCell.react"),
              { title: s._(/*BTDS*/ "Delivered"), t: de, icon: me },
              "delivery",
            ),
          );
        }
        if (
          j &&
          o("WAWebBizGatingUtils").isMultiDeviceMessageAttributionEnabled() &&
          E != null
        ) {
          var pe,
            _e,
            fe =
              (pe =
                (_e = o("WAWebAgentCollection").AgentCollection.get(E)) == null
                  ? void 0
                  : _e.name) != null
                ? pe
                : "",
            ge = k;
          J.push(
            c.jsx(
              r("WAWebChatContactMsgInfoCell.react"),
              {
                title: fe,
                t: ge,
                icon: c.jsx("span", {
                  className:
                    "x1rg5ohu x1xp8n7a xqf2s3x xhslqc4 x2b8uid xmziwt1",
                  children: c.jsx(
                    o("WAWebMultiDeviceIcon.react").MultiDeviceIcon,
                    { iconXstyle: f.svg },
                  ),
                }),
              },
              "agent",
            ),
          );
        }
        X = c.jsx(r("WAWebDrawerSection.react"), {
          theme: "padding",
          children: J,
        });
      }
      var he;
      !q &&
        !H &&
        (he = c.jsx(
          "div",
          {
            className: "x78zum5 x6s0dn4 xl56j7k xvv2zd5",
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          },
          "spinner",
        ));
      var ye = null;
      return (
        S &&
          S.length > 0 &&
          o("WAWebBizGatingUtils").canDisplayLabel() &&
          (ye = c.jsx(r("WAWebDrawerSection.react"), {
            theme: "padding",
            children: c.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
              labels: S,
            }),
          })),
        c.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: i,
            theme: "striped",
            tsNavigationData: {
              surface: "contact-msg-info",
              viewName: "contact-msg-info",
            },
            children: [
              c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "Message info"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: !0,
                focusBackOrCancel: !0,
                onCancel: Q,
              }),
              c.jsx(r("WAWebMsgPreview.react"), {
                ref: w,
                chatPreference: r("WAWebChatPreferenceCollection").assertGet(
                  "defaultPreference",
                ),
                children: c.jsx(r("WAWebMessageWrapper.react"), {
                  msg: u,
                  ref: A,
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
                  isMsgVisible: K,
                  position: o("WAWebMessagePosition").MsgPosition.END,
                  onProductClick: l.onProductClick,
                  errorBoundaryName: "contact-msg-info-drawer",
                }),
              }),
              c.jsxs(r("WAWebDrawerBody.react"), {
                children: [
                  ye,
                  c.jsxs("div", {
                    className: "x2lah0s x889kno x1w3bhph",
                    children: [he, X],
                  }),
                ],
              }),
            ],
          },
          "message-info-modal",
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
