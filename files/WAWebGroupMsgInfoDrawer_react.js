__d(
  "WAWebGroupMsgInfoDrawer.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebAgentCollection",
    "WAWebBizAgentAction",
    "WAWebBizGatingUtils",
    "WAWebChatAgentMsgInfoCell.react",
    "WAWebChatGroupMsgInfoCell.react",
    "WAWebChatKeptByMsgInfoCell.react",
    "WAWebChatPreferenceCollection",
    "WAWebContactCollection",
    "WAWebDisplayType",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebFeatureFlagName",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMsgInfoSectionFooter.react",
    "WAWebGroupMsgInfoSections",
    "WAWebKeepInChatIcon.react",
    "WAWebL10N",
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
    "WAWebSpinner.react",
    "WAWebStatusDblcheckIcon.react",
    "WAWebStatusVideoIcon.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebUiActionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumUiActionType",
    "WAWebWamGroupMetricUtils",
    "WAWebWamMsgUtils",
    "WAWebWamPrivateStatsUtils",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "stylex",
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
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState,
      h = {
        svg: { width: "x1xp8n7a", height: "xmix8c7", $$css: !0 },
        statusBlue: { color: "xy5zui7", $$css: !0 },
        contentDeemphasized: { color: "xhslqc4", $$css: !0 },
        ack: { color: "x1rv0e52", $$css: !0 },
        titleRefreshed: { display: "x78zum5", $$css: !0 },
      },
      y = 50,
      C = 50,
      b = o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT + 10;
    function v(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.chat,
        a = e.elevatedPushNamesEnabled,
        i = e.participant,
        l;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i
          ? ((l = m.jsx(r("WAWebChatGroupMsgInfoCell.react"), {
              msgInfoParticipant: i,
              chat: n,
              contact: i.contact,
              elevatedPushNamesEnabled: a,
              theme: "drawer-list",
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.agentName,
        a = e.msg,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = m.jsx(r("WAWebChatAgentMsgInfoCell.react"), {
              msg: a,
              agentName: n,
              theme: "drawer-list",
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function R(e) {
      return o("WAWebContactCollection").ContactCollection.assertGet(e);
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a;
      if (t[0] !== n) {
        a = Symbol.for("react.early_return_sentinel");
        e: {
          var i = o("WAWebMsgGetters").getKicSender(n);
          if (i != null) {
            var l = R(i),
              s;
            (t[2] !== l || t[3] !== n.kicTimestampMs
              ? ((s = m.jsx(r("WAWebChatKeptByMsgInfoCell.react"), {
                  kicTimestampMs: n.kicTimestampMs,
                  contact: l,
                  theme: "drawer-list",
                })),
                (t[2] = l),
                (t[3] = n.kicTimestampMs),
                (t[4] = s))
              : (s = t[4]),
              (a = s));
            break e;
          }
        }
        ((t[0] = n), (t[1] = a));
      } else a = t[1];
      if (a !== Symbol.for("react.early_return_sentinel")) return a;
    }
    function E(e) {
      var t = e.msg,
        n = e.section,
        a,
        i;
      switch (n) {
        case o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER:
          (t.type === o("WAWebMsgType").MSG_TYPE.PTV
            ? (i = m.jsx(o("WAWebStatusVideoIcon.react").StatusVideoIcon, {
                xstyle: h.statusBlue,
                iconXstyle: h.svg,
              }))
            : (i = m.jsx(o("WAWebMicIcon.react").MicIcon, {
                xstyle: h.statusBlue,
                iconXstyle: h.svg,
              })),
            (a = s._(/*BTDS*/ "Played by")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.READ_HEADER:
          ((i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
            xstyle: h.ack,
            iconXstyle: h.svg,
          })),
            (a = s._(/*BTDS*/ "Read by")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER:
          ((i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
            xstyle: h.ack,
            iconXstyle: h.svg,
          })),
            (a = t.isViewOnce
              ? s._(/*BTDS*/ "Seen by")
              : s._(/*BTDS*/ "Seen by")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER:
          ((i = m.jsx(o("WAWebStatusDblcheckIcon.react").StatusDblcheckIcon, {
            iconXstyle: h.svg,
          })),
            (a = s._(/*BTDS*/ "Delivered to")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER:
          ((i = m.jsx(r("WDSIconWdsIcViewOnce.react"), {
            iconXstyle: [h.svg, h.contentDeemphasized],
          })),
            (a = s._(/*BTDS*/ "Opened by")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER:
          ((i = m.jsx(o("WAWebMultiDeviceIcon.react").MultiDeviceIcon, {
            iconXstyle: h.svg,
          })),
            (a = s._(/*BTDS*/ "Sent from")));
          break;
        case o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER:
          ((i = m.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
            iconXstyle: h.svg,
          })),
            (a = s._(/*BTDS*/ "Kept by")));
          break;
        default:
          return (
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Invalid SECTION for group message info section header",
                ])),
            ),
            null
          );
      }
      return m.jsxs(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0, dir: r("WAWebL10N").LR() },
          (c || (c = r("stylex"))).props(
            h.titleRefreshed,
            o("WAWebUISpacing").uiPadding.all20,
            o("WAWebUISpacing").uiPadding.top0,
          ),
          {
            children: [
              i,
              m.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
                as: "span",
                xstyle: o("WAWebUISpacing").uiPadding.horiz10,
                textWrap: "ellipsis",
                children: a,
              }),
            ],
          },
        ),
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.data,
        n = e.msg,
        a = e.msgInfo;
      if (t.kind === "contact-row")
        return m.jsx(v, {
          participant: t.participant,
          chat: o("WAWebFrontendMsgGetters").getChat(n),
          elevatedPushNamesEnabled: o(
            "WAWebElevatedPushNamesFlag",
          ).elevatedPushNamesM2Enabled(o("WAWebFrontendMsgGetters").getChat(n)),
        });
      if (t.kind === "agent-row")
        return m.jsx(S, { msg: n, agentName: t.agentName });
      if (t.kind === "kept-by-row") return m.jsx(L, { msg: n });
      switch (t.type) {
        case o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.READ_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER:
        case o("WAWebGroupMsgInfoSections").Sections.KEEP_IN_CHAT_HEADER:
          return m.jsx(E, { msg: n, section: t.type });
        default:
          return m.jsx(r("WAWebGroupMsgInfoSectionFooter.react"), {
            section: t.type,
            msgInfo: r("WANullthrows")(a),
          });
      }
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(t) {
      "use no forget";
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.msg,
        c = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          (a = o("WAWebMsgGetters")).getId,
          a.getStar,
          a.getType,
          a.getIsGif,
          a.getIsViewOnce,
          a.getLabels,
          a.getNumTimesForwarded,
          a.getIsFrequentlyForwarded,
          a.getAgendId,
          a.getKicSender,
          a.getKicTimestampMs,
          a.getIsKept,
          a.getLatestEditMsgKey,
        ]),
        d = c[0],
        p = c[1],
        h = c[2],
        v = c[3],
        S = c[4],
        R = c[5],
        L = c[6],
        E = c[7],
        I = c[8],
        T = c[9],
        D = c[10],
        x = c[11],
        $ = c[12],
        P = o("WAWebFrontendMsgGetters").getChat(u),
        N = !!((n = P.groupMetadata) != null && n.isLidAddressingMode),
        M = o("WAWebWamMsgUtils").msgIsLid(u, P.id, N),
        w = r("useWAWebUnmountSignal")(),
        A = r("useWAWebUIM")(),
        F = r("useLazyRef")(function () {
          return new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
            uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
              .MSG_INFO_OPEN,
            uiActionPreloaded: !0,
            isLid: M,
          });
        }),
        O = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        B = f(null),
        W = f(null),
        q = g(void 0),
        U = q[0],
        V = q[1],
        H = g(!1),
        G = H[0],
        z = H[1];
      (_(function () {
        var e;
        o("WAWebMsgInfoCollection")
          .MsgInfoCollection.find(d)
          .then(function (e) {
            w.aborted || V(e);
          })
          .catch(function () {
            (z(!0),
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Couldn't display message info. Try again later.",
                  ),
                  id: o("WAWebToast.react").genId("msg_info_failed"),
                }),
              ));
          });
        var t = (e = B.current) == null ? void 0 : e.getContainer();
        h === o("WAWebMsgType").MSG_TYPE.IMAGE &&
          t &&
          (t.scrollTop = t.scrollHeight);
      }, []),
        _(function () {
          var e = F.current;
          if (e) {
            var t = r("WAWebGroupMetadataCollection").get(P.id),
              n = t == null ? void 0 : t.cachedDeviceSizeBucket;
            if ((n != null && (e.sizeBucket = n), t != null)) {
              var a = o(
                "WAWebWamAddressingModeUtils",
              ).getAddressingModeMetricsFromGroupMetadata(t);
              a != null && (e.localAddressingMode = a);
              var i = o(
                "WAWebWamGroupMetricUtils",
              ).getGroupCountMetricsFromGroupMetadata(t);
              e.set(i);
            }
            (e.markUiActionT(), e.commit(), (F.current = void 0));
          }
          (o(
            "WAWebWamPrivateStatsUtils",
          ).logUiActionShadowPrivateStatsTestEvents(),
            o("WAWebBizAgentAction").logMessageInfo(I));
        }, []));
      var j = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        K = function (t, n) {
          var e;
          return (
            n === void 0 && (n = !1),
            t === d &&
              (n
                ? !0
                : (e = W.current) == null
                  ? void 0
                  : e.getMsgComponentRef())
          );
        },
        Q = function () {
          A == null || A.requestDismiss();
        },
        X = function () {
          var e = [];
          if (
            (U &&
              x &&
              T != null &&
              (e.push({
                kind: "section",
                type: o("WAWebGroupMsgInfoSections").Sections
                  .KEEP_IN_CHAT_HEADER,
                itemKey: o("WAWebGroupMsgInfoSections").Sections
                  .KEEP_IN_CHAT_HEADER,
                height: C,
              }),
              e.push({
                kind: "kept-by-row",
                itemKey: "kept-by-" + T.user,
                height: b,
              })),
            j &&
              o(
                "WAWebBizGatingUtils",
              ).isMultiDeviceMessageAttributionEnabled() &&
              I != null)
          ) {
            var t,
              n,
              r =
                (t =
                  (n = o("WAWebAgentCollection").AgentCollection.get(I)) == null
                    ? void 0
                    : n.name) != null
                  ? t
                  : "";
            (e.push({
              kind: "section",
              type: o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER,
              itemKey: o("WAWebGroupMsgInfoSections").Sections.AGENT_HEADER,
              height: C,
            }),
              e.push({
                kind: "agent-row",
                agentName: r,
                itemKey: "agent-" + r.toString(),
                height: b,
              }));
          }
          var a = o("WAWebMsgGetters").getIsAckPlayable(u),
            i = a || S;
          if (U && i) {
            var l =
              a && !S
                ? o("WAWebGroupMsgInfoSections").Sections.PLAYED_HEADER
                : o("WAWebGroupMsgInfoSections").Sections.VIEWED_HEADER;
            (e.push({ kind: "section", type: l, itemKey: l, height: C }),
              e.push.apply(
                e,
                U.played.map(function (e) {
                  return {
                    participant: e,
                    kind: "contact-row",
                    itemKey: e.id.toString(),
                    height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT,
                  };
                }),
              ),
              U.playedRemaining > 0 &&
                ((l =
                  a && !S
                    ? o("WAWebGroupMsgInfoSections").Sections.PLAYED_FOOTER
                    : o("WAWebGroupMsgInfoSections").Sections.VIEWED_FOOTER),
                e.push({ kind: "section", type: l, itemKey: l, height: y })));
          }
          return (
            U &&
              (U.read.length > 0 || U.playedRemaining > 0) &&
              (e.push({
                kind: "section",
                type: i
                  ? o("WAWebGroupMsgInfoSections").Sections.SEEN_HEADER
                  : o("WAWebGroupMsgInfoSections").Sections.READ_HEADER,
                itemKey: o("WAWebGroupMsgInfoSections").Sections.READ_HEADER,
                height: C,
              }),
              e.push.apply(
                e,
                U.read
                  .map(function (e) {
                    var t;
                    return (t = u.invokedBotWid) != null &&
                      t.isBot() &&
                      o("WAWebUserPrefsMeUser").isMeAccount(e.id)
                      ? null
                      : {
                          participant: e,
                          kind: "contact-row",
                          itemKey: e.id.toString(),
                          height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT,
                        };
                  })
                  .filter(Boolean),
              ),
              U.readRemaining > 0 &&
                e.push({
                  kind: "section",
                  type: o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER,
                  itemKey: i
                    ? o("WAWebGroupMsgInfoSections").Sections.SEEN_FOOTER
                    : o("WAWebGroupMsgInfoSections").Sections.READ_FOOTER,
                  height: y,
                })),
            U &&
              (U.delivery.length > 0 || U.deliveryRemaining > 0) &&
              (e.push({
                kind: "section",
                type: o("WAWebGroupMsgInfoSections").Sections.DELIVERED_HEADER,
                itemKey: o("WAWebGroupMsgInfoSections").Sections
                  .DELIVERED_HEADER,
                height: C,
              }),
              e.push.apply(
                e,
                U.delivery
                  .map(function (e) {
                    var t;
                    return (t = u.invokedBotWid) != null &&
                      t.isBot() &&
                      o("WAWebUserPrefsMeUser").isMeAccount(e.id)
                      ? null
                      : {
                          participant: e,
                          kind: "contact-row",
                          itemKey: e.id.toString(),
                          height: o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT,
                        };
                  })
                  .filter(Boolean),
              ),
              U.deliveryRemaining > 0 &&
                e.push({
                  kind: "section",
                  type: o("WAWebGroupMsgInfoSections").Sections
                    .DELIVERED_FOOTER,
                  itemKey: o("WAWebGroupMsgInfoSections").Sections
                    .DELIVERED_FOOTER,
                  height: y,
                })),
            e
          );
        },
        Y = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (o("useWAWebListener").useListener(
        U == null ? void 0 : U.played,
        ["add", "remove"],
        Y,
      ),
        o("useWAWebListener").useListener(
          U == null ? void 0 : U.read,
          ["add", "remove"],
          Y,
        ),
        o("useWAWebListener").useListener(
          U == null ? void 0 : U.delivery,
          ["add", "remove"],
          Y,
        ),
        o("useWAWebListener").useListener(u, "revoked", function () {
          A == null || A.requestDismiss();
        }),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          function (e) {
            e.id.equals(d) && (A == null || A.requestDismiss());
          },
        ),
        o("useWAWebListener").useListener(
          u,
          "change:latestEditMsgKey",
          function () {
            return A == null ? void 0 : A.requestDismiss();
          },
        ));
      var J;
      !U &&
        !G &&
        (J = m.jsx("div", {
          className: "x78zum5 x6s0dn4 xl56j7k xvv2zd5",
          children: m.jsx(o("WAWebSpinner.react").Spinner, {
            size: 50,
            stroke: 4,
          }),
        }));
      var Z = X(),
        ee = Z.length
          ? m.jsx(o("WAWebFlatList.react").FlatList, {
              flatListController: O.current,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: Z,
              renderItem: function (t) {
                return m.jsx(k, { data: t, msg: u, msgInfo: U });
              },
            })
          : null,
        te = null;
      return (
        R &&
          R.length > 0 &&
          o("WAWebBizGatingUtils").canDisplayLabel() &&
          (te = m.jsx(r("WAWebDrawerSection.react"), {
            theme: "padding",
            children: m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
              labels: R,
            }),
          })),
        m.jsxs(r("WAWebDrawer.react"), {
          ref: i,
          theme: "striped",
          tsNavigationData: {
            surface: "group-msg-info",
            viewName: "group-msg-info",
          },
          children: [
            m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: s._(/*BTDS*/ "Message info"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              rtlFixIfOnDarwin: !0,
              onCancel: Q,
              focusBackOrCancel: !0,
            }),
            m.jsx(r("WAWebMsgPreview.react"), {
              ref: B,
              chatPreference: r("WAWebChatPreferenceCollection").assertGet(
                "defaultPreference",
              ),
              children: m.jsx(r("WAWebMessageWrapper.react"), {
                msg: u,
                ref: W,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO,
                isMsgVisible: K,
                position: o("WAWebMessagePosition").MsgPosition.END,
                onProductClick: l.onProductClick,
                errorBoundaryName: "group-msg-info-drawer",
              }),
            }),
            m.jsxs(r("WAWebDrawerBody.react"), {
              flatListControllers: [O.current],
              children: [
                te,
                J,
                m.jsx("div", { className: "x889kno x1t4gjm", children: ee }),
              ],
            }),
          ],
        })
      );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"), (l.default = I));
  },
  226,
);
