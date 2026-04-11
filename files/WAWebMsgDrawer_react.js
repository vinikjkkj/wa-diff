__d(
  "WAWebMsgDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebContentPlaceholder.react",
    "WAWebDisplayType",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmptyState.react",
    "WAWebFrontendConstants",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMessagePosition",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebRefreshIcon.react",
    "WAWebRenderCursor",
    "WAWebReportedMsg.react",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebStarredMsg.react",
    "WAWebTabOrder",
    "WAWebThreadMsgUtils",
    "WAWebVelocityTransitionGroup",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebStableCallback",
    "useWAWebThrottledCallback",
    "useWAWebUIM",
    "useWAWebUiIdle",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = ["ref"],
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useMemo,
      h = _.useRef,
      y = _.useState;
    function C(e) {
      return (
        e.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
        e.scrollHeight - e.clientHeight
      );
    }
    function b(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, d),
        i = a.msgCollection,
        l = a.chat,
        m = l === void 0 ? null : l,
        _ = a.onClose,
        b = a.title,
        v = a.emptyListText,
        S = a.footerText,
        R = a.headerMenu,
        L = a.headerType,
        E =
          L === void 0
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            : L,
        k = a.descriptionSection,
        I = a.displayType,
        T = a.testid,
        D = a.onMsgFooterClick,
        x = a.tsNavigationSurface,
        $ = x === void 0 ? "unknown" : x,
        P = a.searchSection,
        N = a.msgFilter,
        M = a.emptySearchText,
        w = g(
          function () {
            return { surface: $ };
          },
          [$],
        ),
        A = r("useWAWebUnmountSignal")(),
        F = r("useWAWebUIM")(),
        O = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        B = r("useWAWebUiIdle")(),
        W = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        q = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        U = r("useLazyRef")(function () {
          return new Set();
        }),
        V = h(0),
        H = h({}),
        G = h(null),
        z = h(null),
        j = function () {
          return o("WAWebRenderCursor")
            .RenderCursor.create({
              msgCollection: i,
              type: o("WAWebRenderCursor").RENDER_CURSOR.STARRED_DRAWER,
            })
            .loadAfter(i, {
              count: o("WAWebCollectionConstants").MSG_PRELOAD_THRESHOLD,
            });
        },
        K = y(j),
        Q = K[0],
        X = K[1],
        Y = function () {
          var e = i.toArray();
          (W.current.init(e, !0), q.current.init(e));
        },
        J = function (t) {
          (Y(), O());
        },
        Z = function (t, n) {
          n
            ? (H.current[t.id.toString()] = n)
            : delete H.current[t.id.toString()];
        },
        ee = r("useWAWebStableCallback")(function () {
          var t = m == null ? void 0 : m.id;
          if (Q.getEnd(i) < i.length) X(Q.loadAfter(i));
          else {
            if (i.isSynced) return;
            i.sync(t)
              .then(function () {
                A.aborted || (Q.hasAfter(i) && X(Q.loadAfter(i)));
              })
              .catch(function (t) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose(
                      ["MsgDrawer:loadEarlierMsgs failed\n", ""],
                      ["MsgDrawer:loadEarlierMsgs failed\\n", ""],
                    )),
                  t,
                );
              });
          }
        }),
        te = function () {
          _ ? _() : F == null || F.requestDismiss();
        },
        ne = function (t) {
          if (G.current) {
            var e = t ? t.target : document.activeElement;
            e === G.current &&
              (W.current.index < 0
                ? W.current.setFirst(!0)
                : W.current.reset(!1));
          }
        },
        re = function (t) {
          t && t.preventDefault();
          var e = W.current.next();
          W.current.index !== e && W.current.setNext(!0);
        },
        oe = function (t) {
          t && t.preventDefault();
          var e = W.current.prev();
          e > -1 && W.current.setPrev(!0);
        },
        ae = function (t) {
          (W.current.setVal(t), q.current.setVal(t));
          var e = { collection: m.msgs, key: t.id, msg: t };
          o("WAWebCmd").Cmd.openChatAt({
            chat: o("WAWebFrontendMsgGetters").getChat(t),
            msgContext: e,
          });
        },
        ie = function (t) {
          (W.current.setVal(t), q.current.setVal(t));
          var e = o("WAWebFrontendMsgGetters").getChat(t),
            n = o("WAWebThreadMsgUtils").getMsgAiThread(t);
          if (n != null && o("WAWebBotGating").isAiChatThreadsEnabled()) {
            o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, {
              type: "MessageSearch",
              msg: t,
            });
            return;
          }
          var r = o("WAWebChatMessageSearch").getSearchContext({
            chat: e,
            msgKey: t.id,
          });
          o("WAWebCmd").Cmd.openChatAt({
            chat: e,
            msgContext: r,
            onSuccess: { mediaMsgToOpenInMediaViewer: t },
          });
        },
        le = function () {
          var e = i.toArray(),
            t = i.isSynced ? Q.getEnd(i) : Math.min(Q.getEnd(i), e.length);
          return (
            (e = e.slice(Q.getStart(i), t)),
            m == null &&
              I === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS &&
              (e = e.filter(function (e) {
                return !o("WAWebFrontendMsgGetters").getChat(e).isLocked;
              })),
            N != null && (e = e.filter(N)),
            (V.current = e.length),
            e
          );
        },
        se = function (t) {
          if (!t) return o("WAWebMessagePosition").MSG_VISIBILITY.BELOW;
          var e = z.current;
          if (e) {
            var n = e.previousSibling;
            if (!(!n || !(n instanceof HTMLElement))) {
              var r = n.clientHeight,
                a = e.scrollTop + r,
                i = a + e.clientHeight,
                l = t.getElement();
              return l
                ? l.offsetTop + l.clientHeight <= a
                  ? o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE
                  : l.offsetTop >= i
                    ? o("WAWebMessagePosition").MSG_VISIBILITY.BELOW
                    : o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE
                : o("WAWebMessagePosition").MSG_VISIBILITY.BELOW;
            }
          }
        },
        ue = function (t) {
          var e = H.current[t.toString()];
          if (e) {
            var n = e.getWrapperRef();
            if (n && typeof n.getMsgComponentRef == "function")
              return n.getMsgComponentRef();
          }
        },
        ce = function (t, n) {
          return (
            n === void 0 && (n = !1),
            U.current.has(t.toString()) && (n ? !0 : ue(t))
          );
        },
        de = function (t, n) {
          t.forEach(function (e) {
            if (!n.has(e)) {
              var t = i.get(e);
              if (t != null && t.isGif) {
                var r = ue(e);
                (r == null ? void 0 : r.getPlayCount) != null &&
                  r.getPlayCount() &&
                  r.pause();
              }
            }
          });
        },
        me = r("useWAWebThrottledCallback")(function () {
          for (var e = le(), t = new Set(), n = 0, a = V.current - 1; n < a; ) {
            var i = Math.floor((n + a) / 2),
              l = H.current[e[i].id.toString()];
            if (!r("gkx")("26258")) {
              var s = l == null ? void 0 : l.getElement();
              s ||
                (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "invalid ref lookup for ref: ",
                      " msg index: ",
                      "",
                    ])),
                  e[i].id.toString(),
                  i,
                ),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "all refs: ",
                      "",
                    ])),
                  Object.keys(H.current).toString(),
                ));
            }
            se(l) === o("WAWebMessagePosition").MSG_VISIBILITY.ABOVE
              ? (n = i + 1)
              : (a = i);
          }
          for (var d = n; d < e.length; d++) {
            var m = H.current[e[d].id.toString()];
            if (se(m) !== o("WAWebMessagePosition").MSG_VISIBILITY.VISIBLE)
              break;
            t.add(e[d].id.toString());
          }
          (de(U.current, t), (U.current = t));
        }, 100),
        pe = r("useWAWebThrottledCallback")(function (e) {
          (me(), e.currentTarget && C(e.currentTarget) && ee());
        }, 100);
      (f(function () {
        (Y(),
          !i.isSynced &&
            i.length < o("WAWebCollectionConstants").PAGE_SIZE &&
            B(ee));
      }, []),
        f(
          function () {
            me();
          },
          void 0,
        ),
        o("useWAWebListener").useListener(window, "resize", me),
        o("useWAWebListener").useListener(i, ["reset", "sync"], function () {
          (Y(), O());
        }),
        o("useWAWebListener").useListener(i, ["add", "remove"], J),
        o("useWAWebListener").useListener(i, "reset", function () {
          ((U.current = new Set()), X(j()), ee());
        }));
      var _e = i.isSynced,
        fe = i.length;
      f(
        function () {
          !_e && fe < o("WAWebCollectionConstants").PAGE_SIZE && B(ee);
        },
        [ee, B, _e, fe],
      );
      var ge = le(),
        he,
        ye,
        Ce;
      i.isSynced && Q.getEnd(i) >= ge.length
        ? (ye = null)
        : a.msgCollection.syncPromise
          ? (ye = p.jsx("div", {
              className: "x78zum5 x1okw0bk xl56j7k xl7twdi xvg22vi xhslqc4",
              title: s._(/*BTDS*/ "Loading messages\u2026"),
              children: p.jsx(o("WAWebSpinner.react").Spinner, {
                stroke: 6,
                size: 24,
              }),
            }))
          : (ye = p.jsx("div", {
              className: "x78zum5 x1okw0bk xl56j7k xl7twdi xvg22vi xhslqc4",
              children: p.jsx("div", {
                title: s._(/*BTDS*/ "Load earlier messages\u2026"),
                onClick: ee,
                children: p.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
              }),
            }));
      var be = { down: re, up: oe },
        ve =
          I === o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG
            ? "reported-msg"
            : "md-chat-search-list";
      if (ge.length > 0) {
        var Se = ge.map(function (e) {
          var t = o("WAWebFrontendMsgGetters").getChat(e);
          if (
            t != null &&
            o("WAWebChatGetters").getIsNewsletter(t) &&
            t.isSuspended()
          )
            return null;
          var n =
              e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
              e.type === o("WAWebMsgType").MSG_TYPE.AUDIO,
            a = {
              msg: e,
              isMsgVisible: n ? ce : r("WAWebNoop"),
              currSelection: W.current,
              activeSelection: q.current,
            };
          return I === o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG
            ? p.jsx(
                r("WAWebReportedMsg.react"),
                babelHelpers.extends(
                  {
                    ref: function (n) {
                      return void Z(e, n);
                    },
                    onMsgFooterClick: D,
                    onClickMsg: ae,
                  },
                  a,
                ),
                "rta-msg-" + e.id.toString(),
              )
            : p.jsx(
                r("WAWebStarredMsg.react"),
                babelHelpers.extends(
                  {
                    ref: function (n) {
                      return void Z(e, n);
                    },
                    displayType:
                      I || o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS,
                    onClickMsg: ie,
                  },
                  a,
                ),
                "starred-msg-" + e.id.toString(),
              );
        });
        ((he = p.jsx(r("WAWebVelocityTransitionGroup"), {
          transitionName: "slide",
          children: p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: G,
            onFocus: ne,
            tabIndex: 0,
            "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_STARRED_DRAWER,
            handlers: be,
            children: Se,
          }),
        })),
          (Ce = k));
      } else
        a.msgCollection.isSynced
          ? ((he =
              N != null && ge.length === 0 && i.length > 0 && M != null
                ? M
                : v),
            I === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS &&
              (ve = "starred-msgs-drawer-empty"))
          : ((he = p.jsx(o("WAWebEmptyState.react").Loading, {})), (ye = null));
      var Re;
      S != null &&
        (Re = p.jsx(r("WAWebContentPlaceholder.react"), {
          theme: ve,
          children: S,
        }));
      var Le =
        I === o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS
          ? "starred"
          : "gallery";
      return p.jsx(r("WAWebDrawer.react"), {
        theme: Le,
        ref: n,
        testid: void 0,
        tsNavigationData: w,
        children: p.jsxs("div", {
          className:
            "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf xh8yej3 x5yr21d x6ikm8r x10wlt62 x67bb7w",
          children: [
            p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: b,
              onBack: te,
              type: E,
              menu: R,
              focusBackOrCancel: !0,
            }),
            P,
            p.jsxs(r("WAWebDrawerBody.react"), {
              onScroll: pe,
              ref: z,
              children: [Ce, he, ye, Re],
            }),
          ],
        }),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
