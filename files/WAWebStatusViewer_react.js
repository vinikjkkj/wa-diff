__d(
  "WAWebStatusViewer.react",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendErrors",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFbtCommon",
    "WAWebFontLoader",
    "WAWebFrontendContactGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebSpinner.react",
    "WAWebStatusPlayer.react",
    "WAWebStatusRowViewWamEvent",
    "WAWebStatusSnapshot",
    "WAWebStatusViewerFollowNewsletterButton.react",
    "WAWebTabOrder",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumStatusRowEntryMethod",
    "WAWebWamEnumStatusRowSection",
    "WAWebWamEnumWebcRmrReasonCode",
    "WDSButton.react",
    "WDSIconIcArrowBack.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcClose.react",
    "WDSTooltip.react",
    "cr:23046",
    "react",
    "useLazyRef",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react")),
      y = g,
      C = y.useEffect,
      b = y.useId,
      v = y.useRef,
      S = y.useState,
      R = function (t) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "InvalidStatusIterator: ",
                "",
              ])),
            t,
          )
          .tags("status-iterator", "non-sad")
          .sendLogs("InvalidStatusIterator", { sampling: 0.01 });
      };
    function L(t) {
      var a,
        i,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        g = u.initialStatus,
        y = u.initialStatusMsg,
        L = u.onMsgNotFound,
        E = u.quotedMsgKey,
        k = r("useWAWebUnmountSignal")(),
        I = S(null),
        T = I[0],
        D = I[1],
        x = S(null),
        $ = x[0],
        P = x[1],
        N = S(!0),
        M = N[0],
        w = N[1],
        A = S((a = u.rowIdx) != null ? a : 0),
        F = A[0],
        O = A[1],
        B = v(null),
        W = r("useLazyRef")(function () {
          return Math.round(Math.random() * 1e9);
        }),
        q = v(0),
        U = r("useLazyRef")(function () {
          return new Map();
        }),
        V = r("useLazyRef")(function () {
          return new Map();
        }),
        H = r("useLazyRef")(function () {
          return new Map();
        }),
        G = v(-1),
        z = v(
          o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
            .DIRECT_ROW_TAP,
        ),
        j = function (t) {
          if (!(T && t === T.msgIdx) && T && B.current) {
            var e = B.current.statusAt(T, t);
            (w(!0),
              e
                .then(function (e) {
                  k.aborted || D(e);
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebStatusSnapshot").InvalidStatusIterator,
                    function () {
                      R("Invalid iterator while getting next status msg");
                    },
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").EphemeralDrop,
                    r("WAWebNoop"),
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebStatusSnapshot").StatusLoadingError,
                    function () {
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "No more status while preloading next status",
                          ])),
                      );
                    },
                  ),
                )
                .finally(function () {
                  w(!1);
                }));
          }
        };
      (C(
        function () {
          var e = B.current;
          if (T && e && e.hasNext(T)) {
            var t,
              n = e.getNext(T);
            n.then(function (t) {
              if (!k.aborted) {
                var n = e.statuses[t.statusIdx],
                  a = n.msgs[t.msgIdx];
                if (!a)
                  throw new (o("WAWebStatusSnapshot").StatusMsgNotFound)();
                if (a.type === o("WAWebMsgType").MSG_TYPE.CHAT)
                  o("WAWebFontLoader")
                    .FontLoader.loadMessageFont(a.font)
                    .catch(r("WAWebNoop"));
                else {
                  var i = a.mediaData;
                  i &&
                    i.mediaStage !==
                      o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                    a.downloadMedia({
                      downloadEvenIfExpensive: !0,
                      rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                        .WEBC_RMR_REASON_CODE.STATUS_V3,
                      isUserInitiated: !1,
                    });
                }
              }
            })
              .catch(
                (t = o("WAFilteredCatch")).filteredCatch(
                  o("WAWebStatusSnapshot").StatusMsgNotFound,
                  function () {
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Error finding next status while preloading next status",
                        ])),
                    );
                  },
                ),
              )
              .catch(
                t.filteredCatch(
                  o("WAWebStatusSnapshot").InvalidStatusIterator,
                  function () {
                    R("Invalid iterator while preloading next status");
                  },
                ),
              )
              .catch(
                t.filteredCatch(
                  o("WAWebBackendErrors").EphemeralDrop,
                  r("WAWebNoop"),
                ),
              )
              .catch(
                t.filteredCatch(
                  o("WAWebStatusSnapshot").StatusLoadingError,
                  function () {
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "No more status while preloading next status",
                        ])),
                    );
                  },
                ),
              );
          }
        },
        [T, k.aborted],
      ),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "status-view",
        }));
      var K = function (t) {
        (P(!0),
          o("WAPromiseDelays")
            .delayMs(200)
            .then(function () {
              k.aborted || u.closeStatusViewer(t);
            }));
      };
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "close_status_viewer",
        function () {
          K(!0);
        },
      );
      var Q = function () {
          if (
            u.rowSection ===
            o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
              .QUOTED_MESSAGE_IN_CHAT
          ) {
            K();
            return;
          }
          z.current = o(
            "WAWebWamEnumStatusRowEntryMethod",
          ).STATUS_ROW_ENTRY_METHOD.BACKWARDS_TAP;
          var e = B.current;
          if (T && e && e.hasPrev(T)) {
            var t = T.statusIdx,
              n = e.getPrev(T);
            n.then(function (e) {
              k.aborted ||
                (e.statusIdx === t
                  ? D(e)
                  : (O(function (e) {
                      return e - 1;
                    }),
                    P(!0),
                    o("WAPromiseDelays")
                      .delayMs(200)
                      .then(function () {
                        k.aborted || (D(e), P(!1));
                      })));
            })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebStatusSnapshot").InvalidStatusIterator,
                  function () {
                    R("Invalid iterator while getting previous status msg");
                  },
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").EphemeralDrop,
                  r("WAWebNoop"),
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebStatusSnapshot").StatusLoadingError,
                  function () {
                    o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "No more status while preloading next status",
                        ])),
                    );
                  },
                ),
              );
          }
        },
        X = function (t) {
          if (
            u.rowSection ===
            o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
              .QUOTED_MESSAGE_IN_CHAT
          ) {
            K();
            return;
          }
          z.current = t;
          var e = B.current;
          if (T && e && e.hasNext(T)) {
            var n = T.statusIdx,
              a = e.getNext(T);
            (w(!0),
              a
                .then(function (e) {
                  k.aborted ||
                    (e.statusIdx === n
                      ? D(e)
                      : (O(function (e) {
                          return e + 1;
                        }),
                        P(!0),
                        w(!1),
                        o("WAPromiseDelays")
                          .delayMs(200)
                          .then(function () {
                            k.aborted || (D(e), P(!1));
                          })));
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebStatusSnapshot").InvalidStatusIterator,
                    function () {
                      (R("Invalid iterator while getting next status msg"),
                        K());
                    },
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebBackendErrors").EphemeralDrop,
                    r("WAWebNoop"),
                  ),
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebStatusSnapshot").StatusLoadingError,
                    function () {
                      o("WALogger").WARN(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "No more status while preloading next status",
                          ])),
                      );
                    },
                  ),
                )
                .finally(function () {
                  w(!1);
                }));
          } else K();
        },
        Y = function (t, n) {
          var e = B.current;
          if (n) {
            if (n.ack !== o("WAWebAck").ACK.READ) {
              var r = o("WATimeUtils").unixTime(),
                a = n.id.participant;
              a && a.isPSA() && n.set("statusPSAReadTimestamp", r);
              var i = !0,
                l = o("WAWebContactCollection").ContactCollection.get(n.author);
              ((l == null ||
                (!o("WAWebContactGetters").getIsMe(l) &&
                  !o("WAWebFrontendContactGetters").getIsMyContact(l))) &&
                (i = !1),
                (i =
                  i ||
                  (o("WAWebMsgGetters").getIsNewsletterStatus(n) &&
                    o(
                      "WAWebNewsletterGatingUtils",
                    ).isNewsletterStatusReceiverEnabled())),
                t.sendReadStatus(n, r, { sendReceipt: i }));
            }
            var s =
              e == null
                ? void 0
                : e.statuses.find(function (e) {
                    return e.status === t;
                  });
            s && s.readMsgKeys.add(n.id.toString());
          }
        };
      (C(function () {
        var e = g;
        if (E) {
          var a = E,
            i = e.msgs.getModelsArray().findIndex(function (e) {
              return e.id.toString() === a.toString();
            });
          if (i !== -1) {
            B.current = new (o("WAWebStatusSnapshot").StatusSnapshot)(
              e,
              u.continuousPlay,
              a,
            );
            var l = B.current.getFirstUnread(e, !0, a);
            l.then(function (e) {
              k.aborted || (D(e), w(!1));
            })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebBackendErrors").EphemeralDrop,
                  r("WAWebNoop"),
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebStatusSnapshot").InvalidStatusIterator,
                  function () {
                    (R("Invalid iterator while loading first unread msg"),
                      o("WAWebToastManager").ToastManager.open(
                        h.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Status update not found"),
                        }),
                      ),
                      u.closeStatusViewer());
                  },
                ),
              );
          } else
            (w(!0),
              e
                .loadMore(e.totalCount)
                .then(function () {
                  w(!1);
                  var t =
                    e.msgs.getModelsArray().findIndex(function (e) {
                      return e.id.toString() === a.toString();
                    }) !== -1;
                  if (t) {
                    B.current = new (o("WAWebStatusSnapshot").StatusSnapshot)(
                      e,
                      u.continuousPlay,
                      a,
                    );
                    var n = B.current.getFirstUnread(e, !0, a);
                    n.then(function (e) {
                      k.aborted || (D(e), w(!1));
                    })
                      .catch(
                        o("WAFilteredCatch").filteredCatch(
                          o("WAWebBackendErrors").EphemeralDrop,
                          r("WAWebNoop"),
                        ),
                      )
                      .catch(
                        o("WAFilteredCatch").filteredCatch(
                          o("WAWebStatusSnapshot").InvalidStatusIterator,
                          function () {
                            (R(
                              "Invalid iterator while loading first unread msg",
                            ),
                              o("WAWebToastManager").ToastManager.open(
                                h.jsx(o("WAWebToast.react").Toast, {
                                  msg: s._(/*BTDS*/ "Status update not found"),
                                }),
                              ),
                              u.closeStatusViewer());
                          },
                        ),
                      );
                  } else
                    (L == null || L(),
                      o("WAWebToastManager").ToastManager.open(
                        h.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(/*BTDS*/ "Status update not found"),
                        }),
                      ),
                      u.closeStatusViewer());
                })
                .catch(function () {
                  (o("WAWebToastManager").ToastManager.open(
                    h.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Status update not found"),
                    }),
                  ),
                    K());
                })
                .finally(function () {
                  w(!1);
                }));
        } else {
          var t = y;
          B.current = new (o("WAWebStatusSnapshot").StatusSnapshot)(
            e,
            u.continuousPlay,
          );
          var n = B.current.getFirstUnread(e, !0, t == null ? void 0 : t.id);
          n.then(function (e) {
            k.aborted || (D(e), w(!1));
          })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebBackendErrors").EphemeralDrop,
                r("WAWebNoop"),
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebStatusSnapshot").InvalidStatusIterator,
                function () {
                  (R("Invalid iterator while loading first unread msg"),
                    o("WAWebToastManager").ToastManager.open(
                      h.jsx(o("WAWebToast.react").Toast, {
                        msg: s._(/*BTDS*/ "Status update not found"),
                      }),
                    ),
                    u.closeStatusViewer());
                },
              ),
            );
        }
      }, []),
        r("useWAWebOnUnmount")(function () {
          (f || (f = n("Promise"))).resolve().then(function () {
            (V.current.forEach(function (e) {
              e.commit();
            }),
              U.current.forEach(function (e) {
                e.commit();
              }));
          });
        }));
      var J = function () {
          var e = u.rowIdx,
            t = u.rowSection,
            n = T == null ? void 0 : T.statusIdx,
            r =
              t ===
              o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .RECENT_STORIES
                ? n
                : e;
          return r != null ? r : 0;
        },
        Z = function (t) {
          var e = u.rowSection,
            n = u.sessionId,
            r = T == null ? void 0 : T.statusIdx,
            a = J();
          if (r != null && G.current !== r && e != null) {
            var i,
              l =
                (i = U.current.get(r)) != null
                  ? i
                  : new (o("WAWebStatusRowViewWamEvent").StatusRowViewWamEvent)(
                      {
                        statusRowEntryMethod: z.current,
                        statusRowIndex: a,
                        statusRowSection: e,
                        statusRowUnreadItemCount: t.unreadCount,
                        statusRowViewCount: 0,
                        statusSessionId: n,
                        statusViewerSessionId: W.current,
                      },
                    );
            ((l.statusRowViewCount += 1), U.current.set(r, l), (G.current = r));
          }
        },
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie = b(),
        le = b(),
        se = b(),
        ue = b();
      T &&
        B.current &&
        ((ee = B.current),
        (te = ee.statuses[T.statusIdx]),
        (ne = te.status),
        Z(ne),
        (re = te.msgs[T.msgIdx]),
        ee.hasPrev(T) === !0 &&
          (oe = h.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1ey2m1c xbpklzw xr1yuqi x14z9mp x4ii5y1 x1lziwak x78zum5 x6s0dn4 x18hw5r0",
            children: h.jsx(r("WDSTooltip.react"), {
              id: ie,
              label: s._(/*BTDS*/ "Previous"),
              children: h.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcChevronLeft.react"),
                variant: "tonal",
                type: "media",
                size: "medium",
                directional: !0,
                onPress: Q,
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION,
                "aria-describedby": ie,
                "aria-label": s._(/*BTDS*/ "Previous"),
              }),
            }),
          })),
        ee.hasNext(T) === !0 &&
          (ae = h.jsx("div", {
            className:
              "x10l6tqk x13vifvy x1ey2m1c xbpklzw xr1yuqi x14z9mp x4ii5y1 x1lziwak x78zum5 x6s0dn4 x1wmwbkl",
            children: h.jsx(r("WDSTooltip.react"), {
              id: le,
              label: s._(/*BTDS*/ "Next"),
              children: h.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcChevronRight.react"),
                variant: "tonal",
                type: "media",
                size: "medium",
                directional: !0,
                onPress: function () {
                  (X(
                    o("WAWebWamEnumStatusRowEntryMethod")
                      .STATUS_ROW_ENTRY_METHOD.FOWARDS_TAP,
                  ),
                    Y(ne, re));
                },
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_MIDDLE_SECTION,
                "aria-describedby": le,
                "aria-label": s._(/*BTDS*/ "Next"),
              }),
            }),
          })));
      var ce =
          ne != null &&
          ne.id.isNewsletter() &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled(),
        de = v(null),
        me = function (t) {
          t && (de.current = t);
        },
        pe = {
          left: Q,
          right: function () {
            X(
              o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
                .FOWARDS_TAP,
            );
          },
          space: function (t) {
            var e,
              n = (e = de.current) == null ? void 0 : e.getWrapperElement();
            if (t.target instanceof HTMLElement && t.target === n) {
              var r;
              (r = de.current) == null || r.handlePlayPauseToggle();
            }
          },
        },
        _e;
      !$ &&
        !M &&
        re &&
        T &&
        te &&
        ne &&
        (_e = h.jsx(
          "div",
          {
            className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1larqbn",
            children: h.jsx(
              r("WAWebStatusPlayer.react"),
              {
                ref: me,
                status: ne,
                msg: re,
                mediaData: re.mediaData,
                msgIdx: T.msgIdx,
                totalMsgs: te.totalCount,
                markRead: Y,
                closeStatusViewer: K,
                onClickProgressBar: j,
                onNext: X,
                onPrev: Q,
                sessionId: u.sessionId,
                rowIdx: J(),
                statusPogIndex: F,
                rowSection: u.rowSection,
                viewerSessionId: W.current,
                statusItemViewMap: V.current,
                statusItemLastImpressionTimestampMap: H.current,
                statusIsUnread: !te.readMsgKeys.has(re.id.toString()),
                statusRowEntryMethod: z.current,
                viewSequenceIndexRef: q,
              },
              re.id.toString(),
            ),
          },
          re.id.toString(),
        ));
      var fe =
          (i =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? i
            : !1,
        ge = r("WAWebFbtCommon")("Close"),
        he = h.jsxs(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x10l6tqk x1eu8d0j xo2ifbc x164b614 x78zum5 x1q0g3np x6s0dn4 x1qvou4u x1s70e7g",
              },
              1: {
                className:
                  "x10l6tqk x1eu8d0j xo2ifbc x164b614 x78zum5 x1q0g3np x6s0dn4 x1qvou4u x1s70e7g x9u28bd",
              },
            }[!!fe << 0],
            {
              children: [
                ce && ne != null
                  ? h.jsx(r("WAWebStatusViewerFollowNewsletterButton.react"), {
                      statusId: ne.id,
                    })
                  : null,
                h.jsx(r("WDSTooltip.react"), {
                  id: se,
                  label: ge,
                  children: h.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcClose.react"),
                    variant: "borderless",
                    type: "media",
                    size: "medium",
                    onPress: function () {
                      return u.closeStatusViewer(!0);
                    },
                    testid: void 0,
                    tabOrder:
                      o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
                    "aria-describedby": se,
                    "aria-label": ge,
                  }),
                }),
              ],
            },
          ),
        ),
        ye = s._(/*BTDS*/ "Back"),
        Ce = h.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x10l6tqk x1eu8d0j x138ruz1 x164b614" },
              1: { className: "x10l6tqk x1eu8d0j x138ruz1 x164b614 x9u28bd" },
            }[!!fe << 0],
            {
              children: h.jsx(r("WDSTooltip.react"), {
                id: ue,
                label: ye,
                children: h.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconIcArrowBack.react"),
                  variant: "borderless",
                  type: "media",
                  size: "medium",
                  directional: !0,
                  onPress: function () {
                    return u.closeStatusViewer();
                  },
                  testid: void 0,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
                  "aria-describedby": ue,
                  "aria-label": ye,
                }),
              }),
            },
          ),
        ),
        be;
      return (
        M &&
          (be = h.jsx("div", {
            className:
              "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1pju0fl x10wjd1d xr1yuqi x11t971q x4ii5y1 xvc5jky",
            children: h.jsx("button", {
              children: h.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4,
                color: "white",
              }),
            }),
          })),
        h.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: l,
          handlers: pe,
          children: h.jsxs("div", {
            className:
              "x10l6tqk x13vifvy x1o0tod x1bpt9pm xh8yej3 x5yr21d x1280gxy",
            "data-animate-status-viewer": !0,
            children: [
              Ce,
              he,
              oe,
              ae,
              be,
              h.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "status-player",
                appear: !0,
                children: _e,
              }),
            ],
          }),
        })
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"), (l.default = L));
  },
  226,
);
